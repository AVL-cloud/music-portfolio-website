import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { AdminBar } from '@/components/layout/AdminBar'
import { TooltipProvider } from '@/components/ui/Tooltip'
import { AdminProvider } from '@/contexts/AdminContext'
import { NotificationProvider } from '@/contexts/NotificationContext'
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

// TODO Phase 3: derive isAdmin from session (ADMIN_EMAIL check) and isLoggedIn from auth
const IS_ADMIN = process.env.NODE_ENV === 'development'
const IS_LOGGED_IN = process.env.NODE_ENV === 'development'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem storageKey="swc-theme">
          <AdminProvider isAdmin={IS_ADMIN}>
            <NotificationProvider isLoggedIn={IS_LOGGED_IN}>
              <TooltipProvider>
                <AdminBar />
                <Header isLoggedIn={IS_LOGGED_IN} />
                <div className="flex-1">{children}</div>
                <Footer />
              </TooltipProvider>
            </NotificationProvider>
          </AdminProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
