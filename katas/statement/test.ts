import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Statement } from './statement.ts';

function makeStatement(): Statement {
    const statement = new Statement();
    statement.addRental('Rashomon', 2);
    statement.addRental('Seven Samurai', 4);
    return statement;
}

test('statement lists each rental with its amount', () => {
    const text = makeStatement().statement();
    assert.ok(text.includes('Rashomon: $2.00'));
    assert.ok(text.includes('Seven Samurai: $5.00'));
});

test('statement shows the total and points', () => {
    const text = makeStatement().statement();
    assert.ok(text.includes('Total: $7.00'));
    assert.ok(text.includes('Points: 3'));
});
