'use client'

import Image from 'next/image'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function ProjectCard({
  image,
  title,
  description,
  deskripsi,
  repo,
  demo,
  type,
}: any) {
  const desc = description || deskripsi || ''

  return (
    <motion.div
      whileInView={{ scale: 1 }}
      initial={{ scale: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="dark:border-dark-secondary group relative h-36 w-full max-w-[280px] cursor-pointer overflow-hidden rounded-lg border-2 border-black-primary object-cover shadow-button-card transition-all duration-300 hover:shadow-lg sm:max-w-[360px] lg:h-44"
    >
      <Image
        src={`https://drive.google.com/thumbnail?id=${image}&sz=w3000`}
        width={1000}
        height={1000}
        className="h-full w-full object-cover"
        alt={title}
      />
      <div className="absolute right-0 top-0 z-10 flex h-1/4 w-full -translate-y-10 items-center justify-end gap-2 p-2 transition-all duration-300 group-hover:translate-y-0">
        {demo && demo !== 'none' && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full border-2 border-black-primary bg-yellow-primary p-1.5 text-sm text-black transition-colors hover:bg-orange-primary lg:p-2 lg:text-base"
            title="Visit website"
          >
            <FaExternalLinkAlt />
          </a>
        )}
        {repo && repo !== 'none' && (
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full border-2 border-black-primary bg-yellow-primary p-1.5 text-sm text-black transition-colors hover:bg-orange-primary lg:p-2 lg:text-base"
            title="View repository"
          >
            <FaGithub />
          </a>
        )}
      </div>
      <div className="dark:bg-dark-secondary absolute bottom-0 h-10 w-full border-t-2 border-black-primary bg-yellow-primary p-2 transition-all duration-300 group-hover:h-[60%] lg:group-hover:h-2/4">
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between gap-2">
            <h1 className="line-clamp-1 flex-1 font-bold text-black-primary">
              {title}
            </h1>
            <span className="whitespace-nowrap rounded-lg bg-black px-2 py-1 text-xs font-semibold text-white">
              {type}
            </span>
          </div>
          <p className="hidden text-xs font-normal leading-relaxed text-black-primary group-hover:block">
            {desc}
          </p>
        </div>
      </div>
    </motion.div>
  )
}
