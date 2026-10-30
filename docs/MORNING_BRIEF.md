# Morning brief — Overnight Revenue Sprint (cerrado 2026-10-06)

## A. Qué está listo hoy

**CRM (Monoga Revenue Command Center)** — `trabajo/monoga/proyectos/monoga-os`, rama `monoga-event-crm`.
- Arranca con `tools\monoga\start.ps1` (real) o `tools\monoga\start.ps1 -Demo` (sintético); se
  detiene con `tools\monoga\stop.ps1`. Todo en `127.0.0.1`. URL: `http://127.0.0.1:3100/monoga`.
- Verificado al cierre: modo real y modo demo arrancan; `/monoga`, `/monoga/deals` y
  `/monoga/capture` responden 200 en ambos. El real tiene solo OENYX; el demo tiene 9 deals
  sintéticos y ningún dato real.
- Moneda COP soportada y moneda de reporte en COP. Etapas en español (Nuevo lead, Contactado,
  Calificado, Propuesta, Ganado, Perdido, No encaja). Panel "Follow-ups" con tareas vencidas/hoy.
- Tests al cierre: 199 app, 22 db, 16 integración API, typecheck limpio.

**OENYX** — registrado solo con hechos que diste: Ganado, 1.200.000 COP, "Invoice pending",
dos tareas abiertas. Ver sección G.

**Lead Desk demo** — página `/monoga/capture`. Motor de reglas local en español (sin LLM).
Lee una nota de evento o un mensaje entrante; detecta persona, empresa, dolor, presupuesto,
interés y consentimiento, y explica por qué; redacta un borrador que solo queda registrado
cuando una persona lo aprueba; escala quejas a una persona; no registra a quien pidió no ser
contactado; crea empresa, contacto, oportunidad, nota, borrador y tarea en el CRM.

**Materiales comerciales** — en `docs/overnight-2026-10-06/`:
`SALES_KIT.md` (oferta, precios hipótesis, guion de demo, objeciones),
`PILOT_PROPOSAL_TEMPLATE.md`, `EVENT_PLAYBOOK.md`, `WEBSITE_CLAIMS_FIX.md`,
`NEXT_ACTIONS_DANIEL.md`.

**Investigación** — `PORTFOLIO_AUDIT.md` (28 sistemas clasificados), `TOP_OFFERS.md`,
`EVENT_RESEARCH.md`, `ICP_MAP.md`, `PROSPECT_RESEARCH.*`, `ICP2_TARGETS.*` (19 pymes de
Santander, solo investigación), `OENYX_EVIDENCE.md`, `QA_REPORT.md`.

**Commits locales (sin push)**
- CRM: `49db84b`, `1efb3f9`, `98a62b5`, `757fe31`, `ab12040`, `fab794f`, `baae2e0`, `f4aeb08`,
  `baf12b2`, `442178c`, `ae0a77b`, `c20309a` (sobre `ab2f6eb`).
- Monoga OS (solo docs del sprint): `c44a9d0`, `da27d27`, `807bd23`, `0fa0d8f`, y este brief.

## B. Qué puedo vender hoy

**Un diagnóstico de 30 minutos, sin costo, que termina en una propuesta de piloto Lead Desk de 14 días.**

- Lo que muestro: la demo en vivo con datos de prueba (`-Demo`).
- Lo que ofrezco: un piloto supervisado en el que cada lead que llega por un canal queda
  registrado, calificado y con siguiente paso agendado; el agente propone la respuesta y una
  persona del cliente la aprueba antes de enviarla.
- Precio (hipótesis a probar en las primeras 5 conversaciones): piloto 1.500.000 – 2.500.000 COP;
  operación 600.000 – 1.200.000 COP/mes si continúa.
- Condición honesta: el piloto se construye después de la firma (ver E). Hoy existe la demo,
  no el servicio en producción.

## C. Qué no debo prometer todavía

- Que hay un modelo de lenguaje (LLM) funcionando: hoy es un motor de reglas.
- Respuestas automáticas, "24/7 autónomo" o envíos sin aprobación humana.
- Conexión a WhatsApp ya operando.
- Aumento de ventas, ROI, porcentajes o tiempos de respuesta medidos.
- Casos de éxito con nombre (RFI, OENYX) sin permiso escrito del cliente.
- Que el sistema está "en producción", hospedado o con copias de seguridad.
- Resúmenes semanales automáticos, integración con ERP o facturación.
- Lo que hoy dice la web: "En Producción Activa", "100 %", "< 1.5 s", "99.98 %", "40 %".
- Precios por encima del rango de la sección B.

## D. Mis 5 acciones humanas más importantes (por impacto en ingresos)

1. **Cobrar OENYX**: pedir a Sebastián razón social, NIT, dirección y correo de facturación
   (borrador listo en `NEXT_ACTIONS_DANIEL.md`), emitir la factura electrónica y confirmar pago.
2. **Ensayar la demo dos veces** con `start.ps1 -Demo` y fijar el precio del piloto que vas a
   decir en voz alta.
3. **Agendar 5 diagnósticos** con dueños de pymes (contactos propios o con permiso) antes del
   summit; usar el criterio de corte: si 5 dueños calificados no piden piloto, la oferta cambia.
4. **Corregir la web** con `WEBSITE_CLAIMS_FIX.md` antes de que alguien del summit la abra.
5. **Confirmar con el organizador del summit** si se permite stand o contacto con asistentes, y
   hacer la revisión corta de Habeas Data para capturar leads allí.

