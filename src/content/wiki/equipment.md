---
title: Equipment explained
navTitle: Tiers, rarity & item levels
description: Read an item's tier, level, rarity and refine bonus, then decide whether it is actually an upgrade.
category: gear-upgrades
order: 4
question: What is the difference between item tiers?
answer: "Tier is tied to the Curse level of regular dungeon drops and affects an item's potential stats. A higher tier gives more potential, but item level, rarity, rolled attributes and refining also matter. Compare the actual bonuses for your build before replacing an item just because its tier is higher."
faqId: item-tiers
reviewed: '2026-09-20'
gameVersion: '4.2.2'
sourceRef: 2affb4b37ec86a248ce2efc4a54f736611cce527
sources:
  - assets/js/equipment.js
  - assets/js/progression.js
  - assets/js/forge.js
related:
  - curse
  - refining
  - luck
---

## Four things to read on an item

| Property                     | What it tells you                                                                          |
| ---------------------------- | ------------------------------------------------------------------------------------------ |
| **Tier**, such as T3         | The progression tier. Regular drops match the current Curse level.                         |
| **Level**, such as Lv.20     | An input to the item's stat strength. Regular drops get their level from dungeon progress. |
| **Rarity**, such as Rare     | The item's rarity class, which influences how many stat rolls it receives.                 |
| **Refine level**, such as +2 | An upgrade applied to the existing item, increasing its effective stats.                   |

These properties work together. A high-tier item with an unsuitable set of attributes may be less useful than your current equipment.

## How tier changes equipment

For regular equipment, tier and item level both contribute to the possible stat values. Higher Curse levels provide access to higher-tier drops: **Curse 5 normally produces Tier 5 equipment**.

At tiers above 10, the game also improves the lower end of stat rolls and raises the per-roll limits of percentage-based stats. Individual outcomes are still random.

An item keeps the tier it had when it was created. Raising your Curse does not upgrade items already in your inventory, and refining does not change their tier.

## What rarity means

The rarity order is:

**Common → Uncommon → Rare → Epic → Legendary → Heirloom**

Higher rarity provides a larger stat-roll budget. Multiple rolls can land on the same attribute, so more rolls do not necessarily mean more different attributes.

The dice counters in the Forge show how many rolls belong to each stat. This matters when rerolling with locked stats: the locked values keep their share of the roll budget, leaving the rest for the unlocked stats.

## How to compare two items

1. **Check the slot.** Compare an item with the piece it would actually replace.
2. **Compare useful attributes.** Consider what your character needs now: damage, survivability or utility.
3. **Look at the complete trade-off.** A gain in one stat can come with losses in others.
4. **Account for refining.** Your current item may already have a refine bonus that the new drop does not.

For example, if you are dying quickly, replacing helpful health and defense bonuses with utility stats may make the run harder even when the replacement is a higher tier.

Our recommendation: judge upgrades by what changes on your character, then use tier and rarity to understand the item's longer-term potential.

## Merge, reroll or refine?

- **Merge:** combine three compatible items of the same tier and rarity to create an item of the next rarity. The output keeps their tier. Companion charms cannot be merged.
- **Reroll:** generate a new set of attributes on an existing item. Locking stats preserves those values and raises the costs.
- **Refine:** strengthen the existing item's stats by raising its refine level, up to +10.

Check the Forge's preview before committing. Each action has its own requirements, and merging consumes the selected inputs. See [the refining guide](/wiki/refining/) for a step-by-step upgrade.
