const SITE_URL = 'https://bayuwinata.my.id'

export default function JsonLd() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bayu Winata',
    givenName: 'Bayu',
    familyName: 'Winata',
    url: SITE_URL,
    image: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/me.png`,
      width: 1000,
      height: 1000,
    },
    sameAs: [
      'https://github.com/BayuWinataa',
      'https://www.linkedin.com/in/bayuwinata',
      'https://www.instagram.com/bayuwinata__',
    ],
    jobTitle: 'Fullstack Developer',
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Fullstack Developer',
      occupationLocation: {
        '@type': 'Country',
        name: 'Indonesia',
      },
      skills:
        'Next.js, React, TypeScript, WordPress, Flutter, Node.js, Tailwind CSS',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'HelloCation Korea',
    },
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Universitas Malikussaleh',
      sameAs: 'https://unimal.ac.id',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lhokseumawe',
      addressRegion: 'Aceh',
      addressCountry: 'ID',
    },
    email: 'bayuwinata94@gmail.com',
    description:
      'Bayu Winata adalah Fullstack Developer dari Aceh, Indonesia. Spesialis Next.js, React, TypeScript, dan WordPress dengan pengalaman lebih dari 50 proyek freelance.',
    knowsAbout: [
      'Next.js',
      'React',
      'TypeScript',
      'WordPress',
      'Flutter',
      'Fullstack Web Development',
      'Frontend Development',
      'Node.js',
      'TailwindCSS',
    ],
    nationality: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    inLanguage: 'id',
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Bayu Winata — Fullstack Developer Indonesia',
    alternateName: 'Portfolio Bayu Winata',
    url: SITE_URL,
    description:
      'Portfolio Bayu Winata, Fullstack Developer dari Aceh, Indonesia.',
    inLanguage: 'id',
    author: {
      '@type': 'Person',
      name: 'Bayu Winata',
      url: SITE_URL,
    },
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      '@type': 'Person',
      name: 'Bayu Winata',
    },
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Beranda',
        item: SITE_URL,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Tentang',
        item: `${SITE_URL}/about`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Proyek',
        item: `${SITE_URL}/project`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: 'Sertifikasi',
        item: `${SITE_URL}/certification`,
      },
      {
        '@type': 'ListItem',
        position: 5,
        name: 'Resume',
        item: `${SITE_URL}/resume`,
      },
      {
        '@type': 'ListItem',
        position: 6,
        name: 'Kontak',
        item: `${SITE_URL}/contact`,
      },
    ],
  }

  const profilePageSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    dateCreated: '2024-01-01T00:00:00+07:00',
    dateModified: new Date().toISOString(),
    mainEntity: {
      '@type': 'Person',
      name: 'Bayu Winata',
      identifier: 'BayuWinata',
      description:
        'Fullstack Developer dari Aceh, Indonesia. Spesialis Next.js, React, TypeScript, dan WordPress.',
      image: `${SITE_URL}/me.png`,
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
    </>
  )
}
