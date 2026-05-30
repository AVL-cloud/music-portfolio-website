'use client'
import { createContext, useContext, useState, useEffect, useCallback, useMemo, type ReactNode } from 'react'
import { releases as STATIC_RELEASES, latestTracks as STATIC_TRACKS } from '@/lib/music'
import type { Release } from '@/components/music/ReleaseCard'
import type { Track } from '@/components/music/MusicPlayer'

/**
 * Admin-editable music data, layered over the static defaults in `@/lib/music`.
 * Mirrors CoversContext / DatasetContext: React state + localStorage, until D1 lands.
 *
 *  - `genreOverrides` — per-release genre tags edited in admin edit mode.
 *  - `player`        — visibility, track order and per-track hiding for the "Listen" player.
 */

const STORAGE_KEY = 'swc-music'

interface PlayerConfig {
  visible: boolean
  order: string[]       // track ids, in display order
  hidden: string[]      // track ids hidden from the player
}

interface PersistedState {
  genreOverrides?: Record<string, string[]>
  player?: Partial<PlayerConfig>
}

const DEFAULT_PLAYER: PlayerConfig = {
  visible: true,
  order: STATIC_TRACKS.map(t => t.id),
  hidden: [],
}

interface MusicContextValue {
  /** Releases with admin genre edits applied. */
  releases: Release[]
  setReleaseGenres: (id: string, genres: string[]) => void
  /** How many releases currently use the given genre slug. */
  countGenreUsage: (slug: string) => number
  /** Strip a genre slug from every release that uses it. */
  clearGenre: (slug: string) => void
  /** Player config + the visible/ordered track list derived from it. */
  player: PlayerConfig
  visibleTracks: Track[]
  setPlayerVisible: (visible: boolean) => void
  moveTrack: (id: string, dir: -1 | 1) => void
  setTrackHidden: (id: string, hidden: boolean) => void
}

const MusicContext = createContext<MusicContextValue>({
  releases: STATIC_RELEASES,
  setReleaseGenres: () => {},
  countGenreUsage: () => 0,
  clearGenre: () => {},
  player: DEFAULT_PLAYER,
  visibleTracks: STATIC_TRACKS,
  setPlayerVisible: () => {},
  moveTrack: () => {},
  setTrackHidden: () => {},
})

export function MusicProvider({ children }: { children: ReactNode }) {
  const [genreOverrides, setGenreOverrides] = useState<Record<string, string[]>>({})
  const [player, setPlayer] = useState<PlayerConfig>(DEFAULT_PLAYER)

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (!raw) return
      const stored = JSON.parse(raw) as PersistedState
      if (stored.genreOverrides) setGenreOverrides(stored.genreOverrides)
      if (stored.player) {
        // Reconcile any new/removed tracks since the config was saved.
        const known = STATIC_TRACKS.map(t => t.id)
        const savedOrder = (stored.player.order ?? known).filter(id => known.includes(id))
        const order = [...savedOrder, ...known.filter(id => !savedOrder.includes(id))]
        setPlayer({
          visible: stored.player.visible ?? true,
          order,
          hidden: (stored.player.hidden ?? []).filter(id => known.includes(id)),
        })
      }
    } catch {
      // ignore parse errors
    }
  }, [])

  const persist = useCallback((patch: PersistedState) => {
    try {
      const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...prev, ...patch }))
    } catch {
      // ignore
    }
  }, [])

  const setReleaseGenres = useCallback(
    (id: string, genres: string[]) => {
      setGenreOverrides(prev => {
        const next = { ...prev, [id]: genres }
        persist({ genreOverrides: next })
        return next
      })
    },
    [persist],
  )

  const updatePlayer = useCallback(
    (next: PlayerConfig) => {
      setPlayer(next)
      persist({ player: next })
    },
    [persist],
  )

  const setPlayerVisible = useCallback(
    (visible: boolean) => updatePlayer({ ...player, visible }),
    [player, updatePlayer],
  )

  const moveTrack = useCallback(
    (id: string, dir: -1 | 1) => {
      const order = [...player.order]
      const i = order.indexOf(id)
      const j = i + dir
      if (i < 0 || j < 0 || j >= order.length) return
      ;[order[i], order[j]] = [order[j], order[i]]
      updatePlayer({ ...player, order })
    },
    [player, updatePlayer],
  )

  const setTrackHidden = useCallback(
    (id: string, hidden: boolean) => {
      const set = new Set(player.hidden)
      if (hidden) set.add(id)
      else set.delete(id)
      updatePlayer({ ...player, hidden: [...set] })
    },
    [player, updatePlayer],
  )

  const releases = useMemo(
    () =>
      STATIC_RELEASES.map(r =>
        genreOverrides[r.id] ? { ...r, genres: genreOverrides[r.id] } : r,
      ),
    [genreOverrides],
  )

  const countGenreUsage = useCallback(
    (slug: string) => releases.filter(r => r.genres?.includes(slug)).length,
    [releases],
  )

  const clearGenre = useCallback(
    (slug: string) => {
      const next = { ...genreOverrides }
      releases.forEach(r => {
        if (r.genres?.includes(slug)) {
          next[r.id] = r.genres.filter(g => g !== slug)
        }
      })
      setGenreOverrides(next)
      persist({ genreOverrides: next })
    },
    [releases, genreOverrides, persist],
  )

  const visibleTracks = useMemo(() => {
    const byId = new Map(STATIC_TRACKS.map(t => [t.id, t]))
    return player.order
      .filter(id => !player.hidden.includes(id))
      .map(id => byId.get(id))
      .filter((t): t is Track => Boolean(t))
  }, [player])

  return (
    <MusicContext.Provider
      value={{ releases, setReleaseGenres, countGenreUsage, clearGenre, player, visibleTracks, setPlayerVisible, moveTrack, setTrackHidden }}
    >
      {children}
    </MusicContext.Provider>
  )
}

export function useMusic() {
  return useContext(MusicContext)
}
