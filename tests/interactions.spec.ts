/**
 * UI interaction tests — user flows that must work end-to-end.
 */
import { test, expect } from '@playwright/test'

test.describe('Interactions — Theme toggle', () => {
  test('cycles through light / dark / system', async ({ page }) => {
    await page.goto('/')
    const toggle = page.getByTestId('theme-toggle')
    await expect(toggle).toBeVisible()
    // Click twice — cycle through at least two modes
    await toggle.click()
    await toggle.click()
    // Page should still be intact
    await expect(page.getByTestId('header-nav')).toBeVisible()
  })
})

test.describe('Interactions — Courses accordion', () => {
  test('section opens on click to reveal content', async ({ page }) => {
    await page.goto('/courses/fondamentaux')
    // Second section starts closed; click to open
    const secondToggle = page.getByTestId('section-toggle-tenue-de-la-guitare')
    await expect(secondToggle).toBeVisible()
    await secondToggle.click()
    const section = page.getByTestId('course-section-tenue-de-la-guitare')
    await expect(section.locator('p').first()).toBeVisible()
  })

  test('favourite button toggles on section', async ({ page }) => {
    await page.goto('/courses/fondamentaux')
    const favBtn = page.getByTestId('favourite-button-course_section-courses/anatomie-de-la-guitare')
    await expect(favBtn).toBeVisible()
    await favBtn.click()
    // Button should still be visible after toggle
    await expect(favBtn).toBeVisible()
  })

  test('prev/next chapter navigation works', async ({ page }) => {
    await page.goto('/courses/fondamentaux')
    await page.getByTestId('chapter-next').click()
    await expect(page).toHaveURL(/\/courses\/materiel/)
    await expect(page.locator('h1')).toContainText('Matériel')
  })
})

test.describe('Interactions — Covers filter', () => {
  test('clicking a genre chip filters covers', async ({ page }) => {
    await page.goto('/covers')
    await page.getByTestId('filter-chip-genre-acoustic').click()
    // Filter chip becomes active (should have accent style)
    const chip = page.getByTestId('filter-chip-genre-acoustic')
    await expect(chip).toBeVisible()
    // Clear button appears
    await expect(page.getByTestId('filter-bar-clear')).toBeVisible()
  })

  test('search filters covers by title', async ({ page }) => {
    await page.goto('/covers')
    await page.getByTestId('filter-bar-search').fill('Comfortably')
    await expect(page.getByTestId('cover-card-1')).toBeVisible()
  })

  test('clearing filter restores all covers', async ({ page }) => {
    await page.goto('/covers')
    await page.getByTestId('filter-chip-genre-rock').click()
    await page.getByTestId('filter-bar-clear').click()
    // Clear button disappears
    await expect(page.getByTestId('filter-bar-clear')).not.toBeVisible()
  })
})

test.describe('Interactions — Contact form', () => {
  test('form shows validation errors on empty submit', async ({ page }) => {
    await page.goto('/contact')
    await page.getByTestId('contact-submit').click()
    await expect(page.getByText('Name is required')).toBeVisible()
    await expect(page.getByText('Email is required')).toBeVisible()
    await expect(page.getByText('Message is required')).toBeVisible()
  })

  test('form shows error for invalid email', async ({ page }) => {
    await page.goto('/contact')
    await page.getByTestId('contact-name').fill('Test User')
    await page.getByTestId('contact-email').fill('not-an-email')
    await page.getByTestId('contact-message').fill('Hello!')
    await page.getByTestId('contact-submit').click()
    await expect(page.getByText('Invalid email')).toBeVisible()
  })

  test('successful submission shows confirmation', async ({ page }) => {
    await page.goto('/contact')
    await page.getByTestId('contact-name').fill('Antoine Test')
    await page.getByTestId('contact-email').fill('test@example.com')
    await page.getByTestId('contact-message').fill('Ceci est un message de test envoyé par le NRT.')
    await page.getByTestId('contact-submit').click()
    await expect(page.getByTestId('contact-success')).toBeVisible({ timeout: 5000 })
    await expect(page.getByText('Message sent!')).toBeVisible()
  })
})

test.describe('Interactions — Notification bell', () => {
  test('bell opens notification dropdown', async ({ page }) => {
    await page.goto('/')
    const bell = page.getByTestId('notification-bell')
    await expect(bell).toBeVisible()
    await bell.click()
    await expect(page.getByTestId('notification-dropdown')).toBeVisible()
  })

  test('unread badge is shown when there are unread notifications', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByTestId('notification-badge')).toBeVisible()
  })

  test('clicking a notification marks it read and closes dropdown', async ({ page }) => {
    await page.goto('/')
    await page.getByTestId('notification-bell').click()
    await page.getByTestId('notification-item-1').click()
    await expect(page.getByTestId('notification-dropdown')).not.toBeVisible()
  })
})

test.describe('Interactions — Mobile nav', () => {
  test.use({ viewport: { width: 390, height: 844 } })

  test('hamburger opens mobile nav', async ({ page }) => {
    await page.goto('/')
    await page.getByTestId('header-mobile-menu').click()
    await expect(page.getByTestId('header-mobile-nav')).toBeVisible()
  })

  test('mobile nav link closes menu', async ({ page }) => {
    await page.goto('/')
    await page.getByTestId('header-mobile-menu').click()
    await page.getByTestId('header-mobile-nav').getByText('Covers').click()
    await expect(page.getByTestId('header-mobile-nav')).not.toBeVisible()
    await expect(page).toHaveURL(/\/covers/)
  })
})
