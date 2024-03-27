interface Props {
  icon: any
  title: string
  subtitle: string
}
export const CardHowWork = ({ icon, title, subtitle }: Partial<Props>) => {
  return (
    <>
      <div className="flex items-center bg-lime-300 w-fit p-5 gap-4 rounded-2xl">
        <div className="w-24 h-24 bg-gray-300">
          {icon}
        </div>
        <div className="flex flex-col w-96 gap-4">
          <h2 className="text-2xl font-medium">{title}</h2>
          <p className="text-base">{subtitle}</p>
        </div>
      </div>
    </>
  )
}