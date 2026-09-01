"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HardSkillsInfiniteMarquee from "./hard-skills-infinite-marquee";

gsap.registerPlugin(ScrollTrigger);

export default function Aboutme() {
  const videoRef = useRef<HTMLVideoElement>(null);

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

    // play the video when it is in view and pause it when out of view
    if (videoRef.current) {
      const videoElement = videoRef.current; // Copy ref to a local variable
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              videoElement.play();
            } else {
              videoElement.pause();
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(videoElement);

      return () => {
        observer.unobserve(videoElement);
      };
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen overflow-hidden">
      {/* Lado esquerdo: Foto e Texto */}
      <div className="lg:w-1/2 flex flex-col items-center justify-center py-4 space-y-8">
        <div className="about-me-image w-64 h-64 rounded-full overflow-hidden shadow-lg">
          <Image
            src="/images/minha-foto.webp"
            alt="Minha foto"
            width={540}
            height={540}
            className="object-cover translate-x-4 scale-[1.8] origin-center"
            priority={true}
          />
        </div>

        <div className="about-me-text max-w-xl text-center mx-4">
          <h2 className="text-3xl font-bold mb-4">Olá! sou Jonas Fortes</h2>
          <p className="text-lg leading-relaxed">
            Engenheiro da Computação pela UFC, vivo fascinado por tecnologia —
            do silício ao software mais avançado. Além do código, me encanta
            conectar inovação a negócios, criando soluções que geram valor real.
            Guiado pela fé em Deus e pela convicção de que a melhor tecnologia é
            aquela que melhora vidas. Foco em resultados, mas nunca sem
            propósito.
          </p>
        </div>

        <HardSkillsInfiniteMarquee />
      </div>

      {/* Lado direito: Vídeo */}
      <div className="lg:w-1/2 flex items-center justify-center py-4">
        <div className="about-me-video w-full h-full aspect-video rounded-lg overflow-hidden shadow-md">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            aria-label="Vídeo de apresentação"
            preload="auto"
          >
            <source src="/videos/aboutmevideo.webm" type="video/webm" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
      </div>
    </div>
  );
}
