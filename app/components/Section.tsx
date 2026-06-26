import type { ReactNode } from "react";
import type { SignalRole } from "./signalStyles";

export interface SectionProps {
  children: ReactNode;
  className?: string;
  as?: "section" | "header" | "footer" | "div" | "nav";
  id?: string;
  register?: string;
  registerTone?: SignalRole;
}

export function Section({
  children,
  className = "",
  as: Tag = "section",
  id,
  register,
  registerTone = "muted",
}: SectionProps) {
  const registerClass = register
    ? `section-register section-register-${registerTone}`
    : "";

  return (
    <Tag
      id={id}
      data-register={register}
      className={`motion-surface mx-auto w-full max-w-7xl scroll-mt-24 px-6 lg:px-8 ${registerClass} ${className}`}
    >
      {children}
    </Tag>
  );
}
