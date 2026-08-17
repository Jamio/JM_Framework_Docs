# Medical

Medical augments ACE with a delayed restricted spectator for unconscious players, a compact vitals HUD and optional 3D markers above nearby unconscious friendlies. It does not replace ACE Medical.

## Enable the component

Place one **[JMF] - Medical > Medical Settings** module and select the required unconscious behaviour.

## 3DEN modules

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

## Zeus modules

Medical has no dedicated ZEN configuration module. CBRN's patient inspection and overlay tools are documented separately and do not change these unconscious settings.

## Multiplayer

Spectator and HUD presentation run locally for the unconscious player. ACE remains the source of medical state. Marker candidates are cached and drawn locally according to the configured visibility policy.

## Troubleshooting

- If the HUD is absent, select **Restricted Spectator**; the HUD is tied to that view.
- If medication shows None, verify ACE Advanced Medication is enabled and medication is still active.
- If markers appear through walls, enable **Require Line of Sight**.
- If testing alone, temporarily enable **Include AI Units**.
