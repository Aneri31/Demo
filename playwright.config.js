const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests', // Adjusted relative path
  timeout: 30000,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
  },
  workers: 3 // Number of parallel workers
});
