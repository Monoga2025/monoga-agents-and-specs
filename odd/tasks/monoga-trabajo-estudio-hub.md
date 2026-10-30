# Monoga Trabajo / Estudio hub

## Objective
Create a safe central operating structure that connects revenue-generating work, sales, marketing, content, operations, and shared business context, while separating study/personal/experimental material.

## Problem
Monoga OS is split across many top-level projects. Content generation lacks shared sales, offer, customer, and business context, so modules produce disconnected outputs.

## Authorized scope
- Create `trabajo/` and `estudio/` hub folders at the workspace root.
- Create a central project index and shared-context documents for the Trabajo system.
- Migrate revenue modules progressively into `trabajo/monoga/modulos/` with backup manifests, compatibility junctions where needed, reference updates, and tests.
- Preserve sensitive data and credentials without exposing them in manifests or logs.
- No external publishing, remote operations, credential use, or paid services.

## Constraints
- Existing paths in `11_MONOGA_OS/data/projects.js` remain valid.
- Do not physically migrate projects until references and dependencies are reconciled.
- Preserve current source-of-truth registry; add the new hub as an overlay, not a competing registry.

## Tasks
- [x] T1 Inventory current work/study candidates and existing source-of-truth registry.
- [x] T2 Create non-destructive Trabajo/Estudio hub and central context model.
- [x] T3 Connect content, sales, offer, and operations context through documented contracts.
- [x] T4 Verify paths, links, and dashboard compatibility; record migration backlog.
- [x] T5 Create migration manifest and backup/inventory evidence.
- [x] T6 Migrate content, sales, revenue, operations, and finance modules progressively.
- [x] T7 Update references, imports, registry, compatibility paths, and tests.
- [x] T8 Remove obsolete duplicates after consumer/path verification.

## Route and checks
- Route: delegated exploration and bounded writer; multiple files and cross-project context.
- TDD: not applicable to markdown/index structure; structural verification and path checks apply.
- Delivery: no external publication or physical migration in this phase.

## Progress
- Existing registry inspected: `11_MONOGA_OS/data/projects.js` explicitly treats categories as labels and warns against moving paths before reconciliation.
- Candidate revenue/work domains include `trabajo/monoga/modulos/12_LA_GROWTH_STUDIO`, `13_SALES_ENGINE`, `09_AUTO_REVENUE_ENGINE`, `02_PROYECTOS_WEB`, `06_ADMIN_Y_FINANZAS`, and `11_MONOGA_OS`.
- Existing organization task `odd/tasks/organizar-monoga-os-y-drive.md` requires read-only inventory before moves; this feature follows that constraint.
- T1/T2 evidence: created `trabajo/README.md`, `trabajo/monoga/README.md`, `trabajo/monoga/contexto-general.md`, `trabajo/monoga/mapa-modulos.md`, and `estudio/README.md`; no existing project was moved or modified.
- T3 evidence: created `trabajo/monoga/contexto-general.json` and a read-only loader in `trabajo/monoga/modulos/12_LA_GROWTH_STUDIO/02_MOTOR_DE_CONTENIDO/shared_context.py`; generator now accepts shared context/persona profiles without changing deployment behavior.
- T4 evidence: 9 content-engine tests passed; both persona smoke checks loaded central schema 1.0 and generated default copy without digits. Existing physical paths and `11_MONOGA_OS/data/projects.js` remain unchanged.
- T5 evidence: `trabajo/monoga/migracion/manifest.json` records six source roots, counts, byte totals, ignored/tracked state, and environment filenames without secret values.
- T6/T7/T8 progress: all five scoped modules moved physically under `trabajo/monoga/modulos/`; active registry, OpenSpec config, skills, audit probe, sales references, tests, and content-engine context loader use canonical paths. Compatibility junctions were removed after the consumer scan. `11_MONOGA_OS` remains at the root by design.
- Verification: root cwd confirmed, registry syntax and YAML parse pass, 9 Content Engine tests pass from the canonical path, canonical module paths resolve, old junctions are absent, and no secret values were read or logged. Documentation tests remain to be run after the final reference update.

## Next step
Run the documentation test suite and inspect the final diff/secret scan; no external publication or service execution is authorized.
