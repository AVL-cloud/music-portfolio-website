'use client'
import { useState, useRef, useEffect } from 'react'
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface Track { id: string; title: string; src: string }

interface MusicPlayerProps {
  tracks: Track[]
  className?: string
  'data-testid'?: string
}

function fmt(s: number) {
  const m = Math.floor(s / 60)
  return `${m}:${Math.floor(s % 60).toString().padStart(2, '0')}`
}

export function MusicPlayer({ tracks, className, 'data-testid': testId }: MusicPlayerProps) {
  const [idx, setIdx] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [duration, setDuration] = useState(0)
  const ref = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onTime = () => setProgress(el.currentTime)
    const onMeta = () => setDuration(el.duration)
    const onEnd = () => { if (idx < tracks.length - 1) { setIdx(i => i + 1); setPlaying(true) } else setPlaying(false) }
    el.addEventListener('timeupdate', onTime)
    el.addEventListener('loadedmetadata', onMeta)
    el.addEventListener('ended', onEnd)
    return () => { el.removeEventListener('timeupdate', onTime); el.removeEventListener('loadedmetadata', onMeta); el.removeEventListener('ended', onEnd) }
  }, [idx, tracks.length])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.src = tracks[idx].src
    el.load()
    if (playing) el.play()
  }, [idx]) // eslint-disable-line react-hooks/exhaustive-deps

  const toggle = async () => {
    const el = ref.current
    if (!el) return
    if (playing) { el.pause(); setPlaying(false) } else { await el.play(); setPlaying(true) }
  }

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = ref.current
    if (!el) return
    el.currentTime = Number(e.target.value)
    setProgress(Number(e.target.value))
  }

  return (
    <div data-testid={testId ?? 'music-player'} className={cn('bg-[var(--color-surface)] border border-[var(--color-border)] rounded-[var(--radius-lg)] p-4', className)}>
      <audio ref={ref} preload="metadata" />

      <div className="mb-4 space-y-0.5">
        {tracks.map((t, i) => (
          <button key={t.id} onClick={() => { setIdx(i); setPlaying(true) }} data-testid={`music-player-track-${t.id}`}
            className={cn('w-full flex items-center gap-3 px-3 py-2 rounded-[var(--radius-md)] text-left transition-colors text-sm',
              i === idx ? 'bg-[var(--color-accent-1-subtle)] text-[var(--color-accent-1)]' : 'hover:bg-[var(--color-surface-raised)] text-[var(--color-text)]')}>
            <span className="text-xs w-4 text-center text-[var(--color-text-muted)]">{i === idx && playing ? '▶' : i + 1}</span>
            <span className="font-medium flex-1 truncate">{t.title}</span>
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-2">
        <input type="range" min={0} max={duration || 100} value={progress} onChange={seek}
          data-testid="music-player-seek" className="w-full accent-[var(--color-accent-1)] h-1 cursor-pointer" />
        <div className="flex items-center justify-between">
          <span className="text-xs text-[var(--color-text-muted)]">{fmt(progress)}</span>
          <div className="flex items-center gap-1">
            <button onClick={() => setIdx(i => Math.max(0, i - 1))} data-testid="music-player-prev" aria-label="Previous"
              className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-[var(--color-surface-raised)] text-[var(--color-text-muted)] transition-colors">
              <SkipBack className="h-4 w-4" />
            </button>
            <button onClick={toggle} data-testid="music-player-play" aria-label={playing ? 'Pause' : 'Play'}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-1)] text-white hover:bg-[var(--color-accent-1-hover)] transition-colors shadow-[var(--shadow-sm)]">
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 translate-x-0.5" />}
            </button>
            <button onClick={() => setIdx(i => Math.min(tracks.length - 1, i + 1))} data-testid="music-player-next" aria-label="Next"
              className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-[var(--color-surface-raised)] text-[var(--color-text-muted)] transition-colors">
              <SkipForward className="h-4 w-4" />
            </button>
          </div>
          <span className="text-xs text-[var(--color-text-muted)]">{duration ? fmt(duration) : '--:--'}</span>
        </div>
      </div>
    </div>
  )
}
