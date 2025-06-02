// src\app\data\resume.ts

import {
  socialsList,
  hardSkills,
  softSkills,
  experiencesList,
  educationList,
  // hobbiesList,
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
  // hobbies: ResumeSectionList<string>;
}

const resumeData: ResumeData = {
  header: {
    name: "Ange KOUAKOU",
    title: "Développeur Fullstack",
    details:
      "Recherche un contrat d'apprentissage de **12 ou 36 mois** : _4 jours entreprise – 1 jour en formation_ à partir de **Juin 2025**.",
  },
  pitch: `Actuellement en formation à ADA Tech School, je développe mes compétences techniques en TypeScript, Java, PHP et Python. J'ai acquis une solide expérience sur des projets utilisant React, Node.js, et les API REST. Ma participation active à des projets en équipe, notamment une application de visualisation de données issues d’API (React, TypeScript), m’a permis de maîtriser l’agilité, le Git Flow et les outils modernes tels que Visual Studio Code, GitHub, et TailwindCSS. Dans le cadre d'une alternance de 12 ou 36 mois visant l'obtention d'une certification RNCP niveau 6, je souhaite rejoindre un environnement stimulant et innovant où je pourrais contribuer efficacement et continuer à progresser, particulièrement sur les technologies web et mobiles telles que ReactJS et React Native.`,
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
  // hobbies: {
  //   section_title: "Hobbies",
  //   list: hobbiesList,
  // },
};

export default resumeData;
