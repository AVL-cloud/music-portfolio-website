import Link from 'next/link'
import { BookOpen, ChevronRight } from 'lucide-react'
import { PageShell, PageHeader } from '@/components/layout/PageShell'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { getCourse } from '@/lib/courses'

const PART_COLORS: Record<string, 'accent1' | 'accent2' | 'neutral'> = {
  'Guitare': 'accent1',
  'Théorie': 'accent2',
  'Home Studio': 'neutral',
}

export default function CoursesPage() {
  const course = getCourse()

  const parts = ['Guitare', 'Théorie', 'Home Studio']
  const byPart = parts.map(part => ({
    part,
    chapters: course.chapters.filter(ch => ch.part === part),
  }))

  const totalSections = course.chapters.reduce((acc, ch) => acc + ch.sections.length, 0)

  return (
    <PageShell>
      <PageHeader
        title={course.title}
        description={course.description}
      />

      {/* Stats row */}
      <div className="flex flex-wrap gap-6 mb-12 text-sm text-[var(--color-text-muted)]">
        <span><strong className="text-[var(--color-text)]">{course.chapters.length}</strong> chapitres</span>
        <span><strong className="text-[var(--color-text)]">{totalSections}</strong> leçons</span>
        <span><strong className="text-[var(--color-text)]">{parts.length}</strong> parties</span>
      </div>

      {/* Parts */}
      <div className="space-y-14">
        {byPart.map(({ part, chapters }) => (
          <section key={part}>
            <div className="flex items-center gap-3 mb-5">
              <Badge variant={PART_COLORS[part] ?? 'neutral'} className="text-sm px-3 py-1">{part}</Badge>
              <span className="text-sm text-[var(--color-text-muted)]">{chapters.length} chapitres</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {chapters.map(ch => (
                <Link key={ch.slug} href={`/courses/${ch.slug}`}>
                  <Card hover data-testid={`course-chapter-${ch.slug}`} className="h-full group">
                    <CardContent className="flex flex-col gap-3 h-full">
                      <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-1-subtle)] text-[var(--color-accent-1)] group-hover:bg-[var(--color-accent-1)] group-hover:text-white transition-colors">
                        <BookOpen className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-[var(--color-text)] mb-1 leading-snug">{ch.title}</h3>
                        <p className="text-xs text-[var(--color-text-muted)] line-clamp-2">{ch.description}</p>
                      </div>
                      <div className="flex items-center justify-between text-xs text-[var(--color-text-subtle)]">
                        <span>{ch.sections.length} leçons</span>
                        <ChevronRight className="h-3.5 w-3.5 text-[var(--color-accent-1)] group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  )
}
