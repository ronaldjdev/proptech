import { Button } from "./Button";

export const Form = () => {
  let inputStyle = "focus:bg-white focus:text-zinc-900 focus:transition-colors focus:duration-300 focus:outline-none focus:ease-in-out rounded-full bg-transparent border text-center text-white  border-white placeholder:text-center placeholder:text-white placeholder:text-opacity-50 w-full md:w-auto"
  return (
    <form className="grid grid-cols-1 md:grid-cols-5 gap-4 " action="">
      <input type="text" placeholder="Nombre" className={inputStyle} />
      <input type="text" placeholder="Asunto" className={inputStyle} />
      <input type="tel" placeholder="Telefono" className={inputStyle} />
      <input type="email" placeholder="Email" className={inputStyle} />
      <Button white text="Colaborar" icon="👋" size="w-auto  hover:border-white" />
    </form>
  );
};
//flex flex-col w-full items-center justify-center md:items-start md:flex-row gap-4