# Top offers and #1 demo plan | 2026-10-05

All prices are **HYPOTHESES, not evidence**. Only price points on record: Becamel COP 700.000 (one historical web sale), RFI proposal COP 1.8M setup + 300k/month (no payment evidence), UNAB OS COP 14.9k/month (B2C, no evidence of sales). Nobody has been asked whether they would pay for an agent. Treat every COP figure below as a number to test in the first 5 conversations.

## 1. Scoring (1 = bad, 5 = great; a judgment ranking, not a computed result)

| Offer | Pain value | Buyer urgency | Demo wow | Delivery speed | Margin | Differentiation |
|---|---|---|---|---|---|---|
| **A. AI Sales Agent** ("Lead Desk": lead arrives -> qualify -> CRM -> follow-up) | 4 | 4 | 5 | 4 | 4 | 3 |
| **B. AI Operations Agent** (WhatsApp/email quote-and-order intake -> extract -> match -> draft -> human approves) | 4 | 3 | 3 | 2 | 3 | 4 |
| **C. AI BI / Command Center** (owner's pipeline brief, stalled-deal alerts, forecast) | 3 | 2 | 4 | 3 | 3 | 2 |

These are my subjective 1-5 ratings. No weights, no multiplication: the ordering A > B > C is a judgment call, not a measured gap. Rationale per cell:
- **A**: pain = leads answered late or never; every SME with WhatsApp/Instagram/forms has it and can state it in one sentence. Urgency 4 because it is felt this week, not this year. Wow 5 because the demo is visual and fast (message in, CRM changes, task appears). Speed 4: CRM base exists, 3-4 hours to demo, 2-3 weeks to a supervised pilot. Margin 4: mostly your time plus ~USD 10-40/month of LLM. Differentiation 3: many "AI SDR/WhatsApp bot" vendors exist; yours is local, Spanish, human-approval, tied to a CRM the client keeps. Not 4+ until you have a Colombian result.
- **B**: real pain for distributors/manufacturers (quote turnaround), and MARAL shows the extraction pattern plus DIAN e-invoicing is hard for foreign vendors to copy (diff 4). But every client has different catalogs/ERPs, so delivery is per-client integration (speed 2), the demo is less visually dramatic (3), and urgency is lower until a client loses a deal over it.
- **C**: owners say "I want dashboards" and never pay for them; BI without data capture is empty. Urgency 2. Its value is as the *report layer* on top of A. Standalone it is a nice-to-have.

**Hypothesis verdicts:** (1) AI Sales Agent: **accept as #1, with conditions** (supervised, no unsolicited outreach, measured pilot). (2) AI Operations Agent: **accept as #2, but only as a second product after A lands a client**; do not build in parallel. (3) AI BI / Command Center: **reject as a standalone offer**; ship it as the dashboard inside A (the CRM `dashboard.summary` already exists) and as an upsell.

Honest caveat: the ratings are my judgment, not buyer data. The market research in `docs/MARKET_COMPARISON_2026.md` found no demand evidence for any niche. The scoring says "build this demo first", not "this will sell".

## 2. Offer A: AI Sales Agent ("Lead Desk") | RECOMMENDED #1

- **Buyer:** owner/commercial manager of a Colombian SME (5-50 staff) that sells by conversation and has inbound leads from WhatsApp, Instagram, web forms, events: vehicle workshops/dealers, clinics/estetica, HVAC/security/solar installers, schools, distributors. Best first targets: businesses with a person who already answers messages by hand (they feel the delay).
- **Pain:** leads cool off because replies are slow, unqualified leads eat the best hours, and nobody follows up on day 2/5/10. Owner has no view of pipeline. Value is arithmetic: if 100 leads/month x 5% extra conversions x ticket.
- **Promise (HYPOTHETICAL WORDING, untested with any owner; careful, no uplift claims):** "Every inbound lead gets a first reply draft, a qualification summary, a pipeline stage and a scheduled follow-up within a minute, and your team approves before anything is sent. You see the pipeline in one screen." Do **not** promise "24/7 autonomous sales" or revenue uplift.
- **Deliverable:** hosted CRM instance (fork), lead intake endpoint (WhatsApp Business API/web form/email forward), agent that qualifies and drafts replies in the client's tone from an approved FAQ, auto-created follow-up tasks, weekly pipeline brief, 14-day measured pilot, human-in-the-loop approval queue, consent logging fields.
- **Starting price hypothesis (COP, HYPOTHESIS ONLY):** Consistent with `SALES_KIT.md`: 14-day paid pilot COP 1.5M-2.5M (configuration, owner-approved answers, one channel, measurement); then COP 600k-1.2M/month (hosting, AI, tuning, support). All hypothesis. Reference anchor, not evidence: RFI proposal at 1.8M + 300k/month. Test by asking, not by assuming.
- **Demo:** the Lead Desk demo below. Three scripted leads. 3 minutes.
- **Prereqs from your own gates** (`PILOTO_IA_EMPRESAS.md`): written client authorization of channel and data, owner-approved FAQ, a named human to receive escalations, human approval on outbound. For the summit, demo with synthetic data only.
- **Kill criteria:** if 5 qualified owners at the summit/pre-summit conversations do not ask for a pilot after seeing the demo, the offer is wrong; try B on a distributor.

## 3. Offer B: AI Operations Agent (Quote/Order Intake) | #2, later

- **Buyer:** distributor, manufacturer or installer that quotes by WhatsApp/email from a product catalog (RFI Telecomunicaciones-type, MARAL-type).
- **Pain:** quotes take hours, wrong items, no record, owner dependent on one seller. Higher ticket per hour saved than A, but per-client integration.
- **Promise (HYPOTHETICAL WORDING, untested):** "A customer's message becomes a draft quote with matched products and prices, ready for your salesperson to approve in one click; unmatched items go to a person."
- **Deliverable:** isolated module (not the 2,446-file MARAL): intake -> extraction -> catalog match -> draft quote PDF -> approval -> optional DIAN e-invoice later. Starting from the pattern documented in `usa-expansion/portfolio/case-study-maral-os.md` and `08_MARAL/maral-os/backend` (historical reference).
- **Starting price hypothesis (COP, HYPOTHESIS ONLY):** setup COP 4M-8M (catalog load, integration), COP 800k-1.5M/month. Higher because per-client work.
- **Demo:** paste a messy WhatsApp request ("necesito 10 radios Hytera y 5 baterias para Bucaramanga") -> structured quote draft with match confidence. 4-5 hours to build once A's agent skeleton exists. Not part of the 3-4 hour plan.

## 4. Offer C: Command Center | fold into A

- As a standalone, **reject**. As an add-on: weekly pipeline brief by email/WhatsApp (open deals, stalled >N days, expected value, tasks overdue). The CRM already computes stage buckets, monthly totals, biggest open deal (`apps/api/src/dashboard/dashboard.contracts.ts`).
- **Upsell price hypothesis (COP, HYPOTHESIS ONLY):** included in A's monthly fee, or COP 300k-600k/month alone. Do not sell it alone.

## 5. #1 demo: "Lead Desk" (updated to what actually shipped)

Supersedes my earlier build plan. The demo now exists in the CRM; see `SALES_KIT.md`, section "3-minute live demo", for the script and shipped example names (e.g. "Camila de Taller Andino Demo"). Do not rely on names from my earlier draft.

### What ships (per QA/lead; verify in `QA_REPORT.md`)
- Page `/monoga/capture` in the CRM (`apps/app/lib/lead-intake.ts`): a **local Spanish rule engine**, no LLM. Two modes: event note and inbound message. It extracts person, company, pain, budget in COP and interest, shows why, writes a draft reply that **waits for human approval**, escalates complaints, handles opt-out, and writes to the CRM (company, contact, deal, fields, note, draft, follow-up task).
- Flow reaches tRPC procedures such as `deals.create/update/setStage`, `activities.create`, `contacts.create`, and the Overview follow-ups view.

### What does not ship
- **No LLM is wired in.** Rules are deterministic and brittle on unfamiliar phrasing. An LLM layer (with the rule engine as fallback, approved-FAQ grounding and no auto-send) is a **pilot requirement**, not part of today's demo. Do not describe the demo as "AI understanding" beyond what rules do; say "reglas + revision humana" if asked.
- No real WhatsApp/email channel, no real sending, no consent inference.

### Known gaps from QA to keep in mind
- Contact/deal find-or-create duplicates by name (QA item 11); archive demo deals after each run.
- English CRM chrome around a Spanish page.
- Nobody has validated willingness to pay; the demo opens conversations, it is not proof. Ley 1581/2012 and your own gates (`PILOTO_IA_EMPRESAS.md`) apply before any real pilot.
- Offer B demo (messy quote request -> structured draft) does not exist; build only after A gets traction.
