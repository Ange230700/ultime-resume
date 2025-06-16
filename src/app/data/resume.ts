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
    title: "Développeur Fullstack",
    details:
      "Recherche un contrat d'apprentissage de **12 ou 36 mois** : _4 jours entreprise – 1 jour en formation_ pour Septembre 2025.",
  },
  pitch: `Actuellement apprenant développeur full-stack à ADA Tech School, je perfectionne quotidiennement mes compétences front-end et back-end. Les projets d’équipe que j’ai menés m’ont permis d’approfondir les pratiques Agile – qu’il s’agisse des daily meetings, des rétrospectives ou du Git Flow – et de livrer des fonctionnalités robustes dans des délais courts. Je pratique régulièrement TypeScript, React et Node.js, les technologies mêmes que j’ai utilisées pour développer mon projet personnel Streamia, une plateforme de streaming conçue en Next.js, le framework React. Curieux, rigoureux et animé par une forte envie d’apprendre, je souhaite mettre mon savoir-faire au service de votre évolution tout en poursuivant mon parcours de formation vers le titre RNCP Concepteur-Développeur d’Applications Web & Mobile dans le cadre d’un contrat d’apprentissage.`,
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
