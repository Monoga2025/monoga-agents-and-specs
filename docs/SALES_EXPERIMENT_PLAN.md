# 30-Day Sales Experiment

## Decision and boundary

Pause new product construction, model shopping, dropshipping, and aesthetic work. Test whether a narrowly scoped service solves a problem that local businesses actually describe and will pay to address. This is a research-first, human-operated experiment, not a campaign or a commitment to deliver automation.

**Default niche:** local automotive service, car-wash, and detailing businesses in Bucaramanga. The existing Bucaramanga demo gallery contains individual visual drafts for businesses in this area, and the current field-sales guidance describes how to use them. That is an asset-fit reason to *start researching*, not evidence of demand, a working relationship, permission to contact, or permission to publish a production site. See `trabajo/monoga/modulos/12_LA_GROWTH_STUDIO/01_GENERADOR_LOTES_LA/output_demos/bucaramanga/` and `13_SALES_ENGINE/03_CRM_Y_OPERACIONES/GUIA_JOHN_VENTAS.md`.

**Offer to investigate, not pitch as proven:** a web presence oriented toward clear service information and incoming inquiries. Ask how the business handles inquiries and appointments before defining a solution. Only if the owner supplies evidence of repetitive requests, an authorized channel, a human escalation owner, and a measurable baseline should Daniel separately assess a *supervised* FAQ/qualification pilot. Do not promise automatic lead response, follow-ups, bookings, voice, payments, increased sales, or production-ready AI. Daniel defines scope and quotes in COP after diagnosis; this plan sets no price or delivery guarantee. See `13_SALES_ENGINE/03_CRM_Y_OPERACIONES/PILOTO_IA_EMPRESAS.md`.

**Invariant gates:** no automatic outreach or bulk messaging; human review and approval for **every initial message**, followed by manual sending on an appropriate channel; permission before sharing any demo or recording; no fabricated metrics, testimonials, case studies, problems, or guarantees; no new paid model or software spend before attributable revenue. Research, qualification, and draft preparation do not authorize contact. If permission or evidence is absent, record the gap rather than infer it.

## Reversible niche selection (day 1)

Score the default niche before assembling the 30-business batch. Compare an alternative only with current, sourced evidence; do not invent a market-size estimate. Each criterion earns 0 (not evidenced or unfavorable), 1 (plausible but unverified), or 2 (verified for this niche). Keep the underlying source and date beside each score.

| Criterion | What qualifies as evidence |
| --- | --- |
| Existing relevant assets | Current, correctly matched drafts or other usable examples; not historical marketing context. |
| Reachability | A legitimate route to identify and manually approach businesses without treating public numbers as consent. |
| Observable inquiry journey | Publicly verifiable contact or service-information path; absence of visible information is not proof of missed leads. |
| Discovery feasibility | An authorized person can discuss a real workflow and supply a baseline if they choose. |
| Delivery fit | A bounded web improvement appears feasible without unverified integrations, rights, or paid tools. |

Record niche, five scores, sources, total (out of 10), reviewer, and decision date. Start with the Bucaramanga automotive/detailing niche if it has a viable manual contact route and no disqualifying rights or delivery issue. A higher score does **not** grant contact permission. Reconsider the niche at the day-7 and day-14 gates if sourced research shows poor reachability or no credible discovery path; record the reason, choose a new niche using the same rubric, and start a **new** 30-business batch. A new batch restarts its own day-1/day-30 clock, while the original batch remains closed with its partial counts and reason; never combine denominators or silently mix niches in one cohort. The existing demos can seed research, but are not a validated prospect list.

## Evidence ledger: what a row can and cannot claim

| Class | Example and required record | Allowed use |
| --- | --- | --- |
| **Observed public fact** | Service description, published opening hours, visible contact route, or demo mismatch; save source URL/path, observation date, exact excerpt or neutral paraphrase, and any uncertainty. | Research and a factual, restrained personalization. A missing page or button is not proof of lost sales or slow replies. |
| **Hypothesis / question** | “Might clearer service information help?” or “How are inquiries handled when staff are busy?” Label as unverified and note how to ask the owner. | Discovery prompt only; never present as the business's pain or a measured outcome. |
| **Permission / first-party statement** | Who authorized which channel, demo link, media use, or next action; when and how; exact scope and any withdrawal. Separately record the person's own account of the problem and baseline, if volunteered. | Only the action within the recorded scope. Permission for a link is not permission for WhatsApp, a meeting, publication, or data/asset reuse. |
| **Historical / non-prospecting material** | Legacy CSVs, old scripts/prices, past CRM snapshots, and `trabajo/monoga/modulos/12_LA_GROWTH_STUDIO/.agents/product-marketing.md` (historical LA context). | Background with provenance only; never a current contact list, local-market proof, live CRM status, authorized offer, or current tariff. |

