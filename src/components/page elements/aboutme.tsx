'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Aboutme() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Animação GSAP para fazer os elementos surgirem de forma suave com ScrollTrigger
    gsap.fromTo(
      ".about-me-image",
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-me-image",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".about-me-text",
      { opacity: 0, x: -200 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-me-text",
          start: "top 80%",
        },
      }
    );

    gsap.fromTo(
      ".about-me-video",
      { opacity: 0, x: 200 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".about-me-video",
          start: "top 80%",
        },
      }
    );

    // Iniciar o vídeo quando estiver visível
    if (videoRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              videoRef.current?.play();
            } else {
              videoRef.current?.pause();
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(videoRef.current);

      return () => {
        if (videoRef.current) {
          observer.unobserve(videoRef.current);
        }
      };
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      
      {/* Lado esquerdo: Foto e Texto */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center p-4 space-y-8">
        <div className="about-me-image w-64 h-64 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/images/eu.jpeg"
            alt="Minha foto"
            width={540}
            height={540}
            className="object-cover"
          />
        </div>

        <div className="about-me-text max-w-xl text-center">
          <h2 className="text-3xl font-bold mb-4">Olá! sou Jonas Fortes</h2>
          <p className="text-lg leading-relaxed">
            Tudo que há sob o sol é temporário, mas o que é feito pelo amor dura para sempre.
          </p>
        </div>
      </div>

      {/* Lado direito: Vídeo */}
      <div className="lg:w-1/2 flex items-center justify-center py-4">
        <div className="about-me-video w-full h-full max-w-2xl aspect-video rounded-lg overflow-hidden shadow-lg">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            aria-label="Vídeo de apresentação"
          >
            <source src="/videos/presentation.mp4" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      </div>
    </div>
  );
}