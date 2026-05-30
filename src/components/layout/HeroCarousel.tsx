'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const SLIDES = [
  { src: '/hero/concert.jpg',  alt: 'Live concert with dramatic stage lighting' },
  { src: '/hero/guitar.jpg',   alt: 'Guitar fretboard close-up' },
  { src: '/hero/studio.jpg',   alt: 'Professional recording studio' },
  { src: '/hero/live.jpg',     alt: 'Live music performance' },
  { src: '/hero/mixing.jpg',   alt: 'Mixing board in a music studio' },
]

const INTERVAL_MS = 10000
const TRANSITION_MS = 1000

export function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setCurrent(c => (c + 1) % SLIDES.length)
        setFading(false)
      }, TRANSITION_MS)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      {/* Images — stack them; only current is visible */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className={cn(
            'absolute inset-0 transition-opacity',
            i === current
              ? fading ? 'opacity-0' : 'opacity-100'
              : 'opacity-0',
          )}
          style={{ transitionDuration: `${TRANSITION_MS}ms` }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover object-center scale-105"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay — keeps text readable */}
      <div className="absolute inset-0 bg-[var(--color-bg)] opacity-70" />

      {/* Subtle vignette at the bottom to blend into page */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[var(--color-bg)] to-transparent" />

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
        {SLIDES.map((_, i) => (
          <div
            key={i}
            className={cn(
              'h-1 rounded-full transition-all duration-500',
              i === current
                ? 'w-6 bg-[var(--color-accent-1)]'
                : 'w-1.5 bg-[var(--color-text-subtle)] opacity-50',
            )}
          />
        ))}
      </div>
    </div>
  )
}
