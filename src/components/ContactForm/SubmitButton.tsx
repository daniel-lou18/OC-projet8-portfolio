import { useRef } from "react";
import Line from "../ui/Line";
import TrackBall from "../ui/TrackBall/TrackBall";
import { useScroll, useTransform } from "framer-motion";

function SubmitButton() {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "start start"],
  });
  const scrollBall = useTransform(scrollYProgress, [0, 1], ["-70%", "-10%"]);

  return (
    <div className="mt-24">
      <Line>
        <button type="submit" className="w-full">
          <TrackBall
            size="10rem"
            position="absolute"
            coords={{ top: 0, right: 0, y: "calc(-50% - 20px)", x: scrollBall }}
          >
            Envoyer
          </TrackBall>
        </button>
      </Line>
    </div>
  );
}

export default SubmitButton;
