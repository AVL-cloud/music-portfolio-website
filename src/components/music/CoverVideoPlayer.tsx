'use client'
import { useRef, useState, useEffect } from 'react'
import { Play, Pause, PictureInPicture2, Download } from 'lucide-react'
import type { Cover } from './CoverCard'
import { cn } from '@/lib/utils'

const SPEEDS = [0.5, 0.75, 1, 1.25, 1.5, 2]

interface CoverVideoPlayerProps {
  cover: Cover
  onPlayInMiniPlayer?: (cover: Cover, startTime?: number) => void
  isActiveInMiniPlayer?: boolean
}

export function CoverVideoPlayer({ cover, onPlayInMiniPlayer, isActiveInMiniPlayer }: CoverVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const speedMenuRef = useRef<HTMLDivElement>(null)
  const [playing, setPlaying] = useState(false)
  const [started, setStarted] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [showSpeed, setShowSpeed] = useState(false)

  // Pause inline playback when this cover is popped to mini-player
  useEffect(() => {
    if (isActiveInMiniPlayer) {
      videoRef.current?.pause()
      setPlaying(false)
    }
  }, [isActiveInMiniPlayer])

  // Close speed menu on outside click
  useEffect(() => {
    if (!showSpeed) return
    const handler = (e: MouseEvent) => {
      if (speedMenuRef.current && !speedMenuRef.current.contains(e.target as Node)) setShowSpeed(false)
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [showSpeed])

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation()
    const v = videoRef.current
    if (!v) return
    setStarted(true)
    v.paused ? v.play() : v.pause()
  }

  const changeSpeed = (e: React.MouseEvent, s: number) => {
    e.stopPropagation()
    if (videoRef.current) videoRef.current.playbackRate = s
    setSpeed(s)
    setShowSpeed(false)
  }

  const download = (e: React.MouseEvent) => {
    e.stopPropagation()
    const a = document.createElement('a')
    a.href = cover.videoUrl!
    a.download = `${cover.bandName} - ${cover.title}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  }

  const openMiniPlayer = (e: React.MouseEvent) => {
    e.stopPropagation()
    const t = videoRef.current?.currentTime ?? 0
    videoRef.current?.pause()
    setPlaying(false)
    onPlayInMiniPlayer?.(cover, t > 0 ? t : undefined)
  }

  const btnCls = 'flex items-center gap-0.5 rounded px-1.5 py-0.5 text-[10px] text-white/80 hover:bg-white/10 hover:text-white transition-colors'

  if (isActiveInMiniPlayer) {
    return (
      <div
        className="relative h-full w-full cursor-pointer"
        onClick={() => onPlayInMiniPlayer?.(cover)}
        data-testid={`cover-video-area-${cover.id}`}
      >
        <video src={cover.videoUrl} preload="metadata" className="h-full w-full object-cover pointer-events-none" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1.5 bg-black/55 text-white select-none">
          <PictureInPicture2 className="h-7 w-7 opacity-90" />
          <span className="text-[11px] font-medium">Now playing in mini-player</span>
        </div>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full group/vid" data-testid={`cover-video-area-${cover.id}`}>
      {/* Video — clicking anywhere plays/pauses inline */}
      <video
        ref={videoRef}
        src={cover.videoUrl}
        preload="metadata"
        className="h-full w-full object-cover cursor-pointer"
        onClick={togglePlay}
        onPlay={() => { setPlaying(true); setStarted(true) }}
        onPause={() => setPlaying(false)}
        onEnded={() => setPlaying(false)}
        data-testid={`cover-video-thumb-${cover.id}`}
      />

      {/* Big play button — only when video hasn't started yet */}
      {!started && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover/vid:bg-black/30 transition-colors pointer-events-none">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white ring-1 ring-white/20 opacity-75 group-hover/vid:opacity-100 transition-opacity">
            <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
          </div>
        </div>
      )}

      {/* Control bar — always visible when playing, hover-visible otherwise */}
      <div className={cn(
        'absolute bottom-0 left-0 right-0 flex items-center gap-0.5 bg-gradient-to-t from-black/75 to-transparent px-1.5 py-1.5 transition-opacity',
        playing ? 'opacity-100' : 'opacity-0 group-hover/vid:opacity-100',
      )}>
        {/* Play / Pause */}
        <button
          onClick={togglePlay}
          aria-label={playing ? 'Pause' : 'Play'}
          data-testid={`cover-play-btn-${cover.id}`}
          className={cn(btnCls, 'font-medium')}
        >
          {playing
            ? <Pause className="h-3 w-3" fill="currentColor" />
            : <Play className="h-3 w-3" fill="currentColor" />}
          {playing ? 'Pause' : 'Play'}
        </button>

        <div className="flex-1" />

        {/* Playback speed */}
        <div ref={speedMenuRef} className="relative">
          <button
            onClick={e => { e.stopPropagation(); setShowSpeed(s => !s) }}
            aria-label="Playback speed"
            title="Playback speed"
            data-testid={`cover-speed-btn-${cover.id}`}
            className={btnCls}
          >
            {speed}×
          </button>
          {showSpeed && (
            <div className="absolute bottom-full right-0 mb-1 min-w-[7rem] overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-lg)]">
              <p className="px-2 py-1 text-[9px] font-semibold uppercase tracking-wider text-[var(--color-text-muted)]">
                Playback speed
              </p>
              {SPEEDS.map(s => (
                <button
                  key={s}
                  onClick={e => changeSpeed(e, s)}
                  className={cn(
                    'block w-full px-3 py-1 text-left text-xs transition-colors hover:bg-[var(--color-surface-raised)]',
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
          aria-label="Download"
          title="Download"
          data-testid={`cover-download-btn-${cover.id}`}
          className={btnCls}
        >
          <Download className="h-3 w-3" />
          Download
        </button>

        {/* Mini-player */}
        <button
          onClick={openMiniPlayer}
          aria-label="Open in mini-player"
          title="Mini-player"
          data-testid={`cover-miniplayer-btn-${cover.id}`}
          className={btnCls}
        >
          <PictureInPicture2 className="h-3 w-3" />
          Mini-player
        </button>
      </div>
    </div>
  )
}
