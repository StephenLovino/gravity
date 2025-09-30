/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, 'public');
const srcImage = path.join(publicDir, 'hero-avatar.jpg');
const outPngNames = [16, 32, 48, 64, 180, 192, 512].map((size) => `favicon-${size}.png`);
const socialImage = 'social-share.jpg';

async function ensurePublicDir() {
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
}

async function generatePngSizes() {
  const buffers = [];
  for (const size of [16, 32, 48, 64, 180, 192, 512]) {
    const outPath = path.join(publicDir, `favicon-${size}.png`);
    await sharp(srcImage)
      .resize(size, size, { fit: 'cover' })
      .png({ compressionLevel: 9 })
      .toFile(outPath);
    if ([16, 32, 48, 64].includes(size)) {
      buffers.push(await sharp(srcImage).resize(size, size, { fit: 'cover' }).png().toBuffer());
    }
  }
  return buffers;
}

async function generateIco(pngBuffers) {
  const icoPath = path.join(publicDir, 'favicon.ico');
  const icoBuffer = await pngToIco(pngBuffers);
  fs.writeFileSync(icoPath, icoBuffer);
}

async function main() {
  await ensurePublicDir();
  if (!fs.existsSync(srcImage)) {
    console.error(`Source image not found: ${srcImage}`);
    process.exit(1);
  }
  console.log('Generating favicon PNG sizes...');
  const pngBuffers = await generatePngSizes();
  console.log('Generating favicon.ico...');
  await generateIco(pngBuffers);
  // Social image 1200x630
  console.log('Generating social image (1200x630)...');
  await sharp(srcImage)
    .resize(1200, 630, { fit: 'cover' })
    .jpeg({ quality: 88 })
    .toFile(path.join(publicDir, socialImage));
  console.log('Favicons generated in /public:', ['favicon.ico', ...outPngNames, socialImage]);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});


