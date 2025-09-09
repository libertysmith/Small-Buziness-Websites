import fs from 'fs';
import path from 'path';

const dist = path.resolve('dist');
const src = path.join(dist, 'index.html');
const dest = path.join(dist, '404.html');

if (!fs.existsSync(src)) {
  console.warn('[spa-fallback] dist/index.html not found (build may have failed).');
  process.exit(0);
}

fs.copyFileSync(src, dest);
console.log('[spa-fallback] Wrote dist/404.html for GitHub Pages SPA fallback.');