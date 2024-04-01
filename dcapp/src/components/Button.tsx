interface Props {
  dark: boolean
  white: boolean
  text: string
  icon: any
}
export const Button = ({ dark, white, text, icon }: Partial<Props>) => {
  let classes = "py-2 px-6 rounded-full font-sans transition-colors duration-300 ease-in-out border border-zinc-900 w-fit"
  if (white) {
    classes += " bg-white text-zinc-900 hover:bg-zinc-900 hover:text-white"
  }
  if (dark) {
    classes += " bg-zinc-900 text-white hover:bg-white hover:text-zinc-900"
  }
  return (
    <button className={classes}>
      {text}
      <span className="ml-2">{icon}</span>
    </button>
  )
}