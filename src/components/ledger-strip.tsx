"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const rows = [
  { label: "Opening balance sheet reviewed", value: "Rs 2,140,600" },
  { label: "Transactions reconciled against bank feed", value: "1,284 entries" },
  { label: "Misclassified entries traced & corrected", value: "Rs 143,000" },
];

/**
 * The site's signature element: a mock ledger that "closes the books" on load,
 * animating line by line to a final reconciled, zero-variance state — a literal
 * visualization of Mubashar's real Rs 0.00 reconciliation achievement.
 */
export function LedgerStrip() {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div
      ref={ref}
      className="w-full overflow-hidden rounded-lg border border-ink/10 bg-white/70 font-mono text-sm shadow-sm backdrop-blur-sm dark:border-paper/10 dark:bg-ink-soft/50"
    >
      <div className="flex items-center justify-between border-b border-ink/10 bg-ink/[0.03] px-5 py-3 dark:border-paper/10 dark:bg-paper/[0.03]">
        <span className="text-xs uppercase tracking-[0.2em] text-ink/50 dark:text-paper/50">
          General Ledger — Live Close
        </span>
        <span className="text-xs text-ink/40 dark:text-paper/40">FY 2026</span>
      </div>

      <div className="divide-y divide-ink/5 dark:divide-paper/5">
        {rows.map((row, i) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0, x: -8 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.15 * i }}
            className="flex items-center justify-between px-5 py-3"
          >
            <span className="text-ink/60 dark:text-paper/60">{row.label}</span>
            <span className="tabular-nums text-ink dark:text-paper">{row.value}</span>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.15 * rows.length + 0.2 }}
        className="flex items-center justify-between border-t border-reconciled/30 bg-reconciled-dim px-5 py-4 dark:border-reconciled/20 dark:bg-reconciled/10"
      >
        <span className="flex items-center gap-2 font-semibold text-reconciled dark:text-reconciled-light">
          <CheckCircle2 className="h-4 w-4" />
          Balance
        </span>
        <span className="tabular-nums font-semibold text-reconciled dark:text-reconciled-light">
          Rs 0.00 · Reconciled
        </span>
      </motion.div>
    </div>
  );
}
