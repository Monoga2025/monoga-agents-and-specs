# Organizar Monoga OS y Google Drive

## Objetivo
Reducir el caos operativo y convertir el ecosistema Monoga en un sistema funcional de prioridades, sin borrar información ni abrir proyectos nuevos.

## Alcance autorizado
- Workspace: `C:\Users\Monoga\Desktop\Monoga OS`
- Panel central: `11_MONOGA_OS`
- Google Drive remoto: `gdrive:` (actualmente solo lectura)
- No publicar, enviar, borrar ni comprometer cambios sin autorización explícita.

## Restricciones
- Preservar repositorios anidados, credenciales, backups y archivos históricos.
- No mover rutas registradas hasta reconciliar `11_MONOGA_OS/data/projects.js`.
- No usar Judgment Day sobre un alcance indefinido; cada revisión debe tener un árbol congelado.
- Prioridad funcional: cerrar resultados e ingresos antes que estética o nuevas features.

## Tareas
- [ ] T1 — Inventariar y reconciliar el workspace con el registro del panel. Ruta: delegada, porque requiere múltiples carpetas y repositorios.
- [ ] T2 — Inventariar Drive por carpeta, extensión, duplicados y señales de actividad, sin modificar. Ruta: directa read-only.
- [ ] T3 — Definir clasificación operativa: activo, ingresos, personal/UNAB, pausa, archivo y revisar.
- [ ] T4 — Proponer movimientos reversibles y actualizar el registro del panel solo después de verificar rutas.
- [ ] T5 — Ejecutar organización de Drive únicamente cuando el permiso de escritura y el plan exacto estén confirmados.
- [ ] T6 — Verificar panel, rutas y conteos después de cada lote.
- [ ] T7 — Auditar Codex local, Remote Control y MCP sin activar control remoto. Ruta: directa read-only.
- [ ] T8 — Diseñar agente local económico con Ollama, memoria estructurada y bucles acotados. Ruta: delegada para evaluación técnica.
- [ ] T9 — Configurar un ciclo de investigación verificable, con límites de tiempo, presupuesto y permisos. Requiere confirmación antes de instalar o ejecutar servicios persistentes.
- [ ] T10 — Conectar Google Tasks y Calendar mediante OAuth separado, solo después de definir permisos y alcance exactos.

## Criterio inicial de prioridad
El primer resultado debe apoyar ingresos y cierre de trabajo existente. UNAB, Jarvis, bicicletas y demás líneas quedan en pausa explícita hasta que exista una decisión basada en inventario.

## Verificación aplicable
- Inventarios read-only antes de cambios.
- `git diff` y `git status` antes/después.
- Verificación de rutas referenciadas por `projects.js`.
- Prueba de arranque del panel después de cambios.
- Conteo y listado de Drive antes/después de cualquier movimiento.

## Progreso
- Conexión `gdrive:` verificada en modo solo lectura.
- Drive: 6.650 entradas estimadas, 741 carpetas y 5.909 archivos.
- `11_MONOGA_OS/data/tasks.json` está vacío.
- No se han movido ni borrado archivos.

## Próximo paso
Completar T2 y T7 en modo read-only. Luego consolidar la propuesta de organización y el diseño del agente local antes de instalar servicios o conceder permisos adicionales.
