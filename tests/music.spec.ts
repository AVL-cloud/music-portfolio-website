/**
 * Music page — releases, player, DistroKid links, and favourites/pinning.
 * Targets the current build; run with `npm run test:local`.
 */
import { test, expect } from '@playwright/test'

const RELEASE_IDS = [
  'eerie-endeavours', 'eyes-and-heart-wide-open', 'my-icarus-sun', 'a-wish-for-another-life',
  'from-distant-shores', 'echoes-of-the-unseen', 'altered-states-of-consciousness', 'on-the-rim-of-the-sky',
]

test.describe('Music — releases', () => {
  test('page loads with the Listen player and all releases', async ({ page }) => {
    await page.goto('/music')
    await expect(page.getByTestId('music-page')).toBeVisible()
    await expect(page.getByTestId('music-player')).toBeVisible()
    for (const id of RELEASE_IDS) {
      await expect(page.getByTestId(`release-card-${id}`)).toBeVisible()
    }
  })

  test('releases are ordered newest-first by release date', async ({ page }) => {
    await page.goto('/music')
    const titles = await page.locator('[data-testid^="release-card-"] h3').allTextContents()
    // Eerie Endeavours (2025) before On The Rim Of The Sky (2021)
    expect(titles.indexOf('Eerie Endeavours')).toBeLessThan(titles.indexOf('On The Rim Of The Sky'))
  })

  test('genre tags render as dataset labels (not slugs)', async ({ page }) => {
    await page.goto('/music')
    const card = page.getByTestId('release-card-eyes-and-heart-wide-open')
    await expect(card).toContainText('Rock')
    await expect(card).toContainText('Alternative')
  })

  test('cover art links to the DistroKid hyperfollow page', async ({ page }) => {
    await page.goto('/music')
    const link = page.getByTestId('release-cover-link-eyes-and-heart-wide-open')
    await expect(link).toHaveAttribute('href', /distrokid\.com\/hyperfollow\/antoinevlieghe/)
  })
})

test.describe('Music — favourites (login-gated)', () => {
  test('favouriting while logged out redirects to login', async ({ page }) => {
    await page.goto('/music')
    await page.getByTestId('favourite-button-release-my-icarus-sun').click()
    await expect(page).toHaveURL(/\/login\?next=%2Fmusic/)
  })

  test('favourited releases are pinned to the top', async ({ page }) => {
    // Seed a favourite as a returning user would have stored it.
    await page.addInitScript(() => {
      localStorage.setItem('swc-favourites', JSON.stringify(['release:on-the-rim-of-the-sky']))
    })
    await page.goto('/music')
    await expect(page.getByTestId('release-pinned-on-the-rim-of-the-sky')).toBeVisible()
    const titles = await page.locator('[data-testid^="release-card-"] h3').allTextContents()
    expect(titles[0]).toBe('On The Rim Of The Sky')
  })

  test('multiple pinned releases keep their saved order', async ({ page }) => {
    await page.addInitScript(() => {
      localStorage.setItem('swc-favourites', JSON.stringify([
        'release:echoes-of-the-unseen', 'release:eerie-endeavours',
      ]))
    })
    await page.goto('/music')
    // Wait for favourites to hydrate (pin badges appear) before reading order.
    await expect(page.getByTestId('release-pinned-echoes-of-the-unseen')).toBeVisible()
    await expect(page.getByTestId('release-pinned-eerie-endeavours')).toBeVisible()
    const titles = await page.locator('[data-testid^="release-card-"] h3').allTextContents()
    expect(titles.slice(0, 2)).toEqual(['Echoes Of The Unseen', 'Eerie Endeavours'])
  })
})
