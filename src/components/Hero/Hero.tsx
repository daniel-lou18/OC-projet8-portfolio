import { useScroll, motion, useTransform } from "framer-motion";
import LetterChangeText from "../LetterChangeText/LetterChangeText";
import { useRef } from "react";
import Intro from "./Intro";
import ScrollDown from "./ScrollDown";
import LeftHanger from "./LeftHanger";
import Blob from "../Blob/Blob";
import PhotoBall from "../ui/TrackBall/PhotoBall";
import image from "../../assets/images/PHOTO UP-20211120-Vermogen-82.jpg";

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
      <Blob />
      <motion.div
        className="h-screen overflow-hidden bg-gradient-to-br from-slate-100 to-slate-300"
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
          <motion.div
            className="text-5xl text-nowrap"
            style={{ fontFamily: "Bebas Neue" }}
          >
            {/* <LeftHanger /> */}
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
            className="text-6xl text-nowrap"
            style={{ fontFamily: "Bebas Neue" }}
          >
            Daniel Derudder
          </motion.div>
          <motion.div
            className="text-6xl text-nowrap w-2/3"
            // style={{ y: positionX2 }}
          >
            <Intro />
          </motion.div>
        </motion.div>
        {/* <motion.div className="flex flex-col gap-16 absolute right-[8%] top-[28%]">
          <div className="w-[200px] h-[200px] rounded-full flex justify-center items-center bg-slate-300">
            <div
              className="w-[100px] h-[100px] border-t-2 border-r-2 border-solid border-slate-600"
              style={{ transform: "rotate(135deg)" }}
            ></div>
          </div>

          <PhotoBall linkTo="/contact" size={200}>
            <div className="w-[200px] h-[200px] overflow-hidden">
              <img
                src={image}
                className="w-full h-full"
                style={{ filter: "grayscale(90%)" }}
              />
            </div>
          </PhotoBall>
        </motion.div> */}
        {/* <HorMovText>Faites défiler vers le bas</HorMovText> */}
        <ScrollDown />
      </motion.div>
    </>
  );
}

export default Hero;
