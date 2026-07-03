import { Reveal } from "@/components/ui/reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
}

export function SectionHeading({ eyebrow, title, lede, align = "left" }: SectionHeadingProps) {
  return (
    <Reveal className={align === "center" ? "text-center mx-auto" : ""}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title text-balance">{title}</h2>
      {lede && (
        <p className={`section-lede text-balance ${align === "center" ? "mx-auto" : ""}`}>
          {lede}
        </p>
      )}
    </Reveal>
  );
}
