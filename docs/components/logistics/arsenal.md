# ARSENAL

## Overview

Arsenal provides the framework's controlled equipment-distribution tools. A mission can offer a side-aware restricted ACE Arsenal, a themed role-loadout picker, or both, depending on how much freedom players should have. The aim is to let mission-makers define a reliable equipment baseline once and reuse it across access objects, respawns, supply generation and other framework systems rather than maintaining several unrelated whitelists.

Restricted Arsenal mode determines which weapons, magazines, uniforms, equipment and items are available to each side while retaining ACE's familiar loadout interface. Role-loadout mode presents complete mission-defined kits through a themed dialog, allowing a player to select an assignment and preview the associated equipment before it is applied. Definitions may be stored as framework presets, extended by the mission and grouped to suit different factions or eras.

Arsenal data is also consumed elsewhere: Supply can generate relevant ammunition, Unknown Weapons can recognise issued firearms, and the role picker can assign framework roles alongside a loadout. That integration does not make those systems part of Arsenal. Equipment availability remains separate from the [Roles](roles.md) component, which stores qualifications and permissions after they have been assigned.

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
| Enable Floating Text | Enabled | Shows a world label above synchronised objects. |
| Interaction / Label Name | JMF Arsenal | ACE action and label text. |

Mission definitions may provide global and side-specific pools and complete loadout entries. Use exact Arma classnames and test every configured loadout.

## ZEN Modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Configure Arsenal Access | A world object | Interaction name and floating world-label settings. |
| Remove Arsenal Access | A registered object | Removes the ACE action and label. |

## Troubleshooting

- If the Arsenal is empty, verify the definition source and every configured classname.
- If a role loadout does not appear, check its side availability and configured slot limit.
- If selection succeeds but applies no equipment, validate the loadout expression in `loadouts.hpp`.
