import { ExternalLink } from 'lucide-react'
import { Card, CardImage, CardContent } from '@/components/ui/Card'
import { Badge } from '@/components/ui/Badge'
import { FavouriteButton } from '@/components/ui/FavouriteButton'

export interface Release {
  id: string
  title: string
  type: 'ep' | 'single' | 'album'
  releaseDate: string
  artworkUrl: string
  storyExcerpt?: string
  streamingLinks?: Record<string, string>
}

interface ReleaseCardProps {
  release: Release
  isFaved?: boolean
  onFavToggle?: (type: string, id: string) => void
}

export function ReleaseCard({ release, isFaved, onFavToggle }: ReleaseCardProps) {
  return (
    <Card hover data-testid={`release-card-${release.id}`}>
      <CardImage className="aspect-square">
        <img src={release.artworkUrl} alt={release.title} className="h-full w-full object-cover" />
        <div className="absolute top-2 right-2">
          <FavouriteButton contentType="release" contentId={release.id} isFaved={isFaved} onToggle={onFavToggle} />
        </div>
      </CardImage>
      <CardContent>
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-semibold text-[var(--color-text)] leading-tight">{release.title}</h3>
          <Badge variant={release.type === 'single' ? 'neutral' : 'accent1'}>{release.type.toUpperCase()}</Badge>
        </div>
        <p className="text-sm text-[var(--color-text-muted)] mb-3">{new Date(release.releaseDate).getFullYear()}</p>
        {release.storyExcerpt && (
          <p className="text-sm text-[var(--color-text-muted)] line-clamp-3 mb-3">{release.storyExcerpt}</p>
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
