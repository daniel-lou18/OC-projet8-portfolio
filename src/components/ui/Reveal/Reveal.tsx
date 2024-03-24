import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type RevealProps = PropsWithChildren<{
  style?: string;
}>;

function Reveal({ children, style = "full" }: RevealProps) {
  return (
    <div className={`${style === "full" ? "w-full" : "w-fit"} relative`}>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.25 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
