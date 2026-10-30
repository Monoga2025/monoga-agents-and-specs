# Monoga OS Personalized ERP Design

> **Status: DRAFT FOR HUMAN WRITTEN-SPEC REVIEW — NOT APPROVED FOR IMPLEMENTATION.**
>
> This document defines production-grade design criteria. It does not claim that the software, integrations, authentication, permissions, backups, jobs, or tests exist or are production-ready. No implementation plan, dependency choice, migration, provider activation, deployment, or external action is authorized by this draft.

## 1. Intent, Scope, and Evidence Boundary

Monoga OS is intended to become a personalized ERP and knowledge workspace spanning projects, prior work, YouTube content, clients, sales, engineering artifacts, agent/job observations, and approved AI assistance. It is not a renamed sales dashboard. `09_AUTO_REVENUE_ENGINE` remains one sales-domain source; it does not own the ERP, global identities, permissions, or cross-domain truth.

The proposed product should let an owner find work, understand its evidence and freshness, continue a real workflow, and audit consequential actions without moving every domain into one database. YouTube and prior work are primary product areas from the first useful vertical slice, not deferred add-ons.

### 1.1 Verified current facts

- Observed catalog-root candidates include `Jarvis`, `02_PROYECTOS_WEB`, `03_VENTAS_BIKE`, `04_UNAB_INGENIERIA`, `05_USA_EXPANSION`, `07_AGENTE_HOSTINGER`, `08_MARAL`, `09_AUTO_REVENUE_ENGINE`, `10_Mejorar_Voz_Monoga`, `12_LA_GROWTH_STUDIO`, `13_SALES_ENGINE`, `docs`, `E-block`, and `jefe_monoga`. `01_JARVIS_ENGINE` is a reparse-point alias, not a second owner or traversal root. `00_Archivado` and `06_ADMIN_Y_FINANZAS` were deliberately excluded from content inspection. Directory presence proves only that filesystem entries exist.
- The current sales cockpit in `09_AUTO_REVENUE_ENGINE/dashboard/server.js` is a server-rendered Node HTTP page reading one SQLite database read-only. It is not a canonical ERP API, component application, verified live-health surface, or operational truth source.
- Current sales code can mark send-like statuses without external delivery evidence and can construct checkout-shaped strings without payment evidence. Those records must not become verified ERP outcomes by import.
- `12_LA_GROWTH_STUDIO/02_MOTOR_DE_CONTENIDO` exists and contains script generators, teleprompter tooling, a consulting-output directory, a teleprompter-output directory, and a prospect ledger. Presence does not establish that generators, publication, providers, or synchronization currently work.
- A prior handoff audit in `docs/ORCA_HANDOFF_2026-09-27.md` reported seven consulting JSON outputs. That audit sampled short scripts at roughly 575–587 spoken words despite 10–15 minute labels; those counts were not remeasured in this specification pass and must not be generalized to every output. Labels and timeline markers are not duration proof.
- No current Codex thumbnail workflow, universal MCP inheritance, automatic cross-provider memory synchronization, live YouTube integration, payment integration, or whole-ERP runtime was verified.
- Historical paths `02_PROYECTOS_WEB/youtube-content-os` and `C:/Users/Monoga/Desktop/youtube_scraper` were recorded as absent in the current audit. Historical memory about them is not current source evidence.

### 1.2 Unconfirmed design assumptions

- A local, single-owner profile is a useful reference design, but the user has not selected it.
- A remote/team profile is also described so its security boundary is explicit; it is not enabled by changing a port or UI toggle.
- Source privacy and ingestion coverage have not been approved. Every source therefore begins `DENIED`.
- Candidate implementation shapes—existing Node/TypeScript and SQLite on the server side, and React/TypeScript with Vite for a component frontend—are proposals only. No framework or library is selected by this specification.

## 2. Architecture Decision and Decomposition

### 2.1 Recommended direction: modular core with domain adapters

The core owns global metadata and policy. Domain systems retain their native files, databases, workflows, and external integrations. Adapters publish permission-filtered projections into the core catalog and search index. Commands are routed back to a domain only when that adapter advertises the capability and the server authorizes it.

This approach preserves existing work, supports gradual activation, and limits the blast radius of mistakes. Its cost is explicit adapter ownership, schema-version compatibility, and conflict handling.

### 2.2 Rejected default: full rewrite into one ERP database

