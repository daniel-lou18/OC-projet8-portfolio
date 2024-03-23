import { AnimatePresence, motion } from "framer-motion";
import { MouseEvent, useState } from "react";

type HamburgerProps = {
  isVisible: boolean;
  size?: number;
};

function Hamburger({ isVisible, size = 80 }: HamburgerProps) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setMouseX(((event.clientX - rect.left - rect.width / 2) / rect.width) * 30);
    setMouseY(((event.clientY - rect.top - rect.width / 2) / rect.height) * 30);
  }

  function resetPosition() {
    setMouseX(0);
    setMouseY(0);
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className={`rounded-full overflow-hidden bg-slate-700 top-8 right-8 flex justify-center items-center fixed z-30 hover:cursor-pointer`}
          style={{ width: `${size}px`, height: `${size}px` }}
          initial={{ scale: 0 }}
          animate={{
            scale: [0, 1.5, 1],
            translateX: mouseX,
            translateY: mouseY,
            transition: {
              duration: 0.15,
              type: "spring",
              damping: 15,
              stiffness: 350,
            },
          }}
          exit={{ scale: 0 }}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetPosition}
        >
          <motion.div
            animate={{
              translateX: mouseX * 1.1,
              translateY: mouseY * 1.1,
            }}
            transition={{
              duration: 0.35,
              type: "spring",
              damping: 15,
              stiffness: 150,
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="48"
              height="24"
            >
              <line
                x1="0"
                y1="16"
                x2="24"
                y2="16"
                stroke="white"
                strokeWidth="2"
              />
              <line
                x1="0"
                y1="8"
                x2="24"
                y2="8"
                stroke="white"
                strokeWidth="2"
              />
            </svg>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Hamburger;
