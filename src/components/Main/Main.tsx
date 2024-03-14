import Gallery from "../Gallery/Gallery";
import imgMusic from "../../assets/images/spotilite-searchpage.webp";
import imgBooks from "../../assets/images/book_add - Copie.webp";
import imgKasa from "../../assets/images/_Body.webp";
import Hero from "../Hero/Hero";
import Hamburger from "../Header/Hamburger";
import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform } from "framer-motion";

const projects = [
  {
    title: "SpotiLite",
    description:
      "Une application de musique créée avec React, en utilisant l'API de Spotify pour les données, le context API pour le state management et Supabase pour les données utilisateur et l'authentification",
    image: imgMusic,
  },
  {
    title: "Mon Vieux Grimoire",
    description:
      "Créer le back-end pour un site de notation de livres avec Node JS, Express et MongoDB. Mettre en place les opérations CRUD, l'authentifcation sécurisée et le téléchargement et optimisation d'images ",
    image: imgBooks,
  },
  {
    title: "Kasa",
    description:
      "Créer le front-end pour une agence de location immobilière avec React et React Router. Mettre en place la navigation côté client et l'affichage dynamique des différents composants. Utiliser Sass pour la mise en forme.",
    image: imgKasa,
  },
];

function Main() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "start start"],
  });
  const [showHamburger, setShowHamburger] = useState<boolean>(false);

  useEffect(() => {
    function toggleHamburger() {
      if (window.scrollY > 200) setShowHamburger(true);
      else setShowHamburger(false);
    }
    window.addEventListener("scroll", toggleHamburger);

    return () => window.removeEventListener("scroll", toggleHamburger);
  }, [showHamburger]);

  return (
    <main className="text-slate-800 w-full" style={{ height: "1000vh" }}>
      <Hero ref={heroRef} />
      <Hamburger isVisible={showHamburger} />
      <Gallery projects={projects} />
      <div>
        Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Augue ut
        lectus arcu bibendum at varius. Etiam tempor orci eu lobortis elementum
        nibh tellus molestie. Risus sed vulputate odio ut enim blandit volutpat
        maecenas. Rhoncus dolor purus non enim praesent elementum facilisis leo
        vel. Consectetur lorem donec massa sapien. Rutrum tellus pellentesque eu
        tincidunt tortor aliquam nulla facilisi cras. In pellentesque massa
        placerat duis ultricies lacus sed turpis. Dui accumsan sit amet nulla
        facilisi morbi tempus. Tortor dignissim convallis aenean et tortor at.
        Dolor magna eget est lorem. Condimentum vitae sapien pellentesque
        habitant morbi tristique senectus et.
      </div>
      <div className="h-screen w-full"></div>
      <div className="h-screen w-full"></div>
    </main>
  );
}

export default Main;
