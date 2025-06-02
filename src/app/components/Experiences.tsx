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
    <section className="space-y-2">
      <h3 className="mb-[25px] text-7xl font-semibold text-[var(--highlight-text-color)] underline">
        {sectionTitle}
      </h3>
      <div className="space-y-6">
        {list.map((exp) => (
          <div key={exp.experience_id} className="mb-1 space-y-1">
            <div className="mb-1 font-medium">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeSanitize]}
              >
                {exp.project_description}
              </ReactMarkdown>
            </div>
            <div className="list-inside space-y-1 pl-5 text-5xl leading-15 text-[var(--text-color)]">
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
