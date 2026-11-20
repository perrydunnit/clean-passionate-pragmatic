# Ethos

Decks about being a practitioner rather than about a technique. The sibling of [Topics](../topics/): where a topic deck teaches something you do to code, an ethos deck is about the conditions you do it under and the person doing it.

## What lives here

Ethos is a **collection**, and everything in a collection shares a look. These decks are paper and ink, serif, and scenario-driven, so the room knows what kind of session it is in from the first slide. Topic decks are dark and code-driven for the same reason.

The collection holds **series**, not decks directly. A series is an ordered set of decks that are meant to be taken in sequence, because each one assumes the vocabulary or the practice of the one before it.

| Series | Decks | Status |
|---|---|---|
| [Craft Under Pressure](craft-under-pressure/) — role conflict and competing demands | 3 | Complete |

## Naming

- Collection and series directories are unnumbered and sort alphabetically. Series are independent of each other.
- Decks inside a series are numbered with a zero-padded prefix (`01-`, `02-`) so their order on disk is their order in the room.

## Running a deck

From the repository root:

```powershell
npx --yes http-server .
```

Then open the deck under the printed local URL. The Markdown files are fetched over HTTP, so `file://` will not load them. Press `S` for speaker view, `Esc` for overview. After editing, `Ctrl+Shift+R` to hard-reload.

## Theme

[`theme.css`](theme.css) belongs to the collection and is linked **instead of** `slide-decks/common.css`. Do not include both; they define the same variables.

Notes on the visual system, and the reason each change is earned by the content, are in `scratch/outlines/2. Craft Under Pressure.md`.
