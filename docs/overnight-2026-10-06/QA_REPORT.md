# QA report | overnight sprint | 2026-10-05/06

Stance: skeptical. FACT = observed this session. Read-only except this file.

## 1. Regression: PASS

- `checks.sh`: tsc db/api/app/ui all 0; typegen 0; app tests 189 pass 0 fail; db 20/0; api integration 16/0; biome clean on the capture files; compose 0; diff check 0.
- /monoga, /monoga/deals, /monoga/capture render. External origins: none (`[]`) on all runs.
- Port 3000 still PID 19848. Upstream `trycompai-crm-source` git status clean. monoga-os working tree clean (HEAD fab794f).
- First overview load showed an "Enriching 22" badge; later loads did not (fab794f hides it). Confirm the running app was rebuilt with that commit before any demo.

## 2. OENYX record exactness: PASS (with 2 caveats)

DB (psql, read-only) matches the brief exactly:
- company OENYX (no domain, phone, email, NIT); contact Sebastián (lastName, email, phone, title all empty).
- deal "Proyecto OENYX": amount 1200000.00, currency COP, baseAmount 1200000, baseCurrency COP, fxRate 1, stage CLOSED_WON.
- custom fields: next_action "Emitir/enviar factura electrónica y confirmar pago"; payment_status "Invoice pending".
- activities: 1 note, 2 TASKs (completedAt null, no dueAt), 1 system stage change. No invented dates.
- UI: deals list "$ 1.200.000" + Invoice pending; deal sheet "$ 1.200.000", "COP · Colombian Peso"; dashboard "$1,2 M", 2 open tasks "No due date".

Caveats:
1. Deal sheet shows "Closed 5 de oct de 2026" and "Opened" the same day as plain facts. The description admits it is the load date, but the field presents a fabricated agreement date. Either blank `closedAt` for this deal or label it. A "Win rate 100% / 0-day average cycle" tile follows from it.
2. "Proyecto ya trabajado (incluye frontend/web)" and "Cliente real" are user-reported with no artifact on disk (OENYX_EVIDENCE.md says so). Acceptable as record, but not proof; do not use OENYX as a public reference until the source and invoice exist.

## 3. Capture agent demo quality: FAIL for a live demo as is

What it is: a regex/keyword rule engine (`apps/app/lib/lead-intake.ts`), not an LLM. The badge "motor local · sin datos a terceros" is honest. The button "Analizar con el agente" and "Qué entendió el agente" over-sell it; "entendió" is exactly what it fails at below. The reasoning trace is honest in that it only reports what rules fired, and nothing is invented (no phone/email/surname/budget fabricated; verified). It is not honest in 3 places: it states "interés alto" and stage "DECISION_MAKER_BOUGHT_IN" (shown "Qualified") from one chat; it prints misparsed fields as fact ("La empresa es Logística Norte Demo SAS.."); and negations are read as signals (below).

### The 6 built-in examples (run in UI and via `analyzeLeadNote`)
- Lead caliente: correct. Name, company, role, event, consent, "jueves" = 2026-10-08 correct.
- Operación manual: company parsed as "Logística Norte Demo SAS." with a trailing period; trace prints "SAS..". Clicking "Crear en el CRM" would create a company with a dot in its name (the field is editable, but the demo hides the problem only if you notice it).
- Lead frío: same bug "Panadería Real Demo SAS."; deal stage DEMO_BOOKED for a lead with score 0.
- Quiere empezar, Solo info, Queja: correct. Queja is escalated, no draft, correct. But its consent line says "puedes responder su consulta" for a complaint, and a complaint becomes a sales deal "Atención prioritaria" in the pipeline.
So 2 of 6 shipped examples show a visible bug. The author tuned to these six.

