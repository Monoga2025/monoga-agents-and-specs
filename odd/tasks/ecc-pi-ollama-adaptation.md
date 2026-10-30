# ECC-inspired Pi/Ollama adaptation

## Intent

- Objective: Add a reusable project-local Pi skill that turns public research or supplied captures into an evidence assessment and a human-reviewed sales-experiment draft for Monoga.
- Problem/why: ECC provides useful workflow patterns, but its Claude-specific hooks are not a compatible runtime for Pi/Ollama. Reuse concepts instead of duplicating the existing harness or building another engine.
- Authorization: User selected adapting ECC to Pi/Ollama and explicitly said "Continua". Local implementation only; no remote mutations, credential use, installs, outreach, CRM changes, publishing, payments, scheduler changes, automatic factual-memory promotion, or upstream script execution.
- Sources: Supplied WorldFlowAI/everything-claude-code repository, existing Monoga routing skills, docs/ORGANIZATION_DECISIONS.md, docs/MONOGA_OPERATING_PROFILE_DRAFT.md, docs/SALES_EXPERIMENT_PLAN.md. Preserve draft, historical and unverified status. Do not copy upstream text/code: README/plugin declare MIT but the inspected LICENSE file was unavailable.
- Separate feature: Do not reopen or overwrite odd/tasks/local-ollama-agent.md. The Ollama runtime remains independently blocked/unverified.

## Scope and checks

- New skill: .agents/skills/monoga-research-sales-experiment/SKILL.md.
- New structural tests: tests/skills/monoga-research-sales-experiment.test.mjs.
- Reuse existing canonical documents as read-only references. Do not edit existing routers, global/project settings, runner, scheduler, or unrelated dashboard work.
- Skill: concise trigger-led description; sourced observations separated from hypotheses/unknowns/permissions/history; one experiment draft with measurable metric, stop conditions and explicit human approval before external action; no unsupported operational or revenue claims.
- Route: delegated direct writer. Preparation required multiple files and creation of skill plus non-trivial tests; mapper completed first. Parent owns task document, branch, work-unit commit and review authority.
- TDD: effective configured mode unknown; root .pi/gentle-ai/sdd-preflight.json is not TDD configuration. This slice changes documentation/instructions, not an executable production behavior. Ordinary structural checks apply; no claim of configured RED/GREEN. Runner: Node built-in test runner, `node --test tests/skills/monoga-research-sales-experiment.test.mjs`.
- Verification: Node syntax check on the new test; Node tests for constrained frontmatter, skill identity/description, required contract sections, relative source references and safety/output contract presence. These checks cannot prove semantic compliance, factual correctness, business usefulness, or Pi discovery.
- Missing dependency/documentation: Installed skill-creator references a normative skill-style-guide.md that was not found. Use its available explicit formatting rules and disclose the limitation; no invented compliance claim.
- Registry/discovery: Follow documented project-root .agents/skills discovery. Do not create a new registry system. Runtime discovery and explicit `/skill:monoga-research-sales-experiment` invocation must be checked after `/reload` or a new session; never claim active discovery from filesystem placement alone.

## Delivery

- Forecast: approximately 180-280 authored additions, zero deletions including tests and this recovery document; advisory only, not a hard limit or code-golf target.
- Strategy: ask-on-risk; no PR/push/merge authorized. Under the approximately 400-line threshold; chain choice not needed presently.
- Branch point: f29d826a73bb87909420d8a5d41a2f9a17c722cb (master). Created feat/ecc-pi-ollama-adaptation before source writes; preserve unrelated dirty/untracked files and stage only this feature's exact files.
- Work unit: one skill with its structural tests and recovery document, Conventional Commit. Record commit identity after checks; do not imply a checkbox is a review receipt.
- RDD: on, global deciding source observed via `gentle-ai review mode status --json`. Assess the committed work unit against the branch point; use exact native transitions and candidate consent if due. Never include unrelated ambient worktree changes in review.
- Committed authored lines: 175 additions, zero deletions. Work-unit commit: 02b4f913716a19adbcaf6ab8aa9c838d0972d58c (`feat(skills): add evidence-gated Monoga sales experiment workflow`). Author: Daniel <contact@example.com>, explicitly supplied by user and applied only through repository-local Git config. No push/PR. Reviewed boundary remains branch point.

## Tasks

- [x] T1 — Implement the original Pi skill and deterministic structural tests; run checks and read back; close with scoped work-unit commit 02b4f913716a19adbcaf6ab8aa9c838d0972d58c. Route: delegated writer; parent branch/commit. Acceptance: focused checks pass, references resolve, permissions remain restrictive, unrelated files untouched.
- [ ] T2 — Assess the isolated committed candidate under native RDD and record tier/outcome and remaining checks. Route: parent native authority; independent verifier if required by returned assessment or unresolved review. Never invent approval or lower risk on assessment failure.
- [ ] T3 — Confirm actual Pi discovery and one read-only draft invocation after reload/new session. Route: parent runtime/manual validation. Acceptance: skill visible and selected, supplied evidence statuses retained, draft remains non-executing; no model/scheduler/network prerequisite inferred from structural tests.

## Progress and next step

- Mapping complete. No existing root .agents directory; root .pi contains only gentle-ai. Existing nested Monoga router complements rather than replaces the proposed skill. No unresolved product choice; this user is the approval owner.
- T1 source implementation written: original skill and tests, 130 additions across two files. Writer observed syntax check passing and Node tests 6 passed/0 failed; parent read both files and their constraints. Independent verifier observed the same syntax and 6/6 test results, read all three canonical sources and identified no correction. Scoped work-unit commit succeeded with only the skill, tests and this feature document (02b4f913716a19adbcaf6ab8aa9c838d0972d58c). The three referenced canonical docs are pre-existing untracked local sources: checks are workspace-dependent, not a self-contained fresh-checkout guarantee. Ollama model/RAM/end-to-end blockers remain unchanged.
- Pre-commit native assessment returned unassessable because ambient untracked files require explicit declaration. Native plan requires writer checks plus independent verifier; both observed exact syntax/test commands passing. No review authority was created and unrelated worktree changes remain excluded from this feature.
- Engram full-document mirror pending: installed provider binary cannot initialize (instance-id unsupported, older than required release). Preserve local document and retry only when available; do not claim mirrored persistence.
- T2 blocked: facade assess requested with the committed range and returned unassessable (ambient untracked files require explicit declaration). A subsequent inspect with committed selectors and untrackedScope=exclude returned an unrelated workspace candidate containing `.gitignore` and dashboard files instead of this committed work unit. No START/lineage/capture/approval was created for that unrelated candidate. Independent checks already satisfy the returned conservative verification plan, but native review closure is unavailable for this feature; do not claim approval or lower its risk.
- Next: resolve committed-range review isolation through supported native tooling; confirm runtime discovery and read-only invocation after reload/new session. T3 remains pending. New company-wide modular organization request is separate from this committed candidate. Engram synchronization remains pending.
