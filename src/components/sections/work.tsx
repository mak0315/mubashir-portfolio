"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { caseStudies } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Work() {
  const categories = ["All", ...Array.from(new Set(caseStudies.map((c) => c.category)))];
  const [filter, setFilter] = React.useState("All");
  const [expanded, setExpanded] = React.useState<string | null>(null);

  const filtered =
    filter === "All" ? caseStudies : caseStudies.filter((c) => c.category === filter);

  return (
    <section id="work" className="bg-ink/[0.02] py-24 dark:bg-paper/[0.02] sm:py-28">
      <div className="container">
        <SectionHeading
          label="Work"
          title="Practical projects, real numbers."
          description="No sample data. Every metric below came from an actual bookkeeping cycle, error-correction exercise, or payroll run."
        />

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-xs font-medium transition-colors",
                filter === cat
                  ? "bg-ink text-paper dark:bg-paper dark:text-ink"
                  : "bg-ink/5 text-ink/60 hover:bg-ink/10 dark:bg-paper/5 dark:text-paper/60 dark:hover:bg-paper/10"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((study, i) => {
              const isOpen = expanded === study.id;
              return (
                <motion.div
                  key={study.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className="overflow-hidden rounded-lg border border-ink/10 bg-white/60 dark:border-paper/10 dark:bg-ink-soft/40"
                >
                  <button
                    onClick={() => setExpanded(isOpen ? null : study.id)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <Badge variant="reconciled" className="mb-2">
                        {study.category}
                      </Badge>
                      <h3 className="text-lg font-semibold text-ink dark:text-paper">
                        {study.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-ink/60 dark:text-paper/60">
                        {study.summary}
                      </p>
                    </div>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-ink/40 transition-transform dark:text-paper/40",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>

                  <div className="grid grid-cols-3 gap-4 border-t border-ink/10 px-6 py-4 dark:border-paper/10">
                    {study.metrics.map((m) => (
                      <div key={m.label}>
                        <p className="font-mono text-sm font-semibold tabular-nums text-reconciled sm:text-base">
                          {m.value}
                        </p>
                        <p className="mt-0.5 text-[11px] leading-snug text-ink/50 dark:text-paper/50">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden border-t border-ink/10 dark:border-paper/10"
                      >
                        <div className="p-6">
                          <p className="text-sm leading-relaxed text-ink/70 dark:text-paper/70">
                            {study.detail}
                          </p>
                          <div className="mt-4 flex flex-wrap gap-2">
                            {study.tools.map((t) => (
                              <Badge key={t} variant="outline">
                                {t}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
