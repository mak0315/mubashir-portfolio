"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { skillGroups } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Skills() {
  const [active, setActive] = React.useState(skillGroups[0]?.id ?? "");
  const group = skillGroups.find((g) => g.id === active) ?? skillGroups[0];

  if (!group) return null;


  return (
    <section id="skills" className="bg-ink/[0.02] py-24 dark:bg-paper/[0.02] sm:py-28">
      <div className="container">
        <SectionHeading
          label="Skills"
          title="A ledger of capabilities, not a buzzword list."
          description="Every skill below has been exercised on a real bookkeeping cycle, tax filing, or Excel deliverable — not just studied."
        />

        <div className="flex flex-wrap gap-2 border-b border-ink/10 pb-6 dark:border-paper/10">
          {skillGroups.map((g) => (
            <button
              key={g.id}
              onClick={() => setActive(g.id)}
              className={cn(
                "rounded-full px-4 py-2 font-mono text-xs uppercase tracking-wide transition-colors",
                active === g.id
                  ? "bg-ink text-paper dark:bg-paper dark:text-ink"
                  : "bg-ink/5 text-ink/60 hover:bg-ink/10 dark:bg-paper/5 dark:text-paper/60 dark:hover:bg-paper/10"
              )}
            >
              {g.title}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-x-10 gap-y-6 sm:grid-cols-2">
          {group.items.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
            >
              <div className="mb-2 flex items-baseline justify-between gap-3">
                <span className="text-sm font-medium text-ink dark:text-paper">
                  {item.name}
                  {item.note && (
                    <span className="ml-2 font-mono text-xs text-reconciled">
                      {item.note}
                    </span>
                  )}
                </span>
                <span className="font-mono text-xs tabular-nums text-ink/40 dark:text-paper/40">
                  {item.level}%
                </span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink/10 dark:bg-paper/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.05, ease: "easeOut" }}
                  className="h-full rounded-full bg-reconciled"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