A monolithic rewrite could simplify some queries but would centralize sensitive content, erase domain semantics, create a large migration cliff, and invite the false assumption that imported rows are operational truth. It is not justified by current evidence. A domain may later migrate behind the same adapter contract without changing global identities.

### 2.3 Independent specifications

This blueprint must not produce one kitchen-sink implementation plan. Each unit requires separate human review, specification, plan, and acceptance:

1. **Core foundation:** identity, authorization, catalog, sources, artifacts, relationships, search, tasks/approvals, audit, and job registry.
2. **YouTube and prior-work vertical:** case evidence through publication evidence and measurement.
3. **Projects and engineering adapters:** web, UNAB/CAD, voice, hosting, and other approved sources.
4. **Clients and sales:** research, intake, proposal, consent, payment evidence, delivery, and support. The existing sales proposal is domain input, not the core design.
5. **Knowledge and portable memory:** files, curated memory, optional Obsidian navigation, and provider-neutral exports.
6. **Remote/team profile:** hosting, identity, RBAC, backup, tenancy, and operational controls.

The first implementation plan, if later authorized, must cover only the core foundation plus one bounded YouTube vertical journey.

## 3. Trust Boundaries and Ownership

### 3.1 Core-owned concerns

The core is authoritative for:

- global project, source, artifact, relationship, task, approval, audit-event, command-receipt, and job IDs;
- source activation and revocation policy;
- owner/session identity and, under an approved remote profile, role membership;
- permission evaluation for browse, search, retrieval, AI use, mutation, publication, and external effects;
- safe metadata, search indexes, cache invalidation, and freshness;
- command receipts, idempotency bindings, approval bindings, audit events, and job lifecycle;
- links between domain-owned records without rewriting their native truth.

### 3.2 Domain-owned concerns

Domains remain authoritative for their own business data and integrations. Examples include source CAD files, web-project repositories, YouTube publication identifiers, client consent records, sales provider callbacks, and delivery acceptance. The core stores typed references and evidence-qualified projections, not invented replacements.

`09_AUTO_REVENUE_ENGINE` owns only whatever sales records a future sales specification explicitly validates. Existing legacy `SENT`, `EMAIL_SENT`, checkout URLs, revenue arithmetic, and static running badges enter as `LEGACY_UNKNOWN` or `SIMULATED`, never `VERIFIED`.

### 3.3 Truth vocabulary

Every material fact has separate fields:

- `workflowState`: internal process position;
- `truthState`: `UNKNOWN | SIMULATED | VERIFIED`;
- `mode`: `LIVE | SIMULATION | LEGACY_UNKNOWN`;
- `observedAt`: when the source was actually observed;
- `freshness`: `CURRENT | STALE | UNAVAILABLE | UNKNOWN`;
- `evidenceRefs`: immutable references supporting the assertion.

Source presence is never runtime health. A generated URL is never payment. A file called “final” is never approval. An agent process is healthy only from a measured heartbeat or bounded status observation, not a directory or PID-file presence.

## 4. Core Data Model

All IDs are opaque UUIDs generated or validated by the server. Timestamps are UTC instants. Names are labels, not identity.

### 4.1 Principal and permission

`Principal { principalId, type, displayName, status, createdAt }`

`RoleBinding { bindingId, principalId, role, resourceType, resourceId, grantedBy, grantedAt, revokedAt }`

Permissions are action-specific: `catalog.read`, `artifact.read`, `artifact.aiUse`, `source.activate`, `approval.decide`, `job.execute`, `publish.request`, and domain capabilities. Revocation is effective before the next retrieval or action, not merely after a session restart.

### 4.2 Project

`Project { projectId, slug, displayName, projectType, lifecycleState, privacyClass, ownerPrincipalId, createdAt, updatedAt, version }`

`slug` is unique among non-tombstoned projects. Renaming a project changes its label/slug but not `projectId`. Filesystem directory names are source attributes, not global IDs.

### 4.3 Source

`Source { sourceId, namespace, sourceType, displayName, activationState, privacyClass, adapterType, adapterSchemaVersion, rootAlias, capabilities, lastObservedAt, freshness, cursor, etag, version, tombstonedAt }`

