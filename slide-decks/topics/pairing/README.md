# Pairing

## Recommended prerequisites

[Test-Driven Development](../tdd/) — ping-pong is a TDD format, and the workshop assumes you can already run the red-green-refactor loop.

[Small Functions](../functions/) — the refactor half of every exchange is where code gets cleaned.

## Reading Assignment

**Required for presenters:** Read Chapter 12, "Collaboration," from [*The Clean Coder*](https://openlibrary.org/books/OL25108903M/The_Clean_Coder) (pages 157-166) before leading this session. Add Chapter 4, "Coding" (pages 62-75), Chapter 11, "Pressure" (pages 153-155), and Chapter 14, "Mentoring, Apprenticeship, and Craftsmanship" (pages 183-184). Chapter 6, "Practicing" (pages 88-92) describes the dojo formats the workshop borrows.

**Suggested for attendees:** Reading Chapter 12 beforehand is encouraged but optional.

From [*The Pragmatic Programmer*](https://openlibrary.org/books/OL7408140M/The_Pragmatic_Programmer), skim "Pride and Prejudice," especially Tip 70, "Sign Your Work."

From [*The Passionate Programmer*](https://openlibrary.org/books/OL25019226M/The_passionate_programmer), skim "Be the Worst" (pages 34-36), "Find a Mentor" and "Be a Mentor" (pages 70-75), "Being Present" (pages 154-157), and "That Fat Man in the Mirror" (pages 192-194).

The readings establish the central ideas for this session: pairing is the professional default, it is the most effective form of code review, and help is an obligation in both directions.

## Note on the reading

This is the thinnest topic in the series, by a wide margin, and the imbalance is worth knowing before you plan the session.

- ***The Clean Coder* carries almost all of it.** The substantive material is a named section, "Pairing," in Chapter 12, plus the "Help" section of Chapter 4, "Get Help" in Chapter 11, and the apprenticeship passage in Chapter 14. The Zone, interruptions, writer's block, and crisis discipline each add a paragraph.
- ***The Pragmatic Programmer* has one paragraph.** It appears in "Sign Your Work," and only to say that communal code ownership needs additional practices "such as pair programming" to guard against anonymity. There is no pairing section.
- ***The Passionate Programmer* contains no pairing at all.** The nearest material is about mentorship, proximity, and choosing who you work among — which is why it is on the reading list, but it is adjacent rather than on topic.
- ***Clean Code* contains nothing.** Searched; the word "pair" appears five times and never about pairing.

What the four books do **not** cover: driver/navigator mechanics, how to open and close a session, how to give feedback to a pair, remote and distributed pairing, mob programming, or the research literature. If you want those, you will need a source outside this series. The deck deliberately does not invent them — the workshop format it teaches (ping-pong, role swapping, the test writer setting constraints) is the one the books actually describe.

This deck is a static Reveal.js presentation. Run [online](https://perrydunnit.github.io/clean-passionate-pragmatic/slide-decks/topics/pairing/) or run a local static server from the repository root:

```powershell
npx --yes http-server .
```

Keep the terminal running, then open `slide-decks/topics/pairing/` from the printed URL. Use the arrow keys or Space to advance, press `Esc` for overview mode, and press `S` for speaker view. After editing, use `Ctrl+Shift+R` to hard-reload the deck; restarting the server is not necessary. If an existing speaker window says `localhost refused to connect`, confirm the server is running, close the old window, and press `S` again after the hard reload.

## Workshop Kata

The hands-on workshop uses the **Roman Numerals** kata in `katas/roman-numerals/`. Run its tests from the repository root:

```powershell
node --test
```

The kata is deliberately trivial: the point is the interaction, not the algorithm. Pairs work the ordered list ping-pong — one writes the failing test, the other makes it pass, both refactor, swap — and then play the constraint game once the list runs out.
