import { type NextRequest, NextResponse } from 'next/server'
import { destroySession } from '@/lib/auth/session'
import { revalidatePath } from 'next/cache'

export async function GET(_req: NextRequest) {
  await destroySession()
  revalidatePath('/', 'layout')
  return NextResponse.redirect(new URL('/', _req.url))
}
