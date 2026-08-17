# Forestry

Forestry adds ACE Equipment actions for clearing grass, removing bushes and felling trees. It is a lightweight quality-of-life system intended for deliberate field preparation, not bulk terrain editing.

## Enable the component

Place **[JMF] - Core > Optional Systems**, open the Forestry subsection and enable **Forestry Tools**.

## 3DEN settings

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

## Zeus modules

Forestry has no dedicated ZEN module. Zeus can still delete terrain objects through normal curator/editor tools where supported.

## Multiplayer

The client performs the progress interaction; the server validates and applies the persistent world change. Conservative distances and durations reduce accidental vegetation removal.

## Troubleshooting

- If no action appears, confirm the player carries a configured classname in an accepted slot.
- Aim directly at the bush/tree and remain inside **Interaction Distance**.
- Grass clearing affects clutter through an invisible cutter; it does not delete terrain geometry.
