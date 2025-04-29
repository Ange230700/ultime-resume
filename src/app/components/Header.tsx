// src\app\components\Header.tsx

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import { SocialLink } from "@/app/data/lists";

interface HeaderProps {
  name: string;
  title: string;
  details: string;
  socials: SocialLink[];
}

export default function Header({
  name,
  title,
  details,
  socials,
}: Readonly<HeaderProps>) {
  return (
    <section className="space-y-2 text-center">
      <h1 className="text-9xl font-bold text-blue-800 uppercase">{name}</h1>
      <h2 className="text-7xl font-medium">{title}</h2>
      <div className="prose prose-sm mx-auto text-gray-700">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeSanitize]}
        >
          {details}
        </ReactMarkdown>
      </div>
      <ul className="mt-4 flex justify-center space-x-6">
        {socials.map((social) => (
          <li key={social.id}>
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 italic underline decoration-dotted hover:text-gray-800"
              dangerouslySetInnerHTML={{ __html: social.text }}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
