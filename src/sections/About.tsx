import { ExperienceCard, SkillCard, ScrollReveal } from "@/components/index";

const EXPERIENCE_DATA = [
  {
    position: "Full Stack Developer Intern",
    company: "Thiranex Virtual Internships",
    timeline: "Sep 2026 - Oct 2026",
    description:
      "Gained practical experience in full stack web development, including frontend and backend development, REST API integration, database management, debugging, and building responsive web applications through project tasks.",
  },
];

const SKILLS_DATA = [
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "RestAPI"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Tools",
    skills: ["Figma", "Git", "GitHub"],
  },
];

export default function AboutSec() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="mx-auto mt-16 flex min-h-screen w-full max-w-250 scroll-mt-24 flex-col items-center gap-10 px-4 sm:mt-20 sm:gap-12 sm:px-6 md:px-8 lg:mt-24 lg:gap-16 lg:px-12"
    >
      {/* About Description */}
      <ScrollReveal delay={0}>
        <article className="flex w-full flex-col gap-2 sm:gap-3">
          <h2
            id="about-heading"
            className="font-mono text-2xl font-medium text-secondery sm:text-3xl"
          >
            About
          </h2>
          <p className="text-sm font-normal leading-relaxed text-primary sm:text-base">
            Software Developer specializing in high-performance web applications
            with strong foundations in UI/UX and SEO. Experienced in JavaScript,
            React.js, Next.js, and Node.js, with hands on experience in
            end-to-end development, debugging, and troubleshooting. Skilled in
            managing SQL and NoSQL databases, API development, and application
            maintenance, with a focus on building responsive, reliable, and user
            focused solutions.
          </p>
        </article>
      </ScrollReveal>

      <div className="flex w-full flex-col gap-8 sm:gap-10">
        {/* Experience Section */}
        <ScrollReveal delay={150}>
          <section
            aria-labelledby="experience-heading"
            className="flex w-full flex-col gap-3"
          >
            <h3
              id="experience-heading"
              className="font-mono text-lg font-medium text-secondery sm:text-xl"
            >
              Experience
            </h3>
            {EXPERIENCE_DATA.map((exp) => (
              <ExperienceCard key={`${exp.company}-${exp.position}`} {...exp} />
            ))}
          </section>
        </ScrollReveal>

        {/* Skills Section */}
        <ScrollReveal delay={150}>
          <section
            aria-labelledby="skills-heading"
            className="flex w-full flex-col gap-3"
          >
            <h3
              id="skills-heading"
              className="font-mono text-lg font-medium text-secondery sm:text-xl"
            >
              Skills
            </h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
              {SKILLS_DATA.map((skill) => (
                <SkillCard key={skill.category} {...skill} />
              ))}
            </div>
          </section>
        </ScrollReveal>
      </div>
    </section>
  );
}
