import { useRef } from "react";
import { Projects } from "./Gallery";
import { useScroll, useTransform } from "framer-motion";
import ProjectInfo from "./ProjectInfo";
import ProjectImage from "./ProjectImage";
import ProjectMobile from "./ProjectMobile";

type ProjectProps = Projects;

function Project(props: ProjectProps) {
  const { title, description, image, websiteUrl, gitHubUrl } = props;
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
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

  return (
    <>
      <div className="hidden md:block relative mt-16 p-0 w-full h-[70vh] overflow-hidden">
        <ProjectImage
          title={title}
          image={image}
          scale={scrollY2}
          filter={scrollBlur}
          y={scrollYTitle}
          ref={ref}
        />
        <ProjectInfo
          description={description}
          backdropFilter={backdropBlur}
          scale={scrollY2}
          filter={scrollBlur}
          websiteUrl={websiteUrl}
          gitHubUrl={gitHubUrl}
        />
      </div>
      <div className="md:hidden relative px-[8%] w-full h-[70vh] overflow-hidden">
        <ProjectMobile {...props} />
      </div>
    </>
  );
}

export default Project;
