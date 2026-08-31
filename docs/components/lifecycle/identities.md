# IDENTITIES

## Overview

Identities gives player characters lightweight biographical detail suited to the setting of the mission. It generates a name and birth information from a selected identity pool, allowing a modern Western unit, Second World War formation, Chinese force, Middle Eastern faction, international contingent or a mission-specific culture to feel appropriately populated without hand-writing every playable unit.

The component is designed around configurable data rather than a fixed list. JM Framework includes reusable pools, additional pools can be added to the framework's identity definitions, and a mission can supply its own entries through `description.ext`. Pools contain enough names to reduce obvious repetition and may be chosen globally or used as a base for more specific mission design. Generated details can persist for the relevant player life and are exposed through a common interface for other components to read.

Identities can stand alone as character flavour, but it also feeds presentation systems such as Death Camera and role-assignment material. It does not assign gameplay qualifications, group positions or Arsenal loadouts; those responsibilities belong to Roles and Arsenal. Keeping biography separate from permissions allows missions to change one without accidentally changing the other.

## How to set up the component

Place **[JMF] - Core > Optional Systems**, enable **Character Identities**, and choose the appropriate built-in identity pool or side-specific overrides.

## 3DEN Module Settings

### Optional Systems — Character Identities

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Character Identities | Disabled | Generates a new character identity for each player life. |
| Default Identity Pool | `WW2_USA` | Base `CfgJMFIdentityPools` class. |
| Side Pool Overrides | Empty | Optional pool ID for BLUFOR, OPFOR, Independent and Civilian. |
| Earliest Birth Year | `1910` | Lower end of generated birth years. |
| Latest Birth Year | `1925` | Upper end of generated birth years. |
| Mission / Death Year | `1944` | Year used by identity presentation. |

Mission `CfgJMFIdentityPools` classes can add names, ranks and formats for a particular operation.

## ZEN Modules

Identities has no dedicated ZEN module. It is configured as a mission-level character system.

## Troubleshooting

- If identity text is missing, enable Character Identities and verify the selected pool ID exists.
- If opposing factions use the wrong names, configure the appropriate side override.
- A new identity is generated after respawn by design; the previous life is not restored as the same character.
