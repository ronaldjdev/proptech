import { Button } from "./Button";

let inputStyle = "focus:outline-none rounded-full bg-transparent text-center text-zinc-900  placeholder:text-center placeholder:text-zinc-900 placeholder:text-opacity-50 w-64";
export function SubscribeForm() {
  return <form className="flex w-fit p-1 rounded-full gap-4 bg-white mt-4" action="">
    <input type="email" placeholder="Ingresar correo electronico" className={inputStyle} />
    <Button dark text="Suscribirme" icon="👋" size="w-52 hover:border-zinc-900" />
  </form>;
}
