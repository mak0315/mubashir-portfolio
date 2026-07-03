"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { AnimatedCounter } from "@/components/animated-counter";
import { profile, stats, education } from "@/lib/data";

export function About() {
  const paragraphs = profile.about.trim().split("\n\n");

  return (
    <section id="about" className="py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          label="About"
          title="From the classroom to the closing balance."
        />

        <div className="grid gap-16 lg:grid-cols-[1fr_0.85fr]">
          <div className="space-y-5">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="text-base leading-relaxed text-ink/75 dark:text-paper/75"
              >
                {p}
              </motion.p>
            ))}

            <div className="!mt-10 grid grid-cols-2 gap-6 border-t border-ink/10 pt-8 dark:border-paper/10 sm:grid-cols-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <p className="font-mono text-2xl font-semibold tabular-nums text-reconciled">
                    <AnimatedCounter value={s.value} />
                  </p>
                  <p className="mt-1 text-xs leading-snug text-ink/55 dark:text-paper/55">
                    {s.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-ink/50 dark:text-paper/50">
              <GraduationCap className="h-4 w-4 text-gold" />
              Education
            </div>
            <ol className="relative space-y-8 border-l border-ink/10 pl-6 dark:border-paper/10">
              {education.map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  <span className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full border-2 border-paper bg-gold dark:border-ink" />
                  <p className="font-mono text-xs text-ink/45 dark:text-paper/45">
                    {item.period}
                  </p>
                  <p className="mt-1 font-medium text-ink dark:text-paper">
                    {item.title}
                  </p>
                  <p className="text-sm text-ink/60 dark:text-paper/60">{item.org}</p>
                  <p className="mt-1 text-sm text-ink/50 dark:text-paper/50">{item.note}</p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
