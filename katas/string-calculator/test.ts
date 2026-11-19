import { test } from 'node:test';
import assert from 'node:assert/strict';
import { add } from './string-calculator.ts';

test('an empty string adds up to 0', () => {
    assert.equal(add(''), 0);
});
