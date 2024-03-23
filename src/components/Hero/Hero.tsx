import { useScroll, motion, useTransform } from "framer-motion";
import LetterChangeText from "../LetterChangeText/LetterChangeText";
import { useRef } from "react";
import Intro from "./Intro";
import ScrollDown from "./ScrollDown";
import LeftHanger from "./LeftHanger";
import Blob from "../Blob/Blob";
import Shape from "./Shape";
import TrackBall from "../ui/TrackBall/TrackBall";
import HorMovText from "../HorizMovText/HorMovText";
import Button from "../ui/Button/Button";

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
          className="h-fit flex flex-col justify-center items-start relative border-b-2 border-solid border-neutral-300 pb-32 mx-4"
          style={{
            margin: "0 8%",
            top: "55%",
            transform: "translateY(-50%)",
          }}
        >
          {/* <LeftHanger /> */}
          <div>
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
          <motion.div className="w-[43%]">
            <Intro />
          </motion.div>
        </motion.div>
        {/* <div className="text-[7rem] font-bold tracking-tighter relative left-[30%] top-[40%]">
          DANIEL DERUDDER
        </div> */}
        <motion.div style={{ opacity: scrollOpacity }}>
          <ScrollDown />
        </motion.div>
        <div className="relative left-32 top-[260px]">
          <Button>Télécharger mon CV</Button>
        </div>
        <TrackBall size={150} top={570} right={150}>
          WORKS
        </TrackBall>
      </motion.div>
    </>
  );
}

export default Hero;
