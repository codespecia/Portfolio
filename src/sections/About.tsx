import { ExperienceCard, SkillCard } from "@/components/index";

export default function AboutSec() {
  return (
    <>
      <section
        id="about"
        className="scroll-mt-24 lg:min-h-screen max-w-375 mx-auto mt-16 lg:px-16 flex flex-col items-center gap-16"
      >
        <div className="w-250 flex flex-col gap-2">
          <h1 className="text-3xl font-medium text-secondery font-mono">
            About
          </h1>
          <p className="font-normal text-primary">
            Software Developer specializing in high-performance web applications
            with strong foundations in UI/UX and SEO. Experienced in JavaScript,
            React.js, Next.js, and Node.js, with hands on experience in
            end-to-end development, debugging, and troubleshooting. Skilled in
            managing SQL and NoSQL databases, API development, and application
            maintenance, with a focus on building <br /> responsive, reliable,
            and user focused solutions.
          </p>
        </div>
        <div className="w-250 flex flex-col gap-10">
          <div className="w-250 flex flex-col gap-3">
            <h1 className="text-secondery font-medium text-xl font-mono">
              Experience
            </h1>
            <ExperienceCard
              position="Full Stack Developer Intern"
              company="Thiranex Virtual Internships"
              timeline="Sep 2026 - Oct 2026"
              description="Gained practical experience in full stack web development, including
          frontend and backend development, REST API integration, database
          management, debugging, and building responsive web applications
          through project tasks."
            />
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="text-secondery font-medium text-xl font-mono">
              Skills
            </h2>
            <div className="grid grid-cols-2 gap-3">
              <SkillCard
                category="Frontend"
                skills={["HTML", "CSS", "JavaScript", "React.js", "Next.js"]}
              />
              <SkillCard
                category="Backend"
                skills={["Node.js", "Express.js", "RestAPI"]}
              />
              <SkillCard
                category="Database"
                skills={["MongoDB", "PostgreSQL"]}
              />
              <SkillCard category="Tools" skills={["Figma", "Git", "GitHub"]} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
