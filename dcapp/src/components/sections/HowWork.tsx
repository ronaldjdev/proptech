import { itemsHowWork } from "@/libs/profesionales"
import { CardHowWork } from "../cards/CardHowWork"
import { Section } from "../Section"
import { Title } from "../Title"


export const HowWork = () => {
  return (
    <>
      <Section id="how_it_work">
        <Title title="¿Cómo funciona?" subtitle="Prospekt" />
        <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {
            itemsHowWork.map((item: any, index: number) => (
              <div key={index} className=" flex items-center justify-center bg-lime-300 w-full h-auto md:h-48 gap-4 p-4 rounded-2xl">
                  <CardHowWork
                    icon={item.icon}
                    title={item.title}
                    content={item.subtitle}
                  />
              </div>
            ))
          }
        </div>
      </Section>
    </>
  )
}