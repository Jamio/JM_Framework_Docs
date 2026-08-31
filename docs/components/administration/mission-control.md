# MISSION CONTROL

## Overview

Mission Control is the framework's central live-management dashboard. It is designed for Zeus operators, server administrators and authorised mission controllers who need to adjust an operation after it has started. Instead of searching through the ZEN module tree for every action, common controls are collected into a readable tabbed dialog and presented alongside the current state of the relevant systems.

The dashboard provides quick access to broad mission functions such as Safe Start, cleanup, JTAC availability, tickets and permadeath, environmental effects and other framework utilities. It is particularly useful when the mission-maker is also taking part as a player: authorised users can make controlled changes without repeatedly entering Zeus or placing temporary modules in the world. ZEN modules remain available for spatial or unit-specific actions, while Mission Control handles the systems that benefit from a single persistent overview.

Mission Control does not replace the individual components or bypass their validation. It calls the same framework events and server-owned functions that their modules use, so permissions, public state and multiplayer behaviour remain consistent whichever interface initiates the change. Its contents can also grow with the framework, providing one predictable place for future live controls rather than adding unrelated actions to the player menu.

<!-- IMAGE PLACEHOLDER: Mission Control open on one of its system tabs. -->

## How to set up the component

Enable **Mission Control** in **[JMF] - Core > Core Settings**. Zeus and logged-in server administrators are authorised automatically.

To authorise a playable unit without giving it Zeus, select the unit in 3DEN and enable **JM Framework Mission Control > Authorised Mission Controller** in its attributes.

## 3DEN Module Settings

### Core Settings

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Mission Control | Enabled | Enables the dashboard and its ACE/ZEN entry points. |
| Restore Zeus Assignments | Enabled | Reserves existing curator slots by player UID and restores them after reconnect or JIP. |
| Synchronise New Zeus Objects | Enabled | Adds newly created mission objects to each curator's editable-object list. |

### Authorised Mission Controller

This is a unit attribute rather than a module. Enable it on a playable unit that should have Mission Control without occupying a curator slot.

## Mission Control pages

| Page | Available controls |
| --- | --- |
| Overview | Component state, player and curator counts, recent framework actions and mission validation. |
| Mission | Safe Start, countdown presets and registered task states. |
| Personnel | Player roles, qualifications, tickets, permadeath and Mission Control access. |
| Support | JTAC state, fire-mission availability and mission sound playback. |
| Logistics | Redeployment, MRV, Fortify resources and cleanup controls. |
| CBRN | System state, contamination, decontamination, particles, transmission and threat sources. |
| Environment | Storms, lightning and ambient effects. |
| Curators | Assigns or removes players from existing Eden curator slots. |

## ZEN Modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Mission Control | Anywhere | Opens the dashboard. When placed on an object, object-based actions can use it as their initial target. |

## Troubleshooting

- Mission Control requires **Enable Mission Control** in Core Settings, even for Zeus.
- Curator assignment uses curator modules already placed in 3DEN. Add enough Game Master slots for the maximum number of simultaneous Zeus players.
- If a control is absent or has no effect, confirm its underlying component is enabled and configured.
- Dedicated-server, JIP and multiple-Zeus behaviour should be confirmed during the mission's multiplayer test.
