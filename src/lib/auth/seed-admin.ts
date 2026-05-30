// Bootstraps the admin account from env vars.
// SECURITY: the admin password is provided ONLY as a pre-computed PBKDF2 hash
// in ADMIN_PASSWORD_HASH — the clear password never lives in the repo, env, or
// runtime memory. Generate the hash with `node scripts/hash-password.mjs`.
// Idempotent: creates the admin on first call if missing, and keeps its hash in
// sync if ADMIN_PASSWORD_HASH changes.
// TODO: once on Cloudflare D1, seed via a migration instead of on-demand.

import { createUser, getUserByEmail, updateUserPassword } from './user-store'

let seeded = false

export async function ensureSeedAdmin(): Promise<void> {
  if (seeded) return
  const email = process.env.ADMIN_EMAIL?.trim().toLowerCase()
  const passwordHash = process.env.ADMIN_PASSWORD_HASH?.trim()
  if (!email || !passwordHash) return

  const existing = await getUserByEmail(email)
  if (!existing) {
    await createUser({ email, passwordHash, role: 'admin' })
  } else if (existing.passwordHash !== passwordHash) {
    // Keep the env hash authoritative for the bootstrap admin.
    await updateUserPassword(existing.id, passwordHash)
  }
  seeded = true
}

// True if the email is the configured bootstrap admin (also see ADMIN_EMAILS).
export function isBootstrapAdmin(email: string): boolean {
  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase()
  return !!adminEmail && email.trim().toLowerCase() === adminEmail
}
