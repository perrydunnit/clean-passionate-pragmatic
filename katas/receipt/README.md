# Receipt Kata

A refactoring kata: reorder a scrambled file so it reads top-down.

## The exercise

`receipt.ts` contains a working receipt printer whose functions are in a
haphazard order, and `test.ts` has green tests. Reorder and regroup the file so
it reads like a top-down narrative — no logic changes — keeping the tests green
after every move.

## How to run

From the repository root:

```powershell
node --test
```

## The stepdown check

After each move, read the file top to bottom and ask: "Can a reader understand
each function using only the functions below it?" If the reader must scroll up
or jump around, the structure still has a broken window.

## Where to start

1. Find the entry point (`printReceipt`) — it is the headline; move it to the top.
2. List the helpers it calls, and place each just below it, in call order.
3. Keep the `LineItem` type near the top, before its first use.
4. Add blank lines between clusters to make the paragraphs visible.

## The good part

The payoff is the moment the file reads like a story: the headline first, helpers
below in the order they are called. The final order is yours to discover.
