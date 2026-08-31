# CLIENT QUALITY OF LIFE

## Overview

Client Quality of Life contains small interface conveniences that improve how players use the framework without changing the shared mission simulation. These options are deliberately client-local: they alter what an individual sees or which presentation controls are available, but do not grant equipment, affect AI or change authoritative mission state.

The current features include hiding ACE Arsenal identity tabs that are not useful in a restricted mission arsenal and providing Screenshot Mode through ACE self-interaction. Screenshot Mode temporarily removes selected interface elements so players, mission-makers and Zeus operators can capture clean images without permanently changing their normal HUD arrangement.

The component exists as a home for similarly modest client improvements, preventing one-line conveniences from becoming separate 3DEN modules. Mission-makers can enable the relevant options from the shared settings while groups that prefer an unmodified interface can leave the component inactive.

## How to set up the component

Place **[JMF] - Core > Optional Systems** and configure the **Client Quality of Life** subsection.

## 3DEN Module Settings

### Optional Systems — Client Quality of Life

| Attribute | Default | What it does |
| --- | --- | --- |
| Hide ACE Arsenal Face and Voice Tabs | Enabled | Hides Face and Voice while leaving Insignia available. |
| Enable Screenshot Mode | Enabled | Adds an ACE self-action that hides HUD, chat and framework overlays until Escape restores them. |

Private Messages uses the same Optional Systems subsection but remains a [separate component](../administration/private-messages.md).

## ZEN Modules

Client Quality of Life has no dedicated ZEN modules.

## Troubleshooting

- If Screenshot Mode is absent, confirm its toggle is enabled and ACE self-interaction is available.
- Press Escape to restore the hidden HUD and overlays.
- If Arsenal tabs remain visible, confirm the current framework Client QoL addon is loaded and no other addon is rebuilding the ACE Arsenal tabs afterwards.
