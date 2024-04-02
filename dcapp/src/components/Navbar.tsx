import { Button } from "./Button"
import { Brand } from "./Brand"
import { itemsNav } from "@/libs/profesionales"

export const Navbar: React.FC = () => {
  return (
    <nav className="flex items-center justify-between py-2 px-4 sticky z-10 top-0 bg-white">
      <Brand />
      <div className="flex items-center justify-center gap-12 ">
        {
          itemsNav.map((item) => (
            <a
              className="uppercase font-sans font-grey-500 px-4 rounded-full"
              href={item.path}
              key={item.name}>
              {item.name}
            </a>
          ))
        }
      </div>
      <Button dark text="Iniciar sesion" />
    </nav>
  )
}