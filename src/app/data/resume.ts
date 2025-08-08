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
      "Recherche un contrat d'apprentissage de **12 à 36 mois**(_4 jours entreprise – 1 jour en formation_) ou un stage de **minimum 6 mois** pour Septembre/Octobre 2025.",
  },
  pitch:
    `Curieux, j'ai découvert la programmation dès le lycée puis j'ai confirmé mon intérêt pour ce métier à travers un bootcamp à la Wild Code School et la formation Ada Tech School où je me forme actuellement au développement Full-stack. J'ai acquis de l'expérience sur React, Node.js et d'autres technologies de l'environnement TypeScript/JavaScript. Rigoureux avec un esprit d'équipe, je souhaite contribuer activement à vos projets tout en poursuivant ma montée en compétences dans le cadre d’un contrat d’apprentissage ou d'un stage.`.trim(),
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
