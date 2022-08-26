const puppeteer = require("puppeteer");
const express = require("express");
const fs = require("fs");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/", async (req, res) => {
  const { url, path, type = "jpeg", clip } = req.body;

  if (!fs.existsSync(path)) {
    const browser = await puppeteer.launch({
      headless: true,
      slowMo: 0,
      args: [
        "--no-zygote",
        "--no-sandbox",
        "--disable-gpu",
        "--no-first-run",
        "--single-process",
        "--disable-extensions",
        "--disable-xss-auditor",
        "--disable-dev-shm-usage",
        "--disable-popup-blocking",
        "--disable-setuid-sandbox",
        "--disable-accelerated-2d-canvas",
        "--enable-features=NetworkService",
      ],
    });
    const page = await browser.newPage();

    await page.goto(url);

    await page.screenshot({ path, type, clip });

    await browser.close();
  }

  res.send({ data: path });
});

app.listen(3003, () => {
  console.log("listening...");
});
