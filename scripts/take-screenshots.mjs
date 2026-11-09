import puppeteer from "D:/look close/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js";
import fs from "fs";
import path from "path";

async function run() {
  const browser = await puppeteer.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  console.log("Navigating to http://localhost:3003 ...");
  await page.goto("http://localhost:3003", { waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 2000));

  const outDir = "d:/my website 3/screenshots";
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // 1. Hero
  await page.screenshot({ path: path.join(outDir, "01-hero.png") });
  console.log("Captured 01-hero.png");

  // 2. Full page
  await page.screenshot({ path: path.join(outDir, "full-desktop.png"), fullPage: true });
  console.log("Captured full-desktop.png");

  // Mobile
  await page.setViewport({ width: 390, height: 844, isMobile: true, deviceScaleFactor: 2 });
  await page.reload({ waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 1500));
  await page.screenshot({ path: path.join(outDir, "mobile-hero.png") });
  console.log("Captured mobile-hero.png");

  await browser.close();
  console.log("Screenshots captured successfully!");
}

run().catch((err) => {
  console.error("Error capturing screenshots:", err);
  process.exit(1);
});
