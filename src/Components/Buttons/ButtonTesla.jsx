export const ButtonTesla = ({ text, to, target }) => {
  return (
    <a target={target} href={to} className="cursor-pointer border-[3px] gap-2 border-red-500 bg-red-500 text-sm rounded font-medium px-6 md:px-14 py-2 transition-colors hover:bg-red-700 hover:border-red-700 hover:text-white inline-flex justify-center items-center text-white">
      <img src="/minilogo_tesla.png" alt="icono tesla" />
      {text}
    </a>
  );
};
