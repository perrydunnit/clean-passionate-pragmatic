## Since We Last Met
### What has your experience been?

* Did the thirty-second cycle survive contact with real work this week?
* Where did you write the test first, and where did you write it after?
* What made the difference between those two cases?

Note:
Welcome everyone back and give the group a few quiet moments to think before opening the discussion. Ask for one concrete story of a change that went well and one that did not.

The most common honest answer is "I wrote the test first on the easy parts, and after on the parts I was worried about." That is worth naming out loud, because it is exactly the pattern this session is about: the moment a task gets hard, we tend to stop sharing it. Today we look at the discipline that prevents that.

---

## Reading Assignment
### Come prepared, or come curious

* **Presenter:** Read Chapter 12, "Collaboration" (pages 157-166), from *The Clean Coder* before leading this session, plus Chapter 4, "Coding" (pages 62-75), Chapter 11, "Pressure" (pages 153-155), and Chapter 14, "Mentoring, Apprenticeship, and Craftsmanship" (pages 183-184). Chapter 6, "Practicing" (pages 88-92), describes the dojo formats.
* **Attendees:** Chapter 12 beforehand is suggested, but optional.
* Skim "Sign Your Work" from *The Pragmatic Programmer*, and "Be the Worst," "Find a Mentor," "Be a Mentor," "Being Present," and "That Fat Man in the Mirror" from *The Passionate Programmer*.
* The star ideas: **professionals pair**, **pairing is the best code review**, and **help is an obligation in both directions**.

Note:
The reading is required preparation for you as the presenter. This is the one topic in the series where a single book carries almost all the weight — *The Clean Coder* — and within it, four separate chapters. Read them together; the pairing argument is spread across all four on purpose.

Be clear with the room about what the books do and do not contain. They contain a strong case for pairing, the reasons it works, and the social obligations around it. They do not contain a manual for running a pairing session — no driver/navigator mechanics, no advice on remote pairing, no feedback scripts. Those exist, but not here. See the deck README for the gap.

---

# Pairing
## Two Heads Are Better Than One

"All I'm going to tell you is that professionals pair."
— Robert C. Martin, *The Clean Coder*

Note:
Welcome to today's topic. Note what Martin does with that sentence: he refuses to argue from studies or anecdotes, and lands on a claim about professional identity instead.

That is the shape of the whole session. We are not going to try to prove that pairing is faster on average. We are going to look at what pairing *is for* — and at the fact that most of us already believe in it, but only deploy it when we are frightened.

---

## The Core Persuasion
### The Emergency Test

* Almost every programmer will pair **in an emergency**.
* In an emergency nobody argues about velocity. They argue about **getting it right**.
* "But if pairing is the most efficient way to solve a problem in an emergency, why isn't it the most efficient way to solve a problem period?"
* So the interesting question is not *whether* pairing works. It is **why you only reach for it when you are scared**.

Note:
This is Martin's actual argument in the Pairing section of Chapter 12, and it is a question rather than a finding. Most programmers will pair at 2 a.m. with the site down. Almost none of them will pair on a Tuesday afternoon on a routine ticket.

Ask the room directly: who has paired in a crisis? Who pairs on a normal day? Let the gap sit there. The gap is the session.

The honest answer, if someone gives it, is that pairing feels expensive when things are calm and feels obviously worth it when things are on fire. Which raises the question of what "expensive" is measuring.

---

## Why Professionals Pair
### Efficiency, Knowledge, Review

* **Efficiency:** for at least some problems, two people get there faster than one.
* **Knowledge:** "Professionals don't create knowledge silos." Anyone should be able to play another position in a pinch.
* **Review:** "The most efficient and effective way to review code is to collaborate in writing it."

Note:
These are the three reasons Martin gives, in order. Note that he puts efficiency first but does not lean on it — he explicitly declines to quote studies. The other two reasons are the ones he actually spends words on, and they are the durable ones: knowledge does not silo, and the review happens at the right moment.

Point out that only one of the three is about speed. If the whole argument were speed, a bad week would be enough to end the practice.

---

## Pairing Is Review
### Reviewing After the Fact Is Expensive

* "No system should consist of code that hasn't been reviewed by other programmers."
* Most review rituals are "horrifically inefficient": a queue, a diff, a comment thread, three days later.
* Reviewing **while writing** catches the *decision*, not just the diff.
* Once a decision is three commits deep, the reviewer can only see the consequence.

