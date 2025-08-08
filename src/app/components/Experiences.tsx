// src\app\components\Experiences.tsx

import ReactMarkdown from "react-markdown";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import { Experience } from "@/app/data/lists";
import LinkRenderer from "@/app/components/LinkRenderer";

interface ExperiencesProps {
  sectionTitle: string;
  list: Experience[];
}

//  ─── Extend `defaultSchema` to allow `className` on <a> ────────────────────
const sanitizeSchema = {
  ...defaultSchema,
  attributes: {
    // start with everything the default schema already allows
    ...defaultSchema.attributes,
    // ensure that <a> tags can have `className`
    a: [
      // bring in any attributes defaultSchema already allowed on <a>
      ...(defaultSchema.attributes?.a || []),
      // then allow `className`
      "className",
    ],
  },
};

export default function Experiences({
  sectionTitle,
  list,
}: Readonly<ExperiencesProps>) {
  return (
    <section className="space-y-2">
      <h3 className="mb-[25px] text-4xl font-semibold text-[var(--highlight-text-color)] underline">
        {sectionTitle}
      </h3>
      <div className="space-y-6">
        {list.map((exp) => (
          <div key={exp.experience_id} className="mb-1 space-y-1">
            <div className="mb-1 font-medium">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[[rehypeSanitize, sanitizeSchema]]}
                components={{
                  a: LinkRenderer,
                }}
              >
                {exp.project_description}
              </ReactMarkdown>
            </div>
            <div className="list-inside space-y-1 pl-5 leading-15 text-[var(--text-color)]">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[[rehypeSanitize, sanitizeSchema]]}
                components={{
                  a: LinkRenderer,
                }}
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
