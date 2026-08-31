# CORE

## Overview

The Core module establishes the shared fonts, colours, dialog themes, world label behaviour and basic runtime services that the rest of the framework uses. It also maintains the overall component registry to decide which additional components should be active, and marked as such.

## How to set up the component

Place one **[JMF] - Core > Core Settings** module in the 3DEN editor. Edit its attributes to configure settings.

**Missions that intend to use anything from the framework should always contain this module.**{ .jmf-emphasis }

## 3DEN Module Settings

These settings are present in the respective 3DEN modules, and can be edited to the mission-makers preferences:

### Core Settings Module

#### Framework Appearance

*These settings govern the physical appearance of framework dialogs, menus, notifications etc.*

| Attribute | Default | What it does |
| --- | --- | --- |
| Text Font | `RobotoCondensed` | Define the font classname for body texts. |
| Title Font | `PuristaSemiBold` | Define the font classname for dialog titles, prominent headings, notifications and identity names. |
| Dialog Theme | Modern | Selects the background artwork that appears for certain dialogs. |
| Primary Text Colour | `#FFFFFF` | Defines the general text colour for the mission |
| Accent Colour | `#FFDB33` | Defines the colour for accent bars, subtitles, selected rows and highlighted text. |
| Warning Colour | `#FF9F1C` | Warnings and severe medical states. |
| Success Colour | `#66FF66` | Success feedback and stable medical states. |
| Failure Colour | `#FF5555` | Failure, unavailable and critical states. |

Use HTML hex colours including the leading `#`. Dialogs will query the Core module when opened, so these settings will propogate.

#### Framework Behaviour

*These settings are to be used for some default framework behaviours. Fairly barebones at the moment but may include more in the future.*

| Attribute | Default | What it does |
| --- | --- | --- |
| Default Text Duration | `2` | Default duration for formatted framework screen text. |
| Debug Logging | Disabled | Adds detailed component diagnostics to the RPT. Only use for debugging. |

#### Mission Control

*These settings govern the live Mission Control dashboard and its curator support.*

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Mission Control | Enabled | Enables the dashboard for Zeus, administrators and authorised units. |
| Restore Zeus Assignments | Enabled | Reserves existing curator slots by player UID and restores them after reconnect or JIP. |
| Synchronise New Zeus Objects | Enabled | Adds newly created mission objects to curator editable-object lists. |

See the [Mission Control guide](../administration/mission-control.md) for dashboard pages and authorisation.

#### Safe Start

*These settings control the ready-up period before an operation goes live.*

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Safe Start | Disabled | Enables Safe Start and its platoon-leader and Zeus controls. |
| Begin Mission in Safe Start | Enabled | Applies it automatically when the mission begins. |
| Automatic Duration | `600` | Seconds before automatic release; `0` requires manual release. |
| Allow Platoon Leader Control | Enabled | Lets the framework platoon leader release the initial Safe Start. |
| Prevent Player Damage | Enabled | Makes players invulnerable while active. |
| Prevent Player Vehicle Movement | Enabled | Stops player-driven vehicles without affecting AI or scripted movement. |
| Live Message / Sound | MISSION LIVE / `FD_Finish_F` | Feedback shown and played on release. |

See the [Safe Start guide](safe-start.md) for the normal workflow and live controls.

#### Battlefield Cleanup

*These settings control server cleanup of old battlefield objects.*

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Framework Cleanup | Disabled | Starts the periodic cleanup service. |
| Cleanup Interval / Minimum Player Distance | `120` / `150` | Check frequency and safety distance in seconds/metres. |
| Clean AI Bodies / Player Bodies | Enabled / Disabled | Chooses which corpses may be removed. |
| Body Lifetime | `900` | Minimum corpse age in seconds. |
| Clean Vehicle Wrecks / Wreck Lifetime | Enabled / `1200` | Enables wreck cleanup and sets its minimum age. |
| Clean Dropped Equipment / Lifetime | Enabled / `600` | Enables ground-holder cleanup and sets its minimum age. |

See the [Cleanup guide](cleanup.md) for object protection and manual cleanup passes.

#### World Labels

*These settings govern global behaviour of "world labels", which is just the term I started using for 3D text markers.*

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable World Labels | Enabled | Master switch for 3D Labels above framework components. |
| Use Core Title Font | Enabled | Defines whether the 3D Label use the configured core Title Font or not. |
| Font Override | `RobotoCondensed` | Used only when the Core font option is disabled to define a custom font. |

Individual component modules can still control their own label text, height and distance.

#### Player Statistics

*These settings control whether player statistics are tracked.*

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Player Statistics | Enabled | Records player statistics and data, ready for export to debrief or something else. |
| Track Travel Distance | Enabled | Enables foot and vehicle distance tracking. |
| Track Medical Activity | Enabled | Enables ACE treatments tracking. |


## ZEN Modules

Core itself has no generic ZEN module. Safe Start, Cleanup and Mission Control have their own ZEN entries even though their mission settings are held by Core.

## Troubleshooting

* If dialogs appear to use mixed fonts or themes, or not the fonts you intended, check that you have only placed **one** core settings module.
* If a colour is ignored, or not appearing, check that you are using a six-digit HTML hex value beginning with a '#'
* If world labels dont appear, or appear when you dont want them, check the **Enable World Labels** checkbox in the attributes.
