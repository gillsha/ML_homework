// Optional integration checks: requires Playwright + Chromium (see README).
const assert = require('node:assert/strict');
const fs = require('node:fs/promises');
const http = require('node:http');
const path = require('node:path');
const { chromium } = require('playwright');

async function main() {
    const allowed = new Set(['index.html', 'style.css', 'script.js', 'data.js', 'cf.js', 'worker.js', 'u.item', 'u.data', 'readme.md']);
    const server = http.createServer(async (request, response) => {
        const file = new URL(request.url, 'http://localhost').pathname.slice(1) || 'index.html';
        if (!allowed.has(file)) { response.writeHead(404); response.end(); return; }
        try {
            const content = await fs.readFile(path.join(__dirname, file));
            const type = file.endsWith('.js') ? 'text/javascript' : file.endsWith('.css') ? 'text/css' : file.endsWith('.html') ? 'text/html' : 'text/plain';
            response.writeHead(200, { 'Content-Type': type });
            response.end(content);
        } catch {
            response.writeHead(500); response.end();
        }
    });
    await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
    let browser;
    try {
        browser = await chromium.launch({ headless: true });
        const page = await browser.newPage();
        const errors = [];
        page.on('pageerror', error => errors.push(error.message));
        const url = `http://127.0.0.1:${server.address().port}/`;
        const ready = () => page.waitForFunction(() => !document.getElementById('recommend-btn').disabled && !document.getElementById('recommendations').hidden);
        await page.goto(url);
        await ready();
        assert.equal(await page.locator('#user-results tr').count(), 10);
        assert.equal(await page.locator('#item-results tr').count(), 10);
        assert.equal(await page.locator('#user-select option').count(), 944);
        assert.match(await page.locator('#stats').innerText(), /93\.70%/);
        const initial = await page.locator('#user-results').innerText();
        await page.locator('#user-select').selectOption('943');
        await ready();
        assert.match(await page.locator('#comparison').innerText(), /Пользователь 943/);
        await page.locator('#user-select').selectOption('1');
        await ready();
        assert.equal(await page.locator('#user-results').innerText(), initial);
        await page.locator('#user-select').selectOption('new');
        await ready();
        assert.equal(await page.locator('#user-results').innerText(), await page.locator('#item-results').innerText());
        assert.match(await page.locator('#user-results').innerText(), /Fallback: Новый пользователь/);
        await page.locator('#evaluate-btn').click();
        await page.waitForFunction(() => !document.getElementById('evaluation').hidden);
        const metrics = await page.locator('#metrics').innerText();
        assert.match(metrics, /0\.9551/);
        assert.match(metrics, /0\.9386/);
        assert.match(metrics, /0\.9250/);
        console.log('Browser metrics:', metrics.replace(/\n/g, ' | '));
        await page.setViewportSize({ width: 390, height: 844 });
        assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > window.innerWidth), false);

        await page.route('**/u.data', route => route.fulfill({ status: 404, body: 'not found' }));
        await page.reload();
        await page.locator('#retry-btn').waitFor({ state: 'visible' });
        assert.match(await page.locator('#status').innerText(), /HTTP 404/);
        assert.equal(await page.locator('#recommend-btn').isDisabled(), true);
        assert.equal(await page.locator('#evaluate-btn').isDisabled(), true);
        assert.equal(await page.locator('#recommendations').isVisible(), false);
        await page.unroute('**/u.data');
        await page.locator('#retry-btn').click();
        await ready();

        // Raw scores 6 and 5 must rank in this order, even though both display 5/5.
        await page.route('**/u.item', route => route.fulfill({ body: [1, 2, 3, 4, 5].map(id => `${id}|Movie ${id}|`).join('\n') }));
        await page.route('**/u.data', route => route.fulfill({ body:
            [[10, 1, 3], [10, 2, 4], [10, 3, 5], [20, 1, 1], [20, 2, 2], [20, 3, 3], [20, 4, 4], [20, 5, 5]]
                .map(row => [...row, 1].join('\t')).join('\n')
        }));
        await page.reload();
        await ready();
        assert.match(await page.locator('#user-results tr').first().innerText(), /Movie 5/);
        assert.match(await page.locator('#user-results tr').first().innerText(), /5\.000 \/ 5 \(score 6\.000\)/);
        assert.match(await page.locator('#comparison').innerText(), /без clipping/);
        await page.unroute('**/u.item');
        await page.unroute('**/u.data');

        // Sparse non-sequential IDs, an unrated catalog film, and text-safe titles.
        await page.route('**/u.item', route => route.fulfill({ body: Buffer.from('10|Misérables (1995)|\n40|<img src=x onerror=alert(1)>|\n999|Unrated|', 'latin1') }));
        await page.route('**/u.data', route => route.fulfill({ body: '2\t10\t4\t1\n8\t40\t5\t1\n' }));
        await page.reload();
        await ready();
        assert.deepEqual(await page.locator('#user-select option').evaluateAll(options => options.map(option => option.value)), ['2', '8', 'new']);
        assert.equal(await page.locator('#user-results tr').count(), 1);
        assert.match(await page.locator('#user-results').innerText(), /<img src=x onerror=alert\(1\)>/);
        assert.equal(await page.locator('#user-results img').count(), 0);
        assert.match(await page.locator('#stats').innerText(), /без оценок: 1/);
        await page.locator('#user-select').selectOption('8');
        await ready();
        assert.match(await page.locator('#user-results').innerText(), /Misérables/);

        // Worker exceptions must not leave the application stuck in a busy state.
        await page.route('**/worker.js', route => route.fulfill({ contentType: 'text/javascript', body: 'throw new Error("worker test failure");' }));
        await page.reload();
        await page.locator('#retry-btn').waitFor({ state: 'visible' });
        assert.match(await page.locator('#status').innerText(), /worker test failure/);
        assert.equal(await page.locator('#app').getAttribute('aria-busy'), 'false');
        assert.equal(await page.locator('#recommendations').isVisible(), false);
        assert.equal(await page.locator('#user-select').isDisabled(), true);
        assert.deepEqual(errors, []);
        console.log('PASS: browser raw-score ranking vs clipped display, recommendations, evaluation, determinism, mobile layout, cold start, HTTP retry, sparse IDs, Latin-1, safe titles, worker failure.');
    } finally {
        if (browser) await browser.close();
        await new Promise(resolve => server.close(resolve));
    }
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
