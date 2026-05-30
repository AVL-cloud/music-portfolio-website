'use client'
import { useState } from 'react'
import { Music, Star, Zap } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Card, CardContent, CardImage, CardFooter } from '@/components/ui/Card'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Select } from '@/components/ui/Select'
import { Checkbox } from '@/components/ui/Checkbox'
import { Avatar } from '@/components/ui/Avatar'
import { Spinner } from '@/components/ui/Spinner'
import { Skeleton } from '@/components/ui/Skeleton'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { FavouriteButton } from '@/components/ui/FavouriteButton'
import { Tooltip } from '@/components/ui/Tooltip'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/Tabs'
import { Pagination } from '@/components/ui/Pagination'
import { FilterBar } from '@/components/ui/FilterBar'
import { MultiSelect } from '@/components/ui/MultiSelect'
import { FileDropzone } from '@/components/ui/FileDropzone'
import { Dialog, DialogTrigger, DialogContent, DialogFooter } from '@/components/ui/Dialog'
import { MusicPlayer } from '@/components/music/MusicPlayer'
import { TabRow } from '@/components/music/TabRow'
import { GearItem } from '@/components/music/GearItem'
import { PersonalNote } from '@/components/music/PersonalNote'
import { AdminBar } from '@/components/layout/AdminBar'

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="text-lg font-semibold text-[var(--color-text)] border-b border-[var(--color-border)] pb-2">{title}</h2>
      {children}
    </section>
  )
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-xs text-[var(--color-text-muted)] w-20 shrink-0">{label}</span>
      {children}
    </div>
  )
}

