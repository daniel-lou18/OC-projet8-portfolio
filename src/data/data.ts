import imgMusic from "../assets/images/spotilite-searchpage.webp";
import imgBooks from "../assets/images/Accueil.webp";
import imgKasa from "../assets/images/D_Fiche-Logement.webp";

export const projects = [
  {
    title: "SpotiLite",
    description:
      "Application musicale React utilisant l'API de Spotify pour les données audio, Context API pour la gestion d'état et Supabase pour l'authentification et les données utilisateur. Interface utilisateur intuitive et réactive pour rechercher, écouter et découvrir de la musique.",
    image: imgMusic,
    websiteUrl: "https://spotilite-v1.netlify.app/",
    gitHubUrl: "https://github.com/daniel-lou18/music-app",
  },
  {
    title: "Mon Vieux Grimoire",
    description:
      "Développement d'un back-end robuste et évolutif pour un site web de notation de livres, en utilisant Node JS, Express et MongoDB. J'ai implémenté les opérations CRUD, une authentification sécurisée à l'aide de JSON Web Tokens, et le téléchargement et le stockage d'images.",
    image: imgBooks,
    websiteUrl: "https://github.com/daniel-lou18/OC-projet7-grimoire-backend/",
    gitHubUrl: "https://github.com/daniel-lou18/OC-projet7-grimoire-backend",
  },
  {
    title: "Kasa",
    description:
      "Création du front-end pour une agence de location immobilière en utilisant React et React Router. Mise en place d'une navigation fluide côté client, ainsi qu'un affichage dynamique des différents composants. L'utilisation de Sass facilite la maintenance du code CSS.",
    image: imgKasa,
    websiteUrl: "https://daniel-oc-projet6-kasa.netlify.app/",
    gitHubUrl: "https://github.com/daniel-lou18/OC-projet6-Kasa",
  },
];

export const cardsData = [
  {
    id: 1,
    title: "Développement web",
    text: "En plus de mon diplôme de développeur web, j'ai renforcé mes compétences en suivant des formations en ligne auprès de plateformes réputées telles qu'Udemy et App Academy. J'ai également acquis de solides bases en programmation fondamentale (ex. LeetCode). Je m'efforce constamment d'améliorer mes compétences en travaillant sur des projets personnels.",
  },
  {
    id: 2,
    title: "Expérience",
    text: "Fort de plus de 10 ans d'expérience en tant que traducteur indépendant français-néerlandais, je maîtrise parfaitement ces deux langues. Mon expertise linguistique s'étend également à l'anglais, que je parle couramment. Mon ancien site professionnel témoigne de mon engagement envers la qualité et la précision dans mes traductions :",
  },
  {
    id: 3,
    title: "Objectif",
    text: "Mon objectif est de réussir ma reconversion professionnelle dans le domaine du développement web. Je suis passionné par les nouvelles technologies et je suis déterminé à mettre en pratique mes compétences en constante évolution. Je suis impatient de relever de nouveaux défis et de contribuer à des projets innovants.",
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

export const metaTagsData = {
  title: "Daniel Derudder - Développeur web",
  description:
    "Développeur front-end trilingue sur Paris, je crée des sites internet et applications web",
  name: "Daniel Derudder",
  type: "website",
  url: "https://danielderudder.netlify.app/",
  image:
    "https://danielderudder.netlify.app/avatar-(ProfilePictureMaker.com).png",
};

export const structuredData = {
  "@context": "http://schema.org",
  "@type": "Person",
  name: "Daniel Derudder",
  jobTitle: "Développeur web",
  url: "https://danielderudder.netlify.app/",
  sameAs: [
    "https://github.com/daniel-lou18",
    "https://www.linkedin.com/in/daniel-derudder",
  ],
  description:
    "Développeur front-end trilingue sur Paris, je crée des sites internet et applications web",
  image:
    "https://danielderudder.netlify.app/avatar-(ProfilePictureMaker.com).png",
  address: {
    "@type": "136 rue Lamarck",
    addressLocality: "Paris",
    addressRegion: "Île de France",
    addressCountry: "France",
  },
  email: "danielderudder@gmail.com",
  telephone: "06 58 42 46 50",
};
