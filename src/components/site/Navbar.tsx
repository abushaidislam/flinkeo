import Link from "next/link";
import { ButtonLink } from "@/components/site/Primitives";
import { cn } from "@/lib/cn";

const links = [
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-[color:var(--panel)]/95 backdrop-blur-[2px] border-b border-[color:var(--border)]">
      <div className="px-6 py-4 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className={cn(
                "text-[12px] font-semibold tracking-[0.28em] uppercase",
                "text-[color:var(--text)]",
              )}
              aria-label="Flinkeo home"
            >
              FLINKEO
            </Link>

            <nav className="hidden md:flex items-center gap-5">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "text-[12px] tracking-[0.14em] uppercase",
                    "text-[color:var(--textSecondary)] hover:text-[color:var(--text)]",
                    "transition-colors",
                  )}
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <ButtonLink
              href="/contact"
              variant="secondary"
              className="hidden sm:inline-flex"
            >
              Request a Review
            </ButtonLink>
            <ButtonLink href="/contact" variant="primary" className="sm:hidden">
              Contact
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}

