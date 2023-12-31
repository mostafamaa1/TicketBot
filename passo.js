const puppeteer = require('puppeteer-extra')

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

let Password = 'Ma112112';

const passo = async function () {
    let url = 'https://www.passo.com.tr/en/event/celtic-pub-bilet-passo/5786326';
    const browser = await puppeteer.launch({headless: false,  slowmo: 200});
    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/119.0.0.0 Safari/537.36')
    await page.goto(url);

    await page.waitForTimeout(5000);
     // Scroll to the end of the page
     await page.evaluate(() => {
        window.scrollTo(0, document.body.scrollHeight / 3);
      });
    await page.waitForTimeout(5000);
    await page.$eval("button[class='red-btn']", btn => btn.click())
    await page.waitForTimeout(5000);
    await page.evaluate(() => {
      window.scrollBy(0, 160);
    });
    await page.waitForTimeout(2000);
    // await page.type("input[class='quick-input form-control mb-2 border-red ng-touched']", btn => btn.click())
    // const input = await page.$("input[class='quick-input form-control mb-2 ng-valid ng-dirty ng-touched']")
    // await input.type("mostafaahmedmaa1@gmail.com")
    // await page.waitForTimeout(1000);
    // await page.type("input[class='quick-input form-control mb-2 ng-valid ng-dirty ng-touched']", Password);
    // await page.waitForTimeout(9000);
    // await page.$eval("button[class='d-flex justify-content-end margin-top-10']", btn => btn.click())
    // await page.waitForTimeout(5000);
    // await page.select(".form-control", "1");
    
   
}();