// src\generate-pdf.ts

import puppeteer from "puppeteer";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

(async function generatePdf(): Promise<void> {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const browser = await puppeteer.launch({
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.goto("https://ultime-resume.vercel.app/", {
    waitUntil: "networkidle0",
  });

  const pdfPath: string = join(__dirname, "resume.pdf");
  await page.pdf({
    path: pdfPath,
    format: "A4",
    printBackground: true,
    scale: 0.3125,
  });

  await browser.close();
  console.info(`PDF generated successfully at ${pdfPath}`);
})();
