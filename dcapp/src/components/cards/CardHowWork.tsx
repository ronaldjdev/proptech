import Image from "next/image"
interface Props {
  icon: any
  title: string
  subtitle: string
}
export const CardHowWork = ({ icon, title, subtitle }: Partial<Props>) => {
  return (
    <>
      <div className="w-24 h-24 rounded-2xl">
        <Image
          className="w-full h-full object-cover remove-bg z-0"
          src={icon}
          alt={title || ""}
          width={96}
          height={96}
          unoptimized
        />
      </div>
      <div className="flex flex-col gap-4 w-96">
        <h2 className="text-2xl font-medium">{title}</h2>
        <p className="text-base">{subtitle}</p>
      </div>

    </>
  )
}