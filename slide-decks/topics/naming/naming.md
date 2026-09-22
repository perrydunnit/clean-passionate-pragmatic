## Since We Last Met
### What has your experience been?

* What worked well when you tried these ideas?
* What surprised you or felt harder than expected?
* What would you like to approach differently next time?

Note:
Welcome everyone back and give the group a few quiet moments to think before opening the discussion. Invite people to share a concrete experience from the last conversation, especially a moment where an idea helped them or changed how they worked.

Make room for questions as well as successes. Ask what they were unsure how to handle, then let the group offer possibilities rather than trying to solve every situation yourself. Capture themes or questions that connect to today's focus on naming.

---

## Reading Assignment
### Come prepared, or come curious

* **Presenter:** Read Chapter 2, "Meaningful Names," from *Clean Code* (pages 17-30) before leading this session. The book is linked in the project README.
* **Attendees:** Reading the chapter beforehand is suggested, but optional.
* The chapter is conversational and full of immediate, punchy examples.
* It establishes the core idea that we write code for human readers and spend more than 10 times as much time reading code as writing it.

Note:
The reading is required preparation for you as the presenter. You should be comfortable drawing on the chapter's examples and connecting them to the room's experience.

For attendees, frame the chapter as an invitation rather than a gate. If they have read it, use that shared context. If they have not, the deck and discussion should still stand on their own.

---

# Code as Prose
## The Art of Meaningful Naming

"Writing clean code is what you must do in order to call yourself a professional." 
— Robert C. Martin

Note:
Welcome everyone to our first focused topic discussion. Today, we are taking on the most foundational tool in our professional toolkit: Naming. We name our variables, functions, arguments, classes, and packages. Because we do so much of it, we must do it with craft. 

We are going to shift our mindset away from simply "getting the code to run" and toward writing clean, human-readable prose.

---

## The Core Persuasion
### The 10:1 Reading Ratio

* We spend **10x more time** reading, scrolling, and navigating code than we do writing it.
* Making code easy to read actually makes it **much easier and faster to write**.
* The professional goal: Make our systems a **quick skim**, not an intense study.

Note:
This is the core economic argument for clean code. When we rush on auto-pilot to hit a deadline, we think we are saving time by typing quickly. But in reality, we are forcing the next developer (or our future selves) to waste hours deciphering our mess. 

If we make the surrounding code easier to read, we drastically speed up our current and future development cycles.

--

## The Stroop Effect
### Misleading Names Scramble Your Brain

<p style="color:red; font-size: 2em; font-weight: bold; margin: 0;">BLUE</p>
<p style="color:blue; font-size: 2em; font-weight: bold; margin: 0;">GREEN</p>
<p style="color:green; font-size: 2em; font-weight: bold; margin: 0;">RED</p>

Note:
Show this slide and ask the team to quickly say out loud the *color of the ink*, not the word itself. They will inevitably trip up. 

Explain that this is the Stroop Effect. Misleading or generic names (like calling a variable 'data' when it is actually a coordinate) create the exact same cognitive clash in a developer's brain. It adds chaos, forces mental mapping, and destroys focus.

---

## Intention-Revealing Names
### Answer the Big Questions Up Front

* A name should tell you:
  * **Why** it exists
  * **What** it does
  * **How** it is used
* If a name requires an explanatory comment, **the name has failed**.

Note:
Let's look at a concrete example. 

```typescript
int d; // elapsed time in days
```
The name `d` reveals nothing without the comment. If the comment gets separated from the variable, the context is lost. Instead, we should overload our code structure with description:

```typescript
int elapsedTimeInDays;
int daysSinceCreation;
int fileAgeInDays;
```
Now, the code is self-documenting and impossible to misinterpret.

---

## The "Auto-Pilot" Pitfall
### Resisting Hasty Generation

* **The Trap:** AI assistants and autocomplete tools thrive on generic names like `data`, `result`, `list`, or `obj`.
* **The Mess:** Accepting these templates on auto-pilot creates "broken windows" that tempt the mess to grow.
* **The Standard:** "One difference between a smart programmer and a professional programmer is that the professional understands that **clarity is king**."

