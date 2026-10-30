# Monoga Agents and Specs

The operating layer behind my multi-project workflow: agent definitions and playbooks, OpenSpec-style change specs, orchestration notes, shared handoffs, and the test scaffolding for the agent workflow. It is the "how I work" repository, not an application.

## What is inside

- `agentes/`: agent definitions grouped by area (direction, delivery, finance, marketing, offers and sales, customer research, measurement, panel).
- `openspec/`: OpenSpec scaffolding (config, changes and specs folders with READMEs).
- `odd/`: feature task documents and their decision logs (organic driven development).
- `docs/`: operating profile, company and project navigation, handoff notes, market comparisons, sales-experiment plan, and overnight sprint reports.
- `tests/`: Node test files for two docs checks and one skill check (`node --test`).

## Why it matters

- Documents how work is split between a main agent and bounded specialists, with explicit edit surfaces and verification gates.
- Keeps decisions and handoffs as plain Markdown so any tool or person can resume the work.

## Stack

- Markdown, YAML, JSON and Node test files (`.mjs`).

## Honest status

- Working notes and internal playbooks. They reflect decisions at the time they were written and are not all verified.
- Contact emails and one phone number were replaced with placeholders. Research notes may still name private individuals; review them before publishing.
- Some handoffs reference local paths that existed on the original machine.
