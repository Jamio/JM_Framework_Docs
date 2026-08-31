# Rally Points

## Overview

Rally Points allow designated leaders to establish temporary reinforcement anchors as a unit advances. A squad or platoon leader uses an ACE self-interaction to deploy the appropriate rally at their position, creating a shared destination that can be used by the Redeployment system. The feature gives player leadership control over a mobile reinforcement point without granting broader Zeus powers.

Mission-makers decide which rally types are available, which framework roles may deploy them and how replacement or removal should behave. Each active rally has an authoritative world position and presentation, and deploying a new point can replace the previous point for that scope rather than leaving obsolete destinations across the map. Rally state can also be inspected or controlled live when the mission requires administrative intervention.

This component creates and manages the anchors; it does not itself move dead or living players. The themed destination interface, safety validation and actual transfer belong to [Redeployment](redeployment.md). Keeping the two responsibilities separate allows rallies to be disabled while retaining fixed redeployment options, or used as one destination among several.

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
