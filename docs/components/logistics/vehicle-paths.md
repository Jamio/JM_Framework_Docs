# VEHICLE PATHS

## Overview

Vehicle Paths packages Arma's scripted `driveOnPath` behaviour into reusable 3DEN and ZEN workflows. It is intended for choreographed movement that ordinary AI waypoints often handle poorly: armour crossing a precise line through a field, trucks following a narrow forest track, a convoy arriving at a defensive position, or an off-screen vehicle entering the play area on cue. The route guides the vehicle directly while leaving its weapons and crew available for the mission around it.

In 3DEN, mission-makers define a route from synchronised path points and attach one or more vehicles or reusable spawn definitions. A route can begin immediately, wait for a trigger or be activated live. Vehicles may start hidden with simulation disabled, be revealed only when the route begins, stop precisely at the final point, resume normal behaviour, have driver simulation disabled or be deleted after leaving the scene. Reusable routes can create fresh vehicles for repeated attack waves without rebuilding the path.

In ZEN, a curator can select a vehicle and draw a route from the current camera perspective, with visible route feedback and configurable completion behaviour. Context-menu access makes repeated use faster than placing a module for each order. Execution is routed to the vehicle's locality and includes the initial hand-off needed to avoid the common first-run failure of scripted paths.

The component is a precision movement tool, not a replacement for waypoints or full convoy AI. It works best where the intended route and endpoint matter more than autonomous navigation and tactical path selection.

<!-- IMAGE PLACEHOLDER: A ZEN-drawn 3D vehicle route and its configuration menu. -->

## How to set up the component

For a prepared route, place one **[JMF] - Tools > Vehicle Path Controller**, at least two **Vehicle Path Point** modules and the vehicles or vehicle template. Synchronise every point and vehicle to the controller. If activation uses a trigger, synchronise that trigger as well.

Use point orders such as `10`, `20` and `30` so more points can be inserted later.

## 3DEN Module Settings

### Vehicle Path Controller

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Route | Route Name | Vehicle Route | Label used by Zeus and diagnostics. |
| Route | Activation | Synchronised Trigger | Starts from a trigger, immediately, or only through Zeus/Mission Control. |
| Route | Start Delay | `0` | Delay before the first vehicle moves. |
| Route | Vehicle Interval | `2` | Extra delay between synchronised vehicles. |
| Vehicle Provision | Vehicle Source | Placed Vehicle | Uses the placed vehicle, conceals it until activation, or treats it as a reusable spawn template. |
| Route Completion | Final Behaviour | Stop and Hold | Holds, disables only driver simulation, returns to normal AI, loops or deletes the vehicle. |
| Route Completion | Completion Radius | `6` | Distance from the last point at which the route completes. |
| Route Completion | Delete Crew with Vehicle | Enabled | Removes the crew when **Delete Vehicle** is selected. |

### Vehicle Path Point

| Attribute | Default | What it does |
| --- | --- | --- |
| Order | `10` | Position of this point in the route. |
| Desired Speed | `8` | Requested speed from this point onwards in metres per second. |

## ZEN Modules

| ZEN module or action | Place on | Dialog options / result |
| --- | --- | --- |
| Draw Vehicle Route | An AI-driven land vehicle | Draws a route and configures speed, final behaviour and completion distance. |
| Start Configured Vehicle Route | Anywhere | Selects and activates a registered 3DEN route. |
| Control Vehicle Route | A land vehicle | Stops and holds, releases to normal AI, or deletes the vehicle and crew. |
| Vehicle Routes context menu | Right-click an AI-driven land vehicle | Draws a slow, normal, fast or fully configured route and controls an active route. |

## Troubleshooting

- A route needs at least two ordered points and a non-player driver.
- If a trigger route does not start, confirm the trigger is synchronised to the controller rather than only to the vehicle.
- Use **Concealed Until Activation** or **Reusable Spawn** when vehicles should not exist visibly before the route begins.
- Tight turns, obstacles and unsuitable terrain can still defeat the vehicle's physical movement; use more points and sensible speeds.
