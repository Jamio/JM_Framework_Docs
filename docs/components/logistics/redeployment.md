# Redeployment

Redeployment combines rally points, living squadmates, fixed terminals, command vehicles and reinsertion requests in one themed map dialog. The server validates every destination before moving the player.

## Enable the component

Place one **[JMF] - Redeploy > Redeploy Settings** module. Add **Redeployment Point** and **Command Vehicle** modules only for the destination types the mission uses.

## 3DEN modules

### Redeploy Settings

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Deployment Destinations | Enable Redeployment | Enabled | Master switch. |
| Deployment Destinations | Allow Rally Deployment | Enabled | Lists eligible squad/platoon rallies. |
| Deployment Destinations | Allow Squadmate Deployment | Enabled | Lists safe living group members. |
| Deployment Destinations | Allow Reinsertion Requests | Enabled | Adds the request option for command handling. |
| Deployment Destinations | Allow Command Vehicle Deployment | Disabled | Enables the current command vehicle as a destination. |
| Safety Restrictions | Enemy Exclusion Radius | `30` | Rejects destinations with hostiles inside this distance. |
| Presentation | Show Redeploying Text | Enabled | Displays transition text during movement. |
| Presentation | Redeploying Text | REDEPLOYING... | Text used by the transition. |

### Redeployment Point

Synchronize this module to one or more world objects that players use as terminals.

| Attribute | Default | What it does |
| --- | --- | --- |
| Display Name | Object display name | Destination and label name. |
| Show Floating Label | Enabled | Enables the world label. |
| Label Draw Distance | `25` | Maximum label distance. |
| Label Height | `2` | Vertical offset above the object. |

### Command Vehicle

Synchronize this module to one vehicle to designate the initial command vehicle. It has no additional attributes and requires **Allow Command Vehicle Deployment**.

## Zeus modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Set Command Vehicle | A vehicle | Replaces the current command vehicle. |
| Designate Redeployment Point | A world object | Name, label toggle, distance and height. |
| Remove Redeployment Point | A registered object | Removes the live destination. |
| Manage Redeployment State | Empty ground | Toggles the whole system and each destination family; also changes enemy radius. |
| Remove Command Vehicle | Empty ground | Clears the current command vehicle. |

## Multiplayer

The server validates destination identity, group membership, enemy distance, vehicle existence and available seats. Live registrations and availability state persist for JIP clients.

## Troubleshooting

- If a destination is listed but rejected, clear nearby enemies and confirm the target remains alive/valid.
- If a command vehicle is absent, enable its destination family and verify a vehicle is designated.
- If the dialog theme differs from other menus, check **Dialog Theme** in Core Settings.
