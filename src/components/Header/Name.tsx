import { motion } from "framer-motion";

function Name() {
  return (
    <div className="relative">
      <span>© Daniel</span>
      <motion.span
        className="absolute"
        initial={{ y: 200 }}
        whileHover={{ y: 0 }}
      >
        Derudder
      </motion.span>
    </div>
  );
}

export default Name;
