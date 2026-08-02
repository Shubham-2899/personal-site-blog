import { Certifications } from "@/components/home/Certifications";
import { ContactSection } from "@/components/home/ContactSection";
import { ExperienceTimeline } from "@/components/home/ExperienceTimeline";
import { Intro } from "@/components/home/Intro";
import { ProjectList } from "@/components/home/ProjectList";
import { certifications } from "@/content/certifications";
import { experience } from "@/content/experience";
import { projects } from "@/content/projects";

export default function HomePage() {
  return (
    <>
      <Intro />
      <ProjectList projects={projects} />
      <ExperienceTimeline experience={experience} />
      <Certifications items={certifications} />
      <ContactSection />
    </>
  );
}
