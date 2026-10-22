const fs=require('node:fs');
const path=require('node:path');
const {pathToFileURL}=require('node:url');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'../tools/node_modules/playwright');
const root=path.resolve(__dirname,'../..');
(async()=>{
 const browser=await chromium.launch({headless:true,executablePath:process.env.CHROMIUM_EXECUTABLE,args:['--disable-gpu']});
 try{
  const page=await browser.newPage({viewport:{width:1280,height:1000}});
  await page.goto(pathToFileURL(path.join(__dirname,'report.html')).href,{waitUntil:'load',timeout:20000});
  await page.emulateMedia({media:'print'});
  await page.evaluate(()=>document.fonts.ready);
  const layout=await page.locator('.page').evaluateAll(els=>els.map((el,i)=>({section:i+1,height:el.getBoundingClientRect().height,width:el.getBoundingClientRect().width,textChars:el.textContent.length})));
  const pdf=path.join(root,'A06_submit','gill_elizaveta_a06_report.pdf');
  await page.pdf({path:pdf,format:'A4',printBackground:true,preferCSSPageSize:true,displayHeaderFooter:true,headerTemplate:'<span></span>',footerTemplate:'<div style="font-size:8px;width:100%;text-align:center;color:#61717c">A06 · Elizaveta Gill · <span class="pageNumber"></span> / <span class="totalPages"></span></div>',timeout:30000});
  fs.writeFileSync(path.join(__dirname,'pdf-build.json'),JSON.stringify({browser:browser.version(),playwright:require((process.env.PLAYWRIGHT_MODULE||'../tools/node_modules/playwright')+'/package.json').version,node:process.version,layout,pdf,gpuDisabled:true},null,2)+'\n');
  console.log(JSON.stringify({layout,pdf}));
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
