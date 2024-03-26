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
        className="w-full flex justify-center items-center relative"
        style={{ scale, filter }}
        ref={ref}
      >
        <motion.h3
          className="text-6xl font-bold mb-4 absolute top-1/3 left-40 z-20 whitespace-pre-wrap w-96"
          style={{ y, scale }}
        >
          {title}
        </motion.h3>
        <div className="overflow-hidden h-[60vh] w-3/5 rounded-md relative shadow-xl">
          <img
            src={image}
            className="w-full h-auto object-cover"
            style={{ filter: "brightness(0.8)" }}
          />
        </div>
      </motion.div>
    );
  }
);

export default ProjectImage;
