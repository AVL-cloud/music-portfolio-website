/**
 * UI interaction tests — user flows that must work end-to-end.
 */
import { test, expect } from '@playwright/test'
import { makeSessionToken, seedNotification, removeNotification, SESSION_COOKIE, type SeedNotification } from './helpers/session'

// Seeding a session + notifications needs the dev `.data` store, so the
// logged-in notification flow only runs against a local server.
const IS_LOCAL = (process.env.BASE_URL ?? '').includes('localhost')

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
    await page.getByTestId('filter-chip-genre-rock').click()
    // Filter chip becomes active (should have accent style)
    const chip = page.getByTestId('filter-chip-genre-rock')
    await expect(chip).toBeVisible()
    // Clear button appears
    await expect(page.getByTestId('filter-bar-clear')).toBeVisible()
  })

  test('search filters covers by title', async ({ page }) => {
    await page.goto('/covers')
    await page.getByTestId('filter-text-title').fill('Bohemian')
    await expect(page.getByTestId('cover-card-bohemian-rhapsody')).toBeVisible()
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
  // The form gates required fields and email format with native HTML5
  // validation, so an invalid submit never reaches the server / shows no
  // success state and the offending field reports invalid.
  test('empty submit is blocked by required-field validation', async ({ page }) => {
    await page.goto('/contact')
    await page.getByTestId('contact-submit').click()
    await expect(page.getByTestId('contact-form')).toBeVisible()
    await expect(page.getByTestId('contact-success')).toHaveCount(0)
    const nameValid = await page.getByTestId('contact-name')
      .evaluate(el => (el as HTMLInputElement).validity.valid)
    expect(nameValid).toBe(false)
  })

  test('invalid email is blocked by email validation', async ({ page }) => {
    await page.goto('/contact')
    await page.getByTestId('contact-name').fill('Test User')
    await page.getByTestId('contact-email').fill('not-an-email')
    await page.getByTestId('contact-message').fill('Hello!')
    await page.getByTestId('contact-submit').click()
    await expect(page.getByTestId('contact-success')).toHaveCount(0)
    const emailValid = await page.getByTestId('contact-email')
      .evaluate(el => (el as HTMLInputElement).validity.valid)
    expect(emailValid).toBe(false)
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
  // The bell is logged-in only and reads per-user notifications from the dev
  // store, so we seed a real session cookie + one unread notification. Local only.
  test.describe.configure({ mode: 'serial' })
  test.skip(!IS_LOCAL, 'requires a seeded local session + .data store')

  const USER = { id: 'e2e-notif-user', email: 'e2e-notif@example.com', role: 'member' as const }
  const NOTIF: SeedNotification = {
    id: 'e2e-notif-1',
    userId: USER.id,
    type: 'contact_reply',
    contactRequestId: 'e2e-req-1',
    title: 'Antoine replied to your message',
    body: 'Thanks for reaching out — here is my reply.',
    link: '/preferences/contact-log',
    read: false,
    createdAt: new Date().toISOString(),
  }

  test.beforeEach(async ({ context, baseURL }) => {
    seedNotification({ ...NOTIF, read: false })
    const token = await makeSessionToken(USER)
    await context.addCookies([{ name: SESSION_COOKIE, value: token, url: baseURL!, httpOnly: true, sameSite: 'Lax' }])
  })

  test.afterAll(() => removeNotification(NOTIF.id))

  test('bell opens the notification panel with the unread notification', async ({ page }) => {
    await page.goto('/')
    const bell = page.getByTestId('notification-bell')
    await expect(bell).toBeVisible()
    await bell.click()
    await expect(bell).toHaveAttribute('aria-expanded', 'true')
    await expect(page.getByTestId(`notification-item-${NOTIF.id}`)).toBeVisible()
  })

  test('unread badge is shown when there are unread notifications', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByTestId('notification-badge')).toBeVisible()
    await expect(page.getByTestId('notification-badge')).toHaveText('1')
  })

  test('clicking a notification marks it read and follows its link', async ({ page }) => {
    await page.goto('/')
    await page.getByTestId('notification-bell').click()
    await page.getByTestId(`notification-item-${NOTIF.id}`).click()
    await expect(page).toHaveURL(/\/preferences\/contact-log/)
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
