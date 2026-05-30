/**
 * Course data integrity — every chapter page loads and has real content.
 * These run in the daily NRT to catch regressions in the course arborescence.
 */
import { test, expect } from '@playwright/test'

const ALL_CHAPTERS = [
  // Guitare
  { slug: 'fondamentaux',    part: 'Guitare',     minSections: 9 },
  { slug: 'materiel',        part: 'Guitare',     minSections: 7 },
  { slug: 'accords',         part: 'Guitare',     minSections: 12 },
  { slug: 'effets-de-jeu',   part: 'Guitare',     minSections: 11 },
  { slug: 'gammes-et-modes', part: 'Guitare',     minSections: 9 },
  { slug: 'improvisation',   part: 'Guitare',     minSections: 4 },
  { slug: 'blues',           part: 'Guitare',     minSections: 4 },
  { slug: 'jazz',            part: 'Guitare',     minSections: 8 },
  // Théorie
  { slug: 'solfege',         part: 'Théorie',     minSections: 5 },
  { slug: 'theorie-musicale', part: 'Théorie',    minSections: 9 },
  // Home Studio
  { slug: 'composition',     part: 'Home Studio', minSections: 8 },
  { slug: 'mixage',          part: 'Home Studio', minSections: 9 },
  { slug: 'mastering',       part: 'Home Studio', minSections: 2 },
  { slug: 'publication',     part: 'Home Studio', minSections: 4 },
]

test.describe('Course integrity', () => {
  for (const chapter of ALL_CHAPTERS) {
    test(`/courses/${chapter.slug} — loads with ≥${chapter.minSections} sections`, async ({ page }) => {
      await page.goto(`/courses/${chapter.slug}`)

      // Page title present
      await expect(page.locator('h1')).toBeVisible()

      // Part badge visible
      await expect(page.getByText(chapter.part)).toBeVisible()

      // Expected number of section toggles
      const toggles = page.locator('[data-testid^="section-toggle-"]')
      const count = await toggles.count()
      expect(count).toBeGreaterThanOrEqual(chapter.minSections)
    })
  }

  test('total course stats: 14 chapters on index', async ({ page }) => {
    await page.goto('/courses')
    const cards = page.locator('[data-testid^="course-chapter-"]')
    await expect(cards).toHaveCount(14)
  })

  test('opening a section reveals non-empty content', async ({ page }) => {
    await page.goto('/courses/solfege')
    // First section (index 0) opens by default
    const content = page.locator('[data-testid="course-section-introduction-a-la-musique"] p').first()
    await expect(content).toBeVisible()
    const text = await content.textContent()
    expect(text?.length).toBeGreaterThan(20)
  })

  test('section content contains French text (not placeholder)', async ({ page }) => {
    await page.goto('/courses/theorie-musicale')
    const section = page.getByTestId('course-section-intervalles')
    await expect(section).toBeVisible()
    await section.locator('button').first().click() // open accordion
    const body = await page.textContent('[data-testid="course-section-intervalles"]')
    expect(body).not.toContain('Contenu à venir')
    expect(body?.length).toBeGreaterThan(100)
  })
})
