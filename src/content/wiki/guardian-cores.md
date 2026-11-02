---
title: Guardian Core drop chances by floor and Curse
navTitle: Guardian Core chances
description: Exact Guardian Core drop rates for every floor from 20 to 45, every Curse level, and the effect of Luck.
category: gear-upgrades
order: 6
question: How do floor and Curse levels affect Guardian Core drop chances?
answer: 'Only floor guardians on Floor 20 onward can drop Guardian Cores, one per successful roll. At 0 Luck, the chance rises from 2% on Floor 20 to 5% on Floor 45 at Curse 1–9; at Curse 15 it rises from 20% to 50%. Floor scaling stops at 45. Luck multiplies these chances by up to 1.10, giving a maximum of 55%.'
faqId: guardian-cores
reviewed: '2026-11-02'
gameVersion: '4.4.4'
sourceRef: 8cd8c7c8018e2790832a2ebf5787bd980df00c0a
sources:
  - assets/js/equipment.js
  - assets/js/progression.js
  - assets/js/combat.js
  - assets/js/dungeon.js
related:
  - refining
  - curse
  - luck
  - loot
---

## Which enemies drop Guardian Cores?

**Floor guardians defeated on Floor 20 or deeper** get one Guardian Core roll. A successful roll awards **one core**. Guardians below Floor 20, ordinary enemies, chests and Dungeon Monarchs do not award Guardian Cores. Dungeon Monarchs are a separate boss type from floor guardians.

The core roll is separate from equipment and Refine Stone drops: a guardian does not need to drop equipment to drop a core. The chance uses the **current run's Curse** and your character's Luck, not your highest unlocked Curse.

