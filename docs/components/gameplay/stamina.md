# STAMINA

## Overview

Stamina is a mission-wide option for disabling Arma's vanilla stamina and legacy fatigue. The setting is reapplied after respawn so it does not need to be added to every playable unit.

This component does not add a replacement stamina system or change ACE Advanced Fatigue. Leave it disabled when another stamina system is being used.

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
