import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[140px] w-full rounded-md border border-ink/15 bg-white/70 px-4 py-3 text-sm text-ink placeholder:text-ink/40 transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reconciled focus-visible:border-reconciled",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "dark:border-paper/15 dark:bg-ink-soft/50 dark:text-paper dark:placeholder:text-paper/40",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
