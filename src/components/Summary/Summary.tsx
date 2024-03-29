import { useRef } from "react";
import Card from "./Card";
import Links from "./Links";
import { useScroll, useTransform, motion } from "framer-motion";

const cardsData = [
  {
    id: 1,
    title: "Développement web",
    text: "En plus de mon diplôme de développeur web, j'ai suivi de nombreuses formations en ligne (Udemy, App Academy) et je dispose de solides bases en programmation fondamentale (LeetCode). Je travaille en permanence sur des projets personnels.",
  },
  {
    id: 2,
    title: "Expérience",
    text: "J'ai plus de 10 ans d'expérience professionnelle en tant que traducteur indépendant français-néerlandais. Je parle également couramment l'anglais.",
  },
  {
    id: 3,
    title: "Objectif",
    text: "Mon objectif est une reconversion professionnelle orientée vers le développement web et mobile. Je suis impatient de mettre en pratique mes compétences qui évoluent continuellement.",
  },
];

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
      <h2 className="mb-12">A propos</h2>
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
