// src\app\data\lists.ts

export interface SocialLink {
  link: string;
  text: string;
  id: string;
  icon?: string;
}

export const socialsList: SocialLink[] = [
  {
    link: "https://www.linkedin.com/in/ange-kouakou/",
    text: "LinkedIn",
    id: "linkedin-link",
    icon: "pi pi-linkedin",
  },
  {
    link: "https://github.com/Ange230700",
    text: "GitHub",
    id: "github-link",
    icon: "pi pi-github",
  },
  {
    link: "https://ultime-portfolio.vercel.app/",
    text: "Portfolio",
    id: "portfolio-link",
    icon: "pi pi-globe",
  },
  {
    link: "mailto:kouakouangeericstephane@gmail.com",
    text: "Email",
    id: "mail-link",
    icon: "pi pi-envelope",
  },
  {
    link: "tel:+33759802343",
    text: "Téléphone",
    id: "phone-link",
    icon: "pi pi-phone",
  },
  {
    link: "/",
    text: "Mobilité toute France",
    id: "location",
    icon: "pi pi-map-marker",
  },
];

export interface HardSkill {
  label: string;
  icon: string;
}

export const hardSkills: HardSkill[] = [
  { label: "TypeScript", icon: "pi pi-code" },
  { label: "React", icon: "pi pi-code" },
  { label: "Next.js", icon: "pi pi-code" },
  { label: "Angular", icon: "pi pi-code" },
  { label: "Vue", icon: "pi pi-code" },
  { label: "Nuxt.js", icon: "pi pi-code" },
  { label: "NodeJS", icon: "pi pi-code" },
  { label: "Express", icon: "pi pi-code" },
  { label: "NestJS", icon: "pi pi-code" },
  { label: "Prisma", icon: "pi pi-code" },
  { label: "MySQL", icon: "pi pi-code" },
  // { label: "JavaScript", icon: "pi pi-code" },
  // { label: "PHP", icon: "pi pi-code" },
  // { label: "Symfony", icon: "pi pi-code" },
  // { label: "Java", icon: "pi pi-code" },
  // { label: "SpringBoot", icon: "pi pi-code" },
];

export const softSkills: string[] = [
  "Travail en équipe",
  "Autonomie",
  "Adaptabilité",
  "Rigueur",
  "Agile/SCRUM",
];

export const projectsLinks: Record<string, string> = {
  daf: "https://ultime-daf.vercel.app/",
  quiz: "https://void-quiz.vercel.app/",
  morse_translator: "https://github.com/Ange230700/04_can_you_speak_morse",
  mastermind: "https://ultime-mastermind.vercel.app/",
  back_office: "https://github.com/Ange230700/back-office-app",
  ott: "https://ultime-streamia.vercel.app/",
  furniture: "https://github.com/Ange230700/luxury_camps",
  motus: "https://ultime-motus.vercel.app/",
};

export interface Experience {
  experience_id: string;
  project_description: string;
  tasks: string[];
}

export const experiencesList: Experience[] = [
  {
    experience_id: "ott",
    project_description: `Plateforme de service de vidéos: _[Streamia](${projectsLinks.ott})_`,
    tasks: [
      "- Projet personnel | TypeScript, Next.js, TailwindCSS, React, PrimeReact, Prisma, MySQL",
      "- Authentification avec token et gestion des droits d’utilisateurs",
      "- Manipulation de données média",
    ],
  },
  {
    experience_id: "daf",
    project_description: `Interfaces des enquêtes en cours du FBI: _[DAF](${projectsLinks.daf})_`,
    tasks: [
      "- Équipe de 3 personnes | TypeScript, React, PrimeReact, TailwindCSS, Chart.js",
      "- Récupération des données via l'API du FBI",
      "- Data visualisation avec Chart.js",
    ],
  },
  {
    experience_id: "quiz",
    project_description: `Quiz multi-thèmes: _[Void Trivia](${projectsLinks.quiz})_`,
    tasks: [
      "- Équipe de 3 personnes | TypeScript, Angular, PrimeNg, TailwindCSS",
      "- Rituels agiles: daily meeting, retrospective",
      "- Modélisation UI/UX avec Figma",
    ],
  },
  {
    experience_id: "mastermind",
    project_description: `Jeu de logique: _[Mastermind](${projectsLinks.mastermind})_`,
    tasks: [
      "- Projet personnel | TypeScript, Vue, PrimeVue, TailwindCSS",
      "- Logique et ordre d'exécution",
      "- Notifications et messages",
    ],
  },
  // {
  //   experience_id: "motus",
  //   project_description: `Jeu de mots: [Motus](${projectsLinks.motus})`,
  //   tasks: [
  //     "- Projet personnel | TypeScript, Nuxt, TailwindCSS, PrimeVue",
  //     "- Structure de données",
  //     // "- ",
  //   ],
  // },
  // {
  //   experience_id: "furniture",
  //   project_description: `Plateforme de vente de meubles: [voir code source ici](${projectsLinks.furniture})`,
  //   tasks: [
  //     "- Équipe de 6 personnes | 2 semaines | SpringBoot, Angular/Typescript, TailwindCSS, PrimeNg",
  //     "- Modélisation UML",
  //     "- Programmation orientée objet",
  //   ],
  // },
  // {
  //   experience_id: "back_office",
  //   project_description: `Back-office pour une association de collectes de déchets: [voir code source ici](${projectsLinks.back_office})`,
  //   tasks: [
  //     "- Équipe de 3 personnes | 2 semaines | PHP, Twig, Symfony",
  //     "- Authentification basique et gestion des droits d’utilisateurs",
  //     "- Opérations CRUD",
  //   ],
  // },
];

export interface Education {
  formation_id: number;
  formation_title: string;
  school: string;
  formation_span: string;
}

export const educationList: Education[] = [
  {
    formation_id: 7,
    formation_title: "Formation Développeur Web et Mobile",
    school: "ADA Tech School",
    formation_span: "10/2024 - 06/2025",
  },
  {
    formation_id: 6,
    formation_title: "Bootcamp Développement Web",
    school: "Wild Code School",
    formation_span: "10/2023 - 02/2024",
  },
  {
    formation_id: 5,
    formation_title: "Bachelor informatique",
    school: "Ynov Campus de Nantes",
    formation_span: "09/2022 - 05/2023",
  },
  {
    formation_id: 4,
    formation_title: "Prépa informatique intégrée",
    school: "CESI Toulouse",
    formation_span: "09/2021 - 05/2022",
  },
  {
    formation_id: 3,
    formation_title: "Formation électronique embarqué",
    school: "CESI Toulouse",
    formation_span: "09/2020 - 05/2021",
  },
  {
    formation_id: 2,
    formation_title: "Prépa technologique intégrée",
    school: "CESI Saint-Nazaire",
    formation_span: "09/2019 - 05/2020",
  },
  {
    formation_id: 1,
    formation_title: "Cycle Préparatoire Scientifique",
    school: "LFBP Abidjan, Côte d'Ivoire",
    formation_span: "09/2017 - 07/2019",
  },
];

export const hobbiesList: string[] = [
  "Apprentissage autodidacte du piano",
  "Basket-ball",
];
