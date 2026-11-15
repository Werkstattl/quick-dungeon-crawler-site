---
title: Save backups, recovery and moving to another device
navTitle: Saves & device transfer
description: Export and import your progress, understand local automatic backups and find the recovery steps when a save cannot be loaded.
category: start-here
order: 5
question: How do I back up my progress or move it to another device?
answer: 'Open Menu → Export/Import Data, copy the complete export and keep it outside the game. On the destination, open the same menu, paste it into the import field and confirm. Import replaces the destination player data and resets the run; it does not resume the exported room or merge two saves. Automatic backups stay on the original device and are not cloud sync.'
faqId: save-data
reviewed: '2026-11-15'
gameVersion: '4.4.6'
sourceRef: 9ed3255910e378801af99199ec8928ee89c738a4
sources:
  - assets/js/main.js
  - assets/js/native-save-backup.js
  - assets/js/utility.js
  - assets/js/player.js
  - assets/js/companion.js
  - assets/js/native.js
related:
  - getting-started
  - auto-mode
  - companions
---

## Which kind of save do you need?

| Method | Purpose and location |
| --- | --- |
| Normal automatic save | Continue your character and run on the same installation. Stored in the current browser's site storage or app storage. |
| Automatic recovery backups | Recover a readable earlier state if the regular save is damaged or incomplete. Kept on the same device and installation. |
| Export/Import Data | Keep a separate copy or transfer player progress. Stored wherever you keep the export text. Import starts a new run. |

In v4.4.6, **Continue run** on the title screen shows the saved floor and room when a run can be resumed. Using that existing save is different from importing an export.

## Export a backup

1. Open the game menu and select **Export/Import Data**.
2. In **Export Data**, select **Copy**. If copying is unavailable, select and copy the complete text in the export field manually.
3. Paste the text into a note or text file outside the game. Keep the text intact; do not shorten or edit it.
4. Label your copy with a date, character and game version so you can recognise it later.

Our recommendation is to make a fresh export before changing devices, clearing app/browser data, switching an existing character to Hardcore or restoring an older backup. For protection against losing the device itself, keep a copy somewhere accessible from another device.

## Import or move to another device

1. On the destination, export any existing character you may want to keep first. If a fresh installation shows character creation, create a temporary character to reach the menu; the import will replace it.
2. Open **Menu → Export/Import Data** and paste the complete saved text into **Import Data**.
3. Select **Import**, then read and confirm the replacement warning. You can cancel before confirming.
4. Check your character's inventory and permanent unlocks after the import, then start the new run.

**Import replaces player data; it does not merge progress.** Importing an older copy restores the progress recorded in that copy, including its permanent companion-unlock progress.

The export contains player data such as inventory, equipment, gold and permanent unlock progress. Import resets character level and run bonuses, dungeon floor and room, combat state and the active run's companion roster. Starting companions are granted again from the imported unlock progress. It is not a way to resume the exact fight or room from the other device.

Auto Mode, audio and other settings stored separately from player data are not a complete part of this transfer. Recheck them on the destination. Restoring store purchases is also separate: use **Restore purchases** in the purchase screen where available; importing a character is not a cross-platform purchase transfer.

## How automatic recovery works

The browser version can fall back to readable local backup data. Interrupted multi-part saves can recover a complete previous checkpoint when one is available.

The native **Android and iOS apps** additionally maintain **two alternating backup files** containing the character, dungeon, enemy and companions. A new file is checked before it replaces the older slot. At startup, the game checks those backups and can restore a valid snapshot when the normal save is incomplete or unreadable, or when the snapshot is newer.

This recovery runs automatically; the two files are not a menu of save slots you choose between. Recovery can return you to an earlier checkpoint, so it does not guarantee that the very last action survives an interruption.

All of these copies are local. They do not synchronise devices, and clearing site/app data or removing the app can remove them. Keep a manual export separately if you need an independent backup.

## If the game cannot recover a save

When recovery cannot complete, the recovery screen offers **Show / copy saved data** and **Delete saved data and restart**.

1. Choose **Show / copy saved data** first if you want help recovering the character.
2. Keep the displayed report. If clipboard access fails, copy it manually from the visible text field.
3. Contact the [community support channel on Discord](https://discord.gg/U4DvQT3qfQ) and explain what happened, your platform and game version. The report is for support to inspect; it is **not** an ordinary export to paste into Import Data. The game does not send it automatically.

**Delete saved data and restart** is a separate action with a confirmation. It removes the local saved data and backup files so a new game can begin. Preserve the report or any earlier export before choosing it if the old character matters to you. A recovery report can help diagnosis, but cannot guarantee that damaged data is recoverable.

## Common transfer problems

| Problem | What to check |
| --- | --- |
| Copy does not work | Select and copy the complete export field manually, then check that your note contains the full text. |
| Import says the data is invalid | Use the original, unedited export. Check for missing characters and make sure it is an Export Data copy, not a recovery report. |
| Import reports a storage error | The game leaves the existing player active if the initial write fails. Keep both exports, address the storage problem and retry. |
| A different browser or app shows a new character | Browser profiles, sites and apps have separate storage. Transfer with Export/Import Data; the automatic backups do not follow you. |
| Equipment returned, but the run started over | That is the intended import behaviour. Continue run uses the existing local run; import resets it. |
