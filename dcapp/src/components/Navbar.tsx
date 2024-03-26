import { Button } from "./Button"
import { Brand } from "./Brand"

const Items = [

  {
    name: "Proyectos",
    path: "/projects"
  },
  {
    name: "Comprar",
    path: "/purchase"
  },
  {
    name: "Acerca",
    path: "/about"
  },
  {
    name: "Prosmeter",
    path: "/prosmeter"
  },
  {
    name: "Invertir",
    path: "/invest"
  }
]
export const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-2 px-4">
      <Brand />
      <div className="flex items-center justify-center gap-12 ">
        {
          Items.map((item) => (
            <a
              className="uppercase font-sans font-grey-500 px-4 rounded-full"
              href={item.path}
              key={item.name}>
              {item.name}
            </a>
          ))
        }
      </div>
      <Button />
    </nav>
  )
}