`namespace` is globally unique and stable. `rootAlias` is server-resolved and browser-safe; absolute paths never appear in API responses. `activationState` begins `DENIED` and may become `METADATA_ONLY`, `CONTENT_INDEXED`, or `DOMAIN_ACTIVE` only through an approved policy decision.

### 4.4 Artifact and revision

`Artifact { artifactId, projectId, sourceId, sourceNamespace, nativeId, artifactType, title, privacyClass, lifecycleState, currentRevisionId, observedAt, freshness, version, tombstonedAt }`

`ArtifactRevision { revisionId, artifactId, nativeVersion, contentHash, metadataHash, mediaType, byteSize, createdAt, observedAt, evidenceRefs, extractionState }`

The tuple `(sourceId, nativeId)` is unique across retained history, including tombstoned records; neither a native identity nor an `artifactId` is reused. `contentHash` identifies bytes; it does not replace identity because identical files can have different ownership or meaning. A rename that preserves the adapter's native ID retains `artifactId`. Original asset paths are mutable locators, not stable IDs. When a source lacks a native stable identifier, a core-owned identity manifest may retain the mapping as derived metadata without writing into the source.

If the source cannot prove stable identity after a move or rename, the adapter emits a proposed link for human review; the core does not guess from filename or hash alone. A new file observed at a tombstoned path without identity proof produces `IDENTITY_UNCERTAIN` or `CORE_LINK_CONFLICT`; it is not automatically resurrected or assigned the former identity.

### 4.5 Relationship and client/case links

`Relationship { relationshipId, fromType, fromId, relationType, toType, toId, evidenceRefs, createdBy, createdAt, revokedAt }`

Relationships support project↔client, project↔artifact, case↔3D model, case↔video, video↔thumbnail, proposal↔evidence, and job↔output. Domain-specific client data remains in its approved domain; the core link carries the minimum identifiers and permission class.

### 4.6 Task, approval, command, job, and audit

`Task { taskId, projectId, taskType, title, state, priority, dueAt, assigneeId, blockers, version }`

`Approval { approvalId, approvalType, subjectType, subjectId, subjectRevisionHash, decision, actorId, decidedAt, expiresAt, revokedAt }`

Any edit changing `subjectRevisionHash` invalidates the approval. Approval never performs the approved action.

`CommandReceipt { commandId, namespace, actorId, idempotencyKey, bodyHash, expectedVersion, state, externalOutcome, createdAt, updatedAt, resultRef, reconciliationUntil }`

`Job { jobId, jobType, projectId, requestedBy, approvalId, inputRevisionRefs, state, leaseOwner, leaseExpiresAt, budgetPolicyId, deadlineAt, cancellationRequestedAt, outputArtifactIds, externalOutcome, version }`

`AuditEvent { eventId, actorId, action, resourceType, resourceId, commandId, occurredAt, mode, truthState, evidenceRefs, redactedDetails }`

Audit records exclude secrets and unnecessary PII. Cost records contain measured provider usage when available; an absent measurement is `UNKNOWN`, never an estimate presented as fact.

## 5. Adapter Contract and Source Lifecycle

An adapter declares:

```text
adapterName, sourceNamespace, schemaVersion, capabilities,
readScope, cursorStrategy, identityStrategy, freshnessPolicy
```

Each observation provides `nativeId`, `nativeVersion`, `etag` or hashes, `observedAt`, typed metadata, optional content reference, permissions, and tombstone state. Imports are idempotent upserts keyed by `(sourceId, nativeId)`. Cursor advancement is committed only with the accepted batch. Schema-version incompatibility returns a typed blocker rather than silently dropping fields.

Conflicts are explicit: `SOURCE_NEWER`, `CORE_LINK_CONFLICT`, `IDENTITY_UNCERTAIN`, `PERMISSION_CONFLICT`, or `SCHEMA_UNSUPPORTED`. Adapters never resolve identity by guesswork. Capabilities are allowlisted, such as `metadata.read`, `content.read`, `draft.write`, or `publish.request`; absence means denied.

Deleting core metadata creates a tombstone and removes it from normal browse/search. It never deletes the native original. Source removal or permission revocation must deny new retrieval and actions immediately, purge derived search entries and caches, prevent pending AI/jobs from loading the content, and record the purge result. Backups may retain encrypted historical data under an approved retention policy; restoration must reapply current revocations before making restored indexes available.

Initial activation is a metadata-only allowlist over a small, human-approved subset. No directory—including `06_ADMIN_Y_FINANZAS`, client-private material, academic personal data, or the entire workspace—is ingested by default.

