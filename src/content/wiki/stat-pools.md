---
title: Which stats each item type can roll
navTitle: Stat pools by item type
description: Every equipment type draws its rolls from a fixed list of stats. See what Hammers, Masks, Boots and accessories can and cannot roll.
category: gear-upgrades
order: 12
question: Why does my Hammer have Luck but no Vampirism?
answer: 'Every equipment type has a fixed list of stats it can roll, and that list differs between weapon classes and armour pieces. Hammers use a damage and defence list that includes Luck but never Vampirism, while Swords, Axes, Scythes, Daggers and Flails can roll Vampirism but never Luck. Fresh drops and Forge rerolls use the same list, so a reroll cannot produce a stat outside it.'
faqId: stat-pools
reviewed: '2026-10-21'
gameVersion: '4.4.0'
sourceRef: fda9b6fffcaf05e6f969f64317e49dbe369545b4
sources:
  - assets/js/equipment.js
  - assets/js/main.js
  - assets/js/player.js
related:
  - equipment
  - gear-rolls
  - luck
  - stats
---

## One fixed list per item type

Every item picks its stats in two steps: first it decides **how many** rolls it gets from its
rarity, then each roll picks a stat **from that item type's pool** and rolls a value. Which stats
are even possible is therefore decided by the item type, not by luck, tier or rarity.

The important consequence: **a drop and a Forge reroll use the same pool.** If a stat is not on
the list, no amount of rerolling will ever add it, and a stat that is on the list can appear more
than once, because several rolls may stack on the same stat. See
[Stat rolls & endgame gear](/wiki/gear-rolls/) for how many rolls each rarity gets.

## The full list

Within a pool, an entry that appears twice is roughly twice as likely to be picked as an entry
that appears once. Stat names are shown exactly as they appear in the game.

| Item type                         | Stats it can roll                                                          |
| --------------------------------- | -------------------------------------------------------------------------- |
| **Sword**                         | Attack, Attack Speed, Vampirism, Crit Rate, Crit Damage                    |
| **Axe, Scythe**                   | Attack twice, Vampirism, Crit Rate, Crit Damage twice                      |
| **Dagger, Flail**                 | Attack Speed twice, Attack, Vampirism, Crit Rate twice, Crit Damage        |
| **Hammer**                        | HP, Defense, Attack twice, Crit Rate, Crit Damage, Luck                    |
| **Shield** (Tower, Kite, Buckler) | HP twice, Defense twice, Attack, Dodge                                     |
| **Helmet** (Great Helm, Horned Helm) | HP twice, Defense twice, Attack, Dodge                                  |
| **Armour** (Plate, Chain, Leather)| HP twice, Defense twice, Attack, Dodge                                     |
| **Mask**                          | Dodge twice, Luck twice, Attack Speed, Crit Rate                           |
| **Boots**                         | Dodge, Faster Run, HP twice, Defense twice                                 |
| **Accessory** (Ring, Amulet, Talisman) | Attack, HP, Defense, Attack Speed, Crit Rate, Crit Damage, Vampirism, Dodge twice, Luck |

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

Luck is the most obvious trade-off: it raises your equipment drop chance and your companion find
chance instead of adding sustain, so a Hammer is a farming weapon rather than a Vampirism weapon.
The exact numbers are in [What Luck actually does](/wiki/luck/).

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

## Why you cannot see this in the game

The item tooltip shows what an item **did** roll, not what it **could** roll, so there is no
in-game list of these pools. This page is that list, and it covers the released version stated
above.
