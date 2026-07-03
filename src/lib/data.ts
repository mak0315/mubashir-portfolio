// All content below is sourced directly from Mubashar Hassan's certificates and CV.
// Edit this single file to update site-wide content — nothing else needs to change.

export const profile = {
  name: "Mubashar Hassan",
  role: "Accounting & Bookkeeping Professional",
  tagline: "QuickBooks & Xero Certified · IFRS Trained",
  location: "Havelian, District Abbottabad, KPK, Pakistan",
  phone: "0318-1555893",
  email: "mubjob01@gmail.com",
  linkedin: "https://www.linkedin.com/in/mubashar-hassan-b6192a419/",
  whatsapp: "https://wa.me/923181555893",
  heroStatement:
    "I close the books so business owners don't have to think about them — bank reconciliations that land on zero, payroll that's never late, and financial statements you can hand to a bank or an investor without a second look.",
  about: `I came into accounting the practical way — by doing the work, not just studying the theory. While teaching Science, English and Maths at a private school in Havelian, I started building a structured, self-directed accounting programme for myself: journal entries and trial balances first, then full financial statements, then the software that runs modern finance teams.

Two years later I hold ProAdvisor certification in QuickBooks Online (Level 1 & 2) and both Xero associate and professional certifications, and I've run real bookkeeping cycles — not textbook exercises — through to a fully reconciled £0.00 variance. I've traced misclassified entries back to source, processed statutory payroll deductions (EOBI, PESSI, Provident Fund), filed VAT returns, and built the Excel dashboards that turn a ledger into a decision a business owner can actually use.

I'm now taking on bookkeeping, VAT/tax filing, payroll and reporting work for small businesses and accounting firms who want someone who treats a one-rupee discrepancy as seriously as a six-figure one.`,
  resumeUrl: "/documents/Mubashar_Hassan_Resume.pdf",
  profileImage: "/images/profile.jpg",
};

export const stats = [
  { label: "Reconciliation variance achieved", value: "Rs 0.00", suffix: "" },
  { label: "Misclassified entries traced & corrected", value: "6", suffix: "" },
  { label: "Value of corrections identified", value: "Rs 143,000", suffix: "" },
  { label: "Certifications held", value: "4", suffix: "" },
];

export const certifications: Certification[] = [
  {
    id: "xero-l2",
    issuer: "Xero",
    title: "Xero Certified Professional — Level 2",
    date: "24 June 2026",
    score: "92 / 100",
    validUntil: "24 June 2027",
    file: "/documents/Xero_Certified_Professional_L2.pdf",
    accent: "reconciled",
  },
  {
    id: "xero-l1",
    issuer: "Xero",
    title: "Xero Certified Associate — Level 1",
    date: "13 June 2026",
    score: "87 / 100",
    validUntil: "13 June 2027",
    file: "/documents/Xero_Certified_Associate_L1.pdf",
    accent: "reconciled",
  },
  {
    id: "qbo-l2",
    issuer: "Intuit",
    title: "QuickBooks Online ProAdvisor — Level 2",
    date: "23 May 2026",
    score: null,
    validUntil: null,
    file: "/documents/QuickBooks_ProAdvisor_L2.pdf",
    accent: "gold",
  },
  {
    id: "qbo-l1",
    issuer: "Intuit",
    title: "QuickBooks Online ProAdvisor — Level 1",
    date: "20 May 2026",
    score: null,
    validUntil: null,
    file: "/documents/QuickBooks_ProAdvisor_L1.pdf",
    accent: "gold",
  },
];

