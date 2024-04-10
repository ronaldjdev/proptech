'use client'

import { CardInfoProfesionTeam } from "../cards/CardInfoProfesionTeam"
import { CardProfesionTeam } from "../cards/CardProfesionTeam"
import { Section } from "../Section"
import { Title } from "../Title"
import { profesionales } from "../../libs/profesionales"
import Image from "next/image"
import { useEffect, useState } from "react"

export const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (hoveredIndex !== null) {
      setIsTransitioning(true);
      const transitionTimeout = setTimeout(() => {
        setIsTransitioning(false);
      }, 300); // Duración de la transición en milisegundos (por ejemplo, 1000 ms = 1 segundo)
      return () => clearTimeout(transitionTimeout);
    }
  }, [hoveredIndex]);
  return (
    <>
      <Section id="team">
        <Title title="Nuestro" subtitle="Equipo" />
        <div className="flex flex-col md:flex-row w-full justify-center flex-wrap mt-10 gap-4 md:gap-0">
          <div className="order-3 md:order-1 w-full md:w-1/3 h-96 rounded-2xl gap-4 flex flex-col md:justify-between">
            {
              profesionales.map((item, index) => <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(index)}
                onClick={() => setHoveredIndex(index)}
                className="cursor-pointer"
              >
                <CardProfesionTeam selected={hoveredIndex === index} {...item} />
              </div>
              )
            }
          </div>
          <div className="order-1 md:order-2 w-full md:w-1/3 h-96 rounded-2xl flex flex-col items-center gap-4">
            <h2 className="text-base font-bold first-letter:capitalize text-teal-600">Contamos con los mejores <br />
              profesionales</h2>
            <div className={`w-60 h-[480px] overflow-hidden transition-opacity duration-300 ${isTransitioning ? 'opacity-30' : 'opacity-100'}`}>
              <Image src={profesionales[hoveredIndex]?.image} alt="profesional" width={1270} height={750} className={`w-full h-full rounded-2xl object-cover ${isTransitioning ? 'opacity-30' : 'opacity-100'}`} />
            </div>
          </div>
          <div className={`order-2 md:order-3 w-full md:w-1/3 md:h-96 rounded-2xl flex flex-col md:justify-end transition-opacity duration-300 ${isTransitioning ? 'opacity-30' : 'opacity-100'}`}>
            <CardInfoProfesionTeam {...profesionales[hoveredIndex]} />
          </div>
        </div>
      </Section>
    </>
  )
}
