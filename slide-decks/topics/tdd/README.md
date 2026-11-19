# Test-Driven Development

## Recommended prerequisite

[Small Functions](../functions/) — the refactor step in the cycle is where code gets cleaned, and cleaning means extracting small, well-named helpers.

## Reading Assignment

**Required for presenters:** Read Chapter 9, "Unit Tests," from [*Clean Code*](https://openlibrary.org/books/OL26222911M/Clean_Code) (pages 121-134), plus Chapter 5, "Test Driven Development," and Chapter 6, "Practicing," from [*The Clean Coder*](https://openlibrary.org/books/OL25108903M/The_Clean_Coder) (pages 77-94), before leading this session.

**Suggested for attendees:** Reading Chapter 9 beforehand is encouraged but optional. It is concrete, full of examples, and provides useful context for the discussion.

From [*The Pragmatic Programmer*](https://openlibrary.org/books/OL7408140M/The_Pragmatic_Programmer), also skim "Programming by Coincidence," "Code That's Easy to Test," and "Ruthless Testing."

From [*The Passionate Programmer*](https://openlibrary.org/books/OL25019226M/The_passionate_programmer), skim "Practice, Practice, Practice" — useful context for the kata.

The chapters establish the central ideas for this session: the three laws and the thirty-second cycle, what makes a test clean, and how writing the test first shapes the design.

**A note on scope:** this deck is about the cycle itself, not about who is sitting at the keyboard. Pairing has its own deck (see [Pairing](../pairing/)) and its own reading.

This deck is a static Reveal.js presentation. Run [online](https://perrydunnit.github.io/clean-passionate-pragmatic/slide-decks/topics/tdd/) or run a local static server from the repository root:

```powershell
npx --yes http-server .
```

Keep the terminal running, then open `slide-decks/topics/tdd/` from the printed URL. Use the arrow keys or Space to advance, press `Esc` for overview mode, and press `S` for speaker view. After editing, use `Ctrl+Shift+R` to hard-reload the deck; restarting the server is not necessary. If an existing speaker window says `localhost refused to connect`, confirm the server is running, close the old window, and press `S` again after the hard reload.

## Workshop Kata

The hands-on workshop uses the **String Calculator** kata in `katas/string-calculator/`. Run its tests from the repository root:

```powershell
node --test
```

The kata ships with a seed test and a guided, ordered test list (see `katas/string-calculator/README.md`). Work the list one test at a time: red, green, refactor, then the next line.
