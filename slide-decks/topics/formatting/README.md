# Formatting

## Recommended prerequisite

[Small Functions](../functions/) — the stepdown rule arranges functions into a top-down story, which only works once functions are small and single-purpose.

## Reading Assignment

**Required for presenters:** Read Chapter 5, "Formatting," from [*Clean Code*](https://openlibrary.org/books/OL26222911M/Clean_Code) (pages 75-90) before leading this session.

**Suggested for attendees:** Reading Chapter 5 beforehand is encouraged but optional. It is short, full of immediate examples, and provides useful context for the discussion.

The chapter establishes the central idea for this session: a file should read like a top-down narrative — the stepdown rule.

This deck is a static Reveal.js presentation. Run [online](https://perrydunnit.github.io/clean-passionate-pragmatic/slide-decks/topics/formatting/) or run a local static server from the repository root:

```powershell
npx --yes http-server .
```

Keep the terminal running, then open `slide-decks/topics/formatting/` from the printed URL. Use the arrow keys or Space to advance, press `Esc` for overview mode, and press `S` for speaker view. After editing, use `Ctrl+Shift+R` to hard-reload the deck; restarting the server is not necessary. If an existing speaker window says `localhost refused to connect`, confirm the server is running, close the old window, and press `S` again after the hard reload.

## Workshop Kata

The hands-on workshop uses the **Receipt** kata in `katas/receipt/`. Run its tests from the repository root:

```powershell
node --test
```

The kata ships with a working-but-scrambled file and a green test suite. The exercise is to reorder the file top-down (the stepdown rule) while keeping the tests green after every move.
