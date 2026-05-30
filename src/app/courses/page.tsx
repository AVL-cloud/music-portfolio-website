import { PageShell, PageHeader } from '@/components/layout/PageShell'
import { getCourse } from '@/lib/courses'
import { CoursesClient } from './CoursesClient'

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

      <CoursesClient byPart={byPart} />
    </PageShell>
  )
}