Note:
This is the sharpest idea in the chapter, and the one that survives the AI transition best. A review that happens after the fact can only see what was written. A review that happens while writing can see what was *rejected* — the alternative that was considered and dropped, the case nobody thought of, the constraint that was quietly abandoned.

Ask the room how many review comments they have left this month that were "this works, but why?" Those are the comments pairing makes unnecessary, because the question gets asked before the code exists.

---

## What Pairing Fixes
### The Zone, Interruptions, Writer's Block

* **The Zone** is "an uncommunicative state" that feels productive and is not. "It is virtually impossible for a pair to enter the Zone" — and that is a feature.
* **Interruptions:** your partner holds the context while you take the call, and rebuilds it with you when you get back.
* **Writer's block:** "The solution: Find a pair partner." The blockage melts when someone sits down next to you.

Note:
Three separate passages from Chapter 4, all in the Coding chapter, and all of them about the same underlying thing: a pair keeps you talking, and talking is what keeps you honest about what you are doing.

The Zone one is counterintuitive enough to be worth dwelling on. Many people in the room will believe the Zone is their best state. Martin's claim is that it is a mild meditative state with diminished rational faculties, and that you pay for the speed later. Pairing makes entering it impossible, which he treats as a benefit rather than a cost.

---

## Crisis Discipline
### What You Do Under Pressure Is What You Believe

* "If you pair in a crisis but don't normally pair, then you believe pairing is more efficient than non-pairing."
* "Pair! When the heat is on... You will get done faster, with fewer defects."
* Your partner holds you to your disciplines when you are the one panicking.
* And the obligation runs the other way: when you see someone else under pressure, **offer**.

Note:
This is from the "Crisis Discipline" and "Get Help" sections of the Pressure chapter, and it is a beautiful piece of reasoning: your behaviour under pressure reveals what you actually believe, regardless of what you say.

Sit with the implication. If you only pair when things are bad, you have already answered the question about whether pairing is worth doing. The remaining question is why you do not do it when things are good.

The second bullet is the concrete promise: faster, with fewer defects, and — the part people forget — your partner keeps you from panicking, spots what you miss, and picks up the slack when you lose focus.

---

## Help
### Programming Is Beyond One Person

* "Programming is so hard, in fact, that it is beyond the capability of one person to do it well."
* "When you help someone, sit down and write code together." Plan on the better part of an hour.
* Sequestering yourself is "a violation of professional ethics".
* A fresh perspective is "a profound catalyst" — it is not that your helper is smarter than you.

Note:
This is the "Help" section of the Coding chapter, and it reframes pairing as something more basic than a technique: helping each other is part of the job.

The hour is a real instruction, not a figure of speech. Martin's reasoning is that a rushed ten minutes reads as an obligation and does not get you to the actual problem. Budget properly and the help works.

The last bullet is the one to say out loud to anyone who feels patronized by help: the value is not superior intelligence, it is a second context.

---

## Being Helped
### Don't Protect Your Turf

* Accept help **gratefully** and give yourself to it.
* Give it thirty minutes before deciding it is not working.
* "It is unprofessional to remain stuck when help is easily accessible."
* Asking for help is a skill. Practise saying "I need some help" out loud.

Note:
This is the half of the Help section people skip. We are happy to be the helper; we are much worse at being helped, especially when we are behind.

Martin is blunt about why: we protect our turf, we do not want to look stuck, and we would rather grind than be seen grinding. His counter is that staying stuck when help is a sentence away is the actual unprofessional act.

The thirty-minute rule is a good one to give the room verbatim: accept the help, give it half an hour, and if it genuinely is not working, end it politely with thanks. That is a different thing from refusing it.

---

## Collaboration Is Not an Instinct
### So We Need Disciplines

* "Programmers do not tend to be collaborators. And yet collaboration is critical to effective programming."
* Because it is not instinct, it has to be a **practice with rules**, not a personality trait.
* That is why there is a format — ping-pong — and not just an instruction to be nicer.
* If you are waiting to feel like pairing, you will wait a long time.

Note:
This is the hinge of the whole argument, and it is why the deck spends time on a *format* later. Martin's observation is that many of us got into this work precisely because we like concentrating on detail alone.

That is not a character flaw to be fixed; it is a starting condition to be designed around. Disciplines exist to drive behaviour that does not come naturally. Ping-pong is a discipline in that sense — a rule that produces collaboration even when neither person woke up wanting to collaborate.

