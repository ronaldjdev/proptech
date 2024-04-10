import Image from "next/image"

interface Props {
  icon: any
  title: string
  content: string
}

export const CardHowWork = ({ icon, title, content }: Partial<Props>) => {
  return (
    <div className="flex gap-4">
      <div className="w-24 h-24 rounded-2xl flex-shrink-0">
        <Image
          className="w-full h-full object-cover remove-bg z-0 rounded-2xl"
          src={icon}
          alt={title || ""}
          width={96}
          height={96}
          unoptimized
        />
      </div>
      <div className="flex flex-col">
        <h2 className="text-2xl font-medium">{title}</h2>
        <p className="text-base">{content}</p>
      </div>
    </div>
  )
}
