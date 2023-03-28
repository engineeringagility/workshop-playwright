import { test, expect } from "@playwright/test";

test.use({ testIdAttribute: "data-test" });

test("purchase items", async ({ page }) => {
  await page.goto("https://www.saucedemo.com");

  await page.getByTestId("username").fill("standard_user");
  await page.getByTestId("password").fill("secret_sauce");

  await page.getByTestId("login-button").click();
  await page.getByTestId("add-to-cart-sauce-labs-backpack").click();

  await page.locator(".shopping_cart_link").click();

  await page.getByText("Your Cart").waitFor();

  expect(await page.locator(".cart_item").all()).toHaveLength(1);

  /* Act 1 Scene 2
   *
   * complete the checkout process
   */
});
