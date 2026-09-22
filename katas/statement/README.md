# Statement Kata

A refactoring kata: split a bloated class into small, cohesive classes.

## The exercise

`statement.ts` contains a working `Statement` class that does too much: it stores
rentals, prices them, awards points, and formats the statement. `test.ts` has
green tests. Extract small, cohesive classes — no behavior changes — keeping the
tests green after every move.

## How to run

From the repository root:

```powershell
node --test
```

## The cohesion check

For each method, ask: "Does this depend on the whole object, or just part of it?"
A method that depends on part of the object may belong in a smaller class.

## Where to start

1. Find the methods that depend on a **single rental**, not the whole list.
2. Those methods are the seam — they likely belong on a `Rental` class.
3. Keep `Statement` as the list owner and formatter.
4. Name each new class so its one reason to change is obvious.

## The good part

The payoff is discovering the seam: the methods that only touch one element of
the list. The final class design is yours to discover.
