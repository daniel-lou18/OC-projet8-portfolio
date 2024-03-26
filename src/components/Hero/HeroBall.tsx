import { MotionValue } from "framer-motion";
import Line from "../ui/Line";
import TrackBall from "../ui/TrackBall/TrackBall";
import { useLenis } from "@studio-freight/react-lenis";
import MyLink from "../ui/MyLink";

function HeroBall({ x }: { x: MotionValue }) {
  const lenis = useLenis();

  return (
    <Line>
      <MyLink to="/#works" onClick={() => lenis?.scrollTo("#works")}>
        <TrackBall
          size={150}
          coords={{ top: 0, right: 0, y: "-50%", x }}
          position="absolute"
        >
          RÉALISATIONS
        </TrackBall>
      </MyLink>
    </Line>
  );
}

export default HeroBall;
