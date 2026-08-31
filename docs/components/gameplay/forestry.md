# Forestry

## Overview

Forestry provides simple ACE Equipment actions for small-scale terrain clearance during play. Players can flatten obstructive grass, remove nearby bushes and fell individual trees when preparing a firing position, clearing a vehicle route or improving visibility around a defensive site. It is intended to give players a practical answer to troublesome vegetation without requiring Zeus to edit the terrain for them.

Mission-makers can enable the grass, bush and tree actions independently and control the distances or permissions used by the interaction. Tree felling is deliberate rather than instantaneous bulk removal, while grass and bush clearance are constrained to the player's local working area. The system does not continuously scan or rewrite the map and is not intended as a general terrain editor.

Because it changes world objects, the authoritative result is synchronised so that other players see the cleared vegetation. The feature lives in Optional Systems because it is useful quality of life for particular mission styles but unnecessary for every operation.

## How to set up the component

Place **[JMF] - Core > Optional Systems**, open the Forestry subsection and enable **Forestry Tools**.

## 3DEN Module Settings

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Grass Clearing / Bush Clearing / Tree Felling | Enabled | Allows each operation. |
| Require Forestry Tool | Enabled | Requires one configured tool. |
| Forestry Tool Classnames | `ACE_EntrenchingTool` | Accepted item or weapon classnames. |
| Interaction Distance | `5` | Cursor targeting distance for vegetation. |
| Grass / Bush / Tree Time | `5` / `10` / `30` | ACE progress durations. |
| Grass Clearing Size | `Land_ClutterCutter_medium_F` | Invisible clutter-cutter class placed in front of the player. |
| Remove Felled Trees | Enabled | Hides trees after they fall. |
| Felled Tree Cleanup Delay | `8` | Seconds before removal. |

## ZEN Modules

Forestry has no dedicated ZEN module. Zeus can still delete terrain objects through normal curator/editor tools where supported.

## Multiplayer

The client performs the progress interaction; the server validates and applies the persistent world change. Conservative distances and durations reduce accidental vegetation removal.

## Troubleshooting

- If no action appears, confirm the player carries a configured classname in an accepted slot.
- Aim directly at the bush/tree and remain inside **Interaction Distance**.
- Grass clearing affects clutter through an invisible cutter; it does not delete terrain geometry.
