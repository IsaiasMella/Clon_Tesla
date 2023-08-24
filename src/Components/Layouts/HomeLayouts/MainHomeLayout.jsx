import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      y: { duration: .3 },
    },
  },
};

export const MainHomeLayout = ({
  children,
  title,
  subtitle,
  setColor,
  textColor,
}) => {
  return (
    <section className="h-full w-full relative">
      <header
        id="nav-bar"
        className="h-screen w-full flex flex-col items-center justify-between"
      >
        <motion.div
          id="section-home"
          data-nav-color={setColor}
          variants={container}
          initial="hidden"
          animate="visible"
          className="pt-[5.5rem] text-center z-30"
        >
          <motion.h1 variants={item} className={textColor}>
            {title}
          </motion.h1>
          <motion.p variants={item} className={textColor + " text-sm"}>
            {subtitle}
          </motion.p>
        </motion.div>
        {children}
      </header>
    </section>
  );
};
