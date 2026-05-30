import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AdminBar } from '@/components/layout/AdminBar'
import { TooltipProvider } from '@/components/ui/Tooltip'
import { AdminProvider } from '@/contexts/AdminContext'
import { NotificationProvider } from '@/contexts/NotificationContext'
import { I18nProvider } from '@/contexts/I18nContext'
import { DatasetProvider } from '@/contexts/DatasetContext'
import { CoversProvider } from '@/contexts/CoversContext'
import { getSession } from '@/lib/auth/session'
import { listNotificationsForUser } from '@/lib/notifications/store'
import type { AppNotification } from '@/contexts/NotificationContext'
import './globals.css'

export const metadata: Metadata = {
  title: 'Sonic Wave Studio — Antoine Vlieghe',
  description: 'Music portfolio, covers, guitar tabs, courses and gear by Antoine Vlieghe.',
  metadataBase: new URL('https://sonicwavestudio.com'),
  openGraph: {
    title: 'Sonic Wave Studio',
    description: 'Music portfolio by Antoine Vlieghe.',
    url: 'https://sonicwavestudio.com',
    siteName: 'Sonic Wave Studio',
    type: 'website',
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getSession()
  const isLoggedIn = session !== null
  const isAdmin = session?.role === 'admin'
  const user = session ? { name: session.username ?? session.email } : undefined

  const rawNotifications = session ? await listNotificationsForUser(session.id) : []
  const initialNotifications: AppNotification[] = rawNotifications.map(n => ({
    id: n.id,
    title: n.title,
    body: n.body,
    link: n.link,
    read: n.read,
    createdAt: new Date(n.createdAt),
  }))

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem storageKey="swc-theme">
          <I18nProvider>
            <DatasetProvider>
              <CoversProvider>
              <AdminProvider isAdmin={isAdmin}>
                <NotificationProvider initialNotifications={initialNotifications}>
                  <TooltipProvider>
                    <AdminBar />
                    <Header isLoggedIn={isLoggedIn} user={user} />
                    <div className="flex-1">{children}</div>
                    <Footer />
                  </TooltipProvider>
                </NotificationProvider>
              </AdminProvider>
              </CoversProvider>
            </DatasetProvider>
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
