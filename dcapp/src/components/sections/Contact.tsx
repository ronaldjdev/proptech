import { Button } from "../Button"

export const Contact = () => {
  let inputStyle = "rounded-full bg-transparent border text-center text-white  border-white placeholder:text-center placeholder:text-white placeholder:text-opacity-50 w-64"
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden w-full">
      <div className="w-full h-96 overflow-hidden">
        <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div className="bg-zinc-800 w-full h-60 p-10 flex flex-col gap-10 justify-start">
        <h1 className="text-6xl text-white">Colabora con nosotros</h1>
        <form className="flex gap-10" action="">
          <input type="text" placeholder="Nombre" className={inputStyle}/>
          <input type="text" placeholder="Asunto" className={inputStyle} />
          <input type="tel" placeholder="Telefono" className={inputStyle} />
          <input type="email" placeholder="Email" className={inputStyle} />
          <Button white text="Colaborar" icon="👋" size="w-64 hover:border-white" />
        </form>
      </div>
    </div>
  )
}