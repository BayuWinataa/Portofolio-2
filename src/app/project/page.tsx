'use client'

import ProjectCard from '@/components/common/ProjectCard'
import TextSection from '@/components/common/TextSection'

import { useState } from 'react'
import { IProject } from '@/utils/interface/Project'
import { GithubStats } from '@/components/common/GithubStats'
import { MonkeyTypeStats } from '@/components/common/MonkeyTypeStats'
import { projectsData } from '@/utils/constant/Projects'

export default function Project() {
  const [filter, setFilter] = useState('all')

  return (
    <div className="">
      <TextSection icon="⚒️" text="it's My Projects." />
      <div>
        <div className="my-10 hidden justify-center md:flex">
          <GithubStats />
        </div>
        <div className="my-10 hidden justify-center md:flex">
          <MonkeyTypeStats />
        </div>
        <div className="my-4 flex justify-center gap-4 font-semibold text-[#616D8A] dark:text-white sm:gap-6 md:gap-8 lg:gap-4">
          <button
            className={`group relative flex cursor-pointer flex-col items-start justify-center`}
            onClick={() => setFilter('all')}
          >
            <span
              className={`absolute bottom-0 h-1 ${
                filter == 'all' ? 'w-full' : 'w-0'
              } rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}
            ></span>
            <p>All {filter == 'all' && `(${projectsData.length})`}</p>
          </button>
          <button
            className={`group relative flex cursor-pointer flex-col items-start justify-center`}
            onClick={() => setFilter('web')}
          >
            <span
              className={`absolute bottom-0 h-1 ${
                filter == 'web' ? 'w-full' : 'w-0'
              } rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}
            ></span>
            <p>
              Web{' '}
              {filter == 'web' &&
                `(${
                  projectsData.filter((item: IProject) => item.type === 'web')
                    .length
                })`}
            </p>
          </button>
          <button
            className={`group relative flex cursor-pointer flex-col items-start justify-center`}
            onClick={() => setFilter('mobile')}
          >
            <span
              className={`absolute bottom-0 h-1 ${
                filter == 'mobile' ? 'w-full' : 'w-0'
              } rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}
            ></span>
            <p>
              Mobile{' '}
              {filter == 'mobile' &&
                `(${
                  projectsData.filter(
                    (item: IProject) => item.type === 'mobile',
                  ).length
                })`}
            </p>
          </button>
          <button
            className={`group relative flex cursor-pointer flex-col items-start justify-center`}
            onClick={() => setFilter('ui-ux')}
          >
            <span
              className={`absolute bottom-0 h-1 ${
                filter == 'ui-ux' ? 'w-full' : 'w-0'
              } rounded-md bg-orange-primary transition-all duration-300 ease-in-out group-hover:w-full`}
            ></span>
            <p>
              UI/UX{' '}
              {filter == 'ui-ux' &&
                `(${
                  projectsData.filter((item: IProject) => item.type === 'ui-ux')
                    .length
                })`}
            </p>
          </button>
        </div>
      </div>
      <div className="mb-2 mt-6 flex w-full flex-wrap justify-center gap-4 sm:mb-4 md:mb-5 lg:mb-6 lg:gap-6">
        {projectsData
          .slice(0)
          .reverse()
          .filter((item: IProject) => {
            if (filter === 'all') return true
            if (filter === 'web') return item.type === 'web'
            if (filter === 'mobile') return item.type === 'mobile'
            if (filter === 'ui-ux') return item.type === 'ui-ux'
            return item.type === filter
          })
          .map((item: IProject, index: number) => (
            <ProjectCard {...item} key={index} />
          ))}
      </div>
    </div>
  )
}
