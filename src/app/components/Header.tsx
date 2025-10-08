// src\app\components\Header.tsx

// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";
// import rehypeSanitize from "rehype-sanitize";
import { SocialLink } from "@/app/data/lists";
import Image from "next/image";

interface HeaderProps {
  name: string;
  title: string;
  details: string;
  socials: SocialLink[];
  photoUrl?: string;
}

export default function Header({
  name,
  title,
  // details,
  socials,
  photoUrl,
}: Readonly<HeaderProps>) {
  return (
    <section className="space-y-2">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 md:flex-row md:items-center md:gap-8 md:text-left">
        {photoUrl && (
          <div className="shrink-0">
            <Image
              src={photoUrl}
              alt={`${name} profile photo`}
              width={180}
              height={180}
              priority
              className="h-44 w-44 rounded-full object-cover ring-2 ring-[var(--highlight-text-color)]/30"
            />
          </div>
        )}
        <div className="text-center md:text-left">
          <h1 className="mb-[25px] text-6xl font-bold text-[var(--highlight-text-color)] uppercase">
            {name}
          </h1>
          <h2 className="mb-[25px] text-4xl font-medium">{title}</h2>
        </div>
      </div>
      {/* <div className="prose prose-sm mx-auto text-[var(--text-color)]">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeSanitize]}
        >
          {details}
        </ReactMarkdown>
      </div> */}
      <ul className="mt-16 grid grid-cols-3 justify-center gap-8">
        {socials.map((social) => (
          <li key={social.id} className="justify-self-center">
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 italic underline decoration-dotted hover:text-[var(--highlight-text-color)]"
            >
              {social.icon && (
                <i className={`${social.icon} text-4xl`} aria-hidden="true" />
              )}
              <span>{social.text}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
