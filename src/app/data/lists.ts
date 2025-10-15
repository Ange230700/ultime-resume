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
    text: "https://www.linkedin.com/in/ange-kouakou/",
    id: "linkedin-link",
    icon: "pi pi-linkedin",
  },
  {
    link: "https://github.com/Ange230700",
    text: "https://github.com/Ange230700",
    id: "github-link",
    icon: "pi pi-github",
  },
  {
    link: "https://ultime-portfolio.vercel.app/",
    text: "https://ultime-portfolio.vercel.app/",
    id: "portfolio-link",
    icon: "pi pi-globe",
  },
  // {
  //   link: "mailto:kouakouangeericstephane@gmail.com",
  //   text: "Email",
  //   id: "mail-link",
  //   icon: "pi pi-envelope",
  // },
  // {
  //   link: "tel:+33759802343",
  //   text: "+33 7 59 80 23 43",
  //   id: "phone-link",
  //   icon: "pi pi-phone",
  // },
  // {
  //   link: "/",
  //   text: "Available across France",
  //   id: "location",
  //   icon: "pi pi-map-marker",
  // },
];

export interface HardSkill {
  label: string;
  icon: string;
}

export const hardSkills: HardSkill[] = [
  { label: "TypeScript", icon: "pi pi-code" },
  { label: "JavaScript", icon: "pi pi-code" },
  { label: "React", icon: "pi pi-code" },
  { label: "React Native", icon: "pi pi-code" },
  { label: "Next.js", icon: "pi pi-code" },
  { label: "Angular", icon: "pi pi-code" },
  { label: "Vue", icon: "pi pi-code" },
  { label: "Nuxt.js", icon: "pi pi-code" },
  { label: "NodeJS", icon: "pi pi-code" },
  { label: "Express", icon: "pi pi-code" },
  { label: "NestJS", icon: "pi pi-code" },
  { label: "Prisma", icon: "pi pi-code" },
  { label: "MySQL", icon: "pi pi-code" },
];

export const softSkills: string[] = [
  "Travail en équipe",
  "Autonomie",
  "Adaptabilité",
  "Rigueur",
];

export const projectsLinks: Record<string, string> = {
  streamia: "https://ultime-streamia.vercel.app/",
  abyss: "https://abyss-front-two.vercel.app/",
  vacuum: "https://cleared-front.vercel.app",
  shaka: "https://shaka-frontend.vercel.app/",
  nihil: "https://nihil-frontend.vercel.app/",
  chefitup: "https://chef-it-up-tau.vercel.app/",
};

export interface Experience {
  experience_id: string;
  project_description: string;
  tasks: string[];
}

export const experiencesList: Experience[] = [
  {
    experience_id: "streamia",
    project_description: `Plateforme de streaming vidéo: _[Streamia](${projectsLinks.streamia})_`,
    tasks: [
      "- TypeScript, Next.js, PrimeReact, Prisma",
      "- Manipulation de données média",
    ],
  },
  {
    experience_id: "abyss",
    project_description: `Furniture sales platform: _[Abyss](${projectsLinks.abyss})_`,
    tasks: [
      "- TypeScript, Angular, PrimeNG, NestJS, Prisma",
      "- Documentation d’API avec Swagger",
    ],
  },
  {
    experience_id: "vacuum",
    project_description: `Back-office pour une association de collectes de déchets: _[Vacuum](${projectsLinks.vacuum})_`,
    tasks: [
      "- TypeScript, Vue, PrimeVue, Express, Prisma",
      "- Clean architecture",
    ],
  },
  {
    experience_id: "shaka",
    project_description: `Liste des spots de surf dans le monde: _[Shaka](${projectsLinks.shaka})_`,
    tasks: [
      "- TypeScript, React Native, Expo, NestJS, Prisma",
      "- Développement d’une application mobile",
    ],
  },
  {
    experience_id: "nihil",
    project_description: `Réseau social: _[Nihil](${projectsLinks.nihil})_`,
    tasks: [
      "- TypeScript, React, PrimeReact, Express, Prisma",
      "- Microservices Docker et monorepo Nx",
    ],
  },
  {
    experience_id: "chefitup",
    project_description: `Plateforme de recettes de cuisine: _[Chef It Up](${projectsLinks.chefitup})_`,
    tasks: [
      "- TypeScript, Nuxt.js, PrimeVue, Prisma",
      "- Utilisation d’un ORM",
    ],
  },
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
    school: "ADA Tech School Nantes, France",
    formation_span: "10/2024 - 06/2025",
  },
  {
    formation_id: 6,
    formation_title: "Bootcamp Développement Web",
    school: "Wild Code School Nantes, France",
    formation_span: "10/2023 - 02/2024",
  },
  {
    formation_id: 5,
    formation_title: "Formation en informatique",
    school: "Ynov Campus Nantes, France",
    formation_span: "09/2022 - 05/2023",
  },
  {
    formation_id: 4,
    formation_title: "Prépa intégrée en informatique",
    school: "CESI Toulouse, France",
    formation_span: "09/2021 - 05/2022",
  },
  {
    formation_id: 3,
    formation_title: "Formation en électronique embarquée",
    school: "CESI Toulouse, France",
    formation_span: "09/2020 - 05/2021",
  },
  {
    formation_id: 2,
    formation_title: "Prépa technologique intégrée",
    school: "CESI Saint-Nazaire, France",
    formation_span: "09/2019 - 05/2020",
  },
  {
    formation_id: 1,
    formation_title: "Cycle préparatoire scientifique",
    school: "LFBP Abidjan, Côte d'Ivoire",
    formation_span: "09/2017 - 07/2019",
  },
  {
    formation_id: 0,
    formation_title: "Baccalauréat scientifique",
    school: "Côte d'Ivoire",
    formation_span: "2017",
  },
];

export const hobbiesList: string[] = ["- NBA", "- Lore Marvel et DC Comics"];

export const miscellaneousList: string[] = [
  "- Docker",
  "- Hébergement (Vercel, Render, AlwaysData)",
  "- CI/CD (GitHub Actions, Husky)",
  "- Planification de projets (GitHub Projects, Jira)",
  "- Maquettage et wireframing (Figma)",
  "- Monorepo Nx",
];
