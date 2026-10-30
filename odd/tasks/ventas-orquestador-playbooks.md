# Ventas B2B: Orquestador y Playbooks Especialistas

## Objetivo
Implementar el sistema operativo de ventas B2B para Monoga OS, configurando el Prompt Maestro del Orquestador de Ventas y los 5 especialistas acotados basados en `marketingskills` y `agency-agents`, con persistencia de estado para operación por ciclos y compuertas estrictas de evidencia y revisión humana.

## Contexto y Restricciones
- Autor: Daniel / Monoga OS.
- Enfoque: B2B services, integración de IA, diagnóstico consultivo.
- Fuentes metodológicas: `marketingskills` (Corey Haines) y `agency-agents` (Mike Sitarzewski).
- Modo de operación: Solo borradores y preparación. Ningún envío externo autónomo, ninguna mutación de CRM sin aprobación explícita.
- Engram mirror: pendiente (sin conector activo).

## Tareas
- [x] Tarea 1: Crear `ventas/prompt-orquestador.md` con el Prompt Maestro completo, reglas de evidencia, compuertas de seguridad y ciclo batch. (Verificado: 144 líneas, 9.9KB, ciclo batch de 5 fases, compuerta humana).
- [x] Tarea 2: Crear los playbooks de especialistas en `ventas/agentes/` (Contexto, ICP/Investigación, Oferta/Copywriting, Discovery/Propuestas, RevOps/Métricas). (Verificado: 5 archivos en `ventas/agentes/` con marcos de Marketing Skills y Agency Agents).
- [x] Tarea 3: Configurar estructura de persistencia en `ventas/runs/` con plantilla de estado `state.json.template` y `.gitkeep`. (Verificado: `state.json.template` sintácticamente válido y `.gitkeep` creado).
- [x] Tarea 4: Actualizar `ventas/README.md` y `.claude/agents/monoga-ventas-orquestador.md` vinculando los playbooks y el prompt maestro. (Verificado: enlaces incorporados en orden de lectura y adapter de Claude apuntando a la instrucción maestra).
- [x] Tarea 5: Verificación estructural de todos los artefactos creados y confirmación de compuertas de seguridad. (Verificado: cero envío autónomo, compuerta estricta de aprobación por Daniel conservada).
- [x] Tarea 6: Creación de plantillas operativas de cierre en `ventas/plantillas/` (`orden_de_servicio_monoga.md` y `flujo_maestro_reactivacion_monoga.md`).
- [x] Tarea 7: Calibración de nicho hiperlocal (Odontología y Medicina Estética) en playbooks `02`, `03`, `04` y `05`.
- [x] Tarea 8: Hoja de ruta ejecutiva para Daniel en `ventas/campana-estetica-odontologia.md`.
