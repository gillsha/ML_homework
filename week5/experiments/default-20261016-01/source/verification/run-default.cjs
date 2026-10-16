/* Full DEFAULT MovieLens experiment. Refuses to reuse an experiment directory.
 * Optional positional argument: a NEW experiment name. Never use this runner
 * for tuning: configuration is asserted against the instructor defaults.
 */
const fs=require('node:fs'),path=require('node:path'),http=require('node:http');
const crypto=require('node:crypto'),os=require('node:os');
const {execFileSync}=require('node:child_process');
const modulePath=process.env.PLAYWRIGHT_MODULE||'playwright';
const {chromium}=require(modulePath);
const root=path.resolve(__dirname,'..');
const name=process.argv[2]||'default-20261016-01';
if(!/^[a-zA-Z0-9_-]+$/.test(name)) throw new Error('Invalid experiment name');
const out=path.join(root,'experiments',name);
fs.mkdirSync(path.dirname(out),{recursive:true});
fs.mkdirSync(out); // EEXIST is intentional: never overwrite a prior attempt.
const save=(filename,value)=>fs.writeFileSync(path.join(out,filename),JSON.stringify(value,null,2)+'\n',{flag:'wx'});
const hash=filename=>crypto.createHash('sha256').update(fs.readFileSync(filename)).digest('hex');
const events=[];
const event=value=> {
  const entry={time:new Date().toISOString(),...value}; events.push(entry);
  fs.appendFileSync(path.join(out,'progress.ndjson'),JSON.stringify(entry)+'\n');
  fs.writeFileSync(path.join(out,'status.json'),JSON.stringify(entry,null,2)+'\n');
  console.log(JSON.stringify(entry));
};
const config={factors:16,epochs:20,lr:.01,reg:.05,batchSize:64,seeds:{users:5101,items:5102,shuffle:5103}};
const frozenFiles=['script.js','data.js','index.html','style.css','readme.md','u.data','u.item',
  'verification/correctness.js','verification/experiment-diagnostics.js','verification/run-default.cjs','verification/verify-experiment.py'];
const freeze={name,startedAt:new Date().toISOString(),config,
  sourceAndDataSHA256:Object.fromEntries(frozenFiles.map(f=>[f,hash(path.join(root,f))])),
  git:{head:execFileSync('git',['rev-parse','HEAD'],{cwd:root,encoding:'utf8'}).trim(),
    status:execFileSync('git',['status','--porcelain=v1','--untracked-files=all'],{cwd:root.parent||path.dirname(root),encoding:'utf8'}),
    remotes:execFileSync('git',['remote','-v'],{cwd:root,encoding:'utf8'})},
  runtime:{node:process.version,playwright:require(path.join(path.dirname(require.resolve(modulePath)),'package.json')).version,
    python:execFileSync('python3',['--version'],{encoding:'utf8'}).trim(),platform:process.platform,architecture:process.arch,osRelease:os.release(),cpu:os.cpus()[0].model},
  conventions:{prediction:'training mean + 16-dimensional dot product',training:'observed training rows, raw-prediction batch mean MSE + reg * whole-matrix squared-norm sum',
    ratingEvaluation:'clip [1,5]; training-observed users/items; identical baseline/MF rows',
    ranking:'raw float32 TF.js matMul scores; ascending item ID on exact ties',
    split:'per-user timestamp then movie ID; floor(.8*n), floor(.1*n), remainder; ties can cross boundaries',
    candidates:'training-observed movies with metadata minus user training/validation history',
    recall:'test ratings >=4 intersect user candidates; arithmetic mean over eligible users'},
  instrumentation:'Runtime wrappers observe initialization/trainMF/RMSE; read-only norm and scoring diagnostics; no RNG draws or optimizer modifications',
  verificationAuthor:'AI agent; student personal verification pending'};
