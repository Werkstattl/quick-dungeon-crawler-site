---
title: Level-ups, base stats and stat caps
navTitle: Level-ups & stat caps
description: See what level-up choices really increase, how your starting allocation matters, and when a stat stops helping.
category: stats-mechanics
order: 9
question: Do level-up bonuses multiply my equipment stats?
answer: 'Health, attack and defense level-up bonuses apply to your base stats from allocation and class, with equipment added afterward. They do not multiply the equipment contribution. Stats such as Crit Rate and Vampirism instead gain percentage points. Compare the displayed improvement and your character caps when choosing an upgrade.'
faqId: level-up-stats
reviewed: '2026-09-20'
gameVersion: '4.2.2'
sourceRef: 2affb4b37ec86a248ce2efc4a54f736611cce527
sources:
  - assets/js/main.js
  - assets/js/player.js
  - assets/js/dungeon.js
  - assets/js/combat.js
related:
  - getting-started
  - combat
  - luck
---

## Your base stats come from your starting choices

Before a run, you distribute **40 points** among HP, ATK, DEF and attack speed. Each point contributes:

| Allocation   | Contribution to the base stat           |
| ------------ | --------------------------------------- |
| HP           | 50 HP per point                         |
| ATK          | 10 ATK per point                        |
| DEF          | 10 DEF per point                        |
| Attack speed | 0.02 per point, added to a starting 0.4 |

Your class then adjusts those values:

| Class       | Base stat adjustments                         |
| ----------- | --------------------------------------------- |
| Knight      | +20 ATK                                       |
| Paladin     | +100 HP, +20 DEF                              |
| Beastmaster | No adjustment to these base stats             |
| Scout       | −50 HP, +10 ATK, −10 DEF, +0.02 attack speed  |
| Rogue       | −100 HP, +20 ATK, −10 DEF, +0.04 attack speed |

With 10 points in each stat, a Knight starts from **500 HP, 120 ATK, 100 DEF and 0.6 attack speed**, before equipment and other bonuses. The Devastator passive additionally reduces base attack speed by 30%.

There is no single set of base values that describes every character. Your allocation and class affect how much a percentage bonus to a base stat is worth.

## What a level-up adds

Every level gained automatically adds these bonuses: **5% base HP, 2% base ATK, 3% base DEF and 0.15% base attack speed**, plus **0.1 percentage points each of Crit Rate and Crit Damage**.

You also get a choice from three randomly offered stats. The selectable bonuses are:

| Choice       | Added bonus                                        |
| ------------ | -------------------------------------------------- |
| Health       | 11% of base HP                                     |
| Attack       | 9% of base ATK                                     |
| Defense      | 9% of base DEF                                     |
| Attack speed | 3.5% of base attack speed                          |
| Vampirism    | 0.5 percentage points                              |
| Crit Rate    | 1 percentage point                                 |
| Crit Damage  | 3 percentage points                                |
| Dodge        | 0.3 percentage points                              |
| Luck         | 1 point, if **Luck as level up option** is enabled |

The choice screen offers two rerolls. It also shows an estimated improvement alongside choices when that value can be calculated. Use it together with your current stats and caps. The automatic bonus and your selected bonus are separate gains.

## Why a health upgrade can look small

For HP, the calculation is:

> **Maximum HP = round(base HP × (1 + HP bonus / 100) + equipment HP)**

Here, the HP bonus includes accumulated level-up and other base-HP bonuses, including an active companion's applicable bonus.

With **500 base HP** and **2,000 equipment HP**, no other bonuses gives 2,500 HP. Selecting the **11% Health** choice adds **55 HP**, bringing that total to 2,555. It does not add 11% of 2,500. This example isolates the selectable bonus; leveling up also grants the automatic bonus above.

ATK and DEF follow the same base-then-equipment pattern for level-up bonuses, with further effects afterward:

- ATK is also multiplied by floor ATK buffs and the active companion's ATK bonus.
- DEF includes the companion's base-DEF bonus, then receives the floor DEF multiplier.
- Percentage bonuses accumulate against the base; selecting the same bonus repeatedly does not compound it against the previous total.

**Tip:** a displayed “+9% Attack” level-up choice need not produce a 9% increase to the ATK on your character sheet. Use the actual preview to compare it with another choice.

## Character stat caps

These limits apply to your character's effective total. They are different from the [limits on one equipment roll](/wiki/gear-rolls/#stat-scaling-and-per-roll-caps).

| Stat                      | Effective limit                                      |
| ------------------------- | ---------------------------------------------------- |
| Attack speed              | 2.75 attacks per second; 3.25 with **Limit Breaker** |
| Vampirism                 | 80%                                                  |
| Crit Rate                 | 100%                                                 |
| Dodge                     | 75%                                                  |
| Luck                      | 140                                                  |
| HP, ATK, DEF, Crit Damage | No fixed character cap in this calculation           |
| Faster Run                | Exploration interval reduction stops at 90%          |

Attack speed, Vampirism and Crit Rate can show an uncapped value in parentheses when your total is over the effective limit. That larger number does not bypass the cap.

Luck can stop helping a particular roll before you reach 140: its companion-find contribution is already maxed at **48 Luck**. See [Luck & drop chances](/wiki/luck/).

## Attack speed is not Faster Run

**Attack speed** controls the interval between your attacks. A rate of 2 means roughly one attack every half second when attacks are running continuously.

Equipment attack-speed bonuses have their own scaling. To inspect the current formula, let **B** be your base attack speed and **E** be the equipment attack-speed percentage divided by 100:

> **Uncapped attack speed = B × (1 + bonus / 100 + floor buff / 100 + E + E²)**

The bonus includes level-up and applicable companion attack-speed bonuses. The character cap is applied afterward. For example, B = 0.6 and +100% equipment attack speed, with no other bonuses, gives **0.6 × (1 + 1 + 1) = 1.8**.

**Faster Run** shortens the interval between exploration events. At 50 Faster Run, the base one-second interval becomes half a second. At 90 or more, it reaches the minimum of **0.1 seconds**. This does not increase combat attack speed or skip fights and event choices.

## Which stat should I choose?

Our recommendation: start with the problem your current run is having. Compare HP and defense when hits are too dangerous, damage and attack speed when fights take too long, or healing when you can survive hits but struggle to recover.

Check caps before choosing more of the same stat, and judge level-up choices separately from equipment upgrades. A small base-stat improvement and a large flat equipment bonus can have very different effects on the same character.
