import { Github, Linkedin, Mail, GraduationCap, Fingerprint, FlaskConical } from "lucide-react";
import { NAV_ITEMS, SOCIAL_LINKS } from "@/lib/data";

const ICONS: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Fingerprint,
  FlaskConical,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-border">
      <div className="container flex flex-col gap-8 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <a href="#hero" className="font-display text-sm font-medium">
            <span className="text-muted">[</span>AR<span className="text-muted">]</span>
          </a>
          <p className="mt-3 max-w-xs text-sm text-muted">
            Building intelligent software with AI, machine learning, and research.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-10 gap-y-6">
          <div>
            <p className="eyebrow">Navigate</p>
            <ul className="mt-3 space-y-2">
              {NAV_ITEMS.slice(0, 4).map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="nav-link text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Connect</p>
            <ul className="mt-3 space-y-2">
              {SOCIAL_LINKS.slice(0, 4).map((link) => {
                const Icon = ICONS[link.icon];
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="nav-link flex items-center gap-2 text-sm"
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                    >
                      {Icon && <Icon className="h-3.5 w-3.5" />}
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-surface-border">
        <div className="container flex flex-col items-center justify-between gap-2 py-6 text-xs text-muted sm:flex-row">
          <p>© {year} Naymul Hossain Nahian. All rights reserved.</p>
          <p className="font-mono">Designed &amp; developed with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
