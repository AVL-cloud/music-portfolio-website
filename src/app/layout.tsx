import type { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { TooltipProvider } from '@/components/ui/Tooltip'
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem storageKey="swc-theme">
          <TooltipProvider>
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
