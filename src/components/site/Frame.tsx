import { cn } from "@/lib/utils";

export function Frame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="min-h-dvh bg-[color:var(--outer)] text-[color:var(--text)]">
      <div className="w-full">
        <div
          className={cn(
            "bg-[color:var(--panel)] border border-[color:var(--border)]",
            "shadow-[var(--shadowMd)] overflow-hidden",
            "min-h-dvh",
            className,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function PanelSection({
  children,
  className,
  padded = true,
}: {
  children: React.ReactNode;
  className?: string;
  padded?: boolean;
}) {
  return (
    <section
      className={cn(
        "border-t border-[color:var(--border)]",
        padded ? "px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20" : "",
        className,
      )}
    >
      <div className="mx-auto w-full max-w-[1200px]">{children}</div>
    </section>
  );
}

