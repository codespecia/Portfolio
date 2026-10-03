import { DownloadIcon, GithubIcon } from "@/assets";
import { GlowPing, CTAButton, WordSlideIn, ScrollReveal } from "@/components";

export default function HomeSec() {
  return (
    <section
      id="home"
      className="min-h-dvh sm:min-h-screen max-w-375 mx-auto flex justify-center items-center px-4 sm:px-0 pt-0 pb-0 sm:pt-16"
    >
      <div className="flex justify-center items-center flex-col gap-4 w-full max-w-xl sm:w-xl h-fit">
        <ScrollReveal delay={0}>
          <div className="flex justify-center">
            <div className="flex items-center gap-2 w-fit border border-border px-2.5 py-1 text-xs rounded-md lg:gap-3 lg:pr-3 lg:pl-3 lg:pt-1.5 lg:pb-1.5 lg:text-sm">
              <GlowPing />
              <p>Available for work</p>
            </div>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-4 sm:gap-5">
          <div className="flex flex-col gap-1">
            <h1 className="text-4xl sm:text-6xl text-center font-mono font-medium">
              <WordSlideIn text="Rakibur Rahman" delay={150} />
            </h1>
            <p className="text-center text-lg sm:text-2xl font-normal text-primary mt-2">
              <WordSlideIn text="Full Stack Developer" delay={300} />
            </p>
          </div>

          <ScrollReveal delay={450}>
            <p className="text-center w-full max-w-150 sm:w-150 font-normal text-primary text-sm sm:text-base px-2 sm:px-0">
              I'm a software developer, specializing in Full Stack Development
              and scalable web solutions, focused on building secure,
              high-performance applications with clean architecture and better
              user experiences.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={600}>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 mt-3 w-full justify-center items-center">
            <CTAButton
              href="/resume.pdf"
              label="Download Resume"
              iconLabel="download-icon"
              icon={DownloadIcon.src}
              buttonclassName="border-border"
              labelclassName="text-secondery font-normal"
            />
            <CTAButton
              href="https://www.github.com/codespecia"
              label="View Github"
              iconLabel="github-icon"
              icon={GithubIcon.src}
              buttonclassName="bg-secondery text-gray-100 border-secondery"
              labelclassName="text-gray-100 font-light"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
