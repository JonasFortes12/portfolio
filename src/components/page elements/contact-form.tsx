"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FaWhatsapp } from "react-icons/fa";

const formContactSchema = z.object({
  name: z
    .string()
    .min(2, "Preciso de mais letras :)")
    .max(50, "Não tão longo! :/"),

  message: z.string().min(10, "Me conte mais!").max(500, "É suficiente! :)"),
});

export default function ContactForm() {
  // Define your form.
  const form = useForm<z.infer<typeof formContactSchema>>({
    resolver: zodResolver(formContactSchema),
    defaultValues: {
      name: "",
      message: "",
    },
  });

  // Define a submit handler.
  function onSubmit(values: z.infer<typeof formContactSchema>) {
    const formattedMessage = `
      Olá, meu nome é ${values.name} e gostaria de falar sobre isso: 
      ${values.message}`.trim();

    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(formattedMessage);

    const whatsappNumber = "558899889688";

    const whatsappUrl = `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank", "width=800,height=600,left=200,top=200");

    form.reset();
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-y-4 py-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Seu nome" {...field} />
                </FormControl>
                {/* <FormDescription>
                  This is your public display name.
                </FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem</FormLabel>
                <FormControl>
                  <Textarea placeholder="Sua mensagem..." {...field} />
                </FormControl>
                <FormDescription>
                  Me conte mais como posso te ajudar!
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="
             h-auto w-2/5 self-end gap-2 flex flex-wrap
            bg-[#128C7E]  // Verde oficial do WhatsApp
            hover:bg-[#128C7E]
            text-white
            hover:shadow-[0_6px_20px_0_rgba(37,211,102,0.5)]  // Sombra esverdeada
            hover:transform hover:-translate-y-0.5
            items-center justify-center
            py-2 px-4
            rounded-lg
            font-medium 
          "
          >
            <FaWhatsapp className="!h-6 !w-6" /> <p>Enviar</p>
          </Button>
        </form>
      </Form>
    </>
  );
}
