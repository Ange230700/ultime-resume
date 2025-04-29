// src\app\data\lists.ts

export interface SocialLink {
  link: string;
  text: string;
  id: string;
}

export const socialsList: SocialLink[] = [
  {
    link: "https://www.linkedin.com/in/ange-kouakou/",
    text: "LinkedIn",
    id: "linkedin-link",
  },
  {
    link: "https://github.com/Ange230700",
    text: "GitHub",
    id: "github-link",
  },
  {
    link: "https://the-real-portfolio-client.vercel.app/",
    text: "Portfolio",
    id: "portfolio-link",
  },
  {
    link: "mailto:kouakouangeericstephane@gmail.com",
    text: "kouakouangeericstephane@gmail.com",
    id: "mail-link",
  },
  {
    link: "tel:+33759802343",
    text: "+33 7 59 80 23 43",
    id: "phone-link",
  },
  {
    link: "/",
    text: "Nantes",
    id: "location",
  },
];

export const hardSkills: string[] = [
  "JavaScript",
  "React",
  "Express",
  "PHP",
  "Symphony",
  "MySQL",
  "Java",
  "Angular",
  "SpringBoot",
];

export const softSkills: string[] = [
  "Travail en équipe",
  "Autonomie",
  "Adaptabilité",
  "Rigueur",
  "Agile/SCRUM",
];

export const projectsLinks: Record<string, string> = {
  daf: "https://ongoing-fbi-investigations.vercel.app/",
  quiz: "https://quizz-two-delta.vercel.app/",
  morse_translator: "https://04-can-you-speak-morse.vercel.app/",
  mastermind: "https://08-mastermind.vercel.app/",
  back_office: "http://vps-6604485f.vps.ovh.net/home",
  ott: "https://supreme-ott.vercel.app/",
  furniture: "https://github.com/Ange230700/luxury_camps",
};

export interface Experience {
  experience_id: string;
  project_description: string;
  tasks: string[];
}

export const experiencesList: Experience[] = [
  {
    experience_id: "ott",
    project_description: `Développement d'une plateforme OTT: _[voir le site](${projectsLinks.ott})_`,
    tasks: [
      "* Équipe de 3 personnes | 4 semaines | Next.js, TailwindCSS, React, PrimeReact",
      "* Authentification avec token et gestion des droits d’utilisateurs",
      "* Hébergement de vidéos YouTube",
    ],
  },
  {
    experience_id: "back_office",
    project_description: `Développement d'un back-office pour une association de collectes de déchets: <u><em><a href="${projectsLinks.back_office}" target="_blank">voir le site</a></em></u>`,
    tasks: [
      "Équipe de 3 personnes <strong>|</strong> 2 semaines <strong>|</strong> PHP, Twig, Symfony",
      "Authentification basique et gestion des droits d'utilisateurs",
      "Opérations CRUD",
    ],
  },
  {
    experience_id: "daf",
    project_description: `Réalisation d'un site affichant les enquêtes en cours du FBI: <u><em><a href="${projectsLinks.daf}" target="_blank">voir le site</a></em></u>`,
    tasks: [
      "Équipe de 3 personnes <strong>|</strong> 2 semaines <strong>|</strong> HTML, CSS, JavaScript",
      "Récupération des données via l'<strong>API</strong> du FBI",
      "Dessin de graphiques avec <strong>Chart.js</strong>",
    ],
  },
  {
    experience_id: "furniture",
    project_description: `Développement d'une plateforme de vente de meubles (mise en production en cours): <u><em><a href="${projectsLinks.furniture}" target="_blank">voir le code source sur GitHub</a></em></u>`,
    tasks: [
      "Équipe de 6 personnes <strong>|</strong> 2 semaines <strong>|</strong> SpringBoot, Angular/Typescript, TailwindCSS, PrimeNg",
      "Modélisation UML",
      "Programmation orientée objet",
    ],
  },
];

export interface Education {
  formation_title: string;
  school: string;
  formation_span: string;
}

export const educationList: Education[] = [
  {
    formation_title: "Formation Développeur•se Web et Mobile",
    school: "ADA Tech School",
    formation_span: "Depuis 10/2024",
  },
  {
    formation_title: "Bootcamp Développement Web",
    school: "Wild Code School",
    formation_span: "10/2023 - 02/2024",
  },
  {
    formation_title: "Bachelor informatique",
    school: "Ynov Campus de Nantes",
    formation_span: "09/2022 - 05/2023",
  },
  {
    formation_title: "Prépa informatique intégrée",
    school: "CESI Toulouse",
    formation_span: "09/2021 - 05/2022",
  },
  {
    formation_title: "Formation ingénieur électronique embarqué",
    school: "CESI Toulouse",
    formation_span: "09/2020 - 05/2021",
  },
  {
    formation_title: "Prépa technologique intégrée",
    school: "CESI Saint-Nazaire",
    formation_span: "09/2019 - 05/2020",
  },
  {
    formation_title: "Cycle Préparatoire Scientifique",
    school: "LFBP Abidjan, Côte d'Ivoire",
    formation_span: "09/2017 - 07/2019",
  },
];

export const hobbiesList: string[] = ["Apprentissage autodidacte du piano"];
