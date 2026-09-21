---
title: What Luck actually does
navTitle: Luck & drop chances
description: Understand equipment drop rates, companion finds and the limits of stacking Luck.
category: stats-mechanics
order: 6
question: What does Luck do?
answer: 'Luck increases the chance of an equipment drop after combat and helps you find companions. It does not directly improve equipment rarity or Refine Stone drop chances. For an ordinary enemy without an extra drop bonus, 50 Luck raises equipment drop chance from about 33% to 50%. The normal equipment drop roll is capped at 80%.'
faqId: luck
reviewed: '2026-09-20'
gameVersion: '4.2.2'
sourceRef: 2affb4b37ec86a248ce2efc4a54f736611cce527
sources:
  - assets/js/enemy.js
  - assets/js/companion.js
  - assets/js/equipment.js
  - assets/js/player.js
  - assets/js/main.js
  - assets/js/dungeon.js
related:
  - companions
  - loot
  - stats
---

## Equipment drop chance

The ordinary equipment drop roll starts at **one in three**, or about 33.3%. Luck multiplies that base chance.

| Luck | Equipment drop chance |
| ---- | --------------------- |
| 0    | 33.3%                 |
| 25   | 41.7%                 |
| 50   | 50%                   |
| 100  | 66.7%                 |
| 140  | 80%                   |

These examples assume an enemy with no extra drop bonus. The calculation is one third multiplied by **1 + Luck / 100**, with a maximum ordinary drop chance of 80%.

**50 Luck means a 50% increase to the base chance**, not an extra 50 percentage points. Drops remain random: a 50% chance does not guarantee an item every second fight.

Some enemy affixes add a drop bonus before the cap is applied. The Dungeon Monarch has a guaranteed equipment drop, so that encounter is an exception to the ordinary roll.

For the complete rarity distribution, guaranteed Monarch rarity and chest outcomes, see [Loot & rarity chances](/wiki/loot/).

## Does Luck give better rarities?

Luck affects whether the equipment drops. The item's rarity is rolled separately, and that rarity roll does not use Luck.

More drops give you more opportunities to find useful equipment over time. Luck does not directly turn Common drops into Rare, Legendary or Heirloom items, and it does not raise their tier.

For higher-tier drops, look at [Curse progression](/wiki/curse/). For the relationship between tier and rarity, read [Equipment explained](/wiki/equipment/).

## Finding companions

Luck also increases the chance of finding a companion after combat, subject to which companions are eligible to be found.

The companion chance starts at 8%. Luck contributes an extra **Luck / 400**, up to **12 percentage points**, so this part of the bonus reaches its limit at **48 Luck**. A small roster gets an additional bonus, and the total find roll is capped at 30%.

For example, 20 Luck contributes five percentage points to the companion find chance. Enemy level and the companions you already own also affect which companions are available; a successful chance roll cannot create an unavailable companion.

To learn when each companion can appear and how repeated finds unlock starting companions, read [How to unlock companions](/wiki/companions/). Luck improves the find chance; the current Curse level determines permanent unlock progress per find.

## What Luck does not affect

- **Refine Stone drops:** these use separate chances for combat and chests.
- **Equipment rarity:** rarity is a separate roll.
- **Equipment tier:** regular drop tier follows the current Curse level.
- **Chest outcomes:** the chest's equipment, gold, Mimic and empty outcomes use a separate roll.

Luck is a useful loot stat, but it is not a general bonus to every random event in the game.

## Should I build for Luck?

Our recommendation is to keep enough damage and survivability to finish fights reliably, then add Luck when it fits your equipment. A character who cannot survive the dungeon gets little benefit from a better drop chance.

You can gain Luck through suitable equipment and companion bonuses. The **Luck as level up option** setting also allows Luck to appear among level-up choices.

The character's Luck stat is capped at **140** in this version. The equipment drop cap may be reached earlier against enemies with extra drop bonuses, and the companion bonus stops increasing much earlier, at 48 Luck.
