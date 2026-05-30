'use client'
import { createContext, useContext, useState, useCallback, type ReactNode } from 'react'
import type { Cover } from '@/components/music/CoverCard'

interface MiniPlayerContextValue {
  activeCover: Cover | null
  startTime: number
  open: (cover: Cover, startTime?: number) => void
  close: () => void
}

const MiniPlayerContext = createContext<MiniPlayerContextValue>({
  activeCover: null,
  startTime: 0,
  open: () => {},
  close: () => {},
})

export function MiniPlayerProvider({ children }: { children: ReactNode }) {
  const [activeCover, setActiveCover] = useState<Cover | null>(null)
  const [startTime, setStartTime] = useState(0)
  const open = useCallback((cover: Cover, t = 0) => {
    setActiveCover(cover)
    setStartTime(t)
  }, [])
  const close = useCallback(() => setActiveCover(null), [])
  return (
    <MiniPlayerContext.Provider value={{ activeCover, startTime, open, close }}>
      {children}
    </MiniPlayerContext.Provider>
  )
}

export function useMiniPlayer() {
  return useContext(MiniPlayerContext)
}
