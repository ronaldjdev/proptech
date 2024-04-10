interface Props {
  nivel: string
  profesion: string
  name: string
  selected: boolean
}
export const CardProfesionTeam = ({ nivel, profesion, name, selected }: Partial<Props>) => {
  return (
    <div className={`p-4 ${selected ? "bg-lime-300" : "bg-slate-100"} hover:bg-lime-300 transition-colors duration-300 ease-in-out rounded-2xl`}>
      <h2 className="text-sm capitalize">{nivel}</h2>
      <h2 className="text-xl capitalize">{profesion}</h2>
      <h2 className="text-base text-teal-600 font-bold">{name}</h2>
    </div>

  );
};
