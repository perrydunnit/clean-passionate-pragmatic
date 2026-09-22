## Since We Last Met
### What has your experience been?

* When you read unfamiliar code this week, what made it easy or hard to follow?
* Did you meet a class that seemed to do too much? How could you tell?
* What made some pieces of code feel safe to change and others feel risky?

Note:
Welcome everyone and give the group a few quiet moments before opening the discussion. Invite concrete moments from the past week, especially encounters with large or sprawling classes. Capture themes that connect to today's focus: small, cohesive classes and modules with one clear responsibility.

---

## Reading Assignment
### Come prepared, or come curious

* **Presenter:** Read Chapter 10, "Classes," from *Clean Code* (pages 135-154) before leading this session. The book is linked in the project README.
* **Attendees:** Reading Chapter 10 beforehand is suggested, but optional.
* From *The Pragmatic Programmer*, skim "Orthogonality" and "The Evils of Duplication."
* This discussion assumes functions are already small — see the **Small Functions** deck if not.

Note:
The reading is required preparation for you as the presenter. Be comfortable with the Single Responsibility Principle, cohesion, and the idea of orthogonality. For attendees, frame the chapter as an invitation, not a gate. Note that this topic builds on Small Functions — flag that as a recommended prerequisite.

---

# Classes & Modules
## One Responsibility

"A class should have one reason to change."
— Robert C. Martin, *Clean Code*

Note:
Welcome everyone to today's topic. Where Small Functions was about a single function and Formatting was about arranging a file, today is about the next level up: how we group functions and data into classes and modules with one clear responsibility. The same story repeats at every scale.

---

## Small Classes
### One Reason to Change

* A class should have **one reason to change** — the Single Responsibility Principle.
* A class with twenty responsibilities is a **novel with no plot**.
* Summarize a class in **25 words or less** without "and" — if you can't, it does too much.

Note:
This is the "Classes" chapter. The SRP is the class-level version of "do one thing." A class with one responsibility is easy to summarize at the top and easy to descend through. The 25-word test is a quick diagnostic: if your summary needs "and," the class is hiding multiple responsibilities.

---

## Cohesion
### Things That Change Together, Live Together

* **Cohesive** classes keep related fields and methods together so they read as a unit.
* A method that uses **many fields of its class** belongs there; one that uses only a few may belong elsewhere.
* High cohesion means the class reads like a **unit**, not a grab bag.

Note:
Cohesion is the SRP seen from the inside. If a method uses most of the class's fields, it belongs. If it uses only one field (or none), it may be living in the wrong home. A cohesive class has a tight, self-consistent story.

---

## Orthogonality
### Independent, Composable Pieces

* From *The Pragmatic Programmer*: **orthogonal** components are independent — changes stay localized.
* Well-separated, cohesive pieces are easier to **read, test, and change** independently.
* Clear seams are where we later change or reuse pieces without disturbing the rest.

Note:
This is the "Orthogonality" topic. Two things are orthogonal when changing one does not force changes in the other. A system of small, cohesive classes tends to have clear seams: each class can be tested and changed on its own. Those seams are the payoff of good structure.

---

## Don't Repeat Yourself
### One Home for Every Concept

* **DRY**: every piece of knowledge should have a **single, authoritative representation**.
* Duplicated code forces readers to **compare copies** and remember to change all of them.
* Structure that keeps a concept in **one place** is inherently more readable.

Note:
This is "The Evils of Duplication." Duplication is a reading tax: the reader must notice that two blocks are "the same, except..." and keep them in sync mentally. When a concept lives in exactly one class, the reader only has to learn it once, and changes happen in one place.

---

## The AI Angle
### Generated Code Arrives as a God Class

* AI assistants often emit **one class that does everything** — storage, pricing, formatting, persistence.
* The professional move is to **find the seams**: pull out the concepts that change independently.
* Small, cohesive classes are how we turn a god class into a maintainable module.

Note:
Tie this to the series theme. Generated code often arrives as a god class: one object that stores, calculates, and formats. Our job is to review the structure, not just the logic. Find the seams — the concepts that change for different reasons — and extract them into cohesive classes.

---

# Demonstration
## Splitting a God Class

Note:
We are going to watch a working-but-bloated class get split into small, cohesive classes — no behavior changes, only structure. This is our warmup for the hands-on workshop.

--

## Before: One Class, Several Jobs

