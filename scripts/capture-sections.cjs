const puppeteer = require("D:/look close/node_modules/puppeteer-core");
const fs = require("fs");
const path = require("path");

async function run() {
  const browser = await puppeteer.launch({
    executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  await page.goto("http://localhost:3003", { waitUntil: "networkidle2" });
  await new Promise((r) => setTimeout(r, 1500));

  const outDir = path.join(__dirname, "../screenshots");

  const sections = [
    { id: "#about", name: "02-editorial-intro.png" },
    { id: "#projects", name: "03-selected-projects.png" },
    { id: "#capabilities", name: "04-bento-capabilities.png" },
    { id: "#services", name: "05-editorial-services.png" },
    { id: "#process", name: "06-creative-process.png" },
    { id: "#technology", name: "07-tech-stack.png" },
    { id: "#about-studio", name: "08-about-studio.png" },
    { id: "#contact", name: "10-contact-conversion.png" },
  ];

  for (const s of sections) {
    const el = await page.$(s.id);
    if (el) {
      await el.screenshot({ path: path.join(outDir, s.name) });
      console.log(`Captured ${s.name}`);
    }
  }

  // Also test clicking a project to capture the modal
  const projectCard = await page.$("#projects article");
  if (projectCard) {
    await projectCard.click();
    await new Promise((r) => setTimeout(r, 800));
    await page.screenshot({ path: path.join(outDir, "11-project-modal.png") });
    console.log("Captured 11-project-modal.png");
  }

  await browser.close();
  console.log("All sections captured!");
}

run().catch(console.error);
