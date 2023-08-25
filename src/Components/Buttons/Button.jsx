import { motion } from "framer-motion";

const typeButton = {
  outline:
    "text-white cursor-pointer rounded-[3px] font-medium text-sm border-white border-[3px] py-[9px] px-12 hover:bg-white hover:text-black",
  darkFill:
    "cursor-pointer border-[3px] border-[#393c41] bg-[#393c41] text-sm rounded font-medium text-white px-14 py-2 inline-block transition-colors duration-300 hover:border-gray-500 hover:bg-gray-500",
  lightFill:
    "cursor-pointer border-[3px]  border-white bg-white text-sm rounded font-medium px-14 py-2 transition-colors hover:bg-black hover:border-black hover:text-white inline-flex justify-center items-center text-black",
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
  return (
    <motion.div variants={animationButton} initial="hidden" animate="visible">
      <a className={`cursor-pointer ` + typeButton[type] + customStyle}>
        {title}
      </a>
    </motion.div>
  );
};
