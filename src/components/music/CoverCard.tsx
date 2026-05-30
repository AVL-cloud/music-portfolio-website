import { ExternalLink, Video } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { FavouriteButton } from '@/components/ui/FavouriteButton'

export interface Cover {
  id: string
  title: string
  bandName: string
  style: string
  coverType: string
  instruments: string[]
  embedUrl: string
  description?: string
  /** Date the cover was posted — used to order the covers grid. */
  videoDate?: string
  socialLinks?: Record<string, string>
}

interface CoverCardProps {
  cover: Cover
  isFaved?: boolean
  onFavToggle?: (type: string, id: string) => void
  /** Resolve a slug to its display label (from the Genres / cover-type datasets). */
  labelFor?: (value: string) => string
}

export function CoverCard({ cover, isFaved, onFavToggle, labelFor = v => v }: CoverCardProps) {
  return (
    <Card hover data-testid={`cover-card-${cover.id}`}>
      <div className="relative aspect-video bg-[var(--color-surface-raised)]">
        {cover.embedUrl ? (
          <iframe src={cover.embedUrl} title={cover.title} className="h-full w-full" allowFullScreen loading="lazy" />
        ) : (
          <div
            data-testid={`cover-video-placeholder-${cover.id}`}
            className="flex h-full w-full flex-col items-center justify-center gap-2 text-[var(--color-text-muted)]"
          >
            <Video className="h-9 w-9 opacity-50" />
            <span className="text-xs">Video coming soon</span>
          </div>
        )}
        <div className="absolute top-2 right-2">
          <FavouriteButton contentType="cover" contentId={cover.id} isFaved={isFaved} onToggle={onFavToggle} />
        </div>
      </div>
      <CardContent>
        <h3 className="font-semibold text-[var(--color-text)] mb-0.5">{cover.title}</h3>
        <p className="text-sm text-[var(--color-text-muted)] mb-2">{cover.bandName}</p>
        {cover.description && (
          <p className="text-sm text-[var(--color-text-muted)] line-clamp-2 mb-3">{cover.description}</p>
        )}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {cover.style && <Badge variant="accent1">{labelFor(cover.style)}</Badge>}
          {cover.coverType && <Badge variant="neutral">{labelFor(cover.coverType)}</Badge>}
          {cover.instruments.map(i => <Badge key={i} variant="neutral">{labelFor(i)}</Badge>)}
        </div>
        {cover.socialLinks && (
          <div className="flex gap-3">
            {Object.entries(cover.socialLinks).map(([platform, url]) => (
              <a key={platform} href={url} target="_blank" rel="noopener noreferrer"
                data-testid={`cover-social-${cover.id}-${platform}`}
                className="inline-flex items-center gap-1 text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent-1)] transition-colors">
                {platform} <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
