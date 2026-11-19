## Since We Last Met
### What has your experience been?

* Where did the code you wrote this week feel safe to change, and where did it feel risky?
* When you made a change you were unsure about, what did you do to check it?
* What would have made that change feel cheaper?

Note:
Welcome everyone back and give the group a few quiet moments to think before opening the discussion. Invite concrete moments from the past week, especially a change that felt risky and the reason it felt that way.

Steer the answers toward the thing this session is about: a test you trust makes change cheap. Capture themes that connect to today's focus on test-driven development.

---

## Reading Assignment
### Come prepared, or come curious

* **Presenter:** Read Chapter 9, "Unit Tests," from *Clean Code* (pages 121-134) and Chapters 5-6, "Test Driven Development" and "Practicing," from *The Clean Coder* (pages 77-94) before leading this session. Both books are linked in the project README.
* **Attendees:** Reading Chapter 9 beforehand is suggested, but optional.
* Skim "Programming by Coincidence," "Code That's Easy to Test," and "Ruthless Testing" from *The Pragmatic Programmer*, plus "Practice, Practice, Practice" from *The Passionate Programmer*.
* The star ideas: the **three laws**, the **thirty-second cycle**, and **a test you have watched fail**.

Note:
The reading is required preparation for you as the presenter. Be comfortable with the three laws, the list of benefits, and what makes a test clean. Note that Chapter 6, "Practicing," is where the book ties the cycle to kata practice — useful context for the workshop.

For attendees, frame the reading as an invitation rather than a gate. If they have read it, use that shared context. If they have not, the deck and the workshop should still stand on their own.

---

# Test-Driven Development
## Red, Green, Refactor

"The jury is in. The controversy is over. GOTO is harmful. And TDD works."
— Robert C. Martin, *The Clean Coder*

Note:
Welcome everyone to today's topic. We are going to spend our time on the discipline that makes every other idea in this series affordable: a test that tells you, within seconds, whether you just broke something.

The argument in *The Clean Coder* is deliberately blunt: this is no longer a debate. What is still worth discussing is how to do it well — and what it costs you when you skip it.

---

## The Core Persuasion
### The Thirty-Second Cycle

* Tests and production code are written **together**, with the tests a few seconds ahead.
* The three laws lock you into a cycle that is **perhaps thirty seconds long**.
* Every decision is confirmed or rejected **immediately**, instead of hours later in a debugger.

Note:
Tell the story from *The Clean Coder*: Martin visits Kent Beck in 1999 expecting to write a program, and instead watches him run the code every thirty seconds or so. Coming from C++ build times measured in minutes, the cycle time was unrecognizable — except that he had used it as a kid writing games in Basic and Logo.

That is the whole economic argument. Long feedback loops are where confidence goes to die. When the loop is thirty seconds, you are never more than one small step away from knowing whether you are right.

---

## The Three Laws of TDD
### The Whole Discipline in Three Sentences

1. You may not write production code until you have written a **failing** unit test.
2. You may not write more of a test than is **sufficient to fail** — and not compiling is failing.
3. You may not write more production code than is **sufficient to pass** the currently failing test.

Note:
Read all three slowly, then ask the room which one they habitually break. Most people break the second one: they write a whole test suite before running anything. Many break the third: they make the test pass and then keep going, "while they are in there."

The second law is what makes the third law possible. If the test is small, the honest minimum implementation is small too, and the design emerges one decision at a time. Point out that "not compiling is failing" is a feature, not a technicality — it gets you into production code in seconds.

---

## Why It Works
### Certainty Buys Courage

* **Certainty:** when the suite passes, the change broke nothing — certain enough to ship.
* **Courage:** when you trust the suite, you clean the code instead of avoiding it.
* **Defects:** teams report reductions of 2x, 5x, and even 10x.

Note:
This is the "litany of benefits" from *The Clean Coder*. The one to dwell on is courage, because it is the one that pays compound interest: developers who are not afraid of their tests clean the code, and code that gets cleaned gets simpler, and simpler code has fewer defects.

