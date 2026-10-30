# Monoga sales kit — Luque Business Summit (17–19 Nov 2026)

One page to sell from. Where this file and `TOP_OFFERS.md`, `ICP_MAP.md` or `EVENT_PLAYBOOK.md`
disagree on message or price, **this file wins**. Prices are hypotheses to test, not quotes.

## The one offer we lead with

**Monoga Lead Desk — agente de ventas con IA, supervisado.**

> "Cada lead que te escribe queda respondido, calificado y con su seguimiento agendado.
> La IA prepara; tu equipo aprueba."

- Buyer: owner or commercial lead of a business that sells by conversation (WhatsApp, Instagram,
  forms, events) — ICP 1 and ICP 2 in `ICP_MAP.md`.
- Pain in their words: "se me enfrían los leads", "nadie hace seguimiento", "no alcanzamos a contestar".
- What they get: every lead in one pipeline with interest, pain, budget, consent and next step;
  a reply draft in seconds; a follow-up task that does not get forgotten; the pipeline in COP
  on one screen (a weekly summary and the real channel connection are pilot work, not built yet).
- What we do NOT claim: 24/7 autonomous selling, revenue uplift, response-time numbers we have not
  measured, client names without written permission.

Second offer (only after the first one has a paying pilot): **AI Operations Agent** — quote/order
intake. Third: **Command Center** is not sold alone; it is the dashboard inside Lead Desk.

## Price ladder (HYPOTHESIS — test in the first 5 conversations)

| Step | What | COP |
|---|---|---|
| 0 | Diagnóstico de 30 min (presencial o llamada) | Sin costo |
| 1 | Piloto Lead Desk 14 días: configuración, respuestas aprobadas por el dueño, un canal, medición | 1.500.000 – 2.500.000 |
| 2 | Operación mensual: hosting, IA, ajustes, soporte | 600.000 – 1.200.000 / mes |

Anchors on disk: RFI proposal COP 1.8M + 300k/mes (no payment evidence on disk), OENYX web project COP 1.2M (won,
invoice pending). First three pilots: stay at the low end to earn a case with numbers.

## 3-minute live demo (works today, local, synthetic data)

Always demo on the demo database, never on the real CRM (it holds OENYX):
`tools\monoga\stop.ps1` then `tools\monoga\start.ps1 -Demo` in the CRM repo. Open
`http://127.0.0.1:3100/monoga/capture`. The Overview of the demo database already shows a
COP 15M synthetic pipeline with follow-ups, so the "dashboard" moment works.

Say what it is: "un motor de reglas local que entiende mensajes en español; en el piloto
conectamos un modelo de lenguaje con sus respuestas aprobadas". If asked "¿qué modelo usa?",
answer exactly that. Do not call the demo an LLM.

1. **Mensaje entrante → "Quiere empezar"** (30 s). The example loads and is analyzed at once. Say: "Este es un mensaje de ejemplo, con datos de prueba, como los que le llegan a un taller.
   Mire lo que entiende el agente." Point at the trace: persona, empresa, dolor, presupuesto
   $3.000.000, interés alto, y por qué.
2. **Borrador de respuesta** (20 s). "La respuesta ya está escrita, con su dolor en sus palabras.
   Nada sale sin que usted la apruebe."
3. **Crear en el CRM** (20 s). Seven green checks: empresa, contacto, oportunidad, campos, nota,
   borrador, tarea.
4. **Aprobar respuesta → Abrir oportunidad** (30 s). The deal with its amount in COP, stage and
   next step.
5. **Overview** (30 s). Follow-ups: the call for tomorrow is there. "Ningún lead se queda sin
   siguiente paso."
6. **Mensaje entrante → "Queja"** (30 s). "Si alguien está molesto, el agente no contesta: lo
   escala a una persona hoy." The button reads **Escalar en el CRM**: it creates an urgent task,
   not a sales deal. This is the trust moment.
7. Optional: type "No me interesa, no me escriban más". The agent refuses to register it. That
   is the Habeas Data moment.

If an attendee wants to type their own message, let them — but know the limits: it reads
names after "soy / me llamo / hablé con / buenas tardes", companies with SAS/Ltda or after
"de", Spanish buying and pain language, budgets in millones/mil/$. Anything else, edit the
fields by hand before **Crear en el CRM**; that is part of the "usted revisa" story.

Close: "¿Cuántos mensajes le llegan por semana y quién los contesta?" → book the diagnóstico.

After the event day: `tools\monoga\stop.ps1` and `tools\monoga\start.ps1` to go back to
the real CRM. Demo records stay in `crm_demo`.

## Event capture (for Daniel, not the client)

Same page, **Nota de evento**: type what was said ("Hablé con … de … Autorizó que la
contactemos …"), review, **Crear en el CRM**. If the note says nothing about consent, the field
stays empty and no follow-up should be sent until it is confirmed.

## Objections

- "Un bot suena a robot." → No sale nada sin aprobación de su equipo; el agente redacta con sus
  respuestas aprobadas.
- "Ya tengo CRM / Excel." → Empezamos donde están sus leads hoy; el piloto mide si vale la pena.
- "¿Y mis datos?" → Alcance y acceso por escrito; en la demo solo datos inventados.
- "Es caro." → 14 días medidos; si no mejora el tiempo de respuesta y el seguimiento, no sigue.

## What is real today vs. what a pilot still needs

| Real today (demo) | Needed for a paid pilot |
|---|---|
| Lead analysis, scoring, consent handling, draft reply, escalation, CRM writes, follow-ups, COP pipeline | Real channel connection (client's own WhatsApp Business provider), hosted CRM with backups, client FAQ approved by the owner, an LLM for free-form replies, written data-processing terms (Ley 1581) |
