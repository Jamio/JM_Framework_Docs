# MINIGAMES

## Overview

Minigames adds multiplayer table games for bases, staging areas and mission downtime. Mission-makers choose which games are available and attach them to suitable tables or objects. The framework handles the shared game and allows the table to be reused by other players afterwards.

Minigames are recreational and do not affect equipment, scoring or progression. Technical mission challenges such as wire cutting and lock picking are handled separately by [Field Procedures](field-procedures.md).

<!-- IMAGE PLACEHOLDER: Players using one of the shared minigame interfaces. -->

## How to set up the component

Place **[JMF] - Core > Table Games** and synchronise it to one or more suitable table objects.

## 3DEN Module Settings

### Table Games

The module registers every synchronised table for the multiplayer game interface. It has no additional gameplay attributes.

## ZEN Modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Enable Table Games | A table object | Registers the selected object as a playable game table. |

## Troubleshooting

- If no action appears, confirm the module is synchronised directly to the table object.
- If two players see different game state, record both client RPTs and the server RPT; the shared table state is server-owned.
- The table interface deliberately keeps Waldo's original aesthetic rather than using the framework dialog themes.
