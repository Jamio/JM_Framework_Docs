# ARSENAL

## Overview

Arsenal provides two ways to issue equipment: a restricted ACE Arsenal and a themed role-loadout picker. Missions can use either system or make both available from synchronised objects.

The restricted Arsenal controls which weapons, magazines, uniforms and other items are available to each side. The role picker applies complete mission-defined loadouts and can also assign framework roles. Arsenal definitions can be reused by Supply and Unknown Weapons, while the separate [Roles](roles.md) component stores qualifications and permissions.

<!-- IMAGE PLACEHOLDER: Restricted ACE Arsenal and the themed role-loadout picker. -->

## How to set up the component

Place one **[JMF] - Arsenal > Arsenal & Loadouts Settings** module and synchronise **Arsenal Object** modules to the props players will use.

## 3DEN Module Settings

### Arsenal & Loadouts Settings

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| System | Enable Arsenal System | Enabled | Master switch. |
| System | Arsenal Mode | Restricted Arsenal | Chooses the filtered ACE Arsenal or complete Role Loadout Picker. |
| Loadout Definitions | Definition Source | Built-in preset | Uses a framework preset or mission file. |
| Loadout Definitions | Built-in Preset | `nato2035` | Preset used by the built-in source. |
| Loadout Definitions | Mission Definition File | `loadouts.hpp` | Mission-relative custom definitions. |
| Respawn Persistence | Respawn Save Policy | Framework default | Controls whether saved loadout selection is restored after respawn. |

### Arsenal Object

Synchronise this module to each crate, terminal or prop that should open the configured Arsenal system.

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable World Label | Enabled | Shows a world label above synchronised objects. |
| Interaction / World Label Name | JMF Arsenal | ACE action and world-label text. |

## Custom `loadouts.hpp`

Select **Mission File** as the definition source and place `loadouts.hpp` in the mission root. The file defines restricted-Arsenal categories and role-picker loadouts:

```sqf
JMF_allowedArsenalItems = [
    ["BasicGear", [
        "U_B_CombatUniform_mcam",
        "V_PlateCarrier1_rgr",
        "H_HelmetB",
        "arifle_MX_F",
        "30Rnd_65x39_caseless_mag"
    ]],
    ["BasicItems", [
        "ItemMap", "ItemCompass", "ItemWatch", "ItemRadio",
        "ACE_fieldDressing", "ACE_tourniquet"
    ]],
    ["RIFLEMAN", [
        "SmokeShell", "HandGrenade"
    ]]
];

JMF_roleLoadouts = [
    [
        "RIFLEMAN",
        [
            ["arifle_MX_F", "", "", "", ["30Rnd_65x39_caseless_mag", 30], [], ""],
            [],
            [],
            ["U_B_CombatUniform_mcam", []],
            ["V_PlateCarrier1_rgr", [["30Rnd_65x39_caseless_mag", 6, 30]]],
            [],
            "H_HelmetB",
            "",
            [],
            ["ItemMap", "", "ItemRadio", "ItemCompass", "ItemWatch", ""]
        ],
        [],
        -1,
        ["WEST"]
    ]
];
```

`BasicGear` and `BasicItems` are available to everyone using the restricted Arsenal. A category whose ID matches the player's selected role is added for that role.

Each role entry uses this order:

```sqf
[roleID, unitLoadout, roleProperties, slotLimit, allowedSides]
```

- `unitLoadout` is the array returned by `getUnitLoadout`. In 3DEN, right-click a prepared unit and use the framework loadout-copy tool to obtain it.
- `roleProperties` accepts `medic` and `engineer` levels from `0` to `2`, plus the Boolean properties `eod`, `jtac`, `squadLeader`, `platoonLeader`, `pilot`, `crewman` and `logistics`.
- `slotLimit` is the maximum simultaneous users of the role. Use `-1` for unlimited.
- `allowedSides` accepts `WEST`, `EAST`, `INDEPENDENT`, `CIVILIAN` or `ALL`. Omit it or use `[]` to allow every side.

For example, a medic role can use:

```sqf
[["medic", 2]]
```

Only add properties that matter. Unknown classnames, duplicate IDs and malformed entries are skipped and reported in the RPT.

## ZEN Modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Configure Arsenal Access | A world object | Interaction name and floating world-label settings. |
| Remove Arsenal Access | A registered object | Removes the ACE action and label. |

## Troubleshooting

- If the Arsenal is empty, verify the definition source and every configured classname.
- If a role loadout does not appear, check its side availability and configured slot limit.
- If selection succeeds but applies no equipment, validate the loadout expression in `loadouts.hpp`.
