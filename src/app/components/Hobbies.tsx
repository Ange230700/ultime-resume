// src\app\components\Hobbies.tsx

import React from "react";

interface HobbiesProps {
  sectionTitle: string;
  list: string[];
}

export default function Hobbies({
  sectionTitle,
  list,
}: Readonly<HobbiesProps>) {
  return (
    <section className="space-y-2">
      <h3 className="text-xl font-semibold text-blue-800 underline">
        {sectionTitle}
      </h3>
      <div className="flex flex-wrap gap-2">
        {list.map((hobby) => (
          <span
            key={hobby}
            className="rounded-full bg-gray-200 px-3 py-1 text-gray-700"
          >
            {hobby}
          </span>
        ))}
      </div>
    </section>
  );
}
