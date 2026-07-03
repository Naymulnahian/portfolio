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
import { SkillBar } from "@/components/ui/skill-bar";

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
    <section id="skills" className="section bg-surface/20">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I reach for."
          lede="A working toolkit across software engineering and applied machine learning — deepened through coursework, projects, and independent study."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, i) => {
            const Icon = ICONS[group.icon];
            return (
              <Reveal key={group.category} delay={(i % 3) * 0.08}>
                <div className="card card-hover h-full p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-surface-border bg-white/[0.03] text-accent-soft">
                      {Icon && <Icon className="h-4.5 w-4.5" />}
                    </div>
                    <h3 className="font-display text-base text-foreground">{group.category}</h3>
                  </div>

                  <div className="mt-6 space-y-4">
                    {group.skills.map((skill) => (
                      <SkillBar key={skill.name} name={skill.name} level={skill.level} />
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
