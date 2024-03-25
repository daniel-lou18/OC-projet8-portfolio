import { useScroll, motion, useTransform } from "framer-motion";
import HorMovText from "../HorizMovText/HorMovText";
import TrackBall from "../ui/TrackBall/TrackBall";
import { useRef } from "react";
import Button from "../ui/Button/Button";
import Line from "../ui/Line";

function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "start start"],
  });
  const scrollY = useTransform(scrollYProgress, [0, 1], [200, 0]);
  const scrollBall = useTransform(scrollYProgress, [0, 1], ["-70%", "-10%"]);

  return (
    <motion.footer
      className="h-screen w-full bg-neutral-100 pt-56 relative overflow-hidden"
      ref={footerRef}
      style={{ y: scrollY }}
    >
      <div className="px-[8%] w-full">
        <h2 className="text-4xl md:text-8xl pb-28 relative contact-title">
          Me contacter
        </h2>
        <Line>
          <TrackBall
            size="10rem"
            linkTo="/contact"
            position="absolute"
            coords={{ top: 0, right: 0, y: "-50%", x: scrollBall }}
          >
            C'est par ici !
          </TrackBall>
        </Line>
        <div className="flex flex-col md:flex-row pt-28 md:pt-16 gap-8">
          <Button>info@danielderudder.com</Button>
          <Button>+33 (0)6 58 42 46 50</Button>
        </div>
      </div>
      <HorMovText>Travaillons ensemble !</HorMovText>
    </motion.footer>
  );
}

export default Footer;
