import { PASSION_SIX_CORDES } from './db/seed-courses'

export function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export function getCourse() {
  const course = PASSION_SIX_CORDES
  const chapters = course.chapters.map(ch => ({
    ...ch,
    slug: slugify(ch.title),
    sections: ch.sections.map(s => ({ ...s, slug: slugify(s.title) })),
  }))
  return { ...course, chapters }
}

export type CourseWithSlugs = ReturnType<typeof getCourse>
export type ChapterWithSlugs = CourseWithSlugs['chapters'][number]
export type SectionWithSlug = ChapterWithSlugs['sections'][number]

export function getChapter(chapterSlug: string) {
  const course = getCourse()
  return course.chapters.find(ch => ch.slug === chapterSlug) ?? null
}

export function getAllChapterSlugs() {
  return getCourse().chapters.map(ch => ch.slug)
}
