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
  "Teamwork",
  "Autonomy",
  "Adaptability",
  "Rigor",
  "Pedagogy",
  "Agile/SCRUM",
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
    project_description: `Video streaming platform: _[Streamia](${projectsLinks.streamia})_`,
    tasks: [
      "- TypeScript, Next.js, PrimeReact, Prisma",
      "- Media data handling",
    ],
  },
  {
    experience_id: "abyss",
    project_description: `Furniture sales platform: _[Abyss](${projectsLinks.abyss})_`,
    tasks: [
      "- TypeScript, Angular, PrimeNG, NestJS, Prisma",
      "- API documentation with Swagger",
    ],
  },
  {
    experience_id: "vacuum",
    project_description: `Back-office for a waste collection association: _[Vacuum](${projectsLinks.vacuum})_`,
    tasks: [
      "- TypeScript, Vue, PrimeVue, Express, Prisma",
      "- Clean architecture",
    ],
  },
  {
    experience_id: "shaka",
    project_description: `List of surf spots around the world: _[Shaka](${projectsLinks.shaka})_`,
    tasks: [
      "- TypeScript, React Native, Expo, NestJS, Prisma",
      "- Mobile application development",
    ],
  },
  {
    experience_id: "nihil",
    project_description: `Social network: _[Nihil](${projectsLinks.nihil})_`,
    tasks: [
      "- TypeScript, React, PrimeReact, Express, Prisma",
      "- Docker microservices and Nx monorepo setup",
    ],
  },
  {
    experience_id: "chefitup",
    project_description: `Cooking recipe platform: _[Chef It Up](${projectsLinks.chefitup})_`,
    tasks: ["- TypeScript, Nuxt.js, PrimeVue, Prisma", "- ORM implementation"],
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
    formation_title: "Web and Mobile Developer Training",
    school: "ADA Tech School, France",
    formation_span: "10/2024 - 06/2025",
  },
  {
    formation_id: 6,
    formation_title: "Web Development Bootcamp",
    school: "Wild Code School, France",
    formation_span: "10/2023 - 02/2024",
  },
  {
    formation_id: 5,
    formation_title: "Bachelor’s Degree in Computer Science",
    school: "Ynov Campus Nantes, France",
    formation_span: "09/2022 - 05/2023",
  },
  {
    formation_id: 4,
    formation_title: "Integrated Computer Science Preparatory Program",
    school: "CESI Toulouse, France",
    formation_span: "09/2021 - 05/2022",
  },
  {
    formation_id: 3,
    formation_title: "Embedded Electronics Training",
    school: "CESI Toulouse, France",
    formation_span: "09/2020 - 05/2021",
  },
  {
    formation_id: 2,
    formation_title: "Integrated Technological Preparatory Program",
    school: "CESI Saint-Nazaire, France",
    formation_span: "09/2019 - 05/2020",
  },
  {
    formation_id: 1,
    formation_title: "Scientific Preparatory Cycle",
    school: "LFBP Abidjan, Côte d'Ivoire",
    formation_span: "09/2017 - 07/2019",
  },
  {
    formation_id: 0,
    formation_title: "Scientific Baccalaureate",
    school: "Côte d'Ivoire",
    formation_span: "2017",
  },
];

export const hobbiesList: string[] = ["- NBA", "- Marvel and DC Comics lore"];

export const miscellaneousList: string[] = [
  "- Preparing for the RNCP Level 6 certification — Web & Mobile Application Developer",
  "- Docker",
  "- Hosting (Vercel, Render, AlwaysData)",
  "- CI/CD (GitHub Actions, Husky)",
  "- Project Planning (GitHub Projects, Jira)",
  "- Mockups and Wireframing (Figma)",
  "- Nx Monorepo",
];
