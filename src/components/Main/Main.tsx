import Gallery from "../Gallery/Gallery";
import imgMusic from "../../assets/images/spotilite-searchpage.webp";
import imgBooks from "../../assets/images/book_add - Copie.webp";
import imgKasa from "../../assets/images/_Body.webp";
import Hero from "../Hero/HeroV2";
import Skills from "../Skills/Skills";

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
  return (
    <main className=" w-full">
      <Hero />
      <Gallery projects={projects} />
      <Skills />
    </main>
  );
}

export default Main;
