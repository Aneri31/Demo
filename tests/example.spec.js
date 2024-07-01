const { test, chromium } = require('@playwright/test');
const { baseURL } = require('../Configuration/config');
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
  let page;
  let amazonTests;

  test.beforeAll(async () => {
    browser = await chromium.launch({ headless: false });
  });

  test.beforeEach(async () => {
    page = await browser.newPage();
    amazonTests = new AmazonTests(page);
  });

  test.afterEach(async () => {
    await page.close();
  });

  test.afterAll(async () => {
    await browser.close();
  });

  test('Login and Search Product', async () => {
    await amazonTests.searchProduct('iPhone 14');
  });
  
  test('Product', async () => {
    await console.log("this is demo");
  });

  test('Product1', async () => {
    await console.log("this is demo1");
  });

  test('Product2', async () => {
    await console.log("this is demo2");
  });

  test('Product23', async () => {
    await console.log("this is demo4");
  });

  test('Product293', async () => {
    await console.log("this is demo6");
  });
});
