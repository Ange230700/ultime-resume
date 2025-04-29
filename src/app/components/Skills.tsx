// src\app\components\Skills.tsx

import { Chip } from "primereact/chip";
import type { HardSkill } from "@/app/data/lists";
import {
  FaJs,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaJava,
  FaAngular,
  FaDatabase,
  FaCode,
  FaSymfony,
} from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
  JavaScript: <FaJs />,
  React: <FaReact />,
  Express: <FaNodeJs />,
  PHP: <FaPhp />,
  Symfony: <FaSymfony />,
  MySQL: <FaDatabase />,
  Java: <FaJava />,
  Angular: <FaAngular />,
  SpringBoot: <FaCode />,
};

interface SkillsProps {
  sectionTitle: string;
  hardSkillsTitle: string;
  hardSkills: HardSkill[];
  softSkillsTitle: string;
  softSkills: string[];
}

export default function Skills({
  sectionTitle,
  hardSkillsTitle,
  hardSkills,
  softSkillsTitle,
  softSkills,
}: Readonly<SkillsProps>) {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-blue-800 underline">
        {sectionTitle}
      </h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h4 className="mb-2 font-medium">{hardSkillsTitle}</h4>
          <div className="flex flex-wrap gap-2">
            {hardSkills.map((skill) => {
              const Icon = iconMap[skill.label] ?? <FaCode />;
              const content = (
                <>
                  <span className="bg-primary border-circle w-2rem h-2rem align-items-center justify-content-center flex">
                    {Icon}
                  </span>
                  <span className="ml-2 font-medium">{skill.label}</span>
                </>
              );
              return (
                <Chip
                  key={skill.label}
                  template={content}
                  className="px-2 py-1"
                />
              );
            })}
          </div>
        </div>
        <div>
          <h4 className="mb-2 font-medium">{softSkillsTitle}</h4>
          <div className="flex flex-wrap gap-2">
            {softSkills.map((label) => (
              <Chip key={label} label={label} className="px-2 py-1" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
