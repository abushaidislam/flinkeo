import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-semibold tracking-[0.14em] uppercase",
  {
    variants: {
      variant: {
        default:
          "bg-[color:var(--card)] border-[color:var(--border)] text-[color:var(--textSecondary)]",
        emphasis:
          "bg-[color:var(--accent)] border-[color:var(--accent)] text-[color:var(--text)]",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

