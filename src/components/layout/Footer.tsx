import Link from 'next/link'
import { Music2 } from 'lucide-react'

export function Footer() {
  return (
    <footer data-testid="footer" className="border-t border-[var(--color-border)] bg-[var(--color-surface)] mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Music2 className="h-4 w-4 text-[var(--color-accent-1)]" />
            <span className="text-sm font-medium text-[var(--color-text-muted)]">Sonic Wave Studio</span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="https://www.ultimate-guitar.com" target="_blank" rel="noopener noreferrer"
              data-testid="footer-link-ultimate-guitar"
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-1)] transition-colors">
              Ultimate Guitar
            </a>
            <a href="https://distrokid.com" target="_blank" rel="noopener noreferrer"
              data-testid="footer-link-distrokid"
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-1)] transition-colors">
              Distrokid · 2909574 Records DK
            </a>
            <Link href="/about" data-testid="footer-link-about"
              className="text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-1)] transition-colors">
              About
            </Link>
          </div>

          <p className="text-xs text-[var(--color-text-subtle)] text-center">
            Thank you for listening. 🎸<br />
            © {new Date().getFullYear()} Antoine Vlieghe
          </p>
        </div>
      </div>
    </footer>
  )
}
