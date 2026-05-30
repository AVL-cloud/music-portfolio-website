// Dev: JSON file storage at .data/users.json
// TODO: replace with Cloudflare D1 + Drizzle for production

import { randomUUID } from 'crypto'
import type { User } from './types'

const DATA_FILE = '.data/users.json'

async function readUsers(): Promise<User[]> {
  try {
    const { readFile } = await import('fs/promises')
    const raw = await readFile(DATA_FILE, 'utf-8')
    return JSON.parse(raw) as User[]
  } catch {
    return []
  }
}

async function writeUsers(users: User[]): Promise<void> {
  const { writeFile, mkdir } = await import('fs/promises')
  await mkdir('.data', { recursive: true })
  await writeFile(DATA_FILE, JSON.stringify(users, null, 2))
}

export async function createUser(data: {
  email: string
  username?: string
  passwordHash: string
  role: 'member' | 'admin'
}): Promise<User> {
  const users = await readUsers()
  const user: User = {
    id: randomUUID(),
    email: data.email.toLowerCase(),
    username: data.username || undefined,
    passwordHash: data.passwordHash,
    role: data.role,
    createdAt: new Date().toISOString(),
  }
  users.push(user)
  await writeUsers(users)
  return user
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const users = await readUsers()
  return users.find(u => u.email === email.toLowerCase()) ?? null
}

export async function getUserByUsername(username: string): Promise<User | null> {
  const users = await readUsers()
  return users.find(u => u.username?.toLowerCase() === username.toLowerCase()) ?? null
}

// Looks up by email if the identifier contains '@', otherwise by username.
export async function getUserByIdentifier(identifier: string): Promise<User | null> {
  const value = identifier.trim()
  if (value.includes('@')) return getUserByEmail(value)
  return getUserByUsername(value)
}

export async function getUserById(id: string): Promise<User | null> {
  const users = await readUsers()
  return users.find(u => u.id === id) ?? null
}

// All admin email addresses: stored admin users, the bootstrap ADMIN_EMAIL,
// and any in ADMIN_EMAILS. Deduplicated, lowercased.
export async function getAdminEmails(): Promise<string[]> {
  const users = await readUsers()
  const fromStore = users.filter(u => u.role === 'admin').map(u => u.email)
  const fromEnv = [
    process.env.ADMIN_EMAIL ?? '',
    ...(process.env.ADMIN_EMAILS ?? '').split(','),
  ]
    .map(e => e.trim().toLowerCase())
    .filter(Boolean)
  return Array.from(new Set([...fromStore, ...fromEnv]))
}

export async function updateUserPassword(id: string, passwordHash: string): Promise<void> {
  const users = await readUsers()
  const user = users.find(u => u.id === id)
  if (user) {
    user.passwordHash = passwordHash
    await writeUsers(users)
  }
}

export async function updateUsername(id: string, username: string | undefined): Promise<void> {
  const users = await readUsers()
  const user = users.find(u => u.id === id)
  if (user) {
    user.username = username
    await writeUsers(users)
  }
}