### My own 20 messages (Spanish, accents/typos/WhatsApp/English/phones), concrete misses
1. Negation read as positive (worst): "La solicitud no es urgente, no necesitan demo por ahora" -> interest ALTO 75, next action "Agendar demo" tomorrow. "No tienen presupuesto este año" -> "+ menciona presupuesto". "No me interesa nada de IA" is not a low signal (only "no le interesa" is).
2. First-person buying language is not recognized, and inbound WhatsApp is first-person: "Me interesa", "necesito", "quiero" score nothing. "Hola! Me interesa el servicio, necesito saber el precio del chatbot... Soy Camilo Torres, gerente de Aseo Total SAS" -> Medium 40, "Sin señales de compra explícitas" (the only signal was the job title).
3. Name misses: "Buenas tardes, Juan Pablo Ortiz de Distribuidora El Triunfo" -> no name, no company. "mi nombre es luisa fernanda" (lowercase) -> none. "Conocí a Laura Peña de Mundo Kids" -> none. "Dr. Gómez" -> firstName "Dr".
4. Company misses without SAS/Ltda: "Clínica Dental Sonrisa", "Moda Viva", "Restaurante La Fogata", "Mundo Kids", "Inversiones Pardo y Hnos" -> not found. "Dulces del Valle S.A." -> "Valle S.A." (wrong company). Trailing period kept on "SAS."
5. Role truncated into a wrong value: "gerente de Inversiones Pardo y Hnos" -> role "gerente de Inversiones"; "gerente de Aseo Total" -> "gerente de Aseo".
6. Budget: "800 mil pesos" ignored (only "millones" and "$1.200.000" work). Phone with spaces and +57 works.
7. Pain gaps: chatbot, bot, automatizar, citas, cartera ("cobrar la cartera" does hit admin), pedidos por Instagram ("se acumulan los pedidos" hits operations by "pedidos", ok). Real pain "automatizar citas con chatbot" -> no pain, offer "Diagnóstico IA".
8. Event name only matches "en el/la evento X"; "en la feria Expo Pyme" and "en el summit" (no name) -> null, so the Event field stays empty.
9. Opt-out handling is legally dangerous: "No me interesa, por favor no me escriban más" and "no quiere que la contactemos por WhatsApp" still produce a deal, a follow-up date (2026-10-19 / 10-12) and, for the second, interest ALTO + stage "bought in". The next-action text says "No contactar" but a task with a date and a CRM deal are created. Under Ley 1581 an opt-out should create no deal and no follow-up task; at most a suppression record.
10. Stage semantics: every unqualified lead lands in DEMO_BOOKED (named "New lead" in UI, so the UI label hides it, but a DB/report reader sees "demo booked" for 8 of 20 leads).
11. Duplicates: second "Camila" and second "Taller Andino Demo" deal exist (archived) because contact/deal find-or-create is by name only for companies; contacts duplicate. Archived demo deals still show activity in the Overview feed ("Mensaje entrante... Taller Andino Demo"), and their companies/contacts (Laura Demo with a fake email, Camila x2, Ricardo, Carolina) remain active in Companies/Contacts. A visitor at a demo sees leftovers. Archive or delete before the summit.

### Would a Colombian owner say "I need this"?
Not from this screen. The strongest moment is the inbound draft + escalation, and it works on the 3 scripted inputs. A notes-to-CRM form for the seller is a founder/rep tool, not an owner pain. The owner pain in ICP_MAP is "leads cool off on WhatsApp", which needs a real inbound channel; the demo has none, and the page is English-chrome (nav, "Qualified", "Won") around Spanish content. Nobody will ask "can it read MY message" unless the judge types a real one, and (see above) the rule engine fails roughly 1 in 3 realistic messages.

### What embarrasses Daniel live
- An attendee types their own message and the engine returns "no encontré el nombre" or, worse, interest ALTO for "no es urgente".
- "Logística Norte Demo SAS.." on the projector.
- Calling it an AI agent, then someone asks "which model?" The honest answer is "rules". Say "motor de reglas local, el LLM se enchufa después", or do not use the word agente.
- Creating a lead from an opt-out message.
- Stray "Enriching" badge (check) and English labels.

