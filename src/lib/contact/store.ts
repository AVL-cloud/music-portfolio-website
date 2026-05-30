// Dev: JSON file storage at .data/contact-requests.json
// TODO: replace with Cloudflare D1 + Drizzle for production.

import { randomUUID } from 'crypto'

// Member-facing conversation status. Archiving is a separate, admin-only flag
// (`archivedByAdmin`) so it never changes what the member sees.
export type ContactStatus = 'open' | 'answered'

export interface ContactRequest {
  id: string
  name: string
  email: string
  userId?: string // set when submitted by a logged-in member
  message: string
  status: ContactStatus
  archivedByAdmin?: boolean // admin-only: hides it from the admin's default view
  createdAt: string
  answer?: string
  answeredAt?: string
  answeredBy?: string // admin email
}

const DATA_FILE = '.data/contact-requests.json'

async function readAll(): Promise<ContactRequest[]> {
  try {
    const { readFile } = await import('fs/promises')
    const raw = await readFile(DATA_FILE, 'utf-8')
    return JSON.parse(raw) as ContactRequest[]
  } catch {
    return []
  }
}

async function writeAll(rows: ContactRequest[]): Promise<void> {
  const { writeFile, mkdir } = await import('fs/promises')
  await mkdir('.data', { recursive: true })
  await writeFile(DATA_FILE, JSON.stringify(rows, null, 2))
}

export async function createContactRequest(data: {
  name: string
  email: string
  message: string
  userId?: string
}): Promise<ContactRequest> {
  const rows = await readAll()
  const row: ContactRequest = {
    id: randomUUID(),
    name: data.name,
    email: data.email.toLowerCase(),
    userId: data.userId,
    message: data.message,
    status: 'open',
    createdAt: new Date().toISOString(),
  }
  rows.push(row)
  await writeAll(rows)
  return row
}

export async function listContactRequests(opts?: { includeArchived?: boolean }): Promise<ContactRequest[]> {
  const rows = await readAll()
  const filtered = opts?.includeArchived ? rows : rows.filter(r => !r.archivedByAdmin)
  return filtered.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}

export async function listContactRequestsForUser(userId: string): Promise<ContactRequest[]> {
  const rows = await readAll()
  return rows
    .filter(r => r.userId === userId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}

export async function getContactRequest(id: string): Promise<ContactRequest | null> {
  const rows = await readAll()
  return rows.find(r => r.id === id) ?? null
}

export async function answerContactRequest(
  id: string,
  answer: string,
  answeredBy: string,
): Promise<ContactRequest | null> {
  const rows = await readAll()
  const row = rows.find(r => r.id === id)
  if (!row) return null
  row.answer = answer
  row.answeredAt = new Date().toISOString()
  row.answeredBy = answeredBy
  row.status = 'answered'
  await writeAll(rows)
  return row
}

// Admin-only: hides the request from the admin's default list. Does NOT affect
// the member's own view of their conversation.
export async function archiveContactRequest(id: string): Promise<void> {
  const rows = await readAll()
  const row = rows.find(r => r.id === id)
  if (row) {
    row.archivedByAdmin = true
    await writeAll(rows)
  }
}

// Count requests created within the last `days` days.
export async function countContactRequestsSince(days: number): Promise<number> {
  const rows = await readAll()
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000
  return rows.filter(r => new Date(r.createdAt).getTime() >= cutoff).length
}
