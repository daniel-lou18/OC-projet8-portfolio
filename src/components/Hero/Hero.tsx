import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Blob from "../Blob/Blob";
import HeroButtons from "./HeroButtons";
import HeroBall from "./HeroBall";
import HeroTitle from "./HeroTitle";

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const scrollBall = useTransform(scrollYProgress, [0, 0.5], ["-50%", "-10%"]);

  return (
    <>
      <Blob />
      <motion.div
        className="h-screen px-[8%] w-full flex flex-col justify-end md:justify-between overflow-hidden pt-[13%]"
        ref={ref}
      >
        <HeroTitle />
        <HeroBall x={scrollBall} />
        <HeroButtons />
      </motion.div>
    </>
  );
}

export default Hero;
