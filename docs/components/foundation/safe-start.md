# SAFE START

## Overview

Safe Start provides a controlled preparation period at the beginning of an operation. It gives players time to load in, organise groups, resolve equipment problems and hear the opening briefing without an accidental shot or early vehicle movement starting the mission prematurely. Depending on the mission's needs, the system can independently prevent weapon fire, player damage and movement of player-controlled vehicles.

The initial state is visible through a dedicated HUD element rather than a recurring hint, and its release can be accompanied by configurable text and sound. Mission-makers can decide whether the platoon leader receives a one-use ACE self-interaction to release the group. Once used, that action disappears: it is intended as a ready-up responsibility, not as permission for the platoon leader to reapply protection later in the mission.

Zeus and authorised Mission Control users retain live control, allowing Safe Start to be removed if the nominated leader disconnects or deliberately reapplied during an administrative pause. The state is managed centrally so that late-loading clients receive the correct restrictions and all participants are released together.

## How to set up the component

Open **[JMF] - Core > Core Settings**, enable **Safe Start**, and configure its duration and restrictions. Leave **Begin Mission in Safe Start** enabled for the normal mission-start workflow.

Platoon-leader control requires the unit to have the framework Platoon Leader role.

## 3DEN Module Settings

### Core Settings

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Safe Start | Disabled | Enables the Safe Start system and controls. |
| Begin Mission in Safe Start | Enabled | Applies Safe Start when the mission begins. |
| Automatic Duration | `600` | Seconds before automatic release. Use `0` for manual release only. |
| Allow Platoon Leader Control | Enabled | Gives the framework platoon leader an ACE self-action to release the initial Safe Start. |
| Prevent Player Damage | Enabled | Makes players invulnerable while Safe Start is active. |
| Prevent Player Vehicle Movement | Enabled | Stops player-driven vehicles; AI and scripted movement are unaffected. |
| Live Message | MISSION LIVE | HUD text shown on release. |
| Live Sound Class | `FD_Finish_F` | `CfgSounds` class played on release. Leave empty for silence. |

## ZEN Modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Manage Safe Start | Anywhere | Inspects, starts, pauses, resumes, extends or releases Safe Start using minute and second controls. |

Mission Control also provides quick Safe Start controls on its **Mission** page.

## Troubleshooting

- If the platoon-leader action is absent, confirm Safe Start and **Allow Platoon Leader Control** are enabled and the unit has the correct framework role.
- The platoon-leader action deliberately disappears after release; Zeus can still reapply Safe Start.
- If vehicles can move, confirm they are player-driven. Scripted and AI movement is intentionally allowed.
