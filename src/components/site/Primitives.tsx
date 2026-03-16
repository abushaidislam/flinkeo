import Link from "next/link";
import { cn } from "@/lib/cn";

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
  const base =
    "inline-flex items-center justify-center gap-2 rounded-none border px-4 py-2 text-[12px] font-semibold tracking-[0.16em] uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--panel)]";

  const styles: Record<ButtonVariant, string> = {
    primary:
      "border-[color:var(--text)] bg-[color:var(--panel)] text-[color:var(--text)] hover:-translate-y-[1px] hover:bg-[color:var(--accent)] hover:border-[color:var(--accent)] hover:text-[color:var(--panel)] active:translate-y-0 active:bg-[color:var(--text)] active:border-[color:var(--text)]",
    secondary:
      "border-[color:var(--border)] bg-transparent text-[color:var(--text)] hover:-translate-y-[1px] hover:border-[color:var(--text)] hover:bg-[color:var(--card)] active:translate-y-0",
    ghost:
      "border-transparent bg-transparent text-[color:var(--textMuted)] hover:-translate-y-[1px] hover:text-[color:var(--text)] hover:border-[color:var(--border)] hover:bg-[color:var(--card)] active:translate-y-0",
  };

  return (
    <Link href={href} className={cn(base, styles[variant], className)}>
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
  return (
    <div
      className={cn(
        "bg-[color:var(--card)] border border-[color:var(--border)]",
        className,
      )}
    >
      {children}
    </div>
  );
}

