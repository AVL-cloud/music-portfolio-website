/**
 * @smoke — fast checks run on every deploy and in the daily NRT.
 * These must pass for the site to be considered healthy.
 */
import { test, expect } from '@playwright/test'

test.describe('Smoke — Home', () => {
  test('hero renders with title and CTAs', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Sonic Wave Studio/)
    await expect(page.locator('h1')).toContainText('Antoine Vlieghe')
    await expect(page.getByTestId('hero-cta-music')).toBeVisible()
    await expect(page.getByTestId('hero-cta-about')).toBeVisible()
  })

  test('header navigation is present', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByTestId('header-nav')).toBeVisible()
    await expect(page.getByTestId('header-logo')).toBeVisible()
    for (const label of ['music', 'covers', 'tabs', 'courses', 'gear', 'about', 'contact']) {
      await expect(page.getByTestId(`header-nav-${label}`)).toBeVisible()
    }
  })

  test('footer is present with key links', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByTestId('footer')).toBeVisible()
    await expect(page.getByTestId('footer-link-ultimate-guitar')).toBeVisible()
    await expect(page.getByTestId('footer-link-distrokid')).toBeVisible()
  })

  test('theme toggle is visible', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByTestId('theme-toggle')).toBeVisible()
  })
})

test.describe('Smoke — Courses', () => {
  test('courses index loads and shows chapters', async ({ page }) => {
    await page.goto('/courses')
    await expect(page.locator('h1')).toContainText('Passion')
    await expect(page.getByTestId('course-chapter-fondamentaux')).toBeVisible()
    await expect(page.getByTestId('course-chapter-accords')).toBeVisible()
    await expect(page.getByTestId('course-chapter-solfege')).toBeVisible()
  })

  test('chapter page loads with sections', async ({ page }) => {
    await page.goto('/courses/fondamentaux')
    await expect(page.locator('h1')).toContainText('Fondamentaux')
    await expect(page.getByTestId('section-toggle-anatomie-de-la-guitare')).toBeVisible()
    await expect(page.getByTestId('chapter-next')).toBeVisible()
  })
})

test.describe('Smoke — Covers', () => {
  test('covers page loads with filter bar', async ({ page }) => {
    await page.goto('/covers')
    await expect(page.locator('h1')).toContainText('Covers')
    await expect(page.getByTestId('covers-filter-bar')).toBeVisible()
    await expect(page.getByTestId('covers-page')).toBeVisible()
  })
})

test.describe('Smoke — Contact', () => {
  test('contact form is visible', async ({ page }) => {
    await page.goto('/contact')
    await expect(page.locator('h1')).toContainText('Contact')
    await expect(page.getByTestId('contact-form')).toBeVisible()
    await expect(page.getByTestId('contact-name')).toBeVisible()
    await expect(page.getByTestId('contact-email')).toBeVisible()
    await expect(page.getByTestId('contact-message')).toBeVisible()
    await expect(page.getByTestId('contact-submit')).toBeVisible()
  })
})
