'use client'
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react'
import { en, fr } from '@/lib/i18n'
import { applyOverrides } from '@/lib/i18n/flatten'
import type { Locale, Translations } from '@/lib/i18n'

// ─── Storage keys ─────────────────────────────────────────────────────────────
const LOCALE_KEY    = 'swc-locale'
const OVERRIDES_KEY = (locale: Locale) => `swc-translations-${locale}`

// ─── Feature flag ─────────────────────────────────────────────────────────────
/**
 * Set to true when French translations are ready to ship.
 * While false the language switcher is hidden and the locale is locked to 'en'.
 */
export const MULTILINGUAL_ENABLED = false

// ─── Base translations ────────────────────────────────────────────────────────
const BASE_TRANSLATIONS: Record<Locale, Translations> = { en, fr }

// ─── Context ──────────────────────────────────────────────────────────────────
interface I18nContextValue {
  locale: Locale
  t: Translations
  /** Flat overrides stored for the current locale (dot-key → value) */
  overrides: Record<string, string>
  setLocale: (locale: Locale) => void
  /** Save a single key override for the current locale */
  setOverride: (key: string, value: string) => void
  /** Remove override for a key — resets to the hardcoded default */
  resetOverride: (key: string) => void
  /** Whether the multilingual switcher is available to end-users */
  multilingualEnabled: boolean
}

const I18nContext = createContext<I18nContextValue>({
  locale: 'en',
  t: en,
  overrides: {},
  setLocale: () => {},
  setOverride: () => {},
  resetOverride: () => {},
  multilingualEnabled: MULTILINGUAL_ENABLED,
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')
  const [overridesByLocale, setOverridesByLocale] = useState<
    Partial<Record<Locale, Record<string, string>>>
  >({})

  // Hydrate locale + overrides from localStorage on mount
  useEffect(() => {
    try {
      // Locale (only when multilingual is on)
      if (MULTILINGUAL_ENABLED) {
        const stored = localStorage.getItem(LOCALE_KEY) as Locale | null
        if (stored === 'en' || stored === 'fr') {
          setLocaleState(stored)
        } else {
          const browser = navigator.language.slice(0, 2) as Locale
          if (browser === 'fr') setLocaleState('fr')
        }
      }

      // Overrides for both locales
      const loaded: Partial<Record<Locale, Record<string, string>>> = {}
      for (const loc of ['en', 'fr'] as Locale[]) {
        try {
          const raw = localStorage.getItem(OVERRIDES_KEY(loc))
          if (raw) loaded[loc] = JSON.parse(raw)
        } catch { /* malformed JSON — ignore */ }
      }
      setOverridesByLocale(loaded)
    } catch { /* localStorage not available (SSR) */ }
  }, [])

  const setLocale = useCallback((next: Locale) => {
    if (!MULTILINGUAL_ENABLED) return
    setLocaleState(next)
    try { localStorage.setItem(LOCALE_KEY, next) } catch { /* ignore */ }
  }, [])

  const overrides = useMemo(
    () => overridesByLocale[locale] ?? {},
    [overridesByLocale, locale],
  )

  const persistOverrides = useCallback(
    (loc: Locale, next: Record<string, string>) => {
      setOverridesByLocale(prev => ({ ...prev, [loc]: next }))
      try {
        localStorage.setItem(OVERRIDES_KEY(loc), JSON.stringify(next))
      } catch { /* ignore */ }
    },
    [],
  )

  const setOverride = useCallback(
    (key: string, value: string) => {
      const current = overridesByLocale[locale] ?? {}
      persistOverrides(locale, { ...current, [key]: value })
    },
    [locale, overridesByLocale, persistOverrides],
  )

  const resetOverride = useCallback(
    (key: string) => {
      const current = { ...(overridesByLocale[locale] ?? {}) }
      delete current[key]
      persistOverrides(locale, current)
    },
    [locale, overridesByLocale, persistOverrides],
  )

  // Merge base + overrides → final translations object
  const t = useMemo(() => {
    const base = BASE_TRANSLATIONS[locale]
    const ov = overridesByLocale[locale]
    if (!ov || Object.keys(ov).length === 0) return base
    return applyOverrides(base, ov)
  }, [locale, overridesByLocale])

  return (
    <I18nContext.Provider
      value={{ locale, t, overrides, setLocale, setOverride, resetOverride, multilingualEnabled: MULTILINGUAL_ENABLED }}
    >
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
