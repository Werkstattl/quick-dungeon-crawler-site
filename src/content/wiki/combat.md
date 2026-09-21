---
title: How damage and defense work
navTitle: Damage, defense & dodging
description: Understand why hits vary, how defense reduces damage, and where critical hits, Vampirism and dodging fit in.
category: stats-mechanics
order: 8
question: Why does my attack stat not match the damage I deal?
answer: 'Attack is an input to damage, not the final hit. An ordinary attack starts at ATK × ATK / (ATK + target DEF), then receives random variation, critical-hit and other bonuses. If the target has as much defense as you have attack, the starting damage is half your attack. A dodged hit deals no damage and gives no Vampirism healing.'
faqId: damage-defense
reviewed: '2026-09-20'
gameVersion: '4.2.2'
sourceRef: 2affb4b37ec86a248ce2efc4a54f736611cce527
sources:
  - assets/js/combat.js
  - assets/js/enemy.js
  - assets/js/affixes.js
  - assets/js/bestiary.js
  - assets/js/main.js
related:
  - stats
  - equipment
  - curse
---

## The damage behind a normal hit

For an ordinary player or enemy attack, use the attacker's **ATK** and the defender's **DEF**:

> **Starting damage = ATK × ATK / (ATK + DEF)**

For example, 1,000 ATK against 1,000 DEF starts at **500 damage**. The game then varies that damage between 90% and 110%, so a normal hit is roughly **450–550** before other effects.

Defense does not subtract directly from attack. Having more DEF than the enemy's ATK does not make you immune.

## How much protection does defense give?

The reduction depends on the enemy you are fighting. The same defense stops a larger share of a weak attack than of a strong one.

> **Damage reduction = DEF / (incoming ATK + DEF)**

These examples use an enemy with 1,000 ATK, before random variation, critical hits and skills:

| Your DEF | Damage reduction | Starting damage taken |
| -------- | ---------------- | --------------------- |
| 0        | 0%               | 1,000                 |
| 250      | 20%              | 800                   |
| 500      | 33.3%            | About 667             |
| 1,000    | 50%              | 500                   |
| 2,000    | 66.7%            | About 333             |
| 3,000    | 75%              | 250                   |
| 9,000    | 90%              | 100                   |

Defense has no fixed character cap in this version. Its reduction approaches 100% without reaching it in the formula; very small hits can still be affected by integer rounding.

Against a fixed incoming ATK, an idealized measure of survivability is **effective HP = HP × (1 + DEF / incoming ATK)**. Matching the enemy's ATK with DEF doubles that value; three times their ATK gives four times the value. This comparison isolates ordinary attack damage. Dodges, healing, critical hits and special damage change an actual fight.

## Critical hits and damage passives

Critical damage is a bonus on top of the hit: **50% Crit Damage means a 1.5× hit**, and 100% means a 2× hit. Crit Rate controls the critical-hit check; Crit Damage controls its strength.

The critical multiplier is applied before the extra damage from these passives:

| Passive         | Effect                                                                                                 |
| --------------- | ------------------------------------------------------------------------------------------------------ |
| Remnant Razor   | Adds 9% of the enemy's **current** HP to a player hit. Its contribution shrinks as the enemy loses HP. |
| Titan's Will    | Adds 4.5% of your **maximum** HP to a player hit.                                                      |
| Devastator      | Multiplies player hit damage by 1.3, but reduces your base attack speed by 30%.                        |
| Paladin's Heart | Reduces damage from an incoming enemy attack by 25%.                                                   |
| Aegis Thorns    | Reflects 30% of the damage from an enemy attack back to that enemy. A dodged attack reflects nothing.  |

These are passive effects. **Paladin's Heart** and the **Paladin class** are separate choices.

## What happens during an attack?

For an ordinary **player attack**, the sequence is:

1. Calculate starting damage from your ATK and the enemy's DEF.
2. Apply the 90–110% variation, check for a critical hit and round the result.
3. Apply relevant damage passives, then the Bestiary damage bonus if unlocked for that enemy.
4. Calculate your Vampirism healing. If the enemy dodges, both damage and healing become zero.
5. On a successful hit, apply any Open Wounds stack, deal the hit and heal you.
6. Resolve the enemy's Thorned reflection, if present, and validate health totals.

The Bestiary bonus is **1% extra player hit damage against that enemy type after 1,000 kills**. Open Wounds deals its bleeding damage on a separate timer.

An **enemy attack** checks your dodge before applying Paladin's Heart. The resulting incoming damage determines Aegis Thorns reflection. Companion attacks and class abilities have their own handling; the sequence above describes your ordinary attack.

## Vampirism and reflected damage

For the player, **healing = round(hit damage × Vampirism / 100)**. A hit of 500 with 20% Vampirism gives 100 healing before health limits and any subsequent reflection. Dodges cancel this healing. Player Vampirism is capped at **80%**.

Enemy Vampirism works differently in this version: it is calculated from the enemy's **ATK**, not the final damage it deals. Your dodge cancels the enemy's healing, but increasing your defense does not directly reduce that healing amount.

A **Thorned** enemy reflects 10% of a successful player hit, rounded with a minimum of 1 damage. Reflection is applied directly; it does not run through the ordinary ATK-versus-DEF calculation again. Large hits can therefore hurt you even when your defense is high.

## Why do enemies dodge more later?

Enemy dodge uses both Curse and **enemy level**:

> **Enemy dodge % = 2 × (Curse − 1) + enemy level / 10**, capped at 50%.

| Enemy level | Curse 1 | Curse 10 | Curse 15 |
| ----------- | ------- | -------- | -------- |
| 10          | 1%      | 19%      | 29%      |
| 50          | 5%      | 23%      | 33%      |
| 100         | 10%     | 28%      | 38%      |

The **Elusive** affix adds another 12 percentage points, still capped at 50%. For example, a level-100 Elusive enemy at Curse 10 has 40% dodge.

Your character's dodge has a different cap: **75%**. A dodge prevents an ordinary incoming hit and its associated enemy Vampirism; it is not a blanket defense against every special effect.

Our recommendation: compare health, defense, healing and damage together. A high dodge chance can help over many attacks, but enough health to survive a hit still matters when a dodge fails.
