# Organización física y paquete NotebookLM de Monoga OS

Fecha: 2026-10-12. Implementación local autorizada por Daniel.

## Objetivo y límites

Separar físicamente estudio, proyectos comerciales, materiales de marketing y referencias sin borrar ni fusionar contenido, y crear un ZIP de Markdown trazable y depurado para que Daniel lo suba manualmente a NotebookLM. El lanzador `11_MONOGA_OS` y las carpetas ocultas/configuraciones permanecen en su ubicación.

Ruta ODD: implementación delegada a un único escritor por movimientos de directorios y múltiples artefactos. Estrategia `single-pr`; no se crea PR, no se sube contenido y no se hace commit sobre cambios previos mezclados. Espejo Engram pendiente: proveedor de memoria no disponible en esta ejecución. El modo de revisión nativa encontró antes un error `invalid_request` por repositorios anidados no rastreados; no se creó autoridad ni recibo y no se repetirá en este lote.

## Tareas

- [x] **T1 — Preparación y prueba de origen.** Orígenes/destinos resueltos dentro del workspace, ausencia de conflictos, recuentos, muestras hash y HEAD comprobados. La inspección opcional de procesos no se completó; los bloqueos de movimiento se preservaron sin modificar permisos.
- [ ] **T2 — Movimientos y rutas activas.** Mover completas las cuatro carpetas de raíz y separar la aplicación UNAB. Preservar `.git` y todos los bytes. Actualizar registro del panel y documentos de navegación vigentes con un mapa de migración; no reescribir la historia.
- [x] **T3 — Conocimiento oro.** Selección y saneamiento automáticos documentados; fuentes únicas, volúmenes temáticos, índice, manifiesto, mapa de movimientos y formatos pendientes generados. ZIP exclusivamente Markdown creado con rutas finales observadas. No se declara cobertura de cada formato ni privacidad semántica completa.
- [x] **T4 — Verificación.** Registro de 29 IDs únicos, todas las rutas y `run.cwd`, estados/categorías válidos, sintaxis y enlaces de navegación pasan. ZIP: CRC, unicidad/rutas seguras, lectura completa, cobertura del manifiesto, desduplicación y patrones residuales pasan. La comprobación de movimientos y hashes/HEAD se registra abajo; revisión visual, publicación y subida quedan fuera.

## Rutas de movimiento previstas

| Origen | Destino | Regla |
|---|---|---|
| `04_UNAB_INGENIERIA` | `estudio/UNAB` | Primero mover el contenedor entero. |
| `estudio/UNAB/UNAB OS` | `trabajo/monoga/proyectos/unab-os` | Luego separar solo el software. |
| `08_MARAL` | `trabajo/monoga/proyectos/maral` | Preservar el otro repositorio de integraciones. |
| `marketing` | `agentes/marketing/materiales-propios` | No tocar borradores existentes de agentes. |
| `E-block` | `trabajo/monoga/referencias/e-block-raiz-original` | Referencia distinta; no deduplicar. |

## Estado

### Recuperación UNAB observada · 2026-10-12

El primer movimiento recursivo se detuvo por restricciones del sandbox después de trasladar 93 archivos. El orquestador ejecutó la recuperación autorizada: esos 93 archivos volvieron al origen; tres muestras README conservaron SHA-256 y `Carrera_Mecatronica` conservó HEAD `78f39e46c66d31e380862ffe3b49247e99ea8f49`. El total completo es 22.642 archivos; los 22.638 iniciales eran accesibles en sandbox y omitían cuatro archivos `.pytest_cache`. Se eliminaron solo los directorios vacíos del destino parcial.

Después, el renombrado atómico `04_UNAB_INGENIERIA` → `estudio/UNAB` falló con acceso denegado fuera del sandbox. Estado informado por el orquestador: origen íntegro existente, ambos destinos UNAB ausentes; no hay traslado parcial ni pérdida de datos. No se repite UNAB ni se alteran ACL. Los otros tres movimientos siguen pendientes de su ejecución atómica independiente.

### Paquete documental observado · 2026-10-12

