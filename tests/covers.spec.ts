/**
 * Covers page — seeded covers, video placeholders, and the per-page selector.
 * Run with `npm run test:local`.
 */
import { test, expect } from '@playwright/test'

const SEEDED = ['bohemian-rhapsody', 'shape-of-my-heart', 'asking-alexandria']

test.describe('Covers — seeded content', () => {
  test('seeded covers render with band/title and a "video coming soon" placeholder', async ({ page }) => {
    await page.goto('/covers')
    await expect(page.getByTestId('covers-page')).toBeVisible()
    for (const id of SEEDED) {
      await expect(page.getByTestId(`cover-card-${id}`)).toBeVisible()
      await expect(page.getByTestId(`cover-video-placeholder-${id}`)).toBeVisible()
    }
    await expect(page.getByTestId('cover-card-bohemian-rhapsody')).toContainText('Queen')
  })
})

test.describe('Covers — pagination preference', () => {
  test('per-page selector defaults to 6', async ({ page }) => {
    await page.goto('/covers')
    await expect(page.getByTestId('covers-per-page')).toBeVisible()
    await expect(page.getByTestId('covers-per-page-6')).toHaveAttribute('aria-pressed', 'true')
    await expect(page.getByTestId('covers-per-page-12')).toHaveAttribute('aria-pressed', 'false')
    await expect(page.getByTestId('covers-per-page-24')).toHaveAttribute('aria-pressed', 'false')
  })

  test('changing per-page updates the active option', async ({ page }) => {
    await page.goto('/covers')
    await page.getByTestId('covers-per-page-24').click()
    await expect(page.getByTestId('covers-per-page-24')).toHaveAttribute('aria-pressed', 'true')
    await expect(page.getByTestId('covers-per-page-6')).toHaveAttribute('aria-pressed', 'false')
  })
})
