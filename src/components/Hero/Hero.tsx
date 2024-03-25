import { motion, useScroll, useTransform } from "framer-motion";
import LetterChangeText from "../LetterChangeText/LetterChangeText";
import { useRef } from "react";
import Intro from "./Intro";
import Blob from "../Blob/Blob";
import TrackBall from "../ui/TrackBall/TrackBall";
import Button from "../ui/Button/Button";
import Reveal from "../ui/Reveal/Reveal";
import Line from "../ui/Line";

const words = [
  "FULL-STACK",
  "FRONT-END",
  "BACK-END",
  "REACT JS",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "NODE JS",
];

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scrollBall = useTransform(scrollYProgress, [0, 1], ["-40%", "-10%"]);

  return (
    <>
      <Blob />
      <motion.div
        className="h-screen px-[8%] w-full flex flex-col justify-end md:justify-between overflow-hidden pt-[13%]"
        ref={ref}
      >
        <div className="h-fit flex flex-col gap-8 md:gap-0 mb-32 md:mb-0">
          <Reveal>
            <h4 className="text-5xl md:text-8xl tracking-tighter">
              DANIEL DERUDDER
            </h4>
          </Reveal>
          <Reveal>
            <LetterChangeText words={words} />
          </Reveal>
          <Reveal>
            <Intro />
          </Reveal>
        </div>
        <Line>
          <TrackBall
            size={150}
            coords={{ top: 0, right: 0, y: "-50%", x: scrollBall }}
            position="absolute"
          >
            RÉALISATIONS
          </TrackBall>
        </Line>
        <div className="py-8 pt-24 md:pt-0 md:my-4 flex flex-col-reverse md:flex-row justify-between">
          <div className="flex gap-8">
            <Reveal style="fit">
              <Button className="bigPill">Télécharger mon CV</Button>
            </Reveal>
            <Reveal style="fit">
              <Button px={0} py={0} className="bigRound">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="feather feather-arrow-down-right"
                >
                  <line x1="7" y1="7" x2="17" y2="17" />
                  <polyline points="17 7 17 17 7 17" />
                </svg>
              </Button>
            </Reveal>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
