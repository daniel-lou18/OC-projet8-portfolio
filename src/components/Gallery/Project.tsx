import { useRef } from "react";
import { Projects } from "./Gallery";
import {
  Variants,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

type ProjectProps = Projects;

function Project({ title, description, image }: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scrollY = useTransform(scrollYProgress, [0.5, 1], [1, 0.7]);
  const scrollY10 = useTransform(scrollYProgress, [0.5, 1], ["80%", "-150%"]);
  const scrollYTitle = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const scrollBlur = useTransform(scrollYProgress, (value) => {
    if (value <= 0.25 || value > 0.75) return "blur(5px) brightness(0.9)";
    else return "blur(0px) brightness(1)";
  });

  const backdropBlur = useTransform(scrollYProgress, (value) => {
    if (value <= 0.25 || value > 0.75) return "blur(0px)";
    else return "blur(10px)";
  });

  const scrollY2 = useTransform(
    scrollYProgress,
    [0.1, 0.5, 0.9],
    [0.8, 1, 0.9]
  );
  const springY = useSpring(scrollY10, {
    stiffness: 100,
    damping: 20,
  });

  const cardVariants: Variants = {
    offscreen: {
      x: 200,
      opacity: 0,
    },

    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.5,
        duration: 1,
      },
    },
  };

  return (
    <div className="relative mt-16 w-full h-[70vh] overflow-hidden">
      <motion.div
        className="w-full flex justify-center items-center relative"
        style={{ scale: scrollY2, filter: scrollBlur }}
        ref={ref}
      >
        <motion.h3
          className="text-6xl font-bold mb-4 absolute left-40 z-20 whitespace-pre-wrap w-96"
          style={{ y: scrollYTitle, scale: scrollY2 }}
        >
          {title}
        </motion.h3>
        <div className="overflow-hidden h-[60vh] w-3/5 p-8 rounded-md relative">
          <img
            src={image}
            className="w-full h-auto object-cover"
            style={{ filter: "brightness(0.8)" }}
          />
        </div>
      </motion.div>
      <motion.div
        className="absolute left-[65%] top-32"
        style={{
          backgroundColor: "rgba(255,255,255,0.2)",
          width: "22%",
          padding: "2rem",
          borderRadius: "1rem",
          overflow: "hidden",
          backdropFilter: backdropBlur,
          scale: scrollY,
        }}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
        variants={cardVariants}
      >
        <motion.div
          style={{
            filter: scrollBlur,
          }}
        >
          <p className="text-base">{description}</p>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Project;
