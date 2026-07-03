import Link from "next/link";
import { Linkedin, Mail, MessageCircle } from "lucide-react";
import { profile, nav, socials } from "@/lib/data";

const iconMap = {
  linkedin: Linkedin,
  whatsapp: MessageCircle,
  mail: Mail,
};

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-paper dark:border-paper/10 dark:bg-ink">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-mono text-sm font-semibold text-ink dark:text-paper">
              MH<span className="text-reconciled">.</span>
            </p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink/60 dark:text-paper/60">
              {profile.role} based in {profile.location.split(",")[0]}, Pakistan.
              QuickBooks &amp; Xero certified, IFRS trained.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50 dark:text-paper/50">
              Navigate
            </p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-ink/70 transition-colors hover:text-reconciled dark:text-paper/70"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink/50 dark:text-paper/50">
              Connect
            </p>
            <ul className="mt-4 space-y-2.5">
              {socials.map((s) => {
                const Icon = iconMap[s.icon as keyof typeof iconMap];
                return (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target={s.href.startsWith("http") ? "_blank" : undefined}
                      rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 text-sm text-ink/70 transition-colors hover:text-reconciled dark:text-paper/70"
                    >
                      <Icon className="h-4 w-4" />
                      {s.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ink/10 pt-6 text-xs text-ink/50 dark:border-paper/10 dark:text-paper/50 sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="font-mono">Built with Next.js · Reconciled to Rs 0.00</p>
        </div>
      </div>
    </footer>
  );
}
