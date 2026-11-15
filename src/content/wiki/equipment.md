---
title: Equipment explained
navTitle: Tiers, rarity & item levels
description: Read an item's tier, level, rarity and refine bonus, then decide whether it is actually an upgrade.
category: gear-upgrades
order: 4
question: What is the difference between item tiers?
answer: "Tier is tied to the Curse level of regular dungeon drops and affects an item's potential stats. A higher tier gives more potential, but item level, rarity, rolled attributes and refining also matter. Compare the actual bonuses for your build before replacing an item just because its tier is higher."
faqId: item-tiers
reviewed: '2026-11-15'
gameVersion: '4.4.6'
sourceRef: 9ed3255910e378801af99199ec8928ee89c738a4
sources:
  - assets/js/equipment.js
  - assets/js/progression.js
  - assets/js/forge.js
related:
  - stat-pools
  - curse
  - refining
  - gear-rolls
  - loot
  - auto-mode
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

An item's type determines which attributes it can roll. See [stat pools by item type](/wiki/stat-pools/) for every weapon, armour piece, accessory and companion charm, including the chance of selecting each stat.

For exact roll counts, stat limits and the improvements at tiers 11–15, read [Equipment rolls and endgame gear](/wiki/gear-rolls/). For the chance of finding each rarity, see [Loot & rarity chances](/wiki/loot/).

## How to compare two items

1. **Check the slot.** Compare an item with the piece it would actually replace.
2. **Compare useful attributes.** Consider what your character needs now: damage, survivability or utility.
3. **Look at the complete trade-off.** A gain in one stat can come with losses in others.
4. **Account for refining.** Your current item may already have a refine bonus that the new drop does not. The item details let you toggle **Include refinement** to compare base values.
5. **Inspect roll quality when useful.** Enable **Show roll quality** in the item details to see where its average base roll falls within the possible range. This is not the chance of finding that item; see [how to read roll quality](/wiki/gear-rolls/#what-does-the-roll-quality-percentage-mean).

For example, if you are dying quickly, replacing helpful health and defense bonuses with utility stats may make the run harder even when the replacement is a higher tier.

Our recommendation: judge upgrades by what changes on your character, then use tier and rarity to understand the item's longer-term potential.

## Merge, reroll or refine?

- **Merge:** combine three compatible items of the same tier and rarity to create an item of the next rarity. The output keeps their tier. Companion charms cannot be merged.
- **Reroll:** generate a new set of attributes on an existing item. Locking stats preserves those values and raises the costs.
- **Refine:** strengthen the existing item's stats. Items below level 100 stop at +10. Level 100 equipment can continue beyond +10 using Guardian Cores as well as gold and Refine Stones; those extra levels add a smaller bonus.

Check the Forge's preview before committing. Each action has its own requirements, and merging consumes the selected inputs. See [the refining guide](/wiki/refining/) for a step-by-step upgrade.

If you automate equipment selection, read [what Equip best means](/wiki/auto-mode/#what-equip-best-means). Its ranking follows your selection settings, while auto-selling runs first and can remove a new item before it is considered.
