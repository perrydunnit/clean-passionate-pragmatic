import assert from 'node:assert/strict';
import { factorsOf } from './prime-factors.ts';

const factors = factorsOf(1);

assert.deepEqual(factors, []);

console.log('Prime Factors kata scaffold: PASS');