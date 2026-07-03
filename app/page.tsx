import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Research } from "@/components/sections/research";
import { Education } from "@/components/sections/education";
import { Achievements } from "@/components/sections/achievements";
import { Experience } from "@/components/sections/experience";
import { Certificates } from "@/components/sections/certificates";
import { GithubStats } from "@/components/sections/github-stats";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Research />
      <Education />
      <Achievements />
      <Experience />
      <Certificates />
      {/* <GithubStats /> */}
      <Contact />
    </>
  );
}
