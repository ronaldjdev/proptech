import { CardInfoProfesionTeam } from "../cards/CardInfoProfesionTeam"
import { CardProfesionTeam } from "../cards/CardProfesionTeam"
import { Section } from "../Section"
import { Title } from "../Title"
import { profesionales } from "../../libs/profesionales"
import Image from "next/image"
import { useState } from "react"

export const Team = () => {
  return (
    <>
      <Section id="team">
        {/*<div className="flex flex-col w-full h-full "> */}
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
            <Image src={profesionales[0].image} alt="profesional" width={1270} height={750} className="h-full w-60 rounded-2xl" />
          </div>
          <div className="w-1/3 h-96 rounded-2xl flex flex-col justify-end">
            <CardInfoProfesionTeam {...profesionales[0]} />
          </div>
        </div>
        {/* </Section></div> */}
      </Section>
    </>
  )

}

