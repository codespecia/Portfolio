import { DownloadIcon, GithubIcon } from "@/assets";
import { GlowPing, CTAButton } from "@/components";

export default function HomeSec() {
  return (
    <>
      <section
        id="home"
        className="scroll-mt-16 pt-16 h-screen max-w-375 mx-auto flex justify-center items-center"
      >
        <div className="flex justify-center items-center flex-col gap-4 w-xl h-fit">
          <div className="flex items-center gap-3 border border-border pr-3 pl-3 pt-1.5 pb-1.5 rounded-md lg:text-sm">
            <GlowPing />
            <p>Available for work</p>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <h1 className="text-6xl text-center font-mono font-medium">
                Rakibur Rahman
              </h1>
              <p className="text-center text-2xl font-normal text-primary">
                Full Stack Developer
              </p>
            </div>
            <p className="text-center w-150 font-normal text-primary">
              I'm a software developer, specializing in Full Stack Development
              and scalable web solutions, focused on building secure,
              high-performance applications with clean architecture and better
              user experiences.
            </p>
          </div>
          <div className="flex gap-5 mt-3">
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
        </div>
      </section>
    </>
  );
}
