import { chromium } from 'playwright';
const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage();
await page.setViewportSize({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 20000 });
await page.waitForTimeout(5500);

// Slow scroll to trigger GSAP
const ph = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y <= ph; y += 80) {
  await page.evaluate(s => window.scrollTo(0, s), y);
  await page.waitForTimeout(20);
}
await page.waitForTimeout(1000);

const sections = ['home', 'about', 'projects', 'services', 'process', 'contact'];
for (const id of sections) {
  const y = await page.evaluate(id => {
    const el = document.getElementById(id);
    return el ? el.getBoundingClientRect().top + window.scrollY : null;
  }, id);
  if (y !== null) {
    await page.evaluate(y => window.scrollTo(0, y), y);
    await page.waitForTimeout(600);
    await page.screenshot({ path: `/tmp/arise-screenshots/new_${id}.png` });
  }
}

// Testimonials + footer (no id)
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight - 1800));
await page.waitForTimeout(600);
await page.screenshot({ path: '/tmp/arise-screenshots/new_testimonials.png' });

await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(600);
await page.screenshot({ path: '/tmp/arise-screenshots/new_footer.png' });

await browser.close();
console.log('Done');
