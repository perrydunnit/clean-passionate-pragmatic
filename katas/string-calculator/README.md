# String Calculator Kata

A TDD kata: grow a calculator one failing test at a time.

## The only rules you need

- `add(numbers)` returns the sum of the numbers in the string.
- An empty string sums to **0**.
- Numbers are separated by commas. A **newline** is also a separator.
- A leading `//[delimiter]` line declares a custom delimiter for the rest of
  the string.
- **Negative numbers are not allowed.** `add` throws an error that names every
  negative it found.

## How to run

From the repository root:

```powershell
node --test
```

Or run just this kata:

```powershell
node --test katas/string-calculator/test.ts
```

## How to work the kata

- Write **one failing test** — no more than is needed to fail. Not compiling is
  failing.
- Make it pass with the **smallest change that could work**. Cheating is
  allowed and encouraged; the next test will call the bluff.
- **Refactor before moving on**: wordsmith the names, extract small helpers,
  remove duplication.
- Then take the next line of the list.

## Write the tests in this order

Do them **one at a time**, in order. Each test must fail first, then pass with
the simplest code, then be refactored. The order is the kata.

| # | Name | Input | Expected |
|---|------|-------|----------|
| 1 | Empty string | `''` | `0` |
| 2 | One number | `'1'` | `1` |
| 3 | Two numbers | `'1,2'` | `3` |
| 4 | Many numbers | `'1,2,3,4,5'` | `15` |
| 5 | Newlines | `'1\n2,3'` | `6` |
| 6 | Custom delimiter | `'//;\n1;2'` | `3` |
| 7 | One negative | `'-1,2'` | throws `Negatives not allowed: -1` |
| 8 | Several negatives | `'-1,-2'` | throws `Negatives not allowed: -1, -2` |

Test 1 is already in `test.ts` as the seed. Add tests 2-8 one at a time.

## Guidance per test

1. **Empty string** — the seed. `add()` returns 0; green from the start.
2. **One number** — turn the string into a number. The simplest thing that works.
3. **Two numbers** — now you must split. Do not generalize yet: handling
   exactly two numbers is a legitimate step.
4. **Many numbers** — the two-number special case collapses into one loop.
   Notice how much simpler the code got once the test asked for it.
5. **Newlines** — one more separator. Normalize the input *before* you split;
   this is where "read the input" and "sum the numbers" should part company.
6. **Custom delimiter** — *the crux.* The first line is a **header**, not data.
   Resist regex cleverness. Extract "read the delimiter" and "read the numbers"
   into separate, named steps.
7. **One negative** — a new kind of behavior: rejecting input. Throw an error
   whose message names the offending number.
8. **Several negatives** — confirms you **collect** the offenders instead of
   failing on the first one.

## After all eight pass

Read `add()`. Is it doing more than one thing? Extract small, named helpers and
place them **below** `add()` so the file reads top-down. Then read it again: does
the function read like a sentence?

## The good part

The payoff arrives at test 6, when parsing stops being "split on a comma" and
becomes a small pipeline. There is no target implementation here on purpose —
the ordered tests do the designing.
