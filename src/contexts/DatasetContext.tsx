'use client'
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface DatasetItem {
  value: string   // slug / filter key
  label: string   // display label (may differ by locale in the future)
}

export interface Dataset {
  key: string
  items: DatasetItem[]
}

// ─── Defaults ─────────────────────────────────────────────────────────────────

export const DEFAULT_GENRES: DatasetItem[] = [
  { value: 'rock',       label: 'Rock' },
  { value: 'pop',        label: 'Pop' },
  { value: 'grunge',     label: 'Grunge' },
  { value: 'metal',      label: 'Metal' },
  { value: 'jazz',       label: 'Jazz' },
  { value: 'blues',      label: 'Blues' },
  { value: 'classical',  label: 'Classical' },
  { value: 'soundtrack', label: 'Soundtrack' },
  { value: 'instrumental', label: 'Instrumental' },
  { value: 'alternative',  label: 'Alternative' },
  { value: 'soul',         label: 'Soul' },
]

export const DEFAULT_COVER_TYPES: DatasetItem[] = [
  { value: 'acoustic',    label: 'Acoustic' },
  { value: 'piano',       label: 'Piano' },
  { value: 'guitar',      label: 'Guitar' },
  { value: 'duet',        label: 'Duet' },
  { value: 'guitar-solo', label: 'Guitar Solo' },
]

const STORAGE_KEY = 'swc-datasets'

// ─── Context ──────────────────────────────────────────────────────────────────

interface DatasetContextValue {
  genres: DatasetItem[]
  coverTypes: DatasetItem[]
  setGenres: (items: DatasetItem[]) => void
  setCoverTypes: (items: DatasetItem[]) => void
}

const DatasetContext = createContext<DatasetContextValue>({
  genres: DEFAULT_GENRES,
  coverTypes: DEFAULT_COVER_TYPES,
  setGenres: () => {},
  setCoverTypes: () => {},
})

export function DatasetProvider({ children }: { children: ReactNode }) {
  const [genres, setGenresState] = useState<DatasetItem[]>(DEFAULT_GENRES)
  const [coverTypes, setCoverTypesState] = useState<DatasetItem[]>(DEFAULT_COVER_TYPES)

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const stored = JSON.parse(raw) as { genres?: DatasetItem[]; coverTypes?: DatasetItem[] }
        if (stored.genres?.length)     setGenresState(stored.genres)
        if (stored.coverTypes?.length) setCoverTypesState(stored.coverTypes)
      }
    } catch {
      // ignore parse errors
    }
  }, [])

  const persist = useCallback((patch: { genres?: DatasetItem[]; coverTypes?: DatasetItem[] }) => {
    try {
      const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '{}')
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ ...prev, ...patch }))
    } catch {
      // ignore
    }
  }, [])

  const setGenres = useCallback((items: DatasetItem[]) => {
    setGenresState(items)
    persist({ genres: items })
  }, [persist])

  const setCoverTypes = useCallback((items: DatasetItem[]) => {
    setCoverTypesState(items)
    persist({ coverTypes: items })
  }, [persist])

  return (
    <DatasetContext.Provider value={{ genres, coverTypes, setGenres, setCoverTypes }}>
      {children}
    </DatasetContext.Provider>
  )
}

export function useDataset() {
  return useContext(DatasetContext)
}
