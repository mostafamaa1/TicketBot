const puppeteer = require('puppeteer-extra')
require('dotenv').config();

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

 let email = process.env.email;
 let Password = process.env.pass;

const biletino = async function () {
    let url = process.env.url;
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36')
    await page.goto(url);
 
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
    await page.type("#account-signinemailpassword-password", Password);
    await page.waitForTimeout(3000);
    await page.click("#account-signinemailpassword-continue", btn => btn.click());
}();