# REDEPLOYMENT

## Overview

Redeployment gives players a controlled way to return to their unit or move between authorised reinforcement points. Its themed map dialog brings together active rally points, eligible living squadmates, fixed destinations and a Mobile Redeploy Vehicle (MRV), while also allowing a stranded player to request reinsertion when no automatic destination is suitable. The aim is to reduce administrative teleporting without turning movement around the battlefield into unrestricted fast travel.

Mission-makers choose which destination families are available, who may use them, how access terminals are presented and what safety conditions must be met. The MRV can act as a moving reinforcement hub, while rally points reflect decisions made by player leadership. Squadmate deployment helps a returning casualty rejoin the correct group, and fixed terminals support bases, ships or other permanent staging areas. The interface shows destination state and location before the player commits.

Every request is checked by the server at the time of use. A destination that has been destroyed, moved into danger or become otherwise invalid is rejected rather than trusting stale client data. Redeployment therefore coordinates several components, but does not own their source state: Rally Points manages rallies, Roles identifies relevant leaders, and the Player Lifecycle determines when a casualty is permitted to return.

<!-- IMAGE PLACEHOLDER: Redeployment dialog showing the left destination panel and map. -->

## How to set up the component

Place one **[JMF] - Redeploy > Redeploy Settings** module. Add **Redeployment Point** modules for fixed access terminals and **Mobile Redeploy Vehicle** when the mission begins with a designated MRV.

## 3DEN Module Settings

### Redeploy Settings

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Deployment Destinations | Enable Redeployment | Enabled | Master switch. |
| Deployment Destinations | Allow Rally Deployment | Enabled | Lists eligible squad and platoon rallies. |
| Deployment Destinations | Allow Squadmate Deployment | Enabled | Lists safe living group members. |
| Deployment Destinations | Allow Reinsertion Requests | Enabled | Adds the command-handled reinsertion option. |
| Deployment Destinations | Allow MRV Deployment | Disabled | Enables the current MRV as a destination. |
| Safety Restrictions | Enemy Exclusion Radius | `30` | Rejects destinations with hostiles inside this distance. |
| Presentation | Show Redeploying Text | Enabled | Displays transition text during movement. |
| Presentation | Redeploying Text | REDEPLOYING... | Text used by the transition. |

### Redeployment Point

Synchronise this module to one or more world objects that players will use to open the redeployment menu.

| Attribute | Default | What it does |
| --- | --- | --- |
| Display Name | Object display name | Destination and world-label name. |
| Show Floating Label | Enabled | Enables the world label. |
| Label Draw Distance | `25` | Maximum label distance. |
| Label Height | `2` | Vertical offset above the object. |

### Mobile Redeploy Vehicle

Synchronise this module to one vehicle to designate the initial MRV. It has no additional attributes and requires **Allow MRV Deployment**.

## ZEN Modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Set Mobile Redeploy Vehicle | A vehicle | Replaces the current MRV. |
| Designate Redeployment Point | A world object | Name, label toggle, distance and height. |
| Remove Redeployment Point | A registered object | Removes the live destination. |
| Manage Redeployment State | Anywhere | Toggles the system and destination families and changes the enemy radius. |
| Remove Mobile Redeploy Vehicle | Anywhere | Clears the current MRV. |

Mission Control exposes the system state and MRV controls on its **Logistics** page.

## Troubleshooting

- If a destination is listed but rejected, clear nearby enemies and confirm the target remains alive and valid.
- If the MRV is absent, enable its destination family and verify a vehicle is designated.
- If a squadmate is missing, confirm they are alive, in the player's group and in a safe location.
- If the menu theme differs from other dialogs, check **Dialog Theme** in Core Settings.
