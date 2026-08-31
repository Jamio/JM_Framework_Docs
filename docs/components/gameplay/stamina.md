# STAMINA

## Overview

Stamina disables vanilla stamina and legacy fatigue for players. It is a small mission-wide behaviour switch rather than a replacement movement system.

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
