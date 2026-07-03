"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LOG_LINES = [
  "epoch 01/40  loss 1.842  val_loss 1.910",
  "epoch 09/40  loss 0.963  val_loss 1.021",
  "epoch 18/40  loss 0.512  val_loss 0.588",
  "epoch 27/40  loss 0.284  val_loss 0.331",
  "epoch 36/40  loss 0.147  val_loss 0.201",
];

const PATH = "M 4 90 C 40 88, 55 55, 85 48 S 140 30, 170 20 S 220 8, 256 6";

export function TrainingLogPanel() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= LOG_LINES.length) return;
    const t = setTimeout(() => setVisibleLines((v) => v + 1), 550);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <div className="card overflow-hidden" role="img" aria-label="Animated training log illustrating a decreasing loss curve">
      <div className="flex items-center gap-1.5 border-b border-surface-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 font-mono text-xs text-muted">train.py — epoch log</span>
      </div>

      <div className="px-5 pt-4">
        <svg viewBox="0 0 260 100" className="h-28 w-full" aria-hidden>
          <line x1="4" y1="94" x2="256" y2="94" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          <motion.path
            d={PATH}
            fill="none"
            stroke="#7DA2FF"
            strokeWidth="2"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
          <motion.circle
            r="3"
            fill="#7DD3FC"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.6 }}
          >
            <animateMotion dur="0.01s" fill="freeze" path={PATH} keyPoints="1;1" keyTimes="0;1" />
          </motion.circle>
        </svg>
      </div>

      <div className="space-y-1.5 px-5 pb-5 font-mono text-[11px] leading-relaxed text-muted">
        {LOG_LINES.slice(0, visibleLines).map((line) => (
          <p key={line}>{line}</p>
        ))}
        <p className="flex items-center gap-2 pt-1 text-signal">
          <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-signal" />
          status: research mode — online
          <span className="animate-blink">▍</span>
        </p>
      </div>
    </div>
  );
}
