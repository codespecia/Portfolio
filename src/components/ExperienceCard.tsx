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
    <div className="border border-border h-44 rounded-sm p-5 flex flex-col gap-4 justify-between">
      <div className="flex justify-between">
        <div className="flex flex-col gap-3">
          <h2 className="text-secondery font-medium">{position}</h2>
          <p className="text-primary font-normal">{company}</p>
        </div>
        <p className="text-primary text-sm font-normal">{timeline}</p>
      </div>
      <p>{description}</p>
    </div>
  );
}
