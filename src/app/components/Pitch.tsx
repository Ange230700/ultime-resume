// src\app\components\Pitch.tsx

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";

interface PitchProps {
  content: string;
}

export default function Pitch({ content }: Readonly<PitchProps>) {
  return (
    <section className="space-y-4">
      <h3 className="mb-[25px] text-6xl font-semibold text-[var(--highlight-text-color)] underline">
        Pitch
      </h3>
      <div className="prose prose-sm mx-auto text-[var(--text-color)]">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeSanitize]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </section>
  );
}
