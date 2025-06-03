// src\app\components\Hobbies.tsx

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
      <h3 className="mb-[25px] text-7xl font-semibold text-[var(--highlight-text-color)] underline">
        {sectionTitle}
      </h3>
      <div className="flex flex-wrap gap-2">
        {list.map((hobby) => (
          <span key={hobby} className="rounded-full px-3 py-1">
            {hobby}
          </span>
        ))}
      </div>
    </section>
  );
}
