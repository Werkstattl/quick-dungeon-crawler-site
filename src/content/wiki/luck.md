---
title: 'Quick Dungeon Crawler Luck: Drop Chances & Limits'
navTitle: Luck & drop chances
description: 'See what Luck changes in Quick Dungeon Crawler: equipment drops, companions and Guardian Cores, plus the 140 Luck cap and why rarity rolls stay unchanged.'
category: stats-mechanics
order: 6
question: What does Luck do in Quick Dungeon Crawler?
answer: 'Luck increases equipment drop chance, companion find chance and Guardian Core drop chance. It does not change equipment rarity, item tier or Refine Stone drop chance. Against an ordinary enemy without affixes, 50 Luck raises equipment drop chance from 33.3% to 50%. The character stat caps at 140 Luck; the Luck bonus to companion finds stops increasing at 48.'
faqId: luck
reviewed: '2026-11-15'
gameVersion: '4.4.6'
sourceRef: 9ed3255910e378801af99199ec8928ee89c738a4
sources:
  - assets/js/enemy.js
  - assets/js/companion.js
  - assets/js/equipment.js
  - assets/js/player.js
  - assets/js/main.js
  - assets/js/dungeon.js
  - assets/js/combat.js
  - assets/js/progression.js
  - assets/js/affixes.js
related:
  - guardian-cores
  - companions
  - loot
  - stat-pools
  - stats
---

## Equipment drop chance

In **Quick Dungeon Crawler**, an ordinary enemy's equipment drop chance starts at **one in three**, or about 33.3%. Luck multiplies that base chance; it does not guarantee loot.

| Luck | Equipment drop chance |
| ---- | --------------------- |
| 0    | 33.3%                 |
| 25   | 41.7%                 |
| 48   | 49.3%                 |
| 50   | 50%                   |
| 100  | 66.7%                 |
| 140  | 80%                   |

These examples assume an enemy with no extra drop bonus. The calculation is one third multiplied by **1 + Luck / 100**, with a maximum ordinary drop chance of 80%.

**50 Luck means a 50% increase to the base chance**, not an extra 50 percentage points. Drops remain random: a 50% chance does not guarantee an item every second fight.

Each enemy affix adds **five percentage points** before the 80% cap is applied. For example, 50 Luck against an enemy with two affixes gives **60%** equipment drop chance. The Dungeon Monarch has a guaranteed equipment drop, so that encounter is an exception to the ordinary roll.

For the complete rarity distribution, guaranteed Monarch rarity and chest outcomes, see [Loot & rarity chances](/wiki/loot/).

## Does Luck give better rarities?

Luck affects whether the equipment drops. The item's rarity is rolled separately, and that rarity roll does not use Luck.

More drops give you more opportunities to find useful equipment over time. Luck does not directly turn Common drops into Rare, Legendary or Heirloom items, and it does not raise their tier.

For ordinary item generation, **Legendary is 2% and Heirloom is 1.2% per generated item**, at every Luck value. Against an ordinary enemy without affixes, Heirloom works out to **0.4% per defeated enemy at 0 Luck** or **0.6% at 50 Luck**. See the [Legendary and Heirloom drop table](/wiki/loot/#what-are-the-legendary-and-heirloom-chances-per-enemy) for the distinction between item rarity and combat drop chance.

For higher-tier drops, look at [Curse progression](/wiki/curse/). For the relationship between tier and rarity, read [Equipment explained](/wiki/equipment/).

## Finding companions

Luck also increases the chance of finding a companion after combat, subject to which companions are eligible to be found.

The companion chance starts at 8%. Luck contributes an extra **Luck / 400** as a probability, up to **12 percentage points**, so this part of the bonus reaches its limit at **48 Luck**. A roster with fewer than three companions gets another two percentage points per missing companion. The total find roll has a 30% cap; that cap is not a promised find rate.

For example, 20 Luck contributes five percentage points to the companion find chance. Enemy level and the companions you already own also affect which companions are available; a successful chance roll cannot create an unavailable companion.

To learn when each companion can appear and how repeated finds unlock starting companions, read [How to find and unlock companions](/wiki/companions/). Luck improves the find chance; the current Curse level determines permanent unlock progress per find. Adding more than 48 Luck does not make Phoenix Chick or any other companion more likely to appear through this bonus.

## Does Luck help with Guardian Cores?

**Yes.** Floor guardians on **Floor 20 or deeper** can drop Guardian Cores. Their base chance depends on the floor and your current Curse level; Luck multiplies it by **1 + Luck / 1400**, up to **1.10× at 140 Luck**.

That is a **10% relative increase**, not ten percentage points. At Floor 45 or deeper on Curse 15, the chance rises from **50% at 0 Luck to 55% at 140 Luck**. At Floor 20 on Curse 1, it rises from **2% to 2.2%**.

This is a separate roll from equipment and Refine Stones. Luck cannot make ordinary enemies, chests or Dungeon Monarchs drop Guardian Cores. See [Guardian Core chances by floor and Curse](/wiki/guardian-cores/) for the full table.

## What Luck does not affect

- **Refine Stone drops:** these use separate chances for combat and chests.
- **Equipment rarity:** rarity is a separate roll.
- **Equipment tier:** regular drop tier follows the current Curse level.
- **Chest outcomes:** the chest's equipment, gold, Mimic and empty outcomes use a separate roll.

Luck is a useful loot stat, but it is not a general bonus to every random event in the game.

## Should I build for Luck?

Our recommendation is to keep enough damage and survivability to finish fights reliably, then add Luck when it fits your equipment. A character who cannot survive the dungeon gets little benefit from a better drop chance.

You can gain Luck through suitable equipment and companion bonuses. The **Luck as level up option** setting also allows Luck to appear among level-up choices.

**48 Luck caps the companion-find bonus, not every benefit of Luck.** Equipment drop chance and the Guardian Core multiplier can still improve above 48. Against enemies with no affixes, equipment drop chance reaches its 80% cap at **140 Luck**, which is also the character's Luck cap in v4.4.6. Affix bonuses can make equipment drops reach that cap sooner.
