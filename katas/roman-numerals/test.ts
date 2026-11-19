import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toRoman } from './roman-numerals.ts';

test('1 is I', () => {
    assert.equal(toRoman(1), 'I');
});
