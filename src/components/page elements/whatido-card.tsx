import { Card, CardHeader, CardFooter, Button } from "@heroui/react";
import Image from "next/image";

interface WhatIDoCardProps {
  firstTitle: string;
  secondTitle: string;
  subtitle: string;
  imageSrc: string;
}

export default function WhatIDoCard(props: WhatIDoCardProps) {
  return (
    <Card
      isFooterBlurred
      className="w-full h-[250px] col-span-1 relative 
                       transition-all duration-300 ease-in-out 
                       hover:-translate-y-2 hover:shadow-xl
                      hover:shadow-blue-500/20
                      group"
    >
      <CardHeader className="absolute z-10 top-1 flex-col items-start">
        <p className="text-tiny text-white/70 uppercase font-bold">
          {props.firstTitle}
        </p>
        <h4
          className="text-white font-medium text-xl 
              "
        >
          {props.secondTitle}
        </h4>
      </CardHeader>
      <Image
        src={props.imageSrc}
          alt="Card background"
          fill
          className="object-cover scale-125 -translate-y-6"
          priority={true}
      />
      <div className="absolute inset-0 h-2/4 bg-gradient-to-b from-gray-500 to-transparent"></div>

      <CardFooter
        className="absolute
             bg-white/30 bottom-0 border-t-1
              border-zinc-100/50 z-10 justify-between"
      >
        <div>
          <p className="text-white  text-tiny w-3/4">{props.subtitle}</p>
        </div>
        <Button
          className="text-tiny px-4 lg:px-4 md:px-4 sm:px-4
              hidden"
          color="primary"
          radius="full"
          size="sm"
        >
          Veja mais
        </Button>
      </CardFooter>
    </Card>
  );
}
