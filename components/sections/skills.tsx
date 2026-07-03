import {
  BrainCircuit,
  Code2,
  Database,
  LayoutTemplate,
  Server,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SKILLS } from "@/lib/data";

const ICONS: Record<string, React.ElementType> = {
  Code2,
  LayoutTemplate,
  Server,
  Database,
  BrainCircuit,
  Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for."
          lede="A working toolkit across software engineering and applied machine learning — deepened through coursework, projects, and independent study."
        />

        <div className="mt-16 grid divide-y divide-surface-border border-t border-surface-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:border-l lg:grid-cols-3">
          {SKILLS.map((group, i) => {
            const Icon = ICONS[group.icon];
            return (
              <Reveal key={group.category} delay={(i % 3) * 0.06}>
                <div className="h-full px-6 py-8 sm:px-8">
                  <div className="flex items-center gap-2 text-muted">
                    {Icon && <Icon className="h-4 w-4" />}
                    <h3 className="font-mono text-xs uppercase tracking-[0.2em]">
                      {group.category}
                    </h3>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="rounded-full border border-surface-border px-3 py-1.5 text-sm text-foreground/80 transition-colors hover:border-white/20 hover:text-foreground"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}