## E. Lead Desk pilot — MVP para un piloto pagado (no implementado)

**Alcance mínimo (un cliente, un canal, 14 días)**
1. Entrada de mensajes desde el canal del cliente (WhatsApp Business vía proveedor oficial, o
   formulario web como plan B) hacia el CRM.
2. Análisis con LLM sobre las respuestas aprobadas del cliente; el motor de reglas actual queda
   como respaldo si el LLM falla.
3. Bandeja de aprobación: el borrador se aprueba/edita y recién entonces se envía por el canal.
4. Escalamiento: quejas y casos delicados → tarea urgente a una persona, sin respuesta automática.
5. Consentimiento y opt-out registrados; nunca se escribe a quien no autorizó.
6. Medición: tiempo a primera respuesta, % de leads con siguiente paso, citas/cotizaciones.
7. Deduplicar contactos por teléfono/correo antes de crear oportunidades.

**Arquitectura mínima**
- El CRM actual (Next + API + PostgreSQL) hospedado en un VPS con HTTPS y copias diarias.
- Un servicio de entrada (webhook del proveedor de WhatsApp o formulario) que crea el lead por
  la API del CRM.
- La lógica de IA en `apps/agent` (regla del repo: la inteligencia no vive en la API), con
  envío solo después de aprobación.
- Una instancia/base por cliente durante el piloto (aislamiento simple de datos).

**Servicios necesarios**: VPS + dominio/HTTPS; PostgreSQL con backups; proveedor de LLM con
API key de Monoga; proveedor oficial de WhatsApp Business del cliente (o su número verificado);
correo transaccional opcional.

**Coste aproximado por cliente al mes (ESTIMACIÓN, verificar tarifas vigentes antes de cotizar)**

| Concepto | Rango estimado |
|---|---|
| VPS + base de datos + backups | USD 15 – 40 |
| LLM (cientos a pocos miles de mensajes) | USD 5 – 40 |
| WhatsApp Business (proveedor + tarifas de Meta) | USD 0 – 50, según volumen y tipo de conversación |
| Total | ≈ USD 20 – 130 (≈ 80.000 – 550.000 COP) |

Con la operación mensual hipótesis de 600.000 – 1.200.000 COP, el margen es positivo incluso en
el extremo alto, pero depende de cuántas horas de soporte consuma cada cliente.

**Qué debe ocurrir antes de desarrollarlo**
1. Un cliente firma el piloto (o deja anticipo).
2. Autorización escrita de tratamiento de datos (Ley 1581) y alcance del canal.
3. Decisión de Daniel sobre proveedor de LLM y de WhatsApp, con sus costos reales.
4. Respuestas aprobadas del cliente (FAQ, precios, qué escalar) y una persona responsable de aprobar.
5. Indicadores "hoy" acordados para poder medir al día 14.

## F. Demo script

Guion: `docs/overnight-2026-10-06/SALES_KIT.md`, sección "3-minute live demo".

Para ensayarlo (PowerShell, Docker Desktop abierto):

```powershell
cd "C:\Users\Monoga\Desktop\Monoga OS\trabajo\monoga\proyectos\monoga-os"
tools\monoga\start.ps1 -Demo
```

Esperar ~30 s y abrir `http://127.0.0.1:3100/monoga/capture`. Si el navegador no tiene sesión,
seguir el paso 7 del runbook (`docs/monoga-local-runbook.md`). Al terminar:
`tools\monoga\stop.ps1`.

## G. OENYX

- Estado: venta acordada, registrada como **Ganado**, **1.200.000 COP**, Payment status
  **Invoice pending**. Factura no emitida. Pago no confirmado.
- Tareas abiertas: emitir la factura electrónica y enviarla a Sebastián; confirmar recepción y
  fecha de pago.
- Datos faltantes: razón social o nombre, NIT o cédula, dirección, correo de facturación,
  descripción exacta del entregable (el código del proyecto no está en `Monoga OS`), proveedor de
  facturación electrónica que usa Monoga, fecha real del acuerdo (la fecha de cierre en el CRM es
  la de registro).
- Pregunta abierta: ¿OENYX es la empresa de Sebastián para el proyecto E-block? Sin confirmar.

## H. Evento — Luque Business Summit 2026

**Lo que sabemos (fuente: página pública del evento y Luque Academy)**
- 17–19 de noviembre de 2026, Bucaramanga, Neomundo. Tres días presenciales.
- Agenda: día 1 estrategia, día 2 sistemas, día 3 tácticas.
- Entradas: USD 295 personal, USD 535 pareja, USD 735 equipo de 3; paquetes corporativos 10+.
- Speakers nombrados: Fernando Anzures, Álvaro Luque, Ana Luna. Organizador: Luque Academy.

**Lo que sigue siendo hipótesis**
- "2.000+ empresarios de 12 países" es afirmación del organizador.
- Perfil de asistentes: dueños de pymes y emprendedores digitales; tamaño y capacidad de compra
  sin verificar. El precio de la entrada indica gasto en formación, no en proyectos de 10 M COP.
- Que el dolor principal sea "leads que se enfrían en WhatsApp".
- Que se permita stand o acercarse a asistentes.
- No hay lista de patrocinadores ni de asistentes: no existe una lista real de prospectos del evento.
