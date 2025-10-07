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
    title: "Fullstack Developer",
    details:
      "Looking for a **12 to 36-month apprenticeship contract** (_4 days in the company – 1 day in school_) or a **minimum 6-month internship** starting from September/October 2025.",
  },
  pitch:
    `I discovered programming in high school and confirmed my passion for it through bootcamp and trainings during the time I spent in France, where I’m studying Full-Stack development. I’ve gained experience with React, Node.js, and other technologies within the TypeScript/JavaScript ecosystem. And I just wanna learn more and get a degree`.trim(),
  contact: { socials: socialsList },
  skills: {
    section_title: "Skills",
    hard_skills_title: "Technical Skills",
    hard_skills: hardSkills,
    softSkillsTitle: "Soft Skills",
    softSkills,
  },
  experiences: {
    section_title: "Projects",
    list: experiencesList,
  },
  education: {
    section_title: "Education",
    list: educationList,
  },
  hobbies: {
    section_title: "Hobbies",
    list: hobbiesList,
  },
  miscellaneous: {
    section_title: "Miscellaneous",
    list: miscellaneousList,
  },
};

export default resumeData;
