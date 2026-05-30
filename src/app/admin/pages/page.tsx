'use client'
import { redirect } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'
import { useAdmin } from '@/contexts/AdminContext'
import { usePages, MANAGEABLE_PAGES } from '@/contexts/PagesContext'
import { useI18n } from '@/contexts/I18nContext'
import { PageHeader } from '@/components/layout/PageShell'
import { cn } from '@/lib/utils'

export default function AdminPagesPage() {
  const { isAdmin } = useAdmin()
  const { isEnabled, setEnabled } = usePages()
  const { t } = useI18n()

  if (!isAdmin) redirect('/')

  return (
    <main className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      <PageHeader title={t.pages.adminTitle} description={t.pages.adminDescription} />

      <section className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] overflow-hidden">
        <ul className="divide-y divide-[var(--color-border)]">
          {MANAGEABLE_PAGES.map(key => {
            const enabled = isEnabled(key)
            return (
              <li key={key} data-testid={`admin-page-row-${key}`}
                className="flex items-center justify-between gap-4 px-5 py-3">
                <div>
                  <span className="text-sm font-medium text-[var(--color-text)]">{t.nav[key]}</span>
                  <span className="ml-2 text-xs text-[var(--color-text-subtle)] font-mono">/{key}</span>
                </div>
                <button
                  onClick={() => setEnabled(key, !enabled)}
                  aria-pressed={enabled}
                  data-testid={`admin-page-toggle-${key}`}
                  className={cn(
                    'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-colors',
                    enabled
                      ? 'bg-[var(--color-success-subtle)] text-[var(--color-success)]'
                      : 'bg-[var(--color-surface-raised)] text-[var(--color-text-muted)]',
                  )}
                >
                  {enabled ? <Eye className="h-3.5 w-3.5" /> : <EyeOff className="h-3.5 w-3.5" />}
                  {enabled ? t.pages.visible : t.pages.hidden}
                </button>
              </li>
            )
          })}
        </ul>
      </section>

      <p className="text-sm text-[var(--color-text-muted)]">{t.pages.adminHint}</p>
    </main>
  )
}
