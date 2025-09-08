import fs from "fs";
import path from "path";
import url from "url";
import sharp from "sharp";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const src = path.resolve(__dirname, "../public/hero/hero-4858x3644.jpg");
const outDir = path.resolve(__dirname, "../public/hero");

const widths = [3840, 2560, 1920, 1280, 768];

if (!fs.existsSync(src)) {
  console.error("[assets:hero] Missing source JPG at public/hero/hero-4858x3644.jpg");
  process.exit(0); // don't fail build; hero will fallback to JPG
}

fs.mkdirSync(outDir, { recursive: true });

const run = async () => {
  for (const w of widths) {
    const out = path.join(outDir, `hero-${w}.webp`);
    await sharp(src)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: 78, effort: 4 })
      .toFile(out);
    console.log("[assets:hero] Wrote", out);
  }
};

run().catch(err => { console.error(err); process.exit(1); });