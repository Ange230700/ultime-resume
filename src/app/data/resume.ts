// src\app\data\resume.ts

import {
  socialsList,
  hardSkills,
  softSkills,
  experiencesList,
  educationList,
  hobbiesList,
  miscellaneousList,
  HardSkill,
  SocialLink,
  Experience,
  Education,
} from "@/app/data/lists";

export interface ResumeHeader {
  name: string;
  title: string;
  details: string;
  photoUrl?: string;
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
  miscellaneous: ResumeSectionList<string>;
}

const resumeData: ResumeData = {
  header: {
    name: "Ange KOUAKOU",
    title: "Développeur web full-stack",
    details:
      // "Recherche un **contrat d’apprentissage de 12 à 36 mois** (_4 jours en entreprise – 1 jour en formation_) ou un **stage d’au moins 6 mois** à partir de septembre/octobre 2025.",
      "Recherche un **stage de 6 à 12 mois**.",
    photoUrl: "/photo.jpg",
  },
  pitch:
    // `J’ai découvert la programmation au lycée et j’ai confirmé mon intérêt pour le développement web grâce à un bootcamp et à des formations durant mon séjour en France, où j’ai étudié le développement web Full-Stack. J’ai acquis de l’expérience avec React, Node.js et d’autres technologies de l’écosystème TypeScript/JavaScript. Je souhaite continuer à apprendre et, à terme, obtenir un diplôme, tout en améliorant mon anglais.`.trim(),
    `J’ai découvert la programmation au lycée. Mon intérêt pour le web et le mobile s’est renforcé lors d’un bootcamp et de plusieurs formations, où j’ai appris à créer des sites web et des applications mobiles. J’ai déjà utilisé React, Node.js et d’autres outils liés au monde TypeScript/JavaScript. Je souhaite continuer à apprendre et progresser dans mon travail.`.trim(),
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
  miscellaneous: {
    section_title: "Divers",
    list: miscellaneousList,
  },
};

export default resumeData;
