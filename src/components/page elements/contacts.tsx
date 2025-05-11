import ContactForm from "./contact-form";
import SectionTitle from "./section-title";
import SocialButton from "./social-button";
import { FaLinkedin, FaGithub, FaBehance, FaInstagram } from "react-icons/fa";

export default function Contacts() {
  return (
    <>
      <SectionTitle title="Contatos" />
      <h2 className="text-center text-lg">
        Transforme Sua Ideia em Resultados – Vamos Começar Hoje?
      </h2>

      <div
        className="flex flex-col lg:flex-row md:flex-row
      lg:gap-10 lg:px-12
      md:gap-5 md:px-8
      sm:gap-5 sm:px-6"
      >
        {/* Formulário de Contato */}
        <div
          className="
            lg:w-1/2 md:w-1/2 
            flex flex-col items-center 
            justify-center py-4
            "
        >
          <div className="w-full h-full shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Envie uma mensagem!</h3>
            <ContactForm />
          </div>
        </div>

        {/* Redes Sociais */}
        <div
          className="
            lg:w-1/2 md:w-1/2 
            flex flex-col items-center 
            justify-center py-4"
        >
          <div className="w-full shadow-md p-6 rounded-lg h-full flex flex-col items-center gap-y-6">
            <h3 className="text-2xl font-bold self-start">
              Acesse minhas redes:
            </h3>

            <div className="flex flex-col gap-y-4 w-full items-center justify-center mt-8">
              <SocialButton
                icon={<FaLinkedin className="!h-6 !w-6" />}
                color="linkedin"
                text="LinkedIn"
                href="https://www.linkedin.com/in/jonas-fortes-2138731a3/"
              />

              <SocialButton
                icon={<FaGithub className="!h-6 !w-6" />}
                color="github"
                text="Github"
                href="https://github.com/JonasFortes12"
              />

              <SocialButton
                icon={<FaBehance className="!h-6 !w-6" />}
                color="behance"
                text="Behance"
                href="https://www.behance.net/jonasfortes"
              />

              <SocialButton
                icon={<FaInstagram className="!h-6 !w-6" />}
                color="instagram"
                text="Instagram"
                href=""
                disabled={true}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
