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
      <h3 className="mb-[25px] text-7xl font-semibold text-blue-800 underline">
        {sectionTitle}
      </h3>
      <div className="space-y-6">
        {list.map((exp) => (
          <div key={exp.experience_id} className="mb-[50px] space-y-2">
            <div className="mb-[25px] font-medium text-gray-800">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSanitize]}
              >
                {exp.project_description}
              </ReactMarkdown>
            </div>
            <div className="list-inside space-y-1 pl-5 text-5xl leading-16 text-gray-700">
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
