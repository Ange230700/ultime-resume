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
    text: "+33 7 59 80 23 43",
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
  void_null: "https://void-null-front.vercel.app/",
  abyss: "https://abyss-front-two.vercel.app/",
  vacuum: "https://cleared-front.vercel.app",
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
      "- Manipulation de données média",
    ],
  },
  {
    experience_id: "abyss",
    project_description: `Plateforme de vente de meubles: _[Abyss](${projectsLinks.abyss})_`,
    tasks: [
      "- Projet personnel | TypeScript, Angular, PrimeNg, Prisma, NestJs",
      "- Documentation API avec Swagger",
    ],
  },
  {
    experience_id: "vacuum",
    project_description: `Back-office pour une association de collectes de déchets: _[Vacuum](${projectsLinks.vacuum})_`,
    tasks: [
      "- Projet personnel | TypeScript, Vue, PrimeVue, Express, Prisma",
      "- Clean architecture",
    ],
  },
  {
    experience_id: "daf",
    project_description: `Interfaces des enquêtes en cours du FBI: _[DAF](${projectsLinks.daf})_`,
    tasks: [
      "- Équipe de 3 personnes | TypeScript, React, PrimeReact, Chart.js",
      "- Data visualisation avec Chart.js",
    ],
  },
  // {
  //   experience_id: "void_null",
  //   project_description: `Gestionnaire d'items: _[VoidNull](${projectsLinks.void_null})_`,
  //   tasks: [
  //     "- Projet personnel | TypeScript, Angular, NestJS, MySQL",
  //     "- API REST CRUD",
  //     "- Pagination",
  //   ],
  // },
  // {
  //   experience_id: "mastermind",
  //   project_description: `Jeu de logique: _[Mastermind](${projectsLinks.mastermind})_`,
  //   tasks: [
  //     "- Projet personnel | TypeScript, Vue, PrimeVue, TailwindCSS",
  //     "- Logique et ordre d'exécution",
  //     "- Notifications et messages",
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
  "- Apprentissage autodidacte du piano",
  "- Basket-ball",
  "- Lores Marvel et DC Comics",
];

export const miscellaneousList: string[] = [
  "- Préparation du titre RNCP de niveau 6 Concepteur-Développeur d’Applications Web & Mobile",
  "- Docker",
  "- CI/CD (Vercel, Render, AlwaysData)",
  "- Planification de projets (Github projects, Jira)",
  "- Maquettage et Wireframing (Figma)",
];
