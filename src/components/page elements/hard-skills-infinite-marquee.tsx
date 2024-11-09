'use client'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'

// Defina a interface para as habilidades
interface Skill {
  name: string
  logo: string
}

// Componente principal
export function HardSkillsInfiniteMarquee({ skills }: { skills: Skill[] }) {
  return (
    <div className="w-full py-4 overflow-hidden bg-gray-400">
      <Marquee gradient={false} speed={50}>
        <div className="flex gap-8 md:gap-16 lg:gap-32 mx-16 items-center justify-center">
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-16 h-16 relative">
                <Image
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <span className="mt-2 text-sm font-medium text-gray-600">{skill.name}</span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  )
}