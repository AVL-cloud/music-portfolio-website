'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { z } from 'zod'
import { hashPassword, verifyPassword } from '@/lib/auth/password'
import {
  createUser,
  getUserByEmail,
  getUserById,
  getUserByIdentifier,
  getUserByUsername,
  updateUserPassword,
  updateUsername,
} from '@/lib/auth/user-store'
import { createSession, destroySession, getSession } from '@/lib/auth/session'
import { createResetToken, validateResetToken, invalidateResetToken } from '@/lib/auth/reset-tokens'
import { ensureSeedAdmin, isBootstrapAdmin } from '@/lib/auth/seed-admin'

const ADMIN_EMAILS = (process.env.ADMIN_EMAILS ?? '')
  .split(',')
  .map(e => e.trim().toLowerCase())
  .filter(Boolean)

function isAdminEmail(email: string): boolean {
  return ADMIN_EMAILS.includes(email.toLowerCase()) || isBootstrapAdmin(email)
}

export type AuthResult =
  | { success: true }
  | { success: false; error: string; field?: string }

// ── Login ──────────────────────────────────────────────────────────────────

const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
})

export async function loginAction(formData: FormData): Promise<AuthResult> {
  await ensureSeedAdmin()

  const raw = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const result = LoginSchema.safeParse(raw)
  if (!result.success) {
    const issue = result.error.issues[0]
    return { success: false, error: issue.message, field: String(issue.path[0] ?? '') }
  }

  const user = await getUserByEmail(result.data.email)
  if (!user || !(await verifyPassword(result.data.password, user.passwordHash))) {
    return { success: false, error: 'Invalid email or password' }
  }

  await createSession({ id: user.id, email: user.email, username: user.username, role: user.role })
  revalidatePath('/', 'layout')
  return { success: true }
}

// ── Register ───────────────────────────────────────────────────────────────

