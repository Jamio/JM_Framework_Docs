# Tickets

## Overview

Tickets provides a limited, server-authoritative reinforcement pool for each side. It is designed for missions where casualties should have a shared operational cost without requiring every death to be permanent. When a player returns to play, the appropriate side pool is reduced; when no tickets remain, further reinforcement is held until Zeus, Mission Control or a configured recovery mechanic adds more.

Mission-makers set the starting pools and decide how tickets interact with the mission's respawn flow. Synchronised bodybag recovery points can reward casualty recovery by returning tickets when bodies are brought back, giving medical and logistics teams a practical reason to recover the fallen. Live controls allow tickets to be inspected or adjusted when the mission narrative provides reinforcements or suffers an additional loss.

Tickets is separate from Permadeath and can be used with or without it. A ticket represents reinforcement capacity, while Permadeath controls whether a reinforcement window is open. Both components use the shared Player Lifecycle so deductions, waiting states and respawns occur in a predictable order and remain consistent for multiplayer clients.

## How to set up the component

Place one **[JMF] - Tickets > Tickets Settings** module and enable the system. Add **Bodybag Recovery Point** modules wherever players should return casualties.

## 3DEN Module Settings

### Tickets Settings

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Ticket System | Tickets Enabled | Disabled | Master switch. |
| Starting Ticket Pools | BLUFOR / OPFOR / Independent / Civilian | `10` / `10` / `10` / `0` | Initial side pools. |
| Starting Ticket Pools | Maximum Tickets Per Side | `30` | Cap after replenishment; use `-1` for none. |
| Respawn Cost | Tickets Per Respawn | `1` | Cost charged by the lifecycle gate. |
| Bodybag Recovery | Tickets Per Recovered Bodybag | `1` | Default reward. |
| Bodybag Recovery | Default Recovery Radius | `5` | Bodybag search radius. |
| Bodybag Recovery | Recovery Cooldown | `2` | Delay between submissions. |
| Bodybag Recovery | Maximum Bags Per Submission | `10` | Processing cap for one action. |
| Bodybag Recovery | Delete Recovered Bodybags | Enabled | Removes accepted bags after rewarding tickets. |

### Bodybag Recovery Point

Synchronize this module to one or more recovery objects.

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| World Label | Show World Label | Enabled | Shows the dogtag icon and label. |
| World Label | World Label Text | Bodybag Recovery | Player-facing label. |
| Recovery Overrides | Tickets Per Bag Override | `0` | Zero inherits Settings. |
| Recovery Overrides | Recovery Radius Override | `0` | Zero inherits Settings. |

The ticket-status action is attached to recovery objects, not the player's self-action menu.

## ZEN Modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Manage Tickets | Empty ground | Side, Add/Remove/Set operation and amount. |
| View Ticket State | Empty ground | Shows all pools and players currently waiting. |
| Designate Bodybag Recovery Point | A world object | Name, reward, radius and world label. |
| Remove Bodybag Recovery Point | A registered object | Removes its actions and designation. |

## Multiplayer

Only the server changes pools, processes bodybags and releases waiting players. Public snapshots drive client displays. Recovery registrations persist for JIP clients.

## Troubleshooting

- If deaths do not consume tickets, confirm Tickets is enabled and the lifecycle/respawn flow reaches the gate.
- If a bag is ignored, move it inside the radius and confirm it is an ACE bodybag containing an eligible casualty.
- If replenishment exceeds expectations, check both the global reward and point override.
