interface Props {
  children: React.ReactNode
  id: string
}
export const Section = ({ children, id }: Partial<Props>) => {
  return (
    <>
      <section id={id} className=" flex w-full p-16 flex-col">
        {children}
      </section>
    </>
  )
}