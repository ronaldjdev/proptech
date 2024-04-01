interface Props {
  nivel: string
  profesion: string
  name: string
}
export const CardProfesionTeam = ({ nivel, profesion, name }: Partial<Props>) => {
  return (
      <div className="p-4 hover:bg-lime-300 rounded-2xl">
        <h2 className="text-sm capitalize">{nivel}</h2>
        <h2 className="text-xl capitalize">{profesion}</h2>
        <h2 className="text-base text-teal-600 font-bold">{name}</h2>
      </div>

  );
};
