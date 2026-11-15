---
title: How to find and unlock companions
navTitle: Finding & unlocking companions
description: Learn where to find companions, their enemy-level requirements, and how to permanently unlock Fairy Helper, Mini Dragon, Shadow Cat and Phoenix Chick.
category: stats-mechanics
order: 7
question: How do I find and permanently unlock companions?
answer: 'Wolf Pup is available from the start. Find other companions after winning fights and claiming rewards; eligible companions depend on the defeated enemy’s level. Repeated finds earn permanent unlock progress: Fairy Helper needs 100 points, Mini Dragon 250, Shadow Cat 500 and Phoenix Chick 1,000. Each find adds your current Curse level, capped at 10 points. Once unlocked, that companion joins your roster in its base form at level 1 in every new run.'
faqId: companions
reviewed: '2026-11-14'
gameVersion: '4.4.6'
sourceRef: 9ed3255910e378801af99199ec8928ee89c738a4
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
| Phoenix Chick | 71 and above                        | 1,000 points                  |

**Fairy Helper stops appearing above enemy level 70.** If you are working toward its unlock, look for it while fighting enemies in the 26–70 range.

These ranges make a companion eligible; they do not guarantee a find. The game also excludes companions already in your roster, including a base form when you own one of its evolved forms.

[Luck increases the companion find chance](/wiki/luck/#finding-companions), but it does not change the level requirements or the unlock points awarded for a find.

## How permanent unlock progress works

Fairy Helper, Mini Dragon, Shadow Cat and Phoenix Chick each have their **own progress counter**. Only finding that particular companion after combat advances its counter. Finding Fairy Helper does not add progress toward Mini Dragon, Shadow Cat or Phoenix Chick.

Each successful find adds points equal to your **current selected Curse level**, up to a maximum of **10 points per find**.

| Current Curse | Unlock progress per qualifying find |
| ------------- | ----------------------------------- |
| 1             | +1 point                            |
| 5             | +5 points                           |
| 10            | +10 points                          |
| 11–15         | +10 points                          |

For example, finding Fairy Helper on Curse 5 adds five points toward its 100-point target. Starting from zero, 20 Fairy Helper finds at Curse 5 would complete that unlock.

The counters measure **unlock points**, rather than a fixed number of encounters. Higher Curse can reduce the number of finds needed, but you still need to win fights and find the companion. Choose a [Curse level](/wiki/curse/) you can manage reliably.

## How do I permanently unlock Phoenix Chick?

**Phoenix Chick needs 1,000 unlock points.** It can be found after defeating enemies at **level 71 or higher**, provided you do not already own Phoenix Chick or its evolved form in that run.

Starting from zero, you need **100 Phoenix Chick finds at Curse 10 or higher**, or **1,000 finds at Curse 1**. These are successful Phoenix Chick finds across runs, not fights won. Curse 11–15 still awards ten points per find, so those levels do not speed up the unlock through extra points.

The permanent unlock adds **Phoenix Chick at level 1** to every new run. It can evolve into **Phoenix at companion level 50**, but that evolution does not carry over to the next run. Permanent Phoenix Chick unlocks were introduced in [update 4.3.1](/blog/update-4-3-1/).

## Why can't I find the same companion again?

Once a companion is in your roster, it cannot be found again in that run. Evolving it does not make the base form available to find again, either.

**Dismiss Companion only deactivates your active companion.** It remains in the roster, so dismissing it does not let you repeatedly find it to farm unlock points.

As a result, progress toward each permanent unlock normally accumulates **across multiple runs**. Summoning, switching, levelling and evolving a companion do not count as new finds.

## Where can I see my progress?

Open **Summon** or **Change** and look at an eligible companion's base-form card. Before it is permanently unlocked, the card shows an **Unlock** counter and a progress bar, such as **25/100** for Fairy Helper.

Evolved forms do not display that base-form unlock bar, but the progress you already earned is still kept. When the target is reached, the dungeon log announces that the companion will join every new run.

## What carries over to the next run?

When a run resets, the roster is rebuilt with **Wolf Pup plus your permanently unlocked companions**. They start in their base forms at **level 1**; their levels and evolutions from the previous run do not carry over. Select the companion you want to use with **Summon**.

Permanent unlock progress survives run resets in both normal mode and Hardcore. A companion you found but have not permanently unlocked must be found again in a later run. This also applies to Phoenix Chick until you reach its 1,000-point unlock target.

Unlock progress is part of your player save. Keep a [save backup](/wiki/getting-started/#save-a-backup) if you want to protect it; importing an older backup restores the progress recorded in that backup.
