import { motion, MotionValue } from "framer-motion";
import { forwardRef } from "react";

type ProjectImageProps = {
  title: string;
  image: string;
  scale: MotionValue;
  filter: MotionValue;
  y: MotionValue;
};

const ProjectImage = forwardRef<HTMLDivElement, ProjectImageProps>(
  function ProjectImage({ title, image, scale, filter, y }, ref) {
    return (
      <motion.div
        className="relative flex w-full items-center justify-center"
        style={{ scale, filter }}
        ref={ref}
      >
        <motion.h4
          className="absolute left-40 top-1/3 z-20 mb-4 w-96 whitespace-pre-wrap text-6xl font-bold"
          style={{ y, scale }}
        >
          {title}
        </motion.h4>
        <div className="relative h-[60vh] w-3/5 overflow-hidden rounded-md shadow-xl">
          <img
            src={image}
            className="h-full w-full object-cover object-top"
            style={{ filter: "brightness(0.8)" }}
            alt={`projet réalisé - ${title}`}
          />
        </div>
      </motion.div>
    );
  },
);

export default ProjectImage;
