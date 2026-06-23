---
type: spec
id: SPEC-design-system
title: Website design system and global shell
status: draft
owner: corpus-website
sources:
  - intake/website.md
  - decisions/0001-website-aesthetic.md
  - decisions/0002-three-way-visual-language.md
---

# SPEC-design-system — Website design system and global shell

## Intent

Establish a single, reusable visual language for the Corpus website: colors,
typography, spacing, motion, artifact surfaces, and the global shell
(navigation + footer) that every page shares. The vibe is a three-way fusion:
1970s institutional sci-fi control surfaces, alchemical geometry, and working
manuscript artifacts. It must read as serious software first.

## Non-goals

- No full component library docs page in this spec.
- No dark/light toggle in this spec; dark mode is the default.
- No CMS integration.

## Requirements

### AC-001 — Three-layer color palette is codified in `app/globals.css`

The site uses a constrained palette defined via Tailwind CSS v4 `@theme` block
and CSS custom properties in `app/globals.css`:

| Token | Hex | Usage |
| --- | --- | --- |
| `--c-night` | `#050506` | page background, terminal wells |
| `--c-chassis` | `#090A0D` | app shell |
| `--c-panel` | `#14161C` | standard dark surfaces |
| `--c-panel-raised` | `#1D2028` | raised panels and cards |
| `--c-panel-border` | `#313642` | hairlines and dividers |
| `--c-albedo` | `#E8DECB` | primary dark-surface text |
| `--c-mercury` | `#A8B0B8` | secondary dark-surface text |
| `--c-aurum` | `#D6B45A` | primary gold signal |
| `--c-brass` | `#B8873A` | secondary gold, borders |
| `--c-phosphor` | `#48D597` | success / verified |
| `--c-rubedo` | `#C96A55` | errors / blocked |
| `--c-paper` | `#E8DECB` | manuscript artifact surfaces |
| `--c-paper-warm` | `#D8CDB9` | paper depth |
| `--c-ink` | `#08090B` | text on paper |
| `--c-pencil` | `#58616E` | marginalia and ruled notes |

Compatibility aliases such as `--color-corpus-yellow`, `--color-hazard-orange`,
and `--color-drone-green` may remain during migration, but they must map onto
the new palette.

Verify with: `npm run build` passes; inspect `app/globals.css` and confirm the
tokens and compatibility aliases are present.

### AC-002 — Typography uses three font families via `next/font`

- **Headings / control labels:** `Space Grotesk`, weights 600–700.
- **Body:** `Inter`, weights 400–600.
- **Code:** `JetBrains Mono`, weights 400–500.
- **Wordmark / manuscript accents:** `EB Garamond`, semibold, sparse use only.

All fonts load through `next/font/google` in `app/layout.tsx` with
`display: swap`.

Verify with: `app/layout.tsx` imports and applies the fonts; `npm run build`
passes; the rendered HTML contains the font CSS variables.

### AC-003 — Global shell includes nav and footer

A `Shell` component renders on every route via `app/layout.tsx`:

- **Nav:**
  - Logo: six-point seal plus lowercase `corpus`, linking to `/`.
  - Links: Product (`/what-is-corpus`), Loop (`/the-loop`), Docs
    (`https://github.com/jcosta33/corpus/blob/main/docs`), GitHub
    (`https://github.com/jcosta33/corpus`).
  - Mobile: hamburger menu below the `lg` breakpoint (1024px).
- **Footer:**
  - Copyright: "© 2026 Corpus contributors.".
  - Links: GitHub, Starter kit, Docs, Colophon.
  - Colophon line names the evidence/review discipline without suggesting an
    agent reviewed its own work.

Verify with: `npm run build` passes; every generated page contains exactly one
`<nav>` and one `<footer>`; nav links are valid `href` attributes.

### AC-004 — Shared components exist, render on `/kitchen-sink`, and are typed

At minimum, in `app/components/`:

- `Button` — primary (yellow), secondary (ghost), with hover/active/focus
  states. Disabled state included.
- `Card` — bordered surface with subtle hover lift.
- `Badge` / `StatusBadge` — operational labels for READY, PASS, UNVERIFIED,
  BLOCKED, DRAFT, ARCHIVED; color is always paired with text.
- `Section` — max-width wrapper (`max-w-7xl`) with vertical rhythm.
- `CodeBlock` — styled preformatted block for spec/review examples.
- `PaperArtifact` — manuscript-style inset for specs, tasks, reviews, findings,
  and source notes.

A `/kitchen-sink` route renders all components with sample props. This route is
excluded from production navigation and has `robots` meta `noindex`.

Verify with: `npm run build` and `npm run lint` pass; `/kitchen-sink` renders
without errors; components have TypeScript prop types.

### AC-005 — Seal and manuscript motifs are reusable

A reusable six-point seal motif maps to Pull, Spec, Task, Run, Review, Close.
Paper artifact utilities support ruled lines, small source labels, marginal
notes, and stamped labels without turning full pages into parchment or making
the copy sound ceremonial.

Verify with: visual inspection of the homepage and `/the-loop`; the seal and
paper artifact treatments appear and remain restrained.

### AC-006 — Icon strategy uses Lucide React

All icons come from `lucide-react`. No ad-hoc SVG icons except the logo.

Verify with: `package.json` includes `lucide-react`; `npm run build` passes;
searching `app/` finds only Lucide imports or the logo SVG.

### AC-007 — Text contrast meets WCAG AA

All text/background combinations in the default palette pass WCAG AA (4.5:1 for
normal text, 3:1 for large text). The primary yellow is used on dark surfaces,
never on light surfaces.

Verify with: automated contrast check via `axe-core` or manual inspection
report; `npm run build` passes.

### AC-008 — Motion respects `prefers-reduced-motion`

Any CSS animation or transition respects `prefers-reduced-motion: reduce` by
falling back to instant state changes. Seal, lamp, terminal, and diagram motion
are subtle and CSS-based.

Verify with: toggle `prefers-reduced-motion` in browser dev tools; animations
stop or reduce.

### AC-009 — Responsive breakpoint for mobile nav is `lg`

The mobile hamburger menu appears below 1024px and the desktop nav appears at
1024px and above.

Verify with: resize browser to 1023px and 1024px; nav switches correctly.

## Open questions

- (non-blocking) How much manuscript texture should appear in future long-form
  editorial pages?

## Affected areas

- `app/layout.tsx`
- `app/globals.css`
- `app/components/`
- `app/kitchen-sink/page.tsx`
- `public/`

## Dropped from sources

- Light mode toggle — out of scope; dark control-surface default is the brand.
- Storybook — too much setup for launch; `/kitchen-sink` route suffices.
- Full marketing animations — keep motion minimal and performant.
