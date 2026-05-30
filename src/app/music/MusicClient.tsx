'use client'
import { useMemo } from 'react'
import { MusicPlayer } from '@/components/music/MusicPlayer'
import { ReleaseCard } from '@/components/music/ReleaseCard'
import { PlayerAdminControls } from '@/components/music/PlayerAdminControls'
import { PageHeader } from '@/components/layout/PageShell'
import { useI18n } from '@/contexts/I18nContext'
import { useAdmin } from '@/contexts/AdminContext'
import { useFavourites } from '@/contexts/FavouritesContext'
import { usePendingFavourite } from '@/contexts/usePendingFavourite'
import { useMusic } from '@/contexts/MusicContext'
import { useDataset } from '@/contexts/DatasetContext'

/** Newest first; undated releases sort last. */
function byDateDesc(a: { releaseDate?: string }, b: { releaseDate?: string }) {
  if (a.releaseDate && b.releaseDate) return b.releaseDate.localeCompare(a.releaseDate)
  if (a.releaseDate) return -1
  if (b.releaseDate) return 1
  return 0
}

export function MusicClient() {
  usePendingFavourite()
  const { t } = useI18n()
  const { isAdmin, editMode } = useAdmin()
  const { isLoggedIn, isFaved, toggleFavourite, favedIdsOf, moveFavourite } = useFavourites()
  const { releases, visibleTracks, player, setReleaseGenres } = useMusic()
  const { genres } = useDataset()

  const editing = isAdmin && editMode

  // Genre tags come from the managed Genres dataset (same source as covers).
  const genreLabels = useMemo(
    () => Object.fromEntries(genres.map(g => [g.value, g.label])),
    [genres],
  )

  // Favourited releases pinned on top in the user's saved order; the rest by release date.
  const favOrder = favedIdsOf('release')
  const pinned = useMemo(() => {
    const byId = new Map(releases.map(r => [r.id, r]))
    return favOrder.map(id => byId.get(id)).filter((r): r is typeof releases[number] => Boolean(r))
  }, [releases, favOrder])
  const orderedReleases = useMemo(() => {
    const rest = releases.filter(r => !isFaved('release', r.id)).sort(byDateDesc)
    return [...pinned, ...rest]
  }, [releases, pinned, isFaved])

  const showPlayer = (player.visible || editing) && visibleTracks.length > 0

  return (
    <div data-testid="music-page">
      <PageHeader title={t.music.title} description={t.music.description} />

      {(showPlayer || editing) && (
        <section className="mb-14">
          <div className="mb-4 flex items-baseline justify-between gap-4">
            <h2 className="text-xl font-semibold text-[var(--color-text)]">{t.music.latestTracks}</h2>
            <p className="text-sm text-[var(--color-text-muted)]">{t.music.latestTracksHint}</p>
          </div>
          {editing && <PlayerAdminControls />}
          {!player.visible && editing && (
            <p className="mb-3 text-sm text-[var(--color-text-muted)]">{t.music.playerHiddenNote}</p>
          )}
          {showPlayer && <MusicPlayer tracks={visibleTracks} className="max-w-2xl" />}
        </section>
      )}

      <section>
        <h2 className="mb-4 text-xl font-semibold text-[var(--color-text)]">{t.music.releases}</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {orderedReleases.map(release => {
            const faved = isFaved('release', release.id)
            const pinIndex = faved ? favOrder.indexOf(release.id) : -1
            return (
              <ReleaseCard
                key={release.id}
                release={release}
                isFaved={faved}
                pinned={faved}
                pinnedLabel={t.music.pinned}
                genreLabels={genreLabels}
                onFavToggle={(type, id) => toggleFavourite(type, id)}
                // Pinned releases can be reordered (saved as a user preference).
                onReorder={faved && isLoggedIn ? (dir) => moveFavourite('release', release.id, dir) : undefined}
                canReorderUp={pinIndex > 0}
                canReorderDown={pinIndex >= 0 && pinIndex < favOrder.length - 1}
                reorderUpLabel={t.music.moveUp}
                reorderDownLabel={t.music.moveDown}
                editable={editing}
                genreOptions={genres}
                onGenresChange={editing ? (g) => setReleaseGenres(release.id, g) : undefined}
              />
            )
          })}
        </div>
      </section>
    </div>
  )
}
