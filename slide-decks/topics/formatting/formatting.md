## Since We Last Met
### What has your experience been?

* When you read unfamiliar code this week, what made it easy or hard to follow?
* Did you find yourself scrolling up and down to keep a mental map?
* What did you notice about where things lived in the files you read?

Note:
Welcome everyone and give the group a few quiet moments before opening the discussion. Invite concrete moments from the past week, especially times when the *order* of a file — where functions lived relative to each other — helped or hurt their reading. Capture themes that connect to today's focus: vertical structure and the stepdown rule.

---

## Reading Assignment
### Come prepared, or come curious

* **Presenter:** Read Chapter 5, "Formatting," from *Clean Code* (pages 75-90) before leading this session. The book is linked in the project README.
* **Attendees:** Reading Chapter 5 beforehand is suggested, but optional.
* This discussion assumes functions are already small — see the **Small Functions** deck if not.
* The star idea: a file should read like a **top-down narrative**.

Note:
The reading is required preparation for you as the presenter. Be comfortable with the newspaper metaphor, vertical openness and density, vertical distance, and especially the stepdown rule. For attendees, frame the chapter as an invitation, not a gate. Note that this topic builds on Small Functions — flag that as a recommended prerequisite.

---

# Formatting
## The Stepdown Rule

"Code should read like a top-down narrative."
— Robert C. Martin, *Clean Code*

Note:
Welcome everyone to today's topic. Where Small Functions was about the words and shape of a single function, today is about how we arrange those functions into a file. We are going to look at the stepdown rule: a simple discipline that turns a file from a pile of code into a story a reader can descend through.

---

## The Newspaper Metaphor
### Files Read Like Articles

* A newspaper article opens with the **headline and summary**, then fills in detail.
* A file should do the same: the **most important, high-level ideas come first**; details follow below.
* A reader skims the top and descends only as far as their need takes them.

Note:
This is the opening idea of the Formatting chapter. The top of a file is the headline: the public surface, the entry point, the big idea. As you read down, you meet more detail. A reader should be able to stop early and still have the gist of the whole file. Ask the room: when you open a file, where do you look first? Usually the top.

---

## Vertical Openness & Density
### Blank Lines Are Paragraph Breaks

* Use **blank lines** to separate distinct concepts — just like paragraphs in prose.
* Within a group of related lines, keep them **tight** (no blank lines).
* The result: the reader's eye sees **clusters of ideas**, not a wall of text.

Note:
This is the "vertical openness and density" section. Each blank line signals that one thought has ended and another begins. Dense clusters of related lines read as a single unit; openness between clusters separates units. Show a before/after if time allows: the same code with blank lines removed versus placed deliberately.

---

## Vertical Distance
### Keep Related Ideas Close

* Concepts that **depend on each other** should live close together in the file.
* A function should not be separated from its helpers by dozens of lines of unrelated code.
* Related code that is **close** reads as a unit; related code far apart forces scrolling and searching.

Note:
This is the "vertical distance" section. The reader's short-term memory is limited. If a function appears on line 40 and its helper on line 400, the reader must hold the first in mind while hunting for the second. Keep dependent functions near each other so the whole concept fits on one screen.

---

## The Stepdown Rule
### Read Down One Level at a Time

* **"We want the code to read like a top-down narrative."**
* Every function should be followed by those at the **next level of abstraction**.
* Reading top to bottom, you descend **one abstraction level at a time** — never jumping between unrelated heights.

Note:
This is the heart of the session. The stepdown rule says a file should read like a story: the high-level function comes first, and each helper it calls is defined just below it, in the order it is called, each helper followed by its own helpers. The reader descends smoothly: "This is the plan... here is step one... here is how step one works... here is step two..." They never have to hunt.

---

## Horizontal Formatting
### Keep Lines Scannable

* Keep lines **short enough to read without scrolling sideways**.
* **Indentation reveals nesting**; deep nesting is a smell that the function is doing too much.
* A line should communicate **one idea**, not five.

Note:
This is the "horizontal formatting" section. Vertical structure gets most of the attention, but horizontal structure matters too. If lines wrap off the screen, the reader loses the thread. If nesting runs eight levels deep, the function is trying to tell too many stories at once. Shallow, short, single-purpose lines are the building blocks of a top-down narrative.

---

## The AI Angle
### Generated Code Arrives Scrambled

* AI assistants often emit files with **functions in a haphazard order** — or one giant function at the bottom.
* The professional move is to **reorder and regroup**: put the high-level story on top, helpers below.
* The stepdown rule is our **checklist** for turning a generated dump into a readable file.

Note:
Tie this to the series theme. Generated code is often logically correct but structurally scrambled: the entry point buried, helpers scattered, related ideas far apart. Our job is to review the structure, not just the logic. Apply the stepdown rule: order top-down, group related helpers, and leave a story behind.

---

# Demonstration
## Reordering a Scrambled File

