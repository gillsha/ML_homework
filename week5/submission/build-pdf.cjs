const path=require('node:path');
const {pathToFileURL}=require('node:url');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.CHROMIUM_EXECUTABLE?{executablePath:process.env.CHROMIUM_EXECUTABLE}:{})});
 const page=await browser.newPage({viewport:{width:672,height:1010}});
 await page.goto(pathToFileURL(path.join(__dirname,'a05_report.html')).href);
 await page.emulateMedia({media:'print'});
 console.log(await page.locator('.page').evaluateAll(els=>els.map((el,i)=>({section:i+1,height:el.getBoundingClientRect().height}))));
 await page.pdf({path:path.join(__dirname,'a05_report.pdf'),format:'A4',printBackground:true,preferCSSPageSize:true,
  displayHeaderFooter:true,headerTemplate:'<span></span>',footerTemplate:'<div style="font-size:8px;width:100%;text-align:center;color:#666">A05 · Elizaveta Gill · <span class="pageNumber"></span> / <span class="totalPages"></span></div>'});
 await browser.close();console.log(path.join(__dirname,'a05_report.pdf'));
})().catch(e=>{console.error(e);process.exitCode=1});