import type { SkillGroup, CaseStudy, ExperienceItem, EducationItem, Service, Certification } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    id: "software",
    title: "Accounting Software",
    items: [
      { name: "QuickBooks Online", level: 90, note: "Advanced" },
      { name: "Xero", level: 92, note: "Certified Professional" },
      { name: "Microsoft Excel", level: 88, note: "Advanced" },
    ],
  },
  {
    id: "core",
    title: "Core Accounting",
    items: [
      { name: "Double Entry Bookkeeping", level: 95 },
      { name: "Financial Statements (IS, BS, CF)", level: 90 },
      { name: "Bank Reconciliation", level: 95 },
      { name: "Accounts Payable & Receivable", level: 88 },
      { name: "Payroll (EOBI, PESSI)", level: 85 },
      { name: "VAT / Sales Tax Returns (17%)", level: 85 },
      { name: "Depreciation (SLM & Reducing Balance)", level: 87 },
      { name: "Inventory Valuation (FIFO, IAS 2)", level: 82 },
    ],
  },
  {
    id: "tax",
    title: "Pakistan Tax Knowledge",
    items: [
      { name: "FBR IRIS — Returns Filing", level: 85 },
      { name: "NTN Registration", level: 85 },
      { name: "Income Tax — Progressive Slab Method", level: 80 },
      { name: "Withholding Tax (Sec. 149–155)", level: 78 },
      { name: "Sales Tax Registration & Monthly Filing", level: 82 },
      { name: "ATL / Filer vs Non-Filer", level: 85 },
      { name: "Freelancer Foreign Remittance (1% WHT)", level: 80 },
    ],
  },
  {
    id: "standards",
    title: "Standards & Frameworks",
    items: [
      { name: "IFRS — IAS 1, 2, 16, 37, 38", level: 78 },
      { name: "ACCA F3 Financial Accounting (self-study)", level: 75 },
      { name: "Provisions & Contingent Liabilities", level: 78 },
      { name: "Consolidated Accounts (basic)", level: 65 },
      { name: "Ratio Analysis (Profitability, Liquidity, Gearing)", level: 82 },
    ],
  },
  {
    id: "excel",
    title: "Advanced Excel",
    items: [
      { name: "VLOOKUP / INDEX-MATCH / XLOOKUP", level: 90 },
      { name: "SUMIF / SUMIFS / COUNTIF", level: 90 },
      { name: "Pivot Tables & Charts", level: 88 },
      { name: "Conditional Formatting & Data Validation", level: 85 },
      { name: "Financial Dashboard Design", level: 85 },
      { name: "Error Detection & Correction", level: 88 },
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "hassan-accountancy",
    category: "Full Bookkeeping Cycle",
    title: "Hassan Accountancy — Chart of Accounts to Reconciled Books",
    summary:
      "Built a complete QuickBooks Online company from zero — a 123-account chart of accounts — and ran two full bookkeeping cycles end to end.",
    metrics: [
      { label: "Accounts structured", value: "123" },
      { label: "Bookkeeping cycles completed", value: "2" },
      { label: "Bank reconciliation variance", value: "Rs 0.00" },
    ],
    detail:
      "Designed the chart of accounts from the ground up to match a Pakistani small-business structure, then processed a full cycle of transactions — sales, purchases, expenses, and bank feeds — through to a fully reconciled trial balance with zero variance against the bank statement, twice.",
    tools: ["QuickBooks Online", "Bank Reconciliation", "Chart of Accounts Design"],
  },
  {
    id: "error-correction",
    category: "Error Detection & Correction",
    title: "Tracing Rs 143,000 in Misclassified Entries",
    summary:
      "Audited a working ledger for classification errors, identified six misclassified transactions, and rebuilt the affected statements.",
    metrics: [
      { label: "Entries identified", value: "6" },
      { label: "Value corrected", value: "Rs 143,000" },
      { label: "Statements rebuilt", value: "IS + BS" },
    ],
    detail:
      "Worked backward from an out-of-balance trial balance to find the root cause, corrected the journal entries, and produced a clean, audit-ready Income Statement and Balance Sheet reflecting the fix.",
    tools: ["Journal Entries", "Trial Balance", "Financial Statements"],
  },
  {
    id: "payroll-vat",
    category: "Payroll & Compliance",
    title: "Statutory Payroll & VAT/Sales Tax Filing",
    summary:
      "Processed full payroll cycles with statutory deductions and filed VAT/Sales Tax returns across both QuickBooks and Xero.",
    metrics: [
      { label: "Statutory deductions", value: "EOBI · PESSI · PF" },
      { label: "Platforms", value: "QuickBooks + Xero" },
      { label: "Filing type", value: "VAT / Sales Tax" },
    ],
    detail:
      "Ran payroll including EOBI, PESSI and Provident Fund deductions, prepared depreciation schedules, and filed VAT/Sales Tax returns — cross-platform, in both QuickBooks Online and Xero, to stay tool-agnostic for clients.",
    tools: ["Payroll Processing", "VAT Returns", "Depreciation Schedules"],
  },
  {
    id: "excel-dashboards",
    category: "Reporting & Dashboards",
    title: "Client-Ready Excel Financial Dashboards",
    summary:
      "Built advanced Excel dashboards for financial reporting using formulas, pivot tables and conditional formatting.",
    metrics: [
      { label: "Core functions", value: "VLOOKUP · SUMIFS" },
      { label: "Format", value: "Pivot Tables" },
      { label: "Output", value: "Client-ready" },
    ],
    detail:
      "Converted raw ledger exports into interactive dashboards — pivot-driven summaries, conditional-formatting alerts for outliers, and mini financial reports designed to be handed directly to a business owner or partner.",
    tools: ["Excel", "Pivot Tables", "Conditional Formatting"],
  },
];

