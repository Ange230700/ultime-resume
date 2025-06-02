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
  pitch: `Mon parcours m'a permis d'acquérir une expérience concrète sur des projets utilisant des technologies variées telles que TypeScript/Javascript, Node.js et SQL. Ayant une expérience dans l'implémentation des architectures API REST et des microservices, ainsi qu'une expérience pratique avec Git, Visual Studio Code et des frameworks JavaScript modernes, je souhaite poursuivre mon apprentissage dans un environnement stimulant et dynamique. Dans le cadre de la préparation d'une certification RNCP de niveau 6 en tant que concepteur-développeur d'applications, je recherche une alternance de 12 ou 36 mois. Rigoureux et autonome, je suis déterminé à contribuer efficacement à des projets numériques innovants.`,
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
