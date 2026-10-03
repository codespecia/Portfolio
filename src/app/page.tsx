import dynamic from "next/dynamic";
import { Navbar } from "@/components/index";
import HomeSec from "../sections/Home";

// Lazy load non-critical sections that are below the fold
const AboutSec = dynamic(() => import("../sections/About"));
const ProjectsSec = dynamic(() => import("../sections/Projects"));
const ServicestSec = dynamic(() => import("../sections/Services"));
const ContactSec = dynamic(() => import("../sections/Contact"));

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HomeSec />
        <AboutSec />
        <ProjectsSec />
        <ServicestSec />
        <ContactSec />
      </main>
    </>
  );
}
