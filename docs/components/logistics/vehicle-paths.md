# VEHICLE PATHS

## Overview

Vehicle Paths wraps Arma's scripted path-driving behaviour in reusable 3DEN and ZEN tools. It is designed for movements that ordinary AI waypoints handle poorly, such as armour crossing a precise field route, trucks following a forest track or vehicles entering a defensive position at a controlled speed.

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
