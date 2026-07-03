"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles } from "lucide-react";
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

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className="card group overflow-hidden"
            >
              <div className="relative flex h-44 items-center justify-center overflow-hidden border-b border-surface-border bg-gradient-to-br from-surface to-[#0A0F17]">
                <div className="grid-overlay opacity-60" />
                {project.featured && (
                  <span className="badge absolute right-4 top-4 z-10 text-accent-soft">
                    <Sparkles className="h-3 w-3" /> Featured
                  </span>
                )}
                <span className="relative font-display text-sm text-muted/70">
                  Project preview
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-display text-lg text-foreground">{project.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="badge">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  {project.github && (
                    <a href={project.github} className="btn-secondary flex-1 text-xs">
                      <Github className="h-3.5 w-3.5" />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} className="btn-primary flex-1 text-xs">
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
