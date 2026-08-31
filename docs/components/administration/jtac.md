# JTAC

## Overview

JTAC lets players request artillery and close air support through a themed fire-support terminal. Players choose an available fire mission, acquire a target, select an ingress direction and transmit the request. This avoids setting up separate triggers, aircraft waypoints and strike scripts for every support option.

Targets can be selected through map clicks, coordinates, coloured smoke, binoculars or laser-designating optics. Mission-makers can provide artillery, gun runs, rocket runs and bomb drops, then configure their ammunition, timing, spread and aircraft presentation. The whole JTAC system or individual support options can also be enabled and disabled during the mission through ZEN or Mission Control.

The strikes are handled by the framework rather than relying on AI aircraft to attack correctly. This makes the result more predictable and ensures that players see the same fire mission in multiplayer.

<!-- IMAGE PLACEHOLDER: JTAC terminal showing the target method, fire-mission list and map. -->

## How to set up the component

Place one **[JMF] - JTAC > JTAC Settings** module and one **Fire Mission** module per available support. Give eligible players the framework JTAC role.

## 3DEN Module Settings

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

## Custom `jtac.hpp`

Most missions should use Fire Mission modules and the tested delivery presets. Use `jtac.hpp` when a support requires ammunition or delivery values that the modules do not provide.

```sqf
JMF_jtacSupports = [
    [
        "custom_mortar_he",
        "Custom 82 mm HE Barrage",
        "ARTILLERY",
        [1],
        "ARTILLERY",
        "Sh_82mm_AMOS",
        8,
        35,
        0.35,
        8,
        90,
        4,
        "",
        0,
        0
    ]
];
```

Each support uses this order:

```sqf
[
    id, displayName, category, allowedSides, deliveryType,
    ammoClassname, projectileCount, spreadOrRunLength, interval,
    eta, cooldown, availableUses, flyoverAircraft, flyoverHeight,
    flyoverSpeed
]
```

| Field | Accepted values |
| --- | --- |
| `allowedSides` | `1` BLUFOR, `2` OPFOR, `3` Independent, `4` Civilian. Several may be supplied. |
| `deliveryType` | `ARTILLERY`, `BOMB`, `GUN` or `ROCKET`. |
| `ammoClassname` | A valid `CfgAmmo` classname, not a magazine classname. |
| `availableUses` | Use `-1` for unlimited requests. |
| `flyoverAircraft` | Vehicle classname, or an empty string for no flyby. |

`spreadOrRunLength` is an impact radius for artillery and bombs, and the length of the impact line for gun and rocket runs. Aircraft height and speed are only used when a flyover aircraft is configured.

Definitions from `jtac.hpp` and placed Fire Mission modules are combined. The built-in fallback examples are only used when neither source provides a valid support.

## ZEN Modules

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
