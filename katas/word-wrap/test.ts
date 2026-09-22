import { test } from 'node:test';
import assert from 'node:assert/strict';
import { wrap } from './word-wrap.ts';

test('an empty string wraps to an empty list', () => {
    assert.deepEqual(wrap('', 5), []);
});

test('a single short word fits on one line', () => {
    assert.deepEqual(wrap('word', 5), ['word']);
});

test('words wrap at spaces without splitting words', () => {
    assert.deepEqual(wrap('word wrap', 6), ['word', 'wrap']);
});

test('as many words as fit join on one line', () => {
    assert.deepEqual(wrap('word wrap kata', 10), ['word wrap', 'kata']);
});
