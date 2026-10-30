# Acciones humanas — Daniel / Sebastián

Nada de esto fue enviado. Son borradores para que Daniel los revise y los envíe él mismo.

## 1. OENYX — cobrar 1.200.000 COP (lo más cercano a ingreso)

Estado en el CRM: Proyecto OENYX · Ganado · 1.200.000 COP · Payment status "Invoice pending" ·
2 tareas abiertas.

Antes de facturar, Daniel necesita (hoy NO están en ningún archivo):

- [ ] Razón social y NIT de OENYX (o cédula si factura a persona natural).
- [ ] Dirección, ciudad y correo para recibir la factura electrónica.
- [ ] Descripción exacta del entregable que se factura (el código/sitio de OENYX no está en
      `Monoga OS`; ubicarlo y ponerlo bajo control de versiones).
- [ ] Proveedor de facturación electrónica habilitado ante la DIAN que usa Monoga (desconocido).
- [ ] Fecha real del acuerdo, para corregir la fecha de cierre en el CRM.

Borrador para Sebastián (WhatsApp o correo, lo envía Daniel):

> Hola Sebastián, ¿cómo vas? Para emitir la factura electrónica del proyecto necesito estos
> datos: razón social o nombre, NIT o cédula, dirección y el correo donde quieres recibirla.
> Apenas los tenga te la envío. ¡Gracias!

Después del pago:

- [ ] En el CRM: Payment status → "Payment confirmed"; completar las dos tareas.
- [ ] Pedir permiso por escrito para mencionar a OENYX como cliente, y una frase de
      testimonio. Sin ese permiso no aparece en la web ni en la presentación.

## 2. Antes del summit (17–19 nov)

- [ ] Corregir la web (`WEBSITE_CLAIMS_FIX.md`): quitar "En producción", "100%", "< 1.5 s",
      "99.98%", "40%" salvo que exista una medición con fecha.
- [ ] Confirmar con el organizador si se permite stand o contacto con asistentes.
- [ ] Ensayar la demo dos veces con `tools\monoga\start.ps1 -Demo` (guion en `SALES_KIT.md`).
- [ ] Decidir un precio de piloto para decir en voz alta (hipótesis: 1.500.000 – 2.500.000 COP).
- [ ] Exportar los prospectos que existan en el Twenty remoto (crm.grupomonoga.com) antes de
      apagarlo; decidir un solo sistema de registro (el CRM local).
- [ ] Revisión legal corta de Habeas Data para capturar leads en el evento (Ley 1581).

## 3. Para un piloto pagado (no para la demo)

- [ ] Conectar un modelo de lenguaje (requiere una API key que Daniel elija y pague) o una
      máquina con más RAM para un modelo local. La demo actual es un motor de reglas.
- [ ] Hosting del CRM con copias de seguridad.
- [ ] Proveedor oficial de WhatsApp Business del cliente.
- [ ] Contrato/autorización de tratamiento de datos con el cliente.