Ask the room: the last time you saw a messy function, what was your second reaction? Usually "I'm not touching it." TDD is what converts that second reaction into "let me clean this."

---

## What TDD Is Not
### A Discipline, Not a Religion

* Writing the test first does **not** guarantee good design. You can write bad code, and bad tests, test-first.
* The laws are a **default**, not a cage. Rare situations genuinely call for something else.
* The professional standard is honesty: know when you are following the discipline and when you are making an exception.

Note:
This slide keeps the room on your side. The claim is not that TDD is magic; it is that it is the professional default. *The Clean Coder* is explicit that no professional should follow a discipline when it does more harm than good — and equally explicit that the exceptions are rare.

If someone in the room has been burned by "TDD" that produced a brittle, mock-heavy suite, this is the moment to say so: that is a symptom of bad tests, not of the cycle. The next two slides are about what good tests look like.

---

## Clean Tests
### Readability, Readability, Readability

* Test code is **not a second-class citizen**. It needs the same thought, design, and care as production code.
* Structure every test as **Build — Operate — Check**: arrange, act, assert.
* Grow a small **testing language**: helpers named for the domain, not for the API.
* **Dual standard:** tests may be less efficient than production code — never less clean.

Note:
*Clean Code* Chapter 9 tells the cautionary tale of a team that agreed their tests did not need the same standards as production code. The tests got dirtier, harder to change, and more expensive each release — until they were thrown away. Without them, the team became afraid to change anything, and the production code rotted.

The specifics to remember: the reader should see the three parts of a test without being told. Detail that does not serve the test should be hidden behind a well-named helper. And the dirty-tests team is the reason the "dual standard" is asymmetry in *speed*, never in clarity.

---

## One Test, One Concept
### Name the Behavior, Not the Method

* Aim for **one conclusion** per test; minimize asserts per *concept*.
* A test that checks three unrelated things hides the one that actually broke.
* Name tests for behavior — `adds two numbers` beats `testAdd2`.
* If a test is hard to name without "and", it is more than one test.

Note:
This is the "one assert per test" section of Chapter 9, softened into the better rule: one *concept* per test. Martin admits he is not afraid of more than one assert, but the number of asserts per concept should be minimized.

The naming test is a useful transfer from the naming discussion: if you need the word "and" to describe what a test checks, split it.

---

## F.I.R.S.T.
### Five Rules for a Suite You Can Trust

* **Fast** — slow tests do not get run.
* **Independent** — one test must not set up the next.
* **Repeatable** — any machine, any environment, no network.
* **Self-validating** — pass or fail, with no log to read.
* **Timely** — written just before the production code that makes it pass.

Note:
Walk the acronym quickly, then stop on **Timely**, because it is the one that decides everything else. Tests written afterwards are written by someone who already knows how the problem was solved, so they tend to confirm the implementation rather than challenge it.

The payoff line: if your tests are slow or flaky, you will stop running them, and then you no longer have tests — you have a rumour.

---

## Programming by Coincidence
### Deliberate Beats Accidental

* "It works" is not the same as "I know why it works."
* Code that passes by accident is a **minefield you have already walked across**.
* TDD turns luck into evidence: the test said red before it said green.
* "Don't just test your code, but test your assumptions as well."

Note:
Tell the minefield story from *The Pragmatic Programmer*: the soldier prods the ground, nothing explodes, so he concludes the field is safe and marches forward — and is blown up. His probes proved nothing; they were lucky.

That is Fred, the programmer who types code, sees it appear to work, and keeps going until it suddenly does not. TDD is the deliberate alternative: you write down the assumption as an executable test, watch it fail for the reason you expect, and only then make it pass.

---

## Design to Test
### Testability Is a Design Constraint

* Hardware is **designed to be tested**. Software can be too.
* Test **against the contract**: the test encodes what the module promises.
* Writing the test first lets you **try the interface before you commit to it**.
* If it is hard to test, that is **design feedback**, not a testing problem.