Note:
AI tools are incredibly powerful, but they operate on statistical patterns, not human intent. They don't know the business domain or the team's shared lexicon. 

It is our professional responsibility to step off auto-pilot, actively wordsmith our names, and ensure our code reads like prose rather than machine-generated output.

---

## Rules of the Road

* **Avoid Disinformation:** Never name something `accountList` unless it is actually a `List`.
* **Make Meaningful Distinctions:** `ProductInfo` and `ProductData` are indistinct noise words.
* **Pick One Word per Concept:** Don't mix `fetch`, `retrieve`, and `get` across your classes.
* **Avoid Mental Mapping:** Don't force your reader to translate `r` to "the lowercase URL without host and scheme".

Note:
Explain that when we pick one word per abstract concept and stick with it, we create a consistent lexicon for the team. Modern IDEs show us method names via autocomplete, but they rarely show our comments. The names must stand entirely on their own.

---

# Demonstration
## The Minesweeper Rename

Note:
We are now going to run through a quick, highly collaborative refactoring speedrun. We have a working piece of TypeScript code that works perfectly, but reads like a cipher. 

We will clean it up in three deliberate, easy-to-follow steps to see how clean naming dramatically simplifies our design. This serves as our conceptual warmup!

--

## Step 1: The Cryptic Scaffolding

```typescript
function getThem(theList: number[][]): number[][] {
  const list1: number[][] = [];
  for (const x of theList) {
    if (x === 4) {
      list1.push(x);
    }
  }
  return list1;
}
```

* **Discussion:**
  * What is this function doing?
  * Why is it exhausting to read?

Note:
Show the code. Point out that the simplicity of the code is high (no complex loops, low nesting), yet its purpose is completely opaque because it lacks domain context. Ask the team to identify what questions are left completely unanswered by this code.

--

## Step 2: Revealing the Domain

* **The Context:** We are building a **Minesweeper game board**.
  * `theList` represents the game board grid.
  * Each `x` is a single cell on that board.
  * Index `0` holds the cell's status value.
  * A status value of `4` means the cell is **"flagged"**.

Let's rename the variables to reflect this reality.

Note:
By simply giving these concepts their proper names, we can improve the code considerably without changing a single line of logic or adding structural overhead.

--

## Step 2: The Domain Version

```typescript
function getFlaggedCells(gameBoard: number[][]): number[][] {
  const flaggedCells: number[][] = [];
  for (const cell of gameBoard) {
    if (cell[STATUS_VALUE] === FLAGGED) {
      flaggedCells.push(cell);
    }
  }
  return flaggedCells;
}
```

* **Observation:** The code still has the exact same number of operations and operators, but it is now vastly more explicit.

Note:
Now the code is actually starting to tell a story. Any developer looking at this can immediately understand its intent without needing a single comment. But we can go further to hide the implementation details entirely.

--

## Step 3: Hiding Structure

```typescript
interface Cell {
  status: number;
  isFlagged(): boolean;
}

function getFlaggedCells(gameBoard: Cell[]): Cell[] {
  const flaggedCells: Cell[] = [];
  for (const cell of gameBoard) {
    if (cell.isFlagged()) {
      flaggedCells.push(cell);
    }
  }
  return flaggedCells;
}
```

Note:
We've wrapped the array representation in a clean interface and created an intention-revealing predicate method: `isFlagged()`. 

This completely hides the raw data structure and the magic numbers. It is now beautiful, type-safe, and reads like well-written prose.

---

# Hands-On Workshop
## TDD & Prose Coordination

"Deliberate practice is not about doing what you're good at. It is about stretching your limits." — Chad Fowler

Note:
Transition from the passive demonstration to the active coding workshop. Explain to the team that we are now going to physically practice the coordination of our fingers and brains using the Prime Factors Kata. 
Unlike the Bowling Game Kata, this exercise has a smooth, linear mathematical progression with no sudden logical cliffs. We will be combining TDD and naming disciplines simultaneously.

--

## The Core Practice: The "Prose Rule"

