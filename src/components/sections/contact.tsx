"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Linkedin, MapPin, Loader2, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { profile } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().min(2, "Enter your full name"),
  email: z.string().email("Enter a valid email address"),
  service: z.string().min(1, "Select what you need help with"),
  message: z.string().min(10, "Tell me a little more — at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [status, setStatus] = React.useState<"idle" | "submitting" | "sent">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema) });

  const onSubmit = async (data: ContactFormValues) => {
    setStatus("submitting");
    // No backend is wired up yet — this opens the visitor's mail client
    // pre-filled with the form contents so the message reaches Mubashar directly.
    // Swap this for a POST to your API route / form service (e.g. Resend, Formspree) when ready.
    await new Promise((r) => setTimeout(r, 600));
    const subject = encodeURIComponent(`Portfolio enquiry — ${data.service}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nService: ${data.service}\n\n${data.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    reset();
  };

  return (
    <section id="contact" className="py-24 sm:py-28">
      <div className="container">
        <SectionHeading
          label="Contact"
          title="Let's close your books properly."
          description="Whether it's a one-off cleanup or ongoing monthly bookkeeping, tell me what you need and I'll reply within a day."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <ContactRow
              icon={Mail}
              label="Email"
              value={profile.email}
              href={`mailto:${profile.email}`}
            />
            <ContactRow
              icon={MessageCircle}
              label="WhatsApp"
              value={profile.phone}
              href={profile.whatsapp}
            />
            <ContactRow
              icon={Linkedin}
              label="LinkedIn"
              value="/in/mubashar-hassan"
              href={profile.linkedin}
            />
            <ContactRow
              icon={MapPin}
              label="Location"
              value={profile.location}
            />

            <a
              href={profile.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-md bg-reconciled px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-reconciled-light"
            >
              <MessageCircle className="h-4 w-4" />
              Message on WhatsApp
            </a>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5 rounded-lg border border-ink/10 bg-white/60 p-6 dark:border-paper/10 dark:bg-ink-soft/40 sm:p-8"
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input id="name" className="mt-2" placeholder="Your name" {...register("name")} />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-600">{errors.name.message}</p>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" className="mt-2" placeholder="you@company.com" {...register("email")} />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-600">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div>
              <Label htmlFor="service">What do you need?</Label>
              <select
                id="service"
                className="mt-2 flex h-11 w-full rounded-md border border-ink/15 bg-white/70 px-4 text-sm text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reconciled dark:border-paper/15 dark:bg-ink-soft/50 dark:text-paper"
                defaultValue=""
                {...register("service")}
              >
                <option value="" disabled>Select a service</option>
                <option value="Monthly Bookkeeping">Monthly bookkeeping</option>
                <option value="VAT / Tax Filing">VAT / tax filing</option>
                <option value="Payroll Processing">Payroll processing</option>
                <option value="Reporting & Dashboards">Reporting &amp; Excel dashboards</option>
                <option value="Something else">Something else</option>
              </select>
              {errors.service && (
                <p className="mt-1.5 text-xs text-red-600">{errors.service.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                className="mt-2"
                placeholder="Tell me about your business and what you need help with…"
                {...register("message")}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-600">{errors.message.message}</p>
              )}
            </div>

            <Button type="submit" variant="primary" size="lg" className="w-full" disabled={status === "submitting"}>
              {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
              {status === "sent" && <CheckCircle2 className="h-4 w-4" />}
              {status === "idle" && "Send message"}
              {status === "submitting" && "Sending…"}
              {status === "sent" && "Opened in your mail app"}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-lg border border-ink/10 bg-white/50 p-4 transition-colors hover:border-reconciled/30 dark:border-paper/10 dark:bg-ink-soft/30">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-reconciled-dim text-reconciled dark:bg-reconciled/10">
        <Icon className="h-4.5 w-4.5" />
      </div>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-wider text-ink/45 dark:text-paper/45">
          {label}
        </p>
        <p className="text-sm font-medium text-ink dark:text-paper">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
}
