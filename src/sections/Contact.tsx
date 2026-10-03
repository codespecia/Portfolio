import { ScrollReveal } from "@/components/index";

export default function ContactSec() {
  return (
    <section
      id="contact"
      className="mx-auto mt-20 flex min-h-screen w-full max-w-250 scroll-mt-24 flex-col items-center gap-16 px-4 sm:mt-24 sm:px-6 md:px-8 lg:px-12"
    >
      <ScrollReveal delay={0}>
        <div className="w-full">
          <h1 className="font-mono text-2xl font-medium text-secondery sm:text-3xl">
            Contact Us
          </h1>
        </div>
      </ScrollReveal>
    </section>
  );
}
