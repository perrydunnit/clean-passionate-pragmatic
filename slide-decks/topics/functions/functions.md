## Since We Last Met
### What has your experience been?

* When you read unfamiliar code this week, what made it easy or hard to follow?
* Did you catch yourself renaming or rearranging anything as you read?
* What still feels hard when you sit down with code you didn't write?

Note:
Welcome everyone and give the group a few quiet moments before opening the discussion. Invite concrete moments from the past week, especially a time when a long or tangled function slowed them down. Capture themes that connect to today's focus: how small, single-purpose functions make code readable.

---

## Reading Assignment
### Come prepared, or come curious

* **Presenter:** Read Chapter 3, "Functions," from *Clean Code* (pages 31-52) before leading this session. The book is linked in the project README.
* **Attendees:** Reading Chapter 3 beforehand is suggested, but optional.
* Skim Chapter 5, "Formatting," if you want a preview of where this leads (the stepdown rule).
* The star ideas: functions should be **small**, **do one thing**, and live at **one level of abstraction**.

Note:
The reading is required preparation for you as the presenter. Be comfortable drawing on Chapter 3's examples and connecting them to the room's experience. For attendees, frame the chapter as an invitation, not a gate — the deck and discussion should stand on their own either way.

---

# Small Functions
## Do One Thing

"Functions should do one thing. They should do it well. They should do it only."
— Robert C. Martin, *Clean Code*

Note:
Welcome everyone to today's topic. We are going to look at the single most transferable habit for readable code: keeping functions small and single-purpose. Small functions are the raw material that every other readability technique builds on — including the stepdown rule we'll meet in the Formatting discussion.

---

## The Core Persuasion
### Small Functions Make the File Readable

* A file made of many small, well-named functions reads like an **outline**.
* A file made of a few giant functions hides its story **inside** the code.
* Small functions are cheaper to **read, test, and change** — and easier to trust.

Note:
This is the economic argument for small functions. A giant function forces the reader to hold all of its details in their head at once. A file of small functions lets the reader take in one idea at a time, skip what they don't need, and trust that each named piece does what it says.

---

## Small
### How Small Is Small?

* Aim for functions **short enough to take in at a glance** — rarely more than a handful of lines.
* "Blocks within if, else, and while statements should be one line long." — *Clean Code*
* A long function is almost always **several functions wearing a trench coat**.

Note:
Chapter 3's advice is blunt: functions should be small, and smaller than that. The one-line-block rule is a great heuristic: if the body of an if, else, or while is more than a line, extract it into a named function. Each extraction names a step and shortens the caller.

---

## Do One Thing
### The Single-Responsibility Test

* A function should do **exactly one thing**.
* Test: can you describe what it does without the word **"and"**?
* If it performs several steps, each step should be a **named call**, not inline code.

Note:
This is the "Do One Thing" section. A function does more than one thing when you can extract another function from it with a name that is not merely a restatement of its implementation. If `processOrder` validates, prices, and saves, it is three functions in one — extract them.

---

## One Level of Abstraction per Function
### Don't Mix High and Low

* A function should operate at a **single, consistent level of abstraction**.
* Mixing "get the page" with "parse this byte" forces the reader to change gears.
* Extract the low-level details into **named helpers one level down**.

Note:
This is the "One Level of Abstraction per Function" idea. If a function talks business rules and then drops into string manipulation, the reader's mind bounces between the map and the terrain. The fix: extract the low-level work into a well-named helper, and call it — so the original function stays at one height.

---

## The Stepdown Rule (Preview)
### Read Down, One Level at a Time

* Every function should be followed by the functions it calls, at the **next level of abstraction**.
* The file becomes a **story**: read the top, then descend only as far as you need.
* This is the subject of our **Formatting** discussion — today we build its building blocks.

Note:
Give a one-slide preview of the stepdown rule, but don't teach it here. The point today is that the stepdown rule only works if the functions are small enough to arrange into a story. Small functions come first; the arrangement is a later discussion.

---

## Function Arguments
### Fewer Is Better

* **Zero or one** argument is ideal; two is okay; three needs a good reason.
* Flag arguments (`render(true)`) split the function into **two different stories**.
* If arguments travel together (`start, end`), they may be a **missing object**.

Note:
This is the "Function Arguments" section of Chapter 3. Arguments add cognitive load — each one is something the reader must track. Flag arguments are a red flag: a boolean that switches behavior means the function is really two functions. And arguments that always travel together suggest a missing concept.

---

## The AI Angle
### Generated Code Arrives Flat

* AI assistants often emit **one long, flat method** — everything at the same level.
* The professional move is to **review and reshape**: pull the narrative apart into named steps.
* Small, named functions are how we turn a generated blob into readable code.

