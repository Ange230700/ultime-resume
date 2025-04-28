// src\app\components\Education.tsx

import React from "react";
import { Education } from "@/app/data/lists";

interface EducationProps {
  sectionTitle: string;
  list: Education[];
}

export default function EducationSection({
  sectionTitle,
  list,
}: Readonly<EducationProps>) {
  return (
    <section className="space-y-4">
      <h3 className="text-xl font-semibold text-blue-800 underline">
        {sectionTitle}
      </h3>
      <div className="space-y-2">
        {list.map((edu) => (
          <div
            key={`${edu.formation_title}-${edu.school}`}
            className="flex items-center justify-between border-b pb-2"
          >
            <div>
              <p className="inline font-medium">
                {edu.formation_title} <span className="font-normal">|</span>
                &nbsp;
              </p>
              <strong className="font-semibold">{edu.school}</strong>
            </div>
            <em className="text-gray-600">{edu.formation_span}</em>
          </div>
        ))}
      </div>
    </section>
  );
}
