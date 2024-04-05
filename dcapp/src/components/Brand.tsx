import logo2 from "../../public/svg/logo2.svg"
import Image from "next/image"
export const Brand = () => {
  return (

    <a href="/" className="h-10">
      <Image src={logo2} alt="loguo" className="h-full w-full object-cover" width={0} height={0}/>
    </a>
  )
}