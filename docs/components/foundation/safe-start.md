# SAFE START

## Overview

Safe Start provides a controlled ready-up period at the beginning of an operation. It can block firing, prevent player damage and stop player-driven vehicles while groups organise, then release everyone together with a HUD message and sound.

The platoon leader can release the initial Safe Start once. Any later changes remain under Zeus or Mission Control authority.

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
