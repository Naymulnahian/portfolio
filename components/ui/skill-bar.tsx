"use client";

import { motion } from "framer-motion";

export function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <p className="mb-1.5 text-sm text-muted">{name}</p>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-glow"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}
