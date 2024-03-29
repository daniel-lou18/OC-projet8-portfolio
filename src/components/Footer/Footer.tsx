import { useScroll, motion, useTransform } from "framer-motion";
import HorMovText from "../ui/HorizMovText/HorMovText";
import TrackBall from "../ui/TrackBall/TrackBall";
import { useRef } from "react";
import Button from "../ui/Button/Button";
import Line from "../ui/Line";
import MyLink from "../ui/MyLink";

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
      className="relative h-screen w-full overflow-hidden bg-neutral-100 pt-56 text-slate-950"
      ref={footerRef}
      style={{ y: scrollY }}
    >
      <div className="w-full px-[8%]">
        <h2 className="contact-title relative pb-28 text-4xl md:text-8xl">
          Me contacter
        </h2>
        <Line>
          <MyLink to="/contact" onClick={() => window.scrollTo({ top: 0 })}>
            <TrackBall
              size="10rem"
              position="absolute"
              coords={{ top: 0, right: 0, y: "-50%", x: scrollBall }}
            >
              C'est par ici !
            </TrackBall>
          </MyLink>
        </Line>
        <div className="flex flex-col gap-8 pt-28 md:flex-row md:pt-16">
          <Button
            className="regular"
            type="anchor"
            href="mailto:danielderudder@gmail.com"
          >
            danielderudder@gmail.com
          </Button>
          <Button className="regular" type="anchor" href="tel:+33658424650">
            +33 (0)6 58 42 46 50
          </Button>
        </div>
      </div>
      <HorMovText>Travaillons ensemble !</HorMovText>
      <p className="absolute bottom-4 px-[8%] text-sm text-gray-200">
        © 2024 Daniel Derudder
      </p>
    </motion.footer>
  );
}

export default Footer;
