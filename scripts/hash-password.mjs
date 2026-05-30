// Generates a PBKDF2 hash compatible with src/lib/auth/password.ts
// Usage: node scripts/hash-password.mjs '<password>'
//   or:  ADMIN_PASSWORD='<password>' node scripts/hash-password.mjs
// Output: a `pbkdf2:<salt>:<key>` string to store in ADMIN_PASSWORD_HASH.

const ITERATIONS = 100_000
const KEY_LENGTH = 32

const password = process.argv[2] ?? process.env.ADMIN_PASSWORD
if (!password) {
  console.error("Provide a password as an argument or via ADMIN_PASSWORD env var.")
  process.exit(1)
}

const salt = crypto.getRandomValues(new Uint8Array(16))
const keyMaterial = await crypto.subtle.importKey(
  'raw',
  new TextEncoder().encode(password),
  'PBKDF2',
  false,
  ['deriveBits'],
)
const bits = await crypto.subtle.deriveBits(
  { name: 'PBKDF2', salt, iterations: ITERATIONS, hash: 'SHA-256' },
  keyMaterial,
  KEY_LENGTH * 8,
)
const toB64 = arr => Buffer.from(arr).toString('base64url')
process.stdout.write(`pbkdf2:${toB64(salt)}:${toB64(new Uint8Array(bits))}\n`)
