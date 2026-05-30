'use client'
import { useRef, useEffect, useState } from 'react'
import { X, Play, Pause, Download, Maximize2, ChevronDown } from 'lucide-react'
import { useMiniPlayer } from '@/contexts/MiniPlayerContext'
import { cn } from '@/lib/utils'

const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2]

function formatTime(s: number) {
  if (!isFinite(s) || s < 0) return '0:00'
  const m = Math.floor(s / 60)
  const sec = Math.floor(s % 60)
  return `${m}:${sec.toString().padStart(2, '0')}`
}

export function MiniPlayer() {
  const { activeCover, startTime, close } = useMiniPlayer()
  const videoRef = useRef<HTMLVideoElement>(null)
  const speedMenuRef = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [speed, setSpeed] = useState(1)
  const [showSpeed, setShowSpeed] = useState(false)
  const [error, setError] = useState(false)

  // Auto-play when cover changes; seek to startTime if provided
  useEffect(() => {
    if (!videoRef.current || !activeCover) return
    const v = videoRef.current
    setCurrentTime(0)
    setError(false)
    v.playbackRate = speed
    if (startTime > 0) {
      const onMeta = () => { v.currentTime = startTime; v.play().catch(() => {}) }
      v.addEventListener('loadedmetadata', onMeta, { once: true })
    } else {
      v.play().catch(() => {})
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeCover?.id])

  // Close speed menu on outside click
  useEffect(() => {
    if (!showSpeed) return
    const handler = (e: MouseEvent) => {
      if (speedMenuRef.current && !speedMenuRef.current.contains(e.target as Node)) {
        setShowSpeed(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [showSpeed])

  const togglePlay = () => {
    const v = videoRef.current
    if (!v) return
    if (v.paused) v.play()
    else v.pause()
  }

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (videoRef.current) videoRef.current.currentTime = Number(e.target.value)
  }

  const changeSpeed = (s: number) => {
    if (videoRef.current) videoRef.current.playbackRate = s
    setSpeed(s)
    setShowSpeed(false)
  }

  const download = () => {
    const src = activeCover?.videoUrl
    if (!src) return
    const a = document.createElement('a')
    a.href = src
    a.download = `${activeCover!.bandName} - ${activeCover!.title}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const fullscreen = () => {
    videoRef.current?.requestFullscreen?.()
  }

  if (!activeCover) return null

  const btnBase = 'flex items-center gap-1 rounded-[var(--radius-sm)] px-2 py-1 text-xs transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]'

  return (
    <div
      data-testid="mini-player"
      className="fixed bottom-4 right-4 z-50 w-80 overflow-hidden rounded-[var(--radius-xl)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-xl)]"
    >
      {/* Header */}
      <div className="flex items-center gap-2 bg-[var(--color-surface-raised)] px-3 py-2">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-[var(--color-text)]">{activeCover.title}</p>
          <p className="truncate text-xs text-[var(--color-text-muted)]">{activeCover.bandName}</p>
        </div>
        <button
          onClick={close}
          aria-label="Close mini-player"
          title="Close"
          data-testid="mini-player-close"
          className="shrink-0 rounded-full p-1.5 text-[var(--color-text-muted)] transition-colors hover:bg-[var(--color-surface)] hover:text-[var(--color-text)]"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      {/* Video */}
      <div className="aspect-video bg-black">
        {error ? (
          <div className="flex h-full items-center justify-center text-center text-xs text-[var(--color-text-muted)] px-4">
            This format cannot be played in your browser. Try downloading the file.
          </div>
        ) : (
          <video
            ref={videoRef}
            src={activeCover.videoUrl ?? undefined}
            className="h-full w-full object-contain"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            onTimeUpdate={() => setCurrentTime(videoRef.current?.currentTime ?? 0)}
            onLoadedMetadata={() => setDuration(videoRef.current?.duration ?? 0)}
            onEnded={() => setPlaying(false)}
            onError={() => setError(true)}
            data-testid="mini-player-video"
          />
        )}
      </div>

      {/* Seek + controls */}
      <div className="bg-[var(--color-surface-raised)] px-3 pb-2 pt-2">
        {/* Seek bar */}
        <div className="mb-2 flex items-center gap-2">
          <span className="w-8 text-right text-[10px] tabular-nums text-[var(--color-text-muted)]">
            {formatTime(currentTime)}
          </span>
          <input
            type="range"
            min={0}
            max={duration || 100}
            step={0.5}
            value={currentTime}
            onChange={seek}
            aria-label="Seek"
            className="flex-1 h-1 cursor-pointer accent-[var(--color-accent-1)]"
          />
          <span className="w-8 text-[10px] tabular-nums text-[var(--color-text-muted)]">
            {formatTime(duration)}
          </span>
        </div>

        {/* Control buttons */}
        <div className="flex items-center gap-0.5">
          {/* Play / Pause */}
          <button
            onClick={togglePlay}
            data-testid="mini-player-play"
            aria-label={playing ? 'Pause' : 'Play'}
            className={cn(btnBase, 'font-medium text-[var(--color-text)]')}
          >
            {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
            {playing ? 'Pause' : 'Play'}
          </button>

          <div className="flex-1" />

          {/* Playback speed */}
          <div ref={speedMenuRef} className="relative">
            <button
              onClick={() => setShowSpeed(s => !s)}
              data-testid="mini-player-speed"
              aria-label="Playback speed"
              title="Playback speed"
              className={cn(btnBase, 'text-[var(--color-text-muted)]')}
            >
              {speed}×
              <ChevronDown className={cn('h-3 w-3 transition-transform', showSpeed && 'rotate-180')} />
            </button>
            {showSpeed && (
              <div className="absolute bottom-full right-0 mb-1 min-w-[9rem] overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-lg)]">
                <p className="px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                  Playback speed
                </p>
                {SPEEDS.map(s => (
                  <button
                    key={s}
                    onClick={() => changeSpeed(s)}
                    className={cn(
                      'block w-full px-4 py-1.5 text-left text-xs transition-colors hover:bg-[var(--color-surface-raised)]',
                      s === speed ? 'font-semibold text-[var(--color-accent-1)]' : 'text-[var(--color-text)]',
                    )}
                  >
                    {s === 1 ? '1× Normal' : `${s}×`}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Download */}
          <button
            onClick={download}
            data-testid="mini-player-download"
            aria-label="Download"
            title="Download"
            className={cn(btnBase, 'text-[var(--color-text-muted)]')}
          >
            <Download className="h-3.5 w-3.5" />
            Download
          </button>

          {/* Full screen */}
          <button
            onClick={fullscreen}
            data-testid="mini-player-fullscreen"
            aria-label="Full screen"
            title="Full screen"
            className={cn(btnBase, 'text-[var(--color-text-muted)]')}
          >
            <Maximize2 className="h-3.5 w-3.5" />
            <span className="sr-only">Full screen</span>
          </button>
        </div>
      </div>
    </div>
  )
}
