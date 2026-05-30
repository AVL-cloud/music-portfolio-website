'use client'
import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'
import { useRouter, usePathname } from 'next/navigation'

/**
 * Visitor favourites — a per-browser user preference (localStorage), keyed by
 * `${contentType}:${contentId}`. Will move to a per-user D1 table when auth + DB land.
 *
 * Favouriting requires being logged in: toggling while logged out redirects to
 * /login?next=<current path> instead of saving.
 */

const STORAGE_KEY = 'swc-favourites'

function key(type: string, id: string) {
  return `${type}:${id}`
}

interface FavouritesContextValue {
  isLoggedIn: boolean
  isFaved: (type: string, id: string) => boolean
  /** Toggle a favourite. Returns false and redirects to login if logged out. */
  toggleFavourite: (type: string, id: string) => boolean
  /** All faved ids for a given content type, in the user's saved order. */
  favedIdsOf: (type: string) => string[]
  /** Move a favourite up (-1) or down (+1) within its content type — saved as a preference. */
  moveFavourite: (type: string, id: string, dir: -1 | 1) => void
}

const FavouritesContext = createContext<FavouritesContextValue>({
  isLoggedIn: false,
  isFaved: () => false,
  toggleFavourite: () => false,
  favedIdsOf: () => [],
  moveFavourite: () => {},
})

export function FavouritesProvider({
  children,
  isLoggedIn,
}: {
  children: ReactNode
  isLoggedIn: boolean
}) {
  const router = useRouter()
  const pathname = usePathname()
  const [faved, setFaved] = useState<string[]>([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) {
        const stored = JSON.parse(raw) as string[]
        if (Array.isArray(stored)) setFaved(stored)
      }
    } catch {
      // ignore parse errors
    }
  }, [])

  const persist = useCallback((next: string[]) => {
    setFaved(next)
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next))
    } catch {
      // ignore
    }
  }, [])

  const isFaved = useCallback((type: string, id: string) => faved.includes(key(type, id)), [faved])

  const toggleFavourite = useCallback(
    (type: string, id: string) => {
      if (!isLoggedIn) {
        router.push(`/login?next=${encodeURIComponent(pathname)}`)
        return false
      }
      const k = key(type, id)
      persist(faved.includes(k) ? faved.filter(x => x !== k) : [...faved, k])
      return true
    },
    [isLoggedIn, faved, persist, router, pathname],
  )

  const favedIdsOf = useCallback(
    (type: string) =>
      faved.filter(k => k.startsWith(`${type}:`)).map(k => k.slice(type.length + 1)),
    [faved],
  )

  const moveFavourite = useCallback(
    (type: string, id: string, dir: -1 | 1) => {
      const k = key(type, id)
      const sameType = faved.filter(x => x.startsWith(`${type}:`))
      const i = sameType.indexOf(k)
      const swapWith = sameType[i + dir]
      if (i < 0 || !swapWith) return
      const a = faved.indexOf(k)
      const b = faved.indexOf(swapWith)
      const next = [...faved]
      ;[next[a], next[b]] = [next[b], next[a]]
      persist(next)
    },
    [faved, persist],
  )

  return (
    <FavouritesContext.Provider value={{ isLoggedIn, isFaved, toggleFavourite, favedIdsOf, moveFavourite }}>
      {children}
    </FavouritesContext.Provider>
  )
}

export function useFavourites() {
  return useContext(FavouritesContext)
}
