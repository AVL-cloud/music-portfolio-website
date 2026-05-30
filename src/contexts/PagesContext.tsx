'use client'
import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

/**
 * Admin-managed page visibility. A disabled page is hidden from visitors (nav + route),
 * but stays visible and editable for admins. React state + localStorage, until D1 lands.
 */

const STORAGE_KEY = 'swc-pages'

export type PageKey = 'music' | 'covers' | 'tabs' | 'courses' | 'gear' | 'about' | 'contact'

export const MANAGEABLE_PAGES: PageKey[] = ['music', 'covers', 'tabs', 'courses', 'gear', 'about', 'contact']

// Maps a URL pathname to its managed page key (longest-prefix match), or null.
export function pageKeyForPath(pathname: string): PageKey | null {
  return MANAGEABLE_PAGES.find(k => pathname === `/${k}` || pathname.startsWith(`/${k}/`)) ?? null
}

interface PagesContextValue {
  /** True unless the page has been explicitly disabled by an admin. */
  isEnabled: (key: PageKey) => boolean
  setEnabled: (key: PageKey, enabled: boolean) => void
}

const PagesContext = createContext<PagesContextValue>({
  isEnabled: () => true,
  setEnabled: () => {},
})

export function PagesProvider({ children }: { children: ReactNode }) {
  // Stores only the disabled keys; everything else is enabled by default.
  const [disabled, setDisabled] = useState<PageKey[]>([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const stored = JSON.parse(raw) as PageKey[]
        if (Array.isArray(stored)) setDisabled(stored.filter(k => MANAGEABLE_PAGES.includes(k)))
      }
    } catch {
      // ignore parse errors
    }
  }, [])

  const isEnabled = useCallback((key: PageKey) => !disabled.includes(key), [disabled])

  const setEnabled = useCallback((key: PageKey, enabled: boolean) => {
    setDisabled(prev => {
      const next = enabled ? prev.filter(k => k !== key) : [...new Set([...prev, key])]
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)) } catch { /* ignore */ }
      return next
    })
  }, [])

  return (
    <PagesContext.Provider value={{ isEnabled, setEnabled }}>
      {children}
    </PagesContext.Provider>
  )
}

export function usePages() {
  return useContext(PagesContext)
}
