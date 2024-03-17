import { useScroll, motion, useTransform } from "framer-motion";
import LetterChangeText from "../LetterChangeText/LetterChangeText";
import { useRef } from "react";
import Intro from "./Intro";
import ScrollDown from "./ScrollDown";
import LeftHanger from "./LeftHanger";
import Blob from "../Blob/Blob";
import PhotoBall from "../ui/TrackBall/PhotoBall";
import image from "../../assets/images/PHOTO UP-20211120-Vermogen-82.jpg";
import Lines from "./Lines";
import TrackBall from "../ui/TrackBall/TrackBall";

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // const positionX = useTransform(scrollYProgress, [0, 1], [0, -750]);
  const positionX2 = useTransform(scrollYProgress, [0, 1], [0, 250]);
  // const positionX3 = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <>
      {/* <Lines /> */}
      <Blob />
      <motion.div
        className="h-screen overflow-hidden bg-gradient-to-br from-slate-100 to-slate-500"
        ref={ref}
        style={{ y: positionX2 }}
      >
        <motion.div
          className="h-fit flex flex-col gap-10 justify-center items-start relative"
          style={{
            paddingLeft: "8%",
            top: "55%",
            // left: "25%",
            transform: "translateY(-50%)",
            // position: "fixed",
          }}
        >
          <motion.div className="text-5xl" style={{ fontFamily: "Bebas Neue" }}>
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
          {/* <motion.div
            className="text-6xl text-nowrap flex gap-8 items-center"
            style={{ fontFamily: "Bebas Neue" }}
          >
            Daniel Derudder
            <PhotoBall linkTo="/contact" size={100}>
              <div className="w-[100px] h-[100px] overflow-hidden bg-white opacity-75">
                <img
                  src={image}
                  className="w-full h-full"
                  style={{ filter: "grayscale(90%)" }}
                />
              </div>
            </PhotoBall>
          </motion.div> */}
          <motion.div
            className="text-6xl text-nowrap w-2/3 relative"
            // style={{ y: positionX2 }}
          >
            <Intro />
          </motion.div>
          {/* <motion.div className="mr-8">
            <TrackBall>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="56"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-chevron-down"
              >
                <circle
                  xmlns="http://www.w3.org/2000/svg"
                  cx="19"
                  cy="8"
                  r="1"
                />
                <circle
                  xmlns="http://www.w3.org/2000/svg"
                  cx="5"
                  cy="8"
                  r="1"
                />
                <polyline points="6 14 12 20 18 14" />
              </svg>
            </TrackBall>
          </motion.div> */}
        </motion.div>

        {/* <HorMovText>Faites défiler vers le bas</HorMovText> */}
        <ScrollDown />
      </motion.div>
    </>
  );
}

export default Hero;