## 4. Commercial critique

TOP_OFFERS.md: the best document. Prices are labelled "HYPOTHESIS ONLY" repeatedly; the anchors (Becamel 700k, RFI 1.8M + 300k) are cited. Issues:
- The scoring table is false precision: six 1-5 factors multiplied to 3,840, from the author's judgment. It says so, but the number invites trust. Delete the products, keep the ranking sentence.
- "Pain value 4 / urgency 4" for Offer A is asserted. No owner was asked. The doc admits it. The ICP "owner language" quotes ("Se me enfrian los leads") are invented phrasing presented in quotes; label as "hypothetical wording".
- The plan promises an LLM provider chain; reality is rules only. Update the doc so nobody believes an LLM demo exists. Demo script uses "Carolina de Taller Andino"; the built example is Camila; align.
- Price ranges for ICP 1/3/4 (COP 5M-12M setup, 1-4M monthly) have no basis for a first-time seller with one 700k and one 1.2M web sale; a prospect who hears 2.5M-4M for a "pilot" from an unproven vendor will balk. Test 1.5M or a free diagnosis first.
- Buyer: ICP_MAP names owners but no named person who has said they have the pain. Only real buyer evidence in the whole sprint is OENYX (a web sale, not AI) and Becamel.
- Kill criteria "5 owners ask for a pilot" is good and concrete; keep it.

ICP_MAP.md: opening disclaimer is good. Claims stated softly. Weak points: ICP 1 (info-product launchers) is the organizer's own business model, and these buyers are saturated with AI-setter vendors and sell the same promise; ICP 2 is the better bet but its signals ("owner asks como delego") are not observable from outside. "USD 5k-100k+ monthly revenue" is invented size data labelled HYPOTHESIS; fine. The event's "2,000+ owners" is an organizer claim; the research file marks it, ICP_MAP lacks that caveat. A USD 295 ticket is spend capacity for training, not for a COP 10M project; EVENT_RESEARCH says so, ICP_MAP's COP 6M-12M tickets contradict it.

EVENT_PLAYBOOK.md: usable, honest, and the consent rules are good. Problems: pitch text promises the agent "responde al instante... agenda la llamada y hace el seguimiento" while the product does none of that automatically and the company's own gate doc says WhatsApp automation is not validated for sale. It is acceptable only as a scripted description of the pilot, but add "demo con datos de prueba, aún no está en producción". Also the playbook's field list (consent date, consent method "form/QR form") exceeds what /capture records. Question 5 ("Quien decide y que tendria que ver en 30 dias") is the best line in the sprint.

PROSPECT_RESEARCH.md: privacy PASS. 4 rows, all public business roles of event speakers/organizers, no phones/emails, "nothing authorizes contact", testimonial students deliberately excluded. Concerns: (a) naming Paola Luque and Ana Luna (an unidentified speaker with "name only") adds nothing a seller can use; Ana Luna in particular is a person with zero business evidence, so remove her. (b) The research proves there is no prospect list; it is honest, but it is 4 rows of low-confidence non-buyers, so the deliverable "prospect research" is effectively empty. That is a correct finding but not progress toward selling. (c) The source `andresospina.co/lideres-tech/...` is a third-party personal profile page; fine.

