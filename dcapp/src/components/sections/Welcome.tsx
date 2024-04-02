import { Button } from "../Button"
import { Section } from "../Section"
import { Title } from "../Title"
import Image from "next/image"
import success from "@/assets/gifs/success.gif"
import img6 from "@/assets/img/img6.png"
import img3 from "@/assets/img/img3.png"
import img4 from "@/assets/img/img4.png"

export const Welcome = () => {
  return (
    <>
      <Section id="projects">
        <div className="flex">
          <div className="flex flex-col w-full">
            <Title title="Bienvenidos a" subtitle="Prospekt" />
            <div className="flex gap-4 my-10">
              <Image src={img3} alt="edificio" className="w-52 h-52 rounded-2xl" />
              <Image src={img6} alt="edificio" className="w-52 h-52 rounded-2xl" />
            </div>
            <p className="text-base text-zinc-900 mb-10">
              <strong>Prospekt</strong> ofrece una forma innovadora y colaborativa de aprovechar
              el potencial de los terrenos vacíos, beneficiando a propietarios,
              inversores y comunidades por igual.
              <br />
              <br />

              ¡Únete a nosotros para transformar terrenos en oportunidades!
            </p>
            <Button white text="Unirse" icon="👋" />
          </div>
          <div className="flex gap-4 w-full justify-end">
            <div className="w-52 h-40 mt-10 bg-lime-300 rounded-2xl px-3 py-6 flex gap-4">
              <Image src={success} alt="success" className="w-14 h-14 bg-gray-300 remove-bg" />
              <h2 className="w-1/2 text-xl text-teal-600">
                <span className="text-6xl">10K</span>
                <br />
                Propietarios felices
              </h2>
            </div>
            <Image src={img4} alt="edificio" className="w-1/2 h-full bg-lime-300 rounded-2xl object-cover"/>
          </div>
        </div>
      </Section>
    </>
  )
}