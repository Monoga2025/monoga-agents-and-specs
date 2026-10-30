# Panel administrativo local de Monoga

## Objetivo y autorización

Recrear como página web local la referencia visual generada para Daniel, con controles reales y enlaces a los artefactos de agentes ya existentes. El usuario autorizó esta implementación. La captura es una maqueta de diseño; sus métricas y estados son datos de ejemplo.

## Alcance

Solo `agentes/panel/index.html`, `styles.css`, `app.js`, `README.md`, `referencia.png` y este documento. La página se abre con doble clic, sin dependencias, red, servidor, autenticación ni mutaciones externas. Conservar íntegros los archivos ajenos y el árbol de trabajo preexistente. El espejo Engram queda pendiente porque la identidad de sesión no está registrada.

## Contrato visual y funcional

Referencia de 1540 × 1024: barra superior blanca de 76 px, navegación lateral azul claro de 238 px, cuerpo blanco, siete tarjetas pastel, flujo de marketing en seis cheurones, cuatro tarjetas AIDA, matriz de dolores/beneficios/soluciones, métricas y dos pilotos. Reproducir jerarquía, proporciones, iconografía, radio y espaciado lo más cerca posible con HTML/CSS e iconos SVG. En pantallas pequeñas, reorganizar tarjetas y navegación sin ocultar los contenidos esenciales.

Funciones locales: búsqueda que filtra contenido visible; navegación a secciones; detalles accesibles de flujo y pilotos; cambio de tema; notificaciones; estados de tareas guardados localmente. Los valores de la imagen conservan su función visual bajo una etiqueta prominente de **vista demostrativa con cifras de ejemplo**. La prioridad y las ofertas son ejemplos de trabajo, sin atribuir ventas, ingresos o clientes reales a Daniel.

## Tareas y ruta

- [ ] T1 — Registrar referencia y construir estructura visual. Delegated direct: edición coordinada de varios archivos. Aceptación: geometría, colores, textos, iconos y jerarquía cercanos a la captura; contenido honesto.
- [ ] T2 — Implementar búsqueda, navegación, modales, tema, notificaciones y tareas locales. Delegated direct: lógica y estilos de interacción. Aceptación: controles operables por teclado, estados comprensibles y enlaces locales válidos.
- [x] T3 — Documentar apertura local y hacer lectura estructural acotada. Delegated direct: documentación y comprobación de superficies. Aceptación observada: existen los seis archivos, las diez rutas locales usadas por la interfaz resuelven y `node --check agentes/panel/app.js` terminó con código 0. Sin suite de pruebas por instrucción de esta tarea.

## Estado

HTML, CSS, JavaScript y referencia copiada están escritos. Los indicadores de la captura llevan la etiqueta «Vista demostrativa · cifras de ejemplo». T1 y T2 quedan pendientes de comprobación visual y de interacción en navegador; no se afirma equivalencia pixel a pixel ni funcionamiento observado de los controles. Los diez enlaces locales consultados existen. No se ejecutó suite de pruebas, render de navegador ni revisión nativa. Precommit HEAD: `d7bed106e00a78e27dcab4ef840eb55aa16fedb7`. Commit pendiente; los seis archivos de este trabajo siguen sin seguimiento, mientras se conserva el resto del árbol de trabajo.
