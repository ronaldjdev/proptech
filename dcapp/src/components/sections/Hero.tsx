import img5 from "@/assets/img/img5.png"
import img2 from "@/assets/img/img2.png"
import img1 from "@/assets/img/img1.png"
import Image from "next/image"
import { Button } from "../Button"
import { SubscribeForm } from "../SubscribeForm"
export const Hero = () => {
  return (
    <div className="flex gap-1 bg-zinc-900 w-full h-[700px]  p-1 rounded-2xl font-sans font-grey-500 overflow-hidden">
      <div className="flex flex-col gap-1 w-full h-full rounded-2xl ">

        <div className=" w-full h-2/6 rounded-2xl overflow-hidden relative">
          <div className="bg-black opacity-50 w-full h-full absolute "/>
          <Image src={img1} alt="" width={0} height={0} className="bg-gray-500 w-full h-full rounded-2xl object-cover object-center" />
        </div>

        <div className="flex bg-gray-300 w-full h-4/6 rounded-2xl ">
          <div className="flex flex-col justify-between w-1/2 p-10">
            <p className="text-4xl ">Visualiza el mañana que deseas y comienza a construirlo hoy</p>
            <Button white text="Conocer proyectos" icon="👋" />
          </div>
          <div className="w-1/2 p-1 overflow-hidden">
            <Image src={img2} alt="" width={0} height={0} className="bg-gray-300 w-full h-full object-cover rounded-2xl" />
          </div>
        </div>

      </div>
      <div className=" flex flex-col gap-1 w-full h-full rounded-2xl">
        <div className="bg-gray-500 w-full h-1/2 rounded-2xl">
          <Image src={img5} alt="" width={0} height={0} className="bg-gray-500 w-full h-full rounded-2xl object-cover"/>
        </div>
        <div className="bg-lime-300 w-full h-1/2 rounded-2xl flex items-center">
          <div className="flex flex-col justify-between items-center w-full h-64 p-10">
            <p className="text-4xl ">Una nueva forma de vida. Cambia tu manera de vivir la vida.</p>
            <SubscribeForm size="w-full" />
          </div>
        </div>
      </div>
    </div>
  )
}