```typescript
export class Statement {
    private rentals: Rental[] = [];

    addRental(title: string, days: number): void {
        this.rentals.push({ title, days });
    }

    amountFor(rental: Rental): number {      // depends only on ONE rental
        let amount = 2;
        if (rental.days > 2) { amount += (rental.days - 2) * 1.5; }
        return amount;
    }

    frequentRenterPoints(): number {
        return this.rentals.reduce((points, rental) =>
            points + 1 + (rental.days > 2 ? 1 : 0), 0);
    }

    totalAmount(): number {
        return this.rentals.reduce((sum, rental) => sum + this.amountFor(rental), 0);
    }

    statement(): string {                    // storage + pricing + points + formatting
        const lines = this.rentals.map((rental) =>
            `${rental.title}: $${this.amountFor(rental).toFixed(2)}`);
        lines.push(`Total: $${this.totalAmount().toFixed(2)}`);
        lines.push(`Points: ${this.frequentRenterPoints()}`);
        return lines.join('\n');
    }
}
```

* **Discussion:** How many responsibilities live in this one class?

Note:
Show this class and ask the room to count the responsibilities: storing rentals, pricing a rental, awarding points, and formatting the statement. Point out the tell-tale sign: some methods (`amountFor`, and the points logic) depend only on a single rental, not on the whole list.

--

## After: Extracting the Cohesive Piece

```typescript
export class Rental {
    constructor(public title: string, public days: number) {}

    amount(): number {
        let amount = 2;
        if (this.days > 2) { amount += (this.days - 2) * 1.5; }
        return amount;
    }

    points(): number {
        return 1 + (this.days > 2 ? 1 : 0);
    }
}

export class Statement {
    private rentals: Rental[] = [];

    addRental(title: string, days: number): void {
        this.rentals.push(new Rental(title, days));
    }

    statement(): string {
        const lines = this.rentals.map((rental) =>
            `${rental.title}: $${rental.amount().toFixed(2)}`);
        lines.push(`Total: $${this.totalAmount().toFixed(2)}`);
        lines.push(`Points: ${this.frequentRenterPoints()}`);
        return lines.join('\n');
    }

    totalAmount(): number {
        return this.rentals.reduce((sum, rental) => sum + rental.amount(), 0);
    }

    frequentRenterPoints(): number {
        return this.rentals.reduce((points, rental) => points + rental.points(), 0);
    }
}
```

* `Rental` now owns its own **amount** and **points**; `Statement` just accumulates and formats.

Note:
Point out what moved and why: `amount()` and `points()` depend only on a single rental, so they belong on `Rental`. `Statement` keeps the list and the formatting. Same behavior, same tests — but now each class has one reason to change.

---

# Hands-On Workshop
## The Statement Kata

"Don't live with broken windows."
— Andy Hunt & Dave Thomas, *The Pragmatic Programmer*

Note:
Transition to the workshop. We will practice splitting a working-but-bloated class — the Statement kata — into small, cohesive classes, keeping its tests green the entire time.

--

## The Core Practice: The Cohesion Check

* **Extract, then verify the story.**
* **The Cohesion Check:** for each method, ask, "Does this depend on the whole object, or just part of it?"
* A method that depends on **part** of the object may belong in a **smaller class**.

Note:
Explain that the key diagnostic is dependence. A method that only touches one field (or one element of a list) is a candidate for a new home. The Cohesion Check is our acceptance test: does each class now have one clear reason to change?

--

## The Format: Ping-Pong Extraction

* Pair up with a teammate at a single workstation.
* **Developer A** moves one method (or field) toward a smaller class.
* **Developer B** runs the tests to confirm **Green**.
* **Together**, apply the Cohesion Check and decide the next move.
* Swap roles and repeat until each class has one responsibility.

Note:
Organize the team into pairs. Open the Statement kata in `katas/statement/`. The tests must stay green after every move. Emphasize small steps: move one method at a time, then re-read the classes.

--

## Guidance: Where to Start

* Find the methods that depend on a **single rental**, not the whole list.
* Those methods are the seam: they likely belong on a **`Rental`** class.
* Keep `Statement` as the list owner and formatter.
* Name each new class so its **one reason to change** is obvious.

Note:
Give the room a concrete starting path without doing the whole job: look for methods that touch only one element of the list — that is the seam. The final class design is theirs to discover. For you, the presenter, the reference target is: `Rental` (title, days, amount, points) and `Statement` (list, total, points total, formatting).

---

## Debrief
### Did Smaller Classes Help?

* Was the "after" design easier to describe than the "before" design? **Why?**
* Which extraction made the biggest difference?
* **The Economic Reality:** classes with one reason to change are safer to touch.

Note:
Bring the room back together for a five-minute debrief. Ask teams to compare their final class designs — they may differ slightly, and that is fine. The test is not identical designs, but that each class reads as one responsibility. Point out the win: safer, more local changes.

---

## Summary
### One Responsibility per Class

* "A class should have one reason to change." — Robert C. Martin
* Every seam we find and name is an act of care for the next reader.
* **The Challenge:** this week, find one bloated class and extract one cohesive piece before checking in.

Note:
Wrap up. Challenge the team to carry single-responsibility discipline into their production work this week — especially into any code that came from a generator or assistant. Thank everyone for their engagement!
