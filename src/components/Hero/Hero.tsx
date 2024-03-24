import { motion } from "framer-motion";
import LetterChangeText from "../LetterChangeText/LetterChangeText";
import { useRef } from "react";
import Intro from "./Intro";
import LeftHanger from "./LeftHanger";
import Blob from "../Blob/Blob";
import TrackBall from "../ui/TrackBall/TrackBall";
import Button from "../ui/Button/Button";
import Reveal from "../ui/Reveal/Reveal";

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

  return (
    <>
      <Blob />
      {/* <LeftHanger /> */}
      <motion.div
        className="h-screen w-full flex flex-col justify-center md:justify-between overflow-hidden pt-[15%]"
        ref={ref}
      >
        <div className="h-fit mx-[8%] flex flex-col gap-24 md:gap-12 pb-24">
          <Reveal>
            <LetterChangeText words={words} />
          </Reveal>
          <Reveal>
            <Intro />
          </Reveal>
        </div>
        <div className="flex flex-col-reverse md:flex-row justify-between mx-[8%] border-t-2 border-solid border-neutral-300">
          <div className="flex gap-8">
            <Reveal style="fit">
              <div className="relative md:left-0 md:top-[40px]">
                <Button className="bigPill">Télécharger mon CV</Button>
              </div>
            </Reveal>
            <Reveal style="fit">
              <div className="relative md:left-0 md:top-[40px]">
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
              </div>
            </Reveal>
          </div>
          <Reveal style="fit">
            <TrackBall size={150} coords={{ top: -80, right: 50 }}>
              RÉALISATIONS
            </TrackBall>
          </Reveal>
        </div>
      </motion.div>
    </>
  );
}

export default Hero;
