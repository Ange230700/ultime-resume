// src\app\components\Miscellaneous.tsx

interface MiscellaneousProps {
  sectionTitle: string;
  list: string[];
}

export default function Miscellaneous({
  sectionTitle,
  list,
}: Readonly<MiscellaneousProps>) {
  return (
    <section className="space-y-2">
      <h3 className="mb-[25px] text-5xl font-semibold text-[var(--highlight-text-color)] underline">
        {sectionTitle}
      </h3>
      <div className="space-y-2">
        {list.map((misc) => (
          <div key={misc} className="mb-1 space-y-1">
            <div className="mb-1 font-medium">{misc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