## 6. Search, Knowledge, Memory, and AI

### 6.1 Four distinct stores

1. **Native files/databases:** domain source of record.
2. **Core metadata/search index:** derived, revocable, freshness-aware discovery data.
3. **Curated memory:** user preferences, durable decisions, and concise learnings with provenance.
4. **Operational truth:** command receipts, callbacks, approvals, audit, and domain events.

These stores must never be conflated. Engram or another memory tool is not an exhaustive filesystem catalog or operational database. Files are not automatically copied into memory. An AI index is derived and disposable; it cannot authorize actions.

Portable memory exports use plain text/Markdown with stable links and evidence dates. An optional Obsidian adapter may expose navigation without duplicating canonical memory. No installed synchronization, cross-provider inheritance, or automatic MCP availability is assumed.

### 6.2 Retrieval contract

Every AI retrieval is permission-filtered before ranking and returns artifact/revision citations, source freshness, and privacy class. Retrieval caches are scoped by actor and policy version. Authorization is rechecked when permissions may have changed; updates, deletion, and revocation invalidate affected entries. A retrieval or policy failure fails closed rather than answering from model memory as if authorized. Retrieved documents, web content, metadata, and model output are untrusted text; embedded instructions never become commands or permissions. Tools enforce authorization independently of the model, which cannot broaden scope or grant itself a tool.

This follows the least-privilege and independent-approval principles in the [OWASP AI Agent Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/AI_Agent_Security_Cheat_Sheet.html) and the permission-propagation, revocation, and cache requirements in the [OWASP RAG Security Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/RAG_Security_Cheat_Sheet.html).

`POST /api/v1/ai/queries` is a forecast-only operation. It creates an immutable `QueryPlan { planId, planHash, purpose, projectSourceScope, inputRevisionRefs, permissionSnapshot, providerRef, budgetPolicyId, tokenRequestCap, deadlineAt, policyVersion, createdAt, expiresAt }`; it does not invoke a model. The proposed reference expiry is five minutes and remains subject to human written-spec review. Forecast cost remains `UNKNOWN` when reliable provider evidence is unavailable rather than inventing an estimate.

Execution uses `POST /api/v1/jobs` with the registered job type `AI_QUERY_EXECUTE`, binding the exact `planHash`. At dispatch—before any paid call—the worker rechecks actor authorization, current source permissions, policy version, input revisions, provider authorization, deadline, and remaining budget. Missing provider authorization or budget disables execution. Results are retrieved through the proposed `GET /api/v1/jobs/:jobId/outputs` resource and its receipt-linked output artifacts. Approvals expire by policy and bind the exact plan and revisions; they are not permanent provider permission.

There is no nonstop multi-agent loop. Model/runtime selection remains user-owned. A future routing policy may assign bounded direct work to an economical model and architecture/review to a stronger model, but this is an interface rule, not an implemented provider choice.

## 7. API and Command Semantics

All proposed endpoints use `/api/v1`. They do not claim compatibility with nonexistent current routes.

### 7.1 Query resources

```text
GET /api/v1/home
GET /api/v1/projects
GET /api/v1/projects/:projectId
GET /api/v1/artifacts
GET /api/v1/artifacts/:artifactId
GET /api/v1/artifacts/:artifactId/revisions
GET /api/v1/sources
GET /api/v1/search
GET /api/v1/tasks
GET /api/v1/approvals
GET /api/v1/jobs
GET /api/v1/jobs/:jobId/outputs
GET /api/v1/audit-events
GET /api/v1/commands/:commandId
GET /api/v1/youtube/cases
GET /api/v1/youtube/cases/:caseId
```

List endpoints use opaque cursor pagination with stable ordering. Filters are typed and additive. Responses include `version`, `observedAt`, `freshness`, truth fields, `allowedActions`, and `blockers` where relevant.

### 7.2 Commands

Commands use explicit resources, not generic status patches:

```text
POST /api/v1/commands
POST /api/v1/sources/:sourceId/activation-requests
POST /api/v1/approvals
POST /api/v1/jobs
POST /api/v1/jobs/:jobId/cancellation-requests
POST /api/v1/youtube/cases
POST /api/v1/youtube/cases/:caseId/publication-requests
POST /api/v1/provider-callbacks/:provider
```

