// src\app\components\Experiences.tsx

import ReactMarkdown from "react-markdown";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
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
      <h3 className="text-7xl font-semibold text-blue-800 underline">
        {sectionTitle}
      </h3>
      <div className="space-y-6">
        {list.map((exp) => (
          <div key={exp.experience_id} className="space-y-2">
            <div className="font-medium text-gray-800">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSanitize]}
              >
                {exp.project_description}
              </ReactMarkdown>
            </div>
            <div className="list-inside list-disc space-y-1 pl-5 text-gray-700">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSanitize]}
              >
                {exp.tasks.join("\n")}
              </ReactMarkdown>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
