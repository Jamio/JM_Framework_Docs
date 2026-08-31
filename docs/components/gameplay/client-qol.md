# CLIENT QUALITY OF LIFE

## Overview

Client Quality of Life contains small interface options that only affect the individual player. They do not change AI, equipment or other shared parts of the mission.

The current options can hide unwanted identity tabs in ACE Arsenal and add Screenshot Mode to ACE self-interaction. Screenshot Mode temporarily hides interface elements so clean mission images can be taken. These features are configured through the shared settings modules rather than separate 3DEN modules.

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
