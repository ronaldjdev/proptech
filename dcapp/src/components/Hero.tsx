export const Hero = () => {
  return (
    <div className="flex gap-1 bg-zinc-900 w-full h-[700px]  p-1 rounded-2xl font-sans font-grey-500">
      <div className="flex flex-col gap-1 w-full h-full rounded-2xl ">
        <div className="bg-gray-500 w-full h-2/6 rounded-2xl"></div>
        <div className="bg-gray-300 w-full h-full rounded-2xl"></div>
      </div>
      <div className=" flex flex-col gap-1 w-full h-full rounded-2xl">
        <div className="bg-gray-500 w-full h-full rounded-2xl"></div>
        <div className="bg-lime-300 w-full h-full rounded-2xl"></div>
      </div>
    </div>
  )
}