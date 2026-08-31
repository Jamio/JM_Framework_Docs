# Permadeath

## Overview

Permadeath is a server-controlled gate that allows a mission to suspend reinforcement after a player dies. While the gate is active, casualties enter a waiting spectator state instead of returning to play. Zeus or an authorised Mission Control user can later release the waiting players together, making the component suitable for wave respawns, narrative pauses, limited reinforcement windows or genuinely permanent loss for the remainder of an operation.

The system is deliberately separate from Tickets. Permadeath answers whether reinforcement is currently allowed; Tickets answer whether the player's side can afford it. A mission may use either component alone or require both conditions to be satisfied. This separation lets Zeus open a reinforcement window without granting extra tickets, or add tickets while still holding the next wave.

State is authoritative on the server and applied through the shared Player Lifecycle, including disconnects and players joining in progress. Mission-makers can define the starting state in 3DEN and then change it live through ZEN or Mission Control without altering the respawn template manually.

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