The gallery's drafts use public information and are not official or owner-approved sites. Confirm services, text, images, ownership, and rights with the business before any use beyond a permissioned private demonstration. A previous note about Twenty opportunities is historical, not a live CRM query; use Odoo at `https://odoo.grupomonoga.com` as the intended operational CRM, but verify access, assignment and stage before acting. Do not sync historical CSVs or run legacy CRM scripts to populate this batch.

## 30-business research table (one row per distinct business)

Create **30 research-only rows**, ID `B01`–`B30`, within the selected niche. Do not fill missing information by inference. A row is researched only when the business, source, observation date, and at least one relevant observed fact are recorded. Keep links to the source rather than copying unnecessary personal data. Use this schema in a table or equivalent controlled research sheet; `unknown` is a valid value.

| Field | Entry rule |
| --- | --- |
| ID, business name, niche, location | Unique business; note possible duplicates for resolution before scoring. |
| Source URL/path and checked date | For each public fact; record whether a demo exists and its **individual** URL, if verified. Do not send the gallery index. |
| Observed service/contact journey | What is visibly offered, where inquiries are directed, and the exact source; record unknowns. |
| Friction hypothesis and discovery question | One specific, *unverified* question tied to a public observation; no assertion of missed leads. |
| Contact route and decision-maker status | Publicly listed route, appropriate manual approach, and whether an authorized person was actually identified; public contact data is not permission. |
| Permission and exclusion | Channel/link/media scope, grant or refusal, source/time, and do-not-contact flag; `none` initially. |
| Asset fit and rights checks | Matched demo or none; accuracy corrections and image/text rights pending. |
| Score, qualification, reason | Apply the rubric below; retain unknowns rather than awarding guessed points. |
| Draft, reviewer, approval | Draft reference/version, person and time of approval; separate approval from send. |
| Odoo record and next task | Opportunity ID or `not created/checked`, owner, next action/date; no duplicate imports. Record Twenty only as historical migration context. |

### Qualification and selection

Score each research row on four dimensions, 0–2 each: **fit** (local niche and relevant services), **verifiable contact path** (a suitable manual way to seek the right person), **specific public observation** (a useful, sourced discovery question), and **asset/delivery fit** (correctly matched draft or feasible bounded web discussion). For each: 0 = absent/contradicted, 1 = plausible but unresolved, 2 = sourced and current. Maximum 8. Track separately, without scoring as market demand: authorized person reached, contact-channel permission, and stated pain/baseline. Exclude duplicates, wrong niche, explicit no-contact requests, and cases requiring unverified delivery promises. Rank eligible rows by score, then source freshness and feasibility; a high score never overrides a gate. Select **up to 10** for reviewed first approaches, not an automatic quota. Drafts for first approaches are required only for those selected rows; keep other eligible rows as reserve and do not contact them. If fewer qualify, report the gap instead of padding the list. A business with an existing Twenty opportunity must follow its assigned owner and current task, not become a parallel outreach sequence.

## 30-day sequence and deliverables

