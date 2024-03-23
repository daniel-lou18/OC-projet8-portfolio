import { motion, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent, useEffect } from "react";

const size = 300;

function Blob() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springOptions = { damping: 30, stiffness: 50, mass: 0.5 };
  const springX = useSpring(mouseX, springOptions);
  const springY = useSpring(mouseY, springOptions);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      if (e.pageY > window.innerHeight) return;
      mouseX.set(e.pageX - size / 2);
      mouseY.set(e.pageY - size / 2);
    }
    document.addEventListener("mousemove", handleMouseMove);

    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative inset-0 blur-3xl">
      <motion.div
        className="bg-gradient-to-r from-neutral-400 to-amber-300 rounded-full absolute blob-element opacity-50"
        style={{
          x: springX,
          y: springY,
          width: size,
          height: size,
        }}
        animate={{
          rotate: [0, 360],
          scaleX: [1, 1.5, 1],
          scaleY: [1.25, 1, 1.25],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          type: "linear",
        }}
      ></motion.div>
    </div>
  );
}

export default Blob;
