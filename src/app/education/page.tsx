'use client'

import { motion } from 'framer-motion'
import TextSection from '@/components/common/TextSection'
import { educationData } from '@/utils/constant/Education'

export default function Education() {
  return (
    <div className="xl:px-40 2xl:px-64">
      <TextSection
        icon="🎓"
        text="My Education"
        classNames="mb-10 text-center"
      />
      <div className="flex flex-wrap items-center justify-center gap-5">
        {educationData.map(({ title, issuer }, index: number) => (
          <motion.div
            key={index}
            whileInView={{ scale: 1 }}
            initial={{ scale: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="flex h-40 w-full max-w-[288px] flex-col justify-between rounded-xl border-2 border-black-primary bg-white p-4 shadow-button-card xl:w-72"
          >
            <div className="flex flex-col">
              <h1 className="text-xl font-bold text-black-primary">{title}</h1>
            </div>
            <p className="mt-auto text-gray-700">{issuer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
