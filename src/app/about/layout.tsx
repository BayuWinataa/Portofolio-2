import type { Metadata } from 'next'

const SITE_URL = 'https://bayuwinata.my.id'

export const metadata: Metadata = {
  title: 'Tentang Saya — Bayu Winata Fullstack Developer',
  description:
    'Kenali Bayu Winata lebih jauh — mahasiswa Teknik Informatika Universitas Malikussaleh yang berpengalaman sebagai Fullstack Developer, WordPress Developer, dan Flutter Developer. Lihat pengalaman kerja, tech stack, dan perjalanan kariernya.',
  keywords: [
    'Bayu Winata',
    'About Bayu Winata',
    'Fullstack Developer Indonesia',
    'Mahasiswa Teknik Informatika Unimal',
    'Web Developer Aceh',
    'Next.js Developer Aceh',
    'React Developer Indonesia',
    'Flutter Developer Indonesia',
  ],
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  openGraph: {
    title: 'Tentang Bayu Winata — Fullstack Developer Indonesia',
    description:
      'Mahasiswa Teknik Informatika Universitas Malikussaleh dengan pengalaman sebagai Fullstack Developer, WordPress Developer, dan Flutter Developer.',
    url: `${SITE_URL}/about`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bayu Winata — Fullstack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tentang Bayu Winata — Fullstack Developer Indonesia',
    description:
      'Mahasiswa Teknik Informatika Universitas Malikussaleh dengan pengalaman sebagai Fullstack Developer.',
    images: ['/og-image.png'],
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
