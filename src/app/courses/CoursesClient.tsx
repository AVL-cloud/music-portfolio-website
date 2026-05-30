'use client'
import Link from 'next/link'
import { BookOpen, ChevronRight, Heart } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { useFavourites } from '@/contexts/FavouritesContext'
import { usePendingFavourite } from '@/contexts/usePendingFavourite'
import { cn } from '@/lib/utils'
import type { ChapterWithSlugs } from '@/lib/courses'

const PART_COLORS: Record<string, 'accent1' | 'accent2' | 'neutral'> = {
  'Guitare': 'accent1',
  'Théorie': 'accent2',
  'Home Studio': 'neutral',
}

interface CoursesClientProps {
  byPart: { part: string; chapters: ChapterWithSlugs[] }[]
}

export function CoursesClient({ byPart }: CoursesClientProps) {
  usePendingFavourite()
  const { isFaved, toggleFavourite } = useFavourites()

  return (
    <div className="space-y-14">
      {byPart.map(({ part, chapters }) => (
        <section key={part}>
          <div className="flex items-center gap-3 mb-5">
            <Badge variant={PART_COLORS[part] ?? 'neutral'} className="text-sm px-3 py-1">{part}</Badge>
            <span className="text-sm text-[var(--color-text-muted)]">{chapters.length} chapitres</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {chapters.map(ch => {
              const faved = isFaved('course_chapter', ch.slug)
              return (
                <div key={ch.slug} className="relative">
                  <Link href={`/courses/${ch.slug}`}>
                    <Card hover data-testid={`course-chapter-${ch.slug}`} className="h-full group">
                      <CardContent className="flex flex-col gap-3 h-full">
                        <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-1-subtle)] text-[var(--color-accent-1)] group-hover:bg-[var(--color-accent-1)] group-hover:text-white transition-colors">
                          <BookOpen className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-[var(--color-text)] mb-1 leading-snug pr-6">{ch.title}</h3>
                          <p className="text-xs text-[var(--color-text-muted)] line-clamp-2">{ch.description}</p>
                        </div>
                        <div className="flex items-center justify-between text-xs text-[var(--color-text-subtle)]">
                          <span>{ch.sections.length} leçons</span>
                          <ChevronRight className="h-3.5 w-3.5 text-[var(--color-accent-1)] group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                  {/* Heart overlaid in top-right corner of the card */}
                  <button
                    onClick={e => { e.preventDefault(); toggleFavourite('course_chapter', ch.slug) }}
                    data-testid={`favourite-button-course_chapter-${ch.slug}`}
                    aria-label={faved ? 'Remove chapter from favourites' : 'Add chapter to favourites'}
                    aria-pressed={faved}
                    className={cn(
                      'absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full transition-colors z-10',
                      faved
                        ? 'text-[var(--color-error)] bg-[var(--color-error-subtle)]'
                        : 'text-[var(--color-text-subtle)] hover:text-[var(--color-error)] hover:bg-[var(--color-error-subtle)]',
                    )}
                  >
                    <Heart className={cn('h-3.5 w-3.5', faved && 'fill-current')} />
                  </button>
                </div>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}
