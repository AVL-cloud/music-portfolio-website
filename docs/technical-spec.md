# Technical Specification — sonicwavestudio.com

> Last updated: 2026-05-31 (about page, hero carousel, rich text editor, pending-favourite hook, course chapter/section favouriting, login UX improvements, sign-out fix)
> Status: draft — see "Implementation Status" at the end

---

## 1. Stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js 15 (App Router) | SSR/SSG/ISR, edge-compatible, already set up |
| Runtime | Cloudflare Workers (via OpenNext) | Low latency, free tier, already deployed |
| Database | Cloudflare D1 (SQLite at edge) | Zero cold start, free, native to CF ecosystem |
| ORM | Drizzle ORM | Type-safe, D1-native, edge-compatible, lightweight |
| File storage | Cloudflare R2 | S3-compatible, free egress, used for tab files + images |
| Auth | NextAuth v5 (Auth.js) + D1 adapter | Edge-compatible, supports OAuth + credentials |
| Payments | Stripe (Checkout + Webhooks) | One-time tab purchases |
| Rich text | Tiptap v3 (`@tiptap/react`) | Courses section editor; `RichTextEditor` component wraps StarterKit + Image + Link + Underline + Highlight + TextAlign + Placeholder |
| Styling | Tailwind CSS v4 + CSS custom properties | Already installed; token-based design system |
| Theme | next-themes | SSR-safe, cookie-backed for flash-free load |
| Language | TypeScript (strict) | Already configured |
| Testing | Playwright | Already installed |
| CI/CD | GitHub Actions + Cloudflare Workers deploy | Automated test + deploy on merge to main |

---

## 2. Repository Structure

```
src/
├── app/                        # Next.js App Router
│   ├── (public)/               # Public route group
│   │   ├── page.tsx            # Front page
│   │   ├── music/
│   │   ├── covers/
│   │   ├── tabs/
│   │   ├── gear/
│   │   └── about/
│   ├── (member)/               # Member-only route group
│   │   ├── courses/
│   │   ├── favourites/
│   │   └── preferences/
│   ├── (admin)/                # Admin-only route group
│   │   └── [content editing pages - in-context, not a dashboard]
│   ├── api/                    # API routes
│   │   ├── auth/               # NextAuth handlers
│   │   ├── tabs/
│   │   ├── covers/
│   │   ├── courses/
│   │   ├── favourites/
│   │   └── stripe/
│   └── layout.tsx              # Root layout (theme, header, footer)
├── components/
│   ├── ui/                     # Base design system components
│   ├── music/                  # Music-specific components
│   └── layout/                 # Header, Footer, PageShell
├── lib/
│   ├── db/                     # Drizzle schema + queries
│   ├── auth/                   # NextAuth config + admin guard
│   ├── stripe/                 # Stripe helpers
│   └── utils/
├── styles/
│   └── tokens.css              # All CSS custom properties (design tokens)
└── types/                      # Shared TypeScript types
docs/
├── functional-spec.md          # This site's functional specification
└── technical-spec.md           # This file
tests/                          # Playwright e2e tests
.github/
└── workflows/
    ├── ci.yml                  # Run tests on every PR
    └── deploy.yml              # Deploy to Cloudflare on merge to main
```

---

## 3. Database Schema (D1 / Drizzle)

### users
| Column | Type | Notes |
|---|---|---|
| id | text (ulid) | PK |
| email | text | unique |
| name | text | |
| avatar_url | text | nullable |
| theme | text | 'light' \| 'dark' \| 'system', default 'system' |
| created_at | integer | unix timestamp |

### accounts (NextAuth OAuth)
Standard NextAuth accounts table.

### sessions / verification_tokens
Standard NextAuth tables.

### releases
| Column | Type |
|---|---|
| id | text (ulid) |
| title | text |
| type | text ('ep'\|'single'\|'album') |
| release_date | text |
| artwork_url | text |
| story | text (HTML from Tiptap) |
| streaming_links | text (JSON) |
| created_at | integer |

