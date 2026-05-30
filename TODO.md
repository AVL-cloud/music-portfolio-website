# TODO

Running list of deferred tasks. Add items here instead of leaving them only as code comments.

## Auth

- [ ] **Migrate storage to Cloudflare D1 + Drizzle.** Currently file-based JSON in `.data/`.
  Replace `src/lib/auth/user-store.ts`, `src/lib/auth/reset-tokens.ts`, `src/lib/contact/store.ts`,
  and the localStorage-backed `CoversContext` with D1 implementations — the function signatures are the
  abstraction boundary, no other code changes.
- [ ] **Integrate a real email service** (Resend / SendGrid) in `src/lib/email/send.ts` (set
  `EMAIL_PROVIDER` + provider key). Today it logs to the server console. This powers: password-reset
  links (`forgotPasswordAction`), contact answer notifications, and the admin digest.
- [ ] **Set `JWT_SECRET`** in production env (`src/lib/auth/session.ts` falls back to a dev secret).
- [ ] **Set `ADMIN_EMAILS`** (comma-separated) in production env to grant admin role on register.
- [ ] **Set `NEXT_PUBLIC_BASE_URL` / `NEXT_PUBLIC_SITE_URL`** in production for correct email links.
- [ ] **Schedule the weekly admin digest.** Endpoint exists at `GET /api/cron/contact-digest`
  (protect with `CRON_SECRET`). Wire a Cloudflare Cron Trigger in `wrangler.toml`
  (`crons = ["0 9 * * 1"]`) → call the route or `sendAdminContactDigest()` from the Worker's
  `scheduled()` handler.
- [ ] Enforce unique usernames at registration (only email uniqueness is checked there;
  username uniqueness IS enforced on the preferences change form).
- [ ] Add rate limiting on login / forgot-password to mitigate brute force.
- [x] Member preferences page — `/preferences`, change username & password (done 2026-05-30).
- [ ] Cookie consent banner (reject / accept all / customize) + preference gating — requested, deferred.
- [ ] Member preferences beyond account (notifications, language default, etc.).

## Contact requests

- [x] Contact request backend + admin page (`/admin/contact-requests`): answer, archive, filter (done 2026-05-30).
- [x] Weekly admin digest function `sendAdminContactDigest()` + manual trigger + cron route (done 2026-05-30).
- [x] Members see their own requests + answers on `/contact`; answered threads are closed (done 2026-05-30).

## Datasets / covers

- [x] Deleting a dataset value (genre / cover type) that is in use warns the admin and, on confirm,
  cascades the removal from all covers using it (done 2026-05-30). Covers now live in a mutable
  `CoversContext` (localStorage) — see migration note above; instruments are still a static list.
- [ ] Generalize cascade to other consumers when tabs/courses gain managed tags.

## General

- [ ] Replace mock data: covers (`CoversContext` / localStorage), courses (`seed-courses.ts`) → database.
