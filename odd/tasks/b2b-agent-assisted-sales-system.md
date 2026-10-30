# B2B agent-assisted sales system

## Goal
Create a local, human-reviewable B2B sales operating system for Monoga using verified repository context, without external sends, CRM mutation, deployment, tests, or invented commercial claims.

## Evidence baseline
- Canonical routing: `docs/COMPANY_OPERATIONS.md`.
- Current commercial guidance: `docs/SALES_EXPERIMENT_PLAN.md` and `trabajo/monoga/proyectos/sales-engine/`.
- Current stated priority: AI integration for professions and companies; offer, pricing, capacity, revenue, and live CRM state remain pending unless separately verified.
- Existing runtime surfaces: `.claude/agents/`, `.codex/agents/`, canonical definitions under `agentes/marketing/equipo/`; `.agents/skills/` contains project skills.
- External references checked: `coreyhaines31/marketingskills` (MIT, includes product-marketing, customer-research, copywriting, cold-email, sales-enablement, revops, analytics and related skills); `msitarzewski/agency-agents` (MIT, specialist Markdown agents and tool integrations). No repository copy is required.

## Implementation units
1. Add `CLAUDE.md` routing rule only, preserving absent prior file semantics.
2. Add `ventas/` human-editable context, evidence map, commercial policy, funnel/CRM schema, metrics, runbook, and pending activation checklist.
3. Add bounded Claude/Codex adapters for the requested orchestrator and specialists, delegating to `ventas/` documents and existing canonical agents where applicable.
4. Verify paths and ensure no secrets, contact lists, CRM exports, or external actions were added.

## Explicit non-goals
No sends, calls, CRM changes, pricing changes, contract acceptance, scheduler, deployment, dependency installation, tests, or external service activation.

## Acceptance evidence
- Facts, hypotheses, historical material, and unknowns remain separated.
- Draft mode and human approval gates are explicit.
- Activity, pipeline, signed contracts, invoicing, and cash collected are distinct.
- Manual first run is reproducible and bounded; continuous execution is not claimed.
- Completed locally without commit: `CLAUDE.md`, `ventas/`, `.claude/agents/monoga-ventas-*`, `.codex/agents/monoga-ventas-*`.
- Structural verification: seven Codex TOML adapters parsed and required docs/adapters exist.
- Tests and external deployment intentionally skipped per request.