### covers
| Column | Type |
|---|---|
| id | text (ulid) |
| title | text |
| band_name | text |
| style | text |
| cover_type | text |
| instruments | text (JSON array) |
| embed_url | text |
| social_links | text (JSON) |
| published_at | text |
| created_at | integer |

### tabs
| Column | Type |
|---|---|
| id | text (ulid) |
| title | text |
| band_name | text |
| style | text |
| instruments | text (JSON array) |
| difficulty | text |
| access | text ('free'\|'member'\|'paid'\|'external') |
| file_key | text (R2 key, nullable) |
| external_url | text (nullable) |
| price_cents | integer (nullable) |
| stripe_price_id | text (nullable) |
| download_count | integer |
| created_at | integer |

### tab_purchases
| Column | Type |
|---|---|
| id | text (ulid) |
| user_id | text (FK users) |
| tab_id | text (FK tabs) |
| stripe_session_id | text |
| purchased_at | integer |

### courses
| Column | Type |
|---|---|
| id | text (ulid) |
| title | text |
| description | text |
| thumbnail_url | text |
| order | integer |
| created_at | integer |

### course_chapters
| Column | Type |
|---|---|
| id | text (ulid) |
| course_id | text (FK) |
| title | text |
| order | integer |

### course_sections
| Column | Type |
|---|---|
| id | text (ulid) |
| chapter_id | text (FK) |
| title | text |
| content | text (HTML from Tiptap) |
| order | integer |

### gear
| Column | Type |
|---|---|
| id | text (ulid) |
| name | text |
| brand | text |
| category | text ('guitar'\|'amp'\|'pedal'\|'recording'\|'other') |
| description | text |
| image_url | text |
| purchase_url | text (nullable) |
| order | integer |

### favourites
| Column | Type | Notes |
|---|---|---|
| id | text (ulid) | PK |
| user_id | text (FK users) | |
| content_type | text | 'cover'\|'tab'\|'course_section'\|'release'\|'gear'\|'page' |
| content_id | text | ID of the referenced item |
| anchor | text (nullable) | Deep anchor within content (e.g. `course/{id}/chapter/{id}/section/{id}`) |
| label | text (nullable) | Human-readable label auto-generated from content title + path |
| created_at | integer | |

### personal_note
Single-row table (id=1) — admin-editable rich text shown on Home.

---

## 4. Auth & Admin Guard

- NextAuth v5 with D1 adapter
- Supported providers: **Credentials** (email+password), **Google OAuth**
- Admin check: `session.user.email === process.env.ADMIN_EMAIL`
- `ADMIN_EMAIL` is set as a Cloudflare Worker secret (never in source)
- No admin registration path exists in any route or API handler
- Middleware enforces:
  - `/courses/*`, `/favourites`, `/preferences` → redirect to login if not authenticated
  - Admin edit actions → 403 if `email !== ADMIN_EMAIL`

---

## 5. Design System

### 5.1 CSS Tokens (`src/styles/tokens.css`)

```css
:root {
  /* Neutrals */
  --color-bg: #fafaf9;
  --color-surface: #ffffff;
  --color-border: #e5e5e5;
  --color-text: #1a1a1a;
  --color-text-muted: #6b6b6b;

  /* Highlights */
  --color-accent-1: #7c3aed;      /* bordeaux-purple */
  --color-accent-1-hover: #6d28d9;
  --color-accent-2: #c9973a;      /* warm gold */
  --color-accent-2-hover: #b8882f;

  /* Spacing scale */
  --space-1: 0.25rem; /* 4px */
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;

  /* Radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* Typography */
  --font-sans: 'Geist', 'Inter', system-ui, sans-serif;
  --font-display: 'Geist', serif; /* swap for a serif if desired */
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;
  --font-size-2xl: 1.5rem;
  --font-size-4xl: 2.25rem;
  --font-size-6xl: 3.75rem;
}

[data-theme="dark"] {
  --color-bg: #0f0f0f;
  --color-surface: #1a1a1a;
  --color-border: #2a2a2a;
  --color-text: #f5f5f4;
  --color-text-muted: #a3a3a3;
}
```

