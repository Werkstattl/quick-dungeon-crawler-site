---
title: How to unlock companions
navTitle: Finding & unlocking companions
description: Find new companions, earn permanent unlock progress, and learn which companions join every new run.
category: stats-mechanics
order: 7
question: How do I unlock companions permanently?
answer: 'Find Fairy Helper, Mini Dragon or Shadow Cat after combat to build that companion’s permanent unlock progress. Their targets are 100, 250 and 500 points respectively. Each find adds your current Curse level, capped at 10 points. Once unlocked, that companion joins your roster at level 1 in every new run. Wolf Pup is available from the start; Phoenix Chick has no permanent unlock in this version.'
faqId: companions
reviewed: '2026-09-20'
gameVersion: '4.2.2'
sourceRef: 2affb4b37ec86a248ce2efc4a54f736611cce527
sources:
  - assets/js/companion.js
  - assets/js/combat.js
  - assets/js/main.js
  - assets/js/progression.js
related:
  - luck
  - curse
  - getting-started
---

## Your first companion

**Wolf Pup is available at the start of every run.** Tap **Summon** and select it to make it your active companion. Use **Change** to choose another companion from your current roster once you have found more.

Finding a companion adds it to your roster for the current run. A **permanent unlock** means its base form will also be available at the start of future runs, without having to find it again.

## Where to find new companions

After you win a fight and claim its rewards, there is a chance to find a companion. The possible companions depend on the **defeated enemy's level**, not your hero's level or the dungeon floor.

| Companion     | Enemy levels where it can be found  | Permanent unlock target       |
| ------------- | ----------------------------------- | ----------------------------- |
| Wolf Pup      | Available at the start of every run | Already available             |
| Fairy Helper  | 26–70                               | 100 points                    |
| Mini Dragon   | 36 and above                        | 250 points                    |
| Shadow Cat    | 51 and above                        | 500 points                    |
| Phoenix Chick | 71 and above                        | No permanent unlock in v4.2.2 |

**Fairy Helper stops appearing above enemy level 70.** If you are working toward its unlock, look for it while fighting enemies in the 26–70 range.

These ranges make a companion eligible; they do not guarantee a find. The game also excludes companions already in your roster, including a base form when you own one of its evolved forms.

[Luck increases the companion find chance](/wiki/luck/#finding-companions), but it does not change the level requirements or the unlock points awarded for a find.

## How permanent unlock progress works

Fairy Helper, Mini Dragon and Shadow Cat each have their **own progress counter**. Only finding that particular companion after combat advances its counter. Finding Fairy Helper does not add progress toward Mini Dragon or Shadow Cat.

Each successful find adds points equal to your **current selected Curse level**, up to a maximum of **10 points per find**.

| Current Curse | Unlock progress per qualifying find |
| ------------- | ----------------------------------- |
| 1             | +1 point                            |
| 5             | +5 points                           |
| 10            | +10 points                          |
| 11–15         | +10 points                          |

For example, finding Fairy Helper on Curse 5 adds five points toward its 100-point target. Starting from zero, 20 Fairy Helper finds at Curse 5 would complete that unlock.

The counters measure **unlock points**, rather than a fixed number of encounters. Higher Curse can reduce the number of finds needed, but you still need to win fights and find the companion. Choose a [Curse level](/wiki/curse/) you can manage reliably.

## Why can't I find the same companion again?

Once a companion is in your roster, it cannot be found again in that run. Evolving it does not make the base form available to find again, either.

**Dismiss Companion only deactivates your active companion.** It remains in the roster, so dismissing it does not let you repeatedly find it to farm unlock points.

As a result, progress toward each permanent unlock normally accumulates **across multiple runs**. Summoning, switching, levelling and evolving a companion do not count as new finds.

## Where can I see my progress?

Open **Summon** or **Change** and look at an eligible companion's base-form card. Before it is permanently unlocked, the card shows an **Unlock** counter and a progress bar, such as **25/100** for Fairy Helper.

Evolved forms do not display that base-form unlock bar, but the progress you already earned is still kept. When the target is reached, the dungeon log announces that the companion will join every new run.

## What carries over to the next run?

When a run resets, the roster is rebuilt with **Wolf Pup plus your permanently unlocked companions**. They start in their base forms at **level 1**; their levels and evolutions from the previous run do not carry over. Select the companion you want to use with **Summon**.

Permanent unlock progress survives run resets in both normal mode and Hardcore. A companion you found but have not permanently unlocked must be found again in a later run. Phoenix Chick must also be found again because it has no permanent starting unlock in v4.2.2.

Unlock progress is part of your player save. Keep a [save backup](/wiki/getting-started/#save-a-backup) if you want to protect it; importing an older backup restores the progress recorded in that backup.
