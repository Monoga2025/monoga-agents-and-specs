## 2026-09-27 Supersession Note — Current Scope and Deferred Runtime

This dated note narrows the draft without changing its other requirements. It supersedes any contrary runtime implication only as current planning context:

- The latest user direction defers all **JEV runtime** work for cost/revenue-first prioritization. Installed guidance is inert; no key, live call, payment, configuration, or runtime behavior is evidenced or authorized.
- The proposed initial owner-root manifest is incomplete for YouTube continuity. A future, human-approved manifest decision may add the **actual verified content owner root**. The historical `02_PROYECTOS_WEB/youtube-content-os` and external `C:/Users/Monoga/Desktop/youtube_scraper` paths were absent in the 2026-09-27 static audit and must not be treated as active owners.
- Bootstrap rollout through `AGENTS.md` and `.codex/` remains **not approved and not implemented**. No directory, registration, configuration, provider adapter, or universal context-loading behavior has been created or verified.
# Portable Project Memory Architecture — DRAFT — NOT Approved for Implementation

**Date:** 2026-09-26  
**Last revised:** 2026-09-27  
**Status:** Passive architecture and research proposal only  
**Not authorized:** directory creation, file migration, AGENTS/config edits, skill registration, plugin installation, runtime execution, secret access, or rollout

## Decision Summary

Preserve every existing project-specific agent, skill, rule, and memory structure. Propose one small, agent-curated continuity note for each owner root in a **human-approved manifest**, stored under a consistent sidecar path:

`<approved-owner-root>/.codex/memory/memoria.md`

The coordinating root, `C:/Users/Monoga/Desktop/Monoga OS`, is included in the proposed initial owner-root manifest even though it is not a Git repository. Agents curate dated evidence, assumptions, learnings, and next actions; accepted decisions remain user-owned and must name their approving source. Each note links to detailed canonical documents rather than copying them. The proposal does **not** assume that `.codex/` is automatically discovered, that the manifest is approved, or that this convention is already installed.

Native bootstrap would use a small additive pointer in an existing applicable `AGENTS.md`, but only after human approval. Skill registration is a separate concern and must use a supported native registration mechanism; arbitrary `.codex/skills` folders must not be treated as automatically registered.

## Goals and Non-Goals

### Goals

- Make the minimum context needed to resume work portable across agents and sessions.
- Preserve project ownership boundaries across independent Git and non-Git roots.
- Distinguish dated evidence, accepted decisions, working assumptions, and next actions.
- Keep Obsidian useful as the human navigation surface without making it the hidden system of record.
- Support explicit routing between the human, Terra for mechanical inventory/evidence, and Sol for architecture/commercial synthesis.
- Bound planning so “perfecting the system” cannot displace the commercial first slice.

### Non-goals

- No raw transcript archive, lossless conversation identity, secret store, customer database, or universal knowledge graph.
- No replacement of existing `MEMORY.md`, `.agents`, `.antigravity`, or project documentation.
- No automatic merge of memories across roots.
- No claim that Obsidian sync, hidden sidecar visibility, Codex skill discovery, Graphify, or Hermes is configured or working. The Jev skill is verified installed and loaded for design guidance; its runtime connection and live API behavior are unverified.
- No executable implementation or migration plan.

## Verified Topology and Ownership Boundaries

The inventory identified seven distinct Git owner roots:

1. `C:/Users/Monoga/Desktop/Monoga OS/Jarvis`
2. `C:/Users/Monoga/Desktop/Monoga OS/02_PROYECTOS_WEB/agente-hostinger`
3. `C:/Users/Monoga/Desktop/Monoga OS/03_VENTAS_BIKE/emil-skills`
4. `C:/Users/Monoga/Desktop/Monoga OS/04_UNAB_INGENIERIA/Carrera_Mecatronica`
5. `C:/Users/Monoga/Desktop/Monoga OS/04_UNAB_INGENIERIA/UNAB OS/UNAB_OS_Plataforma`
6. `C:/Users/Monoga/Desktop/Monoga OS/08_MARAL/maral-os`
7. `C:/Users/Monoga/Desktop/Monoga OS/12_LA_GROWTH_STUDIO/deployer`

Additional boundaries:

- `C:/Users/Monoga/Desktop/Monoga OS` is the non-Git coordinating/meta index root and a proposed continuity owner in its own right.
- `C:/Users/Monoga/Desktop/Monoga OS/09_AUTO_REVENUE_ENGINE` and `C:/Users/Monoga/Desktop/Monoga OS/13_SALES_ENGINE` are distinct physical, non-Git domain roots. They are not folded into Jarvis.
- `C:/Users/Monoga/Desktop/Monoga OS/01_JARVIS_ENGINE` is a junction alias to `C:/Users/Monoga/Desktop/Monoga OS/Jarvis`; it must never be traversed or treated as a second owner root.
- `00_Archivado`, scratch/output areas, caches, dependency/build directories, junction targets reached through an alias, and the contents of the sensitive `06` finance domain are excluded from discovery and indexing.

