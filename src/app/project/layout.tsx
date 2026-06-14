import type { Metadata } from 'next'

const SITE_URL = 'https://bayuwinata.my.id'

export const metadata: Metadata = {
  title: 'Proyek — Web & Mobile Apps oleh Bayu Winata',
  description:
    'Koleksi proyek web dan mobile oleh Bayu Winata: Next.js, React, Flutter, WordPress. Termasuk aplikasi e-commerce, sistem manajemen, mobile apps, dan landing page.',
  keywords: [
    'Proyek Bayu Winata',
    'Portfolio Web Developer Indonesia',
    'Next.js Projects',
    'React Projects Indonesia',
    'Flutter Apps Indonesia',
    'E-commerce Next.js',
    'Web Developer Portfolio',
  ],
  alternates: {
    canonical: `${SITE_URL}/project`,
  },
  openGraph: {
    title: 'Proyek Web & Mobile — Bayu Winata Fullstack Developer',
    description:
      'Koleksi proyek Next.js, React, Flutter, dan WordPress oleh Bayu Winata, Fullstack Developer Indonesia.',
    url: `${SITE_URL}/project`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Proyek Bayu Winata — Fullstack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proyek Web & Mobile — Bayu Winata',
    description:
      'Koleksi proyek Next.js, React, Flutter, dan WordPress oleh Bayu Winata.',
    images: ['/og-image.png'],
  },
}

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
