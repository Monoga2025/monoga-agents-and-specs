# Mapa de proyectos de Monoga OS

**Comprobación local y movimientos: 12 de octubre de 2026.** El [panel](../11_MONOGA_OS/index.html) usa [este registro](../11_MONOGA_OS/data/projects.js) como índice. El inventario original es del 29 de septiembre: sus estados no representan telemetría ni actividad en tiempo real. Ruta existente significa únicamente que la carpeta se encontró.

## Entrar y elegir trabajo

Abre [ABRIR MONOGA.cmd](../ABRIR%20MONOGA.cmd) para el modo control local, o [index.html](../11_MONOGA_OS/index.html) para lectura sin servidor. La página inicial muestra cuatro próximos pasos **propuestos**. Usa el buscador para nombre, ruta, contexto o acción; las etiquetas indican área y el selector indica estado heredado del registro. En modo control, «Abrir carpeta» usa la ruta registrada. En lectura, «Ver carpeta local» sigue un enlace relativo.

## Áreas principales

| Área | Dónde entrar | Para qué sirve | Acción razonable |
|---|---|---|---|
| Integración de IA | [agentes](../agentes/README.md) | Dirección, investigación de clientes, ofertas, entrega y marketing propio | Validar hipótesis de contadores y procesos Odoo con entrevistas; no confundir guiones con prueba de demanda. |
| Guiones y material editorial | [borradores](../agentes/marketing/borradores/) · [muro editorial](../agentes/evidencia-medicion/salidas/muro-editorial.html) | Comunicación de la oferta propia | Revisar fuentes, guiones y llamados a la acción antes de publicar. |
| Web y aplicaciones | [proyectos web](../trabajo/monoga/proyectos/web/) · [Monoga ERP](../trabajo/monoga/proyectos/monoga-erp/) · [UNAB OS](../trabajo/monoga/proyectos/unab-os/) · [Maral OS](../trabajo/monoga/proyectos/maral/maral-os/) · [web Maral](../trabajo/monoga/proyectos/maral/Pagina%20Web%20Maral/) | Productos y prototipos existentes | Comprobar estado y terminar un resultado acotado antes de ampliar funciones. |
| Herramientas internas | [Monoga OS app](../trabajo/monoga/proyectos/monoga-os/) · [lanzador](../11_MONOGA_OS/) · [Jefe Monoga](../trabajo/monoga/sistema/jefe_monoga/) | Aplicación, panel local y kit de agente distintos | Comparar alcance antes de unificar o duplicar funciones. |
| Ventas y automatización | [Growth Studio](../trabajo/monoga/proyectos/growth-studio/) · [Sales Engine](../trabajo/monoga/proyectos/sales-engine/) · [Revenue Automation](../trabajo/monoga/proyectos/revenue-automation/) | Material histórico y sistemas por revisar | Verificar vigencia y permisos antes de contactos o ejecución automática. |
| Material personal y académico | [Freelance Daniel](../trabajo/freelance-daniel/) · [Carrera Mecatrónica](../04_UNAB_INGENIERIA/Carrera_Mecatronica/) · [guía UNAB](../estudio/UNAB/04_UNAB_INGENIERIA.md) | Portafolio fechado y proyectos académicos | La aplicación ya está separada; queda pendiente el movimiento de Carrera, bloqueado sin cambios en su contenido. |
| Administración y referencia | [Finanzas](../trabajo/monoga/proyectos/admin-finance/) · [documentos](./) · [archivo](../00_Archivado/) · [estructura E-block original](../trabajo/monoga/referencias/e-block-raiz-original/) | Información operativa e historia preservada | Usar archivo como referencia; no asumir que sea trabajo activo. |

## Movimientos observados · 2026-10-12

| Origen anterior | Ruta actual | Evidencia del movimiento |
|---|---|---|
| `04_UNAB_INGENIERIA/UNAB OS` | [UNAB OS](../trabajo/monoga/proyectos/unab-os/) | Movimiento atómico de 22.242 archivos; README conservado. Directorio de arranque actualizado; aplicación no ejecutada. |
| `04_UNAB_INGENIERIA/04_UNAB_INGENIERIA.md` | [guía académica](../estudio/UNAB/04_UNAB_INGENIERIA.md) | Un archivo trasladado y verificado. El error posterior fue al escribir el ledger; no fue pérdida de contenido. |
| `04_UNAB_INGENIERIA/Carrera_Mecatronica` | [origen conservado](../04_UNAB_INGENIERIA/Carrera_Mecatronica/) | 399 archivos y Git intactos; traslado bloqueado. No se forzaron permisos ni se copiaron partes. |
| `08_MARAL/maral-os` | [Maral OS](../trabajo/monoga/proyectos/maral/maral-os/) | 33.374 archivos; HEAD y README conservados. |
| `08_MARAL/Pagina Web Maral` | [web Maral](../trabajo/monoga/proyectos/maral/Pagina%20Web%20Maral/) | 40.315 archivos; README conservado. El archivo `.rar` acompañante también fue trasladado sin alterar su hash. El contenedor raíz quedó vacío y se retiró. |
| `marketing` | [materiales propios](../agentes/marketing/materiales-propios/) | Un archivo y su estructura trasladados. |
| `E-block` | [referencia original](../trabajo/monoga/referencias/e-block-raiz-original/) | Estructura de directorios sin archivos conservada; no se fusionó con copias archivadas. |

El [paquete NotebookLM](../exportaciones/README.md) se genera con las rutas actuales y contiene el mapa de movimientos, fuentes saneadas y formatos aún no convertidos. No se cargó nada a un servicio externo.

En `estudio/UNAB`, el acceso Windows `Carrera_Mecatronica.lnk` apunta al repositorio académico original. Su destino y directorio de trabajo se comprobaron; no es un traslado físico ni una copia del Git.

## Rutas que requieren atención

- **UNAB:** la auditoría del 11 de octubre corrigió la ruta ausente `trabajo/monoga/modulos/04_UNAB_INGENIERIA` a la carpeta raíz existente entonces. El movimiento del 12 de octubre separó la aplicación; la carrera sigue en su origen por el bloqueo descrito.
- **Maral:** la auditoría anterior descartó `trabajo/monoga/modulos/08_MARAL/maral-os` y usó `08_MARAL/maral-os`. Esa entrada fue trasladada a [Maral OS](../trabajo/monoga/proyectos/maral/maral-os/). También existe [la copia de integraciones](../trabajo/monoga/integraciones/maral-os-source/). Sus README tienen el mismo hash, pero sus commits HEAD son diferentes; **no se ha decidido cuál repositorio continuar ni se han fusionado**.
- **Aliases y archivo:** `Jarvis` y `01_JARVIS_ENGINE` aparecen en documentación histórica como aliases. E-block y `00_Archivado` son referencias, no prioridades activas. La estructura E-block de raíz se trasladó a su destino propio; las copias archivadas permanecen separadas.

## Fuente de prioridades

La intención actual, informada por Daniel, es trabajar en integración de IA para profesiones y empresas. Su habilidad de video sirve al marketing propio, no se anuncia como servicio de edición. La experiencia con Odoo también es informada por Daniel; versión, edición, acceso y procesos de un posible comprador siguen sin verificar. Ningún importe, cliente o resultado de venta se deriva de este mapa. [Operaciones](COMPANY_OPERATIONS.md) y [perfil operativo](MONOGA_OPERATING_PROFILE_DRAFT.md) conservan contexto anterior con sus fechas.
