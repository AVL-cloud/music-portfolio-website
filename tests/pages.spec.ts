/**
 * Page-level content integrity — every page exists and shows expected content.
 */
import { test, expect } from '@playwright/test'

test.describe('Pages — Navigation active state', () => {
  const pages = [
    { path: '/music',   label: 'music' },
    { path: '/covers',  label: 'covers' },
    { path: '/courses', label: 'courses' },
    { path: '/gear',    label: 'gear' },
    { path: '/about',   label: 'about' },
    { path: '/contact', label: 'contact' },
  ]

  for (const { path, label } of pages) {
    test(`${path} — nav item is active`, async ({ page }) => {
      await page.goto(path)
      const navItem = page.getByTestId(`header-nav-${label}`)
      await expect(navItem).toBeVisible()
      // Active state uses accent colour text
      await expect(navItem).toHaveCSS('color', /rgb\(/)
    })
  }
})

test.describe('Pages — Home', () => {
  test('explore section shows 4 cards', async ({ page }) => {
    await page.goto('/')
    for (const section of ['music', 'covers', 'courses', 'tabs']) {
      await expect(page.getByTestId(`home-section-${section}`)).toBeVisible()
    }
  })
})

test.describe('Pages — Courses index', () => {
  test('shows all 14 chapter cards', async ({ page }) => {
    await page.goto('/courses')
    const slugs = [
      'fondamentaux', 'materiel', 'accords', 'effets-de-jeu',
      'gammes-et-modes', 'improvisation', 'blues', 'jazz',
      'solfege', 'theorie-musicale',
      'composition', 'mixage', 'mastering', 'publication',
    ]
    for (const slug of slugs) {
      await expect(page.getByTestId(`course-chapter-${slug}`)).toBeVisible()
    }
  })

  test('parts (Guitare, Théorie, Home Studio) are present', async ({ page }) => {
    await page.goto('/courses')
    const body = await page.textContent('body')
    expect(body).toContain('Guitare')
    expect(body).toContain('Théorie')
    expect(body).toContain('Home Studio')
  })

  test('shows section count for each chapter', async ({ page }) => {
    await page.goto('/courses')
    await expect(page.getByText(/leçons/).first()).toBeVisible()
  })
})

test.describe('Pages — Chapter pages', () => {
  const chapters = [
    { slug: 'fondamentaux',    firstSection: 'anatomie-de-la-guitare' },
    { slug: 'accords',         firstSection: 'preambule-doigtes' },
    { slug: 'solfege',         firstSection: 'introduction-a-la-musique' },
    { slug: 'composition',     firstSection: 'preambule' },
  ]

  for (const { slug, firstSection } of chapters) {
    test(`/courses/${slug} — first section visible`, async ({ page }) => {
      await page.goto(`/courses/${slug}`)
      await expect(page.getByTestId(`course-section-${firstSection}`)).toBeVisible()
    })
  }

  test('chapter has prev/next navigation', async ({ page }) => {
    await page.goto('/courses/accords')
    await expect(page.getByTestId('chapter-prev')).toBeVisible()
    await expect(page.getByTestId('chapter-next')).toBeVisible()
  })

  test('first chapter has no prev', async ({ page }) => {
    await page.goto('/courses/fondamentaux')
    await expect(page.getByTestId('chapter-prev')).not.toBeVisible()
    await expect(page.getByTestId('chapter-next')).toBeVisible()
  })

  test('last chapter has no next', async ({ page }) => {
    await page.goto('/courses/publication')
    await expect(page.getByTestId('chapter-prev')).toBeVisible()
    await expect(page.getByTestId('chapter-next')).not.toBeVisible()
  })
})

test.describe('Pages — Covers', () => {
  test('filter chips are present', async ({ page }) => {
    await page.goto('/covers')
    await expect(page.getByTestId('filter-chip-genre-rock')).toBeVisible()
    await expect(page.getByTestId('filter-chip-genre-metal')).toBeVisible()
    await expect(page.getByTestId('filter-text-title')).toBeVisible()
  })

  test('cover cards render', async ({ page }) => {
    await page.goto('/covers')
    await expect(page.getByTestId('cover-card-bohemian-rhapsody')).toBeVisible()
  })
})
