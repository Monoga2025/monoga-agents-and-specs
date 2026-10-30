# OENYX evidence | 2026-10-05

Rule: FACT = observed this session with a path; INFERENCE = my reading; UNKNOWN = not determinable.

## Bottom line

**There is no OENYX work product, document, code, folder, git commit or note anywhere in the repository or on the Desktop.** The only records of the client are (a) rows recently entered into the local CRM database by another agent in this session from facts supplied by the user, and (b) that agent's scratchpad scripts. Whether frontend/web work was actually delivered, and where its files live, is UNKNOWN.

## Search performed (FACT)

- Case-insensitive grep for `oenyx`, `onyx` (whole word), `oenix` across `C:\Users\Monoga\Desktop\Monoga OS` (all folders incl. `00_Archivado`, `04_UNAB_INGENIERIA`, `08_MARAL`, `docs`, `odd`, `openspec`, `trabajo`, `tests`, `11_MONOGA_OS`, root `HANDOFF.md`, `MEMORY.md`, `README.md`), excluding `node_modules`, `.git`, `.next`, `.venv`, `site-packages`: **zero text hits for "oenyx"**.
- Hits for "onyx" without the "oe" were only vendored/minified noise (`litellm` guardrail module `onyx`, bundler chunks, a PDF's binary stream, "phoenix" packages): unrelated.
- File-name search `*oenyx*`, `*onyx*`: only the vendored litellm `onyx` guardrail files under `00_Archivado/US_BIKE_Backup/.../.venv`. Unrelated.
- Other Desktop folders (`jefe-monoga-orca`, `ENTREGA_CRUZ_GINEBRA`, `Dinero marketplace`, `sdd-backup`, `Quiz rosaca`): zero "oenyx" hits.
- Git history: `git log --all --grep=oenyx` in the root repo, `monoga-os`, `jarvis`, `monoga-erp`: no commits.
- Claude project/team metadata under `C:\Users\Monoga\.claude`: "oenyx" appears only in this session's own transcript and team config (the current task), not in earlier sessions.
- Also searched for the client in the 28-item inventory: no project folder is named for it (web clients present on disk are `wilmocol`, `cotizacion-william`/RFI, `grupomonoga-home`, none labelled OENYX).

## What does exist about OENYX (FACT, with provenance)

Another agent in this session (scratchpad directory of this session) wrote and ran `scratchpad/oenyx.mjs` at 2026-10-05 ~22:37 local, calling the local CRM through tRPC (`http://127.0.0.1:3100/api/trpc/`). From the script, it:
- updated company `cmuw4n18e0000rsu2lfx6o0ty` description: "Cliente real. Proyecto con trabajo de frontend/web ya realizado. Datos legales (NIT, direccion) pendientes."
- created contact "Sebastian" and deal "Proyecto OENYX", amount 120000000 cents = **COP 1,200,000** (`amountCents: 120000000`, currency COP), deal description: "Venta acordada. Proyecto ya trabajado (incluye frontend/web). Sebastian solicito factura electronica para proceder con el pago. La fecha de cierre registrada es la fecha de carga en el CRM, no la fecha real del acuerdo (desconocida)."
- set deal fields: next action "Emitir/enviar factura electronica y confirmar pago", payment status "Invoice pending"; set stage CLOSED_WON.
- created a NOTE "Estado comercial OENYX (hechos)" listing FACT (project worked incl. frontend/web; agreed value 1.200.000 COP; Sebastian asked for e-invoice) and UNKNOWN (surname, role, email, phone, NIT, address, contract terms, payment date), plus two TASKs (issue e-invoice and send to Sebastian; confirm receipt and payment date).
- Screenshots of this are in the scratchpad: `oenyx-deals.png`, `oenyx-overview.png`, `oenyx-overview2.png`, `oenyx-sheet.png`.

**Provenance caveat (INFERENCE):** the facts in that script (frontend/web work done, COP 1.2M, Sebastian, e-invoice request) are not in any disk document, so they presumably came from the user's chat message to the lead agent. I did not see that message. I treat them as user-reported, unverified by any artifact.

## Status as best known

| Question | Answer | Type |
|---|---|---|
| Is OENYX a client? | Reported "cliente real" in CRM text | user-reported (via CRM), no artifact |
| What was done? | "Frontend/web ya realizado" | user-reported; no code/site found on disk |
| Where is the work? | Not in `Monoga OS` tree, not on Desktop, no git history | UNKNOWN (possibly another machine, a repo not cloned here, a deployed host, or another folder name) |
| Value | COP 1,200,000 agreed | user-reported |
| Payment status | Awaiting invoice (client asked for electronic invoice) | user-reported |
| Invoice issued? | Not evidenced | UNKNOWN |
| Contract/scope doc? | None found | UNKNOWN |
| Closed date | Real agreement date unknown; CRM `closedAt` = load time | FACT per CRM note |

## Inferences (labelled)

- INFERENCE: if OENYX paid COP 1.2M for frontend/web, it is the **second recorded paid web sale** after Becamel (COP 700.000), and it is a website sale, not an AI sale. It is a reference for credibility and a cross-sell target for Offer A (Lead Desk) rather than proof of AI demand.
- INFERENCE: the work may be lost or unversioned like most `web/*` projects (they have no git). Find the source before invoicing; the invoice should reference deliverables.
- INFERENCE: DIAN electronic invoicing is required for the payment to proceed; MARAL OS has UBL/CUFE code (`08_MARAL/maral-os`, historical) but it is not a substitute for a licensed invoicing provider/habilitation. UNKNOWN which provider Monoga uses.

## Next steps (for the user; nothing done by me)

1. Locate the OENYX source/deploy (ask: repo URL, hosting, domain). Add it under version control.
2. Confirm legal entity (NIT, address) to issue the e-invoice; confirm the real agreement date and payment terms; update the CRM deal's close date.
3. After payment, ask for a short testimonial and a 15-minute diagnostic of their lead handling (Lead Desk pilot prospect).

## Addendum: possible link to E-block (lead from team-lead)

FACT (read-only inspection of `00_Archivado/e-block-moved`):
- `docs/product/01-BRIEF.md`, `PROJECT_STATE.md`, `.monoga/state.json`: client "Sebastian (administradora: Diana)", mode client, delivery production, Sebastian is project owner and final decider. Product: building/residence management (rooms, rent COP 320.000, laundry bookings COP 10.000, payments, incidents). Brief dated 2026-09-01.
- `docs/product/03-COMMERCIAL-SCOPE.md`: backend Python sold as one-time payment; price "definido en propuesta o cotizacion separada" (no amount on disk). Acceptance milestones approved by Sebastian / Diana.
- `docs/product/CHANGE_REQUESTS.md`: several change requests by Sebastian, including a frontend one (brand symbol, E-block orange replacing blue) marked Applied, and a Railway preview serving the compiled frontend ("preview tecnico", not final launch). Frontend source: `00_Archivado/e-block-moved/frontend/app` (plus a `Version malisima` copy). So frontend/web work for a client named Sebastian demonstrably exists on disk.
- The word OENYX/onyx appears nowhere in these files (full-tree grep earlier: zero hits). No invoice, NIT, COP 1.2M, "factura" or payment record for E-block was found.

Link assessment:
- Supports the link (INFERENCE): same first name, the CRM's OENYX note says frontend/web already done, E-block has real frontend work, client-mode, one-time-payment scope, delivered via preview.
- Does not confirm it: Sebastian is a common name; E-block never mentions OENYX; the amount COP 1.2M is not in E-block docs; E-block is a building-admin app (client may be an individual/building, not a company called OENYX); the brief says the product is a Python backend, with frontend added later via change requests, which fits "frontend/web" loosely.
- Nothing rules it out. Verdict: **plausible, UNPROVEN.** One question settles it: "Is OENYX the name of Sebastian's entity for E-block?" If yes, the deliverable for invoicing is the E-block preview/backend and its source is `00_Archivado/e-block-moved` (not under version control per the registry; verify `.git` before relying on it).
