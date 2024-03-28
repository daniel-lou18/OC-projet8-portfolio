import imgMusic from "../assets/images/spotilite-searchpage.webp";
import imgBooks from "../assets/images/Accueil.webp";
import imgKasa from "../assets/images/D_Fiche-Logement.webp";

export const projects = [
  {
    title: "SpotiLite",
    description:
      "Une application de musique créée avec React, en utilisant l'API de Spotify pour les données, le Context API pour le state management et Supabase pour les données utilisateur et l'authentification",
    image: imgMusic,
    websiteUrl: "https://spotilite-v1.netlify.app/",
    gitHubUrl: "https://github.com/daniel-lou18/music-app",
  },
  {
    title: "Mon Vieux Grimoire",
    description:
      "Développement du back-end pour un site de notation de livres avec Node JS, Express et MongoDB. Mise en place des opérations CRUD, de l'authentifcation sécurisée et du téléchargement d'images ",
    image: imgBooks,
    websiteUrl: "https://spotilite-v1.netlify.app/",
    gitHubUrl: "https://github.com/daniel-lou18/OC-projet7-grimoire-backend",
  },
  {
    title: "Kasa",
    description:
      "Création du front-end pour une agence de location immobilière avec React et React Router. Mise en place de la navigation côté client et l'affichage dynamique des différents composants. Utiliser Sass pour la mise en forme.",
    image: imgKasa,
    websiteUrl: "https://daniel-oc-projet6-kasa.netlify.app/",
    gitHubUrl: "https://github.com/daniel-lou18/OC-projet6-Kasa",
  },
];

export const cardsData = [
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

export const skills = [
  { name: "HTML/CSS", rating: 8 },
  { name: "JavaScript/React", rating: 8 },
  { name: "NodeJS/Express", rating: 7 },
  { name: "MongoDB/Mongoose", rating: 6 },
  { name: "TypeScript", rating: 5 },
  { name: "Sass/Tailwind", rating: 5 },
];
