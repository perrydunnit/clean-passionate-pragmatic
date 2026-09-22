# Word Wrap Kata

A refactoring kata: reshape a cryptic function into small, single-purpose helpers.

## The exercise

`word-wrap.ts` contains a working-but-cryptic `wrap` function and `test.ts` has
green tests. Refactor `wrap` so it reads like a top-down narrative, keeping the
tests green after every step.

## How to run

From the repository root:

```powershell
node --test
```

## Suggested path

1. **Wordsmith first** — rename the single-letter names to reveal the domain
   (`s` → `text`, `n` → `columnWidth`, `a` → `words`, `r` → `lines`,
   `c` → `currentLine`, `x` → `word`).
2. **Extract one idea at a time** — lift "does this word fit?" and "add a word
   to the line" into named helpers placed below the caller.
3. **Check** — after each extraction, read `wrap` top to bottom. Does it read
   like a sentence? Does each helper do one thing at one level of abstraction?

## Rules of the function

- `wrap(text, columnWidth)` returns the text broken into lines, each no wider
  than `columnWidth`, breaking only at spaces.
- Words that don't fit go on a new line; a word longer than the width gets its
  own line (no mid-word splitting).

## The good part

The payoff is the moment `wrap` reads like a story: "split, try to fit, flush
when full, finish." There is no target implementation here on purpose.
