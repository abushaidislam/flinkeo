"use client";

import { useState } from "react";
import { Card } from "@/components/site/Primitives";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

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
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div className="grid gap-1">
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="grid gap-1">
          <Label htmlFor="project-type">Project type</Label>
          <Input
            id="project-type"
            type="text"
            placeholder="Portfolio, company site, docs, etc."
            value={projectType}
            onChange={(event) => setProjectType(event.target.value)}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="grid gap-1">
            <Label htmlFor="budget">Budget</Label>
            <Input
              id="budget"
              type="text"
              placeholder="Approximate range"
              value={budget}
              onChange={(event) => setBudget(event.target.value)}
            />
          </div>

          <div className="grid gap-1">
            <Label htmlFor="timeline">Timeline</Label>
            <Input
              id="timeline"
              type="text"
              placeholder="Rough timing"
              value={timeline}
              onChange={(event) => setTimeline(event.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-1">
          <Label htmlFor="message">Project details *</Label>
          <Textarea
            id="message"
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>

        {error ? (
          <div className="text-[12px] text-[color:var(--textSecondary)]">
            {error}
          </div>
        ) : null}

        {status === "success" ? (
          <div className="text-[12px] text-[color:var(--textSecondary)]">
            Thanks for reaching out. We’ll respond within 1–2 business days.
          </div>
        ) : null}

        <div>
          <Button
            type="submit"
            disabled={status === "submitting"}
          >
            {status === "submitting" ? "Sending..." : "Send brief"}
          </Button>
        </div>
      </form>
    </Card>
  );
}

