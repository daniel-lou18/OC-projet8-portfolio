import Project from "./Project";

export type Projects = {
  image: string;
  title: string;
  description: string;
};

type GalleryProps = {
  projects: Projects[];
};

function Gallery({ projects }: GalleryProps) {
  return (
    <section className="w-full text-slate-100 text-5xl pt-8 bg-slate-950 pb-24 relative z-10">
      <h2 className="text-xl w-fit text-slate-300 pl-[8%] sticky">
        Réalisations
      </h2>
      {projects.map((project, id) => (
        <Project {...project} key={id} />
      ))}
    </section>
  );
}

export default Gallery;
