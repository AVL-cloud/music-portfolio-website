'use server'

import { revalidatePath } from 'next/cache'
import { getSession } from '@/lib/auth/session'
import { markNotificationRead } from '@/lib/notifications/store'

export async function markNotificationReadAction(id: string): Promise<void> {
  const session = await getSession()
  if (!session) return
  await markNotificationRead(id, session.id)
  revalidatePath('/', 'layout')
}
