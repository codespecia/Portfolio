import { Navbar, ScrollReveal } from "@/components/index";
import {
  HomeSec,
  AboutSec,
  ProjectsSec,
  ServicestSec,
  ContactSec,
} from "../sections/index";

export default function Home() {
  return (
    <>
      <Navbar />
      <div>
        <HomeSec />
        <AboutSec />
        <ProjectsSec />
        <ServicestSec />
        <ContactSec />
      </div>
    </>
  );
}
