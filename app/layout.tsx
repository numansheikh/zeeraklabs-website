import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Inter } from 'next/font/google'
import './globals.css'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter-var',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Zeerak Labs | Shaping the Kinetic Era',
  description:
    'A multi-disciplinary studio bridging frontier research, autonomous agency, and high-performance software.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  openGraph: {
    title: 'Zeerak Labs | Shaping the Kinetic Era',
    description:
      'A multi-disciplinary studio bridging frontier research, autonomous agency, and high-performance software.',
    url: 'https://zeeraklabs.com',
    siteName: 'Zeerak Labs',
    images: [{ url: '/og-logo.png', width: 256, height: 256, alt: 'Zeerak Labs' }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zeerak Labs | Shaping the Kinetic Era',
    description: 'Engineering the Intelligence of Tomorrow.',
    creator: '@zeeraklabs',
    images: ['/og-logo.png'],
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${jakarta.variable} ${inter.variable} font-body`}>
        {children}
      </body>
    </html>
  )
}
