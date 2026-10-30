# Trycompai CRM for the Monoga Sales Event

## Objective
Adapt the local `trycompai/crm` checkout into Monoga OS as a focused event-sales CRM. This is the sole Monoga OS platform choice; the only immediate objective is to support the upcoming sales event with manual lead capture, pipeline stages, consent, and follow-ups.

## Decision and authorization
- Confirmed choice: `trycompai/crm` is the sole Monoga OS platform. Do not continue MARAL implementation in parallel.
- Authorized source preparation: anonymous local clone to `trabajo/monoga/integraciones/trycompai-crm-source/` (user's affirmative response to the proposed local-only, no-credentials clone). Keep this source snapshot unchanged.
- Adaptation belongs in a separate Monoga-owned working project at `trabajo/monoga/proyectos/monoga-os/`, created locally from the source snapshot; do not push or publish it.
- Source comparison snapshot `6d4793dd6d7aeea91aa6a034e00b17d7408a2d08` came from a temporary read-only fetch. Recheck the exact version and repository state of the eventual clone before relying on the snapshot.
- Engram mirror is pending: the installed provider could not initialize due an outdated binary; preserve the local task document and retry only when Engram is available.
- No credentials or authenticated access. No push, PR, publish, deploy, or external CRM changes.
- Use synthetic test records only. Do not connect real event/customer data.
- Do not enable AI or email integrations unless each is individually authorized.

## Scope and non-goals
**In scope:** local source/license/security/build audit; map the smallest safe adaptation; manual event lead capture; configurable lead stages; consent recording; manual follow-up tracking; synthetic-data verification.

**Not in this phase:** product/service catalog work (later phase); importing or syncing records; external CRM changes; outbound email/campaigns; AI features; credentials/secrets; deployment or publication; broad ERP replacement; MARAL implementation.

Historical references only: the prior MARAL source path is `trabajo/monoga/integraciones/maral-os-source/`; the MARAL task/archive is `odd/tasks/maral-os-adaptation.md`. Neither is a source of current implementation authority.

## Assumptions
- The event workflow can initially be operated manually without integrations.
- The source clone and the Monoga adaptation working project are separate local directories. The adaptation copy will be covered by a copy manifest and rollback path before creation.
- Event-specific stages and consent wording require confirmation against existing Monoga policy before real use; use conservative placeholders and synthetic examples meanwhile.
- Product/service catalog is intentionally deferred until this event workflow is established.

## Tasks
- [x] **TC-01 — Prepare and audit source.** Anonymous shallow clone created at the specified source path; record URL, exact commit/branch, MIT license evidence, security-sensitive patterns (never values), dependencies, and available checks. Keep it unchanged.
- [x] **TC-02 — Map event workflow to source.** Identified company/contact/deal/activity models, fixed deal stages, custom fields, OAuth-only interactive sign-in, and setup requirements; compared exact commit with the temporary snapshot. See evidence below.
- [x] **TC-03 — Define copy manifest and create isolated project.** Created the planned manifest before cloning the immutable source into `trabajo/monoga/proyectos/monoga-os/`; verified commit, tracked-file hashes/count, retained MIT LICENSE, clean source/target, and removed target origin. Manifest records dated archive rollback.
- [x] **TC-04 — Define bounded event data and consent behavior.** Use built-in company Lead Source `Event`; add a company Event Name field and contact Consent Status (`Granted`, `Not granted`, `Withdrawn`), Consent Method, and Consent Date. Keep status null unless explicitly recorded. Mark consent fields `agentFilled: false`; changes are recorded as timeline notes. Re-label existing fixed deal stages for event use without changing database enum values: New lead, Contacted, Qualified, Proposal needed, Won, Lost, Not a fit. Use built-in manual Activity/Task for follow-up. No automated contact; null/negative/withdrawn status is never treated as permission.
- [x] **TC-05 — Adapt Monoga event defaults.** Implemented the four custom-field definitions, stage labels, seed wiring, and event workflow guide in the Monoga working project; preserved the upstream source snapshot and unrelated behavior. Focused tests and app/database typechecks pass.
- [ ] **TC-06 — Harden and verify the local synthetic workflow.** First restrict every local service to loopback and document safe startup; skip upstream demo seed records. Then verify lead creation, stage changes, consent capture/withdrawal, and manual follow-up without real personal data or outbound integrations. Review configuration and record all results/risks.

## Acceptance criteria
- [x] Exact clone version and source/license status are documented; snapshot comparison is explicitly treated as temporary evidence, not the clone's guaranteed version.
- [x] Source clone remains unchanged; adaptation is confined to the local checkout and approved Monoga OS surfaces.
- [ ] A synthetic event lead can be captured, moved through documented stages, associated with consent evidence, and given a manually recorded follow-up.
- [ ] Consent status is blank until explicitly recorded; only `Granted` is affirmative. Null, `Not granted`, or `Withdrawn` does not authorize automated contact. This local setup sends no messages; manual outreach remains a human decision.
- [ ] No catalog work, real records, credentials, external CRM mutation, AI/email integration activation, push/PR/publish/deploy is performed.
- [x] Focused stage/field tests and app/database typechecks pass; local service-level workflow remains to verify.

## Checks
- Source-vs-adaptation path and working-tree inspection; verify source checkout is untouched.
- Focused deterministic tests for lead/stage/consent/follow-up behavior, including negative consent cases.
- Review diff and configuration for secrets, external calls, integrations, catalog scope, and unrelated changes.
- No broad builds or unrelated scripts until the source audit identifies safe, relevant commands.

## Routing evidence
This is a **substantial** feature: it includes source audit, workflow mapping, data/consent design, local adaptation, and verification. Track it here as ODD work. Choose **delegated direct** for bounded mapping/source-change work and verification; no SDD is selected. Relevant delegation triggers: substantial authorized work, source/context-heavy mapping, and multi-file implementation plus verification. Keep orchestration and final review with the parent; workers receive explicit local-only boundaries and may not spawn further delegates.

## Progress
- **TC-01 complete:** anonymous shallow clone at `trabajo/monoga/integraciones/trycompai-crm-source/`; branch `release`, commit `6d4793dd6d7aeea91aa6a034e00b17d7408a2d08`, clean against `origin/release`. Root `LICENSE` grants MIT terms; retain copyright/license notice in adapted copies.
- **TC-02 complete:** comparison snapshot has the same commit. Verified `Company`, `Contact`, `Deal`, `Activity` models and fixed `DealStage` values in `packages/db/prisma/schema.prisma`; deal inputs support standard fields and dynamic fields. `packages/auth/src/auth.ts` disables email/password and uses configured identity providers. README requires Bun, Docker/Postgres, migrations, and at least one Google/Microsoft or configured IdP. Local packages are installed; services have not been started.
- **Product implication:** trycompai fits event prospecting/follow-up better than MARAL's broader ERP, but its fixed B2B stages and lack of a quotation model require bounded event-stage/consent configuration; no AI, mail, or CRM sync is needed for manual operation.
- **Engram mirror:** pending; installed provider cannot initialize because its binary predates the required v2 API. Local task document remains authoritative.
- **Local runtime setup:** user authorized Bun from official GitHub, packages only from `registry.npmjs.org`, Prisma binaries only from `binaries.prisma.sh`, Docker image from Docker Hub, and loopback-only service startup. Bun v1.3.12 archive SHA-256 `841ff9c5dffcaa3a2620d1e3f87ee500f32a4ca830b001cade7a3479609d4a89` verified. Frozen install with lifecycle scripts disabled completed: 2,373 packages; no source or lockfile changes. Prisma generation first failed because `DATABASE_URL` was absent; retry with a temporary dummy loopback URL succeeded and produced generated client files without connecting to a database. Next `typegen` created ignored route types. Local branch `monoga-event-crm` created; no remote configured; no commit made.
- **TC-05 implementation:** event stage labels map the seven existing enums without schema changes; `MONOGA_EVENT_FIELDS` declares Event name and the three consent fields, all `agentFilled:false` with no defaults; the seed flow upserts only these four definitions and preserves the false setting on repeat seeds. Added `docs/monoga-event-workflow.md` for manual event capture and follow-up.
- **TDD evidence:** RED observed before TC-05 implementation (stage mismatch; event module missing). GREEN: app stage test 2/2 and DB event-field test 2/2. Database TypeScript check passes. App `typegen` and no-cache TypeScript check pass. No API/DB server, real data, or outbound integration has run; the brief Next sign-in preview attempt failed and was stopped.
- **TC-06 runtime findings:** local Docker context `desktop-linux` points to a local Windows named pipe, but the Docker Desktop daemon is unavailable (pipe missing). Hardened Compose PostgreSQL port and API listener to `127.0.0.1`; Next must start with `--hostname 127.0.0.1`. `docker compose config --quiet` and API no-cache typecheck pass; `git diff --check` passes for tracked edits and a separate whitespace scan found no trailing whitespace in the untracked workflow guide. The upstream DB seed includes recognizable demo company names, so it was not run. Email contact creation has no automatic send path; OAuth credentials were not supplied and no local dev session was created. AI-provider defaults and telemetry behavior without a key remain unverified; `.env` and secret contents were not read. No API/DB service, real data, or outbound integration has run; only the brief Next preview described below was attempted.
- **Preview attempt:** user requested a sign-in-only local preview and authorized replacing Google-hosted fonts with system fallbacks in the Monoga copy (`apps/app/app/layout.tsx`). The app typecheck passes after removing `next/font/google`. Next started on `127.0.0.1:3100` with telemetry disabled; one local GET to `/sign-in` returned HTTP 500 because `DATABASE_URL` is unset (`packages/db/src/client.ts:13`). The process tree was stopped; no API/DB/session/data was started or created. Port 3000 was occupied by unrelated PID 19848 and was left untouched. Static route audit also found `/sign-in` queries tRPC and session state; without API it may show a nonfunctional Google button.

## Next step
TC-05 complete; TC-06 partially complete and blocked. The sign-in-only preview cannot render without `DATABASE_URL`; the attempt returned HTTP 500 and the process was stopped. Docker Desktop's local daemon is unavailable. Next step: user starts Docker Desktop; only then may local PostgreSQL be started on loopback for another preview attempt. Do not create a session, enter records, run the demo seed, or supply credentials. Full CRM access still requires an authorized login method.
