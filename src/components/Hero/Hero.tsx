import { useScroll, motion, useTransform } from "framer-motion";
import LetterChangeText from "../LetterChangeText/LetterChangeText";
import { useRef } from "react";
import Intro from "./Intro";
import ScrollDown from "./ScrollDown";
import LeftHanger from "./LeftHanger";
import Blob from "../Blob/Blob";
import TrackBall from "../ui/TrackBall/TrackBall";
import Button from "../ui/Button/Button";
import Reveal from "../ui/Reveal/Reveal";

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scrollOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <>
      <Blob />
      {/* <LeftHanger /> */}
      <motion.div
        className="h-screen w-full overflow-hidden pt-[15%]"
        ref={ref}
      >
        <div className="h-fit mx-[8%] flex flex-col gap-24 md:gap-12 pb-24">
          <Reveal>
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
          </Reveal>
          <Reveal>
            <Intro />
          </Reveal>
        </div>
        <div className="flex justify-between mx-[8%] border-t-2 border-solid border-neutral-300">
          <Reveal style="fit">
            <div className="relative left-8 md:left-0 top-[40px]">
              <Button>Télécharger mon CV</Button>
            </div>
          </Reveal>
          <motion.div style={{ opacity: scrollOpacity }}>
            <Reveal>
              <ScrollDown />
            </Reveal>
          </motion.div>
          <Reveal style="fit">
            <TrackBall size={150} coords={{ top: -80 }}>
              RÉALISATIONS
            </TrackBall>
          </Reveal>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
