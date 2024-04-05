import { linksData } from "@/libs/profesionales";
import { Brand } from "./Brand"
import { FooterLinks } from "./FooterLinks";
import { SubscribeForm } from "./SubscribeForm"

export const Footer = () => {

  return (
    <footer className="w-full h-auto">
      <div className="flex flex-col gap-10 h-full items-center justify-center py-10 px-32 bg-lime-300 w-full">
        <div className="flex w-full justify-between ">
          <div className="w-1/2 flex flex-col justify-center gap-5">
            <div className="w-full flex">
              <Brand />
            </div>
            <p className="text-base whitespace-pre-wrap text-zinc-900">!Únete a nosotros para transformar terrenos en
              oportunidades!
            </p>
          </div>
          <div className="w-1/2">
            <label className="text-base text-teal-600 font-bold my-8" htmlFor="email">Newsletter</label>
            <SubscribeForm />
          </div>
        </div>
        <div className="w-full flex gap-5">

        {linksData.map((section, index) => (
          <FooterLinks key={index} {...section} />
        ))}
        </div>
        <div className="w-full flex items-center border-b border-zinc-500 p-4">
          <Brand />
          <h2 className="text-base font-medium text-zinc-900 ">®2024  Todos los derechos reservados.</h2>
        </div>
        <div className="w-full flex items-center">
          <p className="text-sm font-light text-zinc-900 ">Usar este sitio implica que aceptas nuestras Políticas y Términos, Aviso de privacidad y Política de datos. Prohibida su reproducción total o parcial, así como su traducción a cualquier idioma sin autorización escrita de su titular. </p>
        </div>
      </div>
    </footer>
  )
}


