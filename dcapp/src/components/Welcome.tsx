import { Button } from "./Button"

import { Section } from "./Section"
import { Title } from "./Title"
export const Welcome = () => {
  return (
    <>
      <Section>
        <div className="flex flex-col w-full">
          <Title title="Bienvenidos a" subtitle="Prospekt"/>
          <div className="flex gap-4 my-10">
            <div className="w-52 h-52 bg-lime-300 rounded-2xl"></div>
            <div className="w-52 h-52 bg-lime-300 rounded-2xl"></div>
          </div>
          <p className="text-base text-zinc-900 mb-10">
            <strong>Prospekt</strong> ofrece una forma innovadora y colaborativa de aprovechar
            el potencial de los terrenos vacíos, beneficiando a propietarios,
            inversores y comunidades por igual.
            <br />
            <br />
            <br />

            ¡Únete a nosotros para transformar terrenos en oportunidades!
          </p>
          <Button white text="Unirse" icon="👋" />
        </div>
        <div className="flex gap-4 w-full justify-end">
          <div className="w-52 h-40 mt-10 bg-lime-300 rounded-2xl px-3 py-6 flex gap-4">
            <div className="w-14 h-14 bg-gray-300"></div>
            <h2 className="w-1/2 text-xl">
              <span className="text-6xl">10K</span>
              <br />
              Propietarios felices
            </h2>
          </div>
          <div className="w-1/2 h-full bg-lime-300 rounded-2xl"></div>
        </div>
      </Section>
    </>
  )
}