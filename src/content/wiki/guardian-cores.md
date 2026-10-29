---
title: Guardian Cores explained
navTitle: Guardian Cores
description: Where Guardian Cores drop, how the drop chance scales with Curse level, floor and Luck, and what they are spent on.
category: stats-mechanics
order: 14
question: How do I get Guardian Cores?
answer: "Guardian Cores drop only from the Floor Guardian, the boss in the last room of a floor, and only from Floor 20 onwards. Each defeated Guardian makes one roll for a single core, so the chance rises with Curse level and depth: 2% for a Curse 1 Guardian on Floor 20, up to 50% on Curse 15 from Floor 45. Luck adds at most 10% relative to that chance. Cores are spent in the Forge to refine a level 100 item past +10."
faqId: guardian-cores
reviewed: '2026-10-29'
gameVersion: '4.4.4'
sourceRef: 0c8b0dfd74434654a66be1df15229c1677878984
sources:
  - assets/js/equipment.js
  - assets/js/forge.js
  - assets/js/combat.js
  - assets/js/dungeon.js
  - assets/js/main.js
related:
  - refining
  - luck
  - curse
  - monster-modifiers
---

## What Guardian Cores are

Guardian Cores are the rarest Forge material. They are only spent **past refine level +10**: a level 100 item can keep being refined beyond the normal cap, and each of those ascended levels costs Guardian Cores on top of gold and Refine Stones. Below +10 you never need a single core.

Cores are a permanent material like Refine Stones. A normal run reset keeps them. In **Hardcore, death wipes the whole inventory, cores included**.

## Where they drop

One roll per defeated **Floor Guardian** — the boss behind the last door of a floor. Nothing else drops them:

- Regular enemies, mimics and chests never drop a core.
- The **Monarch does not drop cores** either, despite being the tougher fight.
- A Guardian kill awards **at most one core**, never a stack.
- Nothing drops below **Floor 20**, regardless of Curse level or Luck.

The roll uses the floor you are standing on, so the encounter on Floor 22 is rolled at the Floor 22 chance.

## Drop chance

The chance has three parts: a peak set by your Curse level, a share of that peak set by the floor, and a Luck bonus on top.

**Peak chance by Curse level** (reached from Floor 45):

| Curse level | Peak chance |
| ----------- | ----------- |
| 1–9         | 5%          |
| 10          | 10%         |
| 11          | 18%         |
| 12          | 26%         |
| 13          | 34%         |
| 14          | 42%         |
| 15          | 50%         |

**Depth ramps that peak.** Floor 20 gives 40% of the peak, and the share climbs in a straight line to 100% at Floor 45. Deeper floors do not improve it — Floor 90 is the same as Floor 45. Combined, that gives:

| Curse level | Floor 20 | Floor 30 | Floor 45+ |
| ----------- | -------- | -------- | --------- |
| 1–9         | 2%       | 3.2%     | 5%        |
| 10          | 4%       | 6.4%     | 10%       |
| 12          | 10.4%    | 16.6%    | 26%       |
| 15          | 20%      | 32%      | 50%       |

**Luck adds a relative bonus**, not percentage points: the chance is multiplied by `1 + Luck / 1400`, and Luck stops counting at its cap of 140. That is **up to +10% relative** — 50% becomes 55%, 26% becomes 28.6%. The result is not capped, so the highest reachable chance is **55%**, slightly above the 50% peak. Luck is worth far less here than on ordinary equipment drops, where it moves the chance by tens of points: see [what Luck actually does](/wiki/luck/).

Affixes on the Guardian do not change the core roll. They raise XP and gold rewards, nothing more. A Curse 5 Guardian is more likely to carry two affixes, but that has no effect on cores — see [monster modifiers](/wiki/monster-modifiers/).

## What they are spent on

Guardian Cores are consumed by **ascended refining**, which is only available on a **level 100 item** — any other item stops at +10, and its displayed refine level stays clamped to +10.

| Refine level | Cores for this step | Bonus per level |
| ------------ | ------------------- | --------------- |
| +11          | 1                   | +2%             |
| +12          | 2                   | +2%             |
| +13          | 2                   | +2%             |
| +14          | 3                   | +2%             |
| +15          | 4                   | +2%             |
| +16          | 6                   | +2%             |

The core cost grows by 25% per step, rounded up, and the gold cost of the upgrade multiplies by **1.5× per ascended step** on top of its normal scaling. Each ascended level adds **+2% of the item's base stats**, on top of the +80% the item already has at +10 — a fifth of a standard refine level, so ascended levels are meant to be slow. Refining past +10 never changes the item's tier, rarity or attribute types; see [how to refine items](/wiki/refining/).

## Practical notes

- Cores are a Curse 10+ conversation. Below Curse 10 the peak stays at 5%, so one core per twenty Guardian kills is the best a Curse 9 run can do, and only on deep floors.
- A run reaches at most one Guardian per floor, so a Floor 20–45 stretch at Curse 15 is where a stock actually starts to grow.
- Only refine past +10 on an item you intend to keep: the core cost of the next step rises with every level, so early ascended levels are the cheapest you will ever pay.
- The Forge header shows your core count next to your Refine Stone count, and the Refine panel shows the core cost before you confirm.
