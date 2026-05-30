import { ExternalLink, Disc3, Pin, ChevronUp, ChevronDown } from 'lucide-react'
import { Card, CardImage, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { FavouriteButton } from '@/components/ui/FavouriteButton'
import { ReleaseTagEditor } from '@/components/music/ReleaseTagEditor'
import type { DatasetItem } from '@/contexts/DatasetContext'

export interface Release {
  id: string
  title: string
  type: 'ep' | 'single' | 'album'
  releaseDate?: string
  artworkUrl?: string
  /** DistroKid hyperfollow link — clicking the cover art opens it. */
  hyperfollowUrl?: string
  /** Genre slugs from the managed Genres dataset. */
  genres?: string[]
  storyExcerpt?: string
  streamingLinks?: Record<string, string>
}

interface ReleaseCardProps {
  release: Release
  isFaved?: boolean
  onFavToggle?: (type: string, id: string) => void
  /** Whether the favourite pins this release to the top (shows a "Pinned" badge). */
  pinned?: boolean
  pinnedLabel?: string
  /** Reorder controls for pinned releases (saved as a user preference). */
  onReorder?: (dir: -1 | 1) => void
  canReorderUp?: boolean
  canReorderDown?: boolean
  reorderUpLabel?: string
  reorderDownLabel?: string
  /** Maps genre slugs to display labels (from the Genres dataset). */
  genreLabels?: Record<string, string>
  /** Admin edit mode: render the genre tag editor backed by the Genres dataset. */
  editable?: boolean
  genreOptions?: DatasetItem[]
  onGenresChange?: (genres: string[]) => void
}

// Deterministic gradient so each artwork placeholder looks distinct but stable.
const PLACEHOLDER_GRADIENTS = [
  'from-violet-500 to-indigo-600',
  'from-rose-500 to-orange-500',
  'from-cyan-500 to-blue-600',
  'from-emerald-500 to-teal-600',
  'from-amber-500 to-pink-600',
  'from-fuchsia-500 to-purple-600',
  'from-sky-500 to-indigo-500',
]

function gradientFor(id: string) {
  let hash = 0
  for (let i = 0; i < id.length; i++) hash = (hash * 31 + id.charCodeAt(i)) | 0
  return PLACEHOLDER_GRADIENTS[Math.abs(hash) % PLACEHOLDER_GRADIENTS.length]
}

function ArtworkPlaceholder({ release }: { release: Release }) {
  return (
    <div
      data-testid={`release-artwork-placeholder-${release.id}`}
      className={`flex h-full w-full flex-col items-center justify-center gap-3 bg-gradient-to-br ${gradientFor(release.id)} p-4 text-center text-white`}
    >
      <Disc3 className="h-10 w-10 opacity-80" />
      <span className="text-sm font-semibold leading-tight drop-shadow-sm">{release.title}</span>
    </div>
  )
}

export function ReleaseCard({
  release, isFaved, onFavToggle, pinned, pinnedLabel = 'Pinned',
  onReorder, canReorderUp, canReorderDown, reorderUpLabel = 'Move up', reorderDownLabel = 'Move down',
  genreLabels, editable, genreOptions = [], onGenresChange,
}: ReleaseCardProps) {
  const year = release.releaseDate ? new Date(release.releaseDate).getFullYear() : null
  const genreText = (release.genres ?? []).map(g => genreLabels?.[g] ?? g).join(' · ')

  const artwork = release.artworkUrl
    ? <img src={release.artworkUrl} alt={release.title} className="h-full w-full object-cover" />
    : <ArtworkPlaceholder release={release} />

  return (
    <Card hover data-testid={`release-card-${release.id}`}>
      <CardImage className="aspect-square">
        {release.hyperfollowUrl ? (
          <a
            href={release.hyperfollowUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${release.title} — listen / pre-save`}
            data-testid={`release-cover-link-${release.id}`}
            className="block h-full w-full transition-transform duration-[var(--transition-base)] hover:scale-[1.03]"
          >
            {artwork}
          </a>
        ) : artwork}
        {pinned && (
          <div className="absolute top-2 left-2 flex items-center gap-1">
            <Badge variant="accent1" className="shadow-[var(--shadow-sm)]" data-testid={`release-pinned-${release.id}`}>
              <Pin className="h-3 w-3 fill-current" /> {pinnedLabel}
            </Badge>
            {onReorder && (
              <div className="flex overflow-hidden rounded-[var(--radius-md)] shadow-[var(--shadow-sm)]">
                <button type="button" onClick={() => onReorder(-1)} disabled={!canReorderUp}
                  aria-label={reorderUpLabel} data-testid={`release-reorder-up-${release.id}`}
                  className="flex h-6 w-6 items-center justify-center bg-[var(--color-surface)]/90 text-[var(--color-text)] hover:bg-[var(--color-surface-raised)] disabled:opacity-30 transition-colors">
                  <ChevronUp className="h-3.5 w-3.5" />
                </button>
                <button type="button" onClick={() => onReorder(1)} disabled={!canReorderDown}
                  aria-label={reorderDownLabel} data-testid={`release-reorder-down-${release.id}`}
                  className="flex h-6 w-6 items-center justify-center bg-[var(--color-surface)]/90 text-[var(--color-text)] hover:bg-[var(--color-surface-raised)] disabled:opacity-30 transition-colors border-l border-[var(--color-border)]">
                  <ChevronDown className="h-3.5 w-3.5" />
                </button>
              </div>
            )}
          </div>
        )}
        <div className="absolute top-2 right-2">
          <FavouriteButton contentType="release" contentId={release.id} isFaved={isFaved} onToggle={onFavToggle} />
        </div>
      </CardImage>
      <CardContent>
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-[var(--color-text)] leading-tight">{release.title}</h3>
          <Badge variant={release.type === 'single' ? 'neutral' : 'accent1'}>{release.type.toUpperCase()}</Badge>
        </div>
        {(year || genreText) && (
          <p className="text-sm text-[var(--color-text-muted)] mb-3">
            {[year, genreText].filter(Boolean).join(' — ')}
          </p>
        )}
        {editable && onGenresChange && (
          <ReleaseTagEditor
            genres={release.genres ?? []}
            options={genreOptions}
            onChange={onGenresChange}
            testIdPrefix={`release-${release.id}`}
          />
        )}
        {release.storyExcerpt && (
          <p className="text-sm text-[var(--color-text-muted)] line-clamp-3 mb-3 mt-3">{release.storyExcerpt}</p>
        )}
        {release.streamingLinks && (
          <div className="flex flex-wrap gap-2">
            {Object.entries(release.streamingLinks).map(([platform, url]) => (
              <a key={platform} href={url} target="_blank" rel="noopener noreferrer"
                data-testid={`release-link-${release.id}-${platform}`}
                className="inline-flex items-center gap-1 text-xs text-[var(--color-accent-1)] hover:underline">
                {platform} <ExternalLink className="h-3 w-3" />
              </a>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
