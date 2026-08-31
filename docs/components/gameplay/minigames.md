# MINIGAMES

## Overview

Minigames provides multiplayer table games derived from Waldo's mission systems. Players use a shared game-table interface to select and play games without affecting the rest of the mission.

Interactive equipment challenges are a separate system documented under [Field Procedures](field-procedures.md).

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
