'use client'

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';


interface SectionTitleProps {
  title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
    
     // Referências para as duas linhas
  const lineRef = useRef<HTMLDivElement>(null);

  // Efeito GSAP para as linhas
  useEffect(() => {
    // Animação das duas linhas
    gsap.fromTo(
      lineRef.current,
      {width: '100%'},
      {width: '30%', duration: 4, repeat: -1, yoyo: true, ease:'power3.inOut' }
    );
  }, []);

    return (
        <div className="title-container text-center pb-10">
            <h2 className="relative inline-block text-4xl font-semibold pb-1">
                <div className="mb-2">{title}</div>
                {/*Linha animada */}
                <div
                    ref={lineRef}
                    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 rounded-md bg-gradient-to-r from-yellow-400 to-red-600"
                ></div>
            </h2> 
        </div>
    );
}