Note:
Tie this to the series theme. Generators and assistants produce working code with no narrative structure: one long function where every concern sits at the same level. Our job is not to accept that blob. We name the steps, extract helpers, and leave small functions behind. The tool writes the first draft; we write the final one.

---

# Demonstration
## Reshaping the Blob

Note:
We are going to watch a working but cryptic function get reshaped into small, single-purpose helpers, one deliberate step at a time, keeping its tests green throughout. This is our warmup for the hands-on workshop.

--

## Step 1: The Cryptic Scaffolding

```typescript
export function wrap(s: string, n: number): string[] {
    const a = s.split(' ');
    const r: string[] = [];
    let c = '';
    for (const x of a) {
        if (c === '') { c = x; }
        else if (c.length + 1 + x.length <= n) { c += ' ' + x; }
        else { r.push(c); c = x; }
    }
    if (c !== '') { r.push(c); }
    return r;
}
```

* **Discussion:**
  * What is this function doing?
  * How many different ideas are flattened into this one loop?

Note:
Show the code and ask the room to describe it out loud. The logic is simple, but its purpose is opaque: splitting into words, measuring line length, deciding what fits, and flushing a finished line are all flattened into one loop with single-letter names. The reader must reconstruct the story from scratch.

--

## Step 2: Wordsmith First

```typescript
export function wrap(text: string, columnWidth: number): string[] {
    const words = text.split(' ');
    const lines: string[] = [];
    let currentLine = '';
    for (const word of words) {
        if (currentLine === '') { currentLine = word; }
        else if (currentLine.length + 1 + word.length <= columnWidth) { currentLine += ' ' + word; }
        else { lines.push(currentLine); currentLine = word; }
    }
    if (currentLine !== '') { lines.push(currentLine); }
    return lines;
}
```

* **Observation:** No logic changed. But now the reader can see it is wrapping `text` into `lines` at a `columnWidth`.

Note:
The first refactor is wordsmithing, not logic. `s` becomes `text`, `n` becomes `columnWidth`, `a` becomes `words`, `r` becomes `lines`, `c` becomes `currentLine`, `x` becomes `word`. This removes all mental mapping before we touch structure. Reveal the domain first.

--

## Step 3: Extract One Idea at a Time

```typescript
function fitsOnLine(line: string, word: string, columnWidth: number): boolean {
    if (line === '') { return true; }
    return line.length + 1 + word.length <= columnWidth;
}

function appendWord(line: string, word: string): string {
    if (line === '') { return word; }
    return line + ' ' + word;
}
```

* Each helper captures **one level of abstraction** below the caller.
* Placed **directly beneath** the function that uses them.

Note:
This is where small functions start paying off. We lift each small idea — "does this word fit on this line?" and "add a word to this line" — into a helper with a name that reads like a sentence. Each helper does one thing, at one level of abstraction.

--

## Step 4: The Top-Down Narrative

```typescript
export function wrap(text: string, columnWidth: number): string[] {
    const lines: string[] = [];
    let currentLine = '';

    for (const word of text.split(' ')) {
        if (fitsOnLine(currentLine, word, columnWidth)) {
            currentLine = appendWord(currentLine, word);
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    }

    if (currentLine !== '') {
        lines.push(currentLine);
    }
    return lines;
}
```

* `wrap` now reads like a **story**: split, try to fit, flush when full, finish.
* The reader can **stop at the top** and understand the whole file.

Note:
Now `wrap` reads top-down as a short narrative, and each helper sits below it at the next level of abstraction. Same behavior, same tests — a completely different reading experience. This is exactly the payoff we want attendees to feel in the workshop.

---

# Hands-On Workshop
## The Bowling Game

"Deliberate practice is not about doing what you're good at. It is about stretching your limits." — Chad Fowler

Note:
Transition to the workshop. We will practice TDD on the Bowling Game kata, writing tests in a strict, guided order. The goal is not the bowling — it is to feel how small, single-purpose functions emerge naturally when you drive with tests one step at a time.

--

## The Rules You Need

* A game has **10 frames**; each frame has up to **2 rolls**.
* A **spare** (10 pins in 2 rolls) adds the **next roll** as a bonus.
* A **strike** (10 pins in 1 roll) adds the **next two rolls** as a bonus.
* The 10th frame allows extra rolls to award the bonus.
* A perfect game — 12 strikes — scores **300**.

Note:
Give the room only the domain rules above. Do NOT explain an algorithm. Everything else is theirs to discover. This is the entire knowledge they need; the rest is design.

--

## The Ordered Test List

