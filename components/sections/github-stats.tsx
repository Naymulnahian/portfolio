import { GitCommitHorizontal, GitPullRequest, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { TOP_LANGUAGES } from "@/lib/data";
import { ContributionGraph } from "@/components/ui/contribution-graph";

const RECENT_ACTIVITY = [
  { icon: GitCommitHorizontal, text: "Pushed 4 commits to ai-pcb-designer", time: "2d ago" },
  { icon: GitPullRequest, text: "Opened a pull request on plant-disease-detector", time: "5d ago" },
  { icon: Star, text: "Starred pytorch/pytorch", time: "1w ago" },
];

export function GithubStats() {
  return (
    <section id="github" className="section">
      <div className="section-inner">
        <SectionHeading
          eyebrow="GitHub"
          title="Open-source activity."
          lede="A snapshot of recent contributions. Connect this section to the GitHub API for live data."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.3fr_1fr]">
          <Reveal className="card p-6">
            <p className="eyebrow">Contribution graph</p>
            <div className="mt-5 overflow-x-auto">
              <ContributionGraph />
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.08} className="card p-6">
              <p className="eyebrow">Top languages</p>
              <div className="mt-4 space-y-3">
                {TOP_LANGUAGES.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between text-xs text-muted">
                      <span>{lang.name}</span>
                      <span>{lang.percent}%</span>
                    </div>
                    <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-glow"
                        style={{ width: `${lang.percent}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.16} className="card p-6">
              <p className="eyebrow">Recent activity</p>
              <ul className="mt-4 space-y-4">
                {RECENT_ACTIVITY.map((item) => (
                  <li key={item.text} className="flex items-start gap-3 text-sm">
                    <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-accent-soft" />
                    <div>
                      <p className="text-foreground">{item.text}</p>
                      <p className="text-xs text-muted">{item.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
