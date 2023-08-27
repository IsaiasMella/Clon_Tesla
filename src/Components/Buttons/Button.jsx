import { motion } from "framer-motion";
import { useContext } from "react";
import { FunctionNotAvailable } from "../../Context/FunctionNotAvailableProvider";

const typeButton = {
  outline:
    "text-white cursor-pointer rounded-[3px] font-medium text-sm border-white border-[3px] py-[0.6rem] md:py-[9px] px-20 md:px-12 hover:bg-white hover:text-black",
  darkFill:
    'cursor-pointer border-[3px] border-[#393c41] bg-[#393c41] text-sm md:text-sm rounded font-medium text-white py-[0.6rem] px-[5.63rem] md:py-[9px] md:px-12 transition-colors duration-300 hover:border-gray-500 hover:bg-gray-500 ',
  lightFill:
    "cursor-pointer border-[3px] border-white bg-white text-sm md:text-sm rounded font-medium py-[0.6rem] md:py-[9px] px-20 md:px-12 transition-colors hover:bg-black hover:border-black hover:text-white text-black ",
};

const animationButton = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
};

export const Button = ({ type, title, customStyle = "" }) => {
  const { setPortalOriginalTesla } = useContext(FunctionNotAvailable);

  return (
    <motion.div variants={animationButton} initial="hidden" animate="visible">
      <a
        onClick={setPortalOriginalTesla}
        className={`cursor-pointer ` + typeButton[type] + customStyle}
      >
        {title}
      </a>
    </motion.div>
  );
};
