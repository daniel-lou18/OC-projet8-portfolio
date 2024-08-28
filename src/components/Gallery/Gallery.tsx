import Project from "./Project";
import { useProjects } from "../../hooks/useProjects";

function Gallery() {
  const { projects, isLoading, error } = useProjects();

  let renderedContent;
  if (isLoading) {
    renderedContent = <p>Loading...</p>;
  } else if (error) {
    renderedContent = <p>{error}</p>;
  } else if (projects.length === 0) {
    renderedContent = <p>No projects found</p>;
  } else {
    renderedContent = projects.map((project) => (
      <Project project={project} key={project.title} />
    ));
  }

  return (
    <section
      className="relative z-10 w-full bg-black pb-24 pt-8 text-slate-100"
      id="works"
    >
      <h3 className="sticky w-fit pl-[8%] text-slate-100">Réalisations</h3>
      {renderedContent}
    </section>
  );
}

export default Gallery;
