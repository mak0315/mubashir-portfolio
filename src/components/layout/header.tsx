"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { nav, profile } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-ink/10 bg-paper/85 backdrop-blur-md dark:border-paper/10 dark:bg-ink/85"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link
          href="#top"
          className="font-mono text-sm font-semibold tracking-tight text-ink dark:text-paper"
        >
          MH<span className="text-reconciled">.</span>
          <span className="ml-2 hidden text-ink/50 dark:text-paper/50 sm:inline">
            {profile.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink/70 transition-colors hover:text-reconciled dark:text-paper/70"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button asChild size="sm" variant="primary">
            <a href={profile.resumeUrl} download>
              <Download className="h-3.5 w-3.5" />
              Resume
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-ink/10 bg-paper dark:border-paper/10 dark:bg-ink md:hidden"
          >
            <div className="container flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm text-ink/80 hover:bg-ink/5 dark:text-paper/80 dark:hover:bg-paper/5"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={profile.resumeUrl}
                download
                className="mt-2 flex items-center gap-2 rounded-md bg-reconciled px-3 py-2.5 text-sm font-medium text-white"
              >
                <Download className="h-3.5 w-3.5" />
                Download resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
