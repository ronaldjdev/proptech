interface Props {
  name: string
  score: string
  create: string
  content: string
  image: string
}

export const CardTestimonial = ({ name, score, create, content, image }: Partial<Props>) => {
  return (
    <div className="bg-gray-300 w-[450px] h-40 rounded-2xl p-4 overflow-hidden">
      <div className="flex justify-between mb-1">
        <div className="flex gap-1 items-center">
          <img src={image} alt="" className="rounded-full w-10 h-10 object-cover" />
          <div>
            <h2 className="text-base font-bold first-letter:capitalize ">{name}</h2>
            <h2 className="text-base font-bold first-letter:capitalize ">{score}</h2>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-light first-letter:capitalize ">{create}</h2>
        </div>
      </div>
      <p className="text-base font-light first-letter:capitalize line-clamp-3 text-ellipsis whitespace-pre-wrap">{content}</p>
    </div>
  );
};
