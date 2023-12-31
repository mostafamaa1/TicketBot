const express = require('express');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
require('dotenv').config();
const path = require('path');


puppeteer.use(StealthPlugin());

const app = express();
const port = 3000;

app.use(express.static('public')); // Serve static files from the 'public' directory

app.use(express.json()); // Parse JSON requests

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });

app.post('/runAutomation', async (req, res) => {
  try {
    // Your puppeteer script
    // let email = process.env.email;
    // let password = process.env.pass;
    // let url = process.env.url;

    const { email, password, url } = req.body;

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36');
    await page.goto(url);

    // Your puppeteer automation code...
    await page.waitForTimeout(3000);
    await page.click("#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll", btn => btn.click());
    await page.waitForTimeout(5000);
    await page.click("#eventdetail-layoutselection-show", btn => btn.click());
    await page.waitForTimeout(5000);
    await page.select(".currentLayoutSelect", "1");
    await page.waitForTimeout(3000);
    await page.click("#salesflow-layoutselection-buy", btn => btn.click());
    await page.waitForTimeout(5000);
    await page.type("#account-signinsimple-email", email);
    await page.waitForTimeout(3000);
    await page.click("#account-signinsimple-continue", btn => btn.click());
    await page.waitForTimeout(5000);
    await page.type("#account-signinemailpassword-password", password);
    await page.waitForTimeout(3000);
    await page.click("#account-signinemailpassword-continue", btn => btn.click());

    res.status(200).send('Automation completed successfully');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
