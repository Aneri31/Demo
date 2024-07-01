const { test, chromium } = require('@playwright/test');
const { baseURL } = require('../Configuration/config'); // Adjust path as per your project structure
const CommonUtils = require('./commonutils');

class AmazonTests extends CommonUtils {
  constructor(page) {
    super(page);
  }

  async searchProduct(productName) {
    await this.page.goto(baseURL);
    await this.page.fill('input[name="field-keywords"]', productName);
    await this.page.click('input[type="submit"]');
  }
}

test.describe('Amazon Product Tests', () => {
  let browser;

  test.beforeAll(async () => {
    browser = await chromium.launch({
      // Ensure Playwright can find Chromium executable
      executablePath: process.env.CHROMIUM_PATH || undefined,
      headless: false // Set to true for non-visual environments like CI/CD
    });
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('Login and Search Product', async ({ page }) => {
    const amazonTests = new AmazonTests(page);
    await amazonTests.searchProduct('iPhone 14');
  });

  test('Other Tests', async ({ page }) => {
    // Other test cases
  });
});
