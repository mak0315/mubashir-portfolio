"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Certifications() {
  return (
    <section className="py-24 sm:py-28">
      <div className="container">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-gold">
            <span className="h-px w-8 bg-gold/50" />
            Section · Certifications
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert, i) => (
            <motion.a
              key={cert.id}
              href={cert.file}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-lg border p-6 transition-transform hover:-translate-y-1",
                cert.accent === "reconciled"
                  ? "border-reconciled/25 bg-reconciled-dim dark:border-reconciled/20 dark:bg-reconciled/[0.06]"
                  : "border-gold/25 bg-gold-dim dark:border-gold/20 dark:bg-gold/[0.06]"
              )}
            >
              <div>
                <div className="flex items-center justify-between">
                  <Award
                    className={cn(
                      "h-6 w-6",
                      cert.accent === "reconciled" ? "text-reconciled" : "text-gold"
                    )}
                  />
                  <ExternalLink className="h-3.5 w-3.5 text-ink/30 transition-colors group-hover:text-ink/60 dark:text-paper/30 dark:group-hover:text-paper/60" />
                </div>
                <p className="mt-4 font-mono text-xs uppercase tracking-wider text-ink/45 dark:text-paper/45">
                  {cert.issuer}
                </p>
                <p className="mt-1.5 text-sm font-semibold leading-snug text-ink dark:text-paper">
                  {cert.title}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between font-mono text-xs text-ink/50 dark:text-paper/50">
                <span>{cert.date}</span>
                {cert.score && (
                  <span
                    className={cn(
                      "font-semibold",
                      cert.accent === "reconciled" ? "text-reconciled" : "text-gold"
                    )}
                  >
                    {cert.score}
                  </span>
                )}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
