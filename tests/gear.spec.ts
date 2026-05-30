/**
 * Gear page — sections (Instruments / Software / Hardware), items and placeholders.
 * Run with `npm run test:local`.
 */
import { test, expect } from '@playwright/test'

test.describe('Gear — sections & items', () => {
  test('page loads with all three sections', async ({ page }) => {
    await page.goto('/gear')
    await expect(page.getByTestId('gear-page')).toBeVisible()
    await expect(page.getByTestId('gear-section-instruments')).toBeVisible()
    await expect(page.getByTestId('gear-section-software')).toBeVisible()
    await expect(page.getByTestId('gear-section-hardware')).toBeVisible()
  })

  test('real gear items render with photos', async ({ page }) => {
    await page.goto('/gear')
    for (const id of ['esp-ltd-ec-1000', 'ableton-live-11', 'focusrite-scarlett-2i2', 'shure-mv88']) {
      await expect(page.getByTestId(`gear-card-${id}`)).toBeVisible()
    }
    // Real items have an <img>, not a placeholder
    await expect(page.getByTestId('gear-card-esp-ltd-ec-1000').locator('img')).toBeVisible()
  })

  test('placeholder gear items show a "photo coming soon" state', async ({ page }) => {
    await page.goto('/gear')
    for (const id of ['nylon-guitar', 'keyboard', 'studio-headset']) {
      await expect(page.getByTestId(`gear-card-${id}`)).toBeVisible()
      await expect(page.getByTestId(`gear-placeholder-${id}`)).toBeVisible()
    }
  })

  test('hardware section contains the studio headset (last added)', async ({ page }) => {
    await page.goto('/gear')
    const hardware = page.getByTestId('gear-section-hardware')
    await expect(hardware.getByTestId('gear-card-studio-headset')).toBeVisible()
  })
})
