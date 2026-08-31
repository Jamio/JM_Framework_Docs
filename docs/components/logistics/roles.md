# ROLES

## Overview

Roles stores player assignments and qualifications such as Medic, Engineer, EOD, JTAC, Squad Leader, Platoon Leader, Pilot, Crewman and Logistics. Other framework components use these roles to decide who can access specialist actions.

Roles can be assigned through loadouts, editor settings or ZEN. The component can also show a Role Assignment card after the mission begins and create an ORBAT diary entry listing current groups, players, roles, primary weapons and qualifications.

[Arsenal](arsenal.md) controls equipment, while Roles records what a player is assigned or qualified to do. A loadout can assign both at the same time, but they remain separate systems.

<!-- IMAGE PLACEHOLDER: Role Assignment card and the generated ORBAT diary entry. -->

## How to set up the component

Configure **Deployment Information** in **[JMF] - Core > Optional Systems**. Roles can be assigned through mission loadout definitions, unit attributes where available, ZEN, or Mission Control.

## 3DEN Module Settings

### Optional Systems — Deployment Information

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Deployment Card | Enabled | Shows a Role Assignment card after intro and loadout initialisation. |
| Card Delay | `8` | Earliest mission time at which the card may appear. Active intros delay it further. |
| Card Duration | `10` | Seconds the card remains visible. |
| Show Card After Respawn | Disabled | Shows the assignment card after each respawn. |
| Enable ORBAT Diary Entry | Enabled | Creates a live roster grouped by squad. |
| Roster Scope | Own side | Lists the player's group, side or everyone. |
| Show Primary Weapons | Enabled | Includes each player's current primary weapon. |
| Show Qualifications | Enabled | Includes ACE and framework qualifications. |

## ZEN Modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Assign Unit Roles | A unit | Changes Medical, Engineer, EOD, JTAC, Squad Leader, Platoon Leader, Pilot, Crewman and Logistics assignments. |

Mission Control provides the same role controls from its **Personnel** page.

## Troubleshooting

- If a role-gated action is absent, inspect the unit's active roles rather than only its loadout name.
- If the Role Assignment card interrupts an intro, confirm the current Cutscenes component is active; the card waits for registered intro playback.
- If the ORBAT is incomplete, check **Roster Scope**, the player's side and whether the affected unit is a connected player.
