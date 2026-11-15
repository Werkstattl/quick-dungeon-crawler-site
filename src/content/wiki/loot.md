---
title: 'Quick Dungeon Crawler Loot: Rarity & Heirloom Chances'
navTitle: Loot & rarity chances
description: 'Find Quick Dungeon Crawler drop rates: Legendary 2% and Heirloom 1.2% per ordinary item, guaranteed Monarch loot, chest odds and Refine Stone chances.'
category: gear-upgrades
order: 11
question: What are the Legendary and Heirloom drop chances?
answer: 'In Quick Dungeon Crawler, ordinary generated equipment has a 2% Legendary chance and a 1.2% Heirloom chance. These are chances per item, not per enemy. Against an ordinary enemy without affixes and with 0 Luck, the Heirloom chance is 0.4% per defeated enemy. Luck increases equipment drop chance; Curse increases item tier. Neither changes the ordinary rarity percentages. Defeating a Dungeon Monarch guarantees a Heirloom equipment reward.'
faqId: loot-rarity
reviewed: '2026-11-15'
gameVersion: '4.4.6'
sourceRef: 9ed3255910e378801af99199ec8928ee89c738a4
sources:
  - assets/js/enemy.js
  - assets/js/equipment.js
  - assets/js/combat.js
  - assets/js/dungeon.js
  - assets/js/affixes.js
  - assets/js/progression.js
related:
  - guardian-cores
  - luck
  - gear-rolls
  - refining
  - curse
---

## First an item drop, then an item rarity

Loot in **Quick Dungeon Crawler** uses two separate rolls: whether equipment drops, then which rarity that item receives. An ordinary enemy's equipment drop chance starts at **one in three**. Luck increases that chance; each enemy affix adds another **5 percentage points**, up to an overall 80% cap.

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

These chances do not change with Luck, Curse or item level. Luck gives you more equipment attempts; Curse raises the tier of regular drops. Neither increases the Legendary or Heirloom percentage in this table.

## What are the Legendary and Heirloom chances per enemy?

Multiply the enemy's equipment drop chance by the item's rarity chance. The table shows chances **per defeated ordinary enemy without affixes**, rounded where needed:

<div class="wiki-compact-table">

| Luck | Legendary | Heirloom |
| ---- | --------- | -------- |
| 0    | 0.67%     | 0.4%     |
| 50   | 1%        | 0.6%     |
| 100  | 1.33%     | 0.8%     |
| 140  | 1.6%      | 0.96%    |

</div>

For example, at 50 Luck the Heirloom chance is **50% × 1.2% = 0.6% per enemy**. More Luck improves that overall chance by producing more items, while the rarity chance stays at 1.2% per item. Enemy affixes can raise the equipment chance, but the ordinary 80% drop cap still applies.

More attempts improve your opportunities over time. These are independent random rolls, not a guarantee after a particular number of fights.

## Monarchs and merchants are exceptions

- **Dungeon Monarch:** equipment drops are guaranteed, and the reward is forced to **Heirloom** rarity.
- **Wandering equipment merchant:** purchased equipment has a minimum rarity of **Rare**. An ordinary Common or Uncommon rarity result is raised to Rare; higher rarity results remain possible.
- **Forge merging:** the new item's rarity follows the merge recipe rather than this random rarity table. See [merge, reroll or refine](/wiki/equipment/#merge-reroll-or-refine).

Monarch loot does not make every stat a maximum roll. Heirloom gives a larger roll budget; [attribute selection and stat values remain random](/wiki/gear-rolls/).

## How many Heirlooms does the Dungeon Monarch drop?

The Dungeon Monarch gives **one guaranteed Heirloom equipment reward**, plus extra Heirlooms and Refine Stones at deeper floors:

<div class="wiki-compact-table">

| Floor | Heirlooms (total) | Bonus stones |
| ----- | ---------------- | ------------ |
| 20–24 | 1                | 0            |
| 25–29 | 2                | 2            |
| 30–34 | 3                | 4            |
| 35–39 | 4                | 6            |
| 40–44 | 5                | 8            |
| 45+   | 6                | 10           |

</div>

The depth bonus stops increasing at **Floor 45**. These bonus stones are guaranteed and separate from the ordinary **16% combat roll for one more Refine Stone**. Luck does not increase either the guaranteed reward count or that stone-roll chance.

Our recommendation is to choose a depth you can clear reliably; a larger promised reward only helps if you defeat the Monarch.

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

## Where do Guardian Cores drop?

**Floor guardians on Floor 20 or deeper** can drop one Guardian Core on a separate roll. Ordinary enemies, chests and Dungeon Monarchs do not drop cores. The chance depends on the floor, selected Curse and Luck, reaching **55% at Floor 45 or deeper, Curse 15 and 140 Luck**.

Unlike Refine Stones, Guardian Core drop chance **does benefit from Luck**. Use the [Guardian Core drop-rate table](/wiki/guardian-cores/#drop-chance-by-floor-and-curse) to compare floors and difficulties.

## Where do companion charms fit?

When equipment generation allows companion charms, it has a **5% chance to generate a charm** in place of a regular equipment piece. This is a choice within item generation, not an extra 5% chance to get a second item after every fight.

Charms have their own stat formulas and smaller roll budgets. They are separate from [finding and permanently unlocking companions](/wiki/companions/).

## What should I farm for?

Our recommendation is to match the target to the mechanic:

- **More equipment attempts:** add Luck while keeping fights reliable.
- **Higher-tier equipment:** progress through Curse levels you can handle.
- **A guaranteed Heirloom reward:** defeat a Dungeon Monarch.
- **Guardian Cores:** defeat floor guardians on Floor 20 or deeper; compare floor, Curse and Luck in the [core farming guide](/wiki/guardian-cores/).
- **Better rolls on an existing item:** compare Forge rerolling and refining costs with replacing it.

Increasing Curse changes item tier and difficulty. It does not directly improve the ordinary rarity percentages above.
