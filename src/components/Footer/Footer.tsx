import { useScroll, motion, useTransform } from "framer-motion";
import HorMovText from "../HorizMovText/HorMovText";
import TrackBall from "../ui/TrackBall";
import { useRef } from "react";
import Button from "../ui/Button/Button";

function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "start start"],
  });
  const scrollY = useTransform(scrollYProgress, [0.5, 1], [200, 0]);

  return (
    <motion.footer
      className="h-screen w-full bg-slate-200 pt-56 relative overflow-hidden"
      ref={footerRef}
      style={{ y: scrollY }}
    >
      <div className="px-48 w-full">
        <h3 className="text-8xl pb-28 border-b-slate-300 border-b-2 border-solid relative">
          Me contacter
        </h3>
        <TrackBall size="10rem">C'est par ici !</TrackBall>
        <div className="flex pt-16 gap-8">
          <Button>info@danielderudder.com</Button>
          <Button>+33 (0)6 58 42 46 50</Button>
        </div>
      </div>
      <HorMovText>Travaillons ensemble !</HorMovText>
    </motion.footer>
  );
}

export default Footer;