Note:
We are going to watch a small, working file get reordered so it reads top-down — no logic changes, only arrangement. This is our warmup for the hands-on workshop.

--

## Before: Logically Fine, Structurally Scrambled

```typescript
export function tax(items: LineItem[]): number {          // helper, but FIRST
    return subtotal(items) * 0.08;
}

export function printReceipt(items: LineItem[]): string { // entry point, in the MIDDLE
    const lines = items.map(formatLine);
    lines.push(`Subtotal: $${subtotal(items).toFixed(2)}`);
    lines.push(`Tax: $${tax(items).toFixed(2)}`);
    lines.push(`Total: $${total(items).toFixed(2)}`);
    return lines.join('\n');
}

export function total(items: LineItem[]): number {
    return subtotal(items) + tax(items);
}

export function subtotal(items: LineItem[]): number {     // most-called, at the BOTTOM
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}
```

* **Discussion:** Where is the "headline"? How far must a reader jump to follow the story?

Note:
Show this file and ask the room to trace it. Every function works, and the tests pass, but the reading order is all wrong: a leaf helper on top, the entry point in the middle, the foundational helper at the bottom. The reader must bounce around to reconstruct the story.

--

## After: A Top-Down Narrative

```typescript
export function printReceipt(items: LineItem[]): string { // the headline, FIRST
    const lines = items.map(formatLine);
    lines.push(`Subtotal: $${subtotal(items).toFixed(2)}`);
    lines.push(`Tax: $${tax(items).toFixed(2)}`);
    lines.push(`Total: $${total(items).toFixed(2)}`);
    return lines.join('\n');
}

export function formatLine(item: LineItem): string {      // helpers, below, in call order
    return `${item.name} x${item.quantity} @ $${item.price.toFixed(2)}`;
}

export function subtotal(items: LineItem[]): number {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export function tax(items: LineItem[]): number {
    return subtotal(items) * 0.08;
}

export function total(items: LineItem[]): number {
    return subtotal(items) + tax(items);
}
```

* Same behavior, same tests. **Only the order changed** — and the reading experience transformed.

Note:
Point out that no logic changed: the functions are identical, just reordered and grouped. Now `printReceipt` is the headline, and its helpers follow in the order they are called. The reader descends smoothly and can stop early.

---

# Hands-On Workshop
## The Receipt Kata

"Don't live with broken windows."
— Andy Hunt & Dave Thomas, *The Pragmatic Programmer*

Note:
Transition to the workshop. We will practice reordering a real, working-but-scrambled file — the Receipt kata — so it reads top-down, keeping its tests green the entire time.

--

## The Core Practice: The Stepdown Check

* **Reorder, then verify the story.**
* **The Stepdown Check:** read the file top to bottom and ask, "Can a reader understand each function using only the functions below it?"
* If the reader must scroll **up** or jump around, the structure still has a broken window.

Note:
Explain that reordering for readability is a loop: move one thing, then re-read as a reader would. The Stepdown Check is our acceptance test — does the file now read like a story? If not, what is still out of place?

--

## The Format: Ping-Pong Reorder

* Pair up with a teammate at a single workstation.
* **Developer A** moves one function (or group) toward top-down order.
* **Developer B** runs the tests to confirm **Green**.
* **Together**, apply the Stepdown Check and decide the next move.
* Swap roles and repeat until the file is a narrative.

Note:
Organize the team into pairs. Open the Receipt kata in `katas/receipt/`. The tests must stay green after every move — that is the safety net. Emphasize small moves: one function at a time, then re-read.

--

## Guidance: Where to Start

* Find the **entry point** (`printReceipt`) — it is the headline; move it to the top.
* Then list the helpers it calls, and place each **just below** it, in call order.
* Keep the `LineItem` type near the top, before its first use.
* Add **blank lines** between the clusters to make the paragraphs visible.

Note:
Give the room a concrete starting path without doing the whole job: (1) find the headline, (2) order helpers by first call, (3) keep the type close to its users, (4) use blank lines for paragraph breaks. The final order is theirs to discover.

---

## Debrief
### Did Order Change How You Read?

* Was the "after" file easier to skim than the "before" file? **Why?**
* Which single move made the biggest difference?
* **The Economic Reality:** a top-down file means the next reader starts at the top and never hunts.

Note:
Bring the room back together for a five-minute debrief. Ask teams to compare their final orderings — they may differ slightly, and that is fine. The test is not identical output, but that every version reads top-down. Point out the win is for the next reader, who is usually us, six months from now.

---

## Summary
### Leave the File Better Than You Found It

* "Don't live with broken windows." — Andy Hunt & Dave Thomas
* Every function we move into story order is an act of care for the next reader.
* **The Challenge:** this week, open one file and reorder it top-down before checking in.

Note:
Wrap up. Challenge the team to carry the stepdown rule into their production work this week — especially into any file that came from a generator or assistant. Thank everyone for their engagement!