---

## Owned Code
### Walls Are a Symptom

* The worst symptom of a dysfunctional team: each programmer builds a wall around "their" code.
* Walls protect **status**, not quality. They also hide duplication and skewed interfaces.
* "I want the team to own the code, not the individuals."
* Anonymity is the other failure mode: "a breeding ground for sloppiness, mistakes, sloth, and bad code."

Note:
Two passages, one from each book, and they are two sides of the same coin. *The Clean Coder* describes teams where programmers would not let anyone else even *see* their code, with political clout tied to which module you owned. *The Pragmatic Programmer* makes the opposite warning in "Sign Your Work": total anonymity lets you become a cog and stop caring.

The synthesis is worth stating: code needs to be owned, but owned by the team. And *The Pragmatic Programmer* adds the crucial caveat — communal ownership "requires additional practices, such as pair programming, to guard against the dangers of anonymity." Sharing code without pairing just distributes the anonymity.

---

## Proximity
### You Can't Pair From a Corner

* "You can't work together while you are sitting in corners wearing headphones."
* "I want you sitting around tables facing each other."
* Face-to-face is high-bandwidth: gestures, whiteboards, tone, and the muttered aside.
* Proximity also builds the relationship that makes criticism survivable.

Note:
This is the "Cerebellums" story from Chapter 12, prompted by a recruitment billboard promising you could "rub cerebellums with the best". Martin's point is that the cerebellum is at the back of the head, so the image is of a room full of people with their backs to each other — which is also a description of a very common office.

The last bullet is the one to draw out: you can only tell someone their design is wrong if you have enough relationship to survive the sentence. *The Passionate Programmer* makes the same point from the other direction in "Being Present" — face-to-face communication is simply more effective, and the relationships built that way are the ones that hold under pressure.

If the room works remotely, this is the slide to argue with. The book's claim is about bandwidth, not about geography; the question to ask is what you do to recover that bandwidth.

---

## Choose Your Crowd
### Always Be the Worst in the Band

* "Always be the worst guy in every band you're in." — Pat Metheny, quoted by Chad Fowler
* "The people around you affect your own performance. Choose your crowd wisely."
* Pairing is how you get deliberate access to people better than you.
* It cuts both ways: bad habits travel just as fast as good ones.

Note:
This is "Be the Worst" from *The Passionate Programmer*, and it is the strongest argument in the series for pairing on the days when you do not need help.

Caveat this properly: the advice is about which people you put yourself among, not about self-deprecation. Fowler's closer is that trying to be the worst "actually stops you from selling yourself short" — you will discover you were never as far behind as you feared.

The last bullet is from the same chapter and is worth keeping: he found the bad habits of weaker bands following him into better gigs. A pair is an influence, not a neutral conduit.

---

## Learning by Teaching
### The Pair Is a Mentor

* "The best way to learn is to teach."
* Apprenticeship: "This should be a time of very intense pair-programming. This is when disciplines are learned and reinforced."
* Craftsmanship is "exchanged between peers" and "caught by observing others".
* So a pair is a mentor in **both** directions.

Note:
From the Mentoring chapter of *The Clean Coder*, reinforced by "Be a Mentor" in *The Passionate Programmer*: "If you want to really learn something, try teaching it to someone else." The act of explaining is how you find out whether you understand it.

The apprenticeship passage is worth reading closely because it inverts the usual pairing etiquette: the apprentice starts with *no* tasks at all, and simply assists. The point of that stage is not output, it is absorption. That is a useful thing to remember when someone junior is "slowing you down".

---

## When Not to Pair
### Alone Time Is Part of the Discipline

* Deep thinking, and tasks too trivial to share, are solo work. The book says so explicitly.
* "As much as I like to pair program with others, it makes me crazy if I can't get away by myself from time to time."
* Aim for "a large fraction of the time", not all of it.
* Pairing badly is worse than not pairing. A spectator is not a partner.

Note:
This slide exists to keep the session honest. *The Clean Coder* is emphatic that pairing is the professional default and equally emphatic that some work is solo work. Presenting pairing as a universal rule would be a misreading, and the room will know it.

The last bullet is yours to add, not the book's. A pair where one person types and the other watches silently is not pairing; it is an audience. That failure mode is common enough that it is worth naming before the workshop, so pairs can catch themselves doing it.

---

## The AI Angle
### A Partner for the Review You Skipped

