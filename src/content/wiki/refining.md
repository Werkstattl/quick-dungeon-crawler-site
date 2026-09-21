---
title: How to refine items
navTitle: Refining & the Forge
description: Improve a favourite item, find Refine Stones, and understand the costs before you use the Forge.
category: gear-upgrades
order: 5
question: How do I refine items?
answer: "Open the Forge using the anvil icon, select Refine, then choose an item. Check the next-level preview and confirm with Refine Equipment. You need gold and Refine Stones, plus a Forge Token for the action if your Forge is not unlocked. Refining strengthens the item's existing stats and goes up to +10."
faqId: refining
reviewed: '2026-09-20'
gameVersion: '4.2.2'
sourceRef: 2affb4b37ec86a248ce2efc4a54f736611cce527
sources:
  - assets/js/forge.js
  - assets/js/equipment.js
  - assets/js/dungeon.js
  - index.html
related:
  - gold
  - equipment
  - luck
---

## Refine an item step by step

1. **Open the Forge.** Use the anvil icon in the game's menu.
2. **Select Refine.** The Forge has separate modes for Merge, Reroll Stats and Refine.
3. **Choose an item.** You can select eligible equipment from your inventory or equipped items, including a companion charm.
4. **Compare the preview.** The panel shows the current item, its next refine level and the resources needed.
5. **Select Refine Equipment.** The upgrade is applied and the displayed costs are spent.

If your Forge is not unlocked, you also need a **Forge Token for each action**. The token grants access to that action; you still pay its gold and material costs. The Floor 13 blacksmith sells a token for 10,000 gold when you need Forge access.

## What refining changes

Each refine level adds **8% of the item's base stat values**, up to **+10**, for a total bonus of 80%. The bonus is additive across refine levels.

| Refine level | Stat multiplier | Example: an item's base 100 Attack |
| ------------ | --------------- | ---------------------------------- |
| +0           | 1.00×           | 100                                |
| +1           | 1.08×           | 108                                |
| +5           | 1.40×           | 140                                |
| +10          | 1.80×           | 180                                |

Displayed numbers may be rounded, and character stat caps still apply. The bonus strengthens the item's own values; it does not add 8% to your whole character on each upgrade.

Refining keeps the item's tier, level, rarity and attribute types. If you want different attributes, use **Reroll Stats**. If you want a higher rarity, investigate **Merge** instead.

## What does it cost?

The next refine level costs that many Refine Stones: +1 costs one stone, +2 costs two, and so on up to ten stones for +10. Taking an unrefined item all the way to +10 uses **55 stones** in total.

The gold cost scales with the item's value and the next refine level, with a minimum of 500 gold per upgrade. Use the cost shown in the Forge for the item you selected.

Without an existing Forge unlock, remember to allow for one token per action as well.

## Where to find Refine Stones

Refine Stones can drop after combat and from chests. In this version, the stone roll has a **16% chance after combat**. A chest that gives equipment also triggers a **35% stone roll**, awarding one stone when it succeeds. Empty chests and gold-only chest outcomes do not make that stone roll.

Stone drops use their own roll. **Luck does not increase these stone-drop chances.** You can read about the things Luck does affect in [the Luck guide](/wiki/luck/).

For the distinction between a chance per chest and a chance after an equipment outcome, see [the loot and chest guide](/wiki/loot/#when-do-refine-stones-drop).

## Why can't I refine this item?

Check these requirements:

- An item is selected in **Refine** mode.
- The item is below the maximum refine level of **+10**.
- You have enough gold and Refine Stones for the next level.
- You have Forge access or a Forge Token available.

## Is it worth refining early gear?

Our recommendation is to refine items with useful attributes that you expect to keep wearing. A small upgrade can help a difficult run, but spending all your stones on an item you will soon replace may delay a better upgrade.

In normal mode, retained equipment keeps its refine level across deaths. In Hardcore, regular equipment is lost on death, including the upgrades invested in it. Choose your investment with your mode in mind.
