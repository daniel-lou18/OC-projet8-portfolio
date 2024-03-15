import { useScroll, motion, useTransform } from "framer-motion";
import LetterChangeText from "../LetterChangeText/LetterChangeText";
import { useRef } from "react";
import Intro from "./Intro";
import ScrollDown from "./ScrollDown";
import LeftHanger from "./LeftHanger";

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // const positionX = useTransform(scrollYProgress, [0, 1], [0, -750]);
  const positionX2 = useTransform(scrollYProgress, [0, 1], [0, 550]);
  // const positionX3 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <>
      <motion.div
        className="h-screen overflow-hidden bg-gradient-to-br from-slate-100 to-slate-300"
        ref={ref}
        style={{ y: positionX2 }}
      >
        <motion.div
          className="h-fit flex flex-col gap-10 justify-center items-start relative"
          style={{
            paddingLeft: "20%",
            top: "50%",
            // left: "25%",
            transform: "translateY(-50%)",
            // position: "fixed",
          }}
        >
          <motion.div
            className="text-6xl text-nowrap"
            // style={{ y: positionX2 }}
          >
            Daniel Derudder
          </motion.div>
          <motion.div
            className="text-5xl text-nowrap"
            // style={{ y: positionX2 }}
          >
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
          </motion.div>
          <motion.div
            className="text-6xl text-nowrap w-1/2"
            // style={{ y: positionX2 }}
          >
            <Intro />
          </motion.div>
        </motion.div>
        {/* <HorMovText>Faites défiler vers le bas</HorMovText> */}
        <ScrollDown />
      </motion.div>
    </>
  );
}

export default Hero;
