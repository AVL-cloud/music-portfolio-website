# Functional Specification — sonicwavestudio.com

> Last updated: 2026-05-31 (about page, homepage carousel + explore boxes, login UX improvements, pending-favourite flow, course chapter/section favouriting, rich text editor for courses, admin-editable about content)
> Status: draft — see §10 Implementation Status

---

## 1. Overview

sonicwavestudio.com is the personal music portfolio of Antoine Vlieghe — composer, guitarist, and producer. The site serves as a hub for his releases, covers, guitar tabs, courses, and gear, with a member system for fans and students who want deeper access.

The reference aesthetic is antoinevlieghemusic.com: clean, spacious, image-forward, with breathing room between sections.

---

## 2. User Roles

| Role | How obtained | Capabilities |
|---|---|---|
| **Visitor** | No action | Browse all public content |
| **Member** | Self-registration (email/OAuth) | Access member content, manage favourites, set theme preference |
| **Admin** | Hardcoded to Antoine's account only — no visitor can self-register as admin | Full CMS: upload tabs, edit courses, write personal notes, manage all content |

> **Admin access is restricted to a single account identified by a hardcoded email address stored in an environment variable (`ADMIN_EMAIL`). There is no admin registration flow.**

---

## 3. Pages & Sections

### 3.1 Header (global)
- Site title / logo
- Main navigation: Home · Music · Covers · Tabs · Courses · Gear · About · Contact (admin can hide individual pages — see §3.16)
- Social icons (real profile links): Spotify, Apple Music, YouTube, YouTube Music, Deezer, Instagram, TikTok
- Login / Sign up button (if not logged in)
- User avatar + dropdown (if logged in): Favourites · Preferences · Sign out
- On the front page the header is larger (full-height hero treatment)

### 3.2 Footer (global)
- Link to Ultimate Guitar profile
- Link to Distrokid / label (2909574 Records DK)
- Thank you note
- © Antoine Vlieghe / sonicwavestudio.com

---

### 3.3 Front Page (`/`)
- **Hero section**: fullscreen background photo carousel (5 dark/moody stock photos — studio, concert, instruments), auto-advancing every 10 s with a 1 s crossfade. Dark overlay + bottom vignette keep heading text readable. Subtle accent-coloured dot indicators at the bottom.
- **Heading**: "Music by Antoine Vlieghe" + short tagline, overlaid on the carousel.
- **CTA buttons**: Listen → `/music`, About me → `/about`.
- **Explore grid** below the fold: card boxes for Music, Covers, Tabs, Courses, Gear, About — each with an icon, label, and description.
- Navigation visible but larger / more prominent than inner pages.

### 3.4 Home Feed (`/home` or scrolled section on `/`)
Featured content cards, e.g.:
- Latest release
- Latest cover
- A personal note from Antoine (admin-editable rich text)
- Upcoming / pinned content

### 3.5 Music (`/music`)
- **"Listen" player** at the top: a single audio player with the mastered tracks. In admin edit mode the player can be **shown/hidden** and its tracks **reordered or individually hidden** (see §6).
- **Releases grid** (EP, singles, albums), each: artwork, title, release year, genre tags (from the managed Genres dataset), and Antoine's personal story.
- **Clicking a release's cover art opens its DistroKid hyperfollow link** (listen / pre-save) in a new tab.
- **Favourites**: a heart on each release. Favouriting while logged out redirects to login (`/login?next=…`). Favourited releases are **pinned to the top**; non-favourited ones stay ordered by release date.
- **Pinned ordering**: a logged-in user can reorder their pinned releases with up/down controls; the order is saved as a personal preference.
- Admin edit mode: edit each release's **genre tags** (multi-select from the managed Genres dataset — same source as covers).

### 3.6 Covers (`/covers`)
- Paginated list of all covers (card grid), **ordered by video date (newest first)**
- Each cover: embedded video (vertical/portrait format) or a "video coming soon" placeholder until uploaded, title, band/artist, description, genre tag, cover-type tag, instruments, links to same cover on socials, favourite button
- Filter bar: genre · band name · title search · cover type
- **Per-page selector: 6 / 12 / 24, defaulting to 6.** For a logged-in user the chosen value is saved as a personal preference.
- Covers are **seeded** from antoinevlieghemusic.com (band/title/description); videos and dates are added later in admin edit mode.

