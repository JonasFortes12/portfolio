"use client"; // Para garantir que o GSAP rode no lado do cliente

import Cover from "@/components/page elements/cover";
import Aboutme from "@/components/page elements/aboutme";
// import { useEffect } from "react";
import WhatIDo from "@/components/page elements/whatido";
import Works from "@/components/page elements/works";
import Contacts from "@/components/page elements/contacts";
import Footer from "@/components/page elements/footer";

export default function Home() {

  return (
    <div className="main-container">

      <div id="cover" className="section h-screen w-full flex justify-center items-center">
        <Cover />
      </div>

      <div id="aboutme" className="section py-8 md:py-10 lg:py-12  w-full flex-col justify-center items-center">
        <Aboutme />
      </div>

      <div id="skills" className="section py-8 md:py-10 lg:py-12 w-full flex-col justify-center items-center">
        <WhatIDo />
      </div>

      <div id="works" className="section py-8 md:py-10 lg:py-12 w-full flex-col justify-center items-center">
        <Works />
      </div>

      <div id="contacts" className="section py-8 md:py-10 lg:py-12 w-full flex-col justify-center items-center">
        <Contacts />
      </div>

      <Footer />


    </div>
  );
}