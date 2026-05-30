// Dev: JSON file storage at .data/reset-tokens.json
// TODO: replace with Cloudflare D1 for production

import { randomBytes } from 'crypto'

const DATA_FILE = '.data/reset-tokens.json'
const EXPIRY_MS = 24 * 60 * 60 * 1000 // 24 hours

interface ResetToken {
  userId: string
  token: string
  expires: string
}

async function readTokens(): Promise<ResetToken[]> {
  try {
    const { readFile } = await import('fs/promises')
    const raw = await readFile(DATA_FILE, 'utf-8')
    return JSON.parse(raw) as ResetToken[]
  } catch {
    return []
  }
}

async function writeTokens(tokens: ResetToken[]): Promise<void> {
  const { writeFile, mkdir } = await import('fs/promises')
  await mkdir('.data', { recursive: true })
  await writeFile(DATA_FILE, JSON.stringify(tokens, null, 2))
}

export async function createResetToken(userId: string): Promise<string> {
  const tokens = await readTokens()
  const filtered = tokens.filter(t => t.userId !== userId)
  const token = randomBytes(32).toString('base64url')
  filtered.push({
    userId,
    token,
    expires: new Date(Date.now() + EXPIRY_MS).toISOString(),
  })
  await writeTokens(filtered)
  return token
}

export async function validateResetToken(token: string): Promise<string | null> {
  const tokens = await readTokens()
  const entry = tokens.find(t => t.token === token)
  if (!entry) return null
  if (new Date(entry.expires) < new Date()) return null
  return entry.userId
}

export async function invalidateResetToken(token: string): Promise<void> {
  const tokens = await readTokens()
  await writeTokens(tokens.filter(t => t.token !== token))
}
