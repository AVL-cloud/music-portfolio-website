// Dev: JSON file storage at .data/notifications.json
// TODO: replace with Cloudflare D1 + Drizzle for production.

import { randomUUID } from 'crypto'

export type NotificationType = 'contact_reply'

export interface UserNotification {
  id: string
  userId: string
  type: NotificationType
  contactRequestId: string
  title: string
  body: string
  link: string
  read: boolean
  createdAt: string
}

const DATA_FILE = '.data/notifications.json'

async function readAll(): Promise<UserNotification[]> {
  try {
    const { readFile } = await import('fs/promises')
    const raw = await readFile(DATA_FILE, 'utf-8')
    return JSON.parse(raw) as UserNotification[]
  } catch {
    return []
  }
}

async function writeAll(rows: UserNotification[]): Promise<void> {
  const { writeFile, mkdir } = await import('fs/promises')
  await mkdir('.data', { recursive: true })
  await writeFile(DATA_FILE, JSON.stringify(rows, null, 2))
}

export async function createNotification(
  data: Omit<UserNotification, 'id' | 'read' | 'createdAt'>,
): Promise<UserNotification> {
  const rows = await readAll()
  const row: UserNotification = {
    ...data,
    id: randomUUID(),
    read: false,
    createdAt: new Date().toISOString(),
  }
  rows.push(row)
  await writeAll(rows)
  return row
}

export async function listNotificationsForUser(userId: string): Promise<UserNotification[]> {
  const rows = await readAll()
  return rows
    .filter(r => r.userId === userId)
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}

export async function markNotificationRead(id: string, userId: string): Promise<void> {
  const rows = await readAll()
  const row = rows.find(r => r.id === id && r.userId === userId)
  if (row) {
    row.read = true
    await writeAll(rows)
  }
}
