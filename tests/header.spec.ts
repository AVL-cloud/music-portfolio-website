/**
 * Header socials + admin-managed page visibility.
 * Run with `npm run test:local`.
 */
import { test, expect } from '@playwright/test'

test.describe('Header — social links', () => {
  const socials: [string, RegExp][] = [
    ['spotify',       /open\.spotify\.com\/.*artist/],
    ['apple-music',   /music\.apple\.com\/.*artist/],
    ['youtube',       /youtube\.com\/channel/],
    ['youtube-music', /music\.youtube\.com\/channel/],
    ['deezer',        /deezer\.com\/.*artist/],
    ['instagram',     /instagram\.com\/antoinevl\.music/],
    ['tiktok',        /tiktok\.com\/@antoine_vlieghe/],
  ]

  for (const [slug, href] of socials) {
    test(`${slug} link points to the real profile`, async ({ page }) => {
      await page.goto('/')
      const link = page.getByTestId(`header-social-${slug}`)
      await expect(link).toHaveAttribute('href', href)
    })
  }
})

test.describe('Page visibility — admin can hide pages from visitors', () => {
  test('a hidden page is dropped from the nav and returns an unavailable notice', async ({ page }) => {
    // Simulate an admin having disabled the Courses page.
    await page.addInitScript(() => {
      localStorage.setItem('swc-pages', JSON.stringify(['courses']))
    })
    await page.goto('/courses')
    await expect(page.getByTestId('page-unavailable')).toBeVisible()
    await expect(page.getByTestId('header-nav-courses')).toHaveCount(0)
    // Other pages stay visible
    await expect(page.getByTestId('header-nav-music')).toBeVisible()
  })

  test('enabled pages render normally', async ({ page }) => {
    await page.goto('/gear')
    await expect(page.getByTestId('page-unavailable')).toHaveCount(0)
    await expect(page.getByTestId('gear-page')).toBeVisible()
  })
})