These facts describe observed structure, not approval to write into any root.

## Preserve-First Constraint

The following existing structures remain canonical in their own scopes and must not be renamed, moved, normalized, or copied wholesale:

- `C:/Users/Monoga/Desktop/Monoga OS/MEMORY.md`
- `C:/Users/Monoga/Desktop/Monoga OS/13_SALES_ENGINE/.antigravity/agents`
- `C:/Users/Monoga/Desktop/Monoga OS/13_SALES_ENGINE/.antigravity/memory`
- `C:/Users/Monoga/Desktop/Monoga OS/13_SALES_ENGINE/.antigravity/rules`
- `C:/Users/Monoga/Desktop/Monoga OS/13_SALES_ENGINE/.antigravity/skills`
- `C:/Users/Monoga/Desktop/Monoga OS/12_LA_GROWTH_STUDIO/.agents`
- `C:/Users/Monoga/Desktop/Monoga OS/12_LA_GROWTH_STUDIO/.antigravity`
- `C:/Users/Monoga/Desktop/Monoga OS/03_VENTAS_BIKE/.agents/skills`
- `C:/Users/Monoga/Desktop/Monoga OS/09_AUTO_REVENUE_ENGINE/.antigravity/skills`

The proposed sidecar is a compact routing and continuity layer. It links to these sources; it does not supersede them.

## Proposed Owner-Root Convention

The human reviews one named owner-root manifest rather than approving roots through repeated interactive prompts. The proposed initial manifest contains the coordinating root, the seven verified Git roots listed above, and the two verified physical non-Git domain roots `09_AUTO_REVENUE_ENGINE` and `13_SALES_ENGINE`. Genuine ambiguous roots stay out. Adding a new root or expanding a root's scope requires a new explicit manifest decision.

After that manifest is approved, every listed owner root uses the complete convention:

```text
.codex/
├── agents/       # required convention directory; contents are not auto-loaded
├── skills/       # required convention directory; registration is separate
├── memory/
│   └── memoria.md
└── rules/        # required convention directory; contents are not assumed loaded
```

All four subdirectories—`skills`, `agents`, `memory`, and `rules`—are required by the approved convention, with `memory/memoria.md` as the required continuity document. None are created by this draft. Existing `.agents` and `.antigravity` directories remain where they are.

### Proposed `memoria.md` information contract

The note should remain short enough to read at every handoff and use this conceptual order:

| Section | Required content | Exclusions |
|---|---|---|
| Objective | Current outcome, owner, and scope boundary | Aspirational backlog unrelated to the current outcome |
| Dated facts | `YYYY-MM-DD`, observation, evidence source, freshness | Undated claims or inferred facts presented as observations |
| Decisions | User-accepted decision, approving source, date, rationale, superseded decision link | Agent proposals represented as approved |
| Assumptions | Explicit hypothesis, confidence, validation method, expiry/review date | Silent defaults |
| Next action | One bounded next action, named approval gate, expected evidence | Autonomous send/spend/publish/deploy authority |
| Relevant paths | Absolute owner-root paths and canonical detailed-doc links | Duplicate document bodies or junction aliases |
| Safety | Secrets/data restrictions, excluded areas, stop conditions | Credentials, tokens, personal/customer data |
| Learnings | Concise reusable finding and evidence | Raw chats, model chain-of-thought, exhaustive logs |
| Last handoff | Date, source role, receiving role, candidate identity, verification state | Ambiguous “done” statements |

### Event-driven update and handoff rule

The responsible agent updates the note immediately after a meaningful evidence-backed learning or a decision, and again before ownership changes or a session closes. Routine activity does not trigger an update. Every update links any detailed design, decision, verification, or commercial document. The receiving role reads the compact note first and follows links only as needed. If evidence and memory disagree, evidence wins and the discrepancy is recorded; memory is never silently rewritten to make history appear consistent.

Use a soft budget of **200 lines or 20 KB**, whichever arrives first. When the note approaches the budget, compress summaries and move detail into a linked canonical document; do not automatically delete evidence, decisions, or history. Update cadence is event-driven, not daily or scheduled by default.

This is a proposed human convention, not an automated policy.

## Native Bootstrap and Visibility

### Codex bootstrap

The proposed native entry is an additive line in the applicable existing `AGENTS.md` that points to the owner root's `.codex/memory/memoria.md`. This relies on the normal instruction-discovery path already used by Codex. It does not require copying the memory into every prompt.