export const experience: ExperienceItem[] = [
  {
    id: "teacher",
    role: "Private School Teacher",
    org: "Havelian, Abbottabad",
    period: "2024 – 2026",
    points: [
      "Taught Science, English and Mathematics to students up to Grade 8",
      "Developed lesson plans and assessment materials across multiple subjects simultaneously",
      "Managed classroom administration, student records and performance tracking",
    ],
  },
  {
    id: "bookkeeping-practice",
    role: "Bookkeeping & Accounting Projects",
    org: "Self-Directed Practice",
    period: "2024 – 2026",
    points: [
      "Set up a complete QuickBooks Online company with a 123-account chart of accounts across two full bookkeeping cycles at Rs 0.00 reconciliation variance",
      "Identified and corrected 6 misclassified entries totalling Rs 143,000; rebuilt the Income Statement and Balance Sheet",
      "Processed full payroll including EOBI, PESSI and Provident Fund deductions; filed VAT/Sales Tax returns and depreciation schedules in both QuickBooks and Xero",
      "Built advanced Excel financial dashboards using VLOOKUP, SUMIFS, pivot tables and conditional formatting for client-ready reporting",
    ],
  },
];

export const education: EducationItem[] = [
  {
    id: "bs",
    title: "BS — Political Science",
    org: "Government Degree College, Havelian",
    period: "2022 – 2026",
    note: "4-Year Honours Programme",
  },
  {
    id: "fsc",
    title: "FSc — Pre-Engineering / Computer Science",
    org: "International Public School and College, Havelian",
    period: "2020 – 2021",
    note: "702 / 1100",
  },
  {
    id: "self-study",
    title: "Self-Directed Professional Accounting Programme",
    org: "Structured self-study curriculum",
    period: "2024 – 2026",
    note: "Fundamentals → Software Certification → IFRS & Pakistan Tax Law",
  },
];

export const services: Service[] = [
  {
    id: "bookkeeping",
    title: "Monthly Bookkeeping",
    description:
      "Ongoing transaction processing, bank reconciliation and ledger maintenance in QuickBooks or Xero.",
    features: [
      "Bank & credit card reconciliation",
      "Accounts payable & receivable tracking",
      "Monthly trial balance & reports",
      "Chart of accounts setup & cleanup",
    ],
    price: "From Rs 15,000 / month",
    highlighted: false,
  },
  {
    id: "vat-tax",
    title: "VAT / Tax Filing",
    description:
      "Sales tax and income tax return preparation and filing through the FBR IRIS portal.",
    features: [
      "Monthly Sales Tax return filing",
      "NTN registration support",
      "Withholding tax calculations",
      "Filer / ATL status guidance",
    ],
    price: "From Rs 5,000 / filing",
    highlighted: true,
  },
  {
    id: "payroll",
    title: "Payroll Processing",
    description:
      "End-to-end payroll runs with statutory EOBI, PESSI and Provident Fund deductions handled correctly.",
    features: [
      "Payroll calculation & payslips",
      "EOBI / PESSI / PF deductions",
      "Payroll tax compliance",
      "Monthly payroll reports",
    ],
    price: "From Rs 10,000 / month",
    highlighted: false,
  },
  {
    id: "reporting",
    title: "Reporting & Excel Dashboards",
    description:
      "One-off or recurring financial dashboards and reports built for decision-making, not just compliance.",
    features: [
      "Custom Excel dashboards",
      "Financial statement packages",
      "Ratio & variance analysis",
      "Error detection & cleanup",
    ],
    price: "Project-based — quote on request",
    highlighted: false,
  },
];

export const socials = [
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "WhatsApp", href: profile.whatsapp, icon: "whatsapp" },
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Work", href: "#work" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];
