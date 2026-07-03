"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, FileCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LedgerStrip } from "@/components/ledger-strip";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40"
    >
      {/* Ledger grid background */}
      <div
        className="pointer-events-none absolute inset-0 bg-ledger-grid bg-grid opacity-[0.4] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)] dark:opacity-[0.15]"
        style={
          {
            "--grid-line": "rgba(16,24,40,0.06)",
          } as CSSProperties
        }
        aria-hidden="true"
      />

      <div className="container relative grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-reconciled/25 bg-reconciled-dim px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider text-reconciled dark:border-reconciled/25 dark:bg-reconciled/10 dark:text-reconciled-light"
          >
            <FileCheck2 className="h-3.5 w-3.5" />
            QuickBooks &amp; Xero Certified
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl font-semibold leading-[1.08] tracking-tight text-ink dark:text-paper sm:text-5xl lg:text-[3.4rem]"
          >
            Books that balance to
            <span className="relative mx-2 inline-block text-reconciled">
              Rs 0.00
              <svg
                className="absolute -bottom-1.5 left-0 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 5.5C40 2 80 2 100 4.5C120 7 160 5.5 198 3"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            — every single month.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-ink/70 dark:text-paper/70"
          >
            {profile.heroStatement}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button size="lg" variant="primary" asChild>
              <a href="#contact">
                Hire me
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#work">View case studies</a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href={profile.resumeUrl} download>
                <Download className="h-4 w-4" />
                Resume
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-10 flex items-center gap-4"
          >
            <div className="relative h-11 w-11 overflow-hidden rounded-full border-2 border-paper shadow-sm dark:border-ink">
              <Image
                src={profile.profileImage}
                alt={profile.name}
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <p className="text-sm text-ink/60 dark:text-paper/60">
              {profile.name} · {profile.location}
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-reconciled/10 via-transparent to-gold/10 blur-2xl" />
          <LedgerStrip />
        </motion.div>
      </div>
    </section>
  );
}
