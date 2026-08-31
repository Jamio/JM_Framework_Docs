# ROLES

## Overview

Roles is the framework's common record of player assignments and qualifications. It stores distinctions such as Medic, Engineer, EOD, JTAC, Squad Leader, Platoon Leader, Pilot, Crewman and Logistics in a form that every component can query consistently. This prevents each system from inventing its own medic list, checking a unit description string or depending on a particular loadout classname whenever it needs to decide who may use an action.

Roles can be assigned through loadout definitions, editor setup and live ZEN tools. The source does not matter to consuming components: Aid Stations can recognise an eligible medic, JTAC can recognise an authorised controller and Rally Points can identify leadership through the same interface. Mission-makers can therefore change how players receive their equipment without rewriting permissions elsewhere.

The component also provides player-facing presentation. A delayed Role Assignment card can welcome a player after opening cutscenes and other startup displays have finished, showing their name, group, role and qualifications. A live ORBAT diary entry organises present players into groups with their roles, primary weapons and notable traits, and can refresh as assignments or group names change.

Arsenal loadouts may assign roles as a convenience, but [Arsenal](arsenal.md) remains responsible for equipment. Roles records what a player is qualified or assigned to do; it does not define the contents of their inventory.

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
