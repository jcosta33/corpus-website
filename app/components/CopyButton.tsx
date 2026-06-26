"use client";

import { Check, Clipboard } from "lucide-react";
import { useEffect, useState } from "react";

export interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
}

export function CopyButton({
  text,
  label = "Copy",
  className = "",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;

    const timeout = window.setTimeout(() => setCopied(false), 1600);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  function fallbackCopy() {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      fallbackCopy();
    }

    setCopied(true);
  }

  const Icon = copied ? Check : Clipboard;

  return (
    <button
      type="button"
      className={`copy-button focus-ring inline-flex min-h-8 items-center gap-1.5 rounded-[var(--radius-control)] border border-panel-border bg-panel-recessed/80 px-2.5 py-1 font-mono text-[0.68rem] font-bold uppercase tracking-[0.08em] text-concrete-300 transition-[background-color,border-color,color,box-shadow] hover:border-phosphor/60 hover:text-phosphor ${className}`}
      aria-label={copied ? "Copied" : label}
      onClick={handleCopy}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
      <span aria-live="polite">{copied ? "Copied" : label}</span>
    </button>
  );
}
