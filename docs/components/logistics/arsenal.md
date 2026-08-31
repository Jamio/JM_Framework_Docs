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
