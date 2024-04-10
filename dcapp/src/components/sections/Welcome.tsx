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
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col w-full">
            <Title title="Bienvenidos a" subtitle="Prospekt" />
            <div className="flex gap-4 my-10 items-end">
              <Image src={img3} alt="edificio" width={0} height={0} className="w-52 h-52 rounded-2xl" />
              <Image src={img6} alt="edificio" width={0} height={0} className="w-52 h-52 rounded-2xl" />
              <h2 className="capitalize text-base">Proyecto:
                <br />
                <span className="text-3xl text-teal-600 font-bold">avento</span>

              </h2>
            </div>
            <p className="text-base text-zinc-900 mb-10 text-justify ">
              <strong>Prospekt</strong> ofrece una forma innovadora y colaborativa de aprovechar
              el potencial de los terrenos vacíos, beneficiando a propietarios,
              inversores y comunidades por igual.
              <br />
              <br />

              ¡Únete a nosotros para transformar terrenos en oportunidades!
            </p>
            <Button dark text="Unirse" icon="👋" size="w-full md:w-fit" />
          </div>
          <div className="flex flex-col md:flex-row gap-4 w-full justify-end">
            <div className="w-full md:w-52 h-40 mt-10 bg-lime-300 rounded-2xl px-3 py-6 flex gap-4">
              <Image
                className="w-14 h-14 bg-gray-300 remove-bg"
                src={success}
                alt="success"
                width={0}
                height={0}
                unoptimized
              />
              <h2 className="md:w-1/2 text-xl text-teal-600">
                <span className="text-6xl">10K</span>
                <br />
                Propietarios felices
              </h2>
            </div>
            <Image src={img4} alt="edificio" width={0} height={0} className="w-full md:w-1/2 h-full bg-lime-300 rounded-2xl object-cover" />
          </div>
        </div>
      </Section>
    </>
  )
}