| Window | Work, without forced outreach | Deliverable and checkpoint |
| --- | --- | --- |
| **Days 1–2: frame** | Score/confirm niche; check current guidance and assigned Twenty ownership; define research sheet and evidence rules; inspect existing individual drafts for accuracy without sending them. | Niche decision with sources; empty 30-row schema, exclusion/permission fields, and owners. |
| **Days 3–7: research** | Independently verify 30 distinct businesses and current public facts; label hypotheses; flag mismatched demos, rights issues, unknowns, and duplicates. | 30 sourced rows (or explicit shortfall); day-7 niche/reachability review; **zero sends required**. |
| **Days 8–14: qualify and prepare** | Score and rank; select up to 10; write one factual, business-specific first-approach draft for each selected row; keep non-selected eligible rows as reserve; check assigned opportunities and obtain human review for each draft. Seek an appropriate manual introduction where approved. | Scored cohort, draft/review ledger, gate outcomes and corrected drafts; day-14 niche and message review. Sending is optional and individually gated. |
| **Days 15–21: conversations** | Manually make only approved first approaches; log actual contact and permission; share only that business's checked draft after explicit permission; offer a 15-minute conversation only if welcomed. Allow at most one permitted follow-up after roughly three business days. | Event log, permission records, literal or faithful response notes, meeting tasks; weekly funnel counts with unknowns. |
| **Days 22–30: diagnose and decide** | Listen to owner-stated needs; separate web from conditional IA exploration; Daniel checks feasibility, scope, rights and any proposed COP quote. Verify acceptance and payment before reporting a win. Diagnose each funnel transition without adding spend or volume to hide a weak offer. | Day-30 cohort table, stage counts, objections/gaps, attributable receipts if any, and a documented continue/change/stop decision with next experiment owner. |

The windows are review checkpoints, not deadlines that waive consent or fabricate a conversion. If research or approvals take longer, keep the row in its actual state and record why.

## Human review, send, and Odoo event gates

Use Odoo at `https://odoo.grupomonoga.com` as the intended operational record for existing/assigned opportunities; the research sheet is not a substitute and is not a CSV to import. Before action, John checks assignment, stage, latest note and next dated task in Odoo. Daniel approves feasibility, proposal, price and payment verification. For each event record date/time, business/opportunity ID, responsible person, channel, action, outcome in the person's words or a faithful summary, permission and scope, evidence reference, and next task/date. Maintain the same funnel definitions in the sheet and Odoo; reconcile counts by distinct business, not number of messages. Odoo's live access and schema remain unverified.

| Event / funnel count | Entry evidence and gate | Odoo stage / next action |
| --- | --- | --- |
| **Researched** | Complete sourced research row; no contact inferred. | No stage change solely from research. |
| **Qualified** | Rubric and eligibility recorded; assigned opportunity checked for conflicts. | If an opportunity exists, keep its current stage; queue an owner-approved action. |
| **First approach approved** | Individual draft reviewed by a human for fact, channel, recipient, claims, exclusions, and version; record approver and time. | Approval is not a send or permission to share a demo. |
| **Contacted** | Human actually visits, calls manually, or sends an individually approved appropriate first message; record date/channel and result. No unsolicited WhatsApp: use it only when the person authorized that channel. | Move **Nuevo → Contactado** only after real contact; create dated permission/next-action task. Count `contacted` once per business. |
| **Demo permission / demo sent** | Record express permission to show/send *that business's* checked draft and the allowed channel. Verify URL and content; send manually only within scope. | Log grant and separate send event. A demo link does not imply a meeting or an official site. |
| **Replied / conversation** | Reply = actual response (including refusal); conversation = substantive two-way discovery about need/fit, not a greeting or link permission. Record owner-stated pain and missing baseline as `not measured`. | **Reunión** only with expressly agreed day/time; a discovery call without a booked meeting remains accurately logged. |
| **Proposal** | Daniel validates scope, rights, feasibility and written COP quote; send only with permission. | **Propuesta** only when a concrete proposal is sent; task to resolve questions or verify payment. |
| **Paid / won** | Express acceptance **and** payment received/verified by Daniel, with receipt reference and actual COP amount. | **Ganado** only after both; log handoff. An enthusiastic reply is not revenue. |
| **No reply / lost / opt-out** | At most one respectful permitted follow-up around three business days after first approach. Record `no response; do not insist`; silence is **not** rejection. Explicit refusal, confirmed no fit, or Daniel-approved bounded close policy is needed for loss. Opt-out ends all contact immediately. | Keep silent cases **Contactado**, close the follow-up task, and stop attempts; **Perdido** only with dated reason. Record exclusion so nobody recontacts. |

If the first approach is an email, web form, or appropriate social context, check local channel suitability and have a human approve and send it; this does not supersede the field guide's visit/manual-call route for its demos. Never use a public phone number, gallery WhatsApp button, historical CSV, or draft as consent. No automation may send first messages or follow-ups.

## Draft structure and personalization check

