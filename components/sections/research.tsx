import {
  BrainCircuit,
  Cpu,
  Factory,
  HeartPulse,
  Layers,
  MessageSquareText,
  ScanEye,
  Users,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import {
  CONFERENCE_GOALS,
  FUTURE_VISION,
  ONGOING_RESEARCH_PLACEHOLDER,
  PUBLICATIONS_PLACEHOLDER,
  RESEARCH_INTERESTS,
  RESEARCH_TIMELINE,
} from "@/lib/data";

const ICONS: Record<string, React.ElementType> = {
  Cpu,
  BrainCircuit,
  Layers,
  ScanEye,
  MessageSquareText,
  HeartPulse,
  Factory,
  Users,
};

const RESEARCH_NOTES = [
  { label: "Publications", value: PUBLICATIONS_PLACEHOLDER },
  { label: "Ongoing research", value: ONGOING_RESEARCH_PLACEHOLDER },
  { label: "Conference goals", value: CONFERENCE_GOALS },
  { label: "Future research vision", value: FUTURE_VISION },
];

export function Research() {
  return (
    <section id="research" className="section">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Research"
          title="Where I want to push further."
          lede="Applied research interests I'm actively building toward, alongside the ongoing habits — reading, reviewing, writing — that support them."
        />

        <Reveal>
          <div className="mt-12 flex flex-wrap gap-2">
            {RESEARCH_INTERESTS.map((interest) => {
              const Icon = ICONS[interest.icon];
              return (
                <span
                  key={interest.title}
                  className="inline-flex items-center gap-2 rounded-full border border-surface-border px-3.5 py-1.5 text-sm text-foreground/80 transition-colors hover:border-white/20 hover:text-foreground"
                >
                  {Icon && <Icon className="h-3.5 w-3.5 text-accent-soft" />}
                  {interest.title}
                </span>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <p className="eyebrow">Timeline</p>
            <div className="mt-5 space-y-7 border-l border-surface-border pl-6">
              {RESEARCH_TIMELINE.map((item) => (
                <div key={item.title} className="relative">
                  <span className="absolute -left-[25px] top-1.5 h-1.5 w-1.5 rounded-full bg-accent-soft" />
                  <p className="font-mono text-xs text-muted">{item.period}</p>
                  <h4 className="mt-1.5 font-display text-base text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted">{item.org}</p>
                  <ul className="mt-2 space-y-1.5">
                    {item.points.map((p) => (
                      <li key={p} className="text-sm leading-relaxed text-muted">
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow">Research notes</p>
            <dl className="mt-5 divide-y divide-surface-border border-t border-surface-border">
              {RESEARCH_NOTES.map((note) => (
                <div key={note.label} className="py-5">
                  <dt className="text-sm text-foreground/80">{note.label}</dt>
                  <dd className="mt-1.5 text-sm leading-relaxed text-muted">{note.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}