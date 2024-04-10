import { Form } from "../Form"
import { Section } from "../Section"
import Image from "next/image"
import img7 from "@/assets/img/img7.png"

export const Contact = () => {
  return (
    <Section id="contact">
      <div className="flex flex-col rounded-2xl overflow-hidden w-full h-full">
        <div className="w-full h-96 overflow-hidden">
          <Image className="w-full h-full object-cover" src={img7} alt="" width={0} height={0} />
        </div>
        <div className="bg-zinc-800 w-full h-full md:h-60 p-10 flex flex-col gap-10 justify-start">
          <h1 className="text-6xl text-white">Colabora con nosotros</h1>
          <Form />
        </div>
      </div>
    </Section>
  )
}