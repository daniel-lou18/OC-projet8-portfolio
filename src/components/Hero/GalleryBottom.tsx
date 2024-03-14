import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import logements from "../../data/logements.json";
import { useRef } from "react";
import ParallaxGallery from "./ParallaxGallery";

function GalleryBottom() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "start start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  // const pos = useTransform(scrollYProgress, val => {
  //   val
  // });

  return (
    <motion.div
      className="h-[200vh] w-1/3 fixed top-0 left-0"
      ref={ref}
      style={{ opacity: 0.3 }}
    >
      {/* <h2 className="w-fit ml-auto mr-auto text-5xl">Mes projets</h2> */}
      <motion.div className="opacity-100 w-full" style={{ scale }}>
        <ParallaxGallery items={logements} />
      </motion.div>
    </motion.div>
  );
}

export default GalleryBottom;
