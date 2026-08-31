# Player Lifecycle

## Overview

Player Lifecycle is the internal coordination layer for systems that need to react when a player is created, becomes unconscious, dies, enters spectator or respawns. Arma missions often accumulate several independent killed and respawn handlers, each trying to move the camera, deduct a ticket, save statistics or initialise the replacement unit. This component provides one ordered pipeline so those responsibilities can coexist without racing or leaving stale state behind.

Tickets, Permadeath, Identities, Death Camera, Medical and Player Statistics all use lifecycle events, but each retains its own rules and settings. The pipeline determines when they are called and carries the relevant player state between stages. It also gives client-only presentation and server-authoritative decisions a clear boundary, which is particularly important for dedicated servers, respawned units and players joining in progress.

Player Lifecycle is primarily framework infrastructure rather than a feature that players interact with directly. Mission-makers normally configure the participating components and leave the pipeline itself alone. Its guide exists to explain how those systems relate and to help diagnose cases where a custom mission script needs to hook into the same sequence.

## How to set up the component

There is no visible Player Lifecycle settings module. The addon starts automatically and enabled components subscribe to its events.

## 3DEN Module Settings

Player Lifecycle has no 3DEN attributes. Configure the systems that consume it:

- **Identities** and **Death Camera** for optional character and death presentation;
- **Medical Settings** for unconscious presentation;
- **Tickets Settings** for reinforcement cost;
- **Permadeath Settings** for the waiting gate;
- **Core Settings** for Player Statistics.

## Flow

1. The local killed event preserves the dead unit context and starts local presentation.
2. Server-owned systems record the death and evaluate respawn gates.
3. The player may enter a ticket/permadeath waiting state.
4. Respawn creates a new player object.
5. Per-unit handlers and enabled component state are attached to the new object.

## ZEN Modules

Player Lifecycle has no direct ZEN module. Tickets and Permadeath provide the live controls that affect its respawn decision.

## Multiplayer

Per-unit guards prevent duplicate registration. The design assumes Arma replaces the player object on respawn, so components must never depend on local variables stored only on the previous unit.

## Troubleshooting

- If a death action fires twice, search the mission for legacy `onPlayerKilled.sqf` or duplicate event handlers.
- If respawned players lose framework behaviour, confirm no mission script replaces the player again after lifecycle initialization.
- If a player remains gated, inspect both Tickets and Permadeath state.
