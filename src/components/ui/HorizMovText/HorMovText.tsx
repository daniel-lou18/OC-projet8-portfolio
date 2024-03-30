import { ReactNode } from "react";
import { motion } from "framer-motion";

type HorMovTextProps = {
  children: ReactNode;
  duration?: number;
};

function HorMovText({ children, duration = 15 }: HorMovTextProps) {
  const delay = duration / 2;

  return (
    <>
      <div className="absolute bottom-8 h-16 w-full overflow-hidden text-3xl font-bold text-gray-200 md:text-7xl lg:h-24 lg:text-8xl">
        <motion.div
          animate={{
            x: [0, -window.innerWidth],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="absolute whitespace-nowrap"
        >
          <div>{children}</div>
        </motion.div>
        <motion.div
          animate={{
            x: [window.innerWidth, 0],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="absolute whitespace-nowrap"
        >
          <div>{children}</div>
        </motion.div>
      </div>
    </>
  );
}

export default HorMovText;
