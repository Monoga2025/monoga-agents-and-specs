# Luque Business Summit Sales System

## Objective
Prepare Monoga to convert conversations at the Luque Business Summit into qualified diagnostics, demos, proposals, and sales without making unverified product claims.

## Authorized scope
- Build a local prospect and opportunity system.
- Consolidate the event funnel and sales operating process.
- Audit and harden four selected demos/products.
- Prepare service catalog and sales collateral locally.
- Evaluate MARAL OS components for an isolated Monoga prototype.
- No credentials, external publishing, Railway deployment, or remote CRM mutation without separate destination/session authorization.

## Constraints
- Use synthetic demo data.
- Preserve historical material as historical.
- Never claim prototype or documentation is a production product.
- Keep 09 revenue automation and 13 sales engine separate.
- Keep writes single-threaded and reversible.

## Tasks
- [x] T1 Define event sales data model and local prospect pipeline.
- [x] T2 Consolidate diagnosis, conversation, objection, and follow-up playbooks.
- [x] T3 Audit four product candidates and select demo scope.
- [x] T4 Build/reinforce local demo harnesses with synthetic data and reset paths.
- [x] T5 Create service catalog, one-pager, QR destination draft, and proposal templates.
- [x] T6 Evaluate MARAL architecture and define isolated Monoga MVP boundary.
- [x] T7 Run functional checks and event rehearsal; record blockers.
- [x] T8 Prepare deployment-readiness checklist; do not deploy without explicit remote authorization.
- [x] T9 Implement local proposal draft and human approval flow.

## Route and checks
- Route: delegated exploration completed; delegated implementation by bounded work unit; delegated verification.
- TDD: resolve per component; structural/document work uses proportionate checks.
- Review: native review only if enabled and after each work-unit commit; delivery remains separate.

## Acceptance criteria
- A prospect can be captured locally with consent and next action.
- A conversation can move through the event pipeline without relying on historical CSVs.
- Four demo candidates have explicit status: functional, prototype, or blocked.
- Sales material distinguishes verified capability from hypothesis.
- No external service or secret is touched.

## Progress
- Event research: official page identifies Luque Business Summit LATAM 2026, Bucaramanga, 17–19 November 2026, 2,000+ business owners/entrepreneurs, 12 countries, strategy/systems/tactics framing.
- Existing assets mapped: sales-engine funnel/guide, Growth Studio HTML demos, group Monoga web pages, MARAL case study, CRM documentation, and local prototypes.
- Main gaps: event-specific pipeline, diagnosis, verified demos, one-pager, CTA/QR, and follow-up system.

## T2 evidence
- Added `trabajo/monoga/proyectos/monoga-erp/src/event-sales/playbook.md` with opening questions, pain diagnosis, four explicitly bounded Monoga solution lines, demo transition, objection responses, CTA, same-day/24h/3d/7d/14d cadence, consent boundaries, and an explicit unverified-claims section.
- Added a deterministic structural test in `trabajo/monoga/proyectos/monoga-erp/test/event-sales.test.ts`; the playbook names no attendee list and requires synthetic demo data.
- Context is limited to the official event profile facts recorded above; no attendee identity or intent is inferred.

## T3 evidence
- Added `trabajo/monoga/proyectos/monoga-erp/src/event-sales/demo-catalog.md` with exactly four candidates: growth diagnosis/sales system, commercial automation/CRM, web funnel, and MARAL-inspired operating system.
- Each candidate records source paths, functional/prototype/blocked status, showable evidence, prohibited claims, prerequisites, and a bounded 3-minute route.
- Catalog uses synthetic data, keeps 09 revenue automation separate from 13 sales engine, and does not authorize services, deployment, secrets, or external CRM access.
- Added a structural test in `trabajo/monoga/proyectos/monoga-erp/test/event-sales.test.ts`.

