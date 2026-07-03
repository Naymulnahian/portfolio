import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { ABOUT_POINTS, ABOUT_STATS } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="section">
      <div className="section-inner">
        <SectionHeading
          eyebrow="About"
          title="A student engineer, learning in public."
          lede="I focus my time at the intersection of software engineering and applied machine learning — building things that work, then trying to understand why."
        />

        <div className="mt-16 grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:gap-12">
          <Reveal>
            <p className="max-w-xl text-[15px] leading-loose text-muted">
              {ABOUT_POINTS.map((point, i) => (
                <span key={point}>
                  <span className="text-foreground/80">{point}</span>
                  {i < ABOUT_POINTS.length - 1 && (
                    <span className="mx-2.5 text-muted/40">·</span>
                  )}
                </span>
              ))}
            </p>
          </Reveal>

          <div className="grid grid-cols-2 divide-x divide-y divide-surface-border border-l border-t border-surface-border sm:grid-cols-4 lg:grid-cols-2 lg:divide-y-0 lg:border-t-0">
            {ABOUT_STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.06}>
                <div className="flex h-full flex-col justify-center gap-1.5 px-6 py-6">
                  <p className="font-display text-3xl font-light text-foreground">
                    {stat.value}
                    <span className="text-accent-soft">{stat.suffix}</span>
                  </p>
                  <p className="text-xs text-muted">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}