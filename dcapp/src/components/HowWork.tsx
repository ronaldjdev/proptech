import { CardHowWork } from "./CardHowWork"
import { Section } from "./Section"
import { Title } from "./Title"

const itemsHowWork = [
  {
    icon: "🧭",
    title: "Registra tu Terreno",
    subtitle: "¡Haz que tu terreno cuente! Regístralo en nuestra plataforma y comienza a explorar las oportunidades."
  },
  {
    icon: "📦",
    title: "Explotar Potencial",
    subtitle: "Descubrimos proyectos inmobiliarios emocionantes que se ajusten a las características de tu terreno."
  },
  {
    icon: "🧭",
    title: "Invierte con Nosotros",
    subtitle: "Participa en proyectos inmobiliarios sin la necesidad de involucrarte en el proceso de diseño y desarrollo."
  },
  {
    icon: "📦",
    title: "Ganancias Garantizadas",
    subtitle: "Obtén una parte justa de las ganancias una vez que el proyecto esté en marcha, sin preocuparte por los detalles técnicos."
  },
  {
    icon: "🧭",
    title: "Sigue el Progreso",
    subtitle: "Mantente al tanto del progreso del proyecto y recibe actualizaciones regulares sobre tus inversiones"
  },
  {
    icon: "📦",
    title: "Únete a Nuestra Comunidad",
    subtitle: "Participa en nuestra comunidad de inversores y comparte ideas con otros miembros."
  }
]
export const HowWork = () => {
  return (
    <>
      <Section>
        <div className="flex flex-col w-full h-full ">
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
        </div>
      </Section>
    </>
  )
}