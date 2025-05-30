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
  pitch: `Actuellement en formation développeur fullstack web et mobile à ADA Tech School, j’ai travaillé sur plusieurs projets d’équipe, dont une application React pour visualiser des données du FBI, développant à la fois mes capacités techniques et mon intérêt pour l’agilité. Dans le cadre de la préparation de la certification RNCP Niveau 6, je suis à la recherche d’une alternance de 12 ou 36 mois.`,
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
