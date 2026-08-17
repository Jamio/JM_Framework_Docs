# Player Lifecycle

Player Lifecycle is the shared death-and-respawn pipeline used by Tickets, Permadeath, Identities, Death Camera, Medical and Player Statistics. It keeps those systems ordered and prevents each component from installing competing killed/respawn handlers.

## Enable the component

There is no visible Player Lifecycle settings module. The addon starts automatically and enabled components subscribe to its events.

## 3DEN modules

Player Lifecycle has no 3DEN attributes. Configure the systems that consume it:

- **Optional Systems** for Identities and Death Camera;
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

## Zeus modules

Player Lifecycle has no direct ZEN module. Tickets and Permadeath provide the live controls that affect its respawn decision.

## Multiplayer

Per-unit guards prevent duplicate registration. The design assumes Arma replaces the player object on respawn, so components must never depend on local variables stored only on the previous unit.

## Troubleshooting

- If a death action fires twice, search the mission for legacy `onPlayerKilled.sqf` or duplicate event handlers.
- If respawned players lose framework behaviour, confirm no mission script replaces the player again after lifecycle initialization.
- If a player remains gated, inspect both Tickets and Permadeath state.
