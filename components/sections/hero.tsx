"use client";

import { ArrowRight, Download, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="container flex min-h-screen items-center py-20"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-widest text-accent">
          Software Engineering Student
        </p>

        <h1 className="mt-4 text-5xl font-bold leading-tight">
          Building intelligent software with{" "}
          <span className="text-accent">
            AI, Machine Learning & Research
          </span>
        </h1>

        <p className="mt-6 text-lg text-muted max-w-2xl leading-relaxed">
          I am a Software Engineering student passionate about Artificial
          Intelligence, Machine Learning, Software Engineering, and Industrial
          Research. I enjoy developing intelligent applications, solving
          real-world problems, and contributing to impactful research.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a href="#projects" className="btn-primary">
            View Projects
            <ArrowRight className="h-4 w-4" />
          </a>

          <a href="/resume.pdf" download className="btn-secondary">
            <Download className="h-4 w-4" />
            Resume
          </a>

          <a href="#contact" className="btn-secondary">
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </div>
      </div>
    </section>
  );
}