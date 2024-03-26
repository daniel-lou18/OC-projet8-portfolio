import { ReactNode } from "react";
import { motion } from "framer-motion";

type HorMovTextProps = {
  children: ReactNode;
  duration?: number;
};

function HorMovText({ children, duration = 20 }: HorMovTextProps) {
  const delay = duration / 2;

  return (
    <>
      <div className="absolute bottom-4 text-9xl font-bold w-full h-32 overflow-hidden text-gray-200">
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
          <h3>{children}</h3>
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
          <h3>{children}</h3>
        </motion.div>
      </div>
    </>
  );
}

export default HorMovText;
