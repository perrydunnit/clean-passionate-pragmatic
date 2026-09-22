import { test } from 'node:test';
import assert from 'node:assert/strict';
import { factorsOf } from './prime-factors.ts';

test('factorsOf(1) returns an empty list', () => {
    assert.deepEqual(factorsOf(1), []);
});