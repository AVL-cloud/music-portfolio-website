import { defineConfig, devices } from '@playwright/test'

const BASE_URL = process.env.BASE_URL ?? 'https://sonicwavestudio.com'
const IS_LOCAL = BASE_URL.includes('localhost')

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 1,
  workers: process.env.CI ? 2 : undefined,

  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['json', { outputFile: 'playwright-report/results.json' }],
    ['list'],
  ],

  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile-safari',
      use: { ...devices['iPhone 14'] },
      // Run mobile only outside quick smoke runs
      grep: process.env.SMOKE_ONLY ? /NEVER_MATCH/ : undefined,
    },
  ],

  // Start dev server when running locally
  ...(IS_LOCAL && {
    webServer: {
      command: 'npm run dev',
      url: BASE_URL,
      reuseExistingServer: true,
      timeout: 30_000,
    },
  }),
})
