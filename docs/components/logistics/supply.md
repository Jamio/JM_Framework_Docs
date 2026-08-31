# Supply

## Overview

Supply lets players request mission-defined crates through a themed terminal. It can replace large groups of pre-placed boxes and shows players which supplies are available and what each crate contains.

Crates can have a fixed list of equipment or generate ammunition from Arsenal presets, role loadouts, starting equipment or the weapons currently carried by players. Mission-makers can configure the request list, access objects and spawn position. Spawned crates also use framework ACE carry and drag settings so they remain practical to move.

<!-- IMAGE PLACEHOLDER: Supply request dialog with a crate contents list. -->

## How to set up the component

Place one **[JMF] - Supply > Supply Settings** module and at least one **Supply Point** synchronized to an interaction object.

## 3DEN Module Settings

### Supply Settings

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Supply System | Enable Supply System | Enabled | Master switch for supply points and crate spawning. |
| Supply System | Include Built-in Crates | Enabled | Adds the framework medical and empty crate definitions. |
| Supply System | Ignore ACE Carry/Drag Weight | Enabled | Makes spawned crates carryable and draggable regardless of contents; physical simulation mass is unchanged. |
| Generated Ammunition Crate | Generated Ammo Source | Arsenal definitions | Selects Arsenal definitions, registered starting loadouts or dynamic alive-player inventories. |
| Generated Ammunition Crate | Primary Magazine Quantity | `20` | Count per unique primary magazine. |
| Generated Ammunition Crate | Handgun Magazine Quantity | `10` | Count per unique handgun magazine. |
| Generated Ammunition Crate | UGL Round Quantity | `10` | Count per unique under-barrel round. |
| Generated Ammunition Crate | Thrown Grenade Quantity | `8` | Count per unique throwable. |
| Generated Ammunition Crate | Launcher Ammunition Quantity | `4` | Count per unique rocket or missile. |
| Mission Definitions | Mission Definition File | `supplies.hpp` | Mission-relative file containing `JMF_supplyDefinitions`. |

### Supply Point

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Interaction and World Label | Interaction / Label Name | Supply Point | Player-facing ACE action and label name. |
| Crate Access | Allowed Definition IDs | Empty | Comma-separated IDs; blank allows every definition available to the player's side. |
| Crate Access | Require Logistics Role | Disabled | Restricts requests to players with the framework Logistics role. |
| Crate Access | Enable World Label | Enabled | Shows the world label above synchronized objects. |

## Setup walkthrough

1. Place **Supply Settings** and choose the definition source behaviour.
2. Create `supplies.hpp` in the mission root when using custom definitions.
3. Place **Supply Point** and synchronize it to one or more terminals, crates or props.
4. Limit **Allowed Definition IDs** when a point should provide only part of the catalogue.
5. Test the spawn area with the largest configured crate.

**Definition IDs must match exactly between `supplies.hpp`, 3DEN filters and ZEN dialogs.**{ .jmf-emphasis }

## Custom `supplies.hpp`

Place `supplies.hpp` in the mission root, or enter another mission-relative path in **Mission Definition File**. The file assigns entries to `JMF_supplyDefinitions`:

```sqf
JMF_supplyDefinitions append [
    [
        "RIFLE_AMMO",
        "Rifle Ammunition",
        "Box_NATO_Ammo_F",
        "Ammunition",
        [
            ["magazine", "30Rnd_65x39_caseless_mag", 40],
            ["magazine", "1Rnd_HE_Grenade_shell", 12],
            ["item", "ACE_EarPlugs", 8]
        ],
        [
            ["description", "Standard section ammunition resupply."],
            ["sides", ["WEST"]]
        ]
    ]
];
```

Each definition uses this order:

```sqf
[id, displayName, crateClassname, category, contents, metadata]
```

Cargo entries use `[type, classname, quantity]`. Valid types are `item`, `magazine`, `weapon` and `backpack`.

Supported metadata fields are:

| Field | Value | Purpose |
| --- | --- | --- |
| `description` | String | Text shown in the request details. |
| `sides` | Array | Any of `WEST`, `EAST`, `GUER` and `CIV`. Omit to allow all sides. |
| `enabled` | Boolean | Set to `false` to keep a definition unavailable. |
| `generator` | `"arsenalDefinitions"` | Generates ammunition from the configured Arsenal definitions instead of the static contents list. |

An Arsenal-generated crate can therefore use an empty contents list:

```sqf
[
    "PLATOON_AMMO",
    "Platoon Ammunition Resupply",
    "Box_NATO_Ammo_F",
    "Ammunition",
    [],
    [["generator", "arsenalDefinitions"], ["sides", ["WEST"]]]
]
```

Use `append` as shown when **Include Built-in Crates** is enabled. The built-ins are loaded first, so assigning a new array with `JMF_supplyDefinitions = [...]` intentionally replaces them.

## ZEN Modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Configure Supply Point | A world object | Interaction name, allowed IDs, Logistics restriction and world label. |
| Remove Supply Point | A registered object | Removes the live designation and its ACE actions. |
| Spawn Supply Crate | Empty ground | Selects any loaded crate definition and creates it at the module position. |

## Multiplayer

The server creates and populates every crate. Supply Point registrations are synchronized and actions rebuild for JIP clients and after ZEN reconfiguration. Dynamic inventory ammunition is scanned again at spawn time.

## Troubleshooting

- If the menu is empty, verify the definition file path and the IDs allowed by the Supply Point.
- If only some players see a crate, ensure the classname and all cargo mods are loaded by every client.
- If a crate cannot be carried, confirm **Ignore ACE Carry/Drag Weight** is enabled and ACE Dragging is loaded.
