# Bowling Game Kata

A TDD kata: score a game of ten-pin bowling, one test at a time.

## The only rules you need

- A game has **10 frames**; each frame has up to **2 rolls**.
- A **spare** (10 pins in 2 rolls) adds the **next roll** as a bonus.
- A **strike** (10 pins in 1 roll) adds the **next two rolls** as a bonus.
- The 10th frame allows extra rolls to award the bonus.
- A perfect game (12 strikes) scores **300**.

## How to run

From the repository root:

```powershell
node --test
```

## Write the tests in this order

Do them **one at a time**, in order. Each test must fail first, then pass with
the simplest code, then be refactored. The order is the kata.

| # | Name | Rolls | Expected score |
|---|------|-------|----------------|
| 1 | Gutter game | 20 × 0 | 0 |
| 2 | One roll | 5 (once) | 5 |
| 3 | All ones | 20 × 1 | 20 |
| 4 | One spare | 5, 5, 3, then 17 × 0 | 16 |
| 5 | One strike | 10, 3, 4, then 16 × 0 | 24 |
| 6 | Perfect game | 12 × 10 | 300 |

Test 1 is already in `test.ts` as the seed. Add tests 2-6 one at a time.

## Guidance per test

1. **Gutter game** — the seed. `score()` returns 0; `roll()` does nothing. Green from the start.
2. **One roll** — make `roll()` remember the pins and `score()` return them. The simplest thing that works.
3. **All ones** — a simple sum of all rolls now suffices. Notice how trivial this still is.
4. **One spare** — *the crux.* A spare's bonus is the **next roll**, so plain summing is no longer enough. You need to know **which roll belongs to which frame**. Resist adding special cases; look for a single, repeating structure.
5. **One strike** — a strike's bonus is the **next two rolls**. The same structure should absorb it.
6. **Perfect game** — confirms your structure handles the frame boundaries, especially the 10th frame.

## After all six pass

Read `score()`. Is it doing more than one thing? Extract small, named helpers
(e.g. spare, strike, bonus) and place them **below** `score()` so the file reads
top-down. This is the stepdown discipline from the Formatting discussion.

> The good part is the discovery in test 4 — don't skip ahead. There is no
> implementation guidance here on purpose.
