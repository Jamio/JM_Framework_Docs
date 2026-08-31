# STAMINA

## Overview

Stamina is a small mission-wide switch for groups that do not want Arma's vanilla stamina and legacy fatigue systems to govern player movement. When enabled, it disables those mechanics consistently for players, avoiding the partial or per-unit setup that can otherwise be required in the editor.

The component does not introduce its own endurance model, alter ACE Advanced Fatigue settings or attempt to balance carrying capacity. It exists to establish a clear baseline when another mod or the group's mission design is responsible for fatigue. Mission-makers who want vanilla or ACE-controlled stamina simply leave the option disabled.

Because respawn and join-in-progress can recreate or transfer the playable unit, the framework reapplies the chosen state through the player lifecycle rather than relying on a one-off command in a unit's init field.

## How to set up the component

Place **[JMF] - Core > Optional Systems** and enable **Disable Player Stamina** under Lightweight Systems.

## 3DEN Module Settings

### Optional Systems — Lightweight Systems

| Attribute | Default | What it does |
| --- | --- | --- |
| Disable Player Stamina | Enabled | Disables vanilla stamina and legacy fatigue at initialisation and after respawn. |

## ZEN Modules

Stamina has no dedicated ZEN modules.

## Troubleshooting

- If stamina returns after respawn, confirm the Optional Systems module is present and the current Stamina addon is loaded.
- Other movement or stamina addons may apply their own behaviour after the framework.
