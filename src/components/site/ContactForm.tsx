"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Mail,
  MapPin,
  MessageCircleMore,
  Minus,
  PlayCircle,
  Plus,
  Send,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const serviceOptions = [
  "Website design",
  "Content creation",
  "UX design",
  "Strategy & consulting",
  "User research",
  "Other",
];

const navItems = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#", hasChevron: true },
  { label: "Solutions", href: "#", hasChevron: true },
  { label: "Pricing", href: "#" },
  { label: "Resources", href: "#", hasChevron: true },
  { label: "Company", href: "#", hasChevron: true },
];

const quickLinks = [
  {
    label: "Start a live chat",
    href: "mailto:hello@flinkeo.com?subject=Live%20chat%20request",
    icon: MessageCircleMore,
  },
  {
    label: "Shoot us an email",
    href: "mailto:hello@flinkeo.com",
    icon: Mail,
  },
  {
    label: "Message us on Twitter",
    href: "https://x.com",
    icon: Send,
  },
];

export default function ContactPageReferenceStyle() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const fullName = `${firstName} ${lastName}`.trim();

  function toggleService(service: string) {
    setSelectedServices((current) =>
      current.includes(service)
        ? current.filter((item) => item !== service)
        : [...current, service],
    );
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      setError("First name, last name, and email are required.");
      return;
    }

    setStatus("submitting");
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: fullName,
          email,
          projectType:
            selectedServices.length > 0
              ? selectedServices.join(", ")
              : "General inquiry",
          budget: phoneNumber.trim()
            ? `${countryCode} ${phoneNumber.trim()}`
            : undefined,
          timeline: "Contact page form",
          message: "Contact request submitted from reference-style contact page.",
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        setError(data?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setFirstName("");
      setLastName("");
      setEmail("");
      setCountryCode("+1");
      setPhoneNumber("");
      setSelectedServices([]);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <div className="min-h-dvh bg-[color:var(--outer)] px-4 py-8 lg:px-8">
      <div className="mx-auto max-w-[1380px] overflow-hidden rounded-[var(--radiusMd)] border border-[color:var(--border)] bg-[color:var(--panel)] shadow-[var(--shadowMd)]">
        {/* Browser top bar */}
        <div className="flex h-12 items-center justify-between border-b border-[color:var(--border)] bg-[color:var(--card)] px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-[color:var(--textMuted)]/40" />
              <span className="size-3 rounded-full bg-[color:var(--textMuted)]/30" />
              <span className="size-3 rounded-full bg-[color:var(--textMuted)]/20" />
            </div>
            <div className="hidden sm:flex items-center gap-2 text-[color:var(--textMuted)]">
              <span className="text-lg">‹</span>
              <span className="text-lg">›</span>
            </div>
          </div>

          <div className="hidden h-9 w-full max-w-[520px] items-center justify-center rounded-full border border-[color:var(--border)] bg-[color:var(--panel)] text-[13px] text-[color:var(--textMuted)] sm:flex">
            flinkeo.online
          </div>

          <div className="flex items-center gap-3 text-[color:var(--textMuted)]">
            <span className="text-sm">⤴</span>
            <span className="text-lg">＋</span>
            <span className="text-lg">▢</span>
          </div>
        </div>

        {/* Header */}
        <header className="flex flex-wrap items-center justify-between gap-5 px-6 py-6 lg:px-10">
          <div className="flex items-center gap-10">
            <Link href="#" className="flex items-center gap-3">
              <span className="grid grid-cols-2 gap-1">
                <span className="size-2.5 rounded-full bg-[color:var(--text)]" />
                <span className="size-2.5 rounded-full bg-[color:var(--text)]" />
                <span className="size-2.5 rounded-full bg-[color:var(--text)]" />
                <span className="size-2.5 rounded-full bg-[color:var(--text)]" />
              </span>
              <span className="text-[28px] font-semibold tracking-[-0.04em] text-[color:var(--text)]">
                Flinkeo
              </span>
            </Link>

            <nav className="hidden items-center gap-8 lg:flex">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="inline-flex items-center gap-1 text-[15px] font-medium text-[color:var(--textSecondary)] transition hover:text-[color:var(--text)]"
                >
                  {item.label}
                  {item.hasChevron ? <ChevronDown className="size-4" /> : null}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#"
              className="text-[15px] font-medium text-[color:var(--textSecondary)] transition hover:text-[color:var(--text)]"
            >
              Log in
            </Link>

            <Button
              type="button"
              variant="secondary"
              className="h-11 rounded-[var(--radiusSm)] px-4 text-[15px] font-medium tracking-[-0.01em] normal-case"
            >
              <PlayCircle className="size-4" />
              View demo
            </Button>

            <Button
              type="button"
              className="h-11 rounded-[var(--radiusSm)] px-5 text-[15px] font-semibold tracking-[-0.01em] normal-case"
            >
              Get started
            </Button>
          </div>
        </header>

        {/* Main content */}
        <div className="grid lg:grid-cols-[560px_1fr]">
          {/* Left form */}
          <section className="border-t border-r-0 border-[color:var(--border)] px-6 py-8 sm:px-8 lg:border-r lg:px-12 lg:py-12">
            <div className="max-w-[390px]">
              <h1 className="text-[54px] font-semibold leading-[0.95] tracking-[-0.06em] text-[color:var(--text)] sm:text-[72px]">
                Get in touch
              </h1>

              <p className="mt-6 text-[18px] leading-8 text-[color:var(--textSecondary)]">
                We&apos;re here to help. Chat to our friendly team 24/7 and get
                set up and ready to go in just 5 minutes.
              </p>

              <div className="mt-8 grid gap-4">
                {quickLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="inline-flex w-fit items-center gap-3 text-[17px] font-medium text-[color:var(--text)] transition-colors hover:text-[color:var(--textSecondary)]"
                  >
                    <item.icon className="size-5" />
                    {item.label}
                  </Link>
                ))}
              </div>

              <form className="mt-10 grid gap-6" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label
                      htmlFor="first-name"
                      className="text-[14px] font-medium normal-case tracking-[-0.01em] text-[color:var(--text)]"
                    >
                      First name
                    </Label>
                    <Input
                      id="first-name"
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={(event) => setFirstName(event.target.value)}
                      className="h-12 rounded-[var(--radiusSm)] px-4 text-[15px]"
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label
                      htmlFor="last-name"
                    className="text-[14px] font-medium normal-case tracking-[-0.01em] text-[color:var(--text)]"
                    >
                      Last name
                    </Label>
                    <Input
                      id="last-name"
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={(event) => setLastName(event.target.value)}
                      className="h-12 rounded-[var(--radiusSm)] px-4 text-[15px]"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label
                    htmlFor="email"
                    className="text-[14px] font-medium normal-case tracking-[-0.01em] text-[color:var(--text)]"
                  >
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="h-12 rounded-[var(--radiusSm)] px-4 text-[15px]"
                  />
                </div>

                <div className="grid gap-2">
                  <Label
                    htmlFor="phone"
                    className="text-[14px] font-medium normal-case tracking-[-0.01em] text-[color:var(--text)]"
                  >
                    Phone number
                  </Label>

                  <div className="grid grid-cols-[96px_1fr] gap-3">
                    <select
                      aria-label="Country code"
                      value={countryCode}
                      onChange={(event) => setCountryCode(event.target.value)}
                      className="h-12 rounded-[var(--radiusSm)] border border-[color:var(--border)] bg-[color:var(--panel)] px-3 text-[15px] text-[color:var(--text)] outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--panel)]"
                    >
                      <option value="+1">US</option>
                      <option value="+880">BD</option>
                      <option value="+91">IN</option>
                      <option value="+44">UK</option>
                    </select>

                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phoneNumber}
                      onChange={(event) => setPhoneNumber(event.target.value)}
                      className="h-12 rounded-[var(--radiusSm)] px-4 text-[15px]"
                    />
                  </div>
                </div>

                <fieldset className="grid gap-3">
                  <legend className="mb-1 text-[14px] font-medium tracking-[-0.01em] text-[color:var(--text)]">
                    Services
                  </legend>

                  <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                    {serviceOptions.map((service) => {
                      const active = selectedServices.includes(service);

                      return (
                        <label
                          key={service}
                          className="flex cursor-pointer items-center gap-3 text-[15px] text-[color:var(--textSecondary)]"
                        >
                          <input
                            type="checkbox"
                            checked={active}
                            onChange={() => toggleService(service)}
                            className={cn(
                              "size-[18px] rounded border-[color:var(--border)] accent-[color:var(--accent)]",
                              active ? "opacity-100" : "opacity-90",
                            )}
                          />
                          <span className="text-[color:var(--text)]">{service}</span>
                        </label>
                      );
                    })}
                  </div>
                </fieldset>

                {error ? (
                  <div className="text-[13px] text-[color:var(--textSecondary)]">
                    {error}
                  </div>
                ) : null}

                {status === "success" ? (
                  <div className="text-[13px] text-[color:var(--textSecondary)]">
                    Thanks for reaching out. We&apos;ll get back to you soon.
                  </div>
                ) : null}

                <Button
                  type="submit"
                  disabled={status === "submitting"}
                  className="mt-2 h-12 rounded-[var(--radiusSm)] px-5 text-[15px] font-semibold tracking-[-0.01em] normal-case"
                >
                  {status === "submitting" ? "Sending..." : "Send message"}
                </Button>
              </form>
            </div>
          </section>

          {/* Right map */}
          <section className="relative min-h-[760px] overflow-hidden border-t border-[color:var(--border)] bg-[color:var(--card)]">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=Melbourne,Australia&z=12&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full [filter:grayscale(1)_contrast(0.92)_brightness(1.06)]"
            />

            <div className="absolute inset-0 bg-[color:var(--panel)]/35" />

            <div className="absolute left-4 top-4 z-10 flex overflow-hidden rounded-[var(--radiusSm)] border border-[color:var(--border)] bg-[color:var(--panel)] shadow-[var(--shadowSm)]">
              <button className="border-r border-[color:var(--border)] bg-[color:var(--panel)] px-3 py-2 text-[12px] font-medium text-[color:var(--text)]">
                Map
              </button>
              <button className="bg-[color:var(--card)] px-3 py-2 text-[12px] font-medium text-[color:var(--textMuted)]">
                Satellite
              </button>
            </div>

            <div className="absolute right-4 top-4 z-10 flex flex-col overflow-hidden rounded-[var(--radiusSm)] border border-[color:var(--border)] bg-[color:var(--panel)] shadow-[var(--shadowSm)]">
              <button className="grid size-10 place-items-center border-b border-[color:var(--border)] text-[color:var(--textMuted)]">
                <Plus className="size-4" />
              </button>
              <button className="grid size-10 place-items-center text-[color:var(--textMuted)]">
                <Minus className="size-4" />
              </button>
            </div>

            <div className="absolute left-[53%] top-[54%] z-10 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute left-1/2 top-1/2 size-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[color:var(--accent)]/22 blur-md" />
                <div className="relative grid size-12 place-items-center rounded-full bg-[color:var(--text)] shadow-[var(--shadowMd)]">
                  <MapPin className="size-5 text-white" fill="currentColor" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

// Keep existing landing usage stable.
export function ContactForm() {
  return <ContactPageReferenceStyle />;
}