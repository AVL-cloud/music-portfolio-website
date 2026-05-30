import Link from 'next/link'
import { ArrowRight, Music, Video, BookOpen, Guitar, Settings2, User } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Card'
import { HeroCarousel } from '@/components/layout/HeroCarousel'

const SECTIONS = [
  { href: '/music',   Icon: Music,    label: 'Music',   description: 'Releases, EPs, and the stories behind them.' },
  { href: '/covers',  Icon: Video,    label: 'Covers',  description: 'Video covers of songs I love.' },
  { href: '/courses', Icon: BookOpen, label: 'Courses', description: 'Guitar and music production lessons.' },
  { href: '/tabs',    Icon: Guitar,    label: 'Tabs',  description: 'Guitar Pro and PDF tabs to download.' },
  { href: '/gear',    Icon: Settings2, label: 'Gear',  description: 'The instruments and equipment I use.' },
  { href: '/about',   Icon: User,      label: 'About', description: 'Who I am, my story, and how to reach me.' },
]

export default function FrontPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center overflow-hidden px-4 text-center">
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <p className="text-sm font-medium tracking-widest uppercase text-[var(--color-accent-1)]">
            Sonic Wave Studio
          </p>
          <h1 className="text-5xl sm:text-6xl font-semibold tracking-tight leading-tight">
            Music by<br />
            <span className="text-[var(--color-accent-1)]">Antoine Vlieghe</span>
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] max-w-lg mx-auto">
            Composer, guitarist, and producer. From ambient to experimental rock.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link href="/music" data-testid="hero-cta-music">
              <Button size="lg">Listen <ArrowRight className="h-4 w-4" /></Button>
            </Link>
            <Link href="/about" data-testid="hero-cta-about">
              <Button size="lg" variant="secondary">About me</Button>
            </Link>
          </div>
        </div>

        <HeroCarousel />
      </section>

      {/* Explore sections */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-2xl font-semibold mb-8">Explore</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SECTIONS.map(({ href, Icon, label, description }) => (
            <Link key={href} href={href} data-testid={`home-section-${label.toLowerCase()}`}>
              <Card hover className="h-full group">
                <CardContent className="flex flex-col gap-3 h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-accent-1-subtle)] text-[var(--color-accent-1)] group-hover:bg-[var(--color-accent-1)] group-hover:text-white transition-colors">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{label}</h3>
                    <p className="text-sm text-[var(--color-text-muted)]">{description}</p>
                  </div>
                  <div className="mt-auto flex items-center gap-1 text-xs font-medium text-[var(--color-accent-1)]">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
