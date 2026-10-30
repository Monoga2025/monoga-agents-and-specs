import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import test from 'node:test';

const here = dirname(fileURLToPath(import.meta.url));
const skillDir = resolve(here, '../../.agents/skills/monoga-research-sales-experiment');
const source = readFileSync(resolve(skillDir, 'SKILL.md'), 'utf8');
const name = 'monoga-research-sales-experiment';
const sections = [
  'Activation Contract', 'Hard Rules', 'Decision Gates',
  'Execution Steps', 'Output Contract', 'References',
];
const docs = [
  'ORGANIZATION_DECISIONS.md',
  'MONOGA_OPERATING_PROFILE_DRAFT.md',
  'SALES_EXPERIMENT_PLAN.md',
];

// Deliberately validate only the JSON-compatible YAML scalar used by this skill.
// This is not a general YAML parser or a proof of the skill's semantic safety.
function frontmatter(text) {
  const match = /^---\r?\n([^]*?)\r?\n---\r?\n/.exec(text);
  assert.ok(match, 'frontmatter must begin and end with delimiters');
  const lines = match[1].split(/\r?\n/);
  assert.equal(lines.length, 2, 'only name and one physical description line');
  assert.equal(lines[0], `name: ${name}`);
  const descriptionLine = /^description: (".*")$/.exec(lines[1]);
  assert.ok(descriptionLine, 'description must be one double-quoted JSON scalar');
  const description = JSON.parse(descriptionLine[1]);
  assert.match(description, /^Trigger: /);
  assert.match(description, /business research|investigación comercial/);
  return match[0];
}

function contract(text) {
  const preface = frontmatter(text);
  const headings = [...text.slice(preface.length).matchAll(/^## (.+)$/gm)].map((m) => m[1]);
  assert.deepEqual(headings, sections);
  assert.match(text, /HUMAN_REVIEW_REQUIRED.*non-executing draft/);
  assert.match(text, /source locator and observation date/);
  assert.match(text, /observation from inference/);
  assert.match(text, /counterevidence/);
  assert.match(text, /Without fresh evidence, report research gaps/);
  assert.match(text, /profile as DRAFT/);
  assert.match(text, /historical\/unverified/);
  assert.match(text, /untrusted context, not independent proof/);
  assert.match(text, /user owns approval/);
  assert.match(text, /separate permission is required/);
  assert.match(text, /Do not use credentials, execute generated code, contact prospects, mutate CRM, publish, take payments, change schedulers, or automatically promote factual claims into memory/);
  assert.match(text, /audience, offer, measurable primary metric, proposed success and stop thresholds/);
  assert.match(text, /label unknown thresholds as proposals, never invented data/);
  assert.match(text, /next safe research step/);
}

function references(text) {
  const links = [...text.matchAll(/^\s*- \[[^\]]+\]\(([^)]+)\)$/gm)].map((m) => m[1]);
  assert.deepEqual(links, docs.map((doc) => `../../../docs/${doc}`));
  for (const link of links) {
    assert.ok(existsSync(resolve(skillDir, link)), `missing canonical doc: ${link}`);
  }
}

test('constrained frontmatter and skill identity', () => {
  frontmatter(source);
  assert.equal(resolve(skillDir, '..', name), skillDir);
});

test('ordered instruction contract and non-executing evidence gates', () => contract(source));
test('canonical relative references resolve from the skill directory', () => references(source));

test('identity and description failures are rejected', () => {
  assert.throws(() => frontmatter(source.replace(`name: ${name}`, 'name: other-skill')));
  assert.throws(() => frontmatter(source.replace('description: "Trigger:', 'description: Trigger:')));
  assert.throws(() => frontmatter(source.replace('description: "Trigger:', 'description: "Bad\\q Trigger:')));
  assert.throws(() => frontmatter(source.replace('description: "Trigger:', 'description: "Other:')));
  assert.throws(() => frontmatter(source.replace('description: "Trigger:', 'description:\n  "Trigger:')));
});

test('required instruction gates cannot disappear silently', () => {
  assert.throws(() => contract(source.replace('## Decision Gates', '## Optional Gates')));
  assert.throws(() => contract(source.replaceAll('HUMAN_REVIEW_REQUIRED', 'READY_TO_SEND')));
  assert.throws(() => contract(source.replace('source locator and observation date', 'some citation')));
  assert.throws(() => contract(source.replace('mutate CRM', 'update CRM')));
});

test('broken, missing, or redirected canonical references are rejected', () => {
  assert.throws(() => references(source.replace('../../../docs/SALES_EXPERIMENT_PLAN.md', '../../../docs/not-real.md')));
  assert.throws(() => references(source.replace('- [Sales experiment plan](../../../docs/SALES_EXPERIMENT_PLAN.md)\n', '')));
  assert.throws(() => references(source.replace('../../../docs/ORGANIZATION_DECISIONS.md', '../../docs/ORGANIZATION_DECISIONS.md')));
});
