# Small Functions

## Recommended prerequisite

[Meaningful Naming](../naming/) — extracting small, single-purpose helpers only works if the helpers are well named.

## Reading Assignment

**Required for presenters:** Read Chapter 3, "Functions," from [*Clean Code*](https://openlibrary.org/books/OL26222911M/Clean_Code) (pages 31-52) before leading this session.

**Suggested for attendees:** Reading Chapter 3 beforehand is encouraged but optional. It is short, full of immediate examples, and provides useful context for the discussion.

The chapter establishes the central idea for this session: functions should be small, do one thing, and live at one level of abstraction.

This deck is a static Reveal.js presentation. Run [online](https://perrydunnit.github.io/clean-passionate-pragmatic/slide-decks/topics/functions/) or run a local static server from the repository root:

```powershell
npx --yes http-server .
```

Keep the terminal running, then open `slide-decks/topics/functions/` from the printed URL. Use the arrow keys or Space to advance, press `Esc` for overview mode, and press `S` for speaker view. After editing, use `Ctrl+Shift+R` to hard-reload the deck; restarting the server is not necessary. If an existing speaker window says `localhost refused to connect`, confirm the server is running, close the old window, and press `S` again after the hard reload.

## Workshop Katas

The demonstration uses the **Word Wrap** kata in `katas/word-wrap/`; the hands-on workshop uses the **Bowling Game** kata in `katas/bowling-game/`. Run tests from the repository root:

```powershell
node --test
```

The Bowling Game kata ships with a seed test and a guided, ordered test list (see `katas/bowling-game/README.md`). The full reference solution is in the deck's speaker notes, so attendees still get the "aha" of discovering it themselves.
