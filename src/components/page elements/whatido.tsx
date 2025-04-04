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
              <p className="text-tiny text-white/70 uppercase font-bold">
              Desenvolvimento de</p>
              <h4 className="text-white font-medium text-xl 
              ">Sistemas eficientes para o seu negócio</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              // filter brightness-50
              src="/images/back-end-card.png"
            />
            <div className="absolute inset-0 bg-orange-700/60"></div>
            
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
                <p className="text-white text-tiny">Arquitetura robusta para aplicações escaláveis.</p>
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
              <p className="text-tiny text-white/70 uppercase font-bold">
              Desenvolvimento de</p>
              <h4 className="text-white font-medium text-xl 
              ">Interfaces modernas e intuitivas.</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="/images/front-end-card.jpg"
            />
            <div className="absolute inset-0 bg-orange-700/60"></div>
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
              <p className="text-white text-tiny">Sua marca com uma cara profissional online.</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Veja Mais
              </Button>
            </CardFooter>
          </Card>
          

          {/* Criação e Arquitetura de sistemas de IA */}
          <Card
            isFooterBlurred
            className="w-full h-[250px] col-span-1"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/70 uppercase font-bold">
              Criação e Arquitetura de</p>
              <h4 className="text-white font-medium text-xl ">
                IA´s aplicadas para resolver desafios reais</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="/images/IA-card.jpg"
            />
            <div className="absolute inset-0 bg-orange-700/60"></div>
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
              <p className="text-white text-tiny">Inteligência artificial a favor do seu negócio.</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Veja Mais
              </Button>
            </CardFooter>
          </Card>


             {/* Sistemas Embarcados */}
             <Card
            isFooterBlurred
            className="w-full h-[250px] col-span-1"
          >
            <CardHeader className="absolute z-10 top-1 flex-col items-start">
              <p className="text-tiny text-white/70 uppercase font-bold">
              Implementação de</p>
              <h4 className="text-white font-medium text-xl 
              ">Robôs digitais que trabalham por você</h4>
            </CardHeader>
            <Image
              removeWrapper
              alt="Card example background"
              className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
              src="/images/rpa-card.jpg"
            />
            <div className="absolute inset-0 bg-orange-700/60"></div>
            <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
              <div>
              <p className="text-white text-tiny">Transforme tarefas manuais em fluxos inteligentes.</p>
              </div>
              <Button
                className="text-tiny"
                color="primary"
                radius="full"
                size="sm"
              >
                Veja Mais
              </Button>
            </CardFooter>
          </Card>


        </div>
    </section>
  );
}
