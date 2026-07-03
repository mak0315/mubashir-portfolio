"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Award, BadgeCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";

const trustPoints = [
  {
    icon: BadgeCheck,
    title: "Certified on both major platforms",
    detail: "QuickBooks Online ProAdvisor (L1 & L2) and Xero Certified Associate + Professional — not just one ecosystem.",
  },
  {
    icon: ShieldCheck,
    title: "Reconciliation-first discipline",
    detail: "Every bookkeeping cycle is run to a fully reconciled trial balance before it's called done — Rs 0.00 variance, verified.",
  },
  {
    icon: Award,
    title: "Pakistan tax & FBR fluent",
    detail: "Comfortable in the FBR IRIS portal, NTN registration, withholding tax sections, and monthly Sales Tax filing.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-ink/[0.02] py-24 dark:bg-paper/[0.02] sm:py-28">
      <div className="container">
        <SectionHeading
          label="Why work with me"
          title="Newer to the profession. Not newer to the discipline."
          description="I don't yet have a portfolio of long-term retained clients — I'm building that now. What I can show you today is verifiable: certifications, scored exams, and bookkeeping cycles run to zero variance."
        />

        <div className="grid gap-5 sm:grid-cols-3">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-lg border border-ink/10 bg-white/60 p-6 dark:border-paper/10 dark:bg-ink-soft/40"
            >
              <point.icon className="h-6 w-6 text-reconciled" />
              <h3 className="mt-4 text-base font-semibold text-ink dark:text-paper">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65 dark:text-paper/65">
                {point.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
