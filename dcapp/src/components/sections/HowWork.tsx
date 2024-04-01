import { itemsHowWork } from "@/libs/profesionales"
import { CardHowWork } from "../cards/CardHowWork"
import { Section } from "../Section"
import { Title } from "../Title"

export const HowWork = () => {
  return (
    <>
      <Section>
        <Title title="¿Cómo funciona?" subtitle="Prospekt" />
        <div className="flex w-full justify-center gap-4 flex-wrap mt-10">
          {
            itemsHowWork.map((item, index) => (
              <div className="w-[590px]">
                <div className="flex items-center justify-center bg-lime-300 w-full h-48 gap-4 p-4 rounded-2xl">
                  <CardHowWork
                    key={index}
                    icon={item.icon}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
                </div>
              </div>
            ))
          }
        </div>
      </Section>
    </>
  )
}