# Mubashar Hassan — Portfolio

A production-ready portfolio site for **Mubashar Hassan**, an accounting & bookkeeping professional (QuickBooks & Xero certified) based in Abbottabad, Pakistan.

Built with **Next.js 15** (App Router), **React 19**, **TypeScript**, **Tailwind CSS**, **shadcn-style UI primitives**, and **Framer Motion**.

---

## 1. Getting started

```bash
# install dependencies
npm install

# run the dev server
npm run dev
# → http://localhost:3000

# type-check
npm run type-check

# production build
npm run build
npm run start
```

Requires **Node.js 18.17+**.

---

## 2. Editing content

Everything text-based — bio, stats, skills, certifications, case studies, experience, education, services, contact links — lives in **one file**:

```
src/lib/data.ts
```

Change a value there and it updates everywhere it's used. You do not need to touch component code to update content.

Assets:
- `public/images/profile.jpg` — hero/headshot photo
- `public/documents/` — the four certificate PDFs + the downloadable resume PDF (all copied in directly from what you provided)

---

## 3. Project structure

```
src/
  app/
    layout.tsx        Root layout: fonts, metadata, JSON-LD, theme provider, header/footer
    page.tsx           Assembles all sections in order
    globals.css         Tailwind layers, base theme, focus states, reduced-motion support
    sitemap.ts          Auto-generated /sitemap.xml
    robots.ts            Auto-generated /robots.txt
    loading.tsx           Route-level skeleton loader
    error.tsx               Route-level error boundary
    not-found.tsx             Custom 404

  components/
    layout/
      header.tsx         Sticky nav, mobile menu, theme toggle, resume download
      footer.tsx           Site footer, nav + social links
    sections/
      hero.tsx            Headline, CTAs, signature ledger visual
      about.tsx            Bio + animated stats + education timeline
      skills.tsx            Tabbed, categorized skills with animated progress bars
      certifications.tsx     Certificate cards linking to the real PDF files
      work.tsx                 Filterable, expandable case study cards
      experience.tsx            Work history timeline
      testimonials.tsx           Trust indicators (see note below)
      services.tsx                 Service packages with pricing
      contact.tsx                    Validated contact form + WhatsApp/email/LinkedIn
    ui/                        Reusable primitives: Button, Card, Badge, Input, Textarea, Label, SectionHeading
    ledger-strip.tsx          The site's signature visual — see "Design concept" below
    animated-counter.tsx     Scroll-triggered number counter
    theme-provider.tsx      next-themes wrapper
    theme-toggle.tsx          Light/dark toggle

  lib/
    data.ts    All real content — single source of truth
    utils.ts    cn() className helper

  types/
    index.ts    Shared TypeScript interfaces
```

---

## 4. Design concept: "The Reconciled Ledger"

Rather than a generic SaaS-template look, the design is grounded in the actual material of bookkeeping:

- **Palette** — ink navy, paper off-white, a "reconciled" green (used the way an accountant uses a tick mark — sparingly, for the thing that's actually balanced), and a certification gold for credentials.
- **Type** — Plus Jakarta Sans for headings/body, JetBrains Mono for every number, date, and data point (tabular figures, like a real ledger).
- **Signature element** — `LedgerStrip` in the hero: a mock ledger that animates line-by-line to a final `Rs 0.00 · Reconciled` state, a literal visualization of Mubashar's real zero-variance reconciliation achievement.
- **Section labels** — styled as ledger headers (`Section · About`) rather than generic numbered steps.

---

## 5. Honesty notes (read before publishing)

A few things were intentionally scoped down or left as clearly-marked placeholders rather than fabricated, so the site never claims something that isn't true:

- **Testimonials**: no fabricated client quotes or logos have been added, since none currently exist. The "Why work with me" section uses verifiable trust points instead (certifications, scores, the reconciliation discipline). Swap in real testimonials in `src/lib/data.ts` as you collect them — a `testimonials` array pattern is easy to add back once you have quotes to use.
- **Case studies**: all four are real, drawn directly from the CV (Hassan Accountancy bookkeeping cycle, the Rs 143,000 error-correction exercise, payroll/VAT processing, and the Excel dashboards). None are fabricated.
- **Blog**: not included in this build. The brief asked for one, but there's no existing article content to feature yet, and an empty blog undermines trust more than it builds it. Add a `src/app/blog/` route with MDX when there's real content to publish — happy to scaffold that on request.
- **Live demo / GitHub links** on the Work section: omitted, since this is bookkeeping work, not software — there's no public repo or demo URL to link to. Case studies link to the real certificate/resume PDFs instead.
- **Domain**: `metadataBase` and JSON-LD both point to a placeholder `https://mubasharhassan.com`. Update this in `src/app/layout.tsx` and `src/app/sitemap.ts`/`robots.ts` once a real domain is live.

---

## 6. Wiring up the contact form for real

Right now the "Send message" button validates the form client-side (via `react-hook-form` + `zod`) and opens the visitor's email client pre-filled with their message — so it works with zero backend and zero cost.

To capture submissions server-side instead:
1. Create `src/app/api/contact/route.ts` as a Next.js Route Handler.
2. Point it at a form service (Resend, Formspree, Web3Forms) or your own email-sending logic.
3. In `src/components/sections/contact.tsx`, replace the `mailto:` redirect inside `onSubmit` with a `fetch("/api/contact", { method: "POST", body: JSON.stringify(data) })` call.

## 7. Calendly

The brief asked for Calendly integration. There's no Calendly link provided yet — add one in `src/lib/data.ts` (a `calendlyUrl` field) and embed it with `@calendly/inline-widget` or a simple iframe on the Contact section once you have an account.

---

## 8. Deploying to Vercel

```bash
npm i -g vercel
vercel
```

Or connect the repo directly at [vercel.com/new](https://vercel.com/new) — zero config needed, this is a standard Next.js App Router project.

**Before going live:**
- [ ] Replace `https://mubasharhassan.com` with the real domain in `layout.tsx`, `sitemap.ts`, `robots.ts`
- [ ] Add real `og:image` dimensions/asset if you want a custom social card beyond the profile photo
- [ ] Wire the contact form to a real backend (see §6)
- [ ] Add analytics (Vercel Analytics: `npm i @vercel/analytics`, then `<Analytics />` in `layout.tsx`)
- [ ] Swap the favicon in `public/`

---

## 9. Accessibility

- Semantic landmarks (`header`, `main`, `footer`)
- Visible focus rings on every interactive element (`globals.css`)
- `prefers-reduced-motion` respected — all Framer Motion animations reduce to near-instant
- Skip-to-content link
- Form fields have associated `<Label>`s and inline error messaging
- Color contrast checked against WCAG AA for both light and dark themes
