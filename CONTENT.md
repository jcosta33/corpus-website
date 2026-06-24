# Content sources and review cadence

This file tracks where website copy comes from and when it was last checked.

Copy rules:

- Be direct.
- Keep paragraphs short.
- Link to detail instead of repeating it.
- Do not make research claims without a source.
- Keep install instructions in one canonical place when possible.

## Canonical sources

The framework docs are rendered from the sibling `corpus` repo at build time.
Marketing and ecosystem pages also draw from the separate Corpus repos:

- <https://github.com/jcosta33/corpus/blob/main/docs/01-what-is-corpus.md>
- <https://github.com/jcosta33/corpus/blob/main/docs/02-basic-workflow.md>
- <https://github.com/jcosta33/corpus/blob/main/README.md>
- <https://github.com/jcosta33/corpus-starter-kit>
- <https://github.com/jcosta33/corpus-cli>
- <https://github.com/jcosta33/corpus-mcp>
- <https://github.com/jcosta33/corpus-agents>
- <https://github.com/jcosta33/corpus-skills>

## Page source map

| Page              | Source files                                                                                         |
| ----------------- | ---------------------------------------------------------------------------------------------------- |
| `/`               | `corpus/docs/01-what-is-corpus.md`, `corpus/README.md`                                               |
| `/what-is-corpus` | `corpus/docs/01-what-is-corpus.md`                                                                   |
| `/the-loop`       | `corpus/docs/02-basic-workflow.md`                                                                   |
| `/get-started`    | `corpus-starter-kit`, `corpus-cli`, `corpus/docs/tutorial/README.md`                                 |
| `/docs`           | generated from `corpus/docs/**`                                                                      |
| `/skills`         | `corpus-skills`                                                                                      |
| `/skills/writing` | `corpus-skills/docs`, `corpus-skills/skills/**/SKILL.md`                                             |
| `/agents`         | `corpus-agents`, `corpus/docs/adrs/0092-corpus-agents-member.md`                                     |
| `/cli`            | `corpus-cli`, `corpus/docs/adrs/0077-corpus-cli-reconcile-only-harness.md`                           |
| `/mcp`            | `corpus-mcp`, `corpus/docs/adrs/0085-corpus-mcp-adapts-the-json-contract.md`                         |

## Quarterly review

Review this website against the canonical sources every three months. Save the
result in `findings/content-drift-YYYY-MM.md`.

## Content workflow

For new copy or updates, follow the Corpus loop:

1. Intake item in `intake/`.
2. Spec in `specs/` referencing the framework ADR or doc.
3. Task in `tasks/`.
4. Review in `reviews/`.
5. Finding in `findings/` if lessons emerge.

## Last reviewed

2026-06-24 — shortened after the Corpus docs rewrite.
