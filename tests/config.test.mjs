import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const config = JSON.parse(readFileSync(new URL('docs.json', root), 'utf8'));

test('uses DOCCA project branding and website', () => {
  assert.equal(config.name, 'DOCCA');
  assert.equal(config.navbar.primary.href, 'https://docca.work');
});

test('links to the current X and GitHub profiles', () => {
  assert.equal(config.footer.socials.x, 'https://x.com/doccalabs');
  assert.equal(config.footer.socials.github, 'https://github.com/docca-sh');
  assert.equal(config.navigation.global.anchors.find((a) => a.anchor === 'X').href, 'https://x.com/doccalabs');
});

test('all configured navigation pages exist', () => {
  let checked = 0;
  function walk(value) {
    if (!value || typeof value !== 'object') return;
    for (const [key, child] of Object.entries(value)) {
      if (key === 'pages' && Array.isArray(child)) {
        for (const page of child) {
          if (typeof page !== 'string') continue;
          assert.ok(existsSync(new URL(`${page}.mdx`, root)), `Missing page: ${page}`);
          checked++;
        }
      }
      walk(child);
    }
  }
  walk(config.navigation);
  assert.ok(checked > 0);
});

test('favicon and both logo variants exist', () => {
  for (const asset of [config.favicon, config.logo.light, config.logo.dark]) {
    assert.ok(existsSync(new URL(asset.replace(/^\//, ''), root)), `Missing asset: ${asset}`);
  }
});
