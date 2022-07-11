import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "space-portal",
  viewportWidth: 1440,
  viewportHeight: 900,
  watchForFileChanges: false,
  defaultCommandTimeout: 40000,
  requestTimeout: 60000,
  video: false,
  chromeWebSecurity: false,
  supportFolder: './src/__test__/e2e',
  videoUploadOnPasses: false,
  videoCompression: false,
  numTestsKeptInMemory: 100,
  retries: 1,
  port: 9999,
  e2e: {
    supportFile: false,
    // supportFile: './src/__test__/e2e/specs/*.spec.ts',
    baseUrl: 'http://localhost:3000',
    specPattern: './src/__test__/e2e/specs/**/*.spec.ts',
  },
  env: {
    "main": "/",
    "picture-of-the-day": "/picture-of-the-day",
    "epic-images": "/epic-images",
    "nasa-tech-port": "/nasa-tech-port",
  }
});
