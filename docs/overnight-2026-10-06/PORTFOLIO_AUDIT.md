# Monoga portfolio audit (product / systems) | 2026-10-05

Auditor stance: unsentimental, optimized for probability of revenue soon. Scope: everything under `C:\Users\Monoga\Desktop\Monoga OS`. Nothing was modified, started, killed, pushed or sent. Evidence legend: **FACT** = observed in file/command this session; **INFERENCE** = my reading; **UNKNOWN** = not determinable from disk.

## 0. Headline findings

1. **Monoga has exactly one asset that looks like a 2026 enterprise-AI product base: the CRM fork** (`trabajo/monoga/proyectos/monoga-os`). Everything else is either web-brochure work, personal tooling, historical experiments, or documentation about work.
2. **No other project is a demo-able AI agent.** FACT: the "Agente de Ventas WhatsApp" is a markdown note (`jarvis/Agente de Ventas WhatsApp.md`), not running code. The only code that talks to customers is the OFM "chatter" engine (adult-creator persona), which must be killed.
3. **The public website overclaims.** FACT: `web/grupomonoga-home/casos-de-exito.html` says "Resultados Reales en Produccion", "En Produccion Activa", "100% eliminacion de errores de inventario", "<1.5s tiempo de cotizacion automatica en WhatsApp" for RFI Telecomunicaciones. FACT: the RFI artifact on disk is a *proposal microsite* (`web/cotizacion-william/index.html`, countdown timer, "Ir al Pago"); the company's own gate doc (`sales-engine/03_CRM_Y_OPERACIONES/PILOTO_IA_EMPRESAS.md`) says WhatsApp automation, voice, booking and payments are "no validados para venta". UNKNOWN whether any RFI production system exists. Until proven, these claims are a credibility and legal liability in front of exactly the buyers you want. FIX before the Luque summit.
4. **Process outweighs product.** FACT: ~10 `odd/tasks/*.md`, 7-module `COMPANY_OPERATIONS.md`, openspec, 3 skill trees, ORCA handoffs, 6 overlapping handoff docs; the last "sales" evidence is Becamel COP 700.000 (historical, per `PILOTO_IA_EMPRESAS.md`) and a six-business exploratory ledger. Documents state "revenue, budget, CAC ... unknown" and "no niche winner". That is a company that has been planning, not selling.
5. **The company's own gates forbid the thing it wants to sell** (automated WhatsApp, consent, human relay). That is reasonable legally (Ley 1581) but means the first offer must be *supervised / human-approved*, and the demo must say so. This is a feature if framed as "AI proposes, your person approves".
6. **Dated forcing function:** Luque Business Summit LATAM, Bucaramanga, 17-19 Nov 2026, 2,000+ owners (`odd/tasks/luque-business-summit-sales-system.md`). ~6 weeks. Everything should point at one demo for that room.

## 1. Inventory and classification (28 items)

Classes: KEEP / POLISH / FIX / REBUILD / MERGE / ARCHIVE / KILL. Counts: **KEEP 2, POLISH 1, FIX 2, REBUILD 0, MERGE 5, ARCHIVE 16, KILL 2.**

Excluded by instruction: `trabajo/monoga/integraciones/trycompai-crm-source` (immutable upstream), `trabajo/monoga/integraciones/maral-os-source` (historical).

