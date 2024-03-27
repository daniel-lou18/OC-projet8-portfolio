import { useRef } from "react";
import Line from "../ui/Line";
import TrackBall from "../ui/TrackBall/TrackBall";
import { useScroll, useTransform } from "framer-motion";

type SubmitButtonProps = {
  isLoading: boolean;
  error: string;
  isSuccess: boolean;
};

function SubmitButton({ isLoading, error, isSuccess }: SubmitButtonProps) {
  const footerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "start start"],
  });
  const scrollBall = useTransform(scrollYProgress, [0, 1], ["-70%", "-10%"]);

  return (
    <div className="relative mt-24" ref={footerRef}>
      {!isLoading && error && (
        <p className="absolute left-0 top-1 text-red-700">{error}</p>
      )}
      {!isLoading && !error && isSuccess && (
        <p className="absolute left-0 top-1 text-teal-700">
          {"Votre message a été envoyé. Je vous réponds ASAP."}
        </p>
      )}
      <Line>
        <button type="submit" className="w-full">
          <TrackBall
            size="10rem"
            position="absolute"
            coords={{ top: 0, right: 0, y: "calc(-50% - 20px)", x: scrollBall }}
          >
            {`${isLoading ? "En cours ..." : "Envoyer"}`}
          </TrackBall>
        </button>
      </Line>
    </div>
  );
}

export default SubmitButton;
