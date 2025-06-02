// src\app\components\Skills.tsx

import { Chip } from "primereact/chip";
import type { HardSkill } from "@/app/data/lists";
import {
  SiTypescript,
  // SiSpringboot,
  SiNestjs,
  SiNuxtdotjs,
  SiPrisma,
  SiExpress,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import {
  FaJs,
  FaPhp,
  FaReact,
  FaNodeJs,
  FaJava,
  FaAngular,
  FaDatabase,
  FaCode,
  // FaSymfony,
  FaVuejs,
} from "react-icons/fa";

const iconMap: Record<string, React.ReactNode> = {
  TypeScript: <SiTypescript />,
  "Next.js": <RiNextjsFill />,
  JavaScript: <FaJs />,
  React: <FaReact />,
  NodeJS: <FaNodeJs />,
  PHP: <FaPhp />,
  // Symfony: <FaSymfony />,
  MySQL: <FaDatabase />,
  Java: <FaJava />,
  Angular: <FaAngular />,
  // SpringBoot: <SiSpringboot />,
  NestJS: <SiNestjs />,
  "Nuxt.js": <SiNuxtdotjs />,
  Vue: <FaVuejs />,
  Prisma: <SiPrisma />,
  Express: <SiExpress />,
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
      <h3 className="mb-[25px] text-7xl font-semibold text-[var(--highlight-text-color)] underline">
        {sectionTitle}
      </h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h4 className="mb-[50px] font-medium">{hardSkillsTitle}</h4>
          <div className="grid grid-cols-3 gap-8">
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
                  className="flex items-center justify-center px-8 py-4 text-center text-5xl"
                />
              );
            })}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="mb-[50px] font-medium">{softSkillsTitle}</h4>
            <div className="grid grid-cols-3 gap-8">
              {softSkills.map((label) => (
                <Chip
                  key={label}
                  label={label}
                  className="flex items-center justify-center px-4 py-2 text-center text-5xl"
                />
              ))}
            </div>
          </div>
          <p>
            Maîtrise de l&apos;anglais: <strong>Niveau B2</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
