import { AnimatePresence, motion } from "framer-motion";
import { MouseEvent, useState } from "react";
import styles from "./hamburger.module.css";

type HamburgerProps = {
  isVisible: boolean;
  showMenu: boolean;
  size?: number;
  onClick: () => void;
};

function Hamburger({
  isVisible,
  showMenu,
  size = 80,
  onClick,
}: HamburgerProps) {
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
          className="fixed right-8 top-8 z-50 flex items-center justify-center overflow-hidden rounded-full bg-slate-700 hover:cursor-pointer"
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
          onClick={onClick}
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
            className={`${styles.hamburger} ${showMenu ? styles.cross : ""}`}
          ></motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Hamburger;