Note:
The hardware analogy from *The Pragmatic Programmer* is worth saying out loud: nobody ships a chip that cannot be exercised in the field. "Design to Test" is Tip 48 in the book, and the sharpest sentence in that section is that building the tests before the implementation lets you try out the interface before you commit to it.

The last bullet is the one to repeat to the room: when a unit is hard to test, do not reach for a bigger hammer. Ask what the difficulty is telling you about the coupling.

---

## Tests Drive Design
### Test First Is a Design Technique

* Testing first forces you to **isolate** the code, and isolation is decoupling.
* Write the tests later and nothing stops you coupling functions into an **untestable mass**.
* "The tests you write after the fact are defense. The tests you write first are offense."
* Better design is a **side effect** of the cycle, not an extra activity.

Note:
This is the "Design" section of Chapter 5 of *The Clean Coder*. Martin's argument: you often know exactly what code you want to write, but the three laws tell you to write a test that fails because that code does not exist. To write that test you have to decide where the seam is. That pressure is what drives decoupling.

Read the defense/offense line twice. After-the-fact tests are written by someone who already knows how the problem was solved, so they tend to confirm the implementation rather than challenge it.

---

## Tests Are Documents
### A Specification That Executes

* Every test is a worked **example** of how to create and call the system.
* The tests describe the **lowest-level design** — unambiguously, accurately, in the language of the code.
* They are not merely accurate; they **execute**.
* Where's the first place you go in a manual? The code examples. Your tests are that appendix.

Note:
This is the "Documentation" benefit from *The Clean Coder*. Martin's point is that a printed manual can be pretty and wrong, but a test that calls the code cannot lie about the code — it runs.

Tie it to the naming and formatting topics: the tests are the part of the documentation a reader will actually trust, so they deserve the same care as the production code they describe.

---

## The AI Angle
### The Tests Are the Part You Own

* Generators produce code faster than we can read it. A **test written first** is a spec the tool cannot quietly redefine.
* A test written *after* the code merely describes what the code happens to do — that is a coincidence with a green bar.
* Never accept a generated test you have not seen **fail**. Red first proves it can catch the bug it claims to catch.
* Whoever holds the keyboard must be able to say **why** the result is right.

Note:
Tie this to the series theme. An assistant will happily generate both the implementation and the tests, and the tests will pass — because they were written from the implementation. That is the minefield again, with better production values.

The discipline is unchanged and it is now more valuable, not less: the human writes (or at least approves) the failing test, watches it fail for the right reason, and only then lets the tool produce the code. Someone has to be able to explain why this is right, and the test is how that claim gets checked.

---

# Demonstration
## One Turn of the Loop

Note:
We are going to watch a single problem move through the cycle twice: red, green, and then red again. Watch for two things — how embarrassingly small each step is, and how each step is forced by an example rather than chosen by the author.

The code is deliberately tiny so that the motion is the lesson. We are doing leap years, which everyone already knows, because the point is the discipline rather than the discovery.

--

## Step 1: Red — Write the Test You Cannot Pass

```typescript
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isLeapYear } from './leap-year.ts';

test('2024 is a leap year', () => {
    assert.equal(isLeapYear(2024), true);
});
```

* There is **no production file yet**. The test fails because it will not compile.
* That is the first law satisfied, in about ten seconds.

Note:
Point at the import: the module does not exist, so the test fails to compile, and the second law tells us that counts as failure. We are now allowed to write production code — but only enough to get back to a failing *assertion*.

This is the moment to remind the room that "not compiling is failing" is what keeps the cycle thirty seconds long.

--

## Step 2: Green — Cheat If You Must

```typescript
export function isLeapYear(year: number): boolean {
    return year === 2024;
}
```

* It is **obvious nonsense**, and it is the exact amount of code the law permits.
* The next test exists to call the bluff.

