# OPTIONAL SYSTEMS

## Overview

Optional Systems is a shared settings hub for smaller, self-contained framework features. Its purpose is organisational: placing a separate editor module for every quality-of-life option would make the JM Framework category difficult to browse, so related switches and configuration groups are collected in one 3DEN module instead. Features configured here still initialise independently and do not become one monolithic system.

The module contains settings for components such as Death Camera, Identities, Player Statistics, Unknown Weapons, Forestry, private messaging and other optional client or gameplay behaviour. Mission-makers can enable only the features appropriate to a particular operation and adjust their broad behaviour without adding unused runtime systems. Disabling a category is expected to prevent its actions, event handlers and displays from initialising rather than merely hiding its output.

This page explains the role of the settings hub and points to the dedicated guides. Attribute-level details belong to those component pages, where the effect of each option can be explained in context. The arrangement keeps 3DEN tidy while preserving clear documentation and strict enable/disable boundaries in code.

## How to set up the component

Place one **[JMF] - Core > Optional Systems** module. Enable only the systems required by the mission, then follow the linked component guide for any additional setup.

## 3DEN Module Settings

| Subsection | Component settings | Guide |
| --- | --- | --- |
| Lightweight Systems | Aid Stations, Earplugs and Stamina | [Aid Stations](../logistics/aid-stations.md), [Earplugs](../gameplay/earplugs.md), [Stamina](../gameplay/stamina.md) |
| Deployment Information | Role Assignment card and ORBAT | [Roles](../logistics/roles.md) |
| Forestry | Grass, bush and tree removal | [Forestry](../gameplay/forestry.md) |
| Client Quality of Life | ACE Arsenal tabs and Screenshot Mode | [Client Quality of Life](../gameplay/client-qol.md) |
| Private Messages | Pause-menu messaging and notification sound | [Private Messages](../administration/private-messages.md) |
| Nametags | Nearby player-name labels | [Nametags](../gameplay/nametags.md) |
| Unknown Weapons | Unauthorised-weapon penalties | [Unknown Weapons](../gameplay/unknown-weapons.md) |
| Character Identities | Character names, pools and dates | [Identities](../lifecycle/identities.md) |
| Death Camera | Death presentation, quotations and camera | [Death Camera](../lifecycle/death-camera.md) |

The Optional Systems module should still be placed only once. Its shared location does not mean these systems depend on one another.

## ZEN Modules

Optional Systems has no umbrella ZEN module. Individual systems expose live tools only where their own guide lists them.

## Troubleshooting

- If one optional feature is absent, check that feature's own toggle and requirements rather than unrelated Optional Systems settings.
- If settings appear to fight one another, remove duplicate Optional Systems modules.
- Mission Validator reports duplicate singleton settings modules and several incomplete optional-system configurations.
