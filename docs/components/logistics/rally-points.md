# Rally Points

## Overview

Rally Points let assigned squad and platoon leaders place temporary reinforcement locations through ACE self-interaction. Active rally points appear as destinations in the Redeployment menu, allowing the group to move its reinforcement point as the mission progresses.

Mission-makers can choose which rallies are available, who may deploy them and whether a new rally replaces the previous one. The actual movement of players is handled by [Redeployment](redeployment.md).

## How to set up the component

Place one **[JMF] - Rally > Rally Settings** module and assign the appropriate leader roles through role definitions or ZEN.

## 3DEN Module Settings

### Rally Settings

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Rally Availability | Enable Rally Points | Enabled | Master switch. |
| Rally Availability | Allow Squad Rallies | Enabled | Permits assigned squad leaders to deploy squad rallies. |
| Rally Availability | Allow Platoon Rally | Enabled | Permits the assigned platoon leader to deploy the shared rally. |
| Deployment Timing | Squad Rally Deploy Time | `10` | ACE progress duration in seconds. |
| Deployment Timing | Platoon Rally Deploy Time | `20` | ACE progress duration in seconds. |

There is no separate rally-object module. Eligible leaders deploy the framework rally from their ACE self-interaction while dismounted, outside and near the required allies.

## ZEN Modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Move Platoon Rally Point | Empty ground | Moves or creates the platoon rally at the module position. |
| Remove Rally Point | A rally | Selects and removes an active rally. |
| Toggle Squad Leader | A unit | Grants or removes the framework Squad Leader role. |
| Toggle Platoon Leader | A unit | Grants or removes the framework Platoon Leader role. |

## Multiplayer

The server owns every active rally and republishes the registry for JIP clients. Leader eligibility is checked both when the action is shown and when deployment completes.

## Troubleshooting

- If the action is missing, verify the unit has the framework role; group command alone is not sufficient.
- If deployment aborts, ensure the leader remains outside, dismounted and near enough allies for the full progress duration.
- If the rally is absent from Redeployment, enable **Allow Rally Deployment** in Redeploy Settings.
