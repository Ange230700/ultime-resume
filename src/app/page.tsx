// src\app\page.tsx

import resumeData from "./data/resume";
import { SocialLink, Experience, Education } from "./data/lists";

export default function Home() {
  const { header, contact, skills, experiences, education, hobbies } =
    resumeData;

  return (
    <main className="mx-auto max-w-3xl space-y-12 px-4 py-8 font-sans">
      {/* Header */}
      <section className="space-y-2 text-center">
        <h1 className="text-4xl font-bold text-blue-800 uppercase">
          {header.name}
        </h1>
        <h2 className="text-2xl font-medium">{header.title}</h2>
        <p
          className="text-base text-gray-700"
          dangerouslySetInnerHTML={{ __html: header.details }}
        />
        {/* Social Links */}
        <ul className="mt-4 flex justify-center space-x-6">
          {contact.socials.map((social: SocialLink) => (
            <li key={social.id}>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 italic underline hover:text-gray-800"
                dangerouslySetInnerHTML={{ __html: social.text }}
              />
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-800 underline">
          {skills.section_title}
        </h3>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h4 className="mb-2 font-medium">{skills.hard_skills_title}</h4>
            <ul className="grid list-inside list-disc grid-cols-3 gap-2">
              {skills.hard_skills.map((skill) => (
                <li key={skill} className="text-gray-700">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-2 font-medium">{skills.softSkillsTitle}</h4>
            <ul className="grid list-inside list-disc grid-cols-2 gap-2">
              {skills.softSkills.map((skill) => (
                <li key={skill} className="text-gray-700">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-800 underline">
          {experiences.section_title}
        </h3>
        <div className="space-y-6">
          {experiences.list.map((exp: Experience) => (
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

      {/* Education */}
      <section className="space-y-4">
        <h3 className="text-xl font-semibold text-blue-800 underline">
          {education.section_title}
        </h3>
        <div className="space-y-2">
          {education.list.map((edu: Education) => (
            <div
              key={`${edu.formation_title}-${edu.school}`}
              className="flex items-center justify-between border-b pb-2"
            >
              <div>
                <p className="inline font-medium">
                  {edu.formation_title}{" "}
                  <span className="font-normal">|</span>{" "}
                </p>
                <strong className="font-semibold">{edu.school}</strong>
              </div>
              <em className="text-gray-600">{edu.formation_span}</em>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies */}
      <section className="space-y-2">
        <h3 className="text-xl font-semibold text-blue-800 underline">
          {hobbies.section_title}
        </h3>
        <div className="flex flex-wrap gap-2">
          {hobbies.list.map((hobby) => (
            <span
              key={hobby}
              className="rounded-full bg-gray-200 px-3 py-1 text-gray-700"
            >
              {hobby}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