* Generation is cheap now. **Review** is the bottleneck.
* Pairing puts a second reader on the code at the moment it is written, not three days later.
* A partner asks the question the tool will not: *why is this right?*
* The tool writes the first draft. The pair writes the final one.

Note:
Tie this to the series theme. When code arrives faster than anyone can review it, the constraint in the system moves from writing to judging. Pairing is a review mechanism that scales with generation speed, because it runs in the same minute rather than in a queue.

Be careful not to oversell: a pair reviewing generated code can still rubber-stamp it. The discipline that matters is the same one from the TDD deck — someone has to be able to explain *why*, and a partner who asks is the cheapest way to find out that nobody can.

---

# Demonstration
## One Exchange of the Ping-Pong

Note:
We are going to watch a single exchange between two people: one test written, one implementation made to pass, one question asked. Watch the question rather than the code.

The problem is deliberately tiny — the average of a list of numbers — because the interesting part is not the algorithm. It is what the second person contributes without typing anything.

--

## Step 1: A Writes the Test

```typescript
test('averages three numbers', () => {
    assert.equal(average([1, 2, 3]), 2);
});
```

* A has made **one** decision: the answer is 2.
* A has silently assumed two others:
  * what `average([1, 2])` should do — `1.5` or `1`?
  * what `average([])` should do — `0`? throw? `NaN`?
* Tests look precise. Look at what they leave unsaid.

Note:
Put this on the board and ask the room what the test actually pins down. It pins down exactly one case. Everything else about the function is still a matter of opinion, and the opinion belongs to whoever writes code next.

That is why the driver is not the only author. The person at the keyboard will fill in the gaps with their own assumptions, silently, and the test will pass.

--

## Step 2: B Implements — and Asks

```typescript
export function average(numbers: number[]): number {
    return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
}
```

* Green. B could stop here, and most of us would.
* Instead B asks: **"What should `average([])` do?"**
* Nothing in the test says. Nothing in the code protects against it.

Note:
Let the room notice that the question arrived *before* anyone found the bug. That is the whole value proposition, in one sentence.

Ask the room: how would this have gone with one person? The empty-list case would have been found later, probably by a user, probably as `NaN` on a dashboard. Not because the author was careless, but because nobody asked a question that the author had already privately answered.

--

## Step 3: The Question Changes the Spec

```typescript
test('rejects an empty list', () => {
    assert.throws(() => average([]), /average of an empty list/);
});

export function average(numbers: number[]): number {
    if (numbers.length === 0) {
        throw new Error('average of an empty list');
    }
    return numbers.reduce((sum, n) => sum + n, 0) / numbers.length;
}
```

* This was **not a bug fix**. It was a **decision** that the pair made together.
* The test now says what the code means, not just what it does.
* B typed nothing all exchange. B's contribution was one question.

Note:
This is the punchline of the demonstration. The behaviour did not change because the code was wrong; it changed because a decision had never been made, and pairing forced it into the open.

Contrast it with the review-after-the-fact version: a reviewer reading the diff would ask "what happens when the list is empty?" and then wait a day for an answer, or file a ticket, or approve it with a comment. The pair asked the same question at the cheapest possible moment.

End the demo by pointing back at the TDD deck: this is still red, green, refactor. The loop has not changed. It just has two people in it.

---

# Hands-On Workshop
## The Roman Numerals Ping-Pong

"The routines are precisely memorized and played back... The motions are repeated over and over again as the practitioners swap roles."
— Robert C. Martin, *The Clean Coder*

Note:
Transition to the workshop. We are going to ping-pong a deliberately trivial problem — Roman numerals — because a problem you can solve without thinking is a problem you can pair on while thinking only about the pairing.

Organize the room into pairs at a single workstation. If someone is left over, make a three and rotate, or have them join a pair as an observer who must ask a question every five minutes.

--

## The Rules You Need

* `toRoman(arabic)` returns the Roman numeral for a positive integer.
* Seven symbols: `I` `V` `X` `L` `C` `D` `M`.
* **Largest first**, symbols repeat up to three times.
* A smaller symbol before a larger one is **subtracted**: `IV`=4, `IX`=9, `XL`=40, `XC`=90, `CD`=400, `CM`=900.

Note:
Give the room only these rules — no algorithm. The rules are all anyone needs; the structure is theirs to discover, and it is the discovery that makes the pairs talk.

Keep this slide up while they work. It is the only specification they get.

--

## The Ordered Test List

