# Roman Numerals Kata

A ping-pong kata: a deliberately trivial problem, so that all of your attention
can stay on the pairing.

## Why such a small problem?

The point of this session is not the algorithm. Roman numerals are simple enough
that neither partner needs to think hard about the maths, which leaves you free
to notice the thing you are actually practising: who is typing, who is talking,
who decides what the next step is, and how the two of you disagree.

## The only rules you need

- `toRoman(arabic)` returns the Roman numeral for a positive integer.
- Use the seven symbols: `I` `V` `X` `L` `C` `D` `M`.
- Numerals are written **largest first**, and symbols repeat up to three times.
- When a smaller symbol precedes a larger one it is **subtracted**: `IV` is 4,
  `IX` is 9, `XL` is 40, `XC` is 90, `CD` is 400, `CM` is 900.

## How to run

From the repository root:

```powershell
node --test
```

Or run just this kata:

```powershell
node --test katas/roman-numerals/test.ts
```

## How to ping-pong

- **Developer A** writes one failing test, then **hands over the keyboard**.
- **Developer B** makes it pass with the smallest change that could work, then
  writes the next failing test and hands back.
- **Both** refactor before the swap. The person not typing is the one who says
  whether it reads well.
- Talk the whole time. The driver types only what the pair has agreed on.

The seed test is already green — `toRoman(1)` returns `'I'`, because the stub
does. That is intentional: an obviously dishonest implementation is the best
possible opening question for a pair.

## Write the tests in this order

Do them **one at a time**, in order. Each test must fail first, then pass with
the simplest code, then be refactored.

| # | Input | Expected |
|---|-------|----------|
| 1 | `1` | `'I'` *(already in the kata seed)* |
| 2 | `2` | `'II'` |
| 3 | `3` | `'III'` |
| 4 | `5` | `'V'` |
| 5 | `4` | `'IV'` |
| 6 | `9` | `'IX'` |
| 7 | `40` | `'XL'` |
| 8 | `1990` | `'MCMXC'` |

## Guidance per test

1. **1 is I** — the seed. Green from the start, and a lie.
2. **2 is II** — the stub has to become a loop or a repeat.
3. **3 is III** — confirms the repeat rule, still no new idea.
4. **5 is V** — a new symbol. Notice how tempting it is to special-case it.
5. **4 is IV** — *the crux.* Subtraction breaks the "repeat the symbol" model.
   This is the test that forces the shape of the whole solution.
6. **9 is IX** — the same idea at a different scale. Resist adding a second
   special case; if you need one, the structure is wrong.
7. **40 is XL** — confirms the structure generalizes past the pairs you have seen.
8. **1990 is MCMXC** — a number that walks the whole table, including `CM`.

## After all eight pass

Read `toRoman`. Is it a table, a loop, or a pile of `if`s? Extract whatever the
pieces are into named helpers, place them **below** the caller, and read the
result aloud. If it does not sound like a sentence, keep going.

Then hand the keyboard back and let the other person try to break it.

## The constraint game

When the list runs out, the **test writer** may impose one constraint on the
implementer. The point is that the person writing the test controls the design,
which is the whole reason ping-pong is interesting. Some that bite:

- No lookup table of symbol/value pairs.
- No recursion.
- At most one loop.
- `toRoman` must not exceed ten lines.
- Add `toArabic` and round-trip every number from 1 to 399.

## The good part

The payoff is test 5. Up to that point the pair can coast on a shared, wrong
mental model, and the disagreement only shows up when the code has to change
shape. Watch who notices first, and watch what the other person does with it.
