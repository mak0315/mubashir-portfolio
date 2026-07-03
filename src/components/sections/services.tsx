"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          label="Services"
          title="What I can take off your plate."
          description="Pricing is indicative — final scope depends on transaction volume and complexity. Every engagement starts with a free 20-minute consultation."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={cn(
                "flex flex-col rounded-lg border p-6",
                service.highlighted
                  ? "border-reconciled/40 bg-reconciled-dim dark:border-reconciled/30 dark:bg-reconciled/[0.07]"
                  : "border-ink/10 bg-white/60 dark:border-paper/10 dark:bg-ink-soft/40"
              )}
            >
              {service.highlighted && (
                <span className="mb-3 inline-block w-fit rounded-full bg-reconciled px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white">
                  Most requested
                </span>
              )}
              <h3 className="text-lg font-semibold text-ink dark:text-paper">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-paper/65">
                {service.description}
              </p>
              <ul className="mt-5 flex-1 space-y-2.5">
                {service.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-ink/70 dark:text-paper/70">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-reconciled" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-sm font-semibold text-ink dark:text-paper">
                {service.price}
              </p>
              <Button
                asChild
                className="mt-4"
                variant={service.highlighted ? "primary" : "outline"}
              >
                <a href="#contact">Enquire</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
