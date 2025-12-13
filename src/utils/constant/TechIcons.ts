import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoPostgresql,
} from 'react-icons/bi'

import {
  SiHtml5,
  SiCss3,
  SiSass,
  SiPhp,
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiFramer,
  SiWordpress,
  SiBootstrap,
  SiGit,
  SiFigma,
  SiPostman,
  SiSupabase,
  SiPrisma,
  SiLaravel,
  SiDocker,
} from 'react-icons/si'

export const techIcons = [
  // 🌐 Core Web
  { name: 'HTML', icons: SiHtml5 },
  { name: 'CSS', icons: SiCss3 },
  { name: 'SCSS', icons: SiSass },

  // 🧠 Language
  { name: 'JavaScript', icons: BiLogoJavascript },
  { name: 'TypeScript', icons: BiLogoTypescript },

  // ⚛️ Frontend
  { name: 'React', icons: BiLogoReact },
  { name: 'NextJS', icons: SiNextdotjs },
  { name: 'TailwindCSS', icons: SiTailwindcss },
  { name: 'Bootstrap', icons: SiBootstrap },
  { name: 'Framer Motion', icons: SiFramer },

  // 🎨 Design & Tools
  { name: 'Figma', icons: SiFigma },
  { name: 'Git', icons: SiGit },
  { name: 'Postman', icons: SiPostman },
  { name: 'Docker', icons: SiDocker },

  // 🧩 CMS & Backend (supporting)
  { name: 'WordPress', icons: SiWordpress },
  { name: 'NodeJS', icons: BiLogoNodejs },
  { name: 'PHP', icons: SiPhp },
  { name: 'Laravel', icons: SiLaravel },

  // 🗄️ Database & Platform
  { name: 'MySQL', icons: SiMysql },
  { name: 'PostgreSQL', icons: BiLogoPostgresql },
  { name: 'Supabase', icons: SiSupabase },
  { name: 'Prisma', icons: SiPrisma },
]
