import { Card, CardHeader, CardFooter, Image, Button } from "@heroui/react";

interface WorksCardsProps {
    firstTitle: string;
    secondTitle: string;
    subtitle: string;
    imageSrc: string;
}

export default function WorkCard(props: WorksCardsProps) {

    return (

        <Card isFooterBlurred className="w-full h-[250px] col-span-1 ">
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
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
            // filter brightness-50
            src={props.imageSrc}
          />
          <div className="absolute inset-0 h-2/4 bg-gradient-to-b from-gray-500 to-transparent"></div>
          

          <CardFooter
            className="absolute
             bg-white/30 bottom-0 border-t-1
              border-zinc-100/50 z-10 justify-between"
          >
            <div>
              <p className="text-white  text-tiny w-3/4">
                {props.subtitle}
              </p>
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

    )
}