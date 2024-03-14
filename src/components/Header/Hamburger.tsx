import { AnimatePresence, motion } from "framer-motion";

function Hamburger({ isVisible }: { isVisible: boolean }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="w-20 h-20 rounded-full overflow-hidden bg-slate-700 top-8 right-8 flex justify-center items-center fixed z-30"
          initial={{ scale: 0 }}
          animate={{ scale: [1, 1.2, 1] }}
          exit={{ scale: 0 }}
          transition={{
            duration: 0.25,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="48"
            height="24"
          >
            <line
              x1="-2"
              y1="18"
              x2="26"
              y2="18"
              stroke="white"
              strokeWidth="2"
            />
            <line
              x1="-2"
              y1="6"
              x2="26"
              y2="6"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Hamburger;
