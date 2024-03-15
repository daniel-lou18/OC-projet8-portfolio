import { useScroll, useTransform, motion } from "framer-motion";
import Project from "./Project";
import { useRef } from "react";

export type Projects = {
  image: string;
  title: string;
  description: string;
};

type GalleryProps = {
  projects: Projects[];
};

function Gallery({ projects }: GalleryProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <motion.div
      className="w-full text-slate-100 text-5xl pt-8 bg-slate-950 pb-24 relative z-10"
      // style={{ position: relativeOrFixed }}
      ref={ref}
    >
      <h2 className="text-xl w-fit text-slate-300 pl-16 sticky">
        Réalisations
      </h2>
      {projects.map((project, id) => (
        <Project {...project} key={id} />
      ))}
    </motion.div>
  );
}

export default Gallery;
