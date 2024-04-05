import { Brand } from "./Brand"
import { SubscribeForm } from "./SubscribeForm"

export const Footer = () => {

  return (
    <footer className="w-full h-auto">
      <div className="flex flex-col gap-10 h-full items-center justify-center py-10 px-52 bg-lime-300 w-full">
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
            <SubscribeForm/>
          </div>
        </div>
        <div className="w-full flex gap-5">
          <div className="flex flex-col gap-4 w-1/5">
            <h2 className="text-xl capitalize text-teal-600 font-bold">Colaborar</h2>
            <div className="flex flex-col gap-2">
              <a className="text-base text-zinc-900">¿Cómo colaborar?</a>
              <a className="text-base text-zinc-900">Colabora con nosotros</a>
              <a className="text-base text-zinc-900">Prosmeter</a>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/5">
            <h2 className="text-xl capitalize text-teal-600 font-bold">Proyectos</h2>
            <div className="flex flex-col gap-2">
              <a className="text-base text-zinc-900">¿Cómo comprar?</a>
              <a className="text-base text-zinc-900">Conocer Proyectos</a>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/5">
            <h2 className="text-xl capitalize text-teal-600 font-bold">Recursos</h2>
            <div className="flex flex-col gap-2">
              <a className="text-base text-zinc-900">Blog</a>
              <a className="text-base text-zinc-900">Inversionistas</a>
              <a className="text-base text-zinc-900">Agentes Inmoviliarios</a>
              <a className="text-base text-zinc-900">Ingreso o registro</a>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/5">
            <h2 className="text-xl capitalize text-teal-600 font-bold">Sobre Nosotros</h2>
            <div className="flex flex-col gap-2">
              <a className="text-base text-zinc-900">La empresa</a>
              <a className="text-base text-zinc-900">Centro de ayuda</a>
              <a className="text-base text-zinc-900">Nuestro equipo</a>
              <a className="text-base text-zinc-900">Trabaja con nosotros</a>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/5">
            <h2 className="text-xl capitalize text-teal-600 font-bold">Soporte</h2>
            <div className="flex flex-col gap-2">
              <a className="text-base text-zinc-900">Dudas o comentarios</a>
              <a className="text-base text-zinc-900">Correo</a>
              <a className="text-base text-zinc-900">Whatsapp</a>
            </div>
          </div>
        </div>
        <div className="w-full flex">
          <Brand />
        </div>
      </div>
    </footer>
  )
}


