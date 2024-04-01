import { CardInfoProfesionTeam } from "./CardInfoProfesionTeam"
import { CardProfesionTeam } from "./CardProfesionTeam"
import { Section } from "./Section"
import { Title } from "./Title"

const profesionales = [
  {
    nivel: "Inmobiliaria",
    specialty: "Inmobiliaria en la actualidad",
    profesion: "Inmobiliaria",
    name: "Cristian Camacho",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    nivel: "Inmobiliaria",
    specialty: "Inmobiliaria en la actualidad",
    profesion: "Inmobiliaria",
    name: "Cristian Camacho",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    nivel: "Inmobiliaria",
    specialty: "Inmobiliaria en la actualidad",
    profesion: "Inmobiliaria",
    name: "Cristian Camacho",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  }
]
export const Team = () => {
  return (
    <>
      <Section>
        <div className="flex flex-col w-full h-full ">
          <Title title="Nuestro" subtitle="Equipo" />
          <div className="flex w-full justify-center flex-wrap mt-10">
            <div className="w-1/3 h-96 rounded-2xl flex flex-col justify-between">
              {
                profesionales.map((item, index) => <CardProfesionTeam key={index} {...item} />)
              }
            </div>
            <div className="w-1/3 h-96 rounded-2xl flex flex-col items-center gap-4">
              <h2 className="text-base font-bold first-letter:capitalize text-teal-600">Contamos con los mejores <br />
                profesionales</h2>
              <img src={profesionales[0].image} className="h-full w-60 rounded-2xl" />
            </div>
            <div className="w-1/3 h-96 rounded-2xl flex flex-col justify-end">
              <CardInfoProfesionTeam {...profesionales[0]}/>
            </div>
          </div>
        </div>
      </Section>
    </>
  )

}

