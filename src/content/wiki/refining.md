---
title: How to refine items
navTitle: Refining & the Forge
description: Improve a favourite item, find Refine Stones, and understand the costs before you use the Forge.
category: gear-upgrades
order: 5
question: How do I refine items?
answer: "Open the Forge using the anvil icon, select Refine, then choose an item. Check the next-level preview and confirm with Refine Equipment. You need gold and Refine Stones, plus a Forge Token for the action if your Forge is not unlocked. Equipment below level 100 stops at +10; level 100 equipment can go further using Guardian Cores."
faqId: refining
reviewed: '2026-11-02'
gameVersion: '4.4.4'
sourceRef: 8cd8c7c8018e2790832a2ebf5787bd980df00c0a
sources:
  - assets/js/forge.js
  - assets/js/equipment.js
  - assets/js/dungeon.js
  - assets/js/progression.js
  - index.html
related:
  - guardian-cores
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

If your Forge is not unlocked, you also need a **Forge Token for each action**. The token grants access to that action; you still pay its gold and material costs. When you need Forge access, the Floor 13 blacksmith sells one token for 10,000 gold at Curse 1–5, or two tokens for 20,000 gold at Curse 6–15.

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

## Refining beyond +10

**Level 100 equipment** can be refined beyond +10 with no fixed refine-level cap. Each level after +10 adds **2% of the item's base stat values**: +11 gives a 1.82× multiplier and +20 gives 2.00×. Equipment below level 100 still stops at +10.

These upgrades also require **Guardian Cores**, dropped by floor guardians from Floor 20 onward. See the [exact Guardian Core drop chances by floor, Curse and Luck](/wiki/guardian-cores/#drop-chance-by-floor-and-curse).

## What does it cost?

The Refine Stone cost is **75% of the next refine level, rounded up**: +1 costs one stone, +4 costs three, and +10 costs eight. Taking an unrefined item all the way to +10 uses **45 stones** in total. This formula continues beyond +10.

The base gold cost is the greater of **2,500 gold** or the item's value × the next refine level × 3.75, rounded to the nearest whole gold. Beyond +10, this base is multiplied by **1.5 raised to (next refine level − 10)**, then rounded again. Use the cost shown in the Forge for the item you selected.

Guardian Cores are only needed beyond +10. The cost is **1.25 raised to (next refine level − 11), rounded up**: +11 costs one core, +12 costs two, +13 costs two, and +14 costs two. Costs keep growing as refinement increases.

Without an existing Forge unlock, remember to allow for one token per action as well.

## Where to find Refine Stones

Refine Stones can drop after combat and from chests. In this version, the stone roll has a **16% chance after combat**. A chest that gives equipment also triggers a **35% stone roll**, awarding one stone when it succeeds. Empty chests and gold-only chest outcomes do not make that stone roll.

Stone drops use their own roll. **Luck does not increase these stone-drop chances.** You can read about the things Luck does affect in [the Luck guide](/wiki/luck/).

For the distinction between a chance per chest and a chance after an equipment outcome, see [the loot and chest guide](/wiki/loot/#when-do-refine-stones-drop).

## Why can't I refine this item?

Check these requirements:

- An item is selected in **Refine** mode.
- The item is below **+10**, or is **level 100** if you want to refine further.
- You have enough gold and Refine Stones for the next level, plus Guardian Cores for upgrades beyond +10.
- You have Forge access or a Forge Token available.

## Is it worth refining early gear?

Our recommendation is to refine items with useful attributes that you expect to keep wearing. A small upgrade can help a difficult run, but spending all your stones on an item you will soon replace may delay a better upgrade.

In normal mode, retained equipment keeps its refine level across deaths. In Hardcore, regular equipment is lost on death, including the upgrades invested in it. Choose your investment with your mode in mind.
