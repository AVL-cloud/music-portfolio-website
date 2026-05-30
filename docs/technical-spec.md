# Technical Specification — sonicwavestudio.com

> Last updated: 2026-05-30
> Status: draft

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
| Rich text | Tiptap | Already installed; used for courses + personal note |
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

**Music-specific** (`src/components/music/`)
- `MusicPlayer` — embedded audio player (track list, play/pause, progress)
- `ReleaseCard` — artwork, title, date, streaming links, story excerpt
- `CoverCard` — embedded video, title, band, style tags, fav button
- `TabRow` — single row in the tabs list: title, band, style, access badge, download/buy button
- `GearItem` — photo, name, brand, description
- `CourseCard` — thumbnail, title, progress indicator (member)
- `SectionViewer` — Tiptap read-only renderer with fav anchor button
- `PersonalNote` — admin-editable rich text block with inline edit toggle

**Layout** (`src/components/layout/`)
- `Header` — nav, socials, auth button; variant: default / hero (front page)
- `Footer`
- `PageShell` — consistent page padding + max-width
- `AdminBar` — thin bar at top of page visible only to admin with edit mode toggle

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
| **2 — Content pages** | Music, Covers (filters + pagination), Gear, About — D1-backed | 🔲 todo |
| **3 — Auth + Members** | NextAuth, registration, login, Preferences, session, admin guard | 🔲 todo |
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