Note:
Let the room wince. That is the reaction you want. The third law says: no more production code than is sufficient to pass the currently failing test. `return year === 2024` is sufficient.

The value is not in this code; it is in the discipline. By writing the dishonest version, you force the next test to be honest about what the rule actually is. If you jump straight to the finished algorithm, no test ever pins down the century rule, and you will find out about 1900 in production.

--

## Step 3: Red Again — Triangulate

```typescript
test('2023 is not a leap year', () => {
    assert.equal(isLeapYear(2023), false);
});
```

```typescript
export function isLeapYear(year: number): boolean {
    return year % 4 === 0;
}
```

* Two data points, one rule.
* This is **triangulation**: the second example is what turns a guess into a rule.

Note:
This is the smallest honest generalization. One example allowed a constant; two examples force a relationship. Ask the room what other years this rule gets wrong — someone will say 1900 — and tell them not to say it out loud yet. They are about to become the test writer.

--

## Step 4: Red Again — The Rule Was Incomplete

```typescript
test('1900 is not a leap year', () => {
    assert.equal(isLeapYear(1900), false);
});
```

```typescript
export function isLeapYear(year: number): boolean {
    return year % 4 === 0 && year % 100 !== 0;
}
```

* The rule was **incomplete**, not wrong. The failing test said exactly which part.
* Nothing in the passing code hinted at the gap. **Only another example could expose it.**

Note:
This is the demonstration's punchline. The implementation was plausible and green, and the natural instinct is to move on. The next example is what breaks it — and it breaks it in a way you can read: the code said true, the test expected false, for a year that is divisible by four.

That is why the discipline asks for a growing list of examples instead of one clever algorithm. Code cannot tell you what it does not handle; an example can.

--

## Step 5: Refactor — Green Is Permission to Clean

```typescript
function isDivisibleBy(year: number, divisor: number): boolean {
    return year % divisor === 0;
}

export function isLeapYear(year: number): boolean {
    return isDivisibleBy(year, 400)
        || (isDivisibleBy(year, 4) && !isDivisibleBy(year, 100));
}
```

* One more red test (`2000`) forces the `% 400` case. Then, and only then, tidy up.
* **Refactor on green**, never on red. The suite is the safety net that lets you clean.

Note:
Complete the rule first: add a test that 2000 is a leap year, watch it fail, then add the `% 400` branch. Only when everything is green do we extract `isDivisibleBy` so the sentence reads aloud: divisible by 400, or divisible by 4 and not by 100.

Point out the shape of the whole demonstration: five tiny steps, four of them red. Almost none of the time was spent typing. That ratio is normal, and it is what people mean when they say TDD is a design technique that happens to leave tests behind.

---

# Hands-On Workshop
## The String Calculator

"When you practice music, it shouldn't sound good. If you always sound good during practice sessions, it means you're not stretching your limits."
— Chad Fowler, *The Passionate Programmer*

Note:
Transition to the workshop. We are going to run the String Calculator kata against an ordered list of tests on the board. The goal is not the calculator — it is to feel the cycle, and to feel how much of the design the tests do for you.

Mention that the next session takes this same cycle and puts a second person at the keyboard; today is about getting the loop into your fingers.

--

## The Contract

* `add(numbers: string): number` returns the sum of the numbers in the string.
* `''` sums to **0**.
* Commas separate numbers, and so does a **newline**.
* A leading `//[delimiter]` line declares a **custom delimiter** for the rest of the string.
* **Negative numbers are not allowed** — `add` throws an error naming every one it found.

Note:
Give the room only these rules. Do NOT explain an implementation. Everything else is theirs to discover — especially the fact that the custom-delimiter line makes the input format into a small parsing problem.

Keep this slide up while they work if you can. It is the only specification they get.

--

## The Ordered Test List

