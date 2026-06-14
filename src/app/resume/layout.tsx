import type { Metadata } from 'next'

const SITE_URL = 'https://bayuwinata.my.id'

export const metadata: Metadata = {
  title: 'Resume — CV Bayu Winata Fullstack Developer',
  description:
    'Resume dan CV Bayu Winata, Fullstack Developer dengan pengalaman sebagai Lead IT, Frontend Web Associate, WordPress Developer, dan lebih dari 50 proyek freelance. Download CV gratis.',
  keywords: [
    'CV Bayu Winata',
    'Resume Fullstack Developer Indonesia',
    'Curriculum Vitae Web Developer',
    'Download CV Developer Indonesia',
    'Bayu Winata CV',
  ],
  alternates: {
    canonical: `${SITE_URL}/resume`,
  },
  openGraph: {
    title: 'Resume Bayu Winata — Fullstack Developer Indonesia',
    description:
      'Resume lengkap Bayu Winata: Lead IT, Frontend Web Associate, WordPress Developer, 50+ proyek freelance.',
    url: `${SITE_URL}/resume`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Resume Bayu Winata',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resume Bayu Winata — Fullstack Developer',
    description: 'Resume lengkap Bayu Winata, Fullstack Developer Indonesia.',
    images: ['/og-image.png'],
  },
}

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
