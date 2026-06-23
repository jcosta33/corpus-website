export interface GiltBandProps {
  className?: string;
  height?: "sm" | "md" | "lg";
}

export function GiltBand({ className = "", height = "md" }: GiltBandProps) {
  const heights = {
    sm: "h-2",
    md: "h-5",
    lg: "h-10",
  };

  return (
    <div
      role="presentation"
      className={`w-full border-y border-panel-border bg-panel-raised ${heights[height]} ${className}`}
    >
      <div className="h-full w-full gilt-hatch" />
    </div>
  );
}
