import type { Metadata } from 'next'

const SITE_URL = 'https://bayuwinata.my.id'

export const metadata: Metadata = {
  title: 'Hubungi Saya — Bayu Winata Fullstack Developer',
  description:
    'Hubungi Bayu Winata untuk kolaborasi proyek web, freelance development, atau diskusi teknologi. Tersedia via GitHub, LinkedIn, Instagram, dan Email.',
  keywords: [
    'Kontak Bayu Winata',
    'Hire Fullstack Developer Indonesia',
    'Freelance Web Developer Indonesia',
    'Freelance Developer Aceh',
    'Jasa Web Developer Indonesia',
  ],
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: 'Hubungi Bayu Winata — Fullstack Developer Indonesia',
    description:
      'Hubungi Bayu Winata untuk kolaborasi proyek atau freelance development. Tersedia via GitHub, LinkedIn, Instagram, dan Email.',
    url: `${SITE_URL}/contact`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kontak Bayu Winata',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hubungi Bayu Winata — Fullstack Developer',
    description:
      'Hire atau kolaborasi dengan Bayu Winata, Fullstack Developer Indonesia.',
    images: ['/og-image.png'],
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
