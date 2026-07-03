import { SectionHeading } from "@/components/ui/section-heading";
import { Timeline } from "@/components/ui/timeline";
import { EXPERIENCE } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="section bg-surface/20">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've applied it."
          lede="Research, internship, and community roles that have shaped how I build and evaluate software."
        />
        <div className="mt-14 max-w-2xl">
          <Timeline items={EXPERIENCE} />
        </div>
      </div>
    </section>
  );
}
