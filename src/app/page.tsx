// src\app\page.tsx

import resumeData from "@/app/data/resume";
import Header from "@/app/components/Header";
import Skills from "@/app/components/Skills";
import Experiences from "@/app/components/Experiences";
import EducationSection from "@/app/components/Education";
// import Hobbies from "@/app/components/Hobbies";

export default function Home() {
  const { header, contact, skills, experiences, education /*, hobbies*/ } =
    resumeData;

  return (
    <main
      className={[
        "mx-auto max-w-3xl space-y-12 px-4 py-8 font-sans",
        // print: full-bleed to match A4 above
        "print:mx-0 print:max-w-none",
        "print:h-[297mm] print:w-[210mm] print:overflow-visible",
        // optional: add print-only padding
        "print:px-[1cm] print:pt-[1cm]",
      ].join(" ")}
    >
      <Header
        name={header.name}
        title={header.title}
        details={header.details}
        socials={contact.socials}
      />

      <Skills
        sectionTitle={skills.section_title}
        hardSkillsTitle={skills.hard_skills_title}
        hardSkills={skills.hard_skills}
        softSkillsTitle={skills.softSkillsTitle}
        softSkills={skills.softSkills}
      />

      <Experiences
        sectionTitle={experiences.section_title}
        list={experiences.list}
      />

      <EducationSection
        sectionTitle={education.section_title}
        list={education.list}
      />

      {/* <Hobbies sectionTitle={hobbies.section_title} list={hobbies.list} /> */}
    </main>
  );
}
