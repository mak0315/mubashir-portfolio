import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Formats a numeric string like "143000" or a display string like "Rs 143,000" for the ledger strip. */
export function formatLedgerValue(value: string): string {
  return value;
}