Overclaim risk found elsewhere (from PORTFOLIO_AUDIT, I agree): grupomonoga-home claims "Resultados Reales en Produccion" and "<1.5s" for RFI with no evidence on disk. That is more dangerous to a summit meeting than any gap above; a buyer who Googles Monoga reads it. It is not fixed (out of this sprint's scope but it is the top credibility risk).

## 5. Time spent on low value
- 6 overlapping prospect/handoff/audit documents (17 KB PORTFOLIO_AUDIT, OENYX_EVIDENCE with an E-block theory that is "plausible, UNPROVEN") for what is one fact: someone has to ask Sebastián for the NIT and invoice. The E-block link investigation does not move revenue.
- Scoring math in TOP_OFFERS.
- Prospect CSV of 4 non-buyers.
- Enrichment badge/queued agent tasks UI work for an agent that is not running.
- Not wasted but incomplete: nothing sells yet. There is no outbound list, no real inbound channel, and no first-contact script for the real warm lead (OENYX: invoice).

## MUST FIX (ranked)
1. Negation handling in lead-intake (`no es urgente`, `no necesitan`, `no tienen presupuesto`, `no me interesa`): add a negation window before HIGH signals and add the missing low phrases. One wrong "interés alto" in a live demo ends the pitch.
2. Trailing period on company ("SAS.") from the COMPANY_SUFFIX regex; it breaks 2 of the 6 built-in examples. Trim `[.,;:]` from company, role. Add tests for each shipped example.
3. Opt-out must not create a deal or a dated task. In `capture-agent.tsx` skip the CRM write (or write only a suppression note) when consent = "Not granted"; also cap interest to Low there.
4. First-person signals: add me interesa, necesito, quiero, quisiera, cotizar, chatbot, bot, automatizar, cuanto me cobran; names after "Buenas ..., <Name> de <Company>" and "Conocí a"; company after "de" without suffix; "800 mil"; lowercase names after "mi nombre es/soy".
5. Clean the demo data: archive or remove the 5 demo companies, 5 demo contacts (fake email laura.demo@nova-demo.test) and hide archived-deal activity from the Overview feed; fix dashboard tile semantics.
6. Rename "agente"/"entendió" in the UI or state "motor de reglas" in the page; change the pitch to say what exists.
7. Do not show "Closed 5 de oct" for OENYX as fact; blank or label it.

## SHOULD FIX
- Role extraction ("gerente de Inversiones" truncation); map unqualified leads to "New lead" stage, not DEMO_BOOKED; complaints should not become sales deals.
- "Dr/Dra" as first name; contact find-or-create dedupe.
- Spanish UI labels for stages and nav (Qualified, Won) in the demo path.
- TOP_OFFERS: remove the multiplicative scores; mark "owner language" quotes hypothetical; replace the LLM chain claim with what ships; rethink the 2.5M-4M pilot price.
- ICP_MAP: add "2,000+ owners" is an organizer claim; reconcile ticket sizes with EVENT_RESEARCH.
- Remove Ana Luna from PROSPECT_RESEARCH.
- Fix the grupomonoga-home RFI overclaims before the summit.

---

# Final re-check (after f4aeb08, baf12b2, 442178c, ae0a77b)

Verdict: PASS with 2 small MUST FIX items (one sales-script lie, one bad company parse) and a short SHOULD list.

## Regression: PASS
- `checks.sh`: tsc x4 = 0, app 197 pass, db 22 pass, api integration 16 pass, compose 0, diff check 0.
- Overview, Deals, Companies, Capture render in Spanish stage labels ("Ganado"); external origins `[]`; port 3000 still PID 19848; upstream `trycompai-crm-source` clean; monoga-os tree clean at ae0a77b.

## Real CRM state: PASS
Database `crm`: 1 active company (OENYX), 1 active contact (Sebastián), 1 active deal (Proyecto OENYX). All demo rows archived. UI lists show "Showing 1-1 of 1". Overview activity and follow-ups show only OENYX. A separate `crm_demo` database exists. Not re-run in UI: Crear/Escalar buttons (not clicked). Code check: `optedOut` disables the create button and returns early in `apply`; the Queja example shows "Escalar en el CRM" and "Atención prioritaria".
Residual: OENYX `closedAt` is still the 2026-10-06 03:37 UTC load time and shows as "Closed 5 de oct" on the sheet (documented in the deal description and NEXT_ACTIONS_DANIEL; still a fabricated date in the UI and it drives "Win rate 100% / 0-day cycle").

## My 20 messages re-run (via `analyzeLeadNote`)
Fixed (verified): trailing period on SAS; negation ("no es urgente, no necesitan demo" -> Bajo 0, no demo; "no tienen presupuesto" -> "- no tiene presupuesto"); "no me interesa" -> low; opt-outs (M6, M7) score 0, message "No se registra como oportunidad ni se agenda seguimiento", create is blocked in the UI; complaint reason line no longer says "puedes responder su consulta"; "me interesa / necesito" now count (Aseo Total -> Alto 95); names "luisa fernanda", "Laura Peña" (Conocí a); companies "Clínica Dental Sonrisa", "Mundo Kids", "BuenaMesa SAS"; budget "800 mil" -> $800.000; Dr. Gómez no longer "Dr".
Still wrong:
1. Company wrongly captures the title: "Pedro Gómez, CEO de Tecnoplast Ltda" -> company "CEO de Tecnoplast Ltda". (MUST FIX: wrong value that would be created if not hand-edited.)
2. "María de la Cruz de Dulces del Valle S.A." -> name "María", company "Cruz de Dulces del Valle S.A.". Compound surnames with "de la" are not handled.
3. Missed: name+company in "Buenas tardes, Juan Pablo Ortiz de Distribuidora El Triunfo" (nothing found, message tells user to type them: acceptable); company "Inversiones Pardo y Hnos" and "Restaurante La Fogata"; "Moda Viva" ("tienda de ropa Moda Viva").
4. "Dr. Gómez" is stored as first name "Gómez" (no first name exists in the message; acceptable but should read as "Dr. Gómez" or stay empty).
5. M3 pain "service, operations" for a clinic wanting a chatbot for citas: loosely right; "automatizar/chatbot/bot" still not a pain keyword for N-type messages without WhatsApp words (Moda Viva bot message -> service via "mensajes"? borderline).
6. Opt-out/no-contact leads still show a follow-up date in the trace ("No contactar ... el 2026-10-19"). Cosmetic, nothing is created, but remove the date from that text.
7. Stage for unqualified leads is still DEMO_BOOKED in the DB (label now Spanish; verify it does not read "Demo agendada" on the sheet).

## Docs re-read: claims without evidence
MUST FIX
- SALES_KIT step 1: "Esto es un WhatsApp real de un taller." The example is synthetic ("Taller Andino Demo"). Saying "real" in front of owners is a false statement that contradicts the same file's rule of synthetic data and the Habeas Data pitch. Replace with "un mensaje de ejemplo, con datos de prueba".
SHOULD FIX
- SALES_KIT: "RFI proposal ... (never paid)" is stated as fact; evidence is only "no payment evidence". Say "no payment evidence".
- SALES_KIT "weekly view of the pipeline" and PILOT_PROPOSAL "El agente redacta... pipeline en pesos": a weekly brief and a drafting model are not built (the draft today is a template; the kit's own table says an LLM is needed for a pilot). Add "se activa en el piloto" or the proposal over-promises to a paying client. Also "Medimos tiempo hasta primera respuesta" requires a real channel connection that does not exist yet (template says "a definir"; ok).
- WEBSITE_CLAIMS_FIX: the replacement copy "Plataformas web y sistemas internos para empresas de Santander" and "Tu equipo responde cada lead a tiempo" are new unproven claims (no list of Santander clients; "a tiempo" is a result claim). Soften: "Desarrollamos plataformas web y sistemas internos" / "Cada lead queda registrado con su siguiente paso".
- Good: TOP_OFFERS now states no LLM is wired in, prices as hypotheses, scoring caveated; ICP_MAP labels owner language as hypothetical and "2,000+ owners" as an organizer claim; PROSPECT_RESEARCH removed Ana Luna; NEXT_ACTIONS_DANIEL is accurate and sends nothing; WEBSITE_CLAIMS_FIX table matches the source files it cites (I did not re-open the HTML).

## Remaining MUST FIX
1. Fix "CEO de Tecnoplast Ltda" company parse (strip leading role/title before "de <Company>"); add a unit test.
2. Correct SALES_KIT step 1 wording ("WhatsApp real").