| # | Input | Expected |
|---|-------|----------|
| 1 | `''` | `0` *(already in the kata seed)* |
| 2 | `'1'` | `1` |
| 3 | `'1,2'` | `3` |
| 4 | `'1,2,3,4,5'` | `15` |
| 5 | `'1\n2,3'` | `6` |
| 6 | `'//;\n1;2'` | `3` |
| 7 | `'-1,2'` | throws `Negatives not allowed: -1` |
| 8 | `'-1,-2'` | throws `Negatives not allowed: -1, -2` |

Note:
Walk the room through the list. Emphasize: one at a time, in order, and do not skip ahead. The order is deliberate — tests 1-4 build confidence, test 6 is the crux, and tests 7-8 introduce a second kind of behavior: rejecting input rather than computing a value.

The exact error message matters. It is a gift to the exercise: it makes the assertion precise enough that you cannot accidentally pass with a vague throw.

--

## The Crux: Test 6

```typescript
assert.equal(add('//;\n1;2'), 3);
```

* The first line is a **header**, not data.
* Resist regex cleverness. Extract "read the delimiter" and "read the numbers".
* If `add` now has two jobs, that is the design telling you something.

Note:
This is where the kata earns its keep. Up to test 5, the honest implementation is a one-liner. At test 6, the string stops being a list of numbers and becomes a small document with a header.

Let the room struggle for a few minutes. If they are stuck, ask the guiding question — "which part of the string is an instruction, and which part is data?" — but do not answer it.

--

## The Format: One Turn at a Time

* Work the list **in order**, one line at a time.
* Write the test. Watch it fail **for the reason you expect** — read the message.
* Make the smallest change that could pass. Cheating is allowed.
* **Refactor on green**, then take the next line.
* Do not skip ahead. The order is the design.

Note:
Organize the room at single workstations. The kata seed in `katas/string-calculator/` already has test 1 and a passing implementation, so everyone starts green.

The step people skip first is the second one: they write the test, see it fail, and do not read the failure. Make them say it out loud — "expected 6, got 3" proves the test is asking the question they think it is asking.

If someone finishes early, have them redo the list from memory with the constraint that `add` stays under ten lines.

--

## Make the Refactor Real

* Green is not done — **green is permission to clean**.
* End every cycle with a read-through: does `add` read like a story?
* Extract helpers **below** the caller, in the order they are called.
* Delete duplication in the *tests* too; a cryptic test is a broken window.

Note:
This is where the earlier decks pay off. The refactor step is naming, small functions, and stepdown order applied inside a thirty-second window — which is exactly why they are prerequisites.

Circulate and ask each person to read their `add` out loud. If it does not sound like a sentence, they are not finished with the cycle.

---

## Debrief
### Did the Cycle Change How You Work?

* Which test forced a design you would not have chosen on your own?
* How much of your time went into **reading failures** rather than debugging?
* Did the thirty-second cycle feel **slower** or **faster** than your usual pace? Why?
* **The Economic Reality:** a test you trust is what makes change cheap.

Note:
Bring the room back together for a five-minute debrief. Ask for specific moments rather than general impressions — "the custom delimiter test made me split the parser out" beats "it was good".

Expect at least one person to say the cycle felt slower. That is worth exploring: it is usually slower for the first twenty minutes and much faster afterwards, because the end-of-task debugging session disappears. Point out that the cycle moves the cost from finding bugs to deciding what you want.

---

## Summary
### Red, Green, Refactor — Every Thirty Seconds

* "How can you consider yourself to be a professional if you do not know that all your code works?" — Robert C. Martin, *The Clean Coder*
* Every failing test is a question; every green bar is an answer you get to keep.
* Small steps are not slower. They are why there is no debugging at the end.
* **The Challenge:** this week, take one real change, write the test first, and refuse to write more code than the test demands.

Note:
Wrap up. Challenge the team to run the full cycle on one real change this week — not a kata, a ticket — and to notice how much of their time goes into deciding rather than debugging.

Tell them the kata stays in the repository for practice, and that the next session puts a second person at the keyboard: we will take this same cycle and run it as a pair. Thank everyone for their engagement.
