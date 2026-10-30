# Revenue Launch Design — DRAFT — NOT Approved for Implementation

**Date:** 2026-09-26  
**Status:** DRAFT — NOT approved for implementation, outreach, sending, spending, deployment, or account access  
**Decision sought:** approve, revise, or reject the first sell-ready slice and its commercial hypotheses before any implementation or contact activity.

## 1. Outcome and Non-Outcome

The immediate outcome is a **research-prepared candidate for a sell-ready, human-operated revenue experiment** that reuses existing demos, scripts, CRM concepts, and checkout options. It becomes launch-ready only after the stated human decisions and runtime evidence pass. It is not a promise of a sale tomorrow. It is also not a new autonomous platform.

The design deliberately separates:

1. **Research capacity:** up to 50 candidate records can be reviewed per day only after capacity is proved.
2. **Contact capacity:** sending remains human-approved, throttled, deduplicated, and channel-compliant.
3. **Delivery capacity:** a paid pilot may be offered only if the team can support the whole accepted cohort.

The number `50/day` is therefore a target to validate, **not authorization for 50 automatic unsolicited messages**.

## 2. Assumptions Requiring Explicit Approval or Evidence

| Assumption | Current status | Required evidence or decision |
|---|---|---|
| The best first buyer is an owner-operated auto-detailing shop with high-value services and slow quotation response. | Plausible, not validated. | Five discovery interviews with notes showing frequency, consequence, current workaround, and willingness to pay. |
| Bucaramanga/Floridablanca/Girón is the first geography. | **Provisional.** Strongest prepared consultative assets exist here, but no demand proof was found. | Approve as the learning market, or explicitly select the US/LA web-redesign motion instead. Do not mix both motions in one cohort. |
| A 14-day assisted WhatsApp reception pilot is the narrow offer. | Prepared in legacy material, not accepted by buyers. | Confirm deliverability, channel consent, human escalation, support owner, and acceptance test. |
| `COP 790,000` pilot and `COP 390,000/month` opt-in continuation are useful test hypotheses. | **Not approved pricing.** Existing material states an unapproved `COP 490,000`; `COP 790,000` is a separate proposed, unapproved hypothesis. No amount is evidence of willingness to pay. | Human approval of one price card before proposal use; validate price in interviews and record objections. |
| Existing demos can be shown truthfully tomorrow. | Assets exist; runtime was not executed or authenticated in this design pass. | Manual preflight on the exact demo link/device and confirmation that all prices, services, branding, and simulated behavior are labeled accurately. |
| Twenty CRM, checkout, WhatsApp Cloud, and any n8n workflow are operational. | **Unproved.** Documentation names some components, but live account access and integrations were not tested. | Account-owner preflight with no secrets copied into the artifact. |
| The team can support more than one concurrent pilot. | Unknown. | Named delivery owner, hours per pilot, maximum concurrent pilots, escalation hours, and rollback procedure. |

## 3. Evidence-Based Asset Inventory

### Reusable now, after truthfulness review

