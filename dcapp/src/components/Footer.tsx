import { linksData } from "@/libs/profesionales";
import { Brand } from "./Brand"
import { FooterLinks } from "./FooterLinks";
import { SubscribeForm } from "./SubscribeForm"

export const Footer = () => {

  return (
    <footer className="w-full h-auto bg-lime-300 flex items-center justify-center ">
      <div className="flex flex-col gap-10 h-full items-center max-w-[1970px] justify-center py-10 px-3 md:px-32 bg-lime-300 w-full">
        <div className="flex md:flex-row flex-col gap-4 w-full h-auto md:justify-between ">
          <div className="w-full md:w-1/2 flex flex-col justify-center gap-5">
            <div className="w-full flex">
              <Brand />
            </div>
            <p className="text-base whitespace-pre-wrap text-zinc-900">!Únete a nosotros para transformar terrenos en
              oportunidades!
            </p>
          </div>
          <div className="w-full md:w-1/2 flex flex-col  items-end">
            <div className="w-fit">
              <label className="text-base text-teal-600 font-bold my-8" htmlFor="email">Newsletter</label>
              <SubscribeForm />
            </div>
          </div>
        </div>
        <div className="w-full flex gap-5 flex-wrap md:flex-nowrap">

          {linksData.map((section, index) => (
            <FooterLinks key={index} {...section} />
          ))}
        </div>
        <div className="w-full flex flex-col md:flex-row items-center border-b border-zinc-500 p-4">
          <Brand />
          <h2 className="text-base font-medium text-zinc-900 ">®2024  Todos los derechos reservados.</h2>
        </div>
        <div className="w-full flex items-center">
          <p className="text-sm font-light text-justify text-zinc-900 ">El uso de este sitio implica la aceptación de nuestras Políticas y Términos, Aviso de Privacidad y Política de Datos. Queda prohibida la reproducción total o parcial de este contenido, así como su traducción a cualquier idioma, sin la autorización escrita del titular.
            <br />
            <br />
            <strong>*El tiempo estipulado varía según el proceso necesario para la propiedad.</strong>
          </p>
        </div>
      </div>
    </footer>
  )
}


