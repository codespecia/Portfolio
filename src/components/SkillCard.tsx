interface SkillCardProps {
  category: string;
  skills: string[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <div className="flex h-auto min-h-36 flex-col gap-3 rounded-sm border border-border p-4 sm:gap-4 sm:p-5">
      <h3 className="text-base font-medium text-secondery sm:text-lg">
        {category}
      </h3>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-sm bg-cardBG px-2.5 py-1 text-xs font-normal text-secondery transition-all duration-100 hover:bg-secondery/10 sm:text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