- A six-stage local consultative funnel already exists: qualification, diagnosis, specific demo, bounded paid pilot, measured outcome, and monthly continuation (`C:/Users/Monoga/Desktop/Monoga OS/13_SALES_ENGINE/README.md:27-34`).
- The local ICP filter is concrete enough to use as a research rubric: physical establishment, active commercial WhatsApp, multiple high-value detailing services, and an observable response gap (`C:/Users/Monoga/Desktop/Monoga OS/13_SALES_ENGINE/01_EMBUDO_VENTAS/Etapa_01_Problema_Verificable/criterios_verificacion.md:3-8`). The last criterion must be **verified with the owner**, not fabricated from response-time guessing.
- A 15-minute discovery script already asks about response delays, after-hours inquiries, repetitive questions, and lost quotes (`C:/Users/Monoga/Desktop/Monoga OS/13_SALES_ENGINE/01_EMBUDO_VENTAS/Etapa_02_Diagnostico_Consultivo/guion_diagnostico_15min.md:16-25`). Its scripted revenue-loss figures at lines 29-32 are illustrative only and must not be stated as fact without buyer data.
- A 60-second demo structure exists and demonstrates qualification, informal-language handling, scope boundaries, and human handoff (`C:/Users/Monoga/Desktop/Monoga OS/13_SALES_ENGINE/01_EMBUDO_VENTAS/Etapa_03_Demo_IA_Especifica/guia_recordly_video_60s.md:10-16`). It contains specific business names, service prices, and behavior that require permission or clear `SIMULATION` labeling.
- The existing pilot document defines useful scope primitives: up to 15 services, FAQ/location/hours/prices, opportunity alert, and 14-day support (`C:/Users/Monoga/Desktop/Monoga OS/13_SALES_ENGINE/01_EMBUDO_VENTAS/Etapa_04_Piloto_Pago_Acotado/acuerdo_piloto_490k.md:9-13`). Its `COP 490,000` price and payment terms remain unapproved; the proposed `COP 790,000` alternative is also unapproved. Neither is authority to quote.
- The existing continuation concept is month-to-month and includes weekly monitoring, limited catalog updates, reporting, and five-day cancellation notice (`C:/Users/Monoga/Desktop/Monoga OS/13_SALES_ENGINE/01_EMBUDO_VENTAS/Etapa_06_Continuidad_Mensual/acuerdo_mantenimiento_390k.md:8-13`).
- A separate US engine claims local web-demo, outreach-copy, dashboard, and Stripe-checkout assets, while explicitly listing missing bulk-email, fulfillment-webhook, and reply-handling infrastructure (`C:/Users/Monoga/Desktop/Monoga OS/09_AUTO_REVENUE_ENGINE/00_INGENIERIA_DE_VENTAS/01-Inventario-Proyectos/09_AUTO_REVENUE_ENGINE.md:14-31`). The stated `85%` readiness and `98%` margin are internal claims, not runtime proof.
- US-versus-Colombia channel and buyer-behavior assertions in the repository are hypotheses, not market evidence (`C:/Users/Monoga/Desktop/Monoga OS/09_AUTO_REVENUE_ENGINE/00_INGENIERIA_DE_VENTAS/02-Mercado/USA-vs-Colombia.md:14-33`).
- The US pricing file projects five sales at `USD 997` from 3,000 prospects, but provides no observed conversion evidence (`C:/Users/Monoga/Desktop/Monoga OS/09_AUTO_REVENUE_ENGINE/00_INGENIERIA_DE_VENTAS/03-Oferta/Pricing.md:15-21,33-46`). Do not use that projection as a forecast.
- LA Growth Studio documents a field-sales/QR/demo concept and links it to the existing web engine (`C:/Users/Monoga/Desktop/Monoga OS/12_LA_GROWTH_STUDIO/README.md:22-32,39-48`). This remains a deferred second motion until the first cohort produces evidence.

### Public patterns and constraints

