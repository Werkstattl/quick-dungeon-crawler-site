---
title: Floor routes explained
navTitle: Choosing your floor route
description: What Balanced, Spoils, Sanctuary and Descent do to each floor, and which route fits your run.
category: start-here
order: 12
question: What do the floor route choices do?
answer: "From Floor 2 onward you pick a route at the start of every floor. Balanced is the normal mix of everything. Spoils fills the floor with more treasure chests. Sanctuary offers more shrines and fewer enemies. Descent helps you find the way to the next room and the stairs faster. The choice applies to that floor only, so you can pick a different route on every floor."
faqId: routes
reviewed: '2026-10-14'
gameVersion: '4.3.5'
sourceRef: 9a43889da32aebae59b1d91dfee8e577f88f5cd5
sources:
  - assets/js/dungeon.js
  - assets/locales/en.json
related:
  - getting-started
  - curse
  - loot
---

## What are floor routes?

At the start of each floor, from **Floor 2** onward, several paths split from the landing and the game asks you to choose one. Your choice weights what you are likely to encounter while exploring that floor. It applies to **that floor only** — when you take the stairs, you choose again.

## The four routes

- **Balanced** – the normal mix of everything. Nothing is pushed one way or the other.
- **Spoils** – many treasure chests, fewer of the rooms go to waste. You will still run into enemies along the way.
- **Sanctuary** – many shrines, even fewer enemies. The safest route per room when you need to heal or pick up a blessing.
- **Descent** – a high chance to quickly find the next door or room, so you reach the stairs sooner. The rooms you do stop in are still dangerous.

## How the weighting works

Each room roll starts from the same base mix: one treasure chance, four enemy chances, one empty room and one shrine. Your route choice does not replace that mix, it adds extra chances to it:

| Route       | What is added to the room mix                       |
| ----------- | --------------------------------------------------- |
| Balanced    | Nothing                                             |
| Spoils      | 3 × treasure, 1 × enemy                             |
| Sanctuary   | 2 × shrine, 1 × empty room (plus the blessing statue if you haven't seen one yet) |
| Descent     | 2 × skip-to-next-room, 2 × enemy                    |

Two practical consequences:

- **Sanctuary has the lowest enemy chance per room**, because it dilutes the mix the most without adding enemies.
- **Descent gets you through a floor fastest.** Rooms skipped with "next room" consume the roll without a fight, so even though each *individual* room on Descent is about as likely to hold an enemy as on Balanced, you resolve fewer rooms per floor.

## Which route should you pick?

- Low on health or looking for blessings and shrines → **Sanctuary**.
- Gear trip at a Curse level you can safely fight at → **Spoils**.
- You want to reach deeper floors quickly, or you are ahead of your gear and want to bank progress → **Descent**.
- A normal, well-rounded floor → **Balanced**.

Routes change the *odds* of what you find; they never guarantee a specific encounter. If a route ends a run, the next floor is a fresh choice.
