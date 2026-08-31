# REDEPLOYMENT

## Overview

Redeployment lets players return to their group or move between approved reinforcement points. Its themed map dialog can include rally points, living squadmates, fixed destinations and a Mobile Redeploy Vehicle (MRV). Players can also request reinsertion when no normal destination is suitable.

Mission-makers choose which destination types are available, who may use the system and which safety checks must pass. Each destination is checked when selected, so a destroyed vehicle, missing squadmate or unsafe location cannot be used. Rally placement is handled by Rally Points, while Redeployment controls the menu and movement.

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
| Show World Label | Enabled | Enables the world label. |
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
