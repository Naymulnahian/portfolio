"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROJECTS } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work."
          lede="A mix of applied machine learning systems and full-stack software, built to be shipped — not just prototyped."
        />

        <div className="mt-14 border-t border-surface-border">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.5,
                delay: (i % 4) * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group grid gap-4 border-b border-surface-border py-8 sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:gap-8 sm:py-10"
            >
              <span className="font-mono text-sm text-muted/50">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-display text-xl text-foreground sm:text-2xl">
                    {project.title}
                  </h3>

                  {project.featured && (
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent-soft">
                      Featured
                    </span>
                  )}
                </div>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted sm:text-[15px]">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 font-mono text-xs text-muted/70">
                  {project.tags.map((tag, idx) => (
                    <span key={tag}>
                      {tag}
                      {idx < project.tags.length - 1 && (
                        <span className="ml-4 text-muted/30">/</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 sm:flex-col sm:items-end sm:gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
                  >
                    <Github className="h-4 w-4" />
                    <span className="hidden sm:inline">Code</span>
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-foreground/80 transition-colors group-hover:text-accent-soft"
                  >
                    <span className="hidden sm:inline">Live demo</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}