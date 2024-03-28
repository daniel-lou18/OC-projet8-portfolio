import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type RevealProps = PropsWithChildren<{
  style?: string;
  amount?: number;
}>;

function Reveal({ children, style = "full", amount = 0.5 }: RevealProps) {
  return (
    <div className={`${style === "full" ? "w-full" : "w-fit"} relative`}>
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, delay: 0.25 }}
        viewport={{ once: true, amount }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Reveal;
