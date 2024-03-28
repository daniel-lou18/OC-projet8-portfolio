import { motion } from "framer-motion";
import { MouseEvent, PropsWithChildren, useState } from "react";
import styles from "./trackball.module.css";
import Reveal from "../Reveal/Reveal";

type TrackBallProps = PropsWithChildren<{
  size?: number | string;
  style?: string;
  coords?: object;
  position?: "absolute" | "relative";
}>;

function TrackBall({
  children,
  size = "5rem",
  style = "",
  position = "relative",
  coords,
}: TrackBallProps) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  function handleMouseMove(event: MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setMouseX(((event.clientX - rect.left - rect.width / 2) / rect.width) * 50);
    setMouseY(((event.clientY - rect.top - rect.width / 2) / rect.height) * 50);
  }

  function resetPosition() {
    setMouseX(0);
    setMouseY(0);
  }

  return (
    <Reveal amount={0.2}>
      <motion.div
        className={`${position} z-30 flex items-center justify-center overflow-hidden rounded-full hover:cursor-pointer ${styles.trackball} ${styles[style]}`}
        animate={{
          translateX: mouseX,
          translateY: mouseY,
          transition: {
            duration: 0.15,
            type: "spring",
            damping: 15,
            stiffness: 250,
          },
        }}
        style={{ width: size, height: size, ...coords }}
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
          className="text-neutral-100"
        >
          {children}
        </motion.div>
      </motion.div>
    </Reveal>
  );
}

export default TrackBall;
