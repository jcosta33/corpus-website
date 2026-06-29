import { ExternalLink, type LucideIcon } from "lucide-react";
import { Panel } from "./Panel";
import { HexBadge } from "./HexBadge";
import { signalRoles, type SignalRole } from "./signalStyles";

export interface SkillCatalogItem {
  skill: string;
  icon: LucideIcon;
  use: string;
}

export interface SkillCatalogProps {
  tone: SignalRole;
  skills: ReadonlyArray<SkillCatalogItem>;
  /** Base repo URL; each row links to `${repo}/${skill}`. */
  repo: string;
  /** First header span — the source label. */
  headerLabel: string;
  /** Second header span — the guide count, e.g. "6 guides". */
  guidesLabel: string;
  /**
   * Whether the catalog Panel carries the `skill-guide-catalog-${tone}` class.
   * The kit catalog renders without it; the catalog tiers render with it.
   */
  toned?: boolean;
}

export function SkillCatalog({
  tone,
  skills,
  repo,
  headerLabel,
  guidesLabel,
  toned = true,
}: SkillCatalogProps) {
  return (
    <Panel
      brushed
      screws
      className={`skill-guide-catalog ${toned ? `skill-guide-catalog-${tone} ` : ""}p-0`}
    >
      <div className="skill-guide-catalog-header">
        <span>{headerLabel}</span>
        <span>{guidesLabel}</span>
      </div>
      <ul
        className="skill-guide-list"
        style={{
          gridTemplateColumns:
            "repeat(auto-fit, minmax(min(100%, 20rem), 1fr))",
        }}
      >
        {skills.map((s) => {
          const Icon = s.icon;
          return (
            <li key={s.skill}>
              <a
                href={`${repo}/${s.skill}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${s.skill} skill on GitHub (opens in new tab)`}
                className={`skill-guide-row catalog-row catalog-row-${tone} group focus-ring`}
              >
                <div className="flex min-w-0 items-start gap-4">
                  <HexBadge
                    color={tone}
                    className="catalog-row-badge skill-guide-row-badge"
                  >
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </HexBadge>
                  <div className="min-w-0">
                    <h3
                      className={`catalog-row-title font-mono text-sm font-semibold ${signalRoles[tone].text}`}
                    >
                      {s.skill}
                    </h3>
                    <p className="catalog-row-copy mt-1 text-sm leading-relaxed text-concrete-400">
                      {s.use}
                    </p>
                  </div>
                </div>
                <ExternalLink
                  className="skill-guide-row-arrow"
                  aria-hidden="true"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </Panel>
  );
}
