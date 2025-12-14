# ParkingSign Arcade
**Game Design Document (GDD)**

---

## 1. Game Overview

**ParkingSign Arcade** is an arcade-style web game based on real-world U.S. parking regulations. 
Players must interpret stacked parking signs, time restrictions, and permit rules to decide whether a car can legally park at a given moment.
The game transforms everyday urban frustration into a fast-paced, learnable, and replayable challenge.

- **Genre:** Arcade / Simulation / Educational
- **Platform:** Web (itch.io)
- **Input:** Mouse / Touch
- **Orientation:** Portrait-first (Desktop, Mobile, Tablet)
- **Tech Stack:** React, TypeScript, Vite, HTML, CSS, LocalStorage
- **Software/Tools:** JetBrains Rider, Git/GitHub, Trello

---

## 2. Core Gameplay Loop
Generate parking signs
→ Present current time / day / temporary constraints
→ Player decides: Park or Not Park
→ Feedback (success or failure)
→ Update score / lives / money
→ Next round


This loop is shared across all game modes, with different failure conditions and progression systems.

---

## 3. Game Modes

### 3.1 Arcade Mode (Score Attack)

**Goal:** Achieve the highest possible score.

- Player starts with a fixed number of lives (e.g. 3).
- Each incorrect decision removes one life.
- Difficulty increases over time by:
    - Adding more stacked signs
    - Narrower time windows
    - More conditional rules
- Game ends when all lives are lost.
- Score is based on:
    - Correct answers
    - Speed
    - Difficulty level reached

**Primary feedback:**
- Success → Parking Receipt UI
- Failure → Parking Ticket UI

---

### 3.2 Survival Mode (Economic Management)

**Goal:** Survive as many in-game weeks as possible.

- Player starts with a limited amount of money.
- Incorrect decisions result in parking fines.
- Every 7 rounds equals one in-game week.
- At the end of each week, the player receives a salary.
- At the beginning of each week, player can purchase parking permits to reduce risk.

**Game Over Condition:**
- Money ≤ 0

This mode emphasizes planning, risk management, and long-term strategy.

---

### 3.3 Time Mode (Time Attack)

**Goal:** Answer as many questions as possible before time runs out.

- Fixed time limit (e.g. 1 min, 3 min, 5 min).
- No lives or money.
- Focuses purely on speed and accuracy.
- Ideal for short play sessions and skill testing.

---

### 3.4 Zen Mode (Practice Mode)

**Goal:** Practice with customizable targeted training, without pressure.

- No failure state.
- No score, lives, money, or time limit.
- Players can focus on understanding rules and building intuition.
- Ideal for learning and casual play.

For each constraint type, players may choose:
- **Always** – the constraint appears in every scenario
- **Never** – the constraint is completely excluded
- **Random** – the constraint appears probabilistically

---

## 4. Parking Rule System

### 4.1 Sign Structure

Each parking sign contains:
- **Rule Type**
- **Time Range**
- **Day Range**
- **Optional Conditions**

Signs are displayed as stacked elements, mirroring real-world street signage.

---

### 4.2 Rule Priority

When multiple parking rules apply to a single scenario, they are evaluated
using a fixed priority order:

1. **No Parking rules** have the highest priority and override all other rules.
   If parking is explicitly prohibited, no additional conditions can allow it.
2. **Time-based restrictions** override general allowances. A location that is
   normally permitted may become illegal during restricted time windows.
3. **Permit-based rules** apply conditionally and are evaluated only if no higher-
   priority rule prohibits parking. Parking is allowed only when the required
   permit is present.

If any active rule forbids parking, the correct answer is **No Parking**.

---

## 5. Permit System

Permits operate in two distinct modes depending on the active game mode and are
never mixed within the same context. In Arcade, Time, and Zen modes, permits are
scenario-based and randomly assigned to the vehicle. They function purely as
informational constraints, requiring players to determine whether the vehicle’s
permit matches the requirements shown on the parking signs.

In Survival Mode, permits become player-controlled resources. Instead of
being randomized, permits are purchased and managed by the player as part of a
long-term strategy. This shifts the challenge from short-term rule interpretation
to resource management and planning, allowing players to reduce future risk by
investing in the appropriate permits.

---

## 6. Economy System (Survival Mode)

- **Fines:** Applied on incorrect parking decisions
- **Salary:** Paid once every in-game week
- **Permit Costs:** Scale with power and coverage
- Difficulty progression increases:
    - Fine severity
    - Frequency of restricted scenarios

This system creates tension between short-term risk and long-term planning.

---

## 7. Difficulty Progression

Difficulty increases through:
- More stacked signs
- More overlapping time windows
- Narrower legal parking conditions
- Increased financial pressure (Survival Mode)

The game avoids randomness that feels unfair; all challenges remain logically solvable.

---

## 8. User Interface & Feedback Language

- **Parking Signs:** Rendered with pure CSS, inspired by real U.S. signage
- **Success Feedback:** Parking Receipt-style popup
- **Failure Feedback:** Parking Ticket-style popup
- **Layout:** Single-column, portrait-first design for all devices

The UI prioritizes clarity, readability, and immediate feedback.

---

## 9. Save Data

Local data is stored using `localStorage`, including:
- High scores
- Survival Mode progress
- Owned permits
- Player preferences
- Mistake history (for review or practice)

No server-side storage is required.

---

## 10. Development Status

This document represents **Version 1.0** of the design and will evolve alongside implementation.


