---
title: Monster types, stats and modifier glossary
navTitle: Monster types & modifiers
description: Find the exact effects of Armored, Enraged, Regenerating and every other monster modifier, and compare Defensive, Offensive and Lethal types.
category: stats-mechanics
order: 13
question: What is the difference between an Armored monster and a Defensive monster?
answer: 'Defensive is a base enemy type with higher starting health and defense. Armored is an extra modifier that multiplies defense by 1.6 and attack speed by 0.85. A monster can be both Defensive and Armored. Other modifiers add effects such as regeneration, lifesteal or reflected damage; the glossary lists every type and modifier with its exact effects.'
faqId: monster-modifiers
reviewed: '2026-10-28'
gameVersion: '4.4.3'
sourceRef: d75e2113547423250273af818d15f2472c212594
sources:
  - assets/js/enemy.js
  - assets/js/affixes.js
  - assets/js/combat.js
  - assets/locales/en.json
related:
  - combat
  - stats
  - curse
  - loot
---

## Reading a monster's labels

Monsters have a **base type**: Offensive, Defensive, Balanced, Quick or Lethal. This determines their starting stat rolls. They can also have extra **modifiers**, called **affixes**, such as Armored, Enraged or Regenerating. These change the monster's stats or add a combat effect.

The first affix appears in the monster's name, and affixes also appear as badges in combat. Read the type and the affixes together: an **Armored Defensive** enemy has both the Defensive starting stats and the Armored modifier.

These labels describe the enemy for that encounter. They are separate from temporary effects you inflict, such as Open Wounds bleeding.

## Armored versus Defensive

**Defensive** determines the starting stat ranges: more HP and DEF, with lower ATK and Crit Rate than an Offensive enemy. It is not a fixed percentage bonus to another type.

**Armored** applies after the enemy's normal stat scaling: **+60% DEF and −15% attack speed**. It can appear on any base type eligible for affixes.

For example, if a monster has **1,000 DEF and 1 attack per second** before affixes, Armored changes those values to **1,600 DEF and 0.85 attacks per second**. It does not add HP. Extra defense reduces incoming damage through the [normal damage formula](/wiki/combat/#how-much-protection-does-defense-give); +60% DEF does not mean 60% less damage taken.

## Base enemy types

These are the **initial rolls before level, floor, Curse, encounter and affix scaling**. They are not the final stats of every monster with that label.

| Type | Starting HP | Starting ATK | Starting DEF | Starting Crit Rate |
| ---- | ----------- | ------------ | ------------ | ------------------ |
| Offensive | 350–420 | 70–100 | 30–60 | 1–4% |
| Defensive | 470–570 | 40–70 | 50–80 | 0.1–0.5% |
| Balanced | 390–490 | 50–80 | 40–70 | 0.5–1.5% |
| Quick | 350–420 | 50–80 | 40–70 | 1–4% |
| Lethal | 350–420 | 70–100 | 30–60 | 4–8% |

All five start with **50% Crit Damage** and **0% Vampirism** before later adjustments. Crit Damage is a bonus: 50% means a critical hit deals 1.5 times the ordinary hit damage.

**Quick and Swift are different.** In v4.4.3, the attack-speed calculation resets every base type's speed to **0.4** before applying level scaling and other multipliers. The Quick type therefore does not itself grant faster attacks in this version. The **Swift affix** does grant an attack-speed bonus.

Enemy dodge is calculated from level and Curse, rather than from the base type. See [enemy dodge chances](/wiki/combat/#why-do-enemies-dodge-more-later).

## Monster modifier glossary

Percentage changes below multiply the enemy's stats after normal scaling. A **percentage-point** bonus adds directly to a percentage stat: 10% dodge plus 12 percentage points becomes 22%.

| Modifier | Stat changes | Combat effect |
| -------- | ------------ | ------------- |
| **Enraged** | **+20% ATK**, **−20% maximum HP** | Stronger attacks, with less health to survive yours. |
| **Armored** | **+60% DEF**, **−15% attack speed** | More defense, with slower attacks. |
| **Swift** | **+35% attack speed**, **−15% maximum HP** | Faster attacks, with less health. Enemy attack speed is capped at **2.75 attacks per second**. |
| **Vampiric** | **+20 percentage points Vampirism** | Heals when its attack lands. Enemy healing uses its **ATK**, not the damage you actually take. |
| **Elusive** | **+12 percentage points dodge** | More likely to evade attacks. Total enemy dodge is capped at **50%**. |
| **Regenerating** | **−10% maximum HP** | Heals **1.5% of its maximum HP each second** from a finite reserve equal to **50% of its maximum HP**. |
| **Thorned** | **+15% DEF** | Reflects **10% of a successful ordinary player hit** back at you. |
| **Volatile** | **−10% maximum HP** | Explodes once when slain, dealing **12% of your maximum HP** to you. The explosion can kill you. |

HP, ATK and DEF are rounded after affixes. Healing, reflection and explosion amounts also use whole-number rounding; an active healing tick, reflection or explosion has a minimum calculated amount of 1.

### Regeneration has a limit

The badge is called **Regenerating**. Its healing reserve uses the monster's final maximum HP, after modifiers. A monster with **1,000 final maximum HP** can heal **15 HP per second**, up to **500 HP total** over the fight. Healing cannot exceed its missing HP or remaining reserve. It spends no reserve while at full health, and stops regenerating when the reserve runs out. The combat badge shows the remaining reserve.

### Vampiric, Thorned and Volatile

A Vampiric enemy with **1,000 ATK and 20% Vampirism** heals **200 HP** when its attack lands, subject to its maximum HP. Your defense reduces incoming hit damage, but does not directly reduce that healing. Dodging the attack cancels the healing.

Thorned reflection and Volatile's explosion remove HP directly; they do not run through the ordinary ATK-versus-DEF damage calculation. For example, a **500-damage ordinary hit** against Thorned reflects **50 damage**, while Volatile deals **120 damage** if your maximum HP is **1,000**.

## Multiple modifiers and where they appear

An enemy can have several different affixes, but cannot roll the same affix twice. Their stat multipliers combine multiplicatively. For example, Enraged and Regenerating together give **0.8 × 0.9 = 0.72 times** the pre-affix maximum HP, a 28% reduction before rounding.

| Encounter | Affixes |
| --------- | ------- |
| Regular enemy on floor 1 | None. |
| Regular enemy from floor 2 | A chance to have 1; from Curse 8, a second successful roll can give 2. Each roll's chance is **12% + 3% × Curse level**. |
| Floor Guardian | 1; increases to 2 from Curse 5. |
| Monarch | 2; increases to 3 from Curse 10. |
| Chest Mimic or Door Mimic | None. |

Each affix adds **25% to the reward multiplier for XP and gold**, giving **1.25×, 1.5× or 1.75×** for one, two or three affixes. This multiplier applies to rewards calculated from the modified enemy stats, so it is not an exact comparison with an otherwise unmodified enemy.

Each affix also adds **5 percentage points to equipment drop chance**, subject to the normal **80% cap**. Monarchs always drop equipment. See [loot and drop chances](/wiki/loot/).

## Boss enrage during a fight

Boss phase changes are separate from the **Enraged affix**. A surviving Floor Guardian powers up at **50% HP**; a surviving Monarch powers up at **50% and 25% HP**. Each threshold multiplies its current **ATK by 1.2** and **attack speed by 1.15**, still capped at 2.75 attacks per second. These increases can stack with its affixes, and do not apply the Enraged affix's maximum-HP penalty.