- **Regulatory evidence, US email:** The FTC says CAN-SPAM covers B2B commercial email and requires accurate headers, non-deceptive subjects, advertising identification, a valid postal address, a clear opt-out, and honoring opt-outs within ten business days. Source: [FTC CAN-SPAM compliance guide](https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business). This is a compliance floor, not proof that cold email will convert.
- **Platform evidence, email deliverability:** Gmail requires authentication for all senders and recommends keeping reported spam below `0.10%`, never reaching `0.30%`; additional requirements apply at 5,000+ messages/day. Source: [Gmail sender guidelines](https://support.google.com/mail/answer/81126). This does not make 50/day safe; domain age, list quality, complaint history, and provider limits still need proof.
- **Platform and privacy evidence, WhatsApp/Colombia:** WhatsApp Business permits contact only after the person supplied the number and opted in to messages from the named business; it also requires honoring stop requests. Source: [WhatsApp Business messaging policy](https://business.whatsapp.com/policy/preview?lang=es_LA). Colombia's SIC likewise states that marketing contact requires proof of prior, express, informed authorization and the right to suppression. Source: [SIC guidance on tranquility and suppression](https://sedeelectronica.sic.gov.co/publicaciones/boletin-juridico/concepto/derecho-la-tranquilidad-y-supresion-de-datos-personales). Therefore, a public WhatsApp number is **not consent** for automated prospecting.
- **Vendor capability claim:** Stripe says Payment Links can provide hosted one-time or recurring checkout without new code. Source: [Stripe Payment Links](https://stripe.com/payments/payment-links). This supports a low-build checkout option; it does not prove account eligibility, settlement, local tax treatment, conversion, or profitability.

## 4. Candidate First Sell-Ready Slice — Research-Prepared, Not Launch-Ready

### Recommended learning slice

**Buyer:** owner/operator of an auto-detailing shop in Bucaramanga, Floridablanca, or Girón that sells at least one high-value service and personally feels quotation-response pressure.  
**Job to be done:** turn repetitive WhatsApp inquiries into a correctly scoped, human-reviewable quote opportunity without inventing services, prices, or availability.  
**Offer:** a human-assisted, 14-day **Quotation Response Pilot** configured from the client's approved catalog, with explicit human escalation and a measured baseline.  
**Acquisition:** permission-led field discovery or warm introduction; the owner opts in before receiving a WhatsApp demo.  
**Demo:** one generic simulation plus, only with permission, a prospect-specific version. Every non-live element is visibly labeled `SIMULATION — no customer messages sent`.  
**Commercial hypothesis:** test `COP 790,000` for the pilot and `COP 390,000/month` as an optional continuation, but quote neither until a human approves the price card. No automatic renewal.

This slice is preferred over the US web funnel for tomorrow because the repository already has a coherent local diagnosis-to-pilot chain. It is **not** a permanent geography decision. The US/LA offer remains a parallel hypothesis to test later with a separate cohort, sender domain, economics, and acceptance criteria.

### What can be prepared without account access

- A one-page qualification card and five-interview note template.
- A generic, visibly simulated 60-second demo and a demo truthfulness checklist.
- Permission request, discovery questions, proposal shell, acceptance record, support boundaries, and opt-out language.
- A deduped research queue containing only public business facts and a `contact_authorized` field defaulted to `false`.
- A cohort economics worksheet using the formulas below.

### What cannot be represented as ready without account-owner proof

- Live WhatsApp sending, approved message templates, verified opt-in history, or number quality.
- Working email authentication, inbox health, warmed sender capacity, unsubscribe processing, or provider daily limits.
- A live Stripe/Wompi/Nequi/other payment path, settlement, refund handling, taxes, or invoice compliance.
- Production n8n/Twenty connectivity, dedupe behavior, webhooks, delivery automation, or audit logs.
- Demo uptime, mobile rendering, AI response correctness, latency, or human handoff under the actual client account.

Static presence is not runtime proof. `C:/Users/Monoga/Desktop/Monoga OS/13_SALES_ENGINE/01_EMBUDO_VENTAS/Etapa_03_Demo_IA_Especifica/prospect_demo_diamond.html` and `C:/Users/Monoga/Desktop/Monoga OS/09_AUTO_REVENUE_ENGINE/web_builder/demo_output/demo_detailing.html` exist, but no public URL, live render, recording, or production behavior was verified. Likewise, the existing checkout/report templates and `C:/Users/Monoga/Desktop/Monoga OS/13_SALES_ENGINE/01_EMBUDO_VENTAS/Etapa_03_Demo_IA_Especifica/whatsapp_cloud_official.mjs` prove file presence only—not a payment owner/rail, Meta approval, consent/suppression, CRM ownership, or live integration.

## 5. Minimum Revenue Experiment

### Cohort and sequence

The first experiment is bounded to **5 interviews**, then at most **30 researched businesses over 21 days and 20 acquisition hours**. Researching a business does not authorize contact.

The evidence-backed seed list currently contains only two public business records; it was not padded to an arbitrary target. Both were checked on 2026-09-26 and remain `UNQUALIFIED` with `contact_authorized=false`:

| Business | Public evidence | Unknowns that block qualification/contact |
|---|---|---|
| TC Colisiones, Bucaramanga | Its official site lists “Estética y Detallado Automotriz,” including deep cleaning, restoration, and interior/exterior detailing: [tccolisiones.com](https://www.tccolisiones.com/). | Current capacity, decision-maker, experienced pain, buyer fit, consent, and willingness to buy. |
| TecniRacer, Bucaramanga | Its official site lists “Detailing Automotriz”: [tecniracer.com](https://www.tecniracer.com/). | Current capacity, decision-maker, experienced pain, buyer fit, consent, and willingness to buy. |

No phone number, email address, or personal data is captured in this draft, and no contact is authorized by inclusion in the table.

1. Verify public-fit facts and deduplicate by normalized domain + phone + business name/address.
2. Secure a permission basis for contact (warm introduction, field conversation, inbound request, or documented opt-in).
3. Run a 15-minute discovery focused on observed behavior, not assumed loss.
4. Qualify only if pain, consequence, authority, current workaround, and near-term intent are all evidenced.
5. Show the truthful generic simulation. Build a prospect-specific demo only after permission and catalog confirmation.
6. Present a bounded pilot proposal with exact inclusions, exclusions, price, acceptance test, support owner, and cancellation/refund terms.
7. Take payment only through a human-approved, preflighted method.
8. Deliver the pilot, measure the agreed baseline and outcome, conduct acceptance, and separately invite continuation.

### Meaningful qualification

A lead is proposal-qualified only when all six fields are recorded:

1. **Pain:** the owner confirms a recurring response/quotation problem in their own words.
2. **Frequency:** a bounded estimate based on the last 7 or 30 days.
3. **Consequence:** lost time, delayed responses, or lost opportunities; revenue is not invented.
4. **Current workaround:** who replies today and what fails.
5. **Authority and capacity:** decision-maker present, catalog can be approved, and a staff member can accept handoffs.
6. **Next-step intent:** the buyer agrees to review a demo or proposal by a specific date.

Public appearance, follower count, or a slow test message alone does not qualify a buyer.

## 6. Truthful Demo Contract

Every demo must display or verbally disclose:

- `SIMULATION` if it does not run on the prospect's production channel.
- Which business data came from public sources and which the buyer confirmed.
- That availability, pricing, and booking require human confirmation unless a live integration is proven.
- That no real customer messages are being sent or stored during the demo.
- The escalation route when the assistant is unsure or asked for an out-of-scope service.

Forbidden demo behavior: impersonating the prospect, claiming a live integration that was not tested, displaying invented reviews/results, using the prospect's trademark as if affiliated without permission, or presenting synthetic conversations as customers.

## 7. Channel Preflight, Drafts, and Suppression

### Mandatory preflight before any send

- Named sender and lawful business identity.
- Geography and applicable policy selected for the cohort.
- Proven permission basis for WhatsApp; otherwise WhatsApp send remains disabled.
- For US email: sender domain authentication, reply mailbox, physical postal address, accurate ad labeling, working one-step opt-out, provider limit, and seed-inbox test.
- Central suppression list checked before every draft approval and send.
- Deduplication passed; no same business, person, domain, or phone contacted through multiple sequences.
- A human approves the exact recipient, channel, copy, and demo URL.

### Permission-led field opener (Colombia)

> Hi, I'm [approved sender name] from [approved business name]. I'm researching how detailing shops handle high-value quote requests when the team is busy. Could I ask you five short questions? I will not add you to a list or send anything to WhatsApp unless you ask me to.

### Post-interview WhatsApp demo message (only after documented opt-in)

> Hi, [Name] — [approved sender name] from [approved business name] here. You asked me to send the quotation-response simulation we discussed today. It is a demo, not connected to your customers, and uses only the catalog details you approved: [link]. If you do not want any follow-up, reply STOP and I will remove you.

### US email draft (deferred motion; only after sender preflight)

**Subject:** simulated mobile homepage for [Business]

> Hi [Name] — I made a clearly labeled, non-live homepage simulation based on public information from [source]. It is not affiliated with or deployed for your business. If improving [specific observed mobile issue] is a priority, I can send the 60-second preview and a fixed-scope proposal. This is a commercial message from [legal business name], [postal address]. Reply `no` or use [one-step opt-out URL] and I will not contact you again.

### Opt-out and dedupe policy

- `STOP`, `no`, `unsubscribe`, a block, or any equivalent request creates an immediate global suppression record.
- Suppression has no expiration and applies across email, WhatsApp, SMS, phone, and field follow-up unless the person later gives fresh, documented consent.
- Never sell, transfer, or re-upload suppressed contacts except to a processor required to enforce suppression.
- A contact failure, opt-out failure, duplicate, policy uncertainty, or missing consent stops that record automatically.

## 8. Proposal, Pilot, Acceptance, and Support Boundary

The proposal must contain:

- buyer problem in the buyer's words;
- approved catalog and channels;
- exact 14-day scope and explicit exclusions;
- one approved price and payment schedule;
- baseline window and success measures;
- demo-versus-production disclosure;
- data handling and deletion expectations;
- named delivery owner and human escalation hours;
- acceptance test, pause/rollback, refund/cancellation terms;
- optional continuation offered only after acceptance, with no automatic renewal.

### Pilot acceptance record

The buyer and delivery owner jointly verify:

1. All catalog answers match the approved source.
2. Out-of-scope questions escalate rather than fabricate.
3. A test opportunity reaches the named human owner.
4. The client can pause the service and reach support.
5. The measurement report separates conversations, qualified opportunities, appointments, and paid sales.
6. No revenue is attributed without a traceable customer outcome.

## 9. Capacity, Economics, and Stop Conditions

### Whole-cohort cost model

For the entire cohort, not just one sale, record:

`Acquisition cost = research labor + demo labor + outreach labor + acquisition tools + data + travel`

`Delivery cost = onboarding labor + configuration + support + model/API usage + hosting + remediation`

`Transaction/reversal cost = payment fees + taxes borne by the seller + refunds/chargebacks`

`Contribution per accepted pilot = collected pilot cash - allocated acquisition cost - delivery cost - transaction/reversal cost`

`Cohort cash contribution = total pilot and continuation cash collected - acquisition cost - delivery cost - transaction/reversal cost`

Each expense is assigned to exactly one bucket. Taxes collected on behalf of an authority are tracked separately from seller-borne taxes and are not counted twice as revenue and cost.

Also report: researched → permissioned → interviewed → qualified → demoed → proposed → paid → accepted → continued. Never use open or reply rate as a revenue outcome.

### Capacity proof before raising toward 50/day

The daily research ceiling may increase only when the previous batch shows:

- 100% dedupe and suppression checks;
- 100% human approval before send;
- no unresolved opt-outs or complaints;
- demo preparation time within the recorded capacity budget;
- sufficient support hours for every concurrently accepted pilot;
- channel metrics inside provider/policy limits.

Start with five interviews. A later batch may research up to ten/day. `50/day` becomes eligible only after two clean batches and documented same-day support capacity; it still does not authorize 50 sends.

### Stop conditions

Stop the cohort immediately for any of the following:

- missing or disputed consent, opt-out, or sender identity;
- any deceptive claim, fabricated metric, or unlabeled simulation;
- complaint, account warning, blocked number/domain, or provider-policy breach;
- duplicate contact or suppression failure;
- demo answer that invents price/service/availability;
- payment, refund, data-handling, or handoff path fails preflight;
- delivery queue exceeds the named support capacity;
- two accepted pilots produce negative projected contribution after full cohort costs;
- fewer than 2 of the first 5 interviews confirm the same costly, frequent pain — return to problem discovery instead of scaling.

## 10. Executable Acceptance Criteria for This Design

No implementation is authorized by these criteria. They define what must be demonstrably true before the commercial experiment is considered ready.

- [ ] A human has approved exactly one geography, ICP, offer, price card, and channel for the first cohort.
- [ ] Five interview slots and a named interviewer exist; no interviewee is contacted without a documented lawful/permission basis.
- [ ] The research queue rejects duplicate normalized domains, phones, and business/address pairs in a manual dry run using five seeded duplicates.
- [ ] The suppression workflow blocks a seeded `STOP` record from every channel before any real send.
- [ ] The exact demo URL passes a mobile preflight and visibly says `SIMULATION`; each scripted answer is checked against an approved catalog.
- [ ] The discovery record captures pain, frequency, consequence, workaround, authority/capacity, and next-step intent.
- [ ] A proposal cannot be marked ready while price, support owner, acceptance test, cancellation/refund terms, or measurement window is blank.
- [ ] A payment test in the provider's sanctioned test mode produces a receipt and no live charge; live payment remains disabled until owner approval.
- [ ] A test handoff reaches the named human and the service can be paused without developer intervention.
- [ ] The cohort worksheet assigns every expense exactly once across acquisition, delivery, and transaction/reversal costs, then computes contribution from collected cash rather than projected revenue.
- [ ] No batch can move from research to contact without human approval, consent/policy preflight, dedupe, and suppression checks.
- [ ] A written stop-condition review is completed after the first five interviews and before any scaling decision.

## 11. Architecture Boundary and Deferred Interfaces

Use existing assets rather than building another platform. The minimal architecture is a manually gated pipeline:

`research queue → permission evidence → discovery record → demo/proposal approval → payment approval → delivery checklist → acceptance/report → optional continuation`

Prefer existing Twenty CRM and any already-operated n8n workflows **only after live proof**. CSV/manual records are acceptable for the five-interview learning cohort if access controls and suppression are maintained. Do not make a new CRM or autonomous sender.

Deferred interfaces:

- **Jarvis:** may later orchestrate approved tasks and surface decisions; it must not become an independent sender, price-setter, or sales authority. It is supporting infrastructure, not this launch priority.
- **Hermes:** may later carry approved messages/events between systems; it must preserve recipient identity, consent provenance, suppression, idempotency keys, approval actor, and audit timestamps.
- **Memory:** may later store learnings, but must separate public business facts, buyer-confirmed facts, commercial hypotheses, consent records, suppression, and outcome evidence. It must not convert inference into buyer truth.
- **n8n:** may later automate safe transitions after human approval; send, spend, publish, payment/refund, and customer-data actions remain gated until separately authorized.

## 12. Decision Required Before Any Implementation

Approve or revise these four coupled hypotheses together: (1) local detailing as the first cohort, (2) permission-led discovery, (3) the 14-day quotation-response pilot, and (4) the unapproved `COP 790,000 / COP 390,000` price test. If the geography changes to US/LA, this design requires a separate sender, compliance, qualification, economics, and capacity preflight; repository projections must not be reused as evidence.

