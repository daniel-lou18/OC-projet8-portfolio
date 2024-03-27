import LetterChangeText from "../ui/LetterChangeText/LetterChangeText";
import Reveal from "../ui/Reveal/Reveal";
import Intro from "./Intro";

const words = [
  "FULL-STACK",
  "FRONT-END",
  "BACK-END",
  "REACT JS",
  "JAVASCRIPT",
  "TYPESCRIPT",
  "NODE JS",
];

function HeroTitle() {
  return (
    <div className="mb-32 flex h-fit flex-col gap-6 md:mb-0 md:gap-0">
      <h1>
        <Reveal>
          <div className="mb-4 text-4xl tracking-tighter md:text-6xl lg:mb-0 lg:text-8xl">
            DANIEL DERUDDER
          </div>
        </Reveal>
        <Reveal>
          <LetterChangeText words={words} />
        </Reveal>
      </h1>
      <Reveal>
        <Intro />
      </Reveal>
    </div>
  );
}

export default HeroTitle;
