import { test } from 'node:test';
import assert from 'node:assert/strict';
import { printReceipt, subtotal, total } from './receipt.ts';

const items = [
    { name: 'Apple', price: 1.0, quantity: 2 },
    { name: 'Bread', price: 3.5, quantity: 1 },
];

test('subtotal sums price times quantity', () => {
    assert.equal(subtotal(items), 5.5);
});

test('receipt lists each line item', () => {
    const receipt = printReceipt(items);
    assert.ok(receipt.includes('Apple x2 @ $1.00'));
    assert.ok(receipt.includes('Bread x1 @ $3.50'));
});

test('receipt includes the total', () => {
    assert.ok(printReceipt(items).includes(`Total: $${total(items).toFixed(2)}`));
});