- Primera instantánea completa: 466 fuentes únicas saneadas, 534 rutas originales con 68 aliases duplicados exactos; 20 volúmenes de subida y 490 entradas exclusivamente `.md` dentro del ZIP.
- Incluye los 14 prompts canónicos de marketing, skills locales seleccionadas, documentación de proyectos y JSON editorial convertido a Markdown. No se exportó un volcado general de agentes ni se ejecutaron instrucciones de fuentes.
- Comprobaciones observadas: ningún patrón residual de credenciales, claves privadas, JWT, correo o teléfonos de los patrones definidos; CRC del ZIP, rutas relativas seguras, unicidad, cobertura del manifiesto y bytes de cada entrada contra la carpeta descomprimida pasan. Esto no equivale a una auditoría semántica de todos los documentos ni detecta toda privacidad contextual.
- Se inventariaron 256 candidatos no Markdown pendientes de conversión. No se extrajeron PDF, Word, Excel, CAD ni otros formatos; no se declara cobertura de todo el disco.
- El primer intento de empaquetado se detuvo antes de crear ZIP por dos coincidencias residuales en marcadores ya redactados. Se corrigió el detector, se preservó la carpeta anterior y la repetición pasó; ningún valor sensible se imprimió.
- Generador: `exportaciones/NotebookLM/herramientas/generar_oro.py`. Paquete: `exportaciones/NotebookLM/MONOGA_ORO_NOTEBOOKLM_2026-10-12.zip`. La documentación oficial de Google admite Markdown y describe 50 fuentes para usuarios gratuitos; el paquete usa 20 volúmenes y se debe descomprimir antes de cargar.
- Regeneración final pendiente después de observar los tres movimientos independientes y actualizar las rutas activas. No hay subida, commit, revisión nativa ni recibo nuevo; espejo Engram pendiente.

### Resultados finales observados · 2026-10-12

- El movimiento atómico del contenedor `08_MARAL` fue bloqueado, pero sus tres hijos completos pudieron trasladarse: `maral-os` (33.374 archivos), `Pagina Web Maral` (40.315 archivos) y el RAR (un archivo). Recuentos, muestras hash y HEAD pasaron; la raíz vacía se retiró sin borrado recursivo.
- UNAB OS se trasladó completo a `trabajo/monoga/proyectos/unab-os` (22.242 archivos); la guía quedó en `estudio/UNAB/04_UNAB_INGENIERIA.md`. Carrera (399 archivos) permanece en `04_UNAB_INGENIERIA/Carrera_Mecatronica`: ese hijo fue bloqueado y sigue íntegro. Su acceso Windows `estudio/UNAB/Carrera_Mecatronica.lnk` se creó y su destino/directorio de trabajo se leyeron correctamente; no es copia ni traslado.
- Marketing propio: un archivo trasladado a `agentes/marketing/materiales-propios`. Referencia E-block: estructura sin archivos trasladada a `trabajo/monoga/referencias/e-block-raiz-original`; no se fusionó con archivos históricos.
- El primer ledger compartido falló al escribir después del movimiento ya verificado de la guía UNAB. Ese resultado se recuperó en un ledger nuevo; los cinco ledgers de reanudación de Maral preservan eventos anteriores y resultados posteriores. El generador lee todos y desduplica eventos iguales; no repite movimientos para corregir metadata.
- Registro: ID académico `unab_ingenieria` preservado, entrada distinta `unab_os` con ruta y `run.cwd` actuales, Maral apunta al destino real. Comprobaciones con Node: 29 IDs únicos, todas las rutas existentes, categorías/estados válidos y directorio de arranque existente. Enlaces locales: README raíz 14, mapa 37, README estudio 5, README trabajo 8, README exportaciones 2; todos resuelven. El primer helper de enlaces tenía un paréntesis extra y falló antes de verificar; se corrigió y pasó. `node --check 11_MONOGA_OS/data/projects.js`: salida 0.
- Paquete final regenerado con las rutas reales: 466 fuentes únicas, 534 rutas seleccionadas y 68 aliases SHA-256; 20 volúmenes de subida, 491 entradas `.md`, 2.486.026 bytes. SHA-256 del ZIP: `f2112d281e38aab59d4478bb8050ed351dfc797d840328deb285389ac6f6d14a`. CRC, lectura byte a byte de todas las entradas contra la carpeta, nombres seguros/únicos y cobertura de 466 fuentes pasan. Los patrones de credenciales, JWT, claves privadas, URLs autenticadas, correo y teléfonos definidos dan cero coincidencias residuales; no significa que toda información contextual sea pública.
- Los 14 prompts canónicos y el JSON editorial convertido están incluidos. `NO_CONVERTIDOS.md` registra 256 candidatos en otros formatos (3 PDF, 3 DOCX, 1 XLSX, 1 Blender, 78 TXT, 164 HTML y 6 CSV), sin leerlos ni convertirlos. No se instalaron herramientas y no se subió contenido.
- **T2 permanece parcial únicamente por Carrera.** No se fuerzan permisos ni se copia el Git por partes. La organización de las otras áreas y el paquete están entregables. No hay commit, publicación, revisión nativa o recibo nuevos. Espejo Engram pendiente.
