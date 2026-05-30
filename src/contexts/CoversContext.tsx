'use client'
import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import type { Cover } from '@/components/music/CoverCard'

// Seeded from antoinevlieghemusic.com/covers. Videos (embedUrl) are added by the
// admin in edit mode; until then each card shows a "video coming soon" placeholder.
// `videoDate` is unknown for now — set it in edit mode to order the grid.
// Will be replaced with a D1 query when the CMS lands.
export const DEFAULT_COVERS: Cover[] = [
  {
    id: 'bohemian-rhapsody', title: 'Bohemian Rhapsody', bandName: 'Queen',
    style: 'rock', coverType: 'guitar-solo', instruments: ['guitar'], embedUrl: '',
    description: 'Working on these bends with some Brian May.',
  },
  {
    id: 'shape-of-my-heart', title: 'Shape of My Heart', bandName: 'Sting',
    style: 'pop', coverType: 'acoustic', instruments: ['guitar'], embedUrl: '',
    description: 'Acoustic rendition — I made a tab available on Ultimate Guitar.',
  },
  {
    id: 'asking-alexandria', title: 'Asking Alexandria Cover', bandName: 'Asking Alexandria',
    style: 'metal', coverType: 'guitar-solo', instruments: ['guitar'], embedUrl: '',
    description: 'One of the best metalcore bands out there, if you ask me.',
  },
]

const STORAGE_KEY = 'swc-covers'

// Which Cover field a managed dataset maps onto.
export type CoverField = 'style' | 'coverType'

interface CoversContextValue {
  covers: Cover[]
  setCovers: (covers: Cover[]) => void
  // CRUD used by the admin edit mode on the covers page.
  addCover: (cover: Cover) => void
  updateCover: (id: string, patch: Partial<Cover>) => void
  deleteCover: (id: string) => void
  // How many covers currently use `value` in the given field.
  countUsing: (field: CoverField, value: string) => number
  // Remove `value` from every cover that uses it (clears the field).
  clearDatasetValue: (field: CoverField, value: string) => void
}

const CoversContext = createContext<CoversContextValue>({
  covers: DEFAULT_COVERS,
  setCovers: () => {},
  addCover: () => {},
  updateCover: () => {},
  deleteCover: () => {},
  countUsing: () => 0,
  clearDatasetValue: () => {},
})

export function CoversProvider({ children }: { children: ReactNode }) {
  const [covers, setCoversState] = useState<Cover[]>(DEFAULT_COVERS)

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const stored = JSON.parse(raw) as Cover[]
        if (Array.isArray(stored)) setCoversState(stored)
      }
    } catch {
      // ignore parse errors
    }
  }, [])

  const setCovers = useCallback((next: Cover[]) => {
    setCoversState(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      // ignore
    }
  }, [])

  const addCover = useCallback(
    (cover: Cover) => setCovers([cover, ...covers]),
    [covers, setCovers],
  )

  const updateCover = useCallback(
    (id: string, patch: Partial<Cover>) =>
      setCovers(covers.map(c => (c.id === id ? { ...c, ...patch } : c))),
    [covers, setCovers],
  )

  const deleteCover = useCallback(
    (id: string) => setCovers(covers.filter(c => c.id !== id)),
    [covers, setCovers],
  )

  const countUsing = useCallback(
    (field: CoverField, value: string) => covers.filter(c => c[field] === value).length,
    [covers],
  )

  const clearDatasetValue = useCallback(
    (field: CoverField, value: string) => {
      setCovers(covers.map(c => (c[field] === value ? { ...c, [field]: '' } : c)))
    },
    [covers, setCovers],
  )

  return (
    <CoversContext.Provider value={{ covers, setCovers, addCover, updateCover, deleteCover, countUsing, clearDatasetValue }}>
      {children}
    </CoversContext.Provider>
  )
}

export function useCovers() {
  return useContext(CoversContext)
}
