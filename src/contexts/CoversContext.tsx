'use client'
import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import type { Cover } from '@/components/music/CoverCard'

// Mock seed data — will be replaced with a D1 query in Phase 3.
export const DEFAULT_COVERS: Cover[] = [
  { id: '1', title: 'Comfortably Numb', bandName: 'Pink Floyd', style: 'rock', coverType: 'solo', instruments: ['guitar'], embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', socialLinks: { YouTube: 'https://youtube.com', Instagram: 'https://instagram.com' } },
  { id: '2', title: 'Nothing Else Matters', bandName: 'Metallica', style: 'metal', coverType: 'acoustic', instruments: ['guitar'], embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: '3', title: 'Hallelujah', bandName: 'Leonard Cohen', style: 'acoustic', coverType: 'fingerpicking', instruments: ['guitar', 'vocals'], embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: '4', title: 'Hotel California', bandName: 'Eagles', style: 'rock', coverType: 'solo', instruments: ['guitar'], embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: '5', title: 'Stairway to Heaven', bandName: 'Led Zeppelin', style: 'rock', coverType: 'acoustic', instruments: ['guitar'], embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: '6', title: 'Blackbird', bandName: 'The Beatles', style: 'acoustic', coverType: 'fingerpicking', instruments: ['guitar'], embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
]

const STORAGE_KEY = 'swc-covers'

// Which Cover field a managed dataset maps onto.
export type CoverField = 'style' | 'coverType'

interface CoversContextValue {
  covers: Cover[]
  setCovers: (covers: Cover[]) => void
  // How many covers currently use `value` in the given field.
  countUsing: (field: CoverField, value: string) => number
  // Remove `value` from every cover that uses it (clears the field).
  clearDatasetValue: (field: CoverField, value: string) => void
}

const CoversContext = createContext<CoversContextValue>({
  covers: DEFAULT_COVERS,
  setCovers: () => {},
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
    <CoversContext.Provider value={{ covers, setCovers, countUsing, clearDatasetValue }}>
      {children}
    </CoversContext.Provider>
  )
}

export function useCovers() {
  return useContext(CoversContext)
}
