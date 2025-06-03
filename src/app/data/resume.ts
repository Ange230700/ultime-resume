// src\app\data\resume.ts

import {
  socialsList,
  hardSkills,
  softSkills,
  experiencesList,
  educationList,
  hobbiesList,
  HardSkill,
  SocialLink,
  Experience,
  Education,
} from "@/app/data/lists";

export interface ResumeHeader {
  name: string;
  title: string;
  details: string;
}

export interface ResumeSkills {
  section_title: string;
  hard_skills_title: string;
  hard_skills: HardSkill[];
  softSkillsTitle: string;
  softSkills: string[];
}

export interface ResumeSectionList<T> {
  section_title: string;
  list: T[];
}

export interface ResumeData {
  header: ResumeHeader;
  pitch: string;
  contact: { socials: SocialLink[] };
  skills: ResumeSkills;
  experiences: ResumeSectionList<Experience>;
  education: ResumeSectionList<Education>;
  hobbies: ResumeSectionList<string>;
}

const resumeData: ResumeData = {
  header: {
    name: "Ange KOUAKOU",
    title: "Développeur Fullstack",
    details:
      "Recherche un contrat d'apprentissage de **12 ou 36 mois** : _4 jours entreprise – 1 jour en formation_.",
  },
  pitch: `Actuellement apprenant à ADA Tech School, je conçois des interfaces web modernes en TypeScript (Angular, React) et Node.js, depuis la maquette Figma jusqu’au déploiement. Mes projets — plateforme de streaming, data-visualisation des enquêtes du FBI, quiz multi-thèmes — m’ont forgé une solide maîtrise des API REST, du Git Flow et des pratiques Agile/Scrum. Curieux et rigoureux, je cultive une veille active sur l’IA générative. Je recherche un contrat d’apprentissage de 12 ou 36 mois (4 jours en entreprise / 1 jour en formation) afin de contribuer aux solutions innovantes d’Amadeus tout en préparant la certification RNCP niveau 6, première étape vers mon objectif d’expertise en architecture logicielle.`,
  contact: { socials: socialsList },
  skills: {
    section_title: "Compétences",
    hard_skills_title: "Compétences techniques",
    hard_skills: hardSkills,
    softSkillsTitle: "Soft Skills",
    softSkills,
  },
  experiences: {
    section_title: "Projets",
    list: experiencesList,
  },
  education: {
    section_title: "Formations",
    list: educationList,
  },
  hobbies: {
    section_title: "Hobbies",
    list: hobbiesList,
  },
};

export default resumeData;
