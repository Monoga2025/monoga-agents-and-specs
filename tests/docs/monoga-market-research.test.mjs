import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const docs = resolve(root, 'docs');
const market = readFileSync(resolve(docs, 'MARKET_COMPARISON_2026.md'), 'utf8');
const ledger = readFileSync(resolve(docs, 'PROSPECT_RESEARCH.md'), 'utf8');
const index = readFileSync(resolve(docs, 'COMPANY_OPERATIONS.md'), 'utf8');
const sites = [
  ['A1', 'NITIDOS', 'https://www.nitidos.co/'],
  ['A2', 'Luxcar Automotriz', 'https://www.luxcarautomotriz.com/'],
  ['B1', 'Casa Mume', 'https://www.casamume.com/spa'],
  ['B2', 'Carolina López Estilos', 'https://carolinalopezestilos.com/'],
  ['H1', 'Airesan S.A.S.', 'https://www.airesan.com/'],
  ['H2', 'ProyServ', 'https://proyserv.com/'],
];

function linksExist(text) {
  for (const [, target] of text.matchAll(/\[[^\]\n]+\]\(([^)]+)\)/g)) {
    if (/^https:\/\//.test(target)) continue;
    assert.ok(!/^(?:http:|#)/.test(target), `unexpected link ${target}`);
    assert.ok(existsSync(resolve(docs, target)), `missing local reference ${target}`);
  }
}

function checkMarket(text) {
  assert.match(text, /2026-10-03/);
  for (const niche of ['Automotive', 'Beauty', 'HVAC']) assert.match(text, new RegExp(niche, 'i'));
  for (const [, , url] of sites) assert.ok(text.includes(`](${url})`), `missing primary source ${url}`);
  for (const criterion of ['Recurring pain', 'capability fit', 'Buyer/discovery access', 'Delivery complexity and economics', 'Permission/data risk']) {
    assert.ok(text.includes(criterion), `missing criterion ${criterion}`);
  }
  assert.match(text, /no niche selected/i);
  assert.match(text, /no numeric score, ranking, winner/i);
  assert.match(text, /hypothesis/i);
  assert.match(text, /unknown/i);
  assert.match(text, /not verified policy evidence/i);
  assert.match(text, /direct readable retrieval failed\/aborted/i);
  assert.match(text, /2025-10-29/);
  assert.match(text, /public route is not consent/i);
  linksExist(text);
}

function checkLedger(text) {
  assert.match(text, /Research-only; HUMAN_REVIEW_REQUIRED/);
  assert.match(text, /None is contacted, qualified, consented/);
  assert.match(text, /Live CRM state is \*\*unknown\*\*/);
  assert.match(text, /website publication dates are \*\*unknown\*\*/i);
  const headings = [...text.matchAll(/^### ([ABH]\d) — (.+?) \|/gm)];
  assert.deepEqual(headings.map((m) => m[1]), sites.map(([id]) => id));
  for (let i = 0; i < sites.length; i++) {
    const [id, name, url] = sites[i];
    assert.equal(headings[i][2], name, `wrong name for ${id}`);
    const block = text.slice(headings[i].index, headings[i + 1]?.index ?? text.indexOf('## Proposed treatment'));
    assert.ok(block.includes(`**HTTPS source:** ${url}`), `missing ${id} source`);
    assert.match(block, /\*\*Observed:\*\* 2026-10-03/);
    assert.match(block, /\*\*Publication:\*\* unknown/);
    for (const field of ['Site observation', 'Location / channel', 'Potential fit (hypothesis only)', 'Missing:', 'Safe next research']) {
      assert.ok(block.includes(field), `${id}: missing ${field}`);
    }
  }
  assert.match(text, /Public pages and forms do not authorize outreach/);
  assert.match(text, /do not schedule automatic follow-ups/);
  assert.match(text, /not actual CRM records or stage changes/i);
  linksExist(text);
}

function checkIndex(text) {
  for (const name of ['MARKET_COMPARISON_2026.md', 'PROSPECT_RESEARCH.md']) {
    assert.ok(text.includes(`](${name})`), `index does not link ${name}`);
  }
  assert.match(text, /AUTONOMY_OPERATING_RULES\.md.*pending; not linked as existing documents/);
  linksExist(text);
}

test('market comparison is preliminary, sourced and non-executing', () => checkMarket(market));
test('six individually sourced research-only records retain unknown permissions', () => checkLedger(ledger));
test('operations index links only created market artifacts', () => checkIndex(index));
test('contract rejects a missing record, URL, capture date or permission boundary', () => {
  assert.throws(() => checkLedger(ledger.replace(/^### H2 —.*$/m, '')));
  assert.throws(() => checkLedger(ledger.replace('https://www.nitidos.co/', 'https://example.invalid/')));
  assert.throws(() => checkLedger(ledger.replace('**Observed:** 2026-10-03', '**Observed:** unknown')));
  assert.throws(() => checkLedger(ledger.replace('Public pages and forms do not authorize outreach', 'Public pages authorize outreach')));
  assert.throws(() => checkMarket(market.replace('A public route is not consent', 'A public route gives consent')));
});