#### Admin — "+ Add Cover" modal
Visible only to admin, appears as an action button in the page header.
Opens a dialog with:
- **File upload**: drag & drop zone OR Mac file picker — accepts `.mp4` only (1–2 video files, vertical/portrait format)
- **Title**: text input
- **Band name**: text input
- **Genres**: multi-select with search (e.g. Rock, Metal, Pop, Jazz, Acoustic, Electronic…)
- **Cover tags**: multi-select with search + free-entry (e.g. "acoustic", "solo", "fingerpicking", "live")
- **Instruments**: multi-select with search (Guitar, Bass, Drums, Keys, Vocals…)
- **Video date**: datetime picker, defaults to now — can be edited backwards for stock migration of old videos
- Submit uploads the file(s) to R2, creates the cover record in D1

#### Admin — Cover card actions
Each cover card in admin view shows additional action buttons:
- **Edit** — opens the same modal pre-filled
- **Delete** — confirmation dialog before deletion

#### Admin — Page view
Same layout as the public view but with the "+ Add Cover" button in the page header and per-card action buttons visible.

### 3.7 Tabs (`/tabs`)
- Filterable, sortable list: style · band name · title · instruments
- Per-tab metadata: band name, song title, style, instruments, difficulty
- Access model per tab (admin-configurable):
  - **Free** — any visitor can download
  - **Member** — requires login
  - **Paid** — one-time purchase via Stripe
  - **External link** — redirects to Ultimate Guitar tab
- Admin can upload Guitar Pro files (.gp, .gpx, .gp5) and/or PDF
- Download dashboard visible to admin (download counts per tab)

### 3.8 Courses (`/courses`)
- **Course index** (`/courses`): chapter cards grouped by part (Guitare, Théorie, Home Studio), each card has a heart icon (top-right) to favourite the chapter. Clicking a card navigates to the chapter detail.
- **Chapter detail** (`/courses/[slug]`): chapter title, description, section count; "Save chapter" heart button (favourites the chapter); sections accordion with heart per section.
- **Section accordion**: each section has a toggle (expand/collapse) and an independent heart button (sibling elements — valid HTML, no nested buttons). Expanded sections show rich-text content.
- **Favouriting**: both chapters (`course_chapter`) and sections (`course_section`) are login-gated via `FavouritesContext`. The pending-favourite flow applies — see §4 (Auth).
- **Admin** can edit section content via the **TipTap rich text editor** (replaces the old raw-HTML textarea): toolbar with H1/H2/H3, bold/italic/underline/strikethrough/highlight, bullet + ordered lists, blockquote, HR, text alignment, link set/remove, image (URL or file upload). Content is saved as HTML, backward-compatible with existing entries.
- **Member** can read all content; visitors see a preview with a login prompt.

### 3.9 Gear (`/gear`)
- Gear grouped into three sections: **Instruments**, **Software**, **Hardware**
- Each item: photo (or "photo coming soon" placeholder), name, category, description
- Items sourced from antoinevlieghemusic.com; placeholder entries exist for gear not yet documented (e.g. nylon guitar, keyboard, plugins, second mic, studio headset)

### 3.10 About (`/about`)
- **Intro**: name heading, Paris location, two bio paragraphs.
- **Themes & Sound**: pill tags (Love ♥, Loss ✝, Time, Cinematic, Introspective, Narrative) + an editable pull-quote.
- **Story timeline**: four milestones (Conservatoire → Engineering degree → Back to music → Cours Florent Paris), each with icon, year/date label, title, and body text.
- **Selected works**: 2-column grid of 6 key releases linking to `/music`.
- **Listen & follow**: external links (Spotify, Apple Music, YouTube, Deezer, Instagram, TikTok).
- **Footer note**: "Thanks for visiting — hope you had a good time."

