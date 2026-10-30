# Guion: mapear antes de integrar Odoo

**Uso:** video educativo para los canales propios de Monoga. **Duración objetivo:** 60–90 segundos. **Estado:** borrador para revisión de Daniel. La duplicación descrita es una hipótesis para comprobar, no un caso de cliente documentado.

## Atención

¿En tu empresa alguien copia a mano en otro lugar un dato que ya está en Odoo? Esa escena puede esconder una oportunidad, pero primero hay que comprobar que ocurre y dónde.

## Interés

Empezamos con un mapa: qué evento crea el dato, qué campo necesita el siguiente paso, quién lo aprueba y qué pasa cuando aparece una excepción. Después revisamos la versión, las aplicaciones y el plan de la instancia. Odoo documenta opciones nativas de IA y, en la versión 19, una API externa cuya disponibilidad depende del plan.

## Deseo

Un diagnóstico acotado permite comparar una regla, un agente con acciones o una integración externa según el proceso real. También muestra dónde se necesitan permisos, prueba en entorno controlado y revisión humana. Que una acción se ejecute no prueba que la regla de negocio sea correcta.

## Acción

Si identificas un proceso con doble registro, podemos dibujarlo contigo y entregarte un mapa de factibilidad. Solo después se decidiría si conviene conectar algo.

## Producción y revisión

Mostrar dos cajas del proceso con el mismo dato y luego el mapa evento → campo → aprobación → excepción. Rotular cualquier ejemplo como sintético. Cerrar con el entregable de diagnóstico, sin mostrar una integración ficticia como si ya funcionara. Verificar versión, edición, aplicaciones, plan, permisos y reglas del comprador antes de convertir el concepto en propuesta.

**Fuentes para cotejar antes de usar:** [API externa JSON-2 de Odoo 19](https://www.odoo.com/documentation/19.0/developer/reference/external_api.html) — documenta acceso externo para plan Custom; [IA en Odoo 19](https://www.odoo.com/documentation/19.0/applications/productivity/ai.html); [agentes de IA](https://www.odoo.com/documentation/19.0/applications/productivity/ai/agents.html); [acciones de servidor con IA](https://www.odoo.com/documentation/19.0/applications/productivity/ai/server-actions.html). Documentación consultada el 11 de octubre de 2026. Estas páginas describen el producto, no la configuración de un comprador concreto.
