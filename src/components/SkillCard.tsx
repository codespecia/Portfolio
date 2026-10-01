interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="border border-border h-36 rounded-sm p-5 flex flex-col gap-4">
      <h2 className="font-medium">{category}</h2>
      <div className="flex gap-2 flex-wrap">
        {skills.map((skill) => (
          <span className="bg-cardBG px-2 py-1 rounded-sm text-sm" key={skill}>
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
