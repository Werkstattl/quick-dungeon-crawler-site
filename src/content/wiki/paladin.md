---
title: Paladin special ability — Divine Blessing
navTitle: Paladin healing
description: Learn how Divine Blessing heals the Paladin, how maximum HP affects the amount, and when automatic healing triggers.
category: stats-mechanics
order: 15
question: How much does the Paladin's special ability heal?
answer: 'Divine Blessing heals 80% of your maximum HP, rounded to the nearest whole number and capped at your missing health. It has a 10-second cooldown during combat. With Auto Mode and automatic special abilities enabled, the Paladin waits until HP is at or below 40% before using it, provided the ability and attack are ready.'
faqId: paladin-healing
reviewed: '2026-11-02'
gameVersion: '4.4.4'
sourceRef: 8cd8c7c8018e2790832a2ebf5787bd980df00c0a
sources:
  - assets/js/combat.js
  - assets/locales/en.json
related:
  - combat
  - stats
  - rogue
---

## How Divine Blessing heals

The Paladin's special ability, **Divine Blessing**, restores **80% of your maximum HP**, rounded to the nearest whole number. Healing cannot take you above maximum HP:

> **HP restored = min(round(maximum HP × 0.8), missing HP)**

With **1,000 maximum HP**, the ability can restore up to **800 HP**:

| HP before healing | HP restored | HP after healing |
| ----------------- | ----------- | ---------------- |
| 100               | 800         | 900              |
| 200               | 800         | 1,000            |
| 400               | 600         | 1,000            |

The amount scales with your maximum HP, not your ATK or Vampirism. Divine Blessing heals you without dealing an attack hit.

## Cooldown and automatic use

Divine Blessing is used during combat and has a **10-second cooldown**. The cooldown resets when combat ends. Using it also starts your normal attack cooldown; if your attack is not ready when you press the ability, it queues until your attack is ready.

With **Auto Mode** and **automatic special abilities** enabled, the Paladin uses Divine Blessing at **40% HP or lower**, once both the ability and attack are ready. The 40% threshold applies to automatic use; you can activate it manually at higher HP.

**Tip:** Healing at 20% HP or lower uses the full 80% heal, but waiting that long can be risky if the next enemy hit could defeat you. Heal earlier when you need to survive.

## Divine Blessing and Paladin's Heart

**Divine Blessing** is the Paladin class's healing ability. **Paladin's Heart** is a separate passive that reduces incoming enemy attack damage by **25%**; see [damage passives](/wiki/combat/#critical-hits-and-damage-passives).