### 5.2 Component Catalogue

**Base UI** (`src/components/ui/`)
- `Button` — variants: primary, secondary, ghost, danger; sizes: sm, md, lg
- `Card` — with optional image, title, meta, actions slot
- `Badge` — label with colour variant (accent-1, accent-2, neutral, success)
- `Input`, `Textarea`, `Select`, `Checkbox`
- `Dialog` / `Modal`
- `Tabs` (UI tabs, not guitar tabs)
- `Pagination`
- `FilterBar` — tag/chip multi-select + text search
- `Avatar`
- `Spinner` / `Skeleton`
- `Tooltip`
- `ThemeToggle`
- `FavouriteButton` — heart/bookmark icon, toggles favourite state, available on all favourable content
- `RichTextEditor` — TipTap-based WYSIWYG editor (H1–H3, bold/italic/underline/strike/highlight, lists, blockquote, HR, alignment, link, image URL + upload); reads/writes HTML

**Music-specific** (`src/components/music/`)
- `MusicPlayer` — embedded audio player (track list, play/pause, progress)
- `PlayerAdminControls` — admin edit-mode panel to show/hide the player and reorder/hide its tracks (writes `MusicContext`)
- `ReleaseCard` — artwork (links to DistroKid hyperfollow), title, year + genre labels, story excerpt, favourite + pin badge + pinned-reorder controls, and an in-place genre tag editor in edit mode
- `ReleaseTagEditor` — admin multi-select of genre tags from the Genres dataset
- `CoverCard` — embedded video or placeholder, title, band, description, style/type/instrument tags (label-resolved), fav button
- `CoverFormModal` — admin add/edit dialog for a cover (genre/type from datasets, instruments, embed URL, video date)
- `GearCard` — photo or placeholder, category badge, name, description
- `TabRow` — single row in the tabs list: title, band, style, access badge, download/buy button
- `GearItem` — (legacy) photo, name, brand, description
- `CourseCard` — thumbnail, title, progress indicator (member)
- `SectionViewer` — Tiptap read-only renderer with fav anchor button
- `PersonalNote` — admin-editable rich text block with inline edit toggle

**Layout (additions)**
- `PageVisibilityGate` — wraps page content; renders an "unavailable" notice to visitors for an admin-disabled page, or a "hidden from visitors" banner + content for admins

### 5.2.1 React Contexts (`src/contexts/`)

Client state, each backed by `localStorage` until the D1 migration:

- `AdminContext` — `isAdmin` (from session) + `editMode` toggle
- `I18nContext` — locale + translations (en/fr)
- `DatasetContext` (`swc-datasets`) — managed **Genres** + **Cover types** lists (slug/label)
- `CoversContext` (`swc-covers`) — covers list + `addCover`/`updateCover`/`deleteCover` + dataset usage/cascade
- `MusicContext` (`swc-music`) — release genre overrides (+ usage/clear for the dataset cascade) and the "Listen" player config (visible, track order, hidden tracks)
- `FavouritesContext` (`swc-favourites`) — per-browser favourites keyed `type:id`; login-gated toggling with `?pending=fav:type:id` redirect; ordered list per type with `moveFavourite` for user-ordered pinning. Content types: `release`, `cover`, `course_chapter`, `course_section`.
- `PagesContext` (`swc-pages`) — admin page-visibility (stores disabled page keys)
- `NotificationContext` — in-app notifications
- `usePendingFavourite` (hook, `src/contexts/usePendingFavourite.ts`) — reads `?pending=fav:type:id` from URL; fires `toggleFavourite` once `isLoggedIn` becomes true; cleans URL with `router.replace`. Called at the top of MusicClient, CoversClient, CoursesClient, ChapterClient.

**Layout** (`src/components/layout/`)
- `Header` — nav, socials, auth button; sign-out via `<form method="get" action="/logout">` (not `<Link>`) to force a real GET to the route handler
- `Footer`
- `PageShell` — consistent page padding + max-width
- `AdminBar` — thin bar at top of page visible only to admin with edit mode toggle
- `HeroCarousel` — fullscreen background photo carousel for the front page hero (5 slides, 10 s interval, 1 s crossfade, accent dot indicators, dark overlay + bottom vignette)

