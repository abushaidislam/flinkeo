import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Card as UiCard } from "@/components/ui/card";

type ButtonVariant = "primary" | "secondary" | "ghost";

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
}) {
  const mappedVariant: "default" | "secondary" | "ghost" =
    variant === "primary" ? "default" : variant;

  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant: mappedVariant }), className)}
    >
      {children}
    </Link>
  );
}

export function InlineLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "underline underline-offset-4 decoration-[color:var(--border)] hover:decoration-[color:var(--text)] transition-colors",
        className,
      )}
    >
      {children}
    </Link>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-3", className)}>
      {eyebrow ? (
        <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
          {eyebrow}
        </div>
      ) : null}
      <div className="grid gap-2">
        <h2 className="text-[22px] leading-tight font-semibold tracking-[-0.02em] text-[color:var(--text)] md:text-[26px]">
          {title}
        </h2>
        {description ? (
          <p className="max-w-[70ch] text-[14px] leading-relaxed text-[color:var(--textSecondary)]">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <UiCard className={className}>{children}</UiCard>;
}

