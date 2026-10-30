# Overnight Revenue Sprint — handoff

Mission: turn Monoga OS into a sales system that can produce revenue. Deadline 06:00 local.
No push, deploy, messages, emails, purchases, or external accounts.

## Where things are

| Thing | Location |
|---|---|
| CRM (Revenue Command Center) | `trabajo/monoga/proyectos/monoga-os` — branch `monoga-event-crm` (own git repo, no remote) |
| Start / stop | `tools\monoga\start.ps1` (real), `start.ps1 -Demo` (synthetic, database `crm_demo`), `stop.ps1` |
| CRM URLs | app `http://127.0.0.1:3100/monoga`, capture agent `/monoga/capture`, API `:3101`, Postgres `127.0.0.1:5432` |
| Runbook | `trabajo/monoga/proyectos/monoga-os/docs/monoga-local-runbook.md` |
| Sprint deliverables | `docs/overnight-2026-10-06/` (this repo) |

## CRM commits tonight (on top of ab2f6eb)

| Commit | What |
|---|---|
| 49db84b | COP currency; compact money fix; dashboard ignores archived deals |
| 1efb3f9 | Payment status field; COP reporting currency; `[DEMO]` labels |
| 98a62b5 | `/capture` Event Lead Agent |
| 757fe31 | Follow-ups panel on Overview |
| ab12040 | Inbound message mode: draft reply for approval, budget, escalation |
| fab794f | Hide "Enriching" badge without an agent |
| baae2e0 | `--demo-pipeline` seed, only on a `_demo` database |
| f4aeb08 | QA fixes: negations, opt-outs, complaints, names, companies |
| baf12b2 | start/stop scripts |
| 442178c | Spanish stage labels |
| ae0a77b | Remembered current event in capture |
| c20309a | QA re-check: title not in company; opt-out schedules nothing |

## Done

- OENYX recorded from stated facts only (Won, 1.200.000 COP, Invoice pending, 2 tasks).
- Real CRM holds only OENYX. All demo records archived (not deleted).
- Demo database `crm_demo` with a COP 15M synthetic pipeline for live demos.
- Portfolio audit, top offers, event research, ICP map, playbook, sales kit, pilot proposal
  template, website claims fix, next actions for Daniel. QA reviewed; must-fix items fixed.

## Status

Backlog closed at 23:40. ICP 2 research list done (`ICP2_TARGETS.*`, 19 rows, research-only).
Final QA re-check passed; its two remaining must-fix items are fixed in c20309a and 807bd23.

## Known limits

- No LLM: 0.6 GB RAM free and no API key. The capture agent is a local Spanish rule engine.
- OENYX close date in the CRM is the load date; the real agreement date is unknown.
- Possible link E-block (client "Sebastian") ↔ OENYX is an INFERENCE only.
