import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-[var(--radiusSm)] border",
    "px-4 py-2.5 text-[12px] font-semibold tracking-[0.16em] uppercase",
    "transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--panel)]",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        default:
          "border-[color:var(--text)] bg-[color:var(--text)] text-[color:var(--panel)] shadow-[var(--shadowSm)] hover:bg-[color:var(--accent)] hover:border-[color:var(--accent)] hover:text-[color:var(--text)] active:bg-[color:var(--text)] active:border-[color:var(--text)] active:text-[color:var(--panel)]",
        secondary:
          "border-[color:var(--border)] bg-[color:var(--panel)] text-[color:var(--text)] hover:border-[color:var(--text)] hover:bg-[color:var(--card)]",
        ghost:
          "border-transparent bg-transparent text-[color:var(--textMuted)] hover:text-[color:var(--text)] hover:border-[color:var(--border)] hover:bg-[color:var(--card)]",
      },
      size: {
        default: "",
        sm: "px-3 py-2 text-[11px]",
        lg: "px-5 py-3 text-[12px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { buttonVariants };

