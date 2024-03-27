interface Props {
  children: React.ReactNode
}
export const Section = ({ children }: Props) => {
  return (
    <>
      <div className=" flex w-full p-16">
        {children}
      </div>
    </>
  )
}