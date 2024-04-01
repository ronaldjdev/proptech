import { Brand } from "./Brand"
import { Button } from "./Button"

export const Footer = () => {
  let inputStyle = "focus:outline-none rounded-full bg-transparent text-center text-zinc-900  placeholder:text-center placeholder:text-zinc-900 placeholder:text-opacity-50 w-64"

  return (
    <footer className="w-full ">
      <div className="flex flex-col gap-10 h-full items-center justify-center p-10 bg-lime-300 w-full">
        <div className="flex w-full">
          <div className="w-1/2">
            <Brand />
            <p className="text-base whitespace-pre-wrap">!Únete a nosotros para transformar terrenos en
              oportunidades!
            </p>
          </div>
          <div className="w-1/2">
            <label className="text-base text-teal-600" htmlFor="email">Newsletter</label>
            <form className="flex w-fit p-1 rounded-full gap-4 bg-white" action="">
              <input type="email" placeholder="Ingresar correo electronico" className={inputStyle} />
              <Button dark text="Suscribirme" icon="👋" size="w-52 hover:border-zinc-900" />
            </form>
          </div>
        </div>
        <div className="w-full flex gap-5">
          <div className="flex flex-col gap-4 w-1/5">
            <h2 className="text-xl capitalize text-teal-600 font-bold">Colaborar</h2>
            <div className="flex flex-col gap-2">
              <a className="text-base">¿Cómo colaborar?</a>
              <a className="text-base">Colabora con nosotros</a>
              <a className="text-base">Prosmeter</a>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/5">
            <h2 className="text-xl capitalize text-teal-600 font-bold">Proyectos</h2>
            <div className="flex flex-col gap-2">
              <a className="text-base">¿Cómo comprar?</a>
              <a className="text-base">Conocer Proyectos</a>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/5">
            <h2 className="text-xl capitalize text-teal-600 font-bold">Recursos</h2>
            <div className="flex flex-col gap-2">
              <a className="text-base">Blog</a>
              <a className="text-base">Inversionistas</a>
              <a className="text-base">Agentes Inmoviliarios</a>
              <a className="text-base">Ingreso o registro</a>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/5">
            <h2 className="text-xl capitalize text-teal-600 font-bold">Sobre Nosotros</h2>
            <div className="flex flex-col gap-2">
              <a className="text-base">La empresa</a>
              <a className="text-base">Centro de ayuda</a>
              <a className="text-base">Nuestro equipo</a>
              <a className="text-base">Trabaja con nosotros</a>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-1/5">
            <h2 className="text-xl capitalize text-teal-600 font-bold">Soporte</h2>
            <div className="flex flex-col gap-2">
              <a className="text-base">Dudas o comentarios</a>
              <a className="text-base">Correo</a>
              <a className="text-base">Whatsapp</a>
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