---
title: Which stats each item type can roll
navTitle: Stat pools by item type
description: See the stat pools and per-roll odds for every equipment type and companion charm, plus how locked Forge rerolls change the available pool.
category: gear-upgrades
order: 12
question: Why does my Hammer have Luck but no Vampirism?
answer: 'Every equipment type has a fixed list of stats it can roll, and that list differs between weapon classes and armour pieces. Hammers use a damage and defence list that includes Luck but never Vampirism, while Swords, Axes, Scythes, Daggers and Flails can roll Vampirism but never Luck. Fresh drops and Forge rerolls use the same list, so a reroll cannot produce a stat outside it.'
faqId: stat-pools
reviewed: '2026-11-02'
gameVersion: '4.4.4'
sourceRef: 8cd8c7c8018e2790832a2ebf5787bd980df00c0a
sources:
  - assets/js/equipment.js
  - assets/js/forge.js
  - assets/js/main.js
  - assets/js/player.js
related:
  - equipment
  - gear-rolls
  - luck
  - stats
---

## One fixed list per item type

Looking for class stat pools? **All five classes share the same level-up choices.** See [class starting stats and the shared level-up pool](/wiki/stats/#do-classes-have-different-stat-pools). The equipment pools below depend on the item type, regardless of which class equips it.

Every item picks its stats in two steps: first it decides **how many** rolls it gets from its
rarity, then each roll picks a stat **from that item type's pool** and rolls a value. Which stats
are even possible is therefore decided by the item type, not by luck, tier or rarity.

The important consequence: **a drop and a Forge reroll use the same pool.** If a stat is not on
the list, no amount of rerolling will ever add it, and a stat that is on the list can appear more
than once, because several rolls may stack on the same stat. See
[Stat rolls & endgame gear](/wiki/gear-rolls/) for how many rolls each rarity gets.

## The full list

Within a pool, an entry that appears twice is **twice as likely** to be picked as an entry
that appears once. Each random roll selects one entry with equal probability. The odds below
apply to a single random stat selection with no locked stats; they are not the chance that
an entire item contains that stat. Percentages are rounded where needed.

| Item type | Stats it can roll | Chance per random roll |
| --------- | ----------------- | ---------------------- |
| **Sword** | Attack, Attack Speed, Vampirism, Crit Rate, Crit Damage | 20% each |
| **Axe, Scythe** | Attack twice, Vampirism, Crit Rate, Crit Damage twice | Attack and Crit Damage: 33.33% each; others: 16.67% each |
| **Dagger, Flail** | Attack Speed twice, Attack, Vampirism, Crit Rate twice, Crit Damage | Attack Speed and Crit Rate: 28.57% each; others: 14.29% each |
| **Hammer** | HP, Defense, Attack twice, Crit Rate, Crit Damage, Luck | Attack: 28.57%; others: 14.29% each |
| **Shield** (Tower, Kite, Buckler) | HP twice, Defense twice, Attack, Dodge | HP and Defense: 33.33% each; others: 16.67% each |
| **Helmet** (Great Helm, Horned Helm) | HP twice, Defense twice, Attack, Dodge | HP and Defense: 33.33% each; others: 16.67% each |
| **Armour** (Plate, Chain, Leather) | HP twice, Defense twice, Attack, Dodge | HP and Defense: 33.33% each; others: 16.67% each |
| **Mask** | Dodge twice, Luck twice, Attack Speed, Crit Rate | Dodge and Luck: 33.33% each; others: 16.67% each |
| **Boots** | Dodge, Faster Run, HP twice, Defense twice | HP and Defense: 33.33% each; others: 16.67% each |
| **Accessory** (Ring, Amulet, Talisman) | Attack, HP, Defense, Attack Speed, Crit Rate, Crit Damage, Vampirism, Dodge twice, Luck | Dodge: 20%; others: 10% each |
| **Companion Charm** | Attack twice, Attack Speed, Crit Rate, Crit Damage, Vampirism, Luck, Faster Run | Attack: 25%; others: 12.5% each |

The **Hammer** is the reason the question in the FAQ comes up so often: it is the weapon for
brawling builds that want HP and Defense next to its damage, and it is one of only three item
types that can roll Luck. Vampirism on a weapon means Sword, Axe, Scythe, Dagger or Flail.

## Finding a specific stat

If a stat feels impossible to keep, it is usually because only a few item types carry it:

- **Vampirism:** Sword, Axe, Scythe, Dagger, Flail, Accessory, and Companion Charms
- **Luck:** Hammer, Mask, Accessory, and Companion Charms
- **Faster Run:** Boots and Companion Charms only — no other regular item can roll it
- **Dodge:** Shield, Helmet, Armour, Mask, Boots, Accessory
- **HP and Defense:** Hammer, Shield, Helmet, Armour, Boots, Accessory
- **Attack Speed:** Sword, Dagger, Flail, Mask, Accessory, and Companion Charms
- **Crit Damage:** every weapon and every Accessory, but no defensive piece

Luck raises your equipment drop chance and your companion find chance. **Tip:** a Hammer is
an option if you want Luck on your weapon; choose another weapon type if you need Vampirism
there. The exact Luck bonuses are in [What Luck actually does](/wiki/luck/).

## How locked rerolls change the pool

Locking a stat preserves its value and all rolls already contributing to it. Every entry for
that stat is removed from the pool used by the remaining rolls, so those rolls cannot add more
to the locked stat. The remaining entries keep their relative weights.

For example, an Axe normally has six pool entries: Attack twice, Crit Damage twice,
Vampirism and Crit Rate. Locking Attack removes both Attack entries. Each remaining random
roll then has a **50% chance of Crit Damage**, **25% Vampirism** and **25% Crit Rate**.

Locked rolls still count against the item's roll budget. If a locked Attack line contains
three rolls, it preserves three rolls of capacity. See [locked rerolls and charms](/wiki/gear-rolls/#how-locked-rerolls-and-charms-differ).

## Same slot, same pool

Sub-types inside a slot share one pool, so a Tower Shield and a Buckler, or Plate and Leather,
draw from exactly the same list. Two pieces of the same slot differ through their rolled stats,
level, tier and rarity — never through their name. Only two choices actually change the list: the
**weapon class**, and whether a head item is a **Helmet or a Mask**.

## Caps are a separate limit

A pool decides only **which** stats are possible. How far each one is worth stacking is covered in
two other places, and both matter when you plan around a pool:

- individual stat lines have [one-roll caps](/wiki/gear-rolls/#stat-scaling-and-per-roll-caps),
  which rise with item tier,
- your character has [total stat caps](/wiki/stats/#character-stat-caps).

Two of those totals decide most pool choices: **Vampirism stops at 80%**, so Vampirism beyond that
point adds nothing no matter which weapon carries it, and **Luck stops at 140**, which is exactly
where the [80% equipment drop ceiling](/wiki/luck/) sits.

## Companion Charms are separate

Companion Charms use their own, weaker scaling formula and their own pool: Attack twice, Attack
Speed, Crit Rate, Crit Damage, Vampirism, Luck and Faster Run. They cannot roll HP, Defense or
Dodge. Rerolling and refining a Charm works like regular gear, merging does not.

## Where to see the pool in the game

Open the **Forge**, select **Reroll Stats**, and choose an item. The reroll preview lists the
stats available for that item and shows the remaining roll budget. Locking a stat removes it
from the preview's list of possible new rolls.

That preview lists each eligible stat once, so it does not show the duplicate entries that
make some stats more likely. Use the table above for those weights and per-roll odds.
