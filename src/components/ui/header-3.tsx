"use client";

import * as React from "react";
import Link from "next/link";
import { createPortal } from "react-dom";
import {
  ArrowUpRight,
  Blocks,
  BookOpenText,
  BriefcaseBusiness,
  FileText,
  Globe,
  Handshake,
  HelpCircle,
  Layers3,
  LucideIcon,
  MessageSquareQuote,
  PenTool,
  Route,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

type LinkItem = {
  title: string;
  href: string;
  icon: LucideIcon;
  description?: string;
};

const serviceLinks: LinkItem[] = [
  {
    title: "Portfolio Systems",
    href: "/services",
    description: "Editorial case studies and project-led storytelling.",
    icon: Sparkles,
  },
  {
    title: "Company Websites",
    href: "/services",
    description: "Clear positioning, trust signals, and conversion paths.",
    icon: Globe,
  },
  {
    title: "Documentation Hubs",
    href: "/services",
    description: "Readable product docs with disciplined navigation.",
    icon: BookOpenText,
  },
  {
    title: "Design Systems",
    href: "/process",
    description: "Reusable layout logic for growing content libraries.",
    icon: Blocks,
  },
  {
    title: "Launch Support",
    href: "/contact",
    description: "Fast iteration for founders, teams, and studio launches.",
    icon: PenTool,
  },
  {
    title: "Site Architecture",
    href: "/process",
    description: "Structure that keeps pages sharp as the product expands.",
    icon: Layers3,
  },
];

const studioLinks: LinkItem[] = [
  {
    title: "Process",
    href: "/process",
    description: "How Flinkeo shapes structure, tone, and execution.",
    icon: Route,
  },
  {
    title: "Selected Work",
    href: "/work",
    description: "Recent websites built with deliberate hierarchy.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Testimonials",
    href: "/",
    description: "What clients say after launch and handoff.",
    icon: MessageSquareQuote,
  },
];

const studioSupportLinks: LinkItem[] = [
  {
    title: "About",
    href: "/about",
    icon: Sparkles,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: FileText,
  },
  {
    title: "FAQ",
    href: "/faq",
    icon: HelpCircle,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: Handshake,
  },
];

export function Header() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScroll(12);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  React.useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-[color:var(--border)] bg-[color:rgba(252,250,246,0.9)] backdrop-blur-xl"
          : "border-transparent bg-[color:rgba(252,250,246,0.78)] backdrop-blur-md",
      )}
    >
      <nav className="mx-auto flex h-[72px] w-full max-w-[1200px] items-center justify-between gap-4 px-6 sm:px-10 lg:px-12">
        <div className="flex items-center gap-5">
          <Link
            href="/"
            className="group inline-flex items-center gap-3 rounded-full border border-transparent px-3 py-2 transition-colors hover:border-[color:var(--border)] hover:bg-[color:var(--card)]"
            aria-label="Flinkeo home"
          >
            <span className="grid size-8 place-items-center rounded-full border border-[color:var(--border)] bg-[color:var(--panel)] text-[10px] font-semibold tracking-[0.2em] uppercase text-[color:var(--text)]">
              F
            </span>
            <span className="text-[12px] font-semibold tracking-[0.28em] uppercase text-[color:var(--text)]">
              Flinkeo
            </span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                <NavigationMenuContent className="p-2">
                  <ul className="grid w-[680px] grid-cols-2 gap-3 rounded-[18px] bg-[color:var(--card)] p-3">
                    {serviceLinks.map((item) => (
                      <li key={item.title}>
                        <ListItem {...item} />
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Studio</NavigationMenuTrigger>
                <NavigationMenuContent className="p-2">
                  <div className="grid w-[640px] grid-cols-[1.1fr_0.9fr] gap-3 rounded-[18px] bg-[color:var(--card)] p-3">
                    <ul className="space-y-3 rounded-[16px] border border-[color:var(--border)] bg-[color:var(--panel)] p-3">
                      {studioLinks.map((item) => (
                        <li key={item.title}>
                          <ListItem {...item} />
                        </li>
                      ))}
                    </ul>

                    <div className="grid content-between gap-4 rounded-[16px] border border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(240,200,98,0.18),rgba(252,250,246,0.92))] p-4">
                      <div className="space-y-3">
                        <div className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[color:var(--textMuted)]">
                          Explore
                        </div>
                        <ul className="space-y-2">
                          {studioSupportLinks.map((item) => (
                            <li key={item.title}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.href}
                                  className="flex items-center justify-between rounded-[14px] border border-transparent px-3 py-3 text-[12px] font-medium tracking-[0.02em] text-[color:var(--textSecondary)] transition-colors hover:border-[color:var(--border)] hover:bg-[color:var(--panel)] hover:text-[color:var(--text)]"
                                >
                                  <span className="inline-flex items-center gap-2">
                                    <item.icon className="size-4" />
                                    {item.title}
                                  </span>
                                  <ArrowUpRight className="size-4" />
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <p className="max-w-[26ch] text-[13px] leading-relaxed text-[color:var(--textSecondary)]">
                        Premium websites built with calm hierarchy, fast
                        loading, and durable structure.
                      </p>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuLink asChild className="inline-flex">
                <Link
                  href="/work"
                  className="inline-flex h-10 items-center rounded-full px-4 text-[11px] font-semibold tracking-[0.16em] uppercase text-[color:var(--textSecondary)] transition-colors hover:bg-[color:var(--card)] hover:text-[color:var(--text)]"
                >
                  Work
                </Link>
              </NavigationMenuLink>

              <NavigationMenuLink asChild className="inline-flex">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center rounded-full px-4 text-[11px] font-semibold tracking-[0.16em] uppercase text-[color:var(--textSecondary)] transition-colors hover:bg-[color:var(--card)] hover:text-[color:var(--text)]"
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="secondary">
            <Link href="/work">See Work</Link>
          </Button>
          <Button asChild>
            <Link href="/contact">Start a Project</Link>
          </Button>
        </div>

        <Button
          size="sm"
          variant="secondary"
          onClick={() => setOpen((current) => !current)}
          className="md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
        >
          <MenuToggleIcon open={open} className="size-5" duration={320} />
        </Button>
      </nav>

      <MobileMenu open={open} className="flex flex-col justify-between gap-8 overflow-y-auto">
        <div className="grid gap-6">
          <MenuGroup label="Services" items={serviceLinks} />
          <MenuGroup
            label="Studio"
            items={[...studioLinks, ...studioSupportLinks]}
          />
        </div>

        <div className="grid gap-2">
          <Button asChild variant="secondary" className="w-full">
            <Link href="/work" onClick={() => setOpen(false)}>
              See Work
            </Link>
          </Button>
          <Button asChild className="w-full">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Start a Project
            </Link>
          </Button>
        </div>
      </MobileMenu>
    </header>
  );
}

type MobileMenuProps = React.ComponentProps<"div"> & {
  open: boolean;
};

function MobileMenu({
  open,
  children,
  className,
  ...props
}: MobileMenuProps) {
  if (!open || typeof window === "undefined") {
    return null;
  }

  return createPortal(
    <div
      id="mobile-menu"
      className="fixed inset-x-0 bottom-0 top-[72px] z-40 border-y border-[color:var(--border)] bg-[color:rgba(252,250,246,0.96)] backdrop-blur-xl md:hidden"
    >
      <div className={cn("size-full p-4", className)} {...props}>
        {children}
      </div>
    </div>,
    document.body,
  );
}

function MenuGroup({
  label,
  items,
}: {
  label: string;
  items: LinkItem[];
}) {
  return (
    <div className="grid gap-3">
      <div className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]">
        {label}
      </div>
      <div className="grid gap-3">
        {items.map((item) => (
          <MenuLinkRow key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}

function MenuLinkRow({ item }: { item: LinkItem }) {
  return (
    <Link
      href={item.href}
      className="flex items-start gap-3 rounded-[18px] border border-[color:var(--border)] bg-[color:var(--panel)] p-4"
    >
      <div className="grid size-11 shrink-0 place-items-center rounded-[14px] border border-[color:var(--border)] bg-[color:var(--card)]">
        <item.icon className="size-5 text-[color:var(--text)]" />
      </div>
      <div className="space-y-1">
        <div className="text-[13px] font-semibold text-[color:var(--text)]">
          {item.title}
        </div>
        {item.description ? (
          <p className="text-[12px] leading-relaxed text-[color:var(--textSecondary)]">
            {item.description}
          </p>
        ) : null}
      </div>
    </Link>
  );
}

function ListItem({
  title,
  description,
  icon: Icon,
  href,
}: LinkItem) {
  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className="flex gap-3 rounded-[16px] border border-transparent bg-[color:var(--panel)] p-3 transition-colors hover:border-[color:var(--border)] hover:bg-[color:rgba(252,250,246,0.92)]"
      >
        <div className="grid size-12 shrink-0 place-items-center rounded-[14px] border border-[color:var(--border)] bg-[color:rgba(240,200,98,0.14)]">
          <Icon className="size-5 text-[color:var(--text)]" />
        </div>
        <div className="space-y-1">
          <div className="text-[13px] font-semibold text-[color:var(--text)]">
            {title}
          </div>
          {description ? (
            <p className="text-[12px] leading-relaxed text-[color:var(--textSecondary)]">
              {description}
            </p>
          ) : null}
        </div>
      </Link>
    </NavigationMenuLink>
  );
}

function useScroll(threshold: number) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}
