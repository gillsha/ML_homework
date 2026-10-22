// Portable bounded GPU verification; never trains MF or modifies application sources.
// Requires playwright1.62.1 and a GPU-capable Chromium. See README for environment variables.
const fs=require('node:fs'),path=require('node:path'),http=require('node:http'),crypto=require('node:crypto');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
const arg=(name,fallback)=>{let i=process.argv.indexOf('--'+name);return i<0?fallback:process.argv[i+1];};
const root=path.resolve(arg('root',path.join(__dirname,'..'))),results=path.resolve(arg('results',path.join(root,'results'))),out=path.resolve(arg('output','browser-verification.json')),mode=arg('mode','comparison');
const hash=b=>crypto.createHash('sha256').update(b).digest('hex');
let browser,server;const errors=[],started=Date.now(),timing=[];const deadline=setTimeout(()=>{console.error('170 second job limit');if(browser)browser.close();process.exit(2);},170000);
(async()=>{
 let url=arg('url',null);
 if(!url){server=http.createServer((req,res)=>{const pathname=new URL(req.url,'http://localhost').pathname;const file=path.resolve(root,'.'+(pathname==='/'?'/index.html':decodeURIComponent(pathname)));if(!file.startsWith(root+path.sep)){res.writeHead(403);return res.end();}fs.readFile(file,(e,b)=>{if(e){res.writeHead(404);return res.end();}res.setHeader('Content-Type',({'.js':'application/javascript','.html':'text/html','.css':'text/css'})[path.extname(file)]||'text/plain');res.end(b);});});await new Promise(r=>server.listen(0,'127.0.0.1',r));url=`http://127.0.0.1:${server.address().port}/`;}
 browser=await chromium.launch({headless:true,args:['--use-angle=metal','--enable-gpu'],executablePath:process.env.CHROMIUM_EXECUTABLE});const page=await browser.newPage({acceptDownloads:true});page.on('pageerror',e=>errors.push({type:'pageerror',message:e.message}));page.on('console',m=>{if(m.type()==='error')errors.push({type:'console',message:m.text(),location:m.location()});});
 await page.goto(url,{waitUntil:'networkidle',timeout:30000});await page.waitForFunction(()=>typeof HW6_STATE!=='undefined'&&HW6_STATE.loaded,{},{timeout:30000});
 const appHashes={};for(const file of ['index.html','data.js','graph.js','script.js','style.css','u.data','u.item','vendor/d3.min.js']){const response=await page.request.get(new URL(file,url).href);if(!response.ok())throw Error('App file unavailable: '+file);const digest=hash(await response.body());appHashes[file]=digest;if(digest!==hash(fs.readFileSync(path.join(root,file))))throw Error('Served app differs: '+file);}
 await page.click('#build-graph');await page.click('#run-tests');
 const initial=await page.evaluate(()=>({checks:HW6_STATE.lastVerification,backend:tf.getBackend(),version:tf.version.tfjs,renderer:tf.backend().gpgpu.gl.getParameter(tf.backend().gpgpu.gl.getExtension('WEBGL_debug_renderer_info').UNMASKED_RENDERER_WEBGL),memory:tf.memory(),mfTrained:MF_INFO.trainedAt!==null}));
 if(initial.backend!=='webgl'||initial.checks.failed||initial.checks.pending||initial.mfTrained)throw Error('Backend, self-check or unwanted MF training failure');
 let result;
 if(mode==='propagation'){
  const alpha=Number(arg('alpha','.95')),start=Number(arg('start','0')),end=Number(arg('end','128'));if(end-start>128||start<0||end>943)throw Error('Use at most128 users per job');
  result=await page.evaluate(({alpha,start,end})=>{const before=tf.memory(),t=performance.now(),g=hw6ActiveGraph(),val=new Set(hw6SharedCohort('val')),test=new Set(hw6SharedCohort('test'));const rows=g.userIds.slice(start,end).map(userId=>{const r=personalizedPageRank(userId,alpha);return {userId,inValidation:val.has(userId),inTest:test.has(userId),iterations:r.iterations,residual:r.residual,converged:r.converged,p:Array.from(r.p)};});return {alpha,start,end,rows,elapsedMs:performance.now()-t,before,after:tf.memory()};},{alpha,start,end});
 }else if(mode==='smoke'){result={selfChecksOnly:true};
 }else{
  const dir=path.join(results,'models/hw6-supplied'),m=JSON.parse(fs.readFileSync(path.join(dir,'model.json'),'utf8'));
  const readFactors=(name,key)=>{const b=fs.readFileSync(path.join(dir,name));if(hash(b)!==m.hashes[key])throw Error('Factor hash mismatch');return Array.from({length:b.length/4},(_,i)=>b.readFloatLE(i*4));};
  const factors={m,user:readFactors('user-factors.f32','user'),item:readFactors('item-factors.f32','item')};
  await page.evaluate(({m,user,item})=>{if(HW6_MF_MODEL)throw Error('Unexpected existing MF');HW6_MF_MODEL=tf.tidy(()=>({userFactors:tf.variable(tf.tensor2d(user,m.userShape)),itemFactors:tf.variable(tf.tensor2d(item,m.itemShape)),globalMean:m.globalMean}));Object.assign(MF_INFO,m.MF_INFO);},factors);
  const before=await page.evaluate(()=>tf.memory());let t=Date.now();await page.click('#alpha-sweep-btn',{timeout:90000});
  const sweep=await page.evaluate(()=>({rows:HW6_STATE.alphaSweepRows,slider:hw6ReadAlpha()}));timing.push({job:'validation sweep',seconds:(Date.now()-t)/1000});
  if(sweep.rows.some(x=>x.error))throw Error('Sweep failed');const ordered=sweep.rows.slice().sort((a,b)=>b.recall-a.recall||a.alpha-b.alpha),selected=ordered[0].alpha;if(selected!==.5)throw Error('Unexpected selected alpha');
  await page.evaluate(alpha=>hw6SetAlpha(alpha),selected);t=Date.now();const comparison=await page.evaluate(async()=>{const rows=await hw6RunComparison('test');hw6RenderComparison(rows);return {rows,slider:hw6ReadAlpha(),memory:tf.memory(),checkpoint:MF_INFO.checkpoint};});timing.push({job:'test comparison',seconds:(Date.now()-t)/1000});
  const expected=JSON.parse(fs.readFileSync(path.join(results,'primary-test-comparison.json'),'utf8')).rows;const differences=comparison.rows.map(row=>{const prior=expected.find(x=>x.method===row.method);if(row.error||row.cohortSize!==prior.cohortSize||Math.abs(row.recall-prior.recall)>1e-12||row.alpha!==prior.alpha)throw Error('Comparison mismatch: '+row.method);return {method:row.method,recallDifference:row.recall-prior.recall,meanPopularityDifference:row.meanPopularity-prior.meanPopularity};});
  if(before.numTensors!==comparison.memory.numTensors)throw Error('Tensor count changed');
  const nativeDir=out.replace(/\.json$/,'')+'-exports';fs.mkdirSync(nativeDir,{recursive:true});const exports=[];
  for(const [button,name] of [['export-verification','verification.json'],['export-results','results.csv']]){const pending=page.waitForEvent('download');await page.click('#'+button);const d=await pending;const target=path.join(nativeDir,name);await d.saveAs(target);exports.push({name,sha256:hash(fs.readFileSync(target))});}
  result={sweep,selectedAlpha:selected,comparison,differences,checkpointSource:'Packaged unchanged supplied-MF checkpoint1 restored from verified float32 factors; no training.',memoryBefore:before,exports};
 }
 const evidence={mode,url:arg('url',null)||'local HTTP server',browser:browser.version(),initial,appHashes,result,timing,errors,elapsedSeconds:(Date.now()-started)/1000};fs.mkdirSync(path.dirname(out),{recursive:true});fs.writeFileSync(out,JSON.stringify(evidence,null,2)+'\n');console.log(JSON.stringify({output:path.basename(out),backend:initial.backend,checks:initial.checks.passed,errors:errors.length,elapsedSeconds:evidence.elapsedSeconds}));if(errors.length)process.exitCode=1;
})().catch(e=>{console.error(e.message);process.exitCode=1;}).finally(async()=>{clearTimeout(deadline);if(browser)await browser.close();if(server)server.close();});
