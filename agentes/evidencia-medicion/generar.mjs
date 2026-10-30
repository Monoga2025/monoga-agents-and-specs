import fs from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

// Carga el runtime de hojas de cálculo instalado por Codex; no añade dependencias al proyecto.
const runtimeModules = process.env.MONOGA_ARTIFACT_MODULES ||
  path.join(os.tmpdir(), 'monoga-agent-artifact', 'node_modules');
const require = createRequire(path.join(runtimeModules, 'package.json'));
const { Workbook, SpreadsheetFile, FileBlob } = require('@oai/artifact-tool');
const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..', '..');
const data = JSON.parse(await fs.readFile(path.join(here, 'datos', 'editorial.json'), 'utf8'));
const outputDir = path.join(here, 'salidas');
const draftsDir = path.join(root, 'marketing', 'borradores');
await fs.mkdir(outputDir, { recursive: true });

const ids = (items) => new Set(items.map(x => x.id));
const profiles = ids(data.perfiles), offers = ids(data.ofertas), sources = ids(data.fuentes);
if (data.mapa.length !== 10 || data.perfiles.length !== 2 || data.guiones.length !== 2) {
  throw new Error('Se esperan dos perfiles, cinco tramos por perfil y dos guiones.');
}
for (const p of data.perfiles) {
  const rows = data.mapa.filter(x => x.perfil_id === p.id).sort((a,b) => a.conciencia-b.conciencia);
  if (rows.length !== 5 || new Set(rows.map(x => data.escala.find(s => s.min <= x.conciencia && x.conciencia <= s.max)?.nombre)).size !== 5) {
    throw new Error(`Tramos incompletos para ${p.id}`);
  }
  if (p.preguntas.length !== 5 || !offers.has(p.oferta_id)) throw new Error(`Perfil incompleto: ${p.id}`);
}
for (const item of [...data.mapa, ...data.guiones]) {
  if (!profiles.has(item.perfil_id) || item.fuente_ids.some(x => !sources.has(x))) throw new Error(`Relación inválida: ${item.id}`);
}
for (const g of data.guiones) if (!offers.has(g.oferta_id)) throw new Error(`Oferta inválida: ${g.id}`);

const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const profileName = id => data.perfiles.find(x => x.id === id).nombre;
const stage = n => data.escala.find(x => x.min <= n && n <= x.max).nombre;

const wb = Workbook.create();
const navy = '#17233B', blue = '#245B83', pale = '#EAF1F5', light = '#F4F7F9';
const sheets = {};
for (const name of ['Panel', 'Mapa editorial', 'Preguntas', 'Ofertas', 'Guiones', 'Economia', 'Fuentes']) {
  sheets[name] = wb.worksheets.add(name);
  sheets[name].showGridLines = false;
}
function setTitle(sh, title, note, lastCol) {
  sh.getRange('A2').values = [[title]];
  sh.getRange('A2').format.font = {name:'Arial', size:15, bold:true, color:navy};
  sh.getRange(`A3:${lastCol}3`).format.borders = {bottom:{style:'thin',color:'#9AB4C5'}};
  if (note) { sh.getRange('A3').values = [[note]]; sh.getRange('A3').format.font = {name:'Arial', size:9, italic:true, color:'#506477'}; }
}
function writeTable(sh, headers, rows, widths, tableName, start=5) {
  const end = col(headers.length), last = start + rows.length;
  sh.getRange(`A${start}:${end}${last}`).values = [headers, ...rows];
  sh.getRange(`A${start}:${end}${last}`).format.font = {name:'Arial', size:10, color:navy};
  sh.getRange(`A${start}:${end}${start}`).format = {fill:navy, font:{name:'Arial',size:10,bold:true,color:'#FFFFFF'}, rowHeight:28, verticalAlignment:'center'};
  sh.getRange(`A${start}:${end}${start}`).format.horizontalAlignment = 'center';
  for (let i=0;i<widths.length;i++) sh.getRange(`${col(i+1)}${start}:${col(i+1)}${last}`).format.columnWidth = widths[i];
  sh.getRange(`A${start+1}:${end}${last}`).format.rowHeight = 47;
  sh.getRange(`A${start+1}:${end}${last}`).format.verticalAlignment = 'center';
  sh.getRange(`A${start+1}:${end}${last}`).format.wrapText = true;
  for (let r=start+2;r<=last;r+=2) sh.getRange(`A${r}:${end}${r}`).format.fill = light;
  const table = sh.tables.add(`A${start}:${end}${last}`, true, tableName);
  table.style = 'TableStyleMedium2';
  table.showFilterButton = true;
  sh.freezePanes.freezeRows(start);
  return last;
}
function col(n) { let s=''; while(n){n--; s=String.fromCharCode(65+n%26)+s;n=Math.floor(n/26);} return s; }

