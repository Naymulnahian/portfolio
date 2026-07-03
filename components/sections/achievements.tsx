import { Award, FileText, Flame, GitPullRequest, Trophy } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { ACHIEVEMENTS } from "@/lib/data";

const ICONS = [Trophy, FileText, Flame, GitPullRequest, Award];

export function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="section-inner">
        <SectionHeading eyebrow="Achievements" title="Milestones so far." />

        <StaggerGroup className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {ACHIEVEMENTS.map((stat, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <StaggerItem key={stat.label}>
                <div className="card card-hover flex h-full flex-col items-start gap-4 p-6">
                  <Icon className="h-5 w-5 text-accent-soft" />
                  <div>
                    <p className="font-display text-2xl text-foreground">
                      {stat.value}
                      <span className="text-accent-soft">{stat.suffix}</span>
                    </p>
                    <p className="mt-1 text-sm text-muted">{stat.label}</p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
