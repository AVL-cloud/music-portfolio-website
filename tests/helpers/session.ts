/**
 * Test helpers to drive the real (custom JWT-cookie) auth without going through
 * the UI: sign a `swc-session` token and seed per-user notifications in the dev
 * `.data` store. Local-only (the dev server reads `.data` + `.env.local`).
 */
import { SignJWT } from 'jose'
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import path from 'path'

const COOKIE_NAME = 'swc-session'
const DATA_DIR = '.data'
const NOTIF_FILE = path.join(DATA_DIR, 'notifications.json')

// Mirrors src/lib/auth/session.ts: env JWT_SECRET, else parse .env.local, else dev fallback.
function jwtSecret(): Uint8Array {
  let secret = process.env.JWT_SECRET
  if (!secret && existsSync('.env.local')) {
    const m = readFileSync('.env.local', 'utf8').match(/^JWT_SECRET=(.*)$/m)
    if (m) secret = m[1].trim().replace(/^["']|["']$/g, '')
  }
  return new TextEncoder().encode(secret ?? 'dev-secret-please-set-JWT_SECRET-in-production')
}

export interface SessionUser {
  id: string
  email: string
  username?: string
  role: 'member' | 'admin'
}

export async function makeSessionToken(user: SessionUser): Promise<string> {
  return new SignJWT({ id: user.id, email: user.email, username: user.username, role: user.role })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('7d')
    .sign(jwtSecret())
}

export const SESSION_COOKIE = COOKIE_NAME

export interface SeedNotification {
  id: string
  userId: string
  type: 'contact_reply'
  contactRequestId: string
  title: string
  body: string
  link: string
  read: boolean
  createdAt: string
}

function readNotifs(): SeedNotification[] {
  try { return JSON.parse(readFileSync(NOTIF_FILE, 'utf8')) as SeedNotification[] } catch { return [] }
}

function writeNotifs(rows: SeedNotification[]) {
  mkdirSync(DATA_DIR, { recursive: true })
  writeFileSync(NOTIF_FILE, JSON.stringify(rows, null, 2))
}

/** Insert/replace a notification (always unread when seeded). */
export function seedNotification(n: SeedNotification) {
  writeNotifs([...readNotifs().filter(r => r.id !== n.id), n])
}

export function removeNotification(id: string) {
  writeNotifs(readNotifs().filter(r => r.id !== id))
}