// Panel: lectura rápida de alcance y estado; los detalles viven en las otras pestañas.
{
  const sh=sheets.Panel; setTitle(sh,'Mapa de contenido para integración de IA','Actualizado 11 oct 2026 · Borrador interno para Daniel','H');
  sh.getRange('A5:B10').values = [
    ['Área','Estado'],
    ['Perfiles de ejemplo',data.perfiles.length],
    ['Temas editoriales',data.mapa.length],
    ['Guiones para revisar',data.guiones.length],
    ['Ofertas piloto',data.ofertas.length],
    ['Evidencia de demanda','Pendiente: las escenas son hipótesis']
  ];
  sh.getRange('A5:B5').format={fill:navy,font:{name:'Arial',size:10,bold:true,color:'#FFFFFF'},rowHeight:26};
  sh.getRange('A6:B10').format.font={name:'Arial',size:11,color:navy};
  sh.getRange('A6:B10').format.rowHeight=31;
  sh.getRange('A5:A10').format.columnWidth=28; sh.getRange('B5:B10').format.columnWidth=54;
  sh.getRange('D5:H9').values=[
    ['Uso recomendado','','','',''],
    ['1. Elegir una fila del Mapa editorial.','','','',''],
    ['2. Confirmar el problema con preguntas del perfil.','','','',''],
    ['3. Abrir las fuentes antes de usar una afirmación.','','','',''],
    ['4. Pedir a Daniel que apruebe oferta o publicación.','','','','']
  ];
  sh.getRange('D5:H5').format={fill:blue,font:{name:'Arial',size:10,bold:true,color:'#FFFFFF'}};
  sh.getRange('D5:D9').format.columnWidth=54;
  sh.getRange('D6:D9').format.font={name:'Arial',size:10,color:navy};
  sh.getRange('A12').values=[['La escala 0–100 organiza mensajes. No mide la conciencia de una persona.']];
  sh.getRange('A12').format.font={name:'Arial',size:10,italic:true,color:'#835B15'};
  sh.tabColor=navy;
}
{
  const sh=sheets['Mapa editorial']; setTitle(sh,'Mapa editorial por problema y etapa','Hipótesis para entrevistas · 0–100 es un criterio editorial','O');
  const heads=['ID','Perfil','Puntaje editorial','Etapa editorial','Dolor posible','Necesidad','Beneficio posible','Cómo se abordaría','Costo de brecha','Objeción a explorar','Gancho ético','AIDA','Invitación','Estado','Fuentes'];
  const rows=data.mapa.map(x=>[x.id,profileName(x.perfil_id),x.conciencia,stage(x.conciencia),x.dolor,x.necesidad,x.beneficio,x.como,x.costo_brecha,x.objecion,x.gancho,x.aida,x.cta,x.estado,x.fuente_ids.join(', ')]);
  const last=writeTable(sh,heads,rows,[10,31,13,23,44,38,39,47,45,43,41,38,38,22,28],'MapaEditorial');
  sh.getRange(`C6:C${last}`).setNumberFormat('0'); sh.freezePanes.freezeColumns(2); sh.tabColor=blue;
}
{
  const sh=sheets.Preguntas; setTitle(sh,'Preguntas para entrevistas','Hipótesis para validar; anote solo observaciones autorizadas y sin datos personales','D');
  const heads=['Perfil','Número','Pregunta abierta','Notas autorizadas (sin datos personales)'];
  const rows=data.perfiles.flatMap(p=>p.preguntas.map((pregunta,i)=>[p.nombre,i+1,pregunta,'']));
  const last=writeTable(sh,heads,rows,[46,13,88,58],'PreguntasEntrevista');
  sh.getRange(`C6:D${last}`).format.rowHeight=62; sh.freezePanes.freezeColumns(2); sh.tabColor='#497A73';
}
{
  const sh=sheets.Ofertas; setTitle(sh,'Pilotos propuestos','Alcance y precio pendientes de validación comercial','J');
  const heads=['ID','Piloto','Destinatario','Entregables','Límites','Plazo','Precio (COP)','Estado de precio','Próxima validación','Estado'];
  const rows=data.ofertas.map(x=>[x.id,x.nombre,x.destinatario,x.entregables.map((v,i)=>`${i+1}. ${v}`).join('\n'),x.limites,x.plazo,x.precio_cop,x.precio_estado,x.siguiente_validacion,x.estado]);
  const last=writeTable(sh,heads,rows,[17,34,47,61,53,37,20,22,52,33],'Pilotos');
  sh.getRange(`D6:F${last}`).format.rowHeight=102;
  sh.getRange(`G6:G${last}`).setNumberFormat('"COP "#,##0'); sh.tabColor=blue;
}
{
  const sh=sheets.Guiones; setTitle(sh,'Guiones para canales propios','AIDA es una estructura de escritura, no una promesa de conversión','J');
  const heads=['ID','Perfil','Título','Duración objetivo','Atención','Interés','Deseo','Acción','Visual sugerido','Fuentes'];
  const rows=data.guiones.map(x=>[x.id,profileName(x.perfil_id),x.titulo,x.duracion_objetivo_segundos+' s',x.atencion,x.interes,x.deseo,x.accion,x.visual,x.fuente_ids.join(', ')]);
  const last=writeTable(sh,heads,rows,[12,34,36,20,62,74,79,65,70,45],'GuionesAIDA');
  sh.getRange(`A6:J${last}`).format.rowHeight=150; sh.tabColor=blue;
}
{
  const sh=sheets.Economia; setTitle(sh,'Costo de la brecha: escenario','Use el mismo periodo observado; una celda vacía mantiene el resultado pendiente','G');
  const heads=['Perfil','Horas operativas por ciclo (sin reproceso)','Costo por hora (COP)','Ciclos observados','Horas de reproceso (total del periodo)','Costos directos (periodo, COP)','Escenario (COP)'];
  const rows=data.perfiles.map(p=>[p.nombre,null,null,null,null,null,null]);
  writeTable(sh,heads,rows,[44,35,24,18,35,28,25],'CostoBrecha');
  sh.getRange('B6:F7').format.fill='#FFF0C9';
  sh.getRange('G6').formulas=[['=IF(COUNT(B6:F6)<5,"Pendiente",B6*C6*D6+E6*C6+F6)']];
  sh.getRange('G7').formulas=[['=IF(COUNT(B7:F7)<5,"Pendiente",B7*C7*D7+E7*C7+F7)']];
  sh.getRange('C6:C7').setNumberFormat('"COP "#,##0');
  sh.getRange('F6:G7').setNumberFormat('"COP "#,##0');
  sh.getRange('A10').values=[['Fórmula: horas × costo/hora × ciclos + reproceso × costo/hora + costos directos documentados.']];
  sh.getRange('A11').values=[['No sumar multas, ahorros o pérdidas sin registros y causalidad comprobados.']];
  sh.getRange('A12').values=[['Las horas operativas excluyen reproceso; las horas de reproceso corresponden al mismo periodo y se cuentan una sola vez.']];
  sh.getRange('A10:A12').format.font={name:'Arial',size:10,italic:true,color:'#835B15'};
  sh.tabColor='#C28A35';
}
{
  const sh=sheets.Fuentes; setTitle(sh,'Fuentes y alcance de cada afirmación','La fecha de consulta no prueba vigencia normativa ni acceso en una cuenta particular','G');
  const heads=['ID','Organización','Documento','URL','Consulta','Estado','Alcance y comprobación'];
  const rows=data.fuentes.map(x=>[x.id,x.organizacion,x.titulo,x.url,new Date(x.consulta+'T00:00:00Z'),x.estado,x.alcance]);
  const last=writeTable(sh,heads,rows,[22,21,47,95,18,32,85],'FuentesEditoriales');
  sh.getRange(`E6:E${last}`).setNumberFormat('dd/mm/yyyy'); sh.freezePanes.freezeColumns(1);
}

