---
title: Equipment rolls and endgame gear
navTitle: Stat rolls & endgame gear
description: Look inside item generation, from rarity roll budgets and stat limits to the stronger roll floors at tiers 11–15.
category: gear-upgrades
order: 10
question: Why can two items of the same tier and rarity have very different stats?
answer: 'Each item randomly chooses attributes from its equipment type’s pool, then rolls their values. Several rolls can stack on one attribute. Tier and level affect strength, rarity sets the base roll budget, and tiers 11–15 improve roll floors and percentage-stat limits. Matching tier and rarity does not guarantee matching stats.'
faqId: gear-rolls
reviewed: '2026-09-20'
gameVersion: '4.2.2'
sourceRef: 2affb4b37ec86a248ce2efc4a54f736611cce527
sources:
  - assets/js/equipment.js
  - assets/js/progression.js
  - assets/js/utility.js
related:
  - equipment
  - loot
  - refining
  - stats
---

## Start with the item, then look at the rolls

If tier, level, rarity and refining are still unfamiliar, start with [Equipment explained](/wiki/equipment/). This guide covers the numbers behind **regular equipment**. Companion charms use a separate system, outlined at the end.

For regular equipment, the main scaling input is:

> **Scaling factor S = tier × item level / 10**

A Tier 1 level-100 item and a Tier 5 level-20 item both have S = 10. This gives the same scaling input, not a promise of identical stats. A Tier 10 level-100 item has S = 100.

Item level is capped at **100** and tier at **15**. HP, ATK and DEF rolls have no additional per-roll cap, but their generation is still bounded by those level and tier limits.

## How many rolls does rarity give?

| Rarity    | Base rolls | Maximum with a cap-triggered bonus |
| --------- | ---------- | ---------------------------------- |
| Common    | 2          | 3                                  |
| Uncommon  | 3          | 4                                  |
| Rare      | 4          | 5                                  |
| Epic      | 5          | 6                                  |
| Legendary | 6          | 7                                  |
| Heirloom  | 8          | 9                                  |

These are **roll counts, not counts of different attributes**. If two rolls choose ATK, their values combine into one ATK line. The Forge's dice counters show this distinction.

Each equipment type has a pool of possible attributes. Some entries occur more than once, making them more likely: axes and scythes favor ATK and Crit Damage; daggers and flails favor attack speed and Crit Rate. A bonus roll still chooses from the relevant pool.

## Stat scaling and per-roll caps

The nominal values below describe scaling **before randomness**. They are neither guaranteed results nor the average final value after rerolls and caps.

| Stat               | Nominal value | One-roll cap, T1–10 | One-roll cap, T15 |
| ------------------ | ------------- | ------------------- | ----------------- |
| HP                 | 40 × (1 + S)  | No additional cap   | No additional cap |
| ATK                | 16 × (1 + S)  | No additional cap   | No additional cap |
| DEF                | 16 × (1 + S)  | No additional cap   | No additional cap |
| Attack speed bonus | 3 × (1 + S)   | 16%                 | 20.8%             |
| Vampirism          | 2 × (1 + S)   | 8%                  | 10.4%             |
| Crit Rate          | 2 × (1 + S)   | 10%                 | 13%               |
| Crit Damage        | 0.6 × (1 + S) | 20%                 | 26%               |
| Dodge              | 0.8 × (1 + S) | 4%                  | 5.2%              |
| Luck               | 0.8 × (1 + S) | 8 points            | 10.4 points       |
| Faster Run         | 1 + 2.5 × S   | 18%                 | 23.4%             |

**A one-roll cap is not an item cap.** Several rolls can land on the same stat, and [refining](/wiki/refining/) increases the item's effective values afterward. Your character also has separate [total stat caps](/wiki/stats/#character-stat-caps).

## How a value is generated

For tiers 1–10, the roll floor is 50%. The game:

