export const Footer = () => {
  return (
    <div
      className="bg-black md:bg-transparent
    text-white
    md:text-slate-700
    relative
    md:absolute bottom-0 left-0 w-full"
    >
      <ul
        className="cursor-default flex flex-col md:flex-row
        items-center
         w-full justify-center pb-7 gap-x-4 text-[13px]
         gap-y-3
         pt-8
         md:pt-0
         "
      >
        <li>Tesla © 2023</li>
        <li>Privacidad y legal</li>
        <li className="hidden md:inline-block">Contacto</li>
        <li>Noticias</li>
        <li className="hidden md:inline-block">Seguir informado</li>
        <li className="hidden md:inline-block">Localización de tiendas</li>
      </ul>
    </div>
  );
};
