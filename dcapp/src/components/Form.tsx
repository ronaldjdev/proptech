import { Button } from "./Button";

export const Form = () => {
  let inputStyle = "focus:bg-white focus:text-zinc-900 focus:transition-colors focus:duration-300 focus:outline-none focus:ease-in-out rounded-full bg-transparent border text-center text-white  border-white placeholder:text-center placeholder:text-white placeholder:text-opacity-50 w-64"
  return (
    <form className="flex gap-4" action="">
      <input type="text" placeholder="Nombre" className={inputStyle} />
      <input type="text" placeholder="Asunto" className={inputStyle} />
      <input type="tel" placeholder="Telefono" className={inputStyle} />
      <input type="email" placeholder="Email" className={inputStyle} />
      <Button white text="Colaborar" icon="👋" size="w-64 hover:border-white" />
    </form>
  );
};
