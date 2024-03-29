import Gallery from "../Gallery/Gallery";
import imgMusic from "../../assets/images/spotilite-searchpage.webp";
import imgBooks from "../../assets/images/book_add - Copie.webp";
import imgKasa from "../../assets/images/_Body.webp";
import Hero from "../Hero/Hero";
import Skills from "../Skills/Skills";
import Summary from "../Summary/Summary";

const projects = [
  {
    title: "SpotiLite",
    description:
      "Une application de musique créée avec React, en utilisant l'API de Spotify pour les données, le context API pour le state management et Supabase pour les données utilisateur et l'authentification",
    image: imgMusic,
    websiteUrl: "https://spotilite-v1.netlify.app/",
    gitHubUrl: "https://github.com/daniel-lou18/music-app",
  },
  {
    title: "Mon Vieux Grimoire",
    description:
      "Créer le back-end pour un site de notation de livres avec Node JS, Express et MongoDB. Mettre en place les opérations CRUD, l'authentifcation sécurisée et le téléchargement et optimisation d'images ",
    image: imgBooks,
    websiteUrl: "https://spotilite-v1.netlify.app/",
    gitHubUrl: "https://github.com/daniel-lou18/OC-projet7-grimoire-backend",
  },
  {
    title: "Kasa",
    description:
      "Créer le front-end pour une agence de location immobilière avec React et React Router. Mettre en place la navigation côté client et l'affichage dynamique des différents composants. Utiliser Sass pour la mise en forme.",
    image: imgKasa,
    websiteUrl: "https://daniel-oc-projet6-kasa.netlify.app/",
    gitHubUrl: "https://github.com/daniel-lou18/OC-projet6-Kasa",
  },
];

function Main() {
  return (
    <main className="w-full bg-gradient-to-br from-neutral-100 to-neutral-300 text-slate-950">
      <div className="relative overflow-hidden">
        <Hero />
        <Summary />
      </div>
      <Gallery projects={projects} />
      <Skills />
    </main>
  );
}

export default Main;
