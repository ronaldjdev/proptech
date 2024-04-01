interface Props {
  title: string
  subtitle: string
}
export const Title = ({ title, subtitle }: Partial<Props>) => {
  return (
    <div className="flex flex-col justify-start items-start">
      <h1 className="text-2xl font-bold mb-2">
        {title}
      </h1>
      <h2 className="text-6xl font-bold">
        {subtitle}
      </h2>
    </div>
  )
}