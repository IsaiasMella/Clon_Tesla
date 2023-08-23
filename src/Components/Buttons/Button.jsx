const typeButton = {
  outline:
    "text-white cursor-pointer rounded-[3px] font-medium text-sm border-white border-[3px] py-[9px] px-12 hover:bg-white hover:text-black",
  darkFill:
    "cursor-pointer border-[3px] border-[#393c41] bg-[#393c41] text-sm rounded font-medium text-white px-14 py-2 inline-block transition-colors duration-300 hover:border-gray-500 hover:bg-gray-500",
  lightFill:
    "cursor-pointer bg-white text-sm rounded font-medium px-14 py-2 transition-colors hover:bg-black hover:text-white inline-flex justify-center items-center text-black",
};

export const Button = ({ type, title, customStyle = "" }) => {
  return (
    <a
      className={
        `cursor-pointer text-current border-curren` + typeButton[type] + customStyle
      }
    >
      {title}
    </a>
  );
};
