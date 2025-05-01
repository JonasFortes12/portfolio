import SectionTitle from "@/components/page elements/section-title";
import { Card, CardHeader, CardBody, Image, Button } from "@heroui/react";

export default function Works() {
  

  return (
    <section className="w-full bg-background">
      <SectionTitle title="Projetos desenvolvidos" />
      <div
        className="grid
        grid-cols-1 gap-y-4 px-0
        lg:grid-cols-3 lg:gap-8 lg:px-12
        md:grid-cols-2 md:gap-6 md:px-6
        sm:grid-cols-1 sm:gap-y-5 sm:px-4
        "
      >
        <Card className="py-4 flex-auto">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Frontend Radio</h4>
            <small className="text-default-500">12 Tracks</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex-col items-center gap-3">
            <Image
              alt="Card background"
              className="object-cover rounded-xl w-full"
              src="https://heroui.com/images/hero-card-complete.jpeg"
            />
            <Button
                className="text-tiny w-2/3"
                color="primary"
                radius="full"
                size="sm"
              >
                Acesse
            </Button>
          </CardBody>
        </Card>

        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Frontend Radio</h4>
            <small className="text-default-500">12 Tracks</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex-col items-center gap-3">
            <Image
              alt="Card background"
              className="object-cover rounded-xl w-full"
              src="https://heroui.com/images/hero-card-complete.jpeg"
            />
            <Button
                className="text-tiny w-2/3"
                color="primary"
                radius="full"
                size="sm"
              >
                Acesse
            </Button>
          </CardBody>
        </Card>

        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h4 className="font-bold text-large">Frontend Radio</h4>
            <small className="text-default-500">12 Tracks</small>
          </CardHeader>
          <CardBody className="overflow-visible py-2 flex-col items-center gap-3">
            <Image
              alt="Card background"
              className="object-cover rounded-xl w-full"
              src="https://heroui.com/images/hero-card-complete.jpeg"
            />
            <Button
                className="text-tiny w-2/3"
                color="primary"
                radius="full"
                size="sm"
              >
                Acesse
            </Button>
          </CardBody>
        </Card>
    
      </div>
    </section>
  );
}
