import { useScroll, motion, useTransform } from "framer-motion";
import LetterChangeText from "../LetterChangeText/LetterChangeText";
import { useRef } from "react";
import Intro from "./Intro";
import ScrollDown from "./ScrollDown";
import LeftHanger from "./LeftHanger";
import Blob from "../Blob/Blob";

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const positionX2 = useTransform(scrollYProgress, [0, 0.4], [0, -2500]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <>
      <Blob />
      <motion.div
        className="h-screen w-full overflow-hidden"
        ref={ref}
        // style={{ y: positionX2 }}
      >
        <motion.div
          className="h-fit flex flex-col gap-24 justify-center items-start relative"
          style={{
            paddingLeft: "8%",
            top: "60%",
            transform: "translateY(-50%)",
          }}
        >
          <div>
            <LeftHanger />
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
          </div>
          <motion.div className="w-[40%] relative">
            <Intro />
          </motion.div>
        </motion.div>
        <motion.div style={{ opacity: scrollOpacity }}>
          <ScrollDown />
        </motion.div>
      </motion.div>
    </>
  );
}

export default Hero;
