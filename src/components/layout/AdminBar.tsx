'use client'
import { useState } from 'react'
import { Settings2, Eye, Pencil, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AdminBarProps {
  isAdmin?: boolean
  editMode?: boolean
  onEditModeToggle?: (value: boolean) => void
}

export function AdminBar({ isAdmin, editMode, onEditModeToggle }: AdminBarProps) {
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
        <span className="font-medium">Admin mode</span>
        <div className="flex items-center gap-2 ml-auto">
          <button
            onClick={() => onEditModeToggle?.(!editMode)}
            data-testid="admin-bar-edit-toggle"
            className={cn(
              'inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium transition-colors',
              editMode ? 'bg-white/20' : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white',
            )}
          >
            {editMode ? <Pencil className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
            {editMode ? 'Editing' : 'Viewing'}
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