### 5.3 data-testid Convention

Every interactive or meaningful component receives a `data-testid` attribute:

```
data-testid="header-nav"
data-testid="header-login-button"
data-testid="cover-card-{id}"
data-testid="cover-filter-bar"
data-testid="tab-row-{id}"
data-testid="tab-download-button-{id}"
data-testid="favourite-button-{content_type}-{id}"
data-testid="theme-toggle"
data-testid="course-section-{id}"
...
```

Pattern: `{component}-{variant/action}-{id if applicable}`

---

## 6. Theme Persistence

| User | Storage | Resolution |
|---|---|---|
| Visitor | `localStorage` + `theme` cookie | Middleware reads cookie, sets `data-theme` on `<html>` before paint |
| Member | DB `users.theme` column | Loaded in session, written to cookie on login + on change |

- `next-themes` handles the client-side toggle and system preference detection
- A Cloudflare middleware function reads the `theme` cookie and injects `data-theme` into the HTML response to prevent flash

---

## 7. CI/CD Pipeline

### 7.1 Pull Request (`ci.yml`)
Triggered on every PR to `main`:
1. Install dependencies (`npm ci`)
2. Type-check (`tsc --noEmit`)
3. Lint (`next lint`)
4. Build (`npm run build:cf`)
5. Run Playwright tests (`npm test`)

### 7.2 Deploy (`deploy.yml`)
Triggered on merge to `main`:
1. All CI steps above
2. `npm run deploy` (OpenNext → Cloudflare Workers)
3. Post-deploy smoke test (Playwright subset tagged `@smoke`)

