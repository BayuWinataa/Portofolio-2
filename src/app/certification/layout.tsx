import type { Metadata } from 'next'

const SITE_URL = 'https://bayuwinata.my.id'

export const metadata: Metadata = {
  title: 'Sertifikasi — Bayu Winata Developer',
  description:
    'Sertifikasi dan pencapaian profesional Bayu Winata: DBS Foundation Coding Camp, Frontend Web Developer Expert, dan berbagai sertifikat dari program teknologi bergengsi.',
  keywords: [
    'Sertifikasi Bayu Winata',
    'DBS Foundation Coding Camp',
    'Frontend Web Developer Expert Indonesia',
    'Sertifikasi Developer Indonesia',
    'Certified Web Developer Indonesia',
  ],
  alternates: {
    canonical: `${SITE_URL}/certification`,
  },
  openGraph: {
    title: 'Sertifikasi Profesional — Bayu Winata Developer',
    description:
      'Sertifikasi profesional Bayu Winata dari DBS Foundation, Rakamin Academy, dan berbagai program teknologi lainnya.',
    url: `${SITE_URL}/certification`,
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Sertifikasi Bayu Winata',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sertifikasi Profesional — Bayu Winata',
    description:
      'Sertifikasi profesional Bayu Winata dari berbagai program teknologi bergengsi.',
    images: ['/og-image.png'],
  },
}

export default function CertificationLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
