interface Props {
  specialty: string
  name: string
  content: string
}
export const CardInfoProfesionTeam = ({ specialty, name, content }: Partial<Props> ) => {
  return (
    <div className="p-4 bg-lime-300 rounded-2xl flex flex-col gap-3">
      <h2 className="text-xl capitalize">{specialty}</h2>
      <h2 className="text-basen font-bold text-teal-600">{name}</h2>
      <p className="text-base text-justify first-letter:capitalize line-clamp-4"> {content}
      </p>
    </div>
  );
}
