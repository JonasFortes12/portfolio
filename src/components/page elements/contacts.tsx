import ContactForm from "./contact-form";
import SectionTitle from "./section-title";

export default function Contacts() {
  return (
    <>
      <SectionTitle title="Contatos" />
      <h2 className="text-center text-lg">
        Transforme Sua Ideia em Resultados – Vamos Começar Hoje?
      </h2>

      <div className="flex flex-col lg:flex-row md:flex-row">
        <div
          className="
            lg:w-1/2 md:w-1/2 
            flex flex-col items-center 
            justify-center py-4
            "
        >
            <div className="w-5/6 shadow-md p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Envie uma mensagem!</h3>
              <ContactForm/>
            </div>
            
          
        </div>


        <div className="
        lg:w-1/2 md:w-1/2 flex 
        items-center justify-center 
        py-4 bg-gray-100">


        </div>
      </div>
    </>
  );
}