wb.recalculate();
const errors=await wb.inspect({kind:'match',searchTerm:'#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A|#NUM!|#NULL!|#SPILL!|#CALC!',options:{useRegex:true,maxResults:30},summary:'formula errors'});
if (/"matchCount":\s*[1-9]/.test(errors.ndjson)) throw new Error('Error de fórmula: '+errors.ndjson.slice(0,500));
const book=await SpreadsheetFile.exportXlsx(wb);
const bookPath=path.join(outputDir,'mapa-editorial.xlsx');
await book.save(bookPath);
const loaded=await SpreadsheetFile.importXlsx(await FileBlob.load(bookPath));
const readback=await loaded.inspect({kind:'table',range:'Mapa editorial!A5:D8',include:'values,formulas',tableMaxRows:4,tableMaxCols:4});
console.log('XLSX_READBACK',readback.ndjson.slice(0,800));

const cards=data.mapa.map(x=>`<article class="card" data-perfil="${esc(x.perfil_id)}" data-etapa="${esc(stage(x.conciencia))}"><div class="cardtop"><span class="score">${x.conciencia}/100</span><span class="stage">${esc(stage(x.conciencia))}</span></div><h3>${esc(profileName(x.perfil_id))}</h3><p class="hook">${esc(x.gancho)}</p><dl><dt>Dolor posible</dt><dd>${esc(x.dolor)}</dd><dt>Necesidad</dt><dd>${esc(x.necesidad)}</dd><dt>Beneficio</dt><dd>${esc(x.beneficio)}</dd><dt>Cómo</dt><dd>${esc(x.como)}</dd><dt>Costo de brecha</dt><dd>${esc(x.costo_brecha)}</dd><dt>Objeción</dt><dd>${esc(x.objecion)}</dd></dl><p class="cta">Invitación: ${esc(x.cta)}</p><small>Hipótesis editorial · ${esc(x.fuente_ids.join(', '))}</small></article>`).join('\n');
const questionCards=data.perfiles.map(p=>`<article class="offer"><h3>${esc(p.nombre)}</h3><ol>${p.preguntas.map(q=>`<li>${esc(q)}</li>`).join('')}</ol></article>`).join('');
const offerCards=data.ofertas.map(x=>`<article class="offer"><h3>${esc(x.nombre)}</h3><p>${esc(x.destinatario)}</p><ul>${x.entregables.map(v=>`<li>${esc(v)}</li>`).join('')}</ul><p><strong>Límite:</strong> ${esc(x.limites)}</p><p><strong>Precio:</strong> por cotizar · <strong>Plazo:</strong> ${esc(x.plazo)}</p></article>`).join('');
const scripts=data.guiones.map(g=>`<details class="script"><summary>${esc(g.titulo)} <span>60–90 s · borrador</span></summary><div class="scriptbody">${[['Atención',g.atencion],['Interés',g.interes],['Deseo',g.deseo],['Acción',g.accion]].map(([h,v])=>`<section><h4>${h}</h4><p>${esc(v)}</p></section>`).join('')}<p class="visual"><strong>Visual:</strong> ${esc(g.visual)}</p><small>Fuentes: ${esc(g.fuente_ids.join(', '))}</small></div></details>`).join('');
const sourceList=data.fuentes.map(s=>`<li><a href="${esc(s.url)}">${esc(s.id)} · ${esc(s.organizacion)}</a><span>${esc(s.consulta)} · ${esc(s.alcance)}</span></li>`).join('');
const html=`<!doctype html><html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Muro editorial · Monoga</title><style>
:root{font-family:Inter,Segoe UI,Arial,sans-serif;color:#17233b;background:#f3f5f3}*{box-sizing:border-box}body{margin:0}header{background:#17233b;color:white;padding:42px max(24px,5vw)}header small{letter-spacing:.16em;text-transform:uppercase;color:#a9d3df}h1{font-size:clamp(2rem,4vw,3.7rem);line-height:1.03;max-width:800px;margin:14px 0}header p{max-width:760px;color:#dce8ee;line-height:1.55}main{max-width:1500px;margin:auto;padding:32px 24px 70px}.intro{display:flex;gap:20px;justify-content:space-between;align-items:end;flex-wrap:wrap}.intro h2{font-size:1.7rem;margin-bottom:4px}.intro p{max-width:670px;line-height:1.5;color:#526477}.controls{display:flex;gap:12px;flex-wrap:wrap}select,button{font:inherit;border:1px solid #bdcbd2;border-radius:9px;padding:10px 14px;background:white;color:#17233b}button{cursor:pointer}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:16px;margin:24px 0 56px}.card,.offer,.script{background:white;border:1px solid #d7e1e4;border-radius:14px;box-shadow:0 4px 16px #17233b0d}.card{padding:20px;break-inside:avoid}.cardtop{display:flex;align-items:center;justify-content:space-between;gap:10px}.score{font-size:1.35rem;font-weight:750;color:#245b83}.stage{font-size:.72rem;text-transform:uppercase;letter-spacing:.06em;color:#6a7d85}.card h3{font-size:1.05rem;margin:18px 0 12px}.hook{font-size:1.18rem;line-height:1.35;font-weight:700;color:#183c5c;min-height:55px}.card dl{display:grid;grid-template-columns:1fr;gap:3px;margin:20px 0}.card dt{font-size:.71rem;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#6a7d85}.card dd{margin:0 0 10px;line-height:1.42}.cta{border-top:1px solid #d7e1e4;padding-top:14px;font-weight:650}.card small{color:#687984}.sectionhead{border-top:2px solid #b6c9d3;padding-top:26px;margin-top:25px}.offers{display:grid;grid-template-columns:repeat(auto-fit,minmax(310px,1fr));gap:18px}.offer{padding:22px;line-height:1.5}.offer ul{padding-left:22px}.offer li{margin:7px 0}.script{margin:12px 0;overflow:hidden}.script summary{list-style:none;cursor:pointer;padding:21px;font-weight:700;display:flex;justify-content:space-between;gap:15px}.script summary span{font-weight:400;color:#637986}.scriptbody{border-top:1px solid #d7e1e4;padding:12px 22px 24px}.scriptbody h4{color:#245b83;margin:20px 0 5px}.scriptbody p{line-height:1.6;max-width:850px;margin:0}.visual{margin-top:22px!important}.sources{line-height:1.5;padding-left:20px}.sources li{margin:10px 0}.sources span{display:block;color:#627682}.sources a{color:#245b83}.note{background:#fff6dd;border-left:4px solid #bb8a28;padding:14px 18px;line-height:1.5;margin:28px 0}footer{padding:28px 24px;text-align:center;color:#6a7d85}@media print{body{background:white}header{padding:20px 0;background:white;color:#17233b}header p,header small{color:#506477}main{padding:12px 0}.controls{display:none}.grid{grid-template-columns:repeat(2,1fr);gap:10px}.card,.offer,.script{box-shadow:none;border:1px solid #b6c9d3}.script{break-inside:avoid}.sources a{color:#17233b}}
</style></head><body><header><small>Monoga · trabajo interno</small><h1>De una tarea repetida a un piloto verificable</h1><p>Mapa de mensajes para adopción e integración de IA en profesiones y empresas. Las escenas describen hipótesis para conversar; ninguna cifra mide a una persona ni prueba demanda.</p></header><main><div class="intro"><div><h2>Mapa editorial</h2><p>Diez temas en cinco tramos. Filtra por perfil o etapa para preparar una entrevista, un guion o una oferta piloto.</p></div><div class="controls"><select id="perfil" aria-label="Filtrar por perfil"><option value="">Todos los perfiles</option><option value="CONTADOR">Contadores</option><option value="ODOO">Procesos Odoo</option></select><select id="etapa" aria-label="Filtrar por etapa"><option value="">Todas las etapas</option>${data.escala.map(s=>`<option>${esc(s.nombre)}</option>`).join('')}</select><button id="print" type="button">Imprimir muro</button></div></div><p class="note">Puntaje editorial 0–100: indica el orden de las preguntas de contenido; no mide personas. Dolor, beneficio y objeción son hipótesis. El costo requiere horas, frecuencia y costos observados; no se imputan sanciones ni ahorros.</p><h2 class="sectionhead">Preguntas para entrevistas</h2><p>Preguntas abiertas para validar el proceso. Registra solo observaciones autorizadas, sin datos personales.</p><div class="offers">${questionCards}</div><div class="grid" id="cards">${cards}</div><h2 class="sectionhead">Pilotos para validar</h2><div class="offers">${offerCards}</div><h2 class="sectionhead">Guiones AIDA completos</h2>${scripts}<h2 class="sectionhead">Fuentes y límites</h2><ol class="sources">${sourceList}</ol><p class="note">DIAN: abrir norma, modificaciones y anexos para el caso específico. NotebookLM: comprobar formato de fuente, sincronización de Drive y privacidad de la cuenta. Odoo: comprobar versión, aplicaciones, plan, permisos y reglas antes de cualquier acción.</p></main><footer>Actualizado ${esc(data.actualizado)} · Borrador local sujeto a revisión de Daniel</footer><script>const p=document.getElementById('perfil'),e=document.getElementById('etapa');function filter(){document.querySelectorAll('.card').forEach(c=>c.hidden=!!((p.value&&c.dataset.perfil!==p.value)||(e.value&&c.dataset.etapa!==e.value)))}p.addEventListener('change',filter);e.addEventListener('change',filter);document.getElementById('print').addEventListener('click',()=>window.print());</script></body></html>`;
await fs.writeFile(path.join(outputDir,'muro-editorial.html'),html,'utf8');
const md=`# Guiones AIDA para revisión\n\nBorradores de contenido propio de Monoga. El material todavía no está aprobado para publicación. AIDA organiza el relato; no predice conversiones.\n\n${data.guiones.map(g=>`## ${g.titulo}\n\n**Duración objetivo:** ${g.duracion_objetivo_segundos} segundos. **Estado:** ${g.estado}.\n\n**Atención:** ${g.atencion}\n\n**Interés:** ${g.interes}\n\n**Deseo:** ${g.deseo}\n\n**Acción:** ${g.accion}\n\n**Visuales:** ${g.visual}\n\n**Fuentes para cotejar:** ${g.fuente_ids.join(', ')}.\n`).join('\n')}\n## Antes de grabar\n\nAbrir cada fuente original, confirmar fecha y alcance, verificar que una captura sea real o esté rotulada como ejemplo y obtener aprobación de Daniel para la oferta y publicación.\n`;
if (process.argv.includes('--write-script-draft')) {
  await fs.mkdir(draftsDir, { recursive: true });
  await fs.writeFile(path.join(draftsDir,'guiones-aida.md'),md,'utf8');
}
console.log(JSON.stringify({sheets:7,mapa:data.mapa.length,preguntas:data.perfiles.reduce((n,p)=>n+p.preguntas.length,0),guiones:data.guiones.length,fuentes:data.fuentes.length,outputs:['mapa-editorial.xlsx','muro-editorial.html']}));