save('setup.json',freeze);
for(const f of frozenFiles.filter(f=>!['u.data','u.item'].includes(f))) {
  const destination=path.join(out,'source',f);
  fs.mkdirSync(path.dirname(destination),{recursive:true});fs.copyFileSync(path.join(root,f),destination,fs.constants.COPYFILE_EXCL);
}
const logs=[];
const server=http.createServer((req,res)=> {
  const u=new URL(req.url,'http://localhost');
  const file=path.resolve(root,'.'+decodeURIComponent(u.pathname==='/'?'/index.html':u.pathname));
  if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end();}
  fs.readFile(file,(error,data)=>{
    if(error){res.writeHead(404);return res.end();}
    res.setHeader('Content-Type',({'.html':'text/html','.js':'application/javascript','.css':'text/css'})[path.extname(file)]||'text/plain');res.end(data);
  });
});
(async()=> {
  let browser,heartbeat;
  try {
    event({type:'starting'});
    await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
    browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_EXECUTABLE?{executablePath:process.env.CHROMIUM_EXECUTABLE}:{})});
    const page=await browser.newPage({viewport:{width:1440,height:1100},acceptDownloads:true});
    page.setDefaultTimeout(120000);page.setDefaultNavigationTimeout(120000);
    page.on('console',m=>{
      if(m.text().startsWith('HW5_EXPERIMENT '))event(JSON.parse(m.text().slice(15)));
      else if(['error','warning'].includes(m.type()))logs.push({type:m.type(),text:m.text()});
    });
    page.on('pageerror',e=>logs.push({type:'pageerror',text:e.stack}));
    page.on('requestfailed',r=>logs.push({type:'requestfailed',url:r.url(),failure:r.failure()}));
    const loadStart=performance.now();
    await page.goto(`http://127.0.0.1:${server.address().port}/`,{waitUntil:'networkidle'});
    await page.waitForFunction(()=>document.querySelector('#status').textContent.includes('Dataset ready'));
    const loadingMs=performance.now()-loadStart;
    const environment=await page.evaluate(()=>({tfjs:tf.version.tfjs,backend:tf.getBackend(),userAgent:navigator.userAgent,
      tfEnvironment:tf.env().getFlags(),config:{factors:NUM_FACTORS,...readHyperparameters(),seeds:MODEL_SEEDS}}));
    if(JSON.stringify(environment.config)!==JSON.stringify(config))throw new Error('Default configuration mismatch');
    save('environment.json',{...freeze.runtime,...environment,browser:browser.version(),loadingMs});
    // Select users from eligibility ALONE, before tests or model initialization.
    const selection=await page.evaluate(()=> {
      const ids=trainingIds(),metadata=new Set(movies.map(m=>m.id)),seen=new Map(),relevant=new Map();
      for(const r of [...trainSet,...valSet]){if(!seen.has(r.userId))seen.set(r.userId,new Set());seen.get(r.userId).add(r.movieId);}
      for(const r of testSet)if(r.rating>=4&&ids.users.has(r.userId)&&ids.items.has(r.movieId)&&metadata.has(r.movieId)&&!seen.get(r.userId)?.has(r.movieId)) {
        if(!relevant.has(r.userId))relevant.set(r.userId,new Set());relevant.get(r.userId).add(r.movieId);
      }
      const chosen=[1,2].every(id=>relevant.has(id))?[1,2]:[...relevant.keys()].sort((a,b)=>a-b).slice(0,2);
      return {chosenUsers:chosen,substitution:chosen.join(',')!=='1,2',reason:'User instruction; eligibility only, before model performance or recommendations',
        eligibleUsers:relevant.size,selectedRelevantCounts:chosen.map(userId=>({userId,count:relevant.get(userId).size})),modelIsNull:model===null};
    });
    save('preselection.json',{...selection,selectedAt:new Date().toISOString()});event({type:'users-preselected',...selection});
    const testStart=performance.now();
    const upstream=await page.evaluate(()=>runTests());
    await page.addScriptTag({path:path.join(__dirname,'correctness.js')});
    const focused=await page.evaluate(()=>runCorrectnessTests());
    const testsMs=performance.now()-testStart;
    save('pretraining-tests.json',{upstream,focused,testsMs});
    if(upstream.failed||upstream.pending||focused.failed)throw new Error('Pretraining correctness checks failed');
    save('population-before-training.json',await page.evaluate(()=>({splits:splitStatistics(),trainingMean:trainSet.reduce((s,r)=>s+r.rating,0)/trainSet.length,tensors:tf.memory().numTensors})));
    await page.addScriptTag({path:path.join(__dirname,'experiment-diagnostics.js')});
    await page.evaluate(()=>installExperimentInstrumentation());
    event({type:'full-training-starting',testsMs,loadingMs});
    heartbeat=setInterval(()=>event({type:'runner-heartbeat',note:'Node runner alive; actual epoch progress recorded separately'}),30000);
    const pipelineStart=performance.now();
    await page.evaluate(()=>document.getElementById('train').click());
    const pipelineWallMs=performance.now()-pipelineStart;
    clearInterval(heartbeat);heartbeat=null;
    const trained=await page.evaluate(()=>({lastRun,status:document.getElementById('status').textContent,
      ratingDisplay:document.getElementById('rating-results').textContent,
      timing:__experiment.timing,initializationDiagnostics:__experiment.diagnostics.initialization,
      memory:tf.memory(),restoredValidationRMSE:computeRMSEFor(eligibleSplit(valSet).rows)}));
    if(!trained.lastRun||trained.lastRun.history.length!==20)throw new Error('Training did not complete: '+trained.status);
    save('training.json',{...trained,pipelineWallMs,loadingMs,testsMs,
      durationDefinition:'trainMF wall time includes batches, epoch metrics, checkpoint copying/restoration, logging; excludes loading, tests, initialization diagnostics and later evaluation'});
    save('restored-diagnostics.json',await page.evaluate(()=>diagnoseState('restored validation-selected checkpoint')));
    // Save exact float32 factors, little-endian, without decimal quantization.
    const factors=await page.evaluate(()=>({user:Array.from(model.userFactors.dataSync()),item:Array.from(model.itemFactors.dataSync()),
      userShape:model.userFactors.shape,itemShape:model.itemFactors.shape,globalMean:model.globalMean,selectedEpoch:model.selectedEpoch}));
    for(const key of ['user','item']) {
      const buffer=Buffer.alloc(factors[key].length*4);factors[key].forEach((x,i)=>buffer.writeFloatLE(x,i*4));
      fs.writeFileSync(path.join(out,key+'-factors.f32'),buffer,{flag:'wx'});
    }
    save('model.json',{dtype:'float32',byteOrder:'little-endian',userShape:factors.userShape,itemShape:factors.itemShape,
      globalMean:factors.globalMean,selectedEpoch:factors.selectedEpoch,
      hashes:Object.fromEntries(['user','item'].map(k=>[k,hash(path.join(out,k+'-factors.f32'))]))});
    const recallStart=performance.now();
    await page.click('#recall-btn');
    const recall=await page.evaluate(()=>({...lastRun.retrieval,perUser:lastRun.retrieval.perUser.map(u=>({...u,recall:u.hit/u.relevant}))}));
    save('recall.json',{...recall,evaluatedUsers:recall.perUser.length,evaluationWallMs:performance.now()-recallStart});
    if(recall.perUser.length!==861)throw new Error('Unexpected Recall population: '+recall.perUser.length);
    for(const userId of selection.chosenUsers) {
      await page.selectOption('#user-select',String(userId));await page.click('#recommend-btn');
      const result=await page.evaluate(userId=> {
        const meta=new Map(movies.map(m=>[m.id,m]));
        const context=recommendationContext(),eligible=new Set(candidateIds(userId,context));
        const relevant=testSet.filter(r=>r.userId===userId&&r.rating>=4&&eligible.has(r.movieId));
        const positiveIds=new Set(relevant.map(r=>r.movieId));
        const enrich=r=>({...r,title:meta.get(r.movieId)?.title,genres:meta.get(r.movieId)?.genres});
        const recs=recommendTopK(userId,10).map(r=>({...enrich(r),eligibleRelevantTestHit:positiveIds.has(r.movieId)}));
        const train=trainSet.filter(r=>r.userId===userId).map(enrich),validation=valSet.filter(r=>r.userId===userId).map(enrich);
        const allScores=recommendTopK(userId,eligible.size).map(r=>({movieId:r.movieId,score:r.score}));
        return {userId,recommendations:recs,eligibleRelevantTest:relevant.map(enrich),candidateCount:eligible.size,
          trainingHistory:train,validationHistory:validation,
          noTrainingValidationOverlap:recs.every(r=>!context.seen.get(userId)?.has(r.movieId)),
          candidateScores:allScores,scoreType:'raw float32 model score'};
      },userId);
      save(`user-${userId}.json`,result);
      await page.locator('[aria-labelledby="recommendations-heading"]').screenshot({path:path.join(out,`user-${userId}-recommendations.png`)});
    }
    const downloadPromise=page.waitForEvent('download');await page.click('#save-results');
    const download=await downloadPromise;await download.saveAs(path.join(out,'exported-results.json'));
    await page.locator('[aria-labelledby="training-heading"]').screenshot({path:path.join(out,'training-results.png')});
    await page.locator('[aria-labelledby="split-summary-heading"]').screenshot({path:path.join(out,'split-results.png')});
    await page.locator('#recall-results > p').first().screenshot({path:path.join(out,'recall-summary.png')});
    save('browser-display.json',await page.evaluate(()=>({status:document.getElementById('status').textContent,
      ratingResults:document.getElementById('rating-results').textContent,
      recallSummary:document.querySelector('#recall-results > p').textContent,
      recallExclusions:document.querySelector('#recall-results > p.hint').textContent,
      trainingTable:document.getElementById('training-curve').innerText})));
    save('final-state.json',await page.evaluate(()=> {
      const before=tf.memory();disposeModel();return {beforeDisposal:before,afterDisposal:tf.memory(),allHistoryFinite:trainingHistory.every(r=>Number.isFinite(r.trainRMSE)&&Number.isFinite(r.valRMSE))};
    }));
    save('browser-log.json',logs);
    for(const [f,digest] of Object.entries(freeze.sourceAndDataSHA256))if(hash(path.join(root,f))!==digest)throw new Error('Source changed during run: '+f);
    event({type:'browser-run-complete',selectedEpoch:trained.lastRun.selectedEpoch,trainingWallMs:trained.timing.trainingWallMs,recall:recall.overallRecall});
  } catch(error) {
    save('failure.json',{message:error.message,stack:error.stack,logs});event({type:'failed',message:error.message});process.exitCode=1;
  } finally {if(heartbeat)clearInterval(heartbeat);if(browser)await browser.close();server.close();}
})().catch(error=>{event({type:'fatal',message:error.stack});process.exitCode=1;server.close();});
