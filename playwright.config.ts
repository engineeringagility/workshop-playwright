import { defineConfig, devices } from "@playwright/test"

export default defineConfig( {
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  timeout: 3000,
  globalSetup: require.resolve( "./e2e/globalSetup" ),
  globalTeardown: require.resolve( "./e2e/globalTeardown" ),
  use: {
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices[ "Desktop Chrome" ] },
    },
  ],
} )
