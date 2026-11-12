const {chromium}=require('playwright');
const fs=require('fs');
(async()=>{
const browser=await chromium.launch();
fs.mkdirSync('screenshots',{recursive:true});let report=[];
for(const lang of ['en','zh'])for(const width of [1440,390]){
 const page=await browser.newPage({viewport:{width,height:1000},deviceScaleFactor:1});let errors=[],failed=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.url().startsWith('http://localhost')&&r.status()>=400)failed.push(r.url())});
 await page.goto('http://localhost:4321/Circle-of-Life/'+(lang==='zh'?'zh/':'')+'virtual-cell-paradox/',{waitUntil:'networkidle'});
 const text=await page.locator('#vcp-root').innerText();if(lang==='en'&&/[\p{Script=Han}]/u.test(text))throw Error('Untranslated English text');
 const overflow=await page.evaluate(()=>({page:document.documentElement.scrollWidth,viewport:innerWidth}));
 if(overflow.page>width)throw Error('Page overflows at '+width);
 await page.screenshot({path:`screenshots/${lang}-${width}-page.png`});
 // Arithmetic must distinguish composition from within-cell change.
 await page.locator('#leanImm').fill('20');await page.locator('#obeseImm').fill('60');await page.locator('#cellChange').fill('0');
 if(await page.locator('#leanMean').innerText()!=='3.20'||await page.locator('#obeseMean').innerText()!=='5.60')throw Error('Composition default');
 await page.locator('#cellChange').fill('2');if(await page.locator('#obeseMean').innerText()!=='7.60')throw Error('Composition change');await page.locator('#cellChange').fill('0');
 await page.locator('#compositionBars').scrollIntoViewIfNeeded();await page.screenshot({path:`screenshots/${lang}-${width}-interactive.png`});
 // Every slider gets both endpoints, and its rendered output must change.
 for(const input of await page.locator('input[type=range]').all()){
  const min=await input.getAttribute('min'),max=await input.getAttribute('max');
  await input.fill(min);const a=await page.locator('#vcp-root').innerText();await input.fill(max);const b=await page.locator('#vcp-root').innerText();if(a===b)throw Error('Inert slider '+await input.getAttribute('id'));
 }
 for(const box of await page.locator('input[type=checkbox]').all()){const a=await page.locator('#vcp-root').innerText();await box.setChecked(!await box.isChecked());const b=await page.locator('#vcp-root').innerText();if(a===b&&!(await box.getAttribute('id')||'').match(/krasMut|p53Dead/))throw Error('Inert checkbox');}
 for(const select of await page.locator('select').all())for(const opt of await select.locator('option').all())await select.selectOption(await opt.getAttribute('value'));
 for(const button of await page.locator('[data-metric],.quiz').all())await button.click();
 await page.locator('#region').selectOption('all');await page.locator('#sector').selectOption('all');
 for(const summary of await page.locator('details summary').all())await summary.click();
 if(lang==='en'&&/[\p{Script=Han}]/u.test(await page.locator('#vcp-root').innerText()))throw Error('Untranslated generated content');
 await page.locator('#geneSelect').selectOption('egfr');await page.locator('#krasMut').uncheck();const wt=await page.locator('#pathwayGauges').innerText();await page.locator('#krasMut').check();if(wt===await page.locator('#pathwayGauges').innerText())throw Error('KRAS bypass inert');
 await page.locator('#geneSelect').selectOption('mdm2');await page.locator('#p53Dead').uncheck();const functional=await page.locator('#pathwayGauges').innerText();await page.locator('#p53Dead').check();if(functional===await page.locator('#pathwayGauges').innerText())throw Error('p53 loss inert');
 await page.locator('#theme').click();if(await page.locator('#vcp-root').getAttribute('class')==='light')throw Error('Theme inert');await page.locator('#theme').click();
 const broken=await page.locator('#vcp-root a[href^="#"]').evaluateAll(as=>as.filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.hash));
 await page.locator('body > header .lang-toggle a').click();if(await page.locator('html').getAttribute('lang')===lang)throw Error('Language switch');
 if(errors.length||failed.length||broken.length)throw Error(JSON.stringify({errors,failed,broken}));
 report.push({lang,width,overflow,errors,failed,broken,controls:'all sliders/endpoints, checkboxes, select options, metrics, quiz, company details, theme, paired language route passed'});await page.close();
}
for(const route of ['', 'zh/', 'blog/', 'zh/blog/']){const p=await browser.newPage();await p.goto('http://localhost:4321/Circle-of-Life/'+route);if(await p.locator('a[href$="virtual-cell-paradox/"]').count()===0)throw Error('Missing feature '+route);await p.close()}
fs.writeFileSync('qa-results.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));await browser.close();
})();
