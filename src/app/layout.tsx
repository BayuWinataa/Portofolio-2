import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Settings } from '@/components/common/Settings'
import { ThemeProvider } from '@/provider/themesProvider'
import JsonLd from '@/components/common/JsonLd'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
})

const SITE_URL = 'https://bayuwinata.my.id'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Bayu Winata — Fullstack Developer Indonesia',
    template: '%s | Bayu Winata',
  },
  description:
    'Portfolio Bayu Winata, Fullstack Developer dari Aceh, Indonesia. Spesialis Next.js, React, TypeScript, dan WordPress. Berpengalaman membangun aplikasi web responsif dan modern.',
  keywords: [
    'Bayu Winata',
    'Fullstack Developer Indonesia',
    'Fullstack Developer Aceh',
    'Fullstack Developer Lhokseumawe',
    'WordPress Developer Indonesia',
    'Frontend Developer Next.js',
    'React Developer Indonesia',
    'Web Developer Aceh',
    'Portfolio Developer Indonesia',
    'Next.js Developer',
    'TypeScript Developer',
  ],
  authors: [{ name: 'Bayu Winata', url: SITE_URL }],
  creator: 'Bayu Winata',
  publisher: 'Bayu Winata',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: SITE_URL,
    siteName: 'Bayu Winata — Fullstack Developer',
    title: 'Bayu Winata — Fullstack Developer Indonesia',
    description:
      'Portfolio Bayu Winata, Fullstack Developer dari Aceh, Indonesia. Spesialis Next.js, React, TypeScript, dan WordPress.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bayu Winata — Fullstack Developer Indonesia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bayu Winata — Fullstack Developer Indonesia',
    description:
      'Portfolio Bayu Winata, Fullstack Developer dari Aceh, Indonesia. Spesialis Next.js, React, TypeScript, dan WordPress.',
    images: ['/og-image.png'],
    creator: '@bayuwinata',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
  category: 'technology',
  verification: {
    google: 'ducbk3_3h-o3QX8x-WuFdEpZxROyNS8jRsNi',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id" className={plusJakartaSans.variable}>
      <body className={`overflow-x-hidden ${plusJakartaSans.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <JsonLd />
          <Navbar />
          <main className="mb-10 p-5 md:p-8">{children}</main>
          <Settings />
        </ThemeProvider>
      </body>
    </html>
  )
}