* **TDD** is our engine.
* **Prose** is our steering wheel.
* **The Prose Rule:**
  * Once you get a test to pass (**Green**), you are **strictly forbidden** from writing the next test until you have wordsmithed the variables, parameters, and function names in your production code.
  * The production code must read like a clear, narrative English sentence before moving forward.

Note:
Explain that when we are in a rush to pass a test, we naturally drop into "auto-pilot math mode" and write variables like `n`, `i`, `d`, or `list`. The Prose Rule forces us to interrupt this auto-pilot behavior. Refactoring is not a chore we leave for the end of the day; it is an active, standard step of every single 30-second cycle.

--

## The Format: TDD Ping-Pong

* Pair up with a teammate at a single workstation.
* **Developer A** writes a single, failing unit test.
* **Developer B** writes the minimum code necessary to make the test pass (Green).
* **Together**, you must apply the **Prose Rule** to refactor and wordsmith before swapping roles.
* We will write the test cases on the board one-by-one.

Note:
Organize the team into pairs. This interactive format keeps everyone highly engaged. Let them open up their IDEs and prepare their test runners. Point out that running unit tests should be a single-button click or hotkey command in their editor [E2, 122].

--

## Step 1 & 2: Base Cases

```typescript
// Test 1: factorsOf(1) should return []
function factorsOf(candidate: number): number[] {
  return [];
}

// Test 2: factorsOf(2) should return [2]
function factorsOf(candidate: number): number[] {
  const primeFactors: number[] = [];
  if (candidate > 1) {
    primeFactors.push(2);
  }
  return primeFactors;
}
```

Note:
Write these first two steps on the board. 
Point out that we do not name the input parameter `n`. Calling it `candidate` reveals its logical intent—it is the number we are investigating for prime factors. The list is called `primeFactors`, not `list` or `result`, expressing exactly why it exists.

--

## Step 3 & 4: Generalizing

```typescript
// Test 3: factorsOf(3) should return [3]
// Test 4: factorsOf(4) should return [2, 2]

function factorsOf(candidate: number): number[] {
  const primeFactors: number[] = [];
  let divisor = 2; // Named 'divisor' instead of 'i'

  while (candidate > 1) {
    while (candidate % divisor === 0) {
      primeFactors.push(divisor);
      candidate /= divisor; // Shrinking the candidate
    }
    divisor++;
  }
  return primeFactors;
}
```

Note:
Let the pairs progress through these steps. As they hit Test 4, a loop becomes necessary to continuously factor the candidate.
Stop the room here. Point to the typical code they write (often using `let i = 2`).
Ask the room: "What is `i`? What is the mathematical significance of `candidate / i`? How do we make this readable for a human at 3 AM?"
Explain how naming the loop variable `divisor` completely changes the readability. The code reads exactly like a top-down narrative prose sentence: "While our candidate is greater than 1, we check if it is divisible by our current divisor. If it is, we record that divisor as a prime factor, shrink our candidate, and check again. Otherwise, we increment our divisor."

--

## Debrief
### Did Prose Slow You Down?

* Did keeping your names descriptive from the very first test make it **easier** to reason about the next step?
* Or did you feel a constant urge to slip back onto auto-pilot?
* **The Economic Reality:** When we eliminate mental mapping, we free up critical short-term memory, reducing our daily cognitive load.

Note:
Bring the room back together for a 5-minute debrief. Ask the teams to reflect honestly on their experience. Point out that when they didn't have to translate single-letter variables (`i`, `n`, `f`) in their heads, their minds were free to focus entirely on the algorithmic design, proving that clean naming makes writing code faster and more enjoyable.

---

## Summary
### Software is a Million Selfless Acts of Care

* "Clean code always looks like it was written by **someone who cares**." — Michael Feathers
* Every variable we name is an opportunity to show care.
* **The Challenge:** Before checking in code this week, stop for 60 seconds to wordsmith your names and remove a "broken window".

Note:
Wrap up the session. Challenge the team to carry this active "thinking" mindset into their production work this week. Thank everyone for their fantastic engagement!
