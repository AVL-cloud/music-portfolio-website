// PBKDF2 via Web Crypto — works in Node.js 18+ and Cloudflare Workers

const ITERATIONS = 100_000
const KEY_LENGTH = 32

export async function hashPassword(password: string): Promise<string> {
  const salt = crypto.getRandomValues(new Uint8Array(16))
  const key = await deriveKey(password, salt)
  return `pbkdf2:${toBase64(salt)}:${toBase64(key)}`
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  const parts = hash.split(':')
  if (parts.length !== 3 || parts[0] !== 'pbkdf2') return false
  const salt = fromBase64(parts[1])
  const expected = fromBase64(parts[2])
  const actual = await deriveKey(password, salt)
  return timingSafeEqual(actual, expected)
}

async function deriveKey(password: string, salt: Uint8Array): Promise<Uint8Array> {
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    new TextEncoder().encode(password),
    'PBKDF2',
    false,
    ['deriveBits'],
  )
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: salt.buffer as ArrayBuffer, iterations: ITERATIONS, hash: 'SHA-256' },
    keyMaterial,
    KEY_LENGTH * 8,
  )
  return new Uint8Array(bits)
}

function timingSafeEqual(a: Uint8Array, b: Uint8Array): boolean {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i]
  return diff === 0
}

const toBase64 = (arr: Uint8Array) => Buffer.from(arr).toString('base64url')
const fromBase64 = (s: string) => new Uint8Array(Buffer.from(s, 'base64url'))
