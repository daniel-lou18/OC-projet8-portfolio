import { useScroll, motion, useTransform, useSpring } from "framer-motion";
import LetterChangeText from "../LetterChangeText/LetterChangeText";
import { useRef } from "react";

function TitleEnter() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const positionX = useTransform(scrollYProgress, [0, 1], [-1000, 0]);
  const positionX2 = useTransform(scrollYProgress, [0, 1], [1000, 0]);

  const positionXSpring = useSpring(positionX, {
    stiffness: 75,
    damping: 30,
  });
  const positionX2Spring = useSpring(positionX2, {
    stiffness: 75,
    damping: 30,
  });

  return (
    <>
      <motion.div className="w-full h-screen overflow-x-hidden fixed" ref={ref}>
        <div
          className="sticky h-fit flex flex-col justify-center items-center"
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <motion.div
            className="mb-10 text-6xl text-nowrap absolute"
            style={{ x: positionXSpring, left: "50%" }}
          >
            DANIEL DERUDDER
          </motion.div>
          <motion.div
            className="mb-10 text-6xl text-nowrap absolute"
            style={{ x: positionX2Spring, left: "50%" }}
          >
            <LetterChangeText
              words={[
                "FULL-STACK",
                "FRONT-END",
                "BACK-END",
                "REACT JS",
                "JAVASCRIPT",
                "TYPESCRIPT",
                "NODE JS",
              ]}
            />
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}

export default TitleEnter;
