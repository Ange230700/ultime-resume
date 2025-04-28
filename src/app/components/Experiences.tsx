// src\app\components\Experiences.tsx

import React from "react";
import { Experience } from "@/app/data/lists";

interface ExperiencesProps {
  sectionTitle: string;
  list: Experience[];
}

export default function Experiences({
  sectionTitle,
  list,
}: Readonly<ExperiencesProps>) {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-blue-800 underline">
        {sectionTitle}
      </h3>
      <div className="space-y-6">
        {list.map((exp) => (
          <div key={exp.project_description} className="space-y-2">
            <h4
              className="font-medium text-gray-800"
              dangerouslySetInnerHTML={{
                __html: `› ${exp.project_description}`,
              }}
            />
            <ul className="list-inside list-disc space-y-1 pl-5 text-gray-700">
              {exp.tasks.map((task) => (
                <li key={task} dangerouslySetInnerHTML={{ __html: task }} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
