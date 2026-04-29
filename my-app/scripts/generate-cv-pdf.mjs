import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { PDFDocument } from 'pdf-lib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.resolve(__dirname, '..', 'public');
const inputPng = path.join(publicDir, 'images', 'portfoliocv.png');
const outputPdf = path.join(publicDir, 'CV-AUBIN-JENNIFER.pdf');

async function main() {
  const pngBytes = await fs.readFile(inputPng);
  const pdfDoc = await PDFDocument.create();

  const pngImage = await pdfDoc.embedPng(pngBytes);
  const { width, height } = pngImage.scale(1);

  const page = pdfDoc.addPage([width, height]);
  page.drawImage(pngImage, { x: 0, y: 0, width, height });

  const pdfBytes = await pdfDoc.save();
  await fs.writeFile(outputPdf, pdfBytes);
  process.stdout.write(`Generated: ${outputPdf}\n`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