const RegisterSchema = z
  .object({
    username: z
      .string()
      .min(3, 'Username must be at least 3 characters')
      .max(30, 'Username must be at most 30 characters')
      .regex(/^[a-zA-Z0-9_-]+$/, 'Username may only contain letters, numbers, _ and -')
      .optional(),
    email: z.string().email('Invalid email address'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[a-zA-Z]/, 'Password must contain at least one letter')
      .regex(/[0-9]/, 'Password must contain at least one number'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine(d => d.password === d.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export async function registerAction(formData: FormData): Promise<AuthResult> {
  const rawUsername = (formData.get('username') as string)?.trim()
  const raw = {
    username: rawUsername || undefined,
    email: formData.get('email') as string,
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirmPassword') as string,
  }

  const result = RegisterSchema.safeParse(raw)
  if (!result.success) {
    const issue = result.error.issues[0]
    return { success: false, error: issue.message, field: String(issue.path[0] ?? '') }
  }

  const existing = await getUserByEmail(result.data.email)
  if (existing) {
    return { success: false, error: 'An account with this email already exists', field: 'email' }
  }

  const passwordHash = await hashPassword(result.data.password)
  const role = isAdminEmail(result.data.email) ? 'admin' : 'member'
  const user = await createUser({
    email: result.data.email,
    username: result.data.username,
    passwordHash,
    role,
  })

  await createSession({ id: user.id, email: user.email, username: user.username, role: user.role })
  revalidatePath('/', 'layout')
  return { success: true }
}

// ── Logout ─────────────────────────────────────────────────────────────────

export async function logoutAction(): Promise<void> {
  await destroySession()
  revalidatePath('/', 'layout')
  redirect('/')
}

// ── Forgot password ────────────────────────────────────────────────────────

export async function forgotPasswordAction(formData: FormData): Promise<AuthResult> {
  await ensureSeedAdmin()

  const identifier = (formData.get('identifier') as string)?.trim()

  if (!identifier) {
    return { success: false, error: 'Please enter your email or username', field: 'identifier' }
  }

  // Accept an email or a username. Validate format only when it looks like an email.
  if (identifier.includes('@')) {
    const result = z.string().email('Invalid email address').safeParse(identifier)
    if (!result.success) {
      return { success: false, error: result.error.issues[0].message, field: 'identifier' }
    }
  }

  const user = await getUserByIdentifier(identifier)
  if (user) {
    const token = await createResetToken(user.id)
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000'
    const resetUrl = `${baseUrl}/reset-password?token=${token}`
    // TODO: replace with real email service (Resend, SendGrid, etc.) — send to user.email
    console.log(`\n🔑  Password reset requested for ${user.email}\n    ${resetUrl}\n    (expires in 24 h)\n`)
  }

  // Always return success — don't reveal whether the account exists
  return { success: true }
}

// ── Reset password ─────────────────────────────────────────────────────────

const ResetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[a-zA-Z]/, 'Password must contain at least one letter')
      .regex(/[0-9]/, 'Password must contain at least one number'),
    confirmPassword: z.string().min(1, 'Please confirm your password'),
  })
  .refine(d => d.password === d.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export async function resetPasswordAction(formData: FormData): Promise<AuthResult> {
  const token = formData.get('token') as string
  if (!token) return { success: false, error: 'Missing reset token' }

  const result = ResetPasswordSchema.safeParse({
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirmPassword') as string,
  })
  if (!result.success) {
    const issue = result.error.issues[0]
    return { success: false, error: issue.message, field: String(issue.path[0] ?? '') }
  }

  const userId = await validateResetToken(token)
  if (!userId) {
    return { success: false, error: 'This reset link is invalid or has expired. Please request a new one.' }
  }

  const passwordHash = await hashPassword(result.data.password)
  await updateUserPassword(userId, passwordHash)
  await invalidateResetToken(token)

  const user = await getUserById(userId)
  if (user) {
    await createSession({ id: user.id, email: user.email, username: user.username, role: user.role })
  }

  revalidatePath('/', 'layout')
  return { success: true }
}

// ── Account: change username (logged-in user) ────────────────────────────────

const UsernameSchema = z
  .string()
  .min(3, 'Username must be at least 3 characters')
  .max(30, 'Username must be at most 30 characters')
  .regex(/^[a-zA-Z0-9_-]+$/, 'Username may only contain letters, numbers, _ and -')

export async function updateUsernameAction(formData: FormData): Promise<AuthResult> {
  const session = await getSession()
  if (!session) return { success: false, error: 'You must be signed in' }

  const raw = (formData.get('username') as string)?.trim() ?? ''

  // Allow clearing the username (falls back to email for display).
  if (raw === '') {
    await updateUsername(session.id, undefined)
    await createSession({ id: session.id, email: session.email, username: undefined, role: session.role })
    revalidatePath('/', 'layout')
    return { success: true }
  }

  const result = UsernameSchema.safeParse(raw)
  if (!result.success) {
    return { success: false, error: result.error.issues[0].message, field: 'username' }
  }

  const taken = await getUserByUsername(result.data)
  if (taken && taken.id !== session.id) {
    return { success: false, error: 'That username is already taken', field: 'username' }
  }

  await updateUsername(session.id, result.data)
  await createSession({ id: session.id, email: session.email, username: result.data, role: session.role })
  revalidatePath('/', 'layout')
  return { success: true }
}

// ── Account: change password (logged-in user) ────────────────────────────────

const ChangePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, 'Current password is required'),
    password: z
      .string()
      .min(8, 'Password must be at least 8 characters')
      .regex(/[a-zA-Z]/, 'Password must contain at least one letter')
      .regex(/[0-9]/, 'Password must contain at least one number'),
    confirmPassword: z.string().min(1, 'Please confirm your new password'),
  })
  .refine(d => d.password === d.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  })

export async function updatePasswordAction(formData: FormData): Promise<AuthResult> {
  const session = await getSession()
  if (!session) return { success: false, error: 'You must be signed in' }

  const result = ChangePasswordSchema.safeParse({
    currentPassword: formData.get('currentPassword') as string,
    password: formData.get('password') as string,
    confirmPassword: formData.get('confirmPassword') as string,
  })
  if (!result.success) {
    const issue = result.error.issues[0]
    return { success: false, error: issue.message, field: String(issue.path[0] ?? '') }
  }

  const user = await getUserById(session.id)
  if (!user) return { success: false, error: 'Account not found' }

  if (!(await verifyPassword(result.data.currentPassword, user.passwordHash))) {
    return { success: false, error: 'Current password is incorrect', field: 'currentPassword' }
  }

  await updateUserPassword(user.id, await hashPassword(result.data.password))
  return { success: true }
}
