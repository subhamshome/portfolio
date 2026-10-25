/*
 * Post-build prerender.
 *
 * Runs the production bundle in jsdom, waits for React to render the page, and writes the resulting
 * HTML back to build/index.html. Visitors, link scrapers and crawlers that do not run JavaScript then
 * get real content immediately; in the browser, React replaces it with the live app (createRoot).
 *
 * This step is best-effort: if anything goes wrong the normal client-rendered build is left untouched
 * and the build still succeeds.
 */
const fs = require('fs');
const path = require('path');

const buildDir = path.resolve(__dirname, '..', 'build');
const indexPath = path.join(buildDir, 'index.html');

const main = async () => {
  let JSDOM, VirtualConsole;
  try {
    ({ JSDOM, VirtualConsole } = require('jsdom'));
  } catch (e) {
    console.warn('[prerender] jsdom is not installed, skipping (client-rendered build kept).');
    return;
  }
  if (!fs.existsSync(indexPath)) {
    console.warn('[prerender] build/index.html not found, skipping.');
    return;
  }

  const original = fs.readFileSync(indexPath, 'utf8');
  if (original.includes('data-prerendered')) {
    console.log('[prerender] already prerendered, skipping.');
    return;
  }

  const errors = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', (e) => errors.push(e.message));
  virtualConsole.on('error', (...args) => errors.push(args.join(' ')));

  // Scripts are run by hand ("outside-only") so no network, styles or media are ever fetched.
  const dom = new JSDOM(original, {
    url: 'http://localhost/',
    runScripts: 'outside-only',
    pretendToBeVisual: true,
    virtualConsole,
    beforeParse(window) {
      window.matchMedia =
        window.matchMedia ||
        (() => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} }));
      window.scrollTo = () => {};
      window.HTMLMediaElement.prototype.play = () => Promise.resolve();
      window.HTMLMediaElement.prototype.pause = () => {};
    },
  });

  const { document } = dom.window;
  document.querySelectorAll('script').forEach((script) => {
    const type = script.getAttribute('type');
    if (type && !/javascript|module/.test(type)) return; // e.g. JSON-LD
    const src = script.getAttribute('src');
    if (src) {
      const file = path.join(buildDir, src.replace(/^\//, ''));
      if (/\.js$/.test(file) && fs.existsSync(file)) dom.window.eval(fs.readFileSync(file, 'utf8'));
    } else if (script.textContent.trim()) {
      dom.window.eval(script.textContent);
    }
  });

  const started = Date.now();
  while (Date.now() - started < 20000) {
    const root = document.getElementById('root');
    if (root && root.querySelector('h1') && root.querySelectorAll('section').length >= 5) break;
    await new Promise((r) => setTimeout(r, 50));
  }

  const root = document.getElementById('root');
  if (!root || !root.querySelector('h1')) {
    throw new Error('the app did not render within 20s' + (errors.length ? `: ${errors[0]}` : ''));
  }

  // React sets `muted` as a property, which is not serialised. Browsers need the attribute to autoplay.
  document.querySelectorAll('video').forEach((v) => v.setAttribute('muted', ''));
  document.documentElement.setAttribute('data-prerendered', '');

  fs.writeFileSync(indexPath, dom.serialize());
  const kb = (fs.statSync(indexPath).size / 1024).toFixed(1);
  console.log(`[prerender] wrote build/index.html (${kb} kB, ${root.querySelectorAll('section').length} sections).`);
  dom.window.close();
};

main().catch((e) => {
  console.warn(`[prerender] failed, keeping the client-rendered build: ${e.message}`);
  process.exit(0);
});
