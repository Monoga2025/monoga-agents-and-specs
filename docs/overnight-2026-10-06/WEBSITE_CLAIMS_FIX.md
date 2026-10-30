# Website claims to fix before the Luque summit

Source checked: `trabajo/monoga/proyectos/web/grupomonoga-home/` (local copy; the live site was not
visited, not edited, not published). Nothing was changed on the site. A human decides.

Why it matters: the summit audience will see the site after a conversation. A claim that
cannot be backed in one sentence kills trust, and unverifiable performance or "en producción"
claims are a consumer-protection risk (Ley 1480 de 2011, publicidad engañosa — not legal advice).

## Claims and evidence

| # | Page | Claim (as written) | Evidence on disk | Verdict |
|---|---|---|---|---|
| 1 | casos-de-exito | "Resultados Reales en Producción" / RFI "En Producción Activa" | Only a proposal microsite (`web/cotizacion-william/index.html`, countdown + "Ir al Pago"). No production system, no payment record found | UNPROVEN — remove or prove |
| 2 | casos-de-exito, index | "100% / 0% errores de inventario" | None | UNPROVEN — remove |
| 3 | casos-de-exito, agentes-ia, soluciones | "< 1.5 s" respuestas / cotización | None (no benchmark, no running agent) | UNPROVEN — remove |
| 4 | casos-de-exito | "99.98%" (uptime?) | None | UNPROVEN — remove |
| 5 | index, agentes-ia, soluciones | "Agentes autónomos / de ventas autónomos en WhatsApp 24/7" | `sales-engine/03_CRM_Y_OPERACIONES/PILOTO_IA_EMPRESAS.md` marks WhatsApp automation "no validado para venta". The only WhatsApp agent is a markdown note | CONTRADICTS own gate — rewrite |
| 6 | index | "reduciendo el ausentismo en un 40%" (citas médicas) | None | UNPROVEN — remove |
| 7 | index | "Cero fallas, cero intermediarios", "ciberseguridad bancaria", "backups automáticos continuos" | None | OVERCLAIM — soften |
| 8 | casos-de-exito | "empresas líderes" | One proposal (RFI), one historical web sale (Becamel). OENYX (web, 1.200.000 COP) awaiting invoice | OVERCLAIM — soften |

## Proposed honest copy (Spanish, draft — every sentence must be true on the day it is published)

Hero / agentes:
> **Ayudamos a que tu equipo responda y haga seguimiento a cada lead. La IA prepara, tu equipo aprueba.**
> Cada mensaje que llega por WhatsApp, Instagram o tu formulario queda registrado, calificado y
> con su siguiente paso agendado. El agente redacta la respuesta; una persona de tu equipo la
> aprueba antes de enviarla.

Casos (until a client authorizes a public case with numbers):
> **Proyectos recientes**
> Plataformas web y sistemas internos para empresas. [Ajustar a los clientes reales que autoricen ser mencionados.] Te mostramos una demo en vivo
> con datos de prueba y te contamos qué medimos en cada piloto.

Proof line that IS true today:
> Demo en vivo (datos de prueba): un mensaje entra, el motor lo analiza, lo califica, crea la oportunidad y la
> tarea de seguimiento en el CRM — en segundos y sin enviar nada sin aprobación.

## To do (human)

1. Daniel confirms which RFI deliverables exist in production, if any. Keep only what can be shown.
2. Ask RFI and OENYX for written permission before naming them publicly.
3. Replace the numeric claims (1–4, 6) or back each with a dated measurement.
4. Republish only after review. This sprint does not publish.
