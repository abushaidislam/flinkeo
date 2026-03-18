import Link from "next/link";
import { ButtonLink } from "@/components/site/Primitives";
import { cn } from "@/lib/utils";

const links = [
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 bg-(--panel)/85 backdrop-blur-md border-b border-(--border) shadow-[0_1px_0_rgba(20,20,20,0.04)]">
      <div className="px-6 py-4 sm:px-10 lg:px-12">
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className={cn(
                "text-[12px] font-semibold tracking-[0.28em] uppercase",
                "text-(--text)",
              )}
              aria-label="Flinkeo home"
            >
              FLINKEO
            </Link>

            <nav className="hidden md:flex items-center gap-5">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-[12px] tracking-[0.14em] uppercase",
                    "text-(--textSecondary) hover:text-(--text)",
                    "transition-colors decoration-[color:var(--accent)] underline-offset-[8px] hover:underline",
                  )}
                >
                  {link.label}
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
              Start a Project
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
