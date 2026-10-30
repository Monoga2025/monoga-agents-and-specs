# Agentes de Monoga

Monoga organiza la adopción e integración de inteligencia artificial en profesiones y empresas. Daniel define las decisiones comerciales, valida los resultados y autoriza cualquier acción externa. Su capacidad de producir video sirve al marketing propio de Monoga; este sistema no la presenta como servicio de edición para terceros.

## Ruta de trabajo

1. **Dirección** elige un problema y una hipótesis de valor.
2. **Investigación de clientes** separa evidencia, relato del usuario y supuestos.
3. **Ofertas y ventas** convierte una necesidad validable en un piloto acotado.
4. **Marketing** prepara contenido educativo y una invitación transparente.
5. **Entrega de IA** verifica fuentes, permisos, proceso y aceptación antes de integrar.
6. **Finanzas** calcula escenarios con datos observados, sin confundir metas con precios.
7. **Evidencia y medición** conserva fuentes, estados y resultados verificables.

Cada pilar tiene su guía en una carpeta homónima. La [matriz editorial](evidencia-medicion/datos/editorial.json) alimenta el libro Excel y el [muro visual](evidencia-medicion/salidas/muro-editorial.html); las cifras, hipótesis y citas no deben editarse en las salidas generadas.

## Equipo y ejecución

Los roles canónicos viven en [marketing/equipo](marketing/equipo). Dirección coordina el negocio y marketing coordina las piezas de contenido. Codex carga adaptadores TOML del proyecto en `.codex/agents/`; Claude Code carga adaptadores Markdown en `.claude/agents/`. Cada adaptador indica el rol canónico que debe leer. Los archivos son definiciones locales: su descubrimiento en una sesión nueva, los modelos disponibles y la ejecución real siguen pendientes de comprobación.

La secuencia de contenido es investigación → plan → crítica → revisión → estrategia → guion AIDA → edición → visual → revisión final. Hay un máximo de dos pases de crítica. Una discrepancia que siga abierta se registra para Daniel; no se simula entrenamiento ni se repite indefinidamente.

## Límites comunes

- Fuentes públicas y ejemplos sintéticos para borradores; no incorporar datos de clientes sin autorización y acuerdo de manejo.
- Estado explícito en cada afirmación: **verificado con fuente**, **reportado por Daniel**, **hipótesis editorial** o **desconocido**.
- Ningún rol contacta personas, publica, altera CRM, cobra, consulta cuentas privadas ni instala integraciones por la existencia de estos archivos.
- Antes de una oferta o entrega: confirmar necesidad, alcance, edición y versión de herramientas, derechos de datos, responsables y prueba de aceptación.
- La meta de ingresos de COP 2–3 millones al mes es una aspiración reportada, no evidencia de demanda, presupuesto ni tarifa.

## Lectura de las salidas

El puntaje 0–100 del libro es una **escala editorial de temas**. No mide la conciencia real de una persona. Los dolores, beneficios y objeciones iniciales son hipótesis para entrevistas, no hechos psicológicos. El costo de la brecha se expresa como fórmula para completar con datos observados; no supone multas, pérdidas ni ahorros.
