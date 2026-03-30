import { chromium } from 'playwright';
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage();
await page.setViewportSize({ width: 1536, height: 864 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 20000 });
await page.waitForTimeout(5500);

const ph = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y <= ph; y += 100) {
  await page.evaluate(s => window.scrollTo(0,s), y);
  await page.waitForTimeout(16);
}

const servicesY = await page.evaluate(() => {
  const el = document.querySelector('#services');
  return el ? el.getBoundingClientRect().top + window.scrollY : 3000;
});
await page.evaluate(y => window.scrollTo(0, y + 100), servicesY);
await page.waitForTimeout(500);
await page.screenshot({ path: '/tmp/arise-screenshots/v4_services.png' });

await browser.close();
console.log('Done');