Browser/admin commands use a registered, allowlisted intent type—not an arbitrary namespace string or tool-call name—and carry a stable client intent UUID, idempotency key, expected resource version, and schema-validated body. The server derives actor identity from the authenticated owner session; the browser cannot nominate an audit actor.

On every retry, the server atomically looks up the existing `(actorId, namespace, idempotencyKey)` receipt **before** applying `expectedVersion`. Same key and same `bodyHash` returns the original receipt/result without repeating domain or external effects. Same key with a different body returns `409 IDEMPOTENCY_CONFLICT`. Only the first request validates `expectedVersion`; a stale first request returns `409 VERSION_CONFLICT`.

The initial transaction claims the unique idempotency key and writes the command receipt, domain state/event, audit record, and outbox item together. Workers lease outbox work. Where a provider supports idempotency, the stable provider key derives from the command intent. If the process crashes after the provider may have accepted the effect but before acknowledgement is persisted, external outcome becomes `UNKNOWN`; reconciliation or a signed callback resolves it. The system never blindly retries with a new key.

Receipt/key retention must cover the provider's maximum reconciliation and redelivery horizon plus recovery policy. Unresolved external intents are not deleted by an arbitrary automatic TTL. Any later archival policy must preserve enough identity to prevent replay.

`POST /api/v1/provider-callbacks/:provider` is a distinct machine-to-machine boundary, not a browser/admin command. The provider does not supply an owner cookie, client intent UUID, CSRF token, or `expectedVersion`. Before parsing fields, the server applies body-size limits and verifies the signature over the raw body, then validates the provider account, environment mode, and external event identity. It atomically claims a unique `(accountId, provider, eventId)` receipt and creates or reconciles a stable internal intent. Callback routes do not use browser CSRF because they have no cookie-authenticated browser session; signature and provider-identity verification are mandatory instead. A valid callback still cannot bypass source permissions, domain policy, expected order/amount/currency checks, or state-transition rules.

Errors use one envelope:

```json
{"error":{"code":"VERSION_CONFLICT","message":"The resource changed.","correlationId":"…","details":{}}}
```

`400` is malformed input, `401/403` identity/authority, `404` absent resource, `409` conflict, `422` policy/business blocker, `429` bounded resource limit, and `503` unavailable dependency. A `202` means only that internal work was accepted.

### 7.3 Payments

Payment state distinguishes checkout issued, authorized, collected, settlement pending, settled, refunded, disputed, and unknown. Amounts use integer minor units plus ISO currency. The browser cannot set payment state. Provider callbacks validate signature, provider account, environment mode, order, amount, currency, event identity, and deduplication before recording evidence. A manual attachment remains manual evidence until an approved review policy resolves it. Fake checkout strings import only as simulation/legacy evidence.

## 8. Authentication and Deployment Profiles

### 8.1 Local owner-only reference profile — unconfirmed

The server binds explicitly to loopback. Proposed reference parameters—still subject to human written-spec review—are: a cryptographically random one-time bootstrap code expires after five minutes and permits at most five redemption attempts; the fifth failure or expiry invalidates it and requires a newly generated code. Only the hash and attempt counter persist. The clear code is displayed once through explicit owner setup, never written to application logs or UI storage, and never returned after that display. Terminal scrollback or recording may retain displayed output; shell-history behavior is not a secrecy guarantee and must be addressed in the local deployment threat model. Redemption is single-use and replay-protected.

A successful redemption creates an `HttpOnly`, `SameSite=Strict` server session with a proposed 30-minute idle limit and eight-hour absolute limit. The session identifier rotates on redemption and re-authentication and is server-revocable. `Secure` is required whenever TLS is used. Mutations require an anti-CSRF token plus strict Origin and Host validation. The server—not the browser—sets the audit actor.

This bootstrap flow must be implemented and tested before production use; no credential is generated by this design. These parameters are draft reference values, not user-approved production configuration. Tokens and provider secrets never enter localStorage.

The local profile is available only while the owner machine and required process are running. It makes no 24/7 availability promise, and this design does not authorize installing a worker, scheduler, startup task, or background service.

### 8.2 Remote/team profile — separately approved boundary

