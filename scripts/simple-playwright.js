const { chromium } = require("playwright");

const launchOptions = { headless: false, devtools: false, tracesDir: `${__dirname}/traces` }

chromium.launch(launchOptions).then(async (browser)=> {
  try {
    const page = await browser.newPage();

    async function step(number) {
      await page.screenshot({
        path: `${__dirname}/screenshots/step${number}.png`,
      });
    }

    await page.goto("https://www.saucedemo.com");
    await step(1);

    // Performing actions via ElementHandle vs Locators
    await page.locator("data-test=username").fill("standard_user");
    await page.locator("data-test=password").fill("secret_sauce");
    await step(2);

    /* Act 1 Scene 1 Optional
     * Using the previous step as an example, click the login button
     * to complete the login process and take a screen shot
     */

    // ...
    // await step(3);

  } finally {
    await browser.close();
  }
})
