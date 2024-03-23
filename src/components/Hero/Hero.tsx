import { useScroll, motion, useTransform } from "framer-motion";
import LetterChangeText from "../LetterChangeText/LetterChangeText";
import { useRef } from "react";
import Intro from "./Intro";
import ScrollDown from "./ScrollDown";
import LeftHanger from "./LeftHanger";
import Blob from "../Blob/Blob";
import Shape from "./Shape";
import TrackBall from "../ui/TrackBall/TrackBall";
import Button from "../ui/Button/Button";

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const positionX2 = useTransform(scrollYProgress, [0, 0.4], [0, -1500]);
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <>
      <Blob />
      <motion.div className="h-screen w-full overflow-hidden" ref={ref}>
        <motion.div
          className="h-fit flex flex-col gap-24 md:gap-12 justify-center items-start relative md:border-b-2 md:border-solid md:border-neutral-300 pb-24 mx-4"
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
          <motion.div>
            <Intro />
          </motion.div>
        </motion.div>
        {/* <div className="text-[7rem] font-bold tracking-tighter relative left-[30%] top-[40%]">
          DANIEL DERUDDER
        </div> */}
        <motion.div style={{ opacity: scrollOpacity }}>
          <ScrollDown />
        </motion.div>
        <div className="relative left-8 md:left-32 top-[290px]">
          <Button>Télécharger mon CV</Button>
        </div>
        <TrackBall size={150} top={552} right={175}>
          WORKS
        </TrackBall>
      </motion.div>
    </>
  );
}

export default Hero;
