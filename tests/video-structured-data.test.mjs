import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const homepageSource = fs.readFileSync(path.join(root, 'src/pages/index.astro'), 'utf8');

test('video structured data uses an ISO 8601 upload datetime with timezone', () => {
  const match = homepageSource.match(/uploadDate:\s*'([^']+)'/);

  assert.ok(match, 'missing VideoObject uploadDate');
  assert.match(
    match[1],
    /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:Z|[+-]\d{2}:\d{2})$/,
    'uploadDate must include a time and timezone',
  );
  assert.equal(match[1], '2026-08-01T08:44:47Z');
});
