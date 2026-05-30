import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PageShell } from '@/components/layout/PageShell'
import { Badge } from '@/components/ui/Badge'
import { getChapter, getAllChapterSlugs, getCourse } from '@/lib/courses'
import { ChapterClient } from './ChapterClient'

interface Props { params: Promise<{ chapterSlug: string }> }

export async function generateStaticParams() {
  return getAllChapterSlugs().map(s => ({ chapterSlug: s }))
}

export default async function ChapterPage({ params }: Props) {
  const { chapterSlug } = await params
  const chapter = getChapter(chapterSlug)
  if (!chapter) notFound()

  const course = getCourse()
  const idx = course.chapters.findIndex(ch => ch.slug === chapterSlug)
  const prev = idx > 0 ? course.chapters[idx - 1] : null
  const next = idx < course.chapters.length - 1 ? course.chapters[idx + 1] : null

  return (
    <PageShell>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-6">
        <Link href="/courses" className="hover:text-[var(--color-accent-1)] transition-colors">Courses</Link>
        <ChevronRight className="h-3.5 w-3.5" />
        <Badge variant="neutral">{chapter.part}</Badge>
        <ChevronRight className="h-3.5 w-3.5" />
        <span className="text-[var(--color-text)] font-medium">{chapter.title}</span>
      </div>

      {/* Chapter header */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--color-text)] mb-2">{chapter.title}</h1>
        <p className="text-[var(--color-text-muted)]">{chapter.description}</p>
        <p className="text-sm text-[var(--color-text-subtle)] mt-2">{chapter.sections.length} leçons</p>
      </div>

      {/* Sections */}
      <ChapterClient chapter={chapter} />

      {/* Prev / Next navigation */}
      <div className="flex items-center justify-between mt-14 pt-8 border-t border-[var(--color-border)]">
        {prev ? (
          <Link href={`/courses/${prev.slug}`} data-testid="chapter-prev"
            className="group flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-1)] transition-colors">
            <ChevronLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            <div>
              <div className="text-xs text-[var(--color-text-subtle)]">Précédent</div>
              <div className="font-medium">{prev.title}</div>
            </div>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/courses/${next.slug}`} data-testid="chapter-next"
            className="group flex items-center gap-2 text-sm text-right text-[var(--color-text-muted)] hover:text-[var(--color-accent-1)] transition-colors">
            <div>
              <div className="text-xs text-[var(--color-text-subtle)]">Suivant</div>
              <div className="font-medium">{next.title}</div>
            </div>
            <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        ) : <div />}
      </div>
    </PageShell>
  )
}