| # | Input | Expected |
|---|-------|----------|
| 1 | `1` | `'I'` *(already in the kata seed)* |
| 2 | `2` | `'II'` |
| 3 | `3` | `'III'` |
| 4 | `5` | `'V'` |
| 5 | `4` | `'IV'` |
| 6 | `9` | `'IX'` |
| 7 | `40` | `'XL'` |
| 8 | `1990` | `'MCMXC'` |

Note:
The list is a safety net, not a script. If a pair is in flow and writing their own examples, let them — the list is there so nobody stalls on "what should we test next".

Point out that the seed is a lie: `toRoman(1)` returns `'I'` because the stub always returns `'I'`. That is the first thing the pair should notice about each other. Does the implementer laugh and fix it, or does the test writer have to ask?

--

## The Crux: Test 5

```typescript
assert.equal(toRoman(4), 'IV');
```

* Tests 1-4 can be satisfied by **repeating symbols**. Both partners can quietly agree on a model that is wrong.
* Test 5 is where that model breaks.
* Watch what happens: does the pair **negotiate a new model**, or does somebody reach for a special case?

Note:
This is the moment the exercise exists for. Before test 5, the pair has no reason to disagree, and the pairing is pleasant and shallow. After test 5, someone has to propose a structure and the other has to accept or reject it. That is where the collaboration actually happens.

If a pair is stuck, ask the guiding question — "what is the largest symbol you could take off the front of this number?" — but do not answer it. If they special-case 4, do not stop them; test 6 and test 7 will punish it soon enough.

--

## The Format: Ping-Pong

* **A** writes one failing test, then **hands over the keyboard**.
* **B** makes it pass with the smallest change that could work, then writes the next test.
* **Both** refactor before the swap. The person not typing decides whether it reads well.
* Talk the whole time. The driver types only what the pair has agreed on.
* Swap on every turn, not every hour.

Note:
Insist on the swap. The most common failure of this exercise is one person quietly doing all the typing while the other watches, and it usually happens within the first ten minutes because one of them is faster at typing.

If you see a silent pair, it is almost always because the navigator has stopped disagreeing. Ask them a question — "which of you decided that?" — and the conversation restarts.

--

## The Constraint Game

* When the list runs out, the **test writer** imposes one constraint on the implementer.
* The test writer controls the design. That is the point of the asymmetry.
* Some that bite:
  * No lookup table of symbol/value pairs.
  * No recursion.
  * At most one loop.
  * `toRoman` must not exceed ten lines.
  * Add `toArabic` and round-trip every number from 1 to 399.

Note:
This is from the Practicing chapter: if the partners choose a new problem, "the programmer writing a test has an inordinate amount of control over how the problem will be solved", and can put constraints on speed, memory, or interface that challenge the partner.

It is also a diagnostic. A pair that cannot negotiate a constraint is not really pairing; one of them is just supervising. Give it ten minutes and see which pairs renegotiate and which pairs go quiet.

---

## Debrief
### What Did the Second Person Contribute?

* Which decision did your pair make that you would have made **differently alone**?
* Who held the keyboard more, and did that match who was thinking more?
* Did anything go **unsaid** that the other person later assumed?
* **The Economic Reality:** the cheapest review is the one that happens while the code is being written.

Note:
Bring the room back together for a five-minute debrief. Push for specifics — "we disagreed about whether 4 should be IIII" beats "it was interesting".

The third question is the one that carries the session. Almost every pair will have at least one moment where they agreed out loud about something they actually understood differently. Ask them to describe it. That moment is what pairing catches and a diff cannot.

If someone says pairing felt slow, agree with them, and then ask how much of the session they would have spent debugging alone. Nobody gets that time back either.

---

## Summary
### Two Heads Are Better Than One — On Purpose

* "All I'm going to tell you is that professionals pair." — Robert C. Martin
* Pairing is not a kindness or a crutch. It is how code gets reviewed and knowledge stops siloing.
* If you only pair in a crisis, you have already decided that pairing is better. Do it when it is calm.
* **The Challenge:** this week, ask someone to pair with you on one ordinary ticket — and offer when you see someone struggling.

Note:
Wrap up. The challenge is deliberately an *ordinary* ticket, not a hard one. The habit we are trying to build is pairing when nothing is on fire, because that is the version that compounds.

Thank everyone for their engagement, and point them at the kata in the repository — it stays there for practice, and it is short enough to run in twenty minutes at a lunch break.
