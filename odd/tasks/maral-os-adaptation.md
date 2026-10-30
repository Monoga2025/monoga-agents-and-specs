# MARAL OS Adaptation for Monoga

## Objective
Historical task: audit the explicitly authorized public MARAL OS source and adapt a bounded operational workflow for Monoga OS as a local module. This task's completed audit/history is preserved below. **Remaining MARAL implementation work is paused and superseded** by the confirmed choice of `trycompai/crm` as the sole Monoga OS platform and the event CRM as the only immediate objective. See `odd/tasks/trycompai-monoga-event-crm.md`.

## Authorization and scope
- Authorized remote operation: anonymous, read-only HTTPS clone of `https://github.com/Monoga2025/maral-os` to `trabajo/monoga/integraciones/maral-os-source/` for audit.
- User explicitly confirmed Monoga has rights to reuse the MARAL source code; record this as user attestation, not independent legal verification.
- No credentials, authenticated sessions, publishing, deployment, Railway, external CRM mutation, payments, or services.
- Preserve the source clone as audit input; do not alter it.
- Adapt into a separate Monoga-owned module, not a wholesale replacement of Monoga ERP.
- Use synthetic data only; no MARAL customer or operational data.
- Dashboard frontend implementation is out of scope; provide an API/schema contract for the user's Claude Design work.

## Constraints
- Audit license, repository history, secrets risk (names/patterns only), dependencies, and build/test commands before copying source.
- Do not copy secrets, `.env` values, production data, or private assets.
- Keep CRM, quotation, order, inventory, purchasing, production, receivables, and reporting domains independently bounded.
- Require human review for quotes and AI-assisted workflows.
- No architecture claims until verified against source code.

## Tasks
- [x] T1 Clone authorized public source anonymously to the staging path and inventory repository/license/security/build state.
- [x] T2 Define the Monoga module map and phased adaptation; keep dashboard UI for Claude Design. Decision: `trabajo/monoga/documentacion/arquitectura-monoga-os.md`.
- [~] T3 Create an isolated `trabajo/monoga/proyectos/monoga-os` adapted codebase, preserving the staged MARAL source unchanged and excluding credentials/worktrees/data. **Paused/superseded; not active.**
- [~] T4 Adapt Monoga identity, users/access control, services, prospects/CRM, tasks/activities, and consent-aware pipeline. **Paused/superseded; not active.**
- [~] T5 Adapt proposal/quotation and post-sale engagement workflows with human approval; defer manufacturing/accounting domains. **Paused/superseded; not active.**
- [~] T6 Define stable API/schema contract for Claude Design frontend integration; do not build the dashboard UI here. **Paused/superseded; not active.**
- [~] T7 Run deterministic tests/build and review the local app; no external integrations or deployment. **Paused/superseded; not active.**
- [~] T8 Prepare localhost review and rollback evidence; retain staging source unless later removal is explicitly approved. **Paused/superseded; not active.**

## Checks
- Source and output directories are distinct; source clone remains unchanged.
- No secret values or real customer data enter Monoga-owned artifacts.
- The chosen slice works offline with deterministic tests.
- Existing Monoga ERP/event-sales behavior remains intact.
- UI/dashboard is not built here; the integration contract is explicit.

## Progress
- Initial local exploration found no complete MARAL source in the workspace; only the case-study document exists.
- The case study is secondary evidence and will not substitute for source audit.
- User explicitly authorized anonymous HTTPS clone to the staging path above.
- T1 complete: shallow clone at `trabajo/monoga/integraciones/maral-os-source/`, commit `14816711dd50f2fb14a473fe85b4c895f7074fde` (2026-09-16), clean `master...origin/master`, 653 files. No top-level `LICENSE`/`COPYING` file found. Source includes React/Vite frontend and Express/Prisma/PostgreSQL backend; no services or dependencies executed. Security findings: compose secret fallback names/weak defaults, query-string bearer token support, permissive CORS; values not copied or exposed.
- User explicitly confirmed Monoga has reuse rights (user attestation; not independent legal verification); reuse is authorized for this local adaptation only, not publication/redistribution.
- T2 mapping evidence: MARAL has React/Vite + Express/Prisma/PostgreSQL; schema includes Client, Task, Quotation, Order, inventory, production, billing, and MARAL-specific Colombia fields. Monoga ERP event-sales currently stores process-local prospects/proposals and lacks durable IDs, auth contract, persistence, quote/order models, or a shared data ownership API. Sales-engine guidance names Twenty as its current CRM but warns that old lists/automations are historical and must not sync; do not silently replace or mutate Twenty.
- Adaptation direction: new standalone `monoga-os` project, not a monolithic rewrite of monoga-erp. Monoga-owned first-class modules: internal users/access, service catalog, prospects/events/consent/activities, tasks, proposal approval/quotes, and post-sale engagement. Defer inventory, manufacturing/production, procurement, DIAN/invoicing, shipments, WhatsApp, campaign senders, AI agents, and dashboard UI. UI integration will use a reviewed API/schema contract for Claude Design.
- Security constraints from audit: remove query-string bearer tokens, enforce object-level authorization, restrict CORS, remove startup worker side effects, remove MARAL branding/business defaults, and replace any weak secret fallback. Do not read/copy actual secret values.
- Engram mirror attempt is pending/unavailable because the installed binary predates required v2 interface.

## Next step
No further MARAL implementation is authorized by this historical task. Its remaining implementation work is paused/superseded by the confirmed platform decision. Continue only via `odd/tasks/trycompai-monoga-event-crm.md`; retain this audit/history and the MARAL source path as historical records.
