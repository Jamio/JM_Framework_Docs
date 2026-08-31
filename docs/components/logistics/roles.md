# ROLES

## Overview

Roles stores framework assignments and qualifications such as Medic, Engineer, EOD, JTAC, Squad Leader, Platoon Leader, Pilot, Crewman and Logistics. Other components query these roles for access and behaviour without needing to know how the role was assigned.

Roles can also show a delayed Role Assignment card and maintain a live ORBAT diary record. Arsenal loadout definitions may assign roles, but Arsenal remains a separate component.

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
