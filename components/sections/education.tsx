import { SectionHeading } from "@/components/ui/section-heading";
import { Timeline } from "@/components/ui/timeline";
import { EDUCATION } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="section">
      <div className="section-inner">
        <SectionHeading eyebrow="Education" title="Academic background." />
        <div className="mt-14 max-w-2xl">
          <Timeline items={EDUCATION} />
        </div>
      </div>
    </section>
  );
}