Remote use requires HTTPS, durable identity, recovery, RBAC, tenant/resource scoping, secure cookies, rate limiting, session revocation, hosted secret management, audit retention, encrypted backups, and an operator-owned availability policy. A proposed initial backup objective is daily encrypted backups with `RPO <= 24 hours`; RTO must be selected and measured through restore drills. These are targets, not observed capability.

Remote/team mode cannot be enabled by changing the bind host or opening a firewall port. It requires a separate approved profile specification and deployment plan.

## 9. Frontend Information Architecture

Primary navigation is:

```text
Home | Projects | YouTube | Clients | Knowledge | Jobs & Audit
```

Persistent global search shows the source, project, artifact type, revision, permission class, freshness, and why the result matched. Home is action-first: recent work, blocked decisions, stale sources, approved next actions, and real measured observations—not invented KPIs.

```text
FICTIONAL ILLUSTRATION — counts, health states, and cases below are not observed values
┌───────────────────────────────────────────────────────────────────┐
│ Monoga OS   Search projects, artifacts, cases…   Sources: 2 stale │
├─────────────┬─────────────────────────────────────────────────────┤
│ Home        │ Continue work                                      │
│ Projects    │ [YouTube case: website + 3D story] Evidence 7/10   │
│ YouTube     │ [Client web project] Awaiting owner approval        │
│ Clients     │                                                     │
│ Knowledge   │ Source status                                      │
│ Jobs&Audit  │ LA Content · current   UNAB · metadata only         │
│             │ Finance · denied      Sales · legacy unknown        │
│             │                                                     │
│             │ Recent artifacts · blockers · allowed next actions  │
└─────────────┴─────────────────────────────────────────────────────┘
```

Page containers own queries, URL filters, form drafts, pending states, refetches, conflict handling, and safe command submission. Presentation components render validated view models. The frontend never reads SQLite, filesystem paths, process IDs, CLI/shell commands, or keys and cannot submit arbitrary tool or namespace strings. Critical states—approval, publication, payment, external send, deletion, and job outcome—never update optimistically. After command acceptance, the client reads the receipt and refetches authoritative resources.

Every surface supports loading, empty, partial, stale, unavailable, unknown, simulated, permission-denied, conflict, and error states. Unknown is distinct from zero. Tables use captions, headers, keyboard-operable sorting, visible focus, text plus icons, and responsive labeled rows. The first vertical must work at 320 px and 200% zoom with keyboard-only completion; status cannot depend on color.

Active HTML previews never render same-origin inside the owner panel. They use an isolated origin with restrictive CSP/sandboxing and no owner cookies or arbitrary parent access. Isolation does not make a private artifact public: access requires independent preview authentication through a single-use, short-lived grant bound to the viewer, artifact revision, and permitted operation. Source-permission changes revoke outstanding grants and deny subsequent preview retrieval.