1. Randomizes the base and scaled portions separately, each between 50% and 150%, to form a temporary ceiling.
2. Draws a value between 50% and 100% of that ceiling. HP, ATK and DEF use integer draws; percentage stats use decimal draws.
3. If a capped stat exceeds its one-roll cap, **replaces** it with a new value between 50% and 100% of that cap.

Exceeding a cap therefore does not set the value to its maximum. It can also add a bonus roll, with a strict limit of **one extra roll per item** on a fresh roll or an unlocked reroll.

As a formula, for a stat whose nominal value is M × (1 + S):

> **Ceiling = M × random(floor, 1.5) + M × random(floor, 1.5) × S**
>
> **Raw value = draw between ceiling × floor and ceiling**

Faster Run uses 1 for the base portion and 2.5 for the scaled portion. If a raw value exceeds its cap, the replacement is **cap × random(floor, 1)**.

At tiers 1–10, the theoretical range for an uncapped roll is roughly **25% to 150% of its nominal value**, before integer rounding. This wide spread explains why equal-level items can differ substantially.

## What changes at tiers 11–15?

Endgame tiers improve both the low end of rolls and the caps of percentage stats. Each tier above 10 adds **5 percentage points to the roll floor** and **6% of the original cap to the cap**.

| Tier | Roll floor | Per-roll cap multiplier |
| ---- | ---------- | ----------------------- |
| 1–10 | 50%        | 1.00×                   |
| 11   | 55%        | 1.06×                   |
| 12   | 60%        | 1.12×                   |
| 13   | 65%        | 1.18×                   |
| 14   | 70%        | 1.24×                   |
| 15   | 75%        | 1.30×                   |

The higher floor applies while forming the ceiling, while drawing the raw value, and when replacing an over-cap roll. At Tier 15, the theoretical minimum of an uncapped roll rises to about **56.25% of nominal**, before integer rounding.

For example, a Tier 15 Dodge roll has a cap of 4 × 1.30 = **5.2%**. If its raw value exceeds that cap, the replacement falls between **3.9% and 5.2%**. Multiple Dodge rolls can still stack on the item.

See [Curse progression](/wiki/curse/) for how Monarch victories unlock these tiers.

## What are the chances of a near-perfect roll?

For a **single decimal stat roll that has already exceeded its cap and is being replaced**, the result is uniform between the floor and 100% of the cap. That gives these conditional chances:

| Tier | At least 90% of that tier's cap | At least 95% of that tier's cap |
| ---- | ------------------------------- | ------------------------------- |
| 1–10 | 20%                             | 10%                             |
| 11   | About 22.2%                     | About 11.1%                     |
| 12   | 25%                             | 12.5%                           |
| 13   | About 28.6%                     | About 14.3%                     |
| 14   | About 33.3%                     | About 16.7%                     |
| 15   | 40%                             | 20%                             |

For threshold q and floor f, the probability in that replacement step is **(1 − q) / (1 − f)**. At Tier 10, reaching at least 99% of the cap in that step has a 2% chance.

These percentages are **not the chance of finding a perfect item**. They assume the desired stat was selected and its raw roll exceeded the cap. Actual item odds also depend on item level, rarity, attribute selection, repeated rolls and what counts as “perfect” for your build. A raw roll that never exceeded the cap follows a different distribution.

## How locked rerolls and charms differ

**Locked rerolls preserve the locked attributes and their roll counts.** Those rolls remain spent. The remaining roll budget is distributed among unlocked attributes; cap replacements do not keep expanding that budget. Locking a line with three contributing rolls costs three rolls of capacity, not one.

**Companion charms use separate stat formulas and roll counts:** Common and Uncommon get 1 roll, Rare and Epic get 2, Legendary and Heirloom get 3. Their stats can affect either the companion or the player, depending on the attribute. The regular-equipment cap table and bonus-roll rule above should not be used to judge a charm.

Our recommendation: use roll counts and limits to understand an item's potential, then compare the actual benefits to your current build. A high roll on an unneeded or already-capped stat may be less useful than a modest roll elsewhere.
