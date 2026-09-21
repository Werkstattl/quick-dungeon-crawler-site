---
title: Loot, rarity and chest drop chances
navTitle: Loot & rarity chances
description: Separate the chance of getting an item from its rarity, and understand Monarch loot, chest outcomes and Refine Stone drops.
category: gear-upgrades
order: 11
question: Does a higher Curse or more Luck give better item rarities?
answer: 'Ordinary equipment uses the same rarity distribution at every Curse and Luck value. Curse raises the tier of regular drops; Luck raises the chance that an enemy drops equipment. Once an ordinary item is generated, Heirloom has a 1.2% rarity chance. Monarchs are an exception: their equipment reward is guaranteed Heirloom.'
faqId: loot-rarity
reviewed: '2026-09-20'
gameVersion: '4.2.2'
sourceRef: 2affb4b37ec86a248ce2efc4a54f736611cce527
sources:
  - assets/js/enemy.js
  - assets/js/equipment.js
  - assets/js/combat.js
  - assets/js/dungeon.js
  - assets/js/affixes.js
related:
  - luck
  - gear-rolls
  - refining
  - curse
---

## First an item drop, then an item rarity

An ordinary enemy's equipment drop chance starts at **one in three**. Luck increases that chance; each enemy affix adds another **5 percentage points**, up to an overall 80% cap.

> **Equipment drop chance = min(80%, 33⅓% × (1 + Luck / 100) + 5% × affix count)**

For example, 50 Luck gives a 50% equipment chance against an enemy with no affixes, or 60% against one with two affixes. See [the Luck guide](/wiki/luck/) for more examples and companion-find chances.

If equipment is generated, the game separately chooses its rarity. The percentages in the next table are **per generated item**, not per defeated enemy.

## Ordinary equipment rarity chances

| Rarity    | Chance per generated item |
| --------- | ------------------------- |
| Common    | 69.8%                     |
| Uncommon  | 20%                       |
| Rare      | 4%                        |
| Epic      | 3%                        |
| Legendary | 2%                        |
| Heirloom  | 1.2%                      |

These chances do not change with Luck, Curse or item level. For an ordinary enemy without affixes and with 0 Luck, the combined Heirloom chance is **⅓ × 1.2% = 0.4% per enemy**. At 50 Luck, it becomes **0.5 × 1.2% = 0.6%** because you receive more items, not because their rarity distribution improves.

More attempts improve your opportunities over time. These are independent random rolls, not a guarantee after a particular number of fights.

## Monarchs and merchants are exceptions

- **Dungeon Monarch:** equipment drops are guaranteed, and the reward is forced to **Heirloom** rarity.
- **Wandering equipment merchant:** purchased equipment has a minimum rarity of **Rare**. An ordinary Common or Uncommon rarity result is raised to Rare; higher rarity results remain possible.
- **Forge merging:** the new item's rarity follows the merge recipe rather than this random rarity table. See [merge, reroll or refine](/wiki/equipment/#merge-reroll-or-refine).

Monarch loot does not make every stat a maximum roll. Heirloom gives a larger roll budget; [attribute selection and stat values remain random](/wiki/gear-rolls/).

## What can a chest contain?

A chest event picks one of four outcomes with equal chances:

| Outcome                                 | Chance |
| --------------------------------------- | ------ |
| A Mimic encounter                       | 25%    |
| Equipment, or gold on a gold-only floor | 25%    |
| Gold                                    | 25%    |
| Empty chest                             | 25%    |

**Floor 1 and the current stairs floor are gold-only floors.** On those floors, the equipment outcome gives gold instead. On other floors, there is a 25% chance of direct equipment from the chest.

Luck does not modify this chest outcome roll. A Mimic starts a fight, whose combat rewards are handled separately; the table describes what opening the chest itself triggers.

## When do Refine Stones drop?

Refine Stones have separate rolls:

| Source                    | Chance of one Refine Stone               |
| ------------------------- | ---------------------------------------- |
| Combat victory reward     | 16%, whether or not equipment also drops |
| Chest's equipment outcome | 35%, after the chest produces equipment  |

The chest figure is conditional. It does **not** mean 35% of all opened chests give a stone. On a floor that allows chest equipment, the direct chest-stone chance is **25% × 35% = 8.75%**. Empty chests and gold outcomes do not get this roll. A chest-triggered Mimic can separately award a combat stone.

Luck does not change either stone chance. See [Refining equipment](/wiki/refining/) for costs and how to use them.

## Where do companion charms fit?

When equipment generation allows companion charms, it has a **5% chance to generate a charm** in place of a regular equipment piece. This is a choice within item generation, not an extra 5% chance to get a second item after every fight.

Charms have their own stat formulas and smaller roll budgets. They are separate from [finding and permanently unlocking companions](/wiki/companions/).

## What should I farm for?

Our recommendation is to match the target to the mechanic:

- **More equipment attempts:** add Luck while keeping fights reliable.
- **Higher-tier equipment:** progress through Curse levels you can handle.
- **A guaranteed Heirloom reward:** defeat a Dungeon Monarch.
- **Better rolls on an existing item:** compare Forge rerolling and refining costs with replacing it.

Increasing Curse changes item tier and difficulty. It does not directly improve the ordinary rarity percentages above.
