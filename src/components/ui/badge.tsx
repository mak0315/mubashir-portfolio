import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border px-2.5 py-0.5 text-xs font-mono font-medium tracking-wide transition-colors",
  {
    variants: {
      variant: {
        default: "border-ink/15 bg-ink/5 text-ink dark:border-paper/15 dark:bg-paper/5 dark:text-paper",
        reconciled: "border-reconciled/30 bg-reconciled-dim text-reconciled dark:bg-reconciled/10 dark:text-reconciled-light",
        gold: "border-gold/30 bg-gold-dim text-gold dark:bg-gold/10 dark:text-gold-light",
        outline: "border-ink/20 text-ink dark:border-paper/20 dark:text-paper",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
