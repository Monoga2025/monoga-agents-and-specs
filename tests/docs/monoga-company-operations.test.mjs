import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
const docPath = resolve(root, 'docs/COMPANY_OPERATIONS.md');
const skillDir = resolve(root, '.agents/skills/monoga-company-operations');
const doc = readFileSync(docPath, 'utf8');
const skill = readFileSync(resolve(skillDir, 'SKILL.md'), 'utf8');
const modules = [
  'Offer and capabilities', 'Market research', 'Prospecting', 'Sales',
  'Marketing', 'Delivery', 'Control',
];
const sections = [
  'Activation Contract', 'Hard Rules', 'Decision Gates',
  'Execution Steps', 'Output Contract', 'References',
];

// Validate the constrained, JSON-quoted frontmatter shape used here, not arbitrary YAML.
function checkIdentity(text) {
  const match = /^---\r?\n([^]*?)\r?\n---\r?\n/.exec(text);
  assert.ok(match, 'delimited frontmatter required');
  const lines = match[1].split(/\r?\n/);
  assert.deepEqual(lines.length, 2, 'name and one physical description line required');
  assert.equal(lines[0], 'name: monoga-company-operations');
  const quoted = /^description: (".*")$/.exec(lines[1]);
  assert.ok(quoted, 'description must be a JSON-compatible double-quoted scalar');
  const description = JSON.parse(quoted[1]);
  assert.match(description, /^Trigger: /);
  assert.match(description, /organize Monoga company operations/);
  assert.match(description, /módulos de Monoga/);
  assert.equal(resolve(skillDir, '..', lines[0].slice(6)), skillDir);
  return match[0].length;
}

function linkedPaths(text, from) {
  const links = [...text.matchAll(/\[[^\]\n]+\]\(([^)]+)\)/g)].map((m) => m[1]);
  assert.ok(links.length, `no local references in ${from}`);
  for (const link of links) {
    assert.ok(!/^(?:https?:|#)/.test(link), `unexpected nonlocal link: ${link}`);
    assert.ok(existsSync(resolve(from, link)), `missing linked source: ${link}`);
  }
  return links;
}

function checkIndex(text) {
  const headings = [...text.matchAll(/^## (.+)$/gm)].map((m) => m[1]);
  assert.deepEqual(headings.filter((h) => /^\d+\. /.test(h)), modules.map((m, i) => `${i + 1}. ${m}`));
  const chunks = text.split(/^## \d+\. /m).slice(1);
  assert.equal(chunks.length, 7);
  for (const [i, chunk] of chunks.entries()) {
    for (const label of ['**Objective:**', '**Sources:**', '**Skills when needed:**', '**Next task / gate:**', '**Status:**']) {
      assert.ok(chunk.includes(label), `module ${i + 1} missing ${label}`);
    }
    assert.match(chunk, /\[[^\]]+\]\([^)]+\)/, `module ${i + 1} needs a source`);
  }
  for (const status of ['verified', 'pending', 'historical', 'decision required']) {
    assert.ok(text.includes(`**${status}**`), `missing status legend ${status}`);
  }
  assert.match(text, /Daniel owns offer, scope and external-action approvals/);
  assert.match(text, /require separate explicit authorization/);
  assert.match(text, /No niche winner, qualified pipeline, autonomous operation or guaranteed result/);
  assert.match(text, /24 scheduled triggers, not a verified real cycle/);
  assert.match(text, /runtime discovery \*\*pending\*\*/);
  assert.match(text, /not linked as existing documents/);
  return linkedPaths(text, dirname(docPath));
}

function checkSkill(text) {
  const offset = checkIdentity(text);
  const headings = [...text.slice(offset).matchAll(/^## (.+)$/gm)].map((m) => m[1]);
  assert.deepEqual(headings, sections);
  assert.match(text, /Read \[company operations\]/);
  assert.match(text, /verified, pending, historical and decision-required statuses/);
  assert.match(text, /do not copy or invoke all skills/);
  assert.match(text, /Require separate explicit human authorization/);
  assert.match(text, /never scrape personal contacts or infer consent/);
  assert.match(text, /verify actual discovery after reload or a new session/);
  const links = linkedPaths(text, skillDir);
  assert.ok(links.includes('../../../docs/COMPANY_OPERATIONS.md'));
  assert.ok(links.includes('../../../trabajo/monoga/proyectos/growth-studio/.agents/skills/monoga/SKILL.md'));
}

test('seven modules, status legend, references and approval boundary', () => checkIndex(doc));
test('root routing skill identity, contract order and actual sources', () => checkSkill(skill));

test('index rejects removed modules, sources and approval markers', () => {
  assert.throws(() => checkIndex(doc.replace('## 3. Prospecting', '## Prospecting')));
  assert.throws(() => checkIndex(doc.replace('**Sources:**', '**Background:**')));
  assert.throws(() => checkIndex(doc.replace('../trabajo/monoga/proyectos/sales-engine/README.md', '../trabajo/monoga/proyectos/sales-engine/not-real.md')));
  assert.throws(() => checkIndex(doc.replace('require separate explicit authorization', 'may proceed automatically')));
});

test('skill rejects malformed identity, description, missing gates and references', () => {
  assert.throws(() => checkSkill(skill.replace('name: monoga-company-operations', 'name: other')));
  assert.throws(() => checkSkill(skill.replace('description: "Trigger:', 'description: Trigger:')));
  assert.throws(() => checkSkill(skill.replace('description: "Trigger:', 'description: "Bad\\q Trigger:')));
  assert.throws(() => checkSkill(skill.replace('description: "Trigger:', 'description: "Other:')));
  assert.throws(() => checkSkill(skill.replace('description: "Trigger:', 'description:\n  "Trigger:')));
  assert.throws(() => checkSkill(skill.replace('## Decision Gates', '## Optional Gates')));
  assert.throws(() => checkSkill(skill.replace('../../../docs/COMPANY_OPERATIONS.md', '../../../docs/missing.md')));
  assert.throws(() => checkSkill(skill.replace('Require separate explicit human authorization', 'No approval needed')));
});