The first approach is a request to talk or request permission to show a draft, **not** a demo drop or a claim that the business loses leads. Keep it short: (1) identify John/Monoga and why this business was selected; (2) mention one verified, neutral public fact with source in the internal draft note; (3) ask one question about the owner's current inquiry/service-information workflow; (4) request permission to show **their** visual draft or to talk, with an easy decline. Do not imply affiliation or prior approval. If permission is granted, describe the page as a draft based on public information, not the official site; share only its verified individual link via the authorized channel and ask what should be corrected. Use the approved wording in the current John guide where it fits the real encounter.

Before approving each version, check: correct business and intended authorized recipient; observation fresh and sourced; no invented friction, metrics, ROI, testimonial, guarantee, or implied AI functionality; channel appropriate and any required permission logged; correct private demo/link and no gallery index or other business's asset; no unlicensed media reuse; clear single question and opt-out; owner, reviewer, approval time and exact version recorded. A material rewrite needs renewed approval. A follow-up is also manually reviewed for permission, timing, relevance and any opt-out, and sent at most once.

## Funnel diagnosis and stop/change rules

Weekly and on day 30, report **counts with denominators and dates**, not assumed conversion rates: distinct researched → eligible/qualified → first approach approved → contacted → replied → substantive conversation; report **meeting booked** as a separate branch that may follow a reply or be agreed during another approved interaction; then proposal sent → accepted and paid. Also report demo permissions/sends, explicit refusals, no-reply after the one follow-up, exclusions, baseline availability, actual spend, and attributable revenue (or `none/not measured`). Keep pending and unknown separate from no. A contact with no response is not a failed offer by itself.

- **Too few sourced/eligible rows:** revisit niche reachability and the research method; do not invent contacts or import old lists.
- **Approvals or contact permissions stall:** inspect factual accuracy, channel, rights and owner capacity before increasing volume.
- **Contact but few substantive replies:** review targeting, first-line relevance, timing and channel using recorded responses; test one controlled change in the next reviewed cohort. Do not conclude the offer is rejected from silence.
- **Conversations but no agreed next step:** compare owner-stated problems with the web offer; ask for missing baseline and decide web / separate supervised-IA feasibility / no fit. Do not promise integrations to save a deal.
- **Proposals but no verified payment:** Daniel reviews scope, trust, terms, objections and price *with actual evidence*; do not mark wins or spend against verbal interest.
- **Stop an individual's outreach immediately** on opt-out, wrong recipient, invalid permission, misleading or mismatched demo, or inability to support a claim. Pause the affected offer if rights, privacy, or deliverability are unresolved. At day 30, continue only with a documented signal and safe next action; otherwise revise one hypothesis or stop. Do not use a generic 50–100-contact threshold to justify sending beyond this 30-business research cohort.

## Non-goals and first 48 hours

Not in scope: launching a SaaS, buying tools or models, scraping/enriching contact lists, importing historical CSVs, mass/automated outreach, publishing demo sites for businesses, asserting lost revenue, deploying AI to a customer's live channel, sending WhatsApp without permission, or setting a generic price from historical material. No prospecting activity is authorized merely by this plan.

1. **Day 1:** John and Daniel confirm the default niche with the five-part scorecard, record any disqualifier and owner, and check current Odoo assignment/tasks for existing demo businesses.
2. **Day 1:** Set up the read-only 30-row research schema and explicit evidence/permission labels; mark all permissions `none` until actually granted. Do not sync or contact from historical records.
3. **Day 2:** Inspect the individual Bucaramanga demos as drafts for business match, current public facts, contact-route uncertainty and rights gaps; record citations and corrections without sharing links.
4. **Day 2:** Draft research questions and an approval checklist; agree who reviews each initial message and what event is entered after a manual approach. Begin sourced research only; no sends required in the first 48 hours.

**Operating references:** `13_SALES_ENGINE/README.md` distinguishes current guidance from historical engine assets; `13_SALES_ENGINE/03_CRM_Y_OPERACIONES/GUIA_JOHN_VENTAS.md` controls Odoo stages, field contact and demos; `13_SALES_ENGINE/03_CRM_Y_OPERACIONES/PILOTO_IA_EMPRESAS.md` controls whether an IA pilot may even be evaluated. Recheck these and the live Odoo CRM at execution time rather than treating this plan as a snapshot of permissions or current opportunity states.
