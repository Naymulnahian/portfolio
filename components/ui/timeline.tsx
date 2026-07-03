import { TimelineItem } from "@/types";
import { Reveal } from "@/components/ui/reveal";
import { MapPin } from "lucide-react";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="space-y-8 border-l border-surface-border pl-6 sm:pl-8">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.08} className="relative">
          <span className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-background sm:-left-[39px]" />
          <div className="card card-hover p-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-base text-foreground sm:text-lg">{item.title}</h3>
              <span className="badge">{item.period}</span>
            </div>
            <p className="mt-1 text-sm text-accent-soft">{item.org}</p>
            {item.location && (
              <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                <MapPin className="h-3 w-3" /> {item.location}
              </p>
            )}
            <ul className="mt-3 space-y-1.5">
              {item.points.map((p) => (
                <li key={p} className="text-sm leading-relaxed text-muted">
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
