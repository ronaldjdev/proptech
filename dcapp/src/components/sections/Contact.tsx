import { Form } from "../Form"
import { Section } from "../Section"

export const Contact = () => {
  return (
    <Section id="contact">
      <div className="flex flex-col rounded-2xl overflow-hidden w-full">
        <div className="w-full h-96 overflow-hidden">
          <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className="bg-zinc-800 w-full h-60 p-10 flex flex-col gap-10 justify-start">
          <h1 className="text-6xl text-white">Colabora con nosotros</h1>
          <Form />
        </div>
      </div>
    </Section>
  )
}