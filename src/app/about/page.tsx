import type { Metadata } from 'next'
import Link from 'next/link'
import { Radio, ExternalLink, MapPin, Disc3 } from 'lucide-react'
import { PageShell } from '@/components/layout/PageShell'
import { AboutClient } from './AboutClient'

export const metadata: Metadata = {
  title: 'About — Sonic Wave Studio',
  description:
    'Antoine Vlieghe — independent instrumentalist, singer, and songwriter from France, based in Paris.',
}

const RELEASES = [
  { title: 'My Icarus Sun',           year: '2021', type: 'Single' },
  { title: 'A Wish For Another Life', year: '2022', type: 'EP' },
  { title: 'Blue Birds',             year: '2023', type: 'Single' },
  { title: 'Aftermath',              year: '2023', type: 'Single' },
  { title: 'Whispers in the Abyss',  year: '2024', type: 'Single' },
  { title: 'Eerie Endeavours',       year: '2025', type: 'EP' },
]

const LINKS = [
  { href: 'https://open.spotify.com/intl-fr/artist/5ZMM2wF65CgSFtdV8faw8T', label: 'Spotify' },
  { href: 'https://music.apple.com/us/artist/antoine-vlieghe/1559276858',   label: 'Apple Music' },
  { href: 'https://www.youtube.com/channel/UCTf2Iqbvjub3-NS2aXTgr_A',       label: 'YouTube' },
  { href: 'https://www.deezer.com/fr/artist/127213952',                      label: 'Deezer' },
  { href: 'https://www.instagram.com/antoinevl.music/',                      label: 'Instagram' },
  { href: 'https://www.tiktok.com/@antoine_vlieghe',                         label: 'TikTok' },
]

export default function AboutPage() {
  return (
    <PageShell narrow>

      {/* ── Intro ────────────────────────────────────────────────────── */}
      <section className="mb-16 pt-4">
        <div className="flex items-center gap-2 text-sm text-[var(--color-text-subtle)] mb-4">
          <MapPin className="h-3.5 w-3.5" />
          <span>Paris, France</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-[var(--color-text)] leading-tight mb-6">
          Antoine<br />
          <span className="text-[var(--color-accent-1)]">Vlieghe</span>
        </h1>

        <p className="text-xl text-[var(--color-text-muted)] leading-relaxed mb-4 max-w-xl">
          Independent instrumentalist, singer, and songwriter from France.
        </p>

        <p className="text-[var(--color-text-muted)] leading-relaxed max-w-xl">
          Antoine's music explores the tension between the things we carry and the things we let go —
          love, loss, and the quiet passage of time. Cinematic in scope, introspective in voice,
          each release is a small narrative built from layered guitars, honest lyrics, and
          the spaces in between.
        </p>
      </section>

      {/* ── Divider ──────────────────────────────────────────────────── */}
      <hr className="border-[var(--color-border)] mb-16" />

      <AboutClient />

      {/* ── Discography highlights ────────────────────────────────────── */}
      <section className="mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-subtle)] mb-6">
          Selected works
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {RELEASES.map(({ title, year, type }) => (
            <Link
              key={title}
              href="/music"
              className="group flex items-center gap-3 p-3 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] hover:border-[var(--color-accent-1)]/40 hover:bg-[var(--color-accent-1-subtle)] transition-colors"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-surface-raised)] text-[var(--color-accent-1)] group-hover:bg-[var(--color-accent-1)] group-hover:text-white transition-colors">
                <Disc3 className="h-4 w-4" />
              </div>
              <div className="min-w-0">
                <p className="font-medium text-sm text-[var(--color-text)] truncate">{title}</p>
                <p className="text-xs text-[var(--color-text-subtle)]">{year} · {type}</p>
              </div>
            </Link>
          ))}
        </div>

        <p className="mt-4 text-sm text-[var(--color-text-subtle)]">
          Full discography on the{' '}
          <Link href="/music" className="text-[var(--color-accent-1)] hover:underline">
            Music page
          </Link>
          .
        </p>
      </section>

      {/* ── Connect ──────────────────────────────────────────────────── */}
      <section className="mb-16">
        <h2 className="text-xs font-semibold uppercase tracking-widest text-[var(--color-text-subtle)] mb-6">
          Listen & follow
        </h2>

        <div className="flex flex-wrap gap-2">
          {LINKS.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[var(--radius-full)] border border-[var(--color-border)] bg-[var(--color-surface)] text-sm text-[var(--color-text-muted)] hover:text-[var(--color-accent-1)] hover:border-[var(--color-accent-1)]/50 transition-colors"
            >
              {label}
              <ExternalLink className="h-3 w-3 opacity-50" />
            </a>
          ))}
        </div>
      </section>

      {/* ── Footer note ──────────────────────────────────────────────── */}
      <div className="border-t border-[var(--color-border)] pt-8 text-sm text-[var(--color-text-subtle)] flex items-center gap-2">
        <Radio className="h-3.5 w-3.5 text-[var(--color-accent-1)]" />
        Thanks for visiting — hope you had a good time.
      </div>

    </PageShell>
  )
}
