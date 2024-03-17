import { motion } from "framer-motion";
import { MouseEvent, PropsWithChildren, useState } from "react";
import styles from "./trackball.module.css";
import { Link } from "react-router-dom";

type TrackBallProps = PropsWithChildren<{
  size?: number | string;
  top?: number;
  right?: number;
  left?: number | "";
  linkTo?: string;
}>;

function TrackBall({
  children,
  size = "5rem",
  top = 0,
  right = 0,
  left = "",
  linkTo = "/",
}: TrackBallProps) {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  console.log(mouseY, "-", mouseX);

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
    <Link to={linkTo}>
      <motion.div
        className={`rounded-full overflow-hidden bg-slate-700 flex justify-center items-center hover:cursor-pointer absolute z-30 ${styles.trackball}`}
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
        style={{ width: size, height: size, top, right, left }}
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
          className="text-slate-100"
        >
          {children}
        </motion.div>
      </motion.div>
    </Link>
  );
}

export default TrackBall;