Guardian Cores are used with gold and Refine Stones to [refine level 100 equipment beyond +10](/wiki/refining/#refining-beyond-10).

## Drop chance by floor and Curse

Every entry is the chance of **one core per defeated floor guardian, at 0 Luck**. Curse 1–9 all use the same rates. Floors 45 and deeper all use the final row. Below Floor 20, every chance is 0%.

| Floor | Curse 1–9 | Curse 10 | Curse 11 | Curse 12 | Curse 13 | Curse 14 | Curse 15 |
| ----- | --------- | -------- | -------- | -------- | -------- | -------- | -------- |
| 20 | 2% | 4% | 7.2% | 10.4% | 13.6% | 16.8% | 20% |
| 21 | 2.12% | 4.24% | 7.632% | 11.024% | 14.416% | 17.808% | 21.2% |
| 22 | 2.24% | 4.48% | 8.064% | 11.648% | 15.232% | 18.816% | 22.4% |
| 23 | 2.36% | 4.72% | 8.496% | 12.272% | 16.048% | 19.824% | 23.6% |
| 24 | 2.48% | 4.96% | 8.928% | 12.896% | 16.864% | 20.832% | 24.8% |
| 25 | 2.6% | 5.2% | 9.36% | 13.52% | 17.68% | 21.84% | 26% |
| 26 | 2.72% | 5.44% | 9.792% | 14.144% | 18.496% | 22.848% | 27.2% |
| 27 | 2.84% | 5.68% | 10.224% | 14.768% | 19.312% | 23.856% | 28.4% |
| 28 | 2.96% | 5.92% | 10.656% | 15.392% | 20.128% | 24.864% | 29.6% |
| 29 | 3.08% | 6.16% | 11.088% | 16.016% | 20.944% | 25.872% | 30.8% |
| 30 | 3.2% | 6.4% | 11.52% | 16.64% | 21.76% | 26.88% | 32% |
| 31 | 3.32% | 6.64% | 11.952% | 17.264% | 22.576% | 27.888% | 33.2% |
| 32 | 3.44% | 6.88% | 12.384% | 17.888% | 23.392% | 28.896% | 34.4% |
| 33 | 3.56% | 7.12% | 12.816% | 18.512% | 24.208% | 29.904% | 35.6% |
| 34 | 3.68% | 7.36% | 13.248% | 19.136% | 25.024% | 30.912% | 36.8% |
| 35 | 3.8% | 7.6% | 13.68% | 19.76% | 25.84% | 31.92% | 38% |
| 36 | 3.92% | 7.84% | 14.112% | 20.384% | 26.656% | 32.928% | 39.2% |
| 37 | 4.04% | 8.08% | 14.544% | 21.008% | 27.472% | 33.936% | 40.4% |
| 38 | 4.16% | 8.32% | 14.976% | 21.632% | 28.288% | 34.944% | 41.6% |
| 39 | 4.28% | 8.56% | 15.408% | 22.256% | 29.104% | 35.952% | 42.8% |
| 40 | 4.4% | 8.8% | 15.84% | 22.88% | 29.92% | 36.96% | 44% |
| 41 | 4.52% | 9.04% | 16.272% | 23.504% | 30.736% | 37.968% | 45.2% |
| 42 | 4.64% | 9.28% | 16.704% | 24.128% | 31.552% | 38.976% | 46.4% |
| 43 | 4.76% | 9.52% | 17.136% | 24.752% | 32.368% | 39.984% | 47.6% |
| 44 | 4.88% | 9.76% | 17.568% | 25.376% | 33.184% | 40.992% | 48.8% |
| 45+ | 5% | 10% | 18% | 26% | 34% | 42% | 50% |

## Exactly how much does each level add?

**Floor:** from Floor 20 to Floor 45, each additional floor adds 2.4% of the Curse-specific peak chance. At 0 Luck, that means these increases in **percentage points per floor**:

| Curse | Increase per floor, through Floor 45 |
| ----- | ----------------------------------- |
| 1–9 | +0.12 percentage points |
| 10 | +0.24 percentage points |
| 11 | +0.432 percentage points |
| 12 | +0.624 percentage points |
| 13 | +0.816 percentage points |
| 14 | +1.008 percentage points |
| 15 | +1.20 percentage points |

At the same Curse and Luck, Floor 45 has **2.5 times** the chance of Floor 20. Going deeper than Floor 45 adds no further drop-chance bonus.

**Curse:** moving between Curse 1 and 9 adds nothing to this particular drop chance. Moving from Curse 9 to 10 **doubles it** at any eligible floor. Each further step, from Curse 10 through 15, adds **3.2 percentage points at Floor 20**, rising to **8 percentage points at Floor 45**, before Luck.

For example, on Floor 30 at 0 Luck, Curse 9 gives **3.2%**, Curse 10 gives **6.4%**, and Curse 11 gives **11.52%**. The increases are 3.2 and 5.12 percentage points respectively.

## How Luck changes the table

Multiply any table entry by **1 + Luck / 1400**, using Luck between 0 and its cap of 140.

| Luck | Multiplier | Floor 45+, Curse 15 |
| ---- | ---------- | ------------------ |
| 0 | 1.00× | 50% |
| 35 | 1.025× | 51.25% |
| 70 | 1.05× | 52.5% |
| 105 | 1.075× | 53.75% |
| 140 | 1.10× | 55% |

At 140 Luck the bonus is **10% relative**, not ten percentage points: a 2% chance becomes **2.2%**, and a 50% chance becomes **55%**. The per-floor and per-Curse increases above receive the same multiplier.

## Exact formula

Below Floor 20, the chance is zero. Otherwise:

> **Drop chance = peak chance × floor multiplier × Luck multiplier**

- **Peak chance:** 5% at Curse 1–9; otherwise **10% + 8% × (Curse − 10)** at Curse 10–15.
- **Floor multiplier:** **0.4 + 0.024 × (min(Floor, 45) − 20)**.
- **Luck multiplier:** **1 + min(max(Luck, 0), 140) / 1400**.

For example, Floor 25 at Curse 12 with 70 Luck gives **26% × 0.52 × 1.05 = 14.196%** per guardian.

## Choosing a farming difficulty

Our recommendation is to compare the chance with how reliably and quickly you can defeat eligible guardians. Curse 2–9 offer no core-chance advantage over Curse 1 at the same floor and Luck; Curse 10 is the first increase. Higher Curse still changes difficulty and equipment tier, so consider those rewards too.

Each drop is random. Even the maximum **55%** chance does not guarantee a core every second guardian, and an unlucky streak does not increase the next roll's chance.
