'use client';
import Marquee from "react-fast-marquee";
import Image from 'next/image';

export default function HardSkillsInfiniteMarquee() {
  const logos = [
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg',
    'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg',
  ];

  return (
    <div className="flex flex-col">
      <div className="flex h-auto w-full py-8">
      <Marquee 
        gradient={false} 
        speed={50}
        pauseOnHover={true}
      >
        {logos.map((logo, index) => (
          <div key={index} className="mx-2 h-auto">
            <Image 
              src={logo}
              alt="Company logo"
              width={130}
              height={60}
              className="object-contain h-16 grayscale hover:grayscale-0 transition-all"
            />
          </div>
        ))}
      </Marquee>
    </div>
    </div>
    
  );
}
