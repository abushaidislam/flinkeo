"use client";

import { useState } from "react";
import { Card } from "@/components/site/Primitives";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Name, email, and message are required.");
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
          name,
          email,
          projectType,
          budget,
          timeline,
          message,
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
      setName("");
      setEmail("");
      setProjectType("");
      setBudget("");
      setTimeline("");
      setMessage("");
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  return (
    <Card className="p-5">
      <form className="grid gap-4" onSubmit={handleSubmit}>
        <div className="grid gap-1">
          <label
            htmlFor="name"
            className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]"
          >
            Name *
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="border border-[color:var(--border)] bg-[color:var(--panel)] px-3 py-2 text-[13px] text-[color:var(--text)] outline-none focus-visible:border-[color:var(--accent)]"
          />
        </div>

        <div className="grid gap-1">
          <label
            htmlFor="email"
            className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]"
          >
            Email *
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="border border-[color:var(--border)] bg-[color:var(--panel)] px-3 py-2 text-[13px] text-[color:var(--text)] outline-none focus-visible:border-[color:var(--accent)]"
          />
        </div>

        <div className="grid gap-1">
          <label
            htmlFor="project-type"
            className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]"
          >
            Project type
          </label>
          <input
            id="project-type"
            type="text"
            placeholder="Portfolio, company site, docs, etc."
            value={projectType}
            onChange={(event) => setProjectType(event.target.value)}
            className="border border-[color:var(--border)] bg-[color:var(--panel)] px-3 py-2 text-[13px] text-[color:var(--text)] outline-none focus-visible:border-[color:var(--accent)]"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="grid gap-1">
            <label
              htmlFor="budget"
              className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]"
            >
              Budget
            </label>
            <input
              id="budget"
              type="text"
              placeholder="Approximate range"
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
              className="border border-[color:var(--border)] bg-[color:var(--panel)] px-3 py-2 text-[13px] text-[color:var(--text)] outline-none focus-visible:border-[color:var(--accent)]"
            />
          </div>

          <div className="grid gap-1">
            <label
              htmlFor="timeline"
              className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]"
            >
              Timeline
            </label>
            <input
              id="timeline"
              type="text"
              placeholder="Rough timing"
              value={timeline}
              onChange={(event) => setTimeline(event.target.value)}
              className="border border-[color:var(--border)] bg-[color:var(--panel)] px-3 py-2 text-[13px] text-[color:var(--text)] outline-none focus-visible:border-[color:var(--accent)]"
            />
          </div>
        </div>

        <div className="grid gap-1">
          <label
            htmlFor="message"
            className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[color:var(--textMuted)]"
          >
            Project details *
          </label>
          <textarea
            id="message"
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="border border-[color:var(--border)] bg-[color:var(--panel)] px-3 py-2 text-[13px] text-[color:var(--text)] outline-none focus-visible:border-[color:var(--accent)]"
          />
        </div>

        {error ? (
          <div className="text-[12px] text-[color:var(--accent)]">{error}</div>
        ) : null}

        {status === "success" ? (
          <div className="text-[12px] text-[color:var(--textSecondary)]">
            Thanks for reaching out. We’ll respond within 1–2 business days.
          </div>
        ) : null}

        <div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center gap-2 rounded-none border px-4 py-2 text-[12px] font-semibold tracking-[0.16em] uppercase transition-all duration-200 border-[color:var(--text)] bg-[color:var(--text)] text-[color:var(--panel)] hover:-translate-y-[1px] hover:bg-[color:var(--accent)] hover:border-[color:var(--accent)] hover:text-[color:var(--panel)] active:translate-y-0 active:bg-[color:var(--text)] active:border-[color:var(--text)] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "submitting" ? "Sending..." : "Send brief"}
          </button>
        </div>
      </form>
    </Card>
  );
}

