import { AnimatePresence, easeOut, motion } from "framer-motion";
import { MouseEvent, PropsWithChildren, useState } from "react";

type TrackBallProps = PropsWithChildren<{ isVisible: boolean }>;

function TrackBall({ isVisible, children }: TrackBallProps) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  console.log(mouseY, "-", mouseX);

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
          className="w-20 h-20 rounded-full overflow-hidden bg-slate-700 top-8 right-8 flex justify-center items-center fixed z-30"
          initial={{ scale: 0 }}
          animate={{
            scale: [0.1, 1.5, 1],
            translateX: mouseX,
            translateY: mouseY,
          }}
          exit={{ scale: 0 }}
          transition={{
            duration: 0.15,
            type: "spring",
            damping: 15,
          }}
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
              type: "tween",
              ease: easeOut,
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default TrackBall;
