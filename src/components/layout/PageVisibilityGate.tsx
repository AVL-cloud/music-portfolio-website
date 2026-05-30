'use client'
import { usePathname } from 'next/navigation'
import { EyeOff } from 'lucide-react'
import { usePages, pageKeyForPath } from '@/contexts/PagesContext'
import { useAdmin } from '@/contexts/AdminContext'
import { useI18n } from '@/contexts/I18nContext'

/**
 * Wraps all page content. If the current route maps to a page an admin has disabled:
 *  - visitors see an "unavailable" notice instead of the page;
 *  - admins still see the page, with a banner noting it's hidden from visitors.
 */
export function PageVisibilityGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const { isEnabled } = usePages()
  const { isAdmin } = useAdmin()
  const { t } = useI18n()

  const key = pageKeyForPath(pathname)
  const hidden = key ? !isEnabled(key) : false

  if (hidden && !isAdmin) {
    return (
      <main className="mx-auto flex max-w-3xl flex-col items-center justify-center px-4 py-24 text-center" data-testid="page-unavailable">
        <EyeOff className="mb-4 h-10 w-10 text-[var(--color-text-subtle)]" />
        <h1 className="text-2xl font-semibold text-[var(--color-text)]">{t.pages.unavailableTitle}</h1>
        <p className="mt-2 text-[var(--color-text-muted)]">{t.pages.unavailableBody}</p>
      </main>
    )
  }

  return (
    <>
      {hidden && isAdmin && (
        <div
          data-testid="page-hidden-banner"
          className="flex items-center justify-center gap-2 bg-[var(--color-warning-subtle)] px-4 py-2 text-sm font-medium text-[var(--color-warning)]"
        >
          <EyeOff className="h-4 w-4" /> {t.pages.hiddenBanner}
        </div>
      )}
      {children}
    </>
  )
}
