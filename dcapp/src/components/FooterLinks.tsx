
export const FooterLinks = ({ title, links }: { title: string, links: { label: string, url: string }[] }) => (
  <div className="flex flex-col gap-4 w-1/5">
    <h2 className="text-xl capitalize text-teal-600 font-bold">{title}</h2>
    <div className="flex flex-col gap-2">
      {links.map((link: { label: string, url: string }, index: number) => (
        <a key={index} href={link.url} className="text-base text-zinc-900">{link.label}</a>
      ))}
    </div>
  </div>
);
