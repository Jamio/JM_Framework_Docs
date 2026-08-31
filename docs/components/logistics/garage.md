# Garage

## Overview

Garage combines controlled vehicle deployment and field servicing in one logistics component. It is designed for missions where players should have access to a curated motor pool without opening the unrestricted vanilla Garage or relying on Zeus for every replacement vehicle. Synchronised access objects open a themed interface that lists only the definitions and actions provided by the mission-maker.

Vehicle deployment uses configurable entries with class, display and availability information, allowing a mission to provide suitable transport, armour or specialist platforms while retaining control over quantity and placement. The same component can expose vehicle servicing—repair, refuel and rearm behaviour—and appearance or component customisation where the selected vehicle supports it. These functions can be restricted independently so an object may act as a deployment terminal, a service point or both.

Spawning and servicing are validated where the authoritative vehicle state exists, reducing locality problems and preventing different clients from creating conflicting results. The themed modern, historical and science-fiction skins share one calibrated control layout, allowing the interface to match the mission without changing its function.

<!-- IMAGE PLACEHOLDER: Garage vehicle list and details panel using one theme. -->

## How to set up the component

Place one **[JMF] - Garage > Garage** module, synchronize it to the access object, and provide the spawn-point module required by each vehicle family in the catalogue.

## 3DEN Module Settings

### Garage

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Interaction and World Label | Interaction Name | Garage | Name shown on synchronized access objects. |
| Interaction and World Label | Enable Floating Text | Enabled | Shows the same name as a world label. |
| Vehicle Catalogue | Vehicle Definitions | Example MRAP and truck | Array entries contain classname, optional display name and quantity. Omit quantity, use an empty value or `-1` for unlimited. |
| Vehicle Services | Enable Repair | Disabled | Full vanilla and ACE-aware repair. |
| Vehicle Services | Enable Refuel | Disabled | Full refuel. |
| Vehicle Services | Enable Rearm | Disabled | Rearms magazines, turrets and aircraft pylons. |
| Vehicle Services | Enable Vehicle Customisation | Disabled | Enables appearance/component customisation for nearby empty vehicles. |
| Vehicle Services | Customisation Radius | `15` | Maximum distance from an access object. |
| Service Conditions | Service Radius | `15` | Maximum distance for servicing. |
| Service Conditions | Service Duration | `15` | Combined service progress time in seconds. |
| Service Conditions | Require Engine Off | Enabled | Cancels or blocks service with the engine running. |
| Service Conditions | Require Vehicle Stationary | Enabled | Requires the vehicle to remain stopped. |

Vehicle definitions use this structure:

```sqf
[
    ["B_MRAP_01_F", "", 5],
    ["B_Truck_01_transport_F", "Troop Truck", -1]
]
```

### Ground, Air and Naval Vehicle Spawn Point

Place the relevant module where that vehicle family should appear and orient it in the desired facing direction.

| Attribute | Default | What it does |
| --- | --- | --- |
| Editor / Log Name | Family-specific name | Optional identifier used in diagnostics. |

## Setup walkthrough

1. Place the **Garage** module and synchronize it to an access object.
2. Enter the vehicle catalogue.
3. Place Ground, Air and/or Naval Spawn Point modules.
4. Enable only the service operations required by the mission.
5. Leave enough clear space around each spawn point and test vehicle direction.

## ZEN Modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Configure Garage Access | A world object | Selects a Garage controller and floating-label behaviour. |
| Remove Garage Access | A registered object | Removes access and ACE actions. |
| Service Vehicle | A vehicle | Selects full repair, refuel and/or rearm. |

## Multiplayer

The server validates catalogue quantity, spawn position and service requests. Access registrations rebuild for JIP clients. A spawned vehicle consumes limited stock authoritatively.

## Troubleshooting

- If deployment succeeds but no vehicle appears, add the correct family spawn point and clear its area.
- If servicing is unavailable, check the enabled operations, radius, engine state and movement requirement.
- If customisation lists are empty, test with an empty vehicle that exposes textures or animation sources in `CfgVehicles`.
