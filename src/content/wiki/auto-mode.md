---
title: Auto Mode settings, auto-selling and stop conditions
navTitle: Auto Mode
description: Set up Auto Mode, keep Auto Attack separate, choose level-up priorities and understand when items are sold or exploration stops.
category: start-here
order: 4
question: How do I set up Auto Mode without selling equipment I want to keep?
answer: 'Open Menu → Auto Mode, enable Show Auto Button when the feature is unlocked, choose your settings and press Apply. Use the Auto button to start or stop it. To keep all new equipment, set Auto-sell below rarity to Off and Auto-sell below level to 0: either filter can independently sell a drop. Auto Attack is a separate combat setting.'
faqId: auto-mode
reviewed: '2026-11-15'
gameVersion: '4.4.6'
sourceRef: 9ed3255910e378801af99199ec8928ee89c738a4
sources:
  - assets/js/automode.js
  - assets/js/main.js
  - assets/js/combat.js
  - assets/js/player.js
  - assets/js/equipment.js
  - assets/js/dungeon.js
  - assets/js/companion.js
related:
  - getting-started
  - dungeon-paths
  - equipment
  - stats
  - save-data
---

## Enable and configure Auto Mode

1. Open **Menu → Auto Mode**. If the feature is locked, use the unlock options shown for your platform. The game supports a permanent unlock and access through an active Forge Membership; existing eligible unlocks are also recognised.
2. Enable **Show Auto Button**. This makes the control visible; it does not start automation by itself.
3. Choose the actions and stop conditions below, then press **Apply** to save your settings.
4. Use the **Auto** button to turn Auto Mode on or off. Enabling it also resumes paused exploration unless your stop-floor condition has already been reached.

When a run resets, Auto Mode switches off. Turn it on again when you are ready for the next run. Your settings remain available.

## Auto Mode and Auto Attack are separate

**Auto Mode** handles dungeon decisions and loot claiming according to its settings. **Auto Attack** repeats ordinary attacks when they are ready and has its own checkbox in combat. Turning on Auto Mode does not automatically turn on Auto Attack.

If you want ordinary attacks to repeat during automated exploration, enable Auto Attack too. If you want to choose dungeon events yourself but avoid tapping every attack, use Auto Attack on its own.

The **Special Ability** setting requires active Auto Mode. It uses a ready ability when the attack is also ready, with class-specific conditions: a Paladin waits until health is at or below 40%; a Rogue with Open Wounds waits for at least four bleed stacks. See the [Paladin](/wiki/paladin/) and [Rogue](/wiki/rogue/) guides for those abilities.

## Dungeon decisions

| Setting | What it controls |
| --- | --- |
| Engage | Enables automatic event confirmations, declines and combat reward claiming. Leave it enabled if you want those decisions automated. |
| Path | Chooses Balanced, Spoils, Sanctuary or Descent when a path choice appears. See [dungeon paths](/wiki/dungeon-paths/). |
| Blessings | Accepts blessing offers when automatic event decisions are active. These can spend gold. |
| Heal | Accepts healing-shrine offers when automatic event decisions are active. These can spend gold too. |
| Boss Doors | Controls entry into guardian doors, also subject to the doors-to-ignore setting. |
| Dungeon Monarch | Separately controls entry into the Monarch's chamber. Turning off Boss Doors does not turn this off. |
| Doors to Ignore per Room | Delays taking doors according to the room's door-ignore counter. Use 0 if you do not want this extra delay. |

Disabling **Engage** leaves those event decisions for you. Other features, such as Auto Attack or automatic special abilities, have their own conditions.

## Stop conditions and level-up choices

- **Stop at floor:** switches Auto Mode off and pauses exploration when you reach or pass the chosen floor. A new installation defaults to **20**; **0** disables this stop. If you try to enable Auto Mode at or above the target floor, it stops again immediately. Raise the target or use 0 to continue automatically.
- **Stop when a new pet is found:** switches Auto Mode off and pauses exploration after a successful new companion find, so you can inspect it.
- **Stop at level-up:** pauses exploration for your stat choice. Unlike the floor and pet stops, it does not switch the Auto Mode toggle off.

With **Stop at level-up** disabled, you can set up to **three Level-up stats** in priority order. Auto Mode picks the highest-priority stat among the offered choices. If none is offered, it uses the available free rerolls; after those are exhausted, it picks the first offered option. It does **not** spend gold on additional rerolls. Without any priorities, it leaves the stat choice to you.

See [level-up bonuses and stat caps](/wiki/stats/) before choosing priorities. A preferred stat is not necessarily useful once your character reaches its cap.

## Auto-selling: either filter can sell a drop

Auto-selling applies to newly generated equipment while Auto Mode is active. The filters are combined with **OR**, not AND:

- **Auto-sell below rarity** sells items strictly below the selected rarity. Choosing Rare sells Common and Uncommon, but not Rare. **All** sells every eligible drop; **Off** disables only this rarity rule.
- **Auto-sell below level** sells items strictly below the selected item level. Choosing 50 sells level 49 and lower, but not level 50. **0** disables only this level rule.

For example, with **Rare** and **50**, a level-80 Common item is sold by the rarity rule, and a level-40 Heirloom is sold by the level rule. A level-50 Rare item passes both filters and is kept.

**To disable auto-selling completely, use Off and 0 together.** Turning off just one filter leaves the other active. Locked items are excluded, but fresh drops are not automatically locked for you.

The sale check runs before **Equip best**, even when a new drop would fill an empty slot. Equip best cannot rescue a drop that the filters have already sold.

## What Equip best means

With this option enabled, Auto Mode runs **Equip best** after a drop that was not auto-sold. It uses your equipment-selection settings, including minimum rarity/tier and any custom stat priorities. Without custom priorities, it ranks eligible candidates by their effective gold value. Locked equipped items stay in place.

That ranking is not a full combat simulation. An expensive item can still be a poor match for your current build or stat caps. Read [how to compare equipment](/wiki/equipment/#how-to-compare-two-items) before relying on it.

## A cautious first setup

Our recommendation while learning is to keep auto-selling at **Off / 0**, enable **Stop at level-up** and **Stop when a new pet is found**, and choose a stop floor you are comfortable reaching. Inspect a few runs before allowing automatic sales or stat choices. Keep a [manual save export](/wiki/save-data/#export-a-backup) before experimenting with settings that can sell equipment.
