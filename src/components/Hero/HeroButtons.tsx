import { useLenis } from "@studio-freight/react-lenis";
import Button from "../ui/Button/Button";
import Reveal from "../ui/Reveal/Reveal";
import MyLink from "../ui/MyLink";
import monCV from "../../assets/Derudder_Daniel_CV_2024.pdf";

function HeroButtons() {
  const lenis = useLenis();

  return (
    <div className="flex gap-8 py-8 pt-24 md:my-4 md:pt-0">
      <Reveal style="fit" amount={0.1}>
        <Button className="bigPill" type="anchor" download={true} href={monCV}>
          Télécharger mon CV
        </Button>
      </Reveal>
      <Reveal style="fit" amount={0.1}>
        <MyLink
          to="/#about"
          onClick={() => lenis?.scrollTo("#about")}
          aria-label="A Propos"
        >
          <Button
            className="bigRound"
            type="button"
            aria-label="arrow-down-right"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-down-right"
            >
              <line x1="7" y1="7" x2="17" y2="17" />
              <polyline points="17 7 17 17 7 17" />
            </svg>
          </Button>
        </MyLink>
      </Reveal>
    </div>
  );
}

export default HeroButtons;
