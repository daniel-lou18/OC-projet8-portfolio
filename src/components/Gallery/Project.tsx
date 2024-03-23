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
    <div className="relative mt-16 p-4 md:p-0 w-full h-[70vh] overflow-hidden">
      <motion.div
        className="w-full md:flex justify-center items-center relative"
        style={{ scale: scrollY2, filter: scrollBlur }}
        ref={ref}
      >
        <motion.h3
          className="text-4xl md:text-6xl font-bold mb-4 absolute top-8 md:top-1/3 md:left-40 z-20 whitespace-pre-wrap w-96"
          style={{ y: scrollYTitle, scale: scrollY2 }}
        >
          {title}
        </motion.h3>
        <div className="overflow-hidden md:h-[60vh] md:w-3/5 rounded-md relative shadow-xl">
          <img
            src={image}
            className="w-full h-auto object-cover"
            style={{ filter: "brightness(0.8)" }}
          />
        </div>
      </motion.div>
      <motion.div
        className="w-4/5 top-[30%] md:w-[22%] p-6 xl:p-8 absolute md:left-[65%] md:top-32 rounded-2xl overflow-hidden"
        style={{
          backgroundColor: "rgba(255,255,255,0.2)",
          backdropFilter: backdropBlur,
          scale: scrollY2,
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
          <p className="text-sm xl:text-base">{description}</p>
          <div className="flex justify-end gap-4 h-6">
            <span className="text-xl hover:scale-125 hover:cursor-pointer transition delay-100 duration-250 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="feather feather-arrow-up-right"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
            <span className="hover:scale-125 hover:cursor-pointer text-slate-300 hover:text-white transition delay-100 duration-250 ease-in-out">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-github"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
            </span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Project;