The pointer may be added only after the human approves the named owner-root manifest and reviews this final design. No existing `AGENTS.md` content is replaced. If no applicable `AGENTS.md` exists, that is an unresolved design decision rather than permission to create one automatically.

OpenAI documents Skills as explicitly registered capability directories or prompt-provided paths, not as any arbitrary folder named `.codex/skills`: [OpenAI Skills guide](https://developers.openai.com/api/docs/guides/tools-skills). Therefore the convention folder and native skill registration remain separate concerns until a supported mechanism is selected and verified.

### Obsidian visibility

The root is already registered and open as an Obsidian vault according to the verified local registry observation. That proves registration, not sync health, content freshness, hidden-dotfolder visibility, or mobile availability.

Retain the existing vault. For every approved hidden sidecar, propose one ordinary visible index note that links to the canonical `memoria.md`. The visible note is a navigation pointer only: it must not duplicate or fork the memory body. Whether Obsidian exposes dotfiles in the current configuration still requires proof. Do not create symlinks or install a plugin merely to expose them.

## Routing and Bounded Chief Loop

### Role routing

- **Human owner:** approves the named root manifest, business/product scope, accepted decisions, and sensitive or external actions such as contact, spend, publish, deploy, or secret/customer-data access. The human is not asked to approve every routine internal check.
- **Terra:** mechanical inventory, path/freshness checks, evidence collection, and deterministic comparison. Terra does not infer approval or decide architecture.
- **Sol:** architecture, commercial synthesis, trade-offs, evidence relevance, and a single coherent draft. Sol does not grant execution authority.
- **Chief/orchestrator:** owns ordinary internal plan review, bounded revision routing, and evidence checks inside the approved scope; it escalates only genuine scope, decision, or safety gates.
- **One filesystem writer:** the designated writer is the only actor that edits the candidate in a work batch.
- **Independent checker:** reviews the same immutable candidate and reports evidence; it does not create a competing draft.

### Bounded loop

1. The human approves the design/spec scope; evidence and objective are then frozen for the candidate.
2. Sol prepares internal planning revision 1 under chief/orchestrator review.
3. At most one additional internal planning revision is allowed (maximum two planning revisions total) without asking the human to approve routine checks.
4. One writer produces the candidate.
5. Independent checking evaluates that same candidate against the frozen evidence.
6. The human receives the final design review gate and accepts, rejects, or starts a new bounded candidate with changed evidence/scope.

There is no “revise until perfect” loop. New requirements, a different owner root, or materially changed evidence create a new candidate rather than consuming an unbounded correction cycle.

## Required Jev Design Guidance — Runtime Test Pending

The official Jev/TypeSafe skill is installed and its guidance is required for this architecture. No `TYPESAFE_API_KEY` was found in the freshly checked process or user environment, so the runtime is unconnected and no Jev request or decision was made. Root retrieved the live official [coding-agents introduction](https://docs.typesafe.ai/introduction/coding-agents), [API reference](https://docs.typesafe.ai/api), and [citation-check cookbook](https://docs.typesafe.ai/cookbooks/citation_check) on 2026-09-27. A prior browser fetch failure in this subtask was scoped to that fetch attempt and is not evidence that the documentation is unavailable.

The required design role is narrow and advisory:

- **Choice:** classify citation support or select the most relevant evidence category from a closed set that includes `no_match`.
- **Score:** rank evidence relevance along explicit, independently reviewable levels.
- **Noul:** estimate whether a specific citation or evidence item supports a named claim.

Jev output would never establish file ownership, consent, identity, truth, approval, contact authorization, action permission, or safety policy. Deterministic checks and user-owned accepted decisions retain those responsibilities. Low confidence, missing evidence, disagreement with deterministic facts, or a changed candidate escalates to Sol, then to the human only for a genuine decision/safety gate; it does not trigger an automatic action. Typed output constrains shape, not correctness. Any future live claim must cite actual API evidence from the tested candidate; fiction or inferred success is forbidden.

## Tool Decisions Deferred

### Obsidian: retain

Keep the current Obsidian vault as the human-facing index. Verify hidden-sidecar visibility and sync separately. Do not duplicate canonical memory into visible notes.

### Graphify: do not install now

The official [Graphify-Labs repository](https://github.com/Graphify-Labs/graphify) says code mapping uses local deterministic tree-sitter AST parsing, while documents, PDFs, and images use an assistant model or configured provider for semantic processing. Audio and video transcription can use local `faster-whisper`; any subsequent semantic processing is a separate backend decision. Graphify also supports an explicit fully local Ollama backend. Those are capability statements, not approval to scan this workspace.

The README also contains query-logging descriptions that must be reconciled during any future evaluation; do not claim logging is disabled or that the tool has no privacy risk. A future isolated evaluation requires an explicit corpus allowlist, exclusions, backend, data-residency decision, query-log behavior, cost/time budget, and deletion/retention rule. `06` finance content, secrets, customer data, archives, caches, and junction traversal remain excluded.

### Hermes: isolated comparison after the commercial slice

Official Nous Research documentation supports native Windows and describes an OpenAI Codex OAuth provider. That provider documentation is a Hermes capability claim, not OpenAI endorsement, entitlement, or evidence of unlimited use. Official sources: [Hermes documentation](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/index.mdx) and [provider documentation](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/integrations/providers.md).

Hermes' default WhatsApp bridge is Baileys/WhatsApp Web rather than Meta's official API. Its separate Cloud API path requires a Meta Business account, a dedicated number, and a public HTTPS webhook: [Hermes WhatsApp Cloud documentation](https://github.com/NousResearch/hermes-agent/blob/main/website/docs/user-guide/messaging/whatsapp-cloud.md). It must not be used for bulk or uncontacted outbound. Defer any install or isolated comparison until after the commercial first slice yields evidence, and evaluate it without changing production channels or credentials.

## Failure and Conflict Handling

- **Owner ambiguity:** stop; do not write until the human selects the owner root.
- **Junction or duplicate path:** resolve to the physical root and retain one canonical memory.
- **Conflicting memories:** preserve both claims with dates and sources; mark the decision pending rather than choosing silently.
- **Stale fact:** label stale and link fresh evidence; do not delete historical decisions without a supersession record.
- **Missing evidence:** record as an assumption with a validation step, not a fact.
- **Sensitive content encountered:** exclude content, record only that an excluded sensitive boundary exists, and escalate.
- **Tool or model uncertainty:** no automatic action; route to Sol/human review.
- **Obsidian invisibility:** use a visible pointer note only after approval; do not clone canonical content.

## Research-Grade Acceptance Criteria

These criteria describe what must be demonstrated before this proposal could become an implementation decision. They do not authorize implementation.

- [ ] The human reviews and approves one named initial owner-root manifest; ambiguous roots are absent, and later root/scope additions require a new explicit decision.
- [ ] The junction `01_JARVIS_ENGINE` resolves to Jarvis and is excluded as an owner and traversal entry.
- [ ] `00_Archivado`, scratch areas, caches, dependency/build outputs, and `06` finance contents are excluded by a reviewed allowlist.
- [ ] Existing `.agents`, `.antigravity`, skill, rule, and memory structures remain byte-for-byte untouched by a dry-run inventory comparison.
- [ ] Every approved owner root has the required `skills`, `agents`, `memory`, and `rules` subdirectories, and a sample `memoria.md` contains agent-curated dated facts with evidence, user-owned decisions separate from assumptions, one next action, absolute paths, safety limits, linked detail, and a last-handoff record—without raw transcript, secret, or personal/customer data.
- [ ] An event-driven memory update occurs immediately after a meaningful learning/decision and before handoff; the note stays within the 200-line/20-KB soft budget by linking detail without automatic deletion.
- [ ] An applicable existing `AGENTS.md` pointer is proposed as an additive diff and reviewed before any write.
- [ ] Skill discovery is tested through a supported registration mechanism; presence under `.codex/skills` alone is never counted as success.
- [ ] Obsidian can navigate from a visible note to the canonical memory without creating a duplicate memory body; sync remains separately verified.
- [ ] One candidate completes the bounded chief loop with no more than two planning revisions, one writer, and one independent check.
- [ ] Once a key is explicitly provided through an approved secret path, the required Jev runtime validation uses representative labeled citation/evidence cases, actual API evidence, explicit thresholds, and a no-action low-confidence path; no semantic score grants permission.
- [ ] Any future Graphify or Hermes probe has an explicit isolated scope, privacy boundary, budget, and deletion/rollback decision before installation or account access.

## Unresolved Human Decisions

1. Does the human approve the single named initial manifest containing the coordinating root, seven verified Git roots, and two verified physical non-Git domain roots?
2. Which existing `AGENTS.md` files, if any, may receive an additive memory pointer after final design approval?
3. Which visible Obsidian index note should point to each approved hidden sidecar, and is that navigation available on every required device?
4. What approved secret path and test evidence will govern the required Jev runtime validation once a key is available?
5. After the commercial first slice, is an isolated Graphify or Hermes evaluation worth its privacy, setup, and attention cost?

Until those decisions and the acceptance evidence exist, this architecture remains a passive draft and is not enabled anywhere.

