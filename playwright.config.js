const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'tests', // Adjusted relative path
  timeout: 30000,
  use: {
    // headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    ignoreHTTPSErrors: true,
  },
  workers: 1 // Number of parallel workers
});
