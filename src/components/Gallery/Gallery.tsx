import Project from "./Project";

export type Projects = {
  image: string;
  title: string;
  description: string;
  websiteUrl: string;
  gitHubUrl: string;
};

type GalleryProps = {
  projects: Projects[];
};

function Gallery({ projects }: GalleryProps) {
  return (
    <section
      className="relative z-10 w-full bg-black pb-24 pt-8 text-slate-100"
      id="works"
    >
      <h2 className="sticky w-fit pl-[8%] text-slate-300">Réalisations</h2>
      {projects.map((project, id) => (
        <Project {...project} key={id} />
      ))}
    </section>
  );
}

export default Gallery;
