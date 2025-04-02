// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";
import SectionTitle from "@/components/page elements/section-title";

export default function WhatIDo() {
  return (
    <section className="w-full bg-background">
      <SectionTitle title="O que eu faço ?" />
      <div className="
      grid grid-cols-1 
      lg:grid-cols-4 md:grid-cols-2 
      gap-5 mx-12 place-content-center">

          {/* Desenvolvimento Back-end */}
          <Card
            isFooterBlurred
            className="w-full h-[250px] col-span-1 "
          >
            
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-sm text-slate-950/60 uppercase font-bold">Desenvolvimento de</p>
              <h4 className="text-black font-medium text-2xl 
              ">Sistemas eficientes para o seu negócio</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              // filter brightness-50
              src="/images/back-end-card.png"
            />
            <div className="absolute inset-0 bg-slate-300/80"></div>
            
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Arquitetura robusta para aplicações escaláveis.</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Veja mais
              </Button>
            </CardFooter>
          
          </Card>
        
          {/* Desenvolvimento Front-end */}
          <Card
            isFooterBlurred
            className="w-full h-[250px] col-span-1"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>
              <h4 className="text-black font-medium text-2xl">Acme camera</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://heroui.com/images/card-example-6.jpeg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Notify Me
              </Button>
            </CardFooter>
          </Card>
          
          {/* Criação e arquitetura de sistemas com IA */}
          <Card
            isFooterBlurred
            className="w-full h-[250px] col-span-1"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>
              <h4 className="text-black font-medium text-2xl">Acme camera</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://heroui.com/images/card-example-6.jpeg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Notify Me
              </Button>
            </CardFooter>
          </Card>
          
          {/* Criação de sistemas embarcados */}
          <Card
            isFooterBlurred
            className="w-full h-[250px] col-span-1"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/60 uppercase font-bold">New</p>
              <h4 className="text-black font-medium text-2xl">Acme camera</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="https://heroui.com/images/card-example-6.jpeg"
            />
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-black text-tiny">Available soon.</p>
                <p className="text-black text-tiny">Get notified.</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Notify Me
              </Button>
            </CardFooter>
          </Card>


        </div>
    </section>
  );
}
