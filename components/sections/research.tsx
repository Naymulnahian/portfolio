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
import { Reveal, StaggerGroup, StaggerItem } from "@/components/ui/reveal";
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

export function Research() {
  return (
    <section id="research" className="section bg-surface/20">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Research"
          title="Where I want to push further."
          lede="Applied research interests I'm actively building toward, alongside the ongoing habits — reading, reviewing, writing — that support them."
        />

        <StaggerGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {RESEARCH_INTERESTS.map((interest) => {
            const Icon = ICONS[interest.icon];
            return (
              <StaggerItem key={interest.title}>
                <div className="card card-hover flex h-full flex-col items-start gap-3 p-5">
                  {Icon && <Icon className="h-5 w-5 text-accent-soft" />}
                  <p className="text-sm text-foreground">{interest.title}</p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <h3 className="font-display text-xl text-foreground">Research timeline</h3>
            <div className="mt-6 space-y-6 border-l border-surface-border pl-6">
              {RESEARCH_TIMELINE.map((item) => (
                <div key={item.title} className="relative">
                  <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background" />
                  <p className="font-mono text-xs text-accent-soft">{item.period}</p>
                  <h4 className="mt-1 font-display text-base text-foreground">{item.title}</h4>
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
            <div className="grid gap-4">
              <div className="card p-6">
                <p className="eyebrow">Publications</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{PUBLICATIONS_PLACEHOLDER}</p>
              </div>
              <div className="card p-6">
                <p className="eyebrow">Ongoing research</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{ONGOING_RESEARCH_PLACEHOLDER}</p>
              </div>
              <div className="card p-6">
                <p className="eyebrow">Conference goals</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{CONFERENCE_GOALS}</p>
              </div>
              <div className="card p-6">
                <p className="eyebrow">Future research vision</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{FUTURE_VISION}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
