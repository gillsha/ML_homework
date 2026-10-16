/* Run from any directory. Dependency: playwright@1.64.1 (installed externally
 * or available through normal Node resolution). See IMPLEMENTATION_NOTES.md.
 * This runner NEVER trains on MovieLens. Training checks use synthetic data.
 */
const fs = require('node:fs');
const path = require('node:path');
const http = require('node:http');
const crypto = require('node:crypto');
const { execFileSync } = require('node:child_process');
const playwrightPath = process.env.PLAYWRIGHT_MODULE || 'playwright';
const { chromium } = require(playwrightPath);
const root = path.resolve(__dirname, '..');
const mime = {'.html':'text/html', '.js':'application/javascript', '.css':'text/css'};
const evidence = {stage:'implementation correctness only; no MovieLens model training',
  verificationAuthor:'AI agent; no student personal verification claimed',
  node:process.version, playwright:require(path.join(path.dirname(require.resolve(playwrightPath)),'package.json')).version,
  logs:[]};
const server = http.createServer((req,res)=> {
  const url = new URL(req.url,'http://localhost');
  const filename = path.resolve(root,'.'+decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname));
  if(!filename.startsWith(root+path.sep)) {res.writeHead(403);return res.end();}
  fs.readFile(filename,(error,bytes)=> {
    if(error) {res.writeHead(404);return res.end();}
    res.setHeader('Content-Type',mime[path.extname(filename)] || 'text/plain');res.end(bytes);
  });
});
(async()=> {
  execFileSync(process.env.PYTHON || 'python3',[path.join(__dirname,'check-data.py')]);
  const independent = JSON.parse(fs.readFileSync(path.join(root,'evidence/data-statistics.json'),'utf8'));
  await new Promise(resolve=>server.listen(0,'127.0.0.1',resolve));
  let browser;
  try {
    browser = await chromium.launch({headless:true,
      ...(process.env.CHROMIUM_EXECUTABLE ? {executablePath:process.env.CHROMIUM_EXECUTABLE} : {})});
    evidence.browser = browser.version();
    const page = await browser.newPage();
    page.on('pageerror',e=>evidence.logs.push({type:'pageerror',message:e.message}));
    page.on('console',m=> {if(m.type()==='error') evidence.logs.push({type:'console-error',message:m.text()});});
    page.on('requestfailed',r=>evidence.logs.push({type:'requestfailed',url:r.url(),failure:r.failure()}));
    await page.goto(`http://127.0.0.1:${server.address().port}/`,{waitUntil:'networkidle'});
    await page.waitForFunction(()=>document.querySelector('#status').textContent.includes('Dataset ready'));
    evidence.environment = await page.evaluate(()=>({tfjs:tf.version.tfjs,backend:tf.getBackend(),userAgent:navigator.userAgent,seeds:MODEL_SEEDS,defaultOptions:readHyperparameters()}));
    evidence.applicationStatistics = await page.evaluate(()=>splitStatistics());
    const dataChecks=[];
    for(const name of ['train','validation','test']) {
      const a=evidence.applicationStatistics[name], b=independent.splits[name];
      for(const key of ['rawRows','eligibleRows','excludedRows','missingUserIds','missingItemIds','missingUserRows','missingItemRows']) {
        if(JSON.stringify(a[key])!==JSON.stringify(b[key])) throw new Error(`Data mismatch: ${name}.${key}`);
      }
      if(Math.abs(a.baselineRMSE-b.baselineRMSE)>1e-12) throw new Error(`Baseline mismatch: ${name}`);
      dataChecks.push({name,countsAndExclusionIdsMatch:true,baselineTolerance:1e-12});
    }
    const titles=await page.evaluate(ids=>ids.map(id=>({movieId:id,title:movieTitle(id)})),independent.encoding.accentedTitles.map(m=>m.movieId));
    if(JSON.stringify(titles)!==JSON.stringify(independent.encoding.accentedTitles)) throw new Error('Legacy title decoding differs from original bytes');
    evidence.independentComparisons={splits:dataChecks,allAccentedTitlesMatchOriginalLatin1Bytes:titles};
    await page.click('#run-tests');
    evidence.pageTestLog=await page.locator('#testLog').innerText();
    evidence.adaptedUpstream=await page.evaluate(()=>runTests());
    await page.addScriptTag({path:path.join(__dirname,'correctness.js')});
    evidence.focused=await page.evaluate(()=>runCorrectnessTests());
    evidence.finalState=await page.evaluate(()=>({modelIsNull:model===null,tensors:tf.memory().numTensors,trainingHistoryLength:trainingHistory.length}));
    if(evidence.adaptedUpstream.failed || evidence.adaptedUpstream.pending || evidence.focused.failed || evidence.logs.length) process.exitCode=1;
    if(!evidence.finalState.modelIsNull || evidence.finalState.tensors!==0) process.exitCode=1;
  } catch(e) { evidence.runnerError=e.stack;process.exitCode=1; }
  finally {
    evidence.sourceSHA256={};
    for(const name of ['script.js','data.js','index.html','readme.md','verification/correctness.js','verification/browser-check.cjs','verification/check-data.py']) {
      evidence.sourceSHA256[name]=crypto.createHash('sha256').update(fs.readFileSync(path.join(root,name))).digest('hex');
    }
    const destination=process.env.RESULTS_FILE || path.join(root,'evidence/correctness-results.json');
    fs.writeFileSync(destination,JSON.stringify(evidence,null,2)+'\n');
    console.log(JSON.stringify({resultsFile:destination, browser:evidence.browser,
      environment:evidence.environment,
      adaptedUpstream:evidence.adaptedUpstream && {passed:evidence.adaptedUpstream.passed,failed:evidence.adaptedUpstream.failed,pending:evidence.adaptedUpstream.pending},
      focused:evidence.focused && {passed:evidence.focused.passed,failed:evidence.focused.failed,
        failures:evidence.focused.checks.filter(c=>c.status!=='PASS')},
      finalState:evidence.finalState,logs:evidence.logs,runnerError:evidence.runnerError},null,2));
    if(browser) await browser.close();
    server.close();
  }
})();
