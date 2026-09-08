# Clean, Passionate, Pragmatic

This is a series of presentations to help modern programmers leverage some of the seemingly-forgotten ideas from the past to stay professional in the age of AI and other tempting tools.

The ideas in these presentations are compiled from:
- [The Clean Coder](https://openlibrary.org/books/OL25108903M/The_Clean_Coder) by Robert C. Martin
- [Clean Code](https://openlibrary.org/books/OL26222911M/Clean_Code) by Robert C. Martin
- [The Pragmatic Programmer](https://openlibrary.org/books/OL7408140M/The_Pragmatic_Programmer) by Andy Hunt and Dave Thomas
- [The Passionate Programmer](https://openlibrary.org/books/OL25019226M/The_passionate_programmer) by Chad Fowler

## The Presentations
### Vibe
These presentations are intended to be given with the most interactive vibe possible. My intent is to give them only in-person, and only with groups of 10 or fewer people. The ideas in them are only valuable if people choose to engage with them.

My preference is that people opt-in to participating, as this is the most likely circumstance for honest engagement.

### The Decks
1. There is an intro slide deck outlining why this is necessary, and summarizing how the ideas that follow can be useful in our current environment. This deck is also likely a good candidate to share with leadership if they need to be involved.
[View the Mastering AI Craftsmanship intro deck](https://perrydunnit.github.io/clean-passionate-pragmatic/slide-decks/1.%20Intro/)
2. A collection of topic decks, each addressing a specific idea.
   1. Topic decks should contain
      1. a topic summary
      2. current/modern context
      3. slides to guide explanation and discussion
      4. kata(s) to drive the point home and teach through "play"
      5. suggested reading
   2. Completed topic decks:
      1. [Meaningful Naming](https://perrydunnit.github.io/clean-passionate-pragmatic/slide-decks/2.%20Naming/)
         - Relevant reading: Chapter 2, "Meaningful Names," from [*Clean Code*](https://openlibrary.org/books/OL26222911M/Clean_Code), pages 17-30.

### Run Locally
To run a deck locally with speaker view and Markdown loading enabled, start a static web server from the repository root:

```powershell
npx --yes http-server .
```

Keep that terminal running while presenting. Open the printed local URL, then navigate to `slide-decks/1.%20Intro/` or `slide-decks/2.%20Naming/`. Press `S` in the presentation to open speaker view in a new window. This avoids the `origin null` restrictions that apply when opening the HTML files directly with `file://`.

After editing CSS, Markdown, or HTML, use `Ctrl+Shift+R` for a hard reload; restarting the server is not necessary. If speaker view says `localhost refused to connect`, confirm the server is still running, close the old speaker window, hard-reload the presentation, and press `S` again. Restart the server only if the process has stopped or its port has changed.

For a globally installed command instead:

```powershell
npm install --global http-server
http-server .
```