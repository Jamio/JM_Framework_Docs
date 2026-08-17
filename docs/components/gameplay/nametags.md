# Nametags

Nametags draws lightweight names above nearby players without adding rank or role clutter. Visibility, distance and line of sight are evaluated locally for responsive rendering.

## Enable the component

Configure Nametags in **[JMF] - Core > Optional Systems**.

## 3DEN settings

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

## Zeus modules

Nametags has no ZEN module. Its visibility policy is fixed by the mission maker.

## Multiplayer

Candidates are cached and refreshed locally; visible names are drawn every frame. Screenshot Mode suppresses this and other framework overlays.

## Troubleshooting

- If names show through objects, enable **Require Line of Sight**.
- If vehicle crews are absent, enable **Show Players in Vehicles**.
- If text is too bold, use a medium-weight Core Text Font rather than the Title Font.
