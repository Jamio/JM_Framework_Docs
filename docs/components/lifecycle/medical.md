# Medical

## Overview

Medical adds presentation and lifecycle support around ACE Medical rather than replacing its treatment model. Its main purpose is to give unconscious players and nearby teammates clearer, configurable feedback while allowing ACE to remain authoritative for wounds, vitals, treatment and recovery. The component is therefore compatible with a group's chosen ACE settings and can expose selected KAT information when KAT is present without requiring KAT as a dependency.

For the casualty, the framework can delay entry into a restricted unconscious spectator and present a compact medical HUD containing useful condition information. Mission-makers decide what should be visible and when, avoiding the need to reveal every internal medical variable. For nearby friendlies, optional 3D indicators can make an unconscious casualty easier to locate without becoming a permanent nametag system.

The spectator, HUD and marker features can be configured independently to suit different difficulty levels. They follow the shared Player Lifecycle so that recovery, death, respawn and join-in-progress do not leave stale displays or camera states behind. CBRN diagnosis and treatment use ACE interactions but remain part of the separate CBRN component.

<!-- IMAGE PLACEHOLDER: Medical HUD displayed for an unconscious player. -->

## How to set up the component

Place one **[JMF] - Medical > Medical Settings** module and select the required unconscious behaviour.

## 3DEN Module Settings

### Medical Settings

#### Unconscious Spectator

| Attribute | Default | What it does |
| --- | --- | --- |
| Unconscious View | ACE default | Chooses ACE behaviour, restricted spectator, or removal of blackout/blur only. |
| Spectator Delay | `3` | Seconds of normal unconscious experience before spectator starts. |
| Own Side Only | Enabled | Restricts spectator targets to the player's side. |
| Allow First Person | Enabled | Enables first-person viewing. |
| Allow Follow / Third Person | Enabled | Enables follow camera. |
| Allow Free Camera | Disabled | Enables unrestricted free camera. |
| Exclude Zeus and Remote-Controlled Units | Enabled | Avoids disrupting curator control. |

#### Medical HUD

| Attribute | Default | What it does |
| --- | --- | --- |
| Show Unconscious Medical HUD | Enabled | Displays vitals while JMF restricted spectator is active. |
| Medical HUD Detail | Descriptive | Chooses qualitative or exact numerical values. |
| Show Wounds | Enabled | Lists current ACE wounds. |
| Show Medication / IVs | Enabled | Lists active medication and fluids when ACE settings expose them. |
| Show Nearest Medic | Enabled | Reports the nearest friendly medic. |
| Medic Search Radius | `100` | Maximum search range in metres. |
| Update Interval | `0.5` | HUD refresh interval; lower is smoother but performs more work. |

#### Unconscious Player Markers

| Attribute | Default | What it does |
| --- | --- | --- |
| Show Unconscious Player Markers | Enabled | Draws an icon and name above unconscious units. |
| Visible Players | Own side | Group, side or all-player visibility policy. |
| Include AI Units | Disabled | Useful for single-player testing. |
| Maximum Range / Fade Start | `10` / `6` | Draw and fade distances. |
| Require Line of Sight | Disabled | Prevents markers through terrain/objects when enabled. |
| Icon Size / Text Size | `0.8` / `0.025` | Marker scale. |
| Use Core Title Font | Enabled | Uses Core's title font; otherwise uses Font Override. |
| Font Override | `PuristaSemiBold` | Custom marker font. |
| Icon Path | Vanilla incapacitated icon | Optional PAA override. |

## ZEN Modules

Medical has no dedicated ZEN configuration module. CBRN's patient inspection and overlay tools are documented separately and do not change these unconscious settings.

## Multiplayer

Spectator and HUD presentation run locally for the unconscious player. ACE remains the source of medical state. Marker candidates are cached and drawn locally according to the configured visibility policy.

## Troubleshooting

- If the HUD is absent, select **Restricted Spectator**; the HUD is tied to that view.
- If medication shows None, verify ACE Advanced Medication is enabled and medication is still active.
- If markers appear through walls, enable **Require Line of Sight**.
- If testing alone, temporarily enable **Include AI Units**.