export default function ComponentShowcase() {
  const [page, setPage] = useState(3)
  const [faved, setFaved] = useState(false)
  const [checked, setChecked] = useState(false)
  const [multiVal, setMultiVal] = useState<string[]>(['rock'])
  const [filterSelected, setFilterSelected] = useState<Record<string, string[]>>({})
  const [editMode, setEditMode] = useState(false)
  const [dropFiles, setDropFiles] = useState<File[]>([])

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <AdminBar />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-12 space-y-14">
        <div>
          <p className="text-xs font-medium tracking-widest uppercase text-[var(--color-accent-1)] mb-2">Design System</p>
          <h1 className="text-4xl font-semibold text-[var(--color-text)]">Component Showcase</h1>
          <p className="mt-2 text-[var(--color-text-muted)]">All building blocks for sonicwavestudio.com</p>
          <div className="mt-4"><ThemeToggle /></div>
        </div>

        {/* ─── COLOUR TOKENS ─────────────────────────────────────── */}
        <Section title="Colour tokens">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { name: 'accent-1', bg: 'bg-[var(--color-accent-1)]' },
              { name: 'accent-1-subtle', bg: 'bg-[var(--color-accent-1-subtle)]' },
              { name: 'accent-2', bg: 'bg-[var(--color-accent-2)]' },
              { name: 'accent-2-subtle', bg: 'bg-[var(--color-accent-2-subtle)]' },
              { name: 'success', bg: 'bg-[var(--color-success)]' },
              { name: 'error', bg: 'bg-[var(--color-error)]' },
              { name: 'surface', bg: 'bg-[var(--color-surface)] border border-[var(--color-border)]' },
              { name: 'surface-raised', bg: 'bg-[var(--color-surface-raised)] border border-[var(--color-border)]' },
            ].map(t => (
              <div key={t.name} className="flex flex-col gap-1.5">
                <div className={`h-10 rounded-[var(--radius-md)] ${t.bg}`} />
                <span className="text-xs text-[var(--color-text-muted)]">{t.name}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* ─── BUTTONS ───────────────────────────────────────────── */}
        <Section title="Button">
          <Row label="Variants">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
          </Row>
          <Row label="Sizes">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </Row>
          <Row label="States">
            <Button loading>Loading</Button>
            <Button disabled>Disabled</Button>
            <Button variant="primary"><Music className="h-4 w-4" /> With icon</Button>
          </Row>
        </Section>

        {/* ─── BADGES ────────────────────────────────────────────── */}
        <Section title="Badge">
          <Row label="Variants">
            <Badge variant="accent1">Purple</Badge>
            <Badge variant="accent2">Gold</Badge>
            <Badge variant="neutral">Neutral</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="warning">Warning</Badge>
          </Row>
          <Row label="Use cases">
            <Badge variant="accent1">EP</Badge>
            <Badge variant="accent2">Paid</Badge>
            <Badge variant="success">Free</Badge>
            <Badge variant="accent1">Members</Badge>
            <Badge variant="neutral">Rock</Badge>
            <Badge variant="neutral">Guitar</Badge>
          </Row>
        </Section>

        {/* ─── CARDS ─────────────────────────────────────────────── */}
        <Section title="Card">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Card>
              <CardContent>
                <h3 className="font-semibold mb-1">Basic card</h3>
                <p className="text-sm text-[var(--color-text-muted)]">Simple content card.</p>
              </CardContent>
            </Card>
            <Card hover>
              <CardImage className="h-32 bg-gradient-to-br from-[var(--color-accent-1-subtle)] to-[var(--color-accent-2-subtle)]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Music className="h-8 w-8 text-[var(--color-accent-1)]" />
                </div>
              </CardImage>
              <CardContent>
                <h3 className="font-semibold mb-1">Card with image</h3>
                <p className="text-sm text-[var(--color-text-muted)]">Hover for shadow effect.</p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="secondary">Action</Button>
              </CardFooter>
            </Card>
            <Card hover>
              <CardContent className="flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <Badge variant="accent2">Featured</Badge>
                  <FavouriteButton contentType="demo" contentId="1" isFaved={faved} onToggle={() => setFaved(f => !f)} />
                </div>
                <h3 className="font-semibold">With favourite</h3>
                <p className="text-sm text-[var(--color-text-muted)]">Click the heart.</p>
              </CardContent>
            </Card>
          </div>
        </Section>

        {/* ─── FORM ELEMENTS ─────────────────────────────────────── */}
        <Section title="Form elements">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-lg">
            <Input label="Input" placeholder="Type something…" />
            <Input label="With error" placeholder="Wrong value" error="This field is required" />
            <Input label="With hint" placeholder="youremail@example.com" hint="We'll never share your email." />
            <Select label="Select" placeholder="Choose one…" options={[{ value: 'a', label: 'Option A' }, { value: 'b', label: 'Option B' }, { value: 'c', label: 'Option C' }]} />
          </div>
          <Textarea label="Textarea" placeholder="Write something longer…" className="max-w-lg" />
          <div className="flex flex-wrap gap-4">
            <Checkbox label="Unchecked" checked={checked} onChange={e => setChecked(e.target.checked)} />
            <Checkbox label="Checked" checked readOnly />
            <Checkbox label="Disabled" disabled />
          </div>
        </Section>

        {/* ─── MULTISELECT ───────────────────────────────────────── */}
        <Section title="MultiSelect">
          <div className="max-w-sm space-y-4">
            <MultiSelect
              label="Genres (standard)"
              options={[
                { value: 'rock', label: 'Rock' }, { value: 'metal', label: 'Metal' },
                { value: 'pop', label: 'Pop' }, { value: 'jazz', label: 'Jazz' },
                { value: 'acoustic', label: 'Acoustic' }, { value: 'progressive', label: 'Progressive' },
              ]}
              value={multiVal}
              onChange={setMultiVal}
              placeholder="Select genres…"
            />
            <MultiSelect
              label="Tags (free entry)"
              options={[{ value: 'solo', label: 'solo' }, { value: 'live', label: 'live' }, { value: 'acoustic', label: 'acoustic' }]}
              value={[]}
              onChange={() => {}}
              placeholder="Add tags…"
              allowFreeEntry
            />
          </div>
        </Section>

        {/* ─── FILE DROPZONE ─────────────────────────────────────── */}
        <Section title="FileDropzone">
          <div className="max-w-md">
            <FileDropzone
              label="Upload video"
              files={dropFiles}
              onFiles={f => setDropFiles(p => [...p, ...f])}
              onRemove={i => setDropFiles(p => p.filter((_, idx) => idx !== i))}
            />
          </div>
        </Section>

        {/* ─── TABS ──────────────────────────────────────────────── */}
        <Section title="Tabs">
          <Tabs defaultValue="tab1">
            <TabsList>
              <TabsTrigger value="tab1">Overview</TabsTrigger>
              <TabsTrigger value="tab2">Details</TabsTrigger>
              <TabsTrigger value="tab3">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="tab1"><p className="text-sm text-[var(--color-text-muted)]">Overview content goes here.</p></TabsContent>
            <TabsContent value="tab2"><p className="text-sm text-[var(--color-text-muted)]">Details content goes here.</p></TabsContent>
            <TabsContent value="tab3"><p className="text-sm text-[var(--color-text-muted)]">Settings content goes here.</p></TabsContent>
          </Tabs>
        </Section>

        {/* ─── FILTER BAR ────────────────────────────────────────── */}
        <Section title="FilterBar">
          <FilterBar
            groups={[
              { key: 'style', label: 'Style', options: [{ value: 'rock', label: 'Rock' }, { value: 'metal', label: 'Metal' }, { value: 'jazz', label: 'Jazz' }, { value: 'acoustic', label: 'Acoustic' }] },
              { key: 'type', label: 'Type', options: [{ value: 'solo', label: 'Solo' }, { value: 'cover', label: 'Cover' }, { value: 'live', label: 'Live' }] },
            ]}
            selected={filterSelected}
            search=""
            onSearchChange={() => {}}
            onToggle={(g, v) => setFilterSelected(s => { const cur = s[g] ?? []; return { ...s, [g]: cur.includes(v) ? cur.filter(x => x !== v) : [...cur, v] } })}
            onClear={() => setFilterSelected({})}
          />
        </Section>

        {/* ─── PAGINATION ────────────────────────────────────────── */}
        <Section title="Pagination">
          <Pagination page={page} totalPages={10} onPageChange={setPage} />
        </Section>

        {/* ─── AVATARS & STATES ──────────────────────────────────── */}
        <Section title="Avatar · Spinner · Skeleton">
          <Row label="Avatar">
            <Avatar name="Antoine Vlieghe" size="sm" />
            <Avatar name="Antoine Vlieghe" size="md" />
            <Avatar name="Antoine Vlieghe" size="lg" />
            <Avatar src="https://avatars.githubusercontent.com/u/1" name="GitHub" size="md" />
          </Row>
          <Row label="Spinner">
            <Spinner size="sm" />
            <Spinner size="md" />
            <Spinner size="lg" />
          </Row>
          <Row label="Skeleton">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-10 w-40" />
          </Row>
        </Section>

        {/* ─── TOOLTIP & DIALOG ──────────────────────────────────── */}
        <Section title="Tooltip · Dialog">
          <Row label="Tooltip">
            <Tooltip content="This is a tooltip!">
              <Button variant="secondary" size="sm">Hover me</Button>
            </Tooltip>
            <Tooltip content="Helpful hint" side="right">
              <Button variant="ghost" size="sm"><Star className="h-4 w-4" /></Button>
            </Tooltip>
          </Row>
          <Row label="Dialog">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" size="sm">Open dialog</Button>
              </DialogTrigger>
              <DialogContent title="Example Dialog" description="This is the description text.">
                <p className="text-sm text-[var(--color-text-muted)]">Dialog body content goes here.</p>
                <DialogFooter>
                  <Button variant="ghost" size="sm">Cancel</Button>
                  <Button size="sm">Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </Row>
        </Section>

        {/* ─── MUSIC PLAYER ──────────────────────────────────────── */}
        <Section title="MusicPlayer">
          <div className="max-w-sm">
            <MusicPlayer tracks={[
              { id: '1', title: 'Night Sky', src: '' },
              { id: '2', title: 'Fading Lights', src: '' },
              { id: '3', title: 'Angels', src: '' },
            ]} />
          </div>
        </Section>

        {/* ─── TAB ROW ───────────────────────────────────────────── */}
        <Section title="TabRow">
          <div className="space-y-2 max-w-2xl">
            <TabRow tab={{ id: '1', title: 'Comfortably Numb', bandName: 'Pink Floyd', style: 'Rock', instruments: ['Guitar'], access: 'free' }} />
            <TabRow tab={{ id: '2', title: 'Nothing Else Matters', bandName: 'Metallica', style: 'Metal', instruments: ['Guitar'], access: 'member' }} />
            <TabRow tab={{ id: '3', title: 'Stairway to Heaven', bandName: 'Led Zeppelin', style: 'Rock', instruments: ['Guitar'], access: 'paid', priceCents: 299 }} />
            <TabRow tab={{ id: '4', title: 'Blackbird', bandName: 'The Beatles', style: 'Acoustic', instruments: ['Guitar'], access: 'external', externalUrl: 'https://ultimate-guitar.com' }} />
          </div>
        </Section>

        {/* ─── GEAR ITEM ─────────────────────────────────────────── */}
        <Section title="GearItem">
          <div className="max-w-lg space-y-3">
            <GearItem item={{ id: '1', name: 'PRS SE Custom 24', brand: 'PRS', category: 'Guitar', description: 'Versatile double-cutaway with wide-thin neck and 85/15 S pickups.' }} />
            <GearItem item={{ id: '2', name: 'Strymon BigSky', brand: 'Strymon', category: 'Pedal', description: 'Lush studio-quality reverb in a compact pedal format.', purchaseUrl: 'https://strymon.net' }} />
          </div>
        </Section>

        {/* ─── PERSONAL NOTE ─────────────────────────────────────── */}
        <Section title="PersonalNote">
          <div className="max-w-lg rounded-[var(--radius-lg)] border border-[var(--color-border)] p-5">
            <PersonalNote
              content="<p>Hey! Welcome to my music space. I cover songs I love and release original compositions when inspiration strikes. Hope you enjoy the journey. 🎸</p>"
              isAdmin
              onSave={async (html) => { console.log('saved', html) }}
            />
          </div>
        </Section>

        {/* ─── ADMIN BAR ─────────────────────────────────────────── */}
        <Section title="AdminBar">
          <p className="text-sm text-[var(--color-text-muted)]">See the purple bar at the very top of this page — that is the AdminBar.</p>
          <Row label="State">
            <Badge variant={editMode ? 'accent1' : 'neutral'}>{editMode ? 'Edit mode ON' : 'View mode'}</Badge>
          </Row>
        </Section>

        {/* ─── THEME ─────────────────────────────────────────────── */}
        <Section title="ThemeToggle">
          <Row label="Full">
            <ThemeToggle />
          </Row>
          <Row label="Compact">
            <ThemeToggle compact />
          </Row>
        </Section>

        <div className="pb-20 flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
          <Zap className="h-4 w-4 text-[var(--color-accent-2)]" />
          End of design system · sonicwavestudio.com
        </div>
      </div>
    </div>
  )
}