1. **Gutter game** — 20 rolls of 0 → **0** *(already in the kata seed)*
2. **One roll** — roll 5, then nothing else → **5**
3. **All ones** — 20 rolls of 1 → **20**
4. **One spare** — 5, 5, 3, then zeros → **16**
5. **One strike** — 10, 3, 4, then zeros → **24**
6. **Perfect game** — 12 rolls of 10 → **300**

Note:
Walk the room through this exact list. Emphasize: do them one at a time, in order, and do not skip ahead. The order is deliberate — the first three build confidence, the fourth is the crux, and the last two confirm the structure generalizes.

--

## Why This Order?

* Tests 1-3 are **warming up**: `roll()` must remember pins; `score()` can simply sum.
* Test 4 is the **crux**: a spare's bonus is the *next* roll — plain summing is no longer enough.
* Tests 5-6 **confirm** the structure handles strikes and the 10th frame.

Note:
Explain the rhythm without revealing the solution. The jump from test 3 to test 4 is the whole point of the kata — it is where "sum all the rolls" breaks and a deeper structure must appear. That moment of productive frustration is the good part; don't shortcut it.

--

## The Crux: Test 4

```typescript
const game = new BowlingGame();
game.roll(5); game.roll(5); game.roll(3); // spare, then 3
assert.equal(game.score(), 16);
```

* Resist adding **special cases**. Look for a **single, repeating structure**.
* Ask: **which roll belongs to which frame?**

Note:
This is the moment to let the room struggle for a few minutes. If they get stuck, ask the guiding question — "which roll belongs to which frame?" — but do not answer it. The aha is realizing the score is best computed frame by frame, not roll by roll.

--

## The Format: Ping-Pong

* **Developer A** writes the next failing test from the list.
* **Developer B** writes the simplest code to make it pass (Green).
* **Together**, refactor — keep it **small**, **one thing**, **one level**.
* Swap and repeat down the list.

Note:
Organize the team into pairs. The kata seed in `katas/bowling-game/` already has the first test. Pairs add tests 2-6 one at a time. Running tests should be a single command — `node --test` from the repo root. Emphasize small steps.

--

## Step 5: Make `score()` Small

* After all six tests pass, read `score()`. Is it doing **more than one thing**?
* Extract **named helpers** — spare?, strike?, bonus — and place them **below** `score()`.

Note:
Now bring it home. By test 6, a clean solution has appeared, but `score()` may still be doing several things. This is the stepdown discipline: extract `isSpare`, `isStrike`, `spareBonus`, `strikeBonus` and place them below `score()`. Reference solution for you, the presenter:

```typescript
export class BowlingGame {
    private rolls: number[] = [];

    roll(pins: number): void {
        this.rolls.push(pins);
    }

    score(): number {
        let total = 0;
        let frameIndex = 0;
        for (let frame = 0; frame < 10; frame++) {
            if (this.isStrike(frameIndex)) {
                total += 10 + this.strikeBonus(frameIndex);
                frameIndex += 1;
            } else if (this.isSpare(frameIndex)) {
                total += 10 + this.spareBonus(frameIndex);
                frameIndex += 2;
            } else {
                total += this.rolls[frameIndex] + this.rolls[frameIndex + 1];
                frameIndex += 2;
            }
        }
        return total;
    }

    private isStrike(frameIndex: number): boolean {
        return this.rolls[frameIndex] === 10;
    }

    private isSpare(frameIndex: number): boolean {
        return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10;
    }

    private strikeBonus(frameIndex: number): number {
        return this.rolls[frameIndex + 1] + this.rolls[frameIndex + 2];
    }

    private spareBonus(frameIndex: number): number {
        return this.rolls[frameIndex + 2];
    }
}
```

Walk through why each helper is small, named, and at one level of abstraction — and note they are ordered below `score()`, a preview of the stepdown rule.

---

## Debrief
### Did Small Steps Help?

* Was the ordered list easier than starting from scratch?
* Where did the crux bite, and what finally unlocked it?
* **The Economic Reality:** small functions are cheaper to read, test, and change.

Note:
Bring the room back together for a five-minute debrief. Ask pairs where they got stuck and what unlocked them. Point out that the ordered tests did the hard work of design: each test forced a small, honest step, and the small functions emerged as a result.

---

## Summary
### Write Stories, Not Blobs

* "Functions should do one thing. They should do it well. They should do it only." — Robert C. Martin
* Every small function you extract is an act of care for the next reader.
* **The Challenge:** this week, find one long method and split it into named steps before checking in.

Note:
Wrap up. Challenge the team to carry small-function discipline into their production work this week — especially into any code that came from a generator or assistant. Thank everyone for their engagement!
