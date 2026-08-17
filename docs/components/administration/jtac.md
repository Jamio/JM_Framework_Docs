# JTAC

JTAC provides server-executed artillery and cosmetic CAS through a themed player terminal. Mission makers combine tested delivery presets with per-mission availability, targeting and timing rather than tuning raw projectile trajectories for every strike.

## Enable the component

Place one **[JMF] - JTAC > JTAC Settings** module and one **Fire Mission** module per available support. Give eligible players the framework JTAC role.

## 3DEN modules

### JTAC Settings

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| JTAC System | Initially Enabled | Disabled | Starts support online; leave off for later ZEN/script activation. |
| JTAC System | Mission Definition File | `jtac.hpp` | Loads custom `JMF_jtacSupports`; built-in examples remain available as fallback. |
| Targeting and Safety | Allow Map Targeting | Enabled | Lets the terminal select a map point. |
| Targeting and Safety | Allow Grid Entry | Enabled | Accepts typed grid references. |
| Targeting and Safety | Allow Coloured Smoke Targeting | Enabled | Lists recent friendly-side smoke grenade/UGL impacts. |
| Targeting and Safety | Accepted Smoke Colours | All standard colours | Comma-separated accepted colour names. |
| Targeting and Safety | Smoke Target Memory | `180` | Seconds a landed smoke remains selectable. |
| Targeting and Safety | Allow Binocular Designation | Enabled | Arms optic capture through the JTAC keybind. |
| Targeting and Safety | Allow Laser Designation | Enabled | Captures an active laser target through the keybind. |
| Targeting and Safety | Optic Acquisition Range | `5000` | Maximum sightline distance. |
| Targeting and Safety | Friendly Safety Radius | `75` | Rejects requests near conscious friendlies; zero disables. |

The terminal's skin follows **Dialog Theme** in Core Settings.

### Fire Mission

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Fire Mission Identity | Unique Support ID | `fire_mission_1` | Stable letters/numbers/underscore identifier. |
| Fire Mission Identity | Display Name | Fire Mission | Player-facing list entry. |
| Fire Mission Identity | Delivery Preset | 82 mm HE | Tested mortar, artillery, bomb, gun or rocket profile. |
| Fire Mission Identity | Available To | BLUFOR | Side permitted to request it. |
| Availability and Timing | Available Uses | `3` | Remaining requests; `-1` is unlimited. |
| Availability and Timing | Cooldown | `120` | Delay between requests. |
| Availability and Timing | ETA | `10` | Delay before delivery. |
| Strike Pattern Overrides | Rounds / Projectiles | `0` | Zero uses the preset recommendation. |
| Strike Pattern Overrides | Dispersion / Run Length | `0` | Zero uses preset radius/run length. |
| Strike Pattern Overrides | Round Interval | `-1` | Negative one uses preset timing. |
| Ambient Flyby | Aircraft Classname Override | Empty | Blank uses preset; `NONE` disables flyby. |
| Ambient Flyby | Flyby Height / Speed | `0` / `0` | Zero uses preset alignment values. |

Built-in presets include 82 mm HE, 155 mm HE, 120 mm smoke, GBU-12, 20 mm and 30 mm gun runs, and Shrieker HE rockets.

**Prefer a tested preset and change only uses, cooldown, ETA and aircraft classname first.**{ .jmf-emphasis } Modded rocket/bomb ammunition can have unexpected simulation behaviour.

## Zeus modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Set System Availability | Empty ground | Brings the complete JTAC system online or offline. |
| Manage Fire Missions | Empty ground | Selects a mission, changes availability/remaining uses/cooldown, or marks it ready immediately. |

## Multiplayer

The client acquires and submits a target; the server validates role, side, availability, cooldown, safety radius and target data before executing the strike. Friendly smoke selection uses the thrower's actual side, not merely the local Zeus-controlled unit.

## Troubleshooting

- If no supports appear, check unique IDs, side availability and whether the system is online.
- If smoke from the wrong side is listed, record the throwing unit and target data for an RPT report.
- If a custom rocket or bomb misses badly, return to a built-in preset before altering trajectory parameters.
