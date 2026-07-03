"use client";

import { FormEvent, useState } from "react";
import {
  Fingerprint,
  FlaskConical,
  Github,
  GraduationCap,
  Linkedin,
  Loader2,
  Mail,
  Send,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal } from "@/components/ui/reveal";
import { SOCIAL_LINKS } from "@/lib/data";

const ICONS: Record<string, React.ElementType> = {
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Fingerprint,
  FlaskConical,
};

type Status = "idle" | "sending" | "sent";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 900);
  };

  return (
    <section id="contact" className="section bg-surface/20">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk research, roles, or ideas."
          lede="Open to research collaborations, internships, and full-time roles in AI and software engineering."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-sm leading-relaxed text-muted">
              The fastest way to reach me is email — I read every message.
              You can also find my work and writing through the links below.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {SOCIAL_LINKS.map((link) => {
                const Icon = ICONS[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="card card-hover flex items-center gap-2.5 px-4 py-3 text-sm text-muted hover:text-foreground"
                  >
                    {Icon && <Icon className="h-4 w-4 shrink-0 text-accent-soft" />}
                    {link.label}
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="card space-y-5 p-6 sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" id="name" type="text" placeholder="Jordan Lee" required />
                <Field label="Email" id="email" type="email" placeholder="you@example.com" required />
              </div>
              <Field label="Subject" id="subject" type="text" placeholder="Research collaboration" required />
              <div>
                <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me a bit about what you have in mind…"
                  className="w-full resize-none rounded-xl border border-surface-border bg-white/[0.02] px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-accent-soft focus:outline-none"
                />
              </div>

              <button type="submit" disabled={status !== "idle"} className="btn-primary w-full sm:w-auto">
                {status === "sending" && <Loader2 className="h-4 w-4 animate-spin" />}
                {status === "sent" ? "Message sent" : status === "sending" ? "Sending…" : "Send message"}
                {status === "idle" && <Send className="h-4 w-4" />}
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  type,
  placeholder,
  required,
}: {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-xs font-medium text-muted">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-surface-border bg-white/[0.02] px-4 py-3 text-sm text-foreground placeholder:text-muted/60 focus:border-accent-soft focus:outline-none"
      />
    </div>
  );
}
