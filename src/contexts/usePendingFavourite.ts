'use client'
import { useEffect, useRef } from 'react'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { useFavourites } from './FavouritesContext'

/**
 * Reads a `?pending=fav:type:id` query param set by FavouritesContext when a
 * logged-out user tries to favourite something. Once the user is logged in,
 * fires the action and clears the param from the URL.
 *
 * Call this once at the top of any page that renders favourite buttons.
 */
export function usePendingFavourite() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()
  const { isLoggedIn, toggleFavourite } = useFavourites()
  const fired = useRef(false)

  useEffect(() => {
    if (!isLoggedIn || fired.current) return
    const pending = searchParams.get('pending')
    if (!pending || !pending.startsWith('fav:')) return

    const parts = pending.split(':')
    if (parts.length < 3) return
    const [, type, ...idParts] = parts
    const id = idParts.join(':')

    fired.current = true
    toggleFavourite(type, id)

    // Remove the pending param from the URL without adding a history entry.
    const params = new URLSearchParams(searchParams.toString())
    params.delete('pending')
    const qs = params.toString()
    router.replace(qs ? `${pathname}?${qs}` : pathname)
  }, [isLoggedIn, searchParams, pathname, router, toggleFavourite])
}
