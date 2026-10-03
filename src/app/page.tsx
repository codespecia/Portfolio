import { Navbar } from "@/components/index";
import {HomeSec, AboutSec, ProjectsSec, ServicestSec, ContactSec,} from "@/sections/index";

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
