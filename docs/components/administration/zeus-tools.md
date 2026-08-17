# Zeus Tools

Zeus Tools provides reusable cinematic, environmental and utility effects that do not belong to a gameplay component. Tools are grouped into **Utilities**, **Effects** and **Fun** rather than exposed as mission-maker settings.

## 3DEN modules

Zeus Tools has no 3DEN module and no mission-level attributes. The addon registers its tools automatically when ZEN is present.

## Zeus modules

### Utilities

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Countdown | Empty ground | Minutes, seconds, in-progress label, final label and audience; creates a compact HUD timer. |
| Screen Cutaway | Empty ground | Fade timing, text, font, size, colour and audience; fades out before displaying text. |
| Cinematic Letterbox | Empty ground | Bar timing, chapter text and presentation; bars animate in before bottom-right text and retreat after it fades. |

### Effects

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Random AA Fire | An armed AA vehicle | Ammunition, direction-change timing and total duration; waits for the weapon to align before firing at its normal cadence. |
| Instant Explosion | Empty ground | Selects a curated explosion type and creates it at the module position. |
| Ambient Artillery Barrage | Empty ground | Configures the scripted distant-fire/impact effect and optional damage. |
| Flare - White/Green/Red/Yellow | Empty ground | Fires one WBK-style ground-launched flare with the matching colour and launch sound. |
| Star Cluster - White/Green/Red/Yellow | Empty ground | Fires the matching multi-light cluster effect. |
| Toggle Ambient Dust/Fog/Fire Sparks/Acid Sparks/Delta Particles/Falling Ash | Empty ground | Independently toggles each ambient particle preset. Several presets may run together. |
| Aircraft Formation Flyover | Empty ground | Aircraft, count, formation, route, altitude and horizontal/vertical dispersion. |
| Toggle Sandstorm | Empty ground | Starts/stops wind-aligned sand particles and smoothly blended post-processing. |
| Toggle Snowstorm | Empty ground | Starts/stops distributed snow particles and colour treatment. |
| Toggle Ambient Lightning | Empty ground | Enables/disables repeated ambient lightning. |

### Fun

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Remove Sight | A unit | Gradually applies a blur-based sight impairment. |
| Restore Sight | A unit | Smoothly removes the impairment. |
| Fling Unit | A unit | Applies the configured impulse for a deliberately playful punishment/effect. |

## Persistent and one-shot effects

Storms, lightning and other persistent toggles store server state so JIP clients can reconstruct them. Explosions, cutaways and similar one-shot effects are intentionally transient.

**Use destructive or disruptive tools only where their gameplay impact is understood.**{ .jmf-emphasis } Instant explosions, sight loss and unit flinging can directly affect players.

## Multiplayer

Server request handlers validate the assigned curator before accepting a Zeus Tools operation. World simulation is performed on the correct authority; client-only HUD and post-processing are targeted to viewers.

## Troubleshooting

- If a persistent effect is missing after JIP, toggle it off/on once and capture the client/server RPT.
- If AA tracers are absent, verify the selected magazine uses visible tracer ammunition and the turret has aligned.
- If a storm moves chaotically, confirm the current wind-aligned particle implementation is loaded rather than a legacy mission script.
