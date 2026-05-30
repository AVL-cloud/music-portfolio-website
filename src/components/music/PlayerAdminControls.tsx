'use client'
import { ChevronUp, ChevronDown, Eye, EyeOff } from 'lucide-react'
import { useMusic } from '@/contexts/MusicContext'
import { useI18n } from '@/contexts/I18nContext'
import { latestTracks } from '@/lib/music'
import { cn } from '@/lib/utils'

/**
 * Admin-only panel (shown in edit mode) to toggle the "Listen" player's visibility
 * and to reorder / hide individual tracks. Reflects + writes MusicContext player config.
 */
export function PlayerAdminControls() {
  const { t } = useI18n()
  const { player, setPlayerVisible, moveTrack, setTrackHidden } = useMusic()
  const byId = new Map(latestTracks.map(tr => [tr.id, tr]))

  return (
    <div
      data-testid="player-admin-controls"
      className="mb-4 rounded-[var(--radius-lg)] border border-dashed border-[var(--color-accent-1)]/50 bg-[var(--color-accent-1-subtle)]/30 p-4"
    >
      <div className="flex items-center justify-between gap-3 mb-3">
        <span className="text-sm font-medium text-[var(--color-text)]">{t.music.playerVisibility}</span>
        <button
          type="button"
          onClick={() => setPlayerVisible(!player.visible)}
          data-testid="player-visibility-toggle"
          aria-pressed={player.visible}
          className={cn(
            'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors',
            player.visible
              ? 'bg-[var(--color-accent-1)] text-white'
              : 'bg-[var(--color-surface-raised)] text-[var(--color-text-muted)]',
          )}
        >
          {player.visible ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
          {player.visible ? t.music.playerShown : t.music.playerHidden}
        </button>
      </div>

      <ul className="space-y-1">
        {player.order.map((id, idx) => {
          const track = byId.get(id)
          if (!track) return null
          const hidden = player.hidden.includes(id)
          return (
            <li
              key={id}
              data-testid={`player-track-row-${id}`}
              className={cn(
                'flex items-center gap-2 rounded-[var(--radius-md)] bg-[var(--color-surface)] px-2.5 py-1.5',
                hidden && 'opacity-50',
              )}
            >
              <span className="flex-1 truncate text-sm text-[var(--color-text)]">{track.title}</span>
              <div className="flex items-center gap-0.5">
                <button type="button" onClick={() => moveTrack(id, -1)} disabled={idx === 0}
                  aria-label={t.music.moveUp} data-testid={`player-track-up-${id}`}
                  className="flex h-7 w-7 items-center justify-center rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-text)] disabled:opacity-30 disabled:hover:bg-transparent transition-colors">
                  <ChevronUp className="h-4 w-4" />
                </button>
                <button type="button" onClick={() => moveTrack(id, 1)} disabled={idx === player.order.length - 1}
                  aria-label={t.music.moveDown} data-testid={`player-track-down-${id}`}
                  className="flex h-7 w-7 items-center justify-center rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-text)] disabled:opacity-30 disabled:hover:bg-transparent transition-colors">
                  <ChevronDown className="h-4 w-4" />
                </button>
                <button type="button" onClick={() => setTrackHidden(id, !hidden)}
                  aria-label={hidden ? t.music.showInPlayer : t.music.hideFromPlayer}
                  aria-pressed={hidden}
                  data-testid={`player-track-hide-${id}`}
                  className="flex h-7 w-7 items-center justify-center rounded-[var(--radius-md)] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-raised)] hover:text-[var(--color-text)] transition-colors">
                  {hidden ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
