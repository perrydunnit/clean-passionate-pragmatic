import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BowlingGame } from './bowling-game.ts';

function rollMany(game: BowlingGame, rolls: number, pins: number): void {
    for (let i = 0; i < rolls; i++) {
        game.roll(pins);
    }
}

test('gutter game: 20 rolls of 0 score 0', () => {
    const game = new BowlingGame();
    rollMany(game, 20, 0);

    assert.equal(game.score(), 0);
});