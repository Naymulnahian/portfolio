"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { StaggerGroup, StaggerItem } from "@/components/ui/reveal";
import { CERTIFICATES } from "@/lib/data";
import { Certificate } from "@/types";

export function Certificates() {
  const [active, setActive] = useState<Certificate | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section id="certificates" className="section bg-surface/20">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Certificates"
          title="Continued learning."
          lede="Coursework and certifications that back up the skills above. Select a card to view details."
        />

        <StaggerGroup className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((cert) => (
            <StaggerItem key={cert.title}>
              <button
                onClick={() => setActive(cert)}
                className="card card-hover flex w-full flex-col items-start gap-4 p-6 text-left"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-surface-border bg-white/[0.03] text-accent-soft">
                  <Award className="h-4.5 w-4.5" />
                </div>
                <div>
                  <h3 className="font-display text-sm text-foreground">{cert.title}</h3>
                  <p className="mt-1 text-xs text-muted">{cert.issuer} · {cert.date}</p>
                </div>
              </button>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
          >
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="card w-full max-w-md p-8"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-surface-border bg-white/[0.03] text-accent-soft">
                  <Award className="h-5 w-5" />
                </div>
                <button
                  aria-label="Close"
                  onClick={() => setActive(null)}
                  className="text-muted hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              <h3 className="mt-5 font-display text-xl text-foreground">{active.title}</h3>
              <p className="mt-1 text-sm text-muted">
                Issued by {active.issuer} · {active.date}
              </p>
              <div className="mt-6 flex aspect-[4/3] items-center justify-center rounded-xl border border-dashed border-surface-border text-xs text-muted">
                Certificate preview placeholder
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
