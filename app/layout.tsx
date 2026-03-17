import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'BetCrowd - Te invitaron a un torneo',
  description: 'Sumate a BetCrowd y participá del torneo. Descargá la app gratis para iOS y Android.',
  generator: 'BetCrowd',
  applicationName: 'BetCrowd',
  keywords: ['BetCrowd', 'torneo', 'apuestas', 'deportes', 'competencia'],
  authors: [{ name: 'BetCrowd' }],
  icons: {
    icon: '/images/betcrowd-logo.png',
    apple: '/images/betcrowd-logo.png',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'BetCrowd',
    title: 'Te invitaron a un torneo en BetCrowd',
    description: 'Sumate a BetCrowd y participá del torneo. Descargá la app gratis para iOS y Android.',
    images: [
      {
        url: '/images/betcrowd-logo.png',
        width: 512,
        height: 512,
        alt: 'BetCrowd Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'Te invitaron a un torneo en BetCrowd',
    description: 'Sumate a BetCrowd y participá del torneo. Descargá la app gratis.',
    images: ['/images/betcrowd-logo.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#0D0D0D',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