## T4 evidence
- Added `trabajo/monoga/proyectos/monoga-erp/src/event-sales/demo-harness.ts`, a local-only harness with deterministic `seed()`, explicit `reset()` semantics, restarted IDs, and a repeatable prospect pipeline walkthrough.
- Added `trabajo/monoga/proyectos/monoga-erp/src/event-sales/live-demo-runbook.md` with concise routes for all four catalog candidates and screenshot/HTML fallbacks for candidates 2–4.
- Added deterministic tests for seed/reset behavior and repeated pipeline execution. No network, external CRM, Railway, services, secrets, or production-readiness claims are involved.

## T5 evidence
- Added local Spanish drafts: `service-catalog.md`, `event-handoff-one-pager.md`, `qr-destination-form-copy.md`, and `proposal-template.md`.
- Each draft frames customer pain and a next step, labels `prototype`/`blocked` evidence, excludes unverified prices/results/clients/capabilities, and includes consent language.
- Added structural tests for required sections and claim-safety markers. No QR binary, publication, deployment, external system, or credential was used.

## T6 evidence
- Added `trabajo/monoga/proyectos/monoga-erp/src/event-sales/monoga-mvp-boundary.md` as a design-only, isolated Monoga MVP boundary informed by the MARAL case-study evidence.
- Defines in/out modules, synthetic fixtures, data ownership, human review, security/secret boundaries, demo flow, and criteria for calling the local demo functional.
- Explicitly prohibits copying MARAL data, credentials, code, external repositories, or claiming production readiness; no services were implemented or run.
- Added a structural test in `trabajo/monoga/proyectos/monoga-erp/test/event-sales.test.ts`.

## T7 evidence
- Focused event-sales suite passed with 8 tests and typecheck passed.
- Rehearsal confirmed local prospect capture, all pipeline stages, deterministic reset/seed, playbook cadence, four-demo catalog, collateral, and MARAL safety boundary.
- Blockers recorded: demos 2–4 not executed and proposal approval flow not implemented.

## T8 evidence
- Added `trabajo/monoga/proyectos/monoga-erp/src/event-sales/deployment-readiness-checklist.md` as a local-only checklist covering per-demo readiness, destination/project/session authorization, secret handling, synthetic-to-real data gate, rollback, health checks, cost/ownership, consent, and explicit GO/NO-GO criteria.
- Added a structural test in `trabajo/monoga/proyectos/monoga-erp/test/event-sales.test.ts` checking required sections and absence of URLs or credential assignments.
- No deployment, publication, Railway access, credentials, network, or external CRM access was performed or authorized.

## T9 evidence
- Extended `src/event-sales/model.ts` with an offline synthetic `ProposalDraft` model and explicit `draft`, `pending-human-review`, `approved`, and `declined` states.
- Corrected proposal creation to verify the referenced prospect exists, require the stored linked prospect's consent to be `granted` (caller consent is normalized to that stored value), and require explicit `evidenceProvenance: { source: 'synthetic', location: 'local' }` metadata for verified evidence.
- Corrected approval auditing: transitions are exactly `draft -> pending-human-review -> approved|declined`, with no self-transitions or skips; approved or declined proposals require human `reviewerId` and a valid ISO `reviewedAt`, and decided proposals remain terminal.
- Added `runProposalDraftDemo()` to the local harness with deterministic synthetic/local provenance. No send, publish, CRM sync, email, WhatsApp, Railway, network, price, result, or customer claims were added.
- Added deterministic tests covering missing-prospect, stored granted/unknown/declined consent, provenance, exact approval transitions, invalid timestamps, terminal-state, and repeatable offline harness behavior.

## Verifier follow-up
- Corrected the Event Sales UI Growth diagnosis route to `Prototype`, matching `src/event-sales/demo-catalog.md`.
- The UI now displays `Pending human review` by default and exposes no approval transition; the disabled local-only explanation requires reviewer identity and timestamp, preserving the model's audited transition contract.

## Local review step
Open the monoga-erp UI locally and select **Event Sales** to review the synthetic pipeline, four demo routes, cadence, collateral, proposal approval state, and deployment NO-GO checklist. This is a local-only review step; do not start services, connect a backend, use network/credentials, or treat synthetic records as attendee evidence.

## Next step
Keep the local event-sales flow maintained; any external operation requires separate authorization.
