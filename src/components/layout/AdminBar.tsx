'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Settings2, Eye, Pencil, ChevronDown, Database, Languages, Inbox, Files } from 'lucide-react'
import { useAdmin } from '@/contexts/AdminContext'
import { useI18n } from '@/contexts/I18nContext'
import { cn } from '@/lib/utils'

export function AdminBar() {
  const { isAdmin, editMode, setEditMode } = useAdmin()
  const { t } = useI18n()
  const [collapsed, setCollapsed] = useState(false)

  if (!isAdmin) return null

  if (collapsed) {
    return (
      <div
        data-testid="admin-bar"
        onClick={() => setCollapsed(false)}
        className="w-full h-1 bg-[var(--color-accent-1)] cursor-pointer hover:h-2 transition-all"
        title="Expand admin bar"
      />
    )
  }

  return (
    <div data-testid="admin-bar" className="w-full bg-[var(--color-accent-1)] text-white text-xs">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center gap-4 h-8">
        <Settings2 className="h-3.5 w-3.5 shrink-0" />
        <span className="font-medium">{t.admin.adminMode}</span>

        {/* Quick links */}
        <Link
          href="/admin/datasets"
          data-testid="admin-bar-datasets-link"
          className="inline-flex items-center gap-1 text-white/80 hover:text-white transition-colors"
        >
          <Database className="h-3 w-3" />
          {t.admin.datasets}
        </Link>

        <Link
          href="/admin/pages"
          data-testid="admin-bar-pages-link"
          className="inline-flex items-center gap-1 text-white/80 hover:text-white transition-colors"
        >
          <Files className="h-3 w-3" />
          {t.pages.adminTitle}
        </Link>

        <Link
          href="/admin/translations"
          data-testid="admin-bar-translations-link"
          className="inline-flex items-center gap-1 text-white/80 hover:text-white transition-colors"
        >
          <Languages className="h-3 w-3" />
          Translations
        </Link>

        <Link
          href="/admin/contact-requests"
          data-testid="admin-bar-contact-link"
          className="inline-flex items-center gap-1 text-white/80 hover:text-white transition-colors"
        >
          <Inbox className="h-3 w-3" />
          Contact requests
        </Link>

        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={() => setEditMode(!editMode)}
            data-testid="admin-bar-edit-toggle"
            className={cn(
              'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-colors',
              editMode ? 'bg-white/20' : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white',
            )}
          >
            {editMode ? <Pencil className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
            {editMode ? t.admin.editing : t.admin.viewing}
          </button>
          <button onClick={() => setCollapsed(true)} aria-label="Collapse admin bar"
            className="p-1 rounded hover:bg-white/20 text-white/70 hover:text-white transition-colors">
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
