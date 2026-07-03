export interface Certification {
  id: string;
  issuer: string;
  title: string;
  date: string;
  score: string | null;
  validUntil: string | null;
  file: string;
  accent: "reconciled" | "gold";
}

export interface SkillItem {
  name: string;
  level: number;
  note?: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  items: SkillItem[];
}

export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudy {
  id: string;
  category: string;
  title: string;
  summary: string;
  metrics: CaseStudyMetric[];
  detail: string;
  tools: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  org: string;
  period: string;
  points: string[];
}

export interface EducationItem {
  id: string;
  title: string;
  org: string;
  period: string;
  note: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  price: string;
  highlighted: boolean;
}

export interface ContactFormValues {
  name: string;
  email: string;
  service: string;
  message: string;
}
