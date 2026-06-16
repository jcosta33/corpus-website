import type { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
  hardware?: boolean;
  brushed?: boolean;
  rivets?: boolean;
}

export function Card({ children, className = "", hardware = false, brushed = false, rivets = false }: CardProps) {
  return (
    <div
      data-screws={hardware ? "true" : undefined}
      className={`panel-raised group relative overflow-hidden ${
        hardware ? "screw-corners screw-corners-bottom" : ""
      } p-7 transition-all duration-150 hover:shadow-[inset_0_1px_0_rgba(200,163,95,0.55),inset_0_-2px_0_rgba(0,0,0,0.5)] active:shadow-[inset_0_2px_5px_rgba(0,0,0,0.55)] ${className}`}
    >
      {brushed && (
        <div
          className="brushed-metal absolute inset-0 pointer-events-none z-0"
          aria-hidden="true"
        />
      )}
      {rivets && (
        <div
          className="rivet-row absolute inset-0 pointer-events-none z-0"
          aria-hidden="true"
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
