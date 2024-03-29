import { useRef } from "react";
import Card from "./Card";
import Links from "./Links";
import { useScroll, useTransform, motion } from "framer-motion";
import { cardsData } from "../../data/data";

function Summary() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const position = useTransform(scrollYProgress, [0, 0.5], [0, -150]);

  return (
    <motion.section
      className="w-full px-[8%] pt-48 lg:h-screen"
      ref={ref}
      style={{ y: position }}
      id="about"
    >
      <h3 className="mb-12">A propos</h3>
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
        {cardsData.map((cardData) => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
      <Links />
    </motion.section>
  );
}

export default Summary;
