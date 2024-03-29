import { MotionValue } from "framer-motion";
import Line from "../ui/Line";
import TrackBall from "../ui/TrackBall/TrackBall";
import { useLenis } from "@studio-freight/react-lenis";
import MyLink from "../ui/MyLink";
import Reveal from "../ui/Reveal/Reveal";

function HeroBall({ x }: { x: MotionValue }) {
  const lenis = useLenis();

  return (
    <Reveal>
      <Line>
        <MyLink
          to="/#works"
          onClick={() => lenis?.scrollTo("#works")}
          aria-label="Réalisations"
        >
          <TrackBall
            size={150}
            coords={{ top: 0, right: 0, y: "-50%", x }}
            position="absolute"
          >
            RÉALISATIONS
          </TrackBall>
        </MyLink>
      </Line>
    </Reveal>
  );
}

export default HeroBall;
