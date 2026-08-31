# Nametags

## Overview

Nametags provides lightweight identification for nearby friendly players while preserving the visual restraint expected in a tactical mission. It draws a name only when the configured distance, visibility and line-of-sight conditions are satisfied, helping players recognise people at conversational distance without turning the battlefield into a wall of ranks, roles and status icons.

Mission-makers can control whether the system is enabled, how far names remain visible and how the text is presented. The component intentionally avoids exposing hidden gameplay information or duplicating the richer medical and group overlays supplied by ACE or ZEN. Its role is simple social recognition, particularly for communities whose players cannot identify every voice or character model immediately.

Rendering decisions are made locally for responsiveness and to avoid unnecessary network traffic. The component uses shared framework presentation where appropriate but remains independent from World Labels, which identifies configured mission objects rather than people.

## How to set up the component

Configure Nametags in **[JMF] - Core > Optional Systems**.

## 3DEN Module Settings

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Nametags | Enabled | Master switch. |
| Visible Players | Own side | Shows group, side or all players. |
| Maximum Distance | `15` | Hard draw limit in metres. |
| Fade Start Distance | `8` | Distance where opacity starts decreasing. |
| Text Size | `0.035` | Draw3D text scale. |
| Use Core Text Font | Enabled | Uses the Core text font. |
| Font Override | `RobotoCondensed` | Used when Core font inheritance is disabled. |
| Require Line of Sight | Enabled | Prevents names through terrain and solid objects. |
| Show Players in Vehicles | Disabled | Includes vehicle occupants. |

## ZEN Modules

Nametags has no ZEN module. Its visibility policy is fixed by the mission maker.

## Multiplayer

Candidates are cached and refreshed locally; visible names are drawn every frame. Screenshot Mode suppresses this and other framework overlays.

## Troubleshooting

- If names show through objects, enable **Require Line of Sight**.
- If vehicle crews are absent, enable **Show Players in Vehicles**.
- If text is too bold, use a medium-weight Core Text Font rather than the Title Font.