| # | Item | Path | Last touched | Runs? (evidence) | Class |
|---|---|---|---|---|---|
| 1 | CRM fork (Revenue Command Center) | `trabajo/monoga/proyectos/monoga-os` | 2026-10-05 | Yes: `:3101/health` = `{"status":"ok","database":"up"}`; `:3100` answers 307 (auth redirect) | **KEEP** |
| 2 | CRM `apps/agent` (eve research/enrichment agent) | `monoga-os/apps/agent` | 2026-10-05 | Not run. Needs AI Gateway key + vendor keys; local `.env` deliberately has none | **FIX** |
| 3 | 11_MONOGA_OS dashboard (static registry + `server.mjs`) | `11_MONOGA_OS` | uncommitted edits | Not run | **KEEP** (internal, frozen) |
| 4 | Monoga ERP (Fastify+React "project router" dashboard) | `trabajo/monoga/proyectos/monoga-erp` | 2026-10-05 | `tsc --noEmit` passes (exit 0, no output). Tests/build not run | **MERGE** |
| 5 | Event-sales kit (playbook, demo-catalog, one-pager, proposal template, QR copy, in-memory harness) | `monoga-erp/src/event-sales/*` | 2026-10-05 | Harness is in-memory TS; docs only | **POLISH** |
| 6 | Sales Engine "13" (Twenty guide, John's field guide, pilot gate, NIM prototype) | `proyectos/sales-engine` | 2026-10-05 | Python sync script + docs; not run | **MERGE** |
| 7 | Remote Twenty CRM (crm.grupomonoga.com, Railway) | not on disk (`growth-studio/deployer/railway_twenty`, `sales-engine/.../twenty_crm_sync.py`) | UNKNOWN | UNKNOWN (not probed; no external calls allowed) | **MERGE** |
| 8 | Hostinger SFTP agent + deployer (two near-duplicate copies) | `web/agente-hostinger`, `growth-studio/deployer/hostinger_cli` | 2026-09-28 | Not run (would touch remote) | **MERGE** |
| 9 | grupomonoga.com home site (6 static pages) | `web/grupomonoga-home` | 2026-10-05 area | Static; opened by file read only | **FIX** |
| 10 | LA / Bucaramanga demo-site generator + 10 HTML demos | `growth-studio/01_GENERADOR_LOTES_LA` | 2026-09 | Static HTML | **ARCHIVE** |
| 11 | Content engine (YouTube/viral scripts, Python) | `growth-studio/02_MOTOR_DE_CONTENIDO` | 2026-10-05 (docs) | Not run; own handoff says claims unverified | **ARCHIVE** |
| 12 | OFM AI chatter engine ("ai_receptionist_core", package name `chatter_core`; copy in `00_Archivado/2026-09_OFM_Chatter_y_Freelance`) | `growth-studio/ai_receptionist_core` | 2026-09 | **Tests cannot run**: `vitest` missing from `node_modules` (MODULE_NOT_FOUND). Default persona "Chloe, 22"; media vault `C:\Users\Monoga\Desktop\only`; PPV scoring | **KILL** |
| 13 | 09 Auto Revenue Engine (scrape US local biz -> luxury site -> cold email -> $199 Stripe) | `proyectos/revenue-automation` | 2026-10-05 (docs) | Own header: "historico / no verificado". SQLite has 14 processed businesses | **ARCHIVE** |
| 14 | Local Ollama research loop | `revenue-automation/ollama_agent` | 2026-10 | Ollama installed but not running (`:11434` refused); "24 triggers, no verified cycle" (`COMPANY_OPERATIONS.md`) | **ARCHIVE** |
| 15 | Jarvis (OpenClaw Telegram assistant: calendar, personal finance, study, couple expenses) | `proyectos/jarvis` | 2026-09-13 | Not run. `STATUS.md`: COMPLETE_LOCAL; Railway deploy BLOCKED_EXTERNAL | **ARCHIVE** |
| 16 | RFI Telecom proposal microsite (COP 1.8M + 300k/mo, Wompi) | `web/cotizacion-william` | 2026 | Static | **ARCHIVE** |
| 17 | Wilmocol static site (CCTV / access / electrical / fire) | `web/wilmocol` | 2026-09-02 | Static + Next export | **ARCHIVE** |
| 18 | Next.js + Drizzle + Postgres template | `web/nextjs-postgresql-template` | 2026-10-05 (tsbuildinfo only) | Not run | **ARCHIVE** |
| 19 | Empty folder | `web/Nueva carpeta` | n/a | n/a (0 files) | **KILL** |
| 20 | E-bike USA liquidation (28 bikes) | `proyectos/bike-sales` | 2026-09-13 | Docs + Next app, "sin verificar" | **ARCHIVE** |
| 21 | USA expansion / portfolio case studies | `proyectos/usa-expansion` | 2026-09-13 | Docs | **ARCHIVE** |
| 22 | Admin / finance (personal) | `proyectos/admin-finance` | 2026-09-14 | n/a | **ARCHIVE** |
| 23 | Voz en foco (Electron speech trainer) | `proyectos/voice-monoga` | 2026-09-20 | Not run | **ARCHIVE** |
| 24 | UNAB OS (student micro-SaaS, COP 14.9k/mo) | `04_UNAB_INGENIERIA/UNAB OS` | 2026-10-01 | Registry has a run command on :4310; not run | **ARCHIVE** |
| 25 | MARAL OS (Colombian ERP: CRM, quotes, DIAN e-invoicing, WhatsApp+LLM quote extraction) + MARAL website | `08_MARAL/*` | 2026-10-05 | Not run; per instruction historical | **ARCHIVE** (mine for ideas) |
| 26 | E-block (supabase stub + archived app, "Version malisima") | `E-block`, `00_Archivado/e-block-moved` | 2026-09-20 | n/a | **ARCHIVE** |
| 27 | Jefe Monoga multi-agent "framework" docs | `trabajo/monoga/sistema/jefe_monoga` | 2026-09-14 | Docs/skills | **ARCHIVE** |
| 28 | Governance layer: `docs/*`, `odd/tasks/*`, `openspec/`, `.agents/skills`, 11 numbered handoffs | root | 2026-10 | n/a | **MERGE** (condense to one page) |

## 2. Per-item findings (commercially relevant ones in depth)

Rating scale for "ability to charge" = how quickly someone in Colombia would pay for this as-is.

### 1. CRM fork "Revenue Command Center" -> KEEP
- **What:** fork of trycompai/crm, Next.js app (:3100) + NestJS API with tRPC (:3101) + Postgres + Prisma. Companies, contacts, deals (stages), activities incl. TASK with `dueAt`, saved views, custom fields (6 deal fields + 3 consent fields seeded by `packages/db/prisma/monoga-seed.ts`), Gmail/Calendar sync (off), website form tracking -> contact filing (`apps/api/src/tracking`), `dashboard.summary`, currency in COP.
- **State (FACT):** one local commit `ab2f6eb` (2026-10-05) on top of upstream; 4 uncommitted modified files (currency + seed). Health OK. Local-only, loopback, synthetic data, no integrations enabled by design.
- **UI/UX:** upstream-quality modern CRM UI (INFERENCE from upstream provenance and design docs; not deeply audited per instruction). Mostly English UI/copy, stage labels remapped via display labels over upstream enums (`DEMO_BOOKED` = "New lead") which is a hack that will leak in reports/API.
- **Buyer / pain:** SMEs with leads scattered across WhatsApp, forms, and a salesperson's head. Pain = leads lost to slow/no follow-up. Economic value: real but diffuse; measurable as (#leads x close rate x ticket).
- **Differentiation:** the CRM itself: none (commodity). Differentiation = what the agent does on top of it, and COP/Spanish/WhatsApp-first workflow.
- **Time to demo:** now (CRM). **Delivery difficulty:** medium (hosting, auth, backups). **Charge:** low as a CRM, high as part of an outcome offer. **Reuse:** high. **Tech debt:** upstream is large (1,577 files, Bun, turbo); forking means merging upstream; "intelligence never in API" rule; agent assumes AI Gateway.

### 2. CRM `apps/agent` (eve) -> FIX
- Durable agent runtime with tools (`list_deals`, `set_field_value`, `read_deal_history`, `write_brief`, `schedule_recheck`, `research_person`...). It is a **research/enrichment** agent, not a sales agent. Needs `AI_GATEWAY_API_KEY`, context.dev, Perplexity (all intentionally unset). The seeded Monoga fields are `agentFilled:false` ("agent never fills these") so the shipped agent is *designed not to* qualify leads.
- Class FIX because the gap to "qualify + schedule follow-up" is a new instruction set plus lifting the field guard, not a rewrite. Do not depend on it for the 3-4 hour demo; use tRPC (see TOP_OFFERS.md).

### 3. 11_MONOGA_OS -> KEEP (internal)
- Single-file registry dashboard (85 KB `index.html`) fed by `data/projects.js`. Internal map of folders, honest "sin_verificar" statuses. Not a product, no buyer. Freeze; do not spend time. It duplicates the ERP "project router" dashboard (item 4).

### 4. Monoga ERP -> MERGE
- Misnamed: it is not an ERP. FACT: Fastify + React admin shell, JARVIS HUD view, YouTube cases view, search, workspace-folder adapters. `HANDOFF.md` describes an in-progress "local project router" redesign, one feature reopened. This is an internal toy dashboard (duplicate of #3). **No buyer.**
- Salvage: `src/event-sales/*` (item 5). Kill the rest after extracting.

### 5. Event-sales kit -> POLISH
- FACT: playbook, 4-item demo catalog (each with "se puede / no se puede afirmar" and 3-minute route), one-pager, QR form copy, proposal template, readiness checklist, and a deterministic in-memory harness with synthetic fixtures (`Ana Torres / Cafe Andino`, `Luis Gomez / Norte Logistics`). Honest and event-aimed.
- Weakness: the demo catalog rates **0 of 4 demos as functional** (3 "prototype", 1 "blocked"), and none shows AI acting. The kit is a script for a demo that does not exist yet. Pairing it with the Lead Desk demo (TOP_OFFERS.md) is the point.

### 6/7. Sales Engine 13 + Twenty remote -> MERGE
- Value is in the *content*: John's field guide, diagnostic script, pilot gate. Twenty on Railway is a paid duplicate of the local CRM; UNKNOWN whether it still runs/bills, and what real data it holds (Becamel sale, ten Bucaramanga prospects live there per docs). **Decide one system of record**: either migrate Twenty data into the CRM fork or abandon the fork for the event. Running both is how pipeline data gets lost. INFERENCE: the local fork wins for the demo; Twenty may hold real prospects, so export before shutting down.
- `README` itself says the historical AI prototype (NVIDIA NIM) has "no verified enterprise implementation".

### 9. grupomonoga-home -> FIX
- Six static pages on Tailwind CDN + unpkg Lucide (runtime CDN dependencies, no build, no tests). Positions Monoga as "Ingenieria de Software, Paneles Administrativos & Agentes IA" which is the right *positioning*, but proof is unsupported (see headline #3). Spanish copy, decent typographic system (Plus Jakarta Sans). Visual quality: not rendered in this audit (no browser run); code-level it is a typical Tailwind marketing page. UNKNOWN deployment state.
- Fix list: remove/soften RFI "in production" and numeric claims; label RFI as proposal/pilot unless client confirms; replace "Agente WhatsApp 24/7" with "piloto supervisado". Add a visible demo CTA.

### 10. LA / Bucaramanga demo generator + 10 demos -> ARCHIVE
- "We build websites" assets. Ten static HTML demos for Bucaramanga businesses built without client permission (docs say rights/consent pending). Reuse only as an optional door-opener at the summit; not the offer. Pain solved: weak (a brochure site), buyer pays little (Becamel COP 700.000 was the only recorded sale). Difficulty low, margin low, differentiation none. Do not lead with this.

### 12. OFM chatter engine -> KILL
- FACT: persona "Chloe, 22", slang injection, PPV (pay-per-view) scoring, media router over a local "only" vault. This is a chat-impersonation engine for adult-content creators. Wrong market, reputational risk for an enterprise-AI brand, platform ToS risk, and the folder is mislabeled `ai_receptionist_core`, which makes it look like the company's receptionist product. Tests do not run (vitest absent).
- Salvage only generic ideas (3 s message aggregator/debounce, per-user memory) re-implemented clean. Delete the misleading name.

### 13. 09 Revenue Engine -> ARCHIVE
- Scraper + luxury landing generator + cold-email + $199 Stripe link aimed at US local businesses. Sell-a-website funnel, cold email without consent (conflicts with the company's own consent rules and, for US, CAN-SPAM). `EXECUTIVE_BRIEF` itself is marked "historico / no verificado". Salvage nothing but the scraping patterns.

### 15. Jarvis -> ARCHIVE
- Competent personal assistant (Telegram, Google Calendar, finances, couple accounting, study coach). 191 files, STATUS well documented. **Buyer: Daniel only.** The public site lists it as a "Copiloto autonomo" case; that is a personal tool, not a client result. Sensitive data (finance, partner consent). Keep out of any sales material. Good proof of engineering competence with agent safety patterns (allowlisted tools, claim-before-send) which are reusable *ideas* for the sales agent's guardrails.

### 25. MARAL OS -> ARCHIVE (mine)
- Per instruction historical. Noted anyway: it is the only code in the tree that implements **WhatsApp message -> LLM extraction of items/address -> match client/products -> draft quote, falling back to human review**, plus DIAN e-invoicing (UBL/CUFE) which is a genuine Colombian differentiator. That is the seed of Offer 2 (Quote/Order intake agent). `ACTIVE_SPRINT.md` claims 100% complete; unverified. Rebuilding it clean and *small* (not reviving the 2,446-file ERP) is the play, only after Offer 1 gets traction.

### 16, 17. Client static sites (RFI proposal, Wilmocol)
- Wilmocol is a real-looking client site (CCTV/access/electrical/fire), finished static output, last touched 2026-09-02. RFI is a proposal page with a fake countdown ("Expira en 23h 48m") and "1 de 2 cupos nacionales" scarcity. Fake urgency on a B2B proposal is a trust risk. Whether either client paid: UNKNOWN (`Cotizacion William RFI.md` lists COP 1.8M / 50% advance 900k / 300k monthly; no payment evidence).

### Others (20-24, 26, 27): no buyer for the enterprise-AI goal
- Bike liquidation, USA career/portfolio, finance, voice trainer, UNAB student SaaS (B2C COP 14.9k/month, would need thousands of students), E-block, "Jefe Monoga" doc framework. All are fine personal/side projects. None sells to a company. Archive; stop sinking time.

## 3. Cross-cutting tech debt

- **No git for most projects** (`hasGit:false` for web, bike-sales, growth-studio containers). Client work (Wilmocol, RFI, grupomonoga) can be lost.
- **Duplicates:** two Hostinger agents, two internal dashboards, two CRMs (Twenty remote + fork), two chatter copies, two MARAL folders.
- **Secrets hygiene:** `sales-engine/.env` exists (per its README: NVIDIA key + Twenty credentials). Not read. Ensure it is gitignored before any push.
- **Claims vs evidence:** public copy and portfolio docs outrun verified state (the company's own docs say so repeatedly).
- **Language:** CRM UI English, buyers Spanish. Needs Spanish labels for demos.

## 4. What I did not do

Did not run builds/tests beyond: `tsc --noEmit` on monoga-erp (pass), attempted vitest on ai_receptionist_core (cannot run), health probes of :3100/:3101. Did not render any UI. Did not read `.env` files. Did not probe remote systems (Twenty, Railway, Hostinger, grupomonoga.com).
