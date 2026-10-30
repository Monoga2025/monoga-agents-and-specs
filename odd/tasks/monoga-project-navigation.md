# Navegación de proyectos de Monoga OS

Fecha: 2026-10-11. Rama: `feat/monoga-modular-revenue-operations-02-market`.

## Objetivo

Convertir `11_MONOGA_OS` en el punto de entrada claro para encontrar proyectos y decidir qué trabajo continuar. Mantener todos los proyectos y los cambios existentes; no mover ni borrar carpetas.

## Alcance y decisiones

- Fuente de navegación: `11_MONOGA_OS/data/projects.js` y rutas reales del repositorio.
- Acceso desde la raíz mediante `ABRIR MONOGA.cmd` y un README breve.
- Prioridad actual: integración de IA en profesiones y empresas. La producción de video apoya el marketing propio. La experiencia con Odoo es informada por Daniel, sin inferir clientes, ingresos ni resultados.
- Estrategia de entrega: `single-pr`; no abrir PR ni publicar sin otra instrucción.
- Espejo Engram: pendiente; el proveedor de memoria no está disponible en esta ejecución.
- Ruta ODD: implementación delegada. La navegación, el registro y la documentación requieren varios archivos con análisis; el trabajo tiene un único escritor.

## Tareas

- [x] **T1 — Contrato de navegación.** Se observaron 23 de 25 rutas antiguas; se corrigieron UNAB y la entrada numerada de Maral. La segunda copia de Maral tiene otro HEAD y sigue sin identidad canónica decidida.
- [ ] **T2 — Hub funcional.** La sección «En qué trabajar ahora», el filtro de estado, las fichas con contexto y los accesos están implementados. Sintaxis y rutas pasan; falta observar la interacción y presentación en navegador.
- [x] **T3 — Acceso y documentación.** Se añadió el acceso raíz, el mapa y notas de vigencia en documentos anteriores. Enlaces principales comprobados como archivos locales existentes.
- [x] **T4 — Verificación y cierre.** Se comprobaron sintaxis, rutas y tres respuestas HTTP del servidor local. Visual y clics quedan pendientes.

## Superficies autorizadas

`README.md`, `ABRIR MONOGA.cmd`, `11_MONOGA_OS/index.html`, `11_MONOGA_OS/data/projects.js`, `11_MONOGA_OS/README.md`, `11_MONOGA_OS/server.mjs`, `docs/COMPANY_OPERATIONS.md`, `docs/ORGANIZATION_DECISIONS.md`, `docs/MONOGA_OPERATING_PROFILE_DRAFT.md`, `docs/PROJECT_NAVIGATION.md` y este archivo.

## Progreso

- Auditoría: 25 entradas iniciales, 23 rutas existentes y 2 ausentes. Tras corregirlas y agregar tres áreas observadas, `projects.js` registra 28 entradas y ninguna ruta ausente. La ruta `run.cwd` de UNAB también existe. Maral conserva dos repositorios distintos; la ruta numerada funciona como acceso, no como decisión canónica.
- `node --check 11_MONOGA_OS/server.mjs` y `node --check 11_MONOGA_OS/data/projects.js`: salida 0. `vm.Script` del script inline del HTML: sintaxis correcta. El primer comando de extracción inline falló por quoting del comando de verificación, no por código; se repitió con extracción por etiquetas y pasó.
- Servidor local `node 11_MONOGA_OS/server.mjs --no-open --port 4793`: arrancó en `127.0.0.1`; `GET /api/state` respondió 200, 28 proyectos y 0 rutas ausentes; `GET /api/doc?path=docs%2FPROJECT_NAVIGATION.md` respondió 200 `text/plain`; ruta no permitida `GET /api/doc?path=README.md` respondió 404. Se detuvo el proceso de comprobación.
- Pendiente: comprobar visualmente la página y sus clics en navegador. No se ejecutaron suites ni se probaron lanzamientos de proyectos.
- Revisión nativa, evaluación de riesgo y commit: pendientes del orquestador; no se infiere autorización ni aprobación.

## Cierre acotado · 2026-10-12

- Verificación independiente: 28 identificadores únicos, 28 rutas existentes, categorías y estados válidos y directorio de arranque UNAB existente. Los enlaces locales de los dos README y del mapa resuelven. El lanzador raíz cita su destino y el lanzador existente usa `cd /d "%~dp0"`.
- El harness DOM en VM, sin navegador real, comprobó los cuatro botones de próximos pasos: limpian búsqueda, categoría y estado y dibujan el destino correspondiente. También comprobó búsqueda Odoo, filtro de estado, rutas relativas con espacios codificados y enlaces `/api/doc` en modo control. Esto no demuestra presentación visual, accesibilidad ni interacción en un navegador.
- El servidor independiente temporal escuchó en `127.0.0.1:14988`: estado con 28 proyectos y 0 ausentes; los cinco documentos permitidos respondieron 200 `text/plain`; documentos no permitidos y traversal respondieron 404; panel y registro respondieron 200. Se detuvo únicamente el proceso creado para esta comprobación.
- Se corrigió `formatSize`: los tamaños nulos, ausentes o cadenas vacías muestran `—`; el cero observado conserva `0 MB`. Verificación focalizada con Node y `assert`: pasaron `null`, `undefined`, cadena vacía, espacios, tabulación/salto de línea, cero numérico y textual, 2 MB, 2.5 MB y 1.0 GB. Todos los scripts inline pasaron `vm.Script`; salida 0.
- El preflight nativo falló dos veces con `invalid_request` por el repositorio Git anidado no registrado `trabajo`, incluso con selección explícita. Resultado informado por el orquestador: `mutation_outcome: not_started`; no se creó autoridad ni recibo. No se reintenta ni se modifica el aislamiento desde esta corrección.
- No se ejecutaron suites, lanzamientos de proyectos, mutaciones de tareas, publicación ni commit. El espejo Engram sigue pendiente.

## Próximo paso

La navegación y las comprobaciones acotadas están terminadas; queda pendiente la pasada visual y de teclado en navegador. La revisión nativa está sin iniciar por el bloqueo descrito; no hay recibo ni commit de cierre.
