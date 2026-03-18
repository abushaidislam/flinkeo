import Link from "next/link";
import { cn } from "@/lib/utils";

const links = [
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
      <div className="grid gap-8 border-t border-[color:var(--border)] pt-8 md:grid-cols-[1.2fr_0.8fr]">
        <div className="grid gap-3">
          <div className="text-[12px] font-semibold tracking-[0.28em] uppercase text-[color:var(--text)]">
            FLINKEO
          </div>
          <div className="max-w-[62ch] text-[13px] leading-relaxed text-[color:var(--textSecondary)]">
            A modern web studio building calm, precise, premium digital systems.
          </div>
          <div className="text-[12px] text-[color:var(--textSecondary)]">
            <span className="text-[color:var(--textMuted)]">Email</span>{" "}
            hello@flinkeo.online
          </div>
        </div>

        <div className="grid gap-6 md:justify-self-end">
          <div className="grid grid-cols-2 gap-x-10 gap-y-3">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-[12px] tracking-[0.14em] uppercase",
                  "text-[color:var(--textSecondary)] hover:text-[color:var(--text)] transition-colors",
                )}
              >
                {l.label}
              </Link>
            ))}
          </div>
          <div className="grid gap-2 text-[12px] text-[color:var(--textSecondary)]">
            <div>
              <span className="text-[color:var(--textMuted)]">Social</span>{" "}
              Instagram / X / GitHub
            </div>
            <div className="text-[11px] tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
              © {new Date().getFullYear()} Flinkeo. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

