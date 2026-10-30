# Monoga Markdown and Module Cleanup

## Objective
Reduce stale, duplicated, orphaned, and misleading Markdown across Monoga projects while making every retained document identify its module, submodule, type, status, and authority.

## Authorized scope
- Remove only the experimental Event Sales frontend view after rollback manifest.
- Audit Markdown files across active projects.
- Create a document registry and canonical taxonomy before moving or deleting documentation.
- Mark historical/unverified material without rewriting evidence into current claims.
- Preserve sensitive data and avoid external services.

## Non-goals
- Do not delete project source code.
- Do not delete Markdown solely because it is old; classify first.
- Do not duplicate MARAL OS or deploy anything during this cleanup.
- Do not rewrite historical handoffs/specs as if they were current.

## Tasks
- [x] T1 Remove experimental Event Sales frontend with rollback manifest.
- [x] T2 Create Markdown document registry and canonical taxonomy.
- [x] T3 Reconcile authoritative module docs and stale claims.
- [x] T4 Classify orphaned/generated/historical Markdown.
- [x] T5 Add ownership/status metadata to high-value canonical docs.
- [x] T6 Review registry and propose safe moves/deletions separately (proposal complete; no execution authorized).

## Findings
- Existing docs mix canonical guides, historical handoffs, specs, generated CRM cards, and stale sales claims.
- Safe authority currently favors audited handoffs and explicit decision gates over old README promises.
- Candidate-view copies under `.git/gentle-ai/candidate-views` are generated review artifacts, not canonical docs.

## T1 result
The experimental Event Sales frontend was archived byte-identically and removed from the React app's imports, tab/navigation entries, route rendering, and stylesheet imports. The stale frontend-view assertion was removed from `test/event-sales.test.ts`; backend event-sales tests and local model/document structural checks remain preserved. No services were started.

## T2 result
Created a read-only registry and canonical taxonomy under `trabajo/monoga/documentacion/`:

- `registro-markdown.md` records high-priority module, submodule, document type, status, authority, supersession, contradiction, declared-owner, evidence, and path metadata.
- `taxonomia.md` defines the explicit categories `canonical`, `operations`, `specs`, `tasks`, `handoffs`, `archive`, `generated`, and `review`, plus status and authority semantics.
- Historical, pending, unverified, generated, and review distinctions are preserved; `review` is an allowed document status, and contradictions are recorded rather than resolved.
- Candidate-view and teleprompter directories are identified as generated/review artifacts, not canonical documentation.
- T2 registry verification corrections: added `review` to the allowed status list and corrected the sales-engine map path to `00_MAPA_OBSIDIAN.md`.
- No existing project Markdown was moved, deleted, or rewritten, and no secrets or personal contact data were added.

Structural evidence: the registry includes the audited root/module docs, ERP/event-sales handoff and specs, growth-studio sales handoff/review docs, overlapping revenue/sales module maps, project handoff/task docs, the T1 rollback manifest, and generated/review artifact locations. No suitable existing docs-test location was present, so validation is structural.

## T3 result
Reconciled only the seven requested high-priority module documents using existing local evidence. Added or strengthened concise authority/status warnings so historical, unverified, prototype, current-guidance, and local-scope claims are distinguishable without deleting historical content. The growth-studio system handoff's existing static-audit block was retained and its registry evidence clarified; the sales-engine README and IA pilot gate remain the current guidance boundary, not proof of production capability. The revenue-automation brief is explicitly historical/unverified, while `docs/COMPANY_OPERATIONS.md` remains the routing index with pending/decision-required gates. Monoga ERP's README is current only as a local-only scope declaration; runtime/build availability was not asserted.

Reconciliation evidence recorded in `trabajo/monoga/documentacion/registro-markdown.md` for all seven paths. T3 verification correction removed the duplicate monoga-erp README row, retaining the current-guidance/module-source authority, and updated the active growth-studio demo reference in the IA pilot to the canonical project path; the historical source-path references and wording remain preserved. No product code, secrets, contacts, external systems, historical source content, or files outside the allowed edit surfaces were changed.

## T4 result
Created `trabajo/monoga/documentacion/backlog-limpieza-documental.md` as a classification-only backlog. It identifies orphaned, generated, historical, and duplicate/review-needed candidates with path, reason, proposed status, and a safe next action. Generated teleprompter output is classified separately from canonical docs; `.git/gentle-ai/candidate-views/` is explicitly excluded from canonical documentation. No existing project Markdown was moved, deleted, or edited, and the report contains no secret or contact values. Registry evidence was updated with the T4 backlog and the candidate-view exclusion.

T4 structural evidence: the backlog includes observed standalone project notes, dated handoffs, overlapping revenue/sales maps, generated teleprompter output, and the `.git/gentle-ai` candidate-view directory. Classification is advisory; any archive, move, or deletion requires the later T6 decision.

## T5 result
Added concise YAML front matter to the seven reconciled high-value documents. Verifier outcome: the metadata fields and values passed. Body-preservation provenance is inconclusive for untracked documents, so preservation is not independently proven from Git. `docs/COMPANY_OPERATIONS.md` has body path updates from an earlier migration, not from this T5 metadata change. The email in `trabajo/monoga/proyectos/growth-studio/SYSTEM_STATE_AND_HANDOFF.md` was already observed during the pre-T5 inventory, but the untracked baseline prevents independent Git proof of its prior presence. No generated docs, candidate views, secrets, contacts, product code, external systems, moves, or deletions were touched.

## T6 result
Completed a read-only cleanup proposal in `trabajo/monoga/documentacion/backlog-limpieza-documental.md`, grouped by generated teleprompter batches, historical handoffs/pricing/briefs, duplicate maps/commercial docs, orphaned docs, and candidate-view artifacts. Each group records action, blockers, and a reversible-first principle. No canonical document qualifies for direct deletion yet; no move, deletion, or other project-document edit was executed.
