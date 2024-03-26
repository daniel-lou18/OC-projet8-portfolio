import { useRef } from "react";
import Card from "./Card";
import Links from "./Links";
import { useScroll, useTransform, motion } from "framer-motion";

const cardsData = [
  {
    id: 1,
    title: "Développement web",
    text: "En plus de formation diplômante de développeur web, j'ai suivi de nombreuses formations (Udemy, App Academy) sur le JavaScript, le TypeScript, React et la programmation fondamentale (LeetCode). Je travaille en permanence sur des projets personnels.",
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
      className="md:h-screen w-full pt-32 px-[8%]"
      ref={ref}
      style={{ y: position }}
      id="about"
    >
      <h2 className="mb-12">A propos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        {cardsData.map((cardData) => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
      <Links />
    </motion.section>
  );
}

export default Summary;
