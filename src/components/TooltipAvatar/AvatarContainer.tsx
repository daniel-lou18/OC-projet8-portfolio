import { useScroll, useSpring, motion, useTransform } from "framer-motion";
import { PropsWithChildren, useRef } from "react";

function AvatarContainer({ children }: PropsWithChildren) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scrollY = useTransform(scrollYProgress, [0.7, 1], [0, -350]);
  const springY = useSpring(scrollY, {
    damping: 20,
    stiffness: 1000,
    mass: 0.5,
  });

  return (
    <motion.div
      className="absolute top-1/4 left-1/2"
      style={{ y: springY }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
}

export default AvatarContainer;
