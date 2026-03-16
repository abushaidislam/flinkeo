import { cn } from "@/lib/cn";

export function Frame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="min-h-dvh bg-[color:var(--outer)] text-[color:var(--text)]">
      <div className="mx-auto w-full max-w-[1200px] px-4 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-16">
        <div
          className={cn(
            "bg-[color:var(--panel)] border border-[color:var(--border)]",
            "min-h-[calc(100dvh-5rem)]",
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
        padded ? "px-6 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16" : "",
        className,
      )}
    >
      {children}
    </section>
  );
}

