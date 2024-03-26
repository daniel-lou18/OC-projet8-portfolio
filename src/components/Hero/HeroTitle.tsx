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
    <div className="h-fit flex flex-col gap-8 md:gap-0 mb-32 md:mb-0">
      <h1>
        <Reveal>
          <div className="text-5xl md:text-8xl tracking-tighter">
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