#### Admin editing on the About page
- **Edit mode** reveals inline pencil icons on hover for all story items and the pull-quote.
- Editable fields per timeline item: **title**, **year/date**, **body text** (multiline).
- The **pull-quote** is also inline-editable (multiline textarea).
- Changes persist to `localStorage` (`swc-about`) and survive page reloads.

### 3.11 Preferences (`/preferences`) — member only
- Theme: Light / Dark / System (default: System)
- Notification preferences (future)

### 3.12 Favourites (`/favourites`) — member only
- A personal page of bookmarked content
- Favourites can reference any content on the site with fine-grained anchors:
  - A full page (e.g. /gear)
  - A specific item (e.g. Cover #42, Tab "Comfortably Numb")
  - A specific section inside a course (e.g. Course 1 → Chapter 3 → Section 2)
- Displayed as a grouped list: Covers · Tabs · Courses · Music · Gear
- Each favourite shows: content title, section path if applicable, direct link / anchor
- Members can remove favourites; a "fav" button/icon appears on all favourable content

---

## 4. Authentication

- Email + password registration
- OAuth: Google, optionally GitHub
- Email verification on registration
- Password reset via email
- Session stored in cookie (edge-compatible)
- Admin identity: `process.env.ADMIN_EMAIL` — only this email receives admin privileges; cannot be claimed via any registration flow

### Login UX — redirect & pending-action flow
- The login page always shows a **"← Go back"** link at the top (uses `router.back()` when arriving directly, or `router.push(next)` when redirected).
- When a logged-out user triggers a login-gated action (e.g. favouriting a release), they are redirected to `/login?next=/music&pending=fav:release:abc`.
- After a successful login or registration, they are redirected to `next` with `?pending=fav:release:abc` appended.
- The `usePendingFavourite` hook (called on every page that has favourite buttons) reads the `pending` param, fires `toggleFavourite` once `isLoggedIn` becomes true, and removes the param from the URL with `router.replace`.
- Result: the user lands back on the page they came from with the action already performed — no need to click again.

---

## 5. Theme System

| User type | Storage |
|---|---|
| Logged-in member | Preference stored in DB, loaded server-side on every request |
| Visitor | Preference stored in `localStorage` + cookie (for SSR) |

- Three modes: **Light**, **Dark**, **System** (follows OS preference)
- Default: System
- No flash on load (theme resolved before paint via cookie read in middleware)

---

## 3.13 Contact (`/contact`)

### Public / Member view
- Form fields: **Name**, **Email**, **Message** (textarea)
- Submit → success confirmation shown inline; message stored in DB
- If the sender is a logged-in member, their account is linked to the message (enables website notifications when admin replies)

### Admin view (same page, edit mode on)
- List of received messages: sender name, email, date, message preview, reply status badge
- Click any message → expanded view with full message text and a **Reply** textarea
- Send reply:
  - If the sender has a linked member account → creates an in-app notification for that user
  - If the sender is a guest → (email notification, future scope)
- Admin can mark messages as read / archive them

---

## 3.14 Notifications (logged-in members only)
- Bell icon in the header, visible only when logged in
- Badge shows count of unread notifications
- Clicking bell opens a dropdown:
  - List of notifications (newest first)
  - Each item: title, short body, relative time, unread indicator dot
  - Clicking an item: marks it as read, navigates to the linked content (e.g. contact reply thread)
- Notifications are triggered when:
  - Admin replies to a contact message the member submitted
  - (Future: new course published, tab available for download, etc.)

---

## 3.15 Admin inline text editing
- When admin edit mode is active, all major descriptive text blocks on every page become editable
- Editing model: **plain text** for all content except course sections (which use Tiptap rich text)
- Editable blocks include: page descriptions, personal note, release stories, gear item descriptions, cover titles/band names, tab titles, about page bio, etc.
- UI: hover over any editable text → pencil icon appears → click → inline textarea replaces the text → Save / Cancel buttons
- Changes are persisted via API call on Save
- Course sections retain the existing Tiptap rich-text editor

---

## 3.16 Page visibility (Admin)
- Admin console page `/admin/pages` (linked from the AdminBar) lists every managed page: Music, Covers, Tabs, Courses, Gear, About, Contact.
- Each page has a **Visible / Hidden** toggle.
- A **hidden** page is removed from the navigation for visitors and returns an "Page unavailable" notice if reached directly.
- The page **remains visible and editable for admins**, who see it in the nav marked with a "hidden" icon and a banner ("This page is hidden from visitors") at the top of the page.

---

## 6. Content Management (Admin)

All admin actions are done in-context — no separate `/admin` dashboard. Each page has an "Edit mode" toggle visible only to the admin:

- **Personal note** (Home): inline Tiptap editor
- **Covers**: add/edit/delete cover entries
- **Tabs**: upload files, set access model, edit metadata
- **Courses**: full chapter/section editor
- **Releases**: add/edit release entries and stories
- **Gear**: add/edit gear items

---

## 7. Payments (Tabs)

- Provider: Stripe
- Model: one-time purchase per tab
- After purchase, the file is accessible in the member's account permanently
- No subscription model at launch

---

## 8. Design Language

- Spacious layouts with generous whitespace
- High-quality photography as primary visual element
- Dominant neutrals: deep space dark / off-white light
- **Highlight colour 1**: bordeaux-purple (`~#7C3AED`)
- **Highlight colour 2**: warm gold (`~#C9973A`) — used for premium/featured content
- Sans-serif body (Geist or Inter); optional serif accent for display headings
- Smooth transitions; no jarring animations
- Fully responsive (mobile-first)

---

## 9. Out of Scope (v1)

- Live streaming / live chat
- Comments system
- Subscription / recurring payments
- Multi-language support
- Admin invitation / multi-admin

---

## 10. Implementation Status (updated 2026-05-31)

This section tracks what is actually built versus the target above. Update it before each PR.

### Authentication & members — implemented

- **Login / Register / Forgot password** at `/login` (tabbed). Registration takes optional username, email, password + confirmation, with full client+server validation. If no username is set, the email is used to greet the member.
- **Forgot password** accepts an email **or** a username; a reset link valid for 24 h is generated (link logged to the server console until an email provider is wired). Reset flow at `/reset-password?token=…`. Works for members and admins.
- **Sessions** are real (HTTP-only signed cookie). `isLoggedIn` / `isAdmin` in the layout derive from the session, not dev flags.
- **Preferences** (`/preferences`, member-only) has a profile submenu: **Account** (change username — uniqueness enforced; change password — current password verified) and **Contact log**.
- **Admin credentials**: `antoine.vlieghe@gmail.com` is the bootstrap admin. The admin password is stored **only as a hash** (never in clear) — see technical spec.

### Contact requests — implemented (replaces mock in §3.13)

- Public/member contact form persists requests to a store (file-based in dev, D1 later).
- **Members**: see their own submissions + any reply in **Contact log** (`/preferences/contact-log`). Once a request is answered the thread is **closed** (no further replies). Admin archiving never affects the member's view.
- **Admin**: dedicated page `/admin/contact-requests` (server-gated to admins, linked from the AdminBar) to review, **answer** (sender notified by email), and **archive**. **Archive is admin-only** — it hides the request from the admin list but does not change what the member sees.
- **Weekly admin digest**: emails every admin a count of the past week's contact requests + a link to the admin page. Triggerable manually from the admin page or via `GET /api/cron/contact-digest` (to be put on a schedule).

### Datasets (admin) — implemented

- Deleting a managed dataset value (genre / cover type) that is **in use** warns the admin and, on confirm, **cascades** the removal from everywhere it's used. Genres are shared by **covers and releases** — the usage count and cascade now span both ("Used by N items — Delete anyway").

### Music page — implemented (this session)

- **Releases** (`src/lib/music.ts`) with real artwork, real streaming **release dates** (from Deezer/Spotify), genre **slugs from the Genres dataset**, story excerpts, and **DistroKid hyperfollow URLs**. Clicking a cover opens the hyperfollow link. Includes "On The Rim Of The Sky" (first release, 2021).
- **"Listen" player** streams the mastered tracks (WAV → AAC `.m4a` under `public/music/`).
- **Favourites are login-gated** (`FavouritesContext`): toggling while logged out redirects to `/login?next=…`. Favourited releases **pin to the top**; the rest stay ordered by date.
- **Pinned releases are reorderable** by logged-in users (up/down), saved as a per-browser preference.
- Admin edit mode: edit release **genre tags** (multi-select from the Genres dataset) and control the **player** (show/hide, reorder tracks, hide individual tracks) — both persisted in `MusicContext`.

### Gear page — implemented (this session)

- `/gear` grouped into **Instruments / Software / Hardware** (`src/lib/gear.ts`), real images under `public/gear/`, with placeholder entries for undocumented gear.

### Covers — extended (this session)

- Seeded with the real covers from antoinevlieghemusic.com (band/title/description; video + date added later in edit mode).
- **Editable in admin mode**: add / edit / delete via `CoverFormModal` (`CoversContext` CRUD).
- **Pagination 6 / 12 / 24, default 6**, saved as a preference for logged-in users; grid **ordered by video date**.

### Page visibility (admin) — implemented (this session)

- `/admin/pages` toggles per-page visibility (`PagesContext`, localStorage). Hidden pages drop from the nav and return an "unavailable" notice to visitors, while admins keep full access with a "hidden" banner. See §3.16.

### Header socials — corrected (this session)

- Real profile URLs for Spotify, Apple Music, YouTube, **YouTube Music**, **Deezer**, Instagram, TikTok (the last two were previously placeholders).

### About page — implemented (this session)

- Full `/about` page with intro, themes & sound pills, pull-quote, story timeline (4 items), selected works grid, streaming/social links, footer note.
- **Admin-editable** in edit mode: story item title/year/body and pull-quote use the `InlineField` component (pencil-on-hover → inline textarea → Save/Cancel). Persists to `localStorage` (`swc-about`).
- `BadgeIcon` for "Loss" theme is a latin cross ✝ (contextual reference to grief/death).

### Homepage — enriched (this session)

- **Hero carousel** (`HeroCarousel`): 5 dark/moody music/studio stock photos, 10 s interval, 1 s crossfade, accent-dot indicators. Replaces the old decorative blur gradients.
- **Explore grid** extended with **Gear** and **About** boxes (icons: `Settings2`, `User`) alongside the existing Music, Covers, Tabs, Courses boxes.

### Login UX improvements (this session)

- **"← Go back"** button always visible on `/login` (not only when redirected).
- **Pending-action flow**: `FavouritesContext.toggleFavourite` encodes `pending=fav:type:id` in the login redirect. `LoginClient` forwards it after login. `usePendingFavourite` hook replays the action on return and clears the URL param.
- Applied on: Music page, Covers page, Courses page (both `/courses` index and chapter detail).

### Sign-out fix (this session)

- The header "Sign out" link switched from `<Link href="/logout">` (intercepted by Next.js router) to `<form action="/logout" method="get">` to guarantee a real GET hits the route handler and clears the session cookie.

### Courses — favouriting + rich text editor (this session)

- **Chapter favouriting** from the courses index (`course_chapter` type, heart icon on each card).
- **Chapter favouriting** from the chapter detail page ("Save chapter" pill button above sections).
- **Section favouriting** wired to `FavouritesContext` (`course_section` type); heart is a sibling of the toggle button (not nested) to produce valid HTML.
- **Rich text editor**: the raw-HTML `<textarea>` in section editing replaced by `RichTextEditor` (TipTap), supporting: H1–H3, bold, italic, underline, strikethrough, highlight, bullet/ordered lists, blockquote, HR, left/center/right alignment, link, image (URL or file upload as base64). Outputs and reads HTML — backward-compatible with existing content.

### Divergences from the target spec

- Auth is a **custom cookie/JWT implementation**, not NextAuth v5 (target). Same UX; revisit if NextAuth is reintroduced.
- Contact, users, reset tokens, and covers are backed by **dev stores (JSON files / localStorage)** pending the Cloudflare D1 migration.
- Email sending currently **logs to the console** — no provider wired yet.
- Admin answering of contact messages and a weekly multi-admin digest now exist, which softens the original "single admin / no admin tooling" framing.