### 7.3 Daily Non-Regression Routine (Scheduled)
- Claude Code scheduled task runs every day at 08:00
- Runs full Playwright suite against production (https://sonicwavestudio.com)
- If any test fails or anomaly detected: generates a report + fix proposals
- Report delivered as a GitHub Issue with label `non-regression`

---

## 8. Environment Variables / Secrets

| Variable | Where stored | Purpose |
|---|---|---|
| `ADMIN_EMAIL` | Cloudflare Worker secret | Admin identity guard |
| `NEXTAUTH_SECRET` | Cloudflare Worker secret | NextAuth session signing |
| `NEXTAUTH_URL` | Cloudflare Worker env | `https://sonicwavestudio.com` |
| `GOOGLE_CLIENT_ID` | Cloudflare Worker secret | OAuth |
| `GOOGLE_CLIENT_SECRET` | Cloudflare Worker secret | OAuth |
| `STRIPE_SECRET_KEY` | Cloudflare Worker secret | Payments |
| `STRIPE_WEBHOOK_SECRET` | Cloudflare Worker secret | Webhook validation |
| `R2_BUCKET_NAME` | Cloudflare Worker env | File storage |
| `DATABASE_URL` | Auto-bound via D1 binding | D1 database |

Local development: `.env.local` (gitignored)

---

## 9. Build Phases

| Phase | Scope | Status |
|---|---|---|
| **1 — Foundation** | Design tokens, CSS system, Header, Footer, PageShell, all base UI components with data-testid, ThemeToggle, theme persistence | 🔲 todo |
| **2 — Content pages** | Music, Covers (filters + pagination), Gear, About — D1-backed | 🟡 Music, Covers, Gear built on localStorage-backed contexts (D1 pending); favourites + page-visibility added |
| **3 — Auth + Members** | registration, login, forgot/reset password, Preferences (username/password), session, admin guard | 🟡 done with custom cookie/JWT auth (not NextAuth); stores are dev JSON pending D1 |
| **4 — Tabs + Payments** | Tab list, upload, access model, Stripe checkout | 🔲 todo |
| **5 — Courses** | Course index, chapter/section viewer, Tiptap editor (admin) | 🔲 todo |
| **6 — Favourites** | Favourite button on all content, /favourites page, deep anchors | 🔲 todo |
| **7 — CI/CD + Scheduled tests** | GitHub Actions, daily non-regression cron, smoke tests | 🔲 todo |

---

## 10. Key Constraints & Decisions

- **Edge-only runtime** — no Node.js APIs that don't work in Cloudflare Workers (no `fs`, no native modules)
- **No separate admin app** — admin UI is inline, gated by `ADMIN_EMAIL` check
- **Single admin forever** — if this changes, revisit the role model before opening registration
- **D1 is eventually consistent on replicas** — use `{ consistency: "strong" }` for write-then-read patterns (purchases, auth)
- **R2 signed URLs** — tab file downloads go through a signed R2 URL with a short TTL, never exposed directly

---

## 11. Implementation Status (updated 2026-05-31)

What is actually built and how it diverges from the target stack. **Update before each PR.**

### Auth & sessions

- Custom implementation (NextAuth v5 not used yet). Key files under `src/lib/auth/`:
  - `password.ts` — **PBKDF2-SHA256** (100k iterations) via Web Crypto (edge-safe, no native deps), timing-safe compare. Format `pbkdf2:<salt>:<key>` (base64url).
  - `session.ts` — **HS256 JWT in an HTTP-only cookie** (`swc-session`, 7-day), signed with `JWT_SECRET` (dev fallback if unset). `getSession()` reads it server-side.
  - `user-store.ts`, `reset-tokens.ts` — **dev JSON stores** in `.data/` (gitignored). Function signatures are the D1 abstraction boundary.
  - `seed-admin.ts` — seeds/syncs the bootstrap admin from env on demand.
- Server actions in `src/app/actions/auth.ts`: login, register, logout, forgot/reset password, update username, update password.

### Admin credentials — security

- The admin password is **never stored in clear**. `.env.local` holds only `ADMIN_PASSWORD_HASH` (PBKDF2). Rotate with `node scripts/hash-password.mjs '<pw>'`. `ADMIN_EMAIL` identifies the bootstrap admin; `ADMIN_EMAILS` (CSV) grants admin role on register.

### Contact requests + digest

- `src/lib/contact/store.ts` — dev JSON store (`.data/contact-requests.json`). Member-facing `status` is `open|answered`; admin archive is a separate `archivedByAdmin` flag (never alters the member view).
- `src/lib/contact/digest.ts` — `sendAdminContactDigest()` (weekly count + admin link). Manual trigger via admin page action; scheduled endpoint `GET /api/cron/contact-digest` (guard with `CRON_SECRET`; wire a Cloudflare Cron Trigger).
- `src/lib/email/send.ts` — email abstraction; **logs to console in dev**, set `EMAIL_PROVIDER` (+ key) for real sending (Resend wiring stubbed).

### Datasets / covers

- Covers moved from static mock to a mutable `CoversContext` (localStorage), seeded from the live site, with `addCover`/`updateCover`/`deleteCover`. Deleting a Genres value now cascades across **covers and releases** (`clearDatasetValue()`/`countUsing()` + `MusicContext.clearGenre()`/`countGenreUsage()`).
- Covers page: per-page selector (6/12/24, default 6) persisted to `swc-covers-perpage` for logged-in users; grid ordered by `videoDate` desc; admin add/edit/delete via `CoverFormModal`.

### Music page (this session)

- `src/lib/music.ts` — static release + track data. Release `genres` are **Genres-dataset slugs**; labels resolved for display. Each release carries a `hyperfollowUrl` (DistroKid) used to link the cover art. Real release dates from Deezer/Spotify.
- Audio: source WAVs transcoded to **AAC `.m4a`** (via `afconvert`) under `public/music/`; cover art resized (via `sips`) to 1000² there too. Asset files committed (no R2 yet).
- `MusicContext` (`swc-music`) holds admin genre overrides and the player config (visibility, track order, hidden tracks). `FavouritesContext` provides login-gated favouriting, pin order, and `moveFavourite` for user-ordered pinning.

### Gear page (this session)

- `src/lib/gear.ts` — items grouped by `section` (instruments/software/hardware), images under `public/gear/`, `placeholder` entries render a "photo coming soon" card.

### Page visibility (this session)

- `PagesContext` (`swc-pages`) stores admin-disabled page keys. `PageVisibilityGate` (in the root layout, inside the providers) maps `pathname → PageKey` and gates rendering: non-admin + disabled → "unavailable" notice; admin → content + "hidden" banner. The `Header` filters disabled pages for visitors and marks them for admins. Admin UI at `/admin/pages`.
- **Caveat**: visibility is client-side (localStorage), so a hidden page is not server-blocked — fine for the current "soft hide" intent; enforce server-side when this moves to D1.

### New localStorage keys (this session)

`swc-music`, `swc-favourites`, `swc-pages`, `swc-covers-perpage` (in addition to existing `swc-covers`, `swc-datasets`, `swc-theme`).

### Env vars introduced

`JWT_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD_HASH`, `ADMIN_EMAILS`, `EMAIL_PROVIDER`, `CRON_SECRET`, `NEXT_PUBLIC_SITE_URL` / `NEXT_PUBLIC_BASE_URL`.

### About page (this session)

- `src/app/about/page.tsx` — server component, static sections (intro, releases, links, footer note).
- `src/app/about/AboutClient.tsx` — client component: **Themes & Sound** (pills + pull-quote) and **Story** (timeline), both admin-editable. Uses `InlineField` pattern (pencil-on-hover, inline input/textarea, Save/Cancel). Data persisted to `localStorage` at `swc-about` (`{ quote: string, timeline: TimelineItem[] }`). Defaults defined in `DEFAULT` constant; merged with stored on hydration.

### Hero carousel (this session)

- `src/components/layout/HeroCarousel.tsx` — client component. 5 slides from `public/hero/*.jpg` (Unsplash, free-to-use). 10 s interval, 1 s crossfade via CSS `opacity` transition. `pointer-events-none` container; dark overlay at 70 % opacity; bottom gradient vignette. Accent dot indicators. Uses `next/image` with `fill` + `sizes="100vw"`.
- `public/hero/` added to `.claudeignore` (large binaries, not useful as context).

### TipTap rich text editor (this session)

- `src/components/ui/RichTextEditor.tsx` — self-contained editor. Extensions: `StarterKit` (headings 1–3, bold, italic, strike, code, code-block, blockquote, lists, HR), `Underline`, `Highlight`, `Link` (autolink, click-to-open off), `Image` (inline=false, base64 allowed), `TextAlign` (paragraph + heading), `Placeholder`.
- New packages added to `package.json`: `@tiptap/extension-image`, `@tiptap/extension-placeholder`, `@tiptap/extension-text-align`, `@tiptap/extension-highlight`.
- Toolbar uses `onMouseDown` with `e.preventDefault()` (not `onClick`) to avoid stealing editor focus.
- Image upload reads as base64 `data:` URL — suitable for dev; replace with R2 upload in production.
- Scoped `<style>` block inside the component applies all prose styles to `.rte-content .prose-editor` using CSS custom properties (no Tailwind typography plugin needed).

### Pending-favourite flow (this session)

- `FavouritesContext.toggleFavourite` (when logged out): redirects to `/login?next=<pathname>&pending=fav%3A<type>%3A<id>` (all encoded).
- `LoginClient`: reads `pendingParam` from `useSearchParams`; after login/register success, appends `?pending=<value>` to the `next` URL.
- `usePendingFavourite` hook (`src/contexts/usePendingFavourite.ts`): `useEffect` fires when `isLoggedIn` becomes true + `pending` param present + not already fired (via `useRef`). Calls `toggleFavourite(type, id)` then `router.replace` to clean the URL.

### localStorage keys (complete list)

`swc-theme`, `swc-covers`, `swc-datasets`, `swc-music`, `swc-favourites`, `swc-pages`, `swc-covers-perpage`, `swc-about`.

### Pending migration

All dev JSON/localStorage stores → **Cloudflare D1 + Drizzle**; console email → real provider; cron endpoint → real schedule. Tracked in `TODO.md`.
