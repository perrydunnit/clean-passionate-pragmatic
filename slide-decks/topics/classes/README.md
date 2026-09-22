# Classes & Modules

## Recommended prerequisites

[Small Functions](../functions/) — cohesive classes are built from small, single-purpose methods.

## Reading Assignment

**Required for presenters:** Read Chapter 10, "Classes," from [*Clean Code*](https://openlibrary.org/books/OL26222911M/Clean_Code) (pages 135-154) before leading this session.

**Suggested for attendees:** Reading Chapter 10 beforehand is encouraged but optional.

From [*The Pragmatic Programmer*](https://openlibrary.org/books/OL7408140M/The_Pragmatic_Programmer), also skim the "Orthogonality" and "The Evils of Duplication" topics.

The chapter establishes the central idea for this session: a class should have one reason to change — the Single Responsibility Principle.

This deck is a static Reveal.js presentation. Run [online](https://perrydunnit.github.io/clean-passionate-pragmatic/slide-decks/topics/classes/) or run a local static server from the repository root:

```powershell
npx --yes http-server .
```

Keep the terminal running, then open `slide-decks/topics/classes/` from the printed URL. Use the arrow keys or Space to advance, press `Esc` for overview mode, and press `S` for speaker view. After editing, use `Ctrl+Shift+R` to hard-reload the deck; restarting the server is not necessary. If an existing speaker window says `localhost refused to connect`, confirm the server is running, close the old window, and press `S` again after the hard reload.

## Workshop Kata

The hands-on workshop uses the **Statement** kata in `katas/statement/`. Run its tests from the repository root:

```powershell
node --test
```

The kata ships with a working-but-bloated class and a green test suite. The exercise is to extract small, cohesive classes while keeping the tests green after every move.
