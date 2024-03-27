interface Props {
  dark: boolean
  white: boolean
  text: string
  icon: any
}
export const Button = ({ dark, white, text, icon }: Partial<Props>) => {
  let classes = "py-2 px-6 rounded-full font-sans"
  if (white) {
    classes += " bg-white text-zinc-900 border border-zinc-900 w-fit"
  }
  if (dark) {
    classes += " bg-zinc-900 text-white"
  }
  return (
    <button className={classes}>
      {text}
      <span className="ml-2">{icon}</span>
    </button>
  )
}