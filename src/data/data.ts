export const cardsData = [
  {
    id: 1,
    title: "Développement web",
    text: "En plus de mon diplôme de développeur web, j'ai renforcé mes compétences en suivant des formations en ligne auprès de plateformes réputées telles qu'Udemy et App Academy. J'ai également acquis de solides bases en programmation fondamentale (ex. LeetCode). Je m'efforce constamment d'améliorer mes compétences en travaillant sur des projets personnels.",
  },
  {
    id: 2,
    title: "Expérience",
    text: "Fort de plus de 10 ans d'expérience en tant que traducteur indépendant français-néerlandais, je maîtrise parfaitement ces deux langues. Mon expertise linguistique s'étend également à l'anglais, que je parle couramment. Mon ancien site professionnel témoigne de mon engagement envers la qualité et la précision dans mes traductions.",
  },
  {
    id: 3,
    title: "Objectif",
    text: "Mon objectif est de réussir ma reconversion professionnelle dans le domaine du développement web. Je suis passionné par les nouvelles technologies et je suis déterminé à mettre en pratique mes compétences en constante évolution. Je suis impatient de relever de nouveaux défis et de contribuer à des projets innovants.",
  },
];

export const skills = [
  { name: "HTML 5 & CSS 3", rating: 8 },
  { name: "JavaScript, React 18 & Next.js 14", rating: 8 },
  { name: "TypeScript", rating: 7 },
  { name: "Redux (RTK), TanStack Query", rating: 6 },
  { name: "Tailwind CSS, Shadcn & Sass", rating: 6 },
  { name: "Node, Express & NestJS", rating: 5 },
  { name: "Prisma, PostgreSQL & MongoDB", rating: 5 },
  { name: "Jest & React Testing Library", rating: 5 },
  { name: "Git & GitHub Actions (CI/CD)", rating: 4 },
  { name: "Docker & AWS Lambda", rating: 3 },
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
