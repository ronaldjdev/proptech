import { Section } from "../Section"
import { Title } from "../Title"
import { CardTestimonial } from "../cards/CardTestimonial"
import { profesionales } from "../../libs/profesionales"

export const Testimonial = () => {
  return (
    <Section id="testimonials">
      <Title title="Estandares excepcionalmente alto en" subtitle="Construcción" />
      <div className="w-full flex gap-4 mt-10 overflow-x-auto overflow-hidden ">
        {profesionales.map((item, index) => <CardTestimonial key={index} {...item} />)}
      </div>
    </Section>
  )
}