The [React build-from-scratch guidance](https://react.dev/learn/build-a-react-app-from-scratch) supports Vite as one possible React build-tool path, but that is verification of feasibility, not a dependency decision. Lower-change server-rendered UI remains possible but will make evidence drawers, conflicts, approval diffs, and complex state harder. A monolithic full-stack rewrite is intentionally not selected.

## 10. First Bounded Vertical: YouTube and Prior Work

The YouTube domain vision connects real existing artifacts without copying or fabricating them. The full lifecycle below is a target capability map, not the scope of one first implementation plan and not evidence that providers work.

### 10.1 Domain workflow vision

```text
real case intake
→ research and source claims
→ rights/privacy review
→ honest 10–20+ minute story design
→ scenes and SolidWorks/Blender/web-build artifact links
→ recording plan and timed voice evidence
→ AI-assisted edit plan
→ edit/render artifact review
→ thumbnail brief and artifact review
→ owner publication approval
→ platform publication evidence
→ measured outcome
```

The story structure is hook → credible promise → constraint → real attempts and tension → resolution → limitations → relevant CTA. It may learn from public creator principles but must not copy MrBeast or any creator's scripts, media, branding, or proprietary structure. ROI, revenue, conversion, client identity, and performance claims require cited evidence and publication permission.

Long-form acceptance uses actual timed voice or rendered runtime plus scene timing. Word count, a “10–15 min” label, or timeline markers alone do not pass. Each scene binds duration, voice revision, claim/evidence references, asset revisions, rights state, and edit status.

“Java animation” remains an unresolved requirement. Java, JavaScript, or another animation technique is excluded until the human selects the intended meaning; no adapter silently converts it.

### 10.2 Bounded first useful slice

If this specification is approved, the first separate implementation plan is limited to an owner selecting one allowed content project; cataloging its existing artifacts into one case with stable source, artifact, and revision IDs; searching and opening permission-filtered cited revision details; recording manual timed-voice evidence; and displaying rights, approval, freshness, offline, and revocation blockers. It must leave native assets read-only and prove that revoked content disappears from browse, search, preview grants, and AI retrieval.

Primary YouTube navigation and the case view are present in this slice, so content is not deferred. Automatic editing, rendering, thumbnail generation, provider publication, measurement ingestion, and the full sales workflow remain locked dependent capabilities. Each requires its own approved domain specification, adapter capability, activation decision, and production evidence; no provider is presented as functional by this slice.

### 10.3 Future Codex thumbnail job

A future thumbnail capability is a typed, allowlisted job, not arbitrary shell access. It binds an approved workspace, exact input artifact revisions, output root, provider/model choice, isolated credentials, budget cap, deadline, and cancellation policy. It cannot inspect unrelated files, invoke arbitrary commands, perform an automatic paid generation, publish, or replace an approved thumbnail without a new approval.

If cancellation or timeout occurs after an external provider may have accepted work, the result is `UNKNOWN` and enters reconciliation. Outputs are registered as new artifact revisions and require human review. No current `codex.exe` image-generation capability is asserted.

### 10.4 Bounded-slice acceptance

- An approved metadata-only adapter catalogs selected existing content artifacts without modifying originals.
- One case links the selected project and its existing client-safe references, website build, SolidWorks/Blender assets when present, script, and manual timed-voice evidence using stable IDs; missing later-stage artifacts remain explicit blockers rather than fabricated placeholders.
- Search returns only permitted artifacts and cites exact revisions.
- Removing permission hides the case and purges derived index/cache entries before subsequent AI queries.
- A 10–20+ minute readiness claim fails without timed voice/render evidence.
- Rights or approval gaps are visible blockers. Publication is unavailable in this slice.

## 11. Security and Abuse Cases

- All external values—filenames, paths, adapters, callbacks, documents, model output, and URLs—are untrusted and schema-validated.
- Filesystem access resolves symlinks and verifies that the final path remains below an approved root. Windows device/namespace paths and root escapes are rejected before resolution-triggered access.
- Arbitrary URL fetch is unavailable. Approved fetchers allowlist HTTPS destinations, validate all resolved addresses, reject private/link-local/metadata ranges, disallow redirects by default, and cap size/time.
- Active preview content is isolated from the owner origin.
- High-impact actions require an independent human approval bound to exact revisions; model output cannot approve itself.
- Provider credentials remain server-side, purpose-scoped, and absent from prompts, browser storage, logs, audit details, and artifacts.
- Request, upload, query, model, recursion, concurrency, and job budgets are finite. An absent budget blocks paid/provider work.
- Revocation interrupts queued work before inputs are loaded and prevents new external effects. Already-unknown effects reconcile rather than being falsely cancelled.

## 12. Recovery and Observability

Metadata database backup uses a consistent snapshot mechanism, not a loose copy of an active database. SQLite's [Online Backup API](https://sqlite.org/backup.html) is the relevant mechanism if SQLite remains selected. Backups are encrypted, access-controlled, and restore-tested. Search indexes and caches are rebuildable from permitted metadata; restored systems reapply current revocations before serving queries.

Native assets have a separate owner-defined backup responsibility. A successful core backup does not imply that SolidWorks, Blender, video, client, or project source files are backed up.

Observability records measured request outcomes, queue depth, worker heartbeat `lastSeenAt`, lease age, reconciliation backlog, source freshness, permission-purge completion, restore results, and redacted provider cost records. It excludes secrets, raw prompts containing private content, customer PII, and fabricated uptime. Missing telemetry is `UNKNOWN`.

## 13. Production-Readiness Acceptance Matrix

Every item below is **NOT IMPLEMENTED / NOT RUN** until verified by future evidence:

- Authentication bootstrap five-minute expiry, five-attempt invalidation, hashing, single use, replay prevention, session rotation/revocation, 30-minute idle/eight-hour absolute limits, cookie flags, CSRF, Origin, and Host enforcement.
- Authorization denial across API, search, artifact download, AI retrieval, jobs, approvals, and callbacks.
- Source activation defaults to `DENIED`; private/finance/client sources remain excluded without explicit grant.
- Permission revocation purges index/cache and blocks pending AI/jobs and future retrieval.
- Adapter idempotent import, schema incompatibility, cursor recovery, duplicate, rename, delete/tombstone, identity uncertainty, and offline/stale source behavior.
- Stable artifact/revision identity and project↔client↔3D↔video↔thumbnail traceability.
- Idempotency replay lookup before version validation; same-body replay; body mismatch conflict; atomic receipt/audit/outbox; lease recovery.
- Crash after provider acceptance yields `UNKNOWN`; reconciliation causes no duplicate external effect.
- Payment callback signature, account, mode, order, amount, currency, event dedupe, refund, dispute, and settlement behavior.
- Search and AI citations point to permitted exact revisions; hidden instructions remain inert; revoked content is absent.
- AI query planning does not invoke a model; immutable five-minute plan/hash binding, dispatch-time ACL/policy/revision/provider/budget rechecks, finite deadline/cancellation, receipt-linked outputs, and unknown-cost handling.
- YouTube timed long-form evidence, scene/asset rights, claim evidence, thumbnail review, changed-hash approval invalidation, revoked publication approval, and publication evidence.
- Active preview origin isolation, viewer/revision-bound single-use grant, grant revocation, output encoding, path/symlink/Windows-root escape controls, URL/SSRF controls, and upload limits.
- Consistent backup, encrypted retention, disaster restore, revocation after restore, and separately documented native-asset recovery.
- Worker heartbeat reflects measured observation rather than file/process-name presence; logs and audit are secret/PII-redacted.
- Sales imports preserve simulation/legacy states and never promote historical `SENT`, checkout URL, or calculated revenue to verified commercial truth.

## 14. Traceability to Review Findings

| Review | Resolved in | Acceptance evidence required |
|---|---|---|
| R1 Scope mismatch | §§1–2, 9–10 | Primary navigation and first vertical include YouTube/prior work; sales remains a domain |
| R2 Core contract absent | §§3–5 | Stable IDs, permissions, adapters, rename/delete, freshness, conflicts, revocation tests |
| R3 YouTube primary workflow | §10 | Primary UI plus bounded catalog/search/timed-evidence slice; later thumbnail/publication capabilities remain separately locked |
| R4 AI/memory boundaries | §6 | Permission-filtered cited retrieval, revocation purge, portable export, provider/budget gates |
| R5 ERP acceptance missing | §§10.4, 13 | Cross-domain traceability, stale/offline, duplicate/rename/delete, privacy and recovery checks |
| R6 Replay ambiguity | §7.2 | Receipt lookup before version check, atomic claim/outbox, mismatch `409`, unknown-effect reconciliation |

## 15. Human Decisions Required Before Implementation Planning

These are not placeholders; each has a safe default and consequence:

1. **Deployment profile:** choose local owner-only or commission the separate remote/team profile. Until chosen, implementation planning cannot claim an auth/deployment target. Safe default: no network exposure.
2. **Source/privacy coverage:** approve named roots and one of `METADATA_ONLY`, `CONTENT_INDEXED`, or `DOMAIN_ACTIVE` per source. Safe default: every source `DENIED`, especially finance, private client, academic personal, and secret-bearing directories.
3. **YouTube publication privacy:** approve which real cases, people, client names, project assets, CAD/3D media, metrics, and claims may appear. Safe default: private and not retrievable by publication/AI jobs.
4. **AI/provider policy:** approve allowed providers/models, tasks, data classes, budget caps, deadlines, retention, and cancellation behavior. Safe default: paid/provider calls disabled; local metadata browse still works.
5. **Remote operations policy, if selected:** approve identity provider, roles, hosting region, secret store, RPO/RTO, retention, incident owner, and recovery process. Safe default: remote profile unavailable.

## 16. Review Gate and Next Artifact

This specification is complete enough for human written-spec review, not implementation. The reviewer should correct scope, activation/privacy decisions, and deployment profile before approval. Only explicit approval of this file permits creating separate implementation plans, beginning with the core foundation plus bounded YouTube vertical. It does not approve the later domain specifications or their execution.

No commit accompanies this document because `C:/Users/Monoga/Desktop/Monoga OS` is not a Git repository, and initializing one was neither requested nor authorized.
