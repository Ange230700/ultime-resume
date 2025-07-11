// src\app\page.tsx

import resumeData from "@/app/data/resume";
import Header from "@/app/components/Header";
import Skills from "@/app/components/Skills";
import Experiences from "@/app/components/Experiences";
import EducationSection from "@/app/components/Education";
import Pitch from "@/app/components/Pitch";
import Hobbies from "@/app/components/Hobbies";
import Miscellaneous from "@/app/components/Miscellaneous";

export default function Home() {
  const {
    header,
    pitch,
    contact,
    skills,
    experiences,
    education,
    hobbies,
    miscellaneous,
  } = resumeData;

  return (
    <main
      className={[
        "flex flex-1 flex-col justify-around overflow-hidden px-[100px]",
      ].join(" ")}
    >
      <Header
        name={header.name}
        title={header.title}
        details={header.details}
        socials={contact.socials}
      />

      <Pitch content={pitch} />

      <Skills
        sectionTitle={skills.section_title}
        hardSkillsTitle={skills.hard_skills_title}
        hardSkills={skills.hard_skills}
        softSkillsTitle={skills.softSkillsTitle}
        softSkills={skills.softSkills}
      />

      <div className="flex gap-6">
        <div className="w-65/100">
          <Experiences
            sectionTitle={experiences.section_title}
            list={experiences.list}
          />
        </div>

        <div className="w-35/100">
          <div className="flex h-full flex-col justify-between">
            <Miscellaneous
              sectionTitle={miscellaneous.section_title}
              list={miscellaneous.list}
            />
            <Hobbies sectionTitle={hobbies.section_title} list={hobbies.list} />
          </div>
        </div>
      </div>

      <EducationSection
        sectionTitle={education.section_title}
        list={education.list}
      />
    </main>
  );
}
