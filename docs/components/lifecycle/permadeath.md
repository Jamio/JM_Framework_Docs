# Permadeath

## Overview

Permadeath can stop dead players from returning to the mission. While it is active, they remain in a waiting spectator state until Zeus or Mission Control releases them. This can be used for permanent loss, wave respawns or temporary reinforcement holds.

Permadeath is separate from Tickets. Permadeath decides whether respawn is currently allowed, while Tickets decide whether the side has enough reinforcements remaining. The starting state is configured in 3DEN and can be changed during the mission.

## How to set up the component

Place one **[JMF] - Permadeath > Permadeath Settings** module. Leave it disabled at mission start when Zeus should activate the gate later.

## 3DEN Module Settings

### Permadeath Settings

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Permadeath | Permadeath Enabled | Disabled | Starts the mission with the gate active. |
| Permadeath | Release Players When Disabled | Enabled | Immediately releases the current waiting list when the gate is turned off. |
| Permadeath Spectator | Spectate Own Side Only | Enabled | Restricts waiting players to their death-side units. |
| Permadeath Spectator | Exclude Zeus Players | Enabled | Lets curator players follow normal respawn behaviour. |

## ZEN Modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Toggle Permadeath | Empty ground | Enabled/disabled state, whether to release waiting players, and whether to notify everyone. |
| Handle Permadeath Respawns | Empty ground or a vehicle | Selects one/all waiting players, optional redeploy here, ticket bypass and notification. When placed on a vehicle, released players use available passenger seats. |

**Releasing a player does not automatically bypass Tickets unless the ZEN dialog explicitly selects that option.**{ .jmf-emphasis }

## Multiplayer

The server owns the waiting list and every release. Clients remain in spectator until the authoritative lifecycle response arrives. Release state and deployment instructions are targeted to the correct player UID.

## Troubleshooting

- If a released player remains waiting, inspect Ticket state and use the explicit bypass only when intended.
- If Zeus players are trapped, enable **Exclude Zeus Players** before the death occurs.
- If disabling the system leaves players waiting, enable **Release Players When Disabled** or release them through ZEN.
