"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          label="Experience"
          title="Timeline of work."
        />

        <div className="relative space-y-12 border-l border-ink/10 pl-8 dark:border-paper/10 sm:pl-10">
          {experience.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[41px] top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-paper bg-reconciled dark:border-ink sm:-left-[49px]">
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
              </span>
              <p className="font-mono text-xs uppercase tracking-wider text-reconciled">
                {item.period}
              </p>
              <h3 className="mt-1.5 text-xl font-semibold text-ink dark:text-paper">
                {item.role}
              </h3>
              <p className="text-sm text-ink/55 dark:text-paper/55">{item.org}</p>
              <ul className="mt-4 space-y-2.5">
                {item.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-ink/70 dark:text-paper/70">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-reconciled/70" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
