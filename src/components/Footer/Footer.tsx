import { useScroll, motion, useTransform } from "framer-motion";
import HorMovText from "../HorizMovText/HorMovText";
import TrackBall from "../ui/TrackBall/TrackBall";
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
      className="h-screen w-full bg-neutral-100 pt-56 relative overflow-hidden"
      ref={footerRef}
      style={{ y: scrollY }}
    >
      <div className="px-[8%] w-full">
        <h2 className="text-4xl md:text-8xl pb-28 border-b-neutral-300 border-b-2 border-solid relative contact-title">
          Me contacter
        </h2>
        <TrackBall size="10rem" linkTo="/contact" top={350} right={250}>
          C'est par ici !
        </TrackBall>
        <div className="flex flex-col md:flex-row pt-16 gap-8">
          <Button>info@danielderudder.com</Button>
          <Button>+33 (0)6 58 42 46 50</Button>
        </div>
      </div>
      <HorMovText>Travaillons ensemble !</HorMovText>
    </motion.footer>
  );
}

export default Footer;
