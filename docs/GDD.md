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
→ Present time / day / permit context
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

### 3.2 Survival Mode (Economic Survival)

**Goal:** Survive as many in-game weeks as possible.

- Player starts with a limited amount of money.
- Incorrect decisions result in parking fines.
- Every 7 rounds equals one in-game week.
- At the end of each week, the player receives a salary.
- The player can purchase parking permits to reduce risk.

**Game Over Condition:**
- Money ≤ 0

This mode emphasizes planning, risk management, and long-term strategy.

---

### 3.3 Time Mode (Time Attack)

**Goal:** Answer as many questions as possible before time runs out.

- Fixed time limit (e.g. 60 seconds).
- No lives or money.
- Focuses purely on speed and accuracy.
- Ideal for short play sessions and skill testing.

---

### 3.4 Zen Mode (Practice Mode)

**Goal:** Practice without pressure.

- No failure state.
- No score, money, or time limit.
- Players can focus on understanding rules and building intuition.
- Ideal for learning and casual play.

---

## 4. Parking Rule System

### 4.1 Sign Structure

Each parking sign contains:
- **Rule Type** (e.g. No Parking, Time Limit, Permit Only)
- **Time Range**
- **Day Range**
- **Optional Conditions** (e.g. permit zone)

Signs are displayed as stacked elements, mirroring real-world street signage.

---

### 4.2 Rule Priority

When multiple signs apply to the same space:

1. **No Parking rules** override all others
2. **Time-based restrictions** override general allowances
3. **Permit-based rules** apply conditionally

If any active rule forbids parking, the correct answer is **No Parking**.

---

## 5. Permit System (Survival Mode)

Permits act as long-term or temporary advantages.

### Examples:
- **Zone Permit (A / B / C):** Allows parking in specific permit-only zones
- **Night Permit:** Allows parking during overnight restrictions
- **Street Cleaning Permit:** Ignores street cleaning rules
- **Temporary Permit:** Active for a limited number of rounds

Permits may:
- Fully override certain rules, or
- Reduce fines instead of negating them

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

## 10. Design Goals

- Turn real-world confusion into mastery
- Reward pattern recognition and learning
- Keep rules strict but fair
- Support both short sessions and long-term play
- Make failure informative, not frustrating

---

## 11. Non-Goals

- Perfect real-world legal simulation
- Multiplayer or competitive networking
- Landscape-oriented UI
- Heavy realism over readability

---

## 12. Development Status

This document represents **Version 1.0** of the design and will evolve alongside implementation.


