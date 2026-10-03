interface ExperienceCardProps {
  position: string;
  company: string;
  timeline: string;
  description: string;
}

export default function ExperienceCard({
  position,
  company,
  timeline,
  description,
}: ExperienceCardProps) {
  return (
    <div className="flex h-auto min-h-44 flex-col justify-between gap-4 rounded-sm border border-border p-4 sm:p-5">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start sm:gap-4">
        <div className="flex flex-col gap-1 sm:gap-1.5">
          <h2 className="text-base font-medium text-secondery sm:text-lg">
            {position}
          </h2>
          <p className="text-sm font-normal text-primary sm:text-base">
            {company}
          </p>
        </div>

        <p className="shrink-0 text-xs font-normal text-primary sm:text-sm">
          {timeline}
        </p>
      </div>

      <p className="text-sm leading-relaxed text-primary sm:text-base">
        {description}
      </p>
    </div>
  );
}
