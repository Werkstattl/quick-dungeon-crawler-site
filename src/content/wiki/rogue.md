---
title: Rogue special ability — Blood Surge
navTitle: Rogue special ability
description: Learn how Blood Surge scales with Open Wounds bleed stacks, from 1.1× ATK on an unbled target to 1.815× ATK at 13 stacks.
category: stats-mechanics
order: 14
question: How does the Rogue's special ability scale with bleed stacks?
answer: 'Blood Surge is a single hit starting at 1.1× your ATK, increased by 5% per bleed stack on the enemy. With no stacks it starts at 1.1× ATK; at the Open Wounds cap of 13 stacks it reaches 1.815× ATK, or about 1.8×. These values are before enemy defense and other damage modifiers.'
faqId: rogue-special-ability
reviewed: '2026-11-02'
gameVersion: '4.4.4'
sourceRef: 8cd8c7c8018e2790832a2ebf5787bd980df00c0a
sources:
  - assets/js/combat.js
  - assets/locales/en.json
related:
  - combat
  - stats
---

## Blood Surge and bleed stacks

The Rogue's special ability, **Blood Surge**, delivers a single hit. Its attack value starts at **1.1× your ATK**, with a **5% bonus per bleed stack** currently on the enemy:

> **Ability attack value = ATK × 1.1 × (1 + 0.05 × bleed stacks)**

With no bleed stacks, that is just **1.1× ATK**. Once **Open Wounds** builds up to its maximum of **13 stacks**, the ability reaches **1.815× ATK**, or about **1.8× ATK**.

The bonus multiplies the ability's starting attack value. Enemy defense, damage variation, critical hits and other damage modifiers then determine the final damage; see [how damage and defense work](/wiki/combat/).

**Tip:** Blood Surge is relatively weak against a target with no bleed stacks. Let Open Wounds build up before using it for a stronger hit.
