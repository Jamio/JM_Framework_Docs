# MINIGAMES

## Overview

Minigames provides self-contained multiplayer table games for downtime, role-playing spaces and mission staging areas. Derived from Waldo's mission systems, the component preserves the distinctive game interfaces and turns a configured table or object into a shared activity that several players can use without affecting the operation around them.

Mission-makers choose which games are available and where players can access them. The framework manages entry, shared game state and leaving the interface so that the table remains usable by the next participants. Minigames are intentionally optional and have no bearing on character progression, equipment or mission scoring; their purpose is to make bases and waiting periods feel more social and lived-in.

This component is separate from [Field Procedures](field-procedures.md). Minigames are recreational shared activities, while Field Procedures are short interactive challenges used to represent technical mission tasks.

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
