import Gallery from "../Gallery/Gallery";
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skills";
import Summary from "../Summary/Summary";

function Main() {
  return (
    <main className="w-full bg-gradient-to-br from-neutral-100 to-neutral-300 text-slate-950">
      <div className="relative overflow-hidden">
        <Hero />
        <Summary />
      </div>
      <Gallery />
      <Skills />
    </main>
  );
}

export default Main;
