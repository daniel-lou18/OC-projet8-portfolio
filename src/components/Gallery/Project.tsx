import { useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import ProjectInfo from "./ProjectInfo";
import ProjectImage from "./ProjectImage";
import ProjectMobile from "./ProjectMobile";
import { ProjectWithImage } from "../../services/projects-service";

function Project({ project }: { project: ProjectWithImage }) {
  const { title, description, image, websiteUrl, gitHubUrl } = project;
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
    [0.8, 1, 0.9],
  );

  return (
    <>
      <div className="relative mt-16 hidden h-[70vh] w-full overflow-hidden p-0 lg:block">
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
      <div className="relative w-full overflow-hidden px-[8%] pt-24 lg:hidden">
        <ProjectMobile project={project} />
      </div>
    </>
  );
}

export default Project;
