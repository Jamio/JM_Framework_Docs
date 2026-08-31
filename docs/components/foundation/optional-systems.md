# OPTIONAL SYSTEMS

## Overview

Optional Systems holds the settings for smaller framework features that do not need their own 3DEN module. Grouping them together keeps the JM Framework module list tidy while still allowing each feature to be enabled and configured separately.

These settings cover components such as Death Camera, Identities, Player Statistics, Unknown Weapons, Forestry and Private Messages. Each feature has its own guide with full details. If a feature is disabled, its actions and other gameplay functions should not be added to the mission.

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
