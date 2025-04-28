// src\app\components\Skills.tsx

import React from "react";

interface SkillsProps {
  sectionTitle: string;
  hardSkillsTitle: string;
  hardSkills: string[];
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
          <ul className="grid list-inside list-disc grid-cols-3 gap-2">
            {hardSkills.map((skill) => (
              <li key={skill} className="text-gray-700">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-medium">{softSkillsTitle}</h4>
          <ul className="grid list-inside list-disc grid-cols-2 gap-2">
            {softSkills.map((skill) => (
              <li key={skill} className="text-gray-700">
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
