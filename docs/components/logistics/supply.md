# Supply

## Overview

Supply gives players access to a curated logistics catalogue through synchronised request objects and a themed terminal. It is designed to replace piles of pre-placed crates and one-off resupply scripts with reusable definitions that clearly show what can be requested and what each crate contains. Spawned crates are made practical logistics assets, including framework handling for ACE carrying and dragging rather than inheriting an unsuitable mass from their contents.

Mission-makers can define fixed crates with exact weapons, magazines, items and quantities, or use dynamic ammunition generation. Dynamic requests can derive useful magazines from the framework Arsenal and role loadouts, the starting equipment of playable units, or the current inventories of living players. This allows one resupply definition to remain relevant when the mission's issued weapons change, while fixed definitions remain available for specialist equipment and carefully balanced supplies.

Access objects, available request sets, crate placement and presentation are configurable. The server performs the actual creation and cargo population so all clients observe one authoritative crate. Supply concerns requested equipment; vehicle deployment and servicing remain part of Garage, while Arsenal controls the equipment pools that dynamic requests may consult.

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
| Crate Access | Enable Floating Text | Enabled | Shows the world label above synchronized objects. |

## Setup walkthrough

1. Place **Supply Settings** and choose the definition source behaviour.
2. Create `supplies.hpp` in the mission root when using custom definitions.
3. Place **Supply Point** and synchronize it to one or more terminals, crates or props.
4. Limit **Allowed Definition IDs** when a point should provide only part of the catalogue.
5. Test the spawn area with the largest configured crate.

**Definition IDs must match exactly between `supplies.hpp`, 3DEN filters and ZEN dialogs.**{ .jmf-emphasis }

## ZEN Modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Configure Supply Point | A world object | Interaction name, allowed IDs, Logistics restriction and floating label. |
| Remove Supply Point | A registered object | Removes the live designation and its ACE actions. |
| Spawn Supply Crate | Empty ground | Selects any loaded crate definition and creates it at the module position. |

## Multiplayer

The server creates and populates every crate. Supply Point registrations are synchronized and actions rebuild for JIP clients and after ZEN reconfiguration. Dynamic inventory ammunition is scanned again at spawn time.

## Troubleshooting

- If the menu is empty, verify the definition file path and the IDs allowed by the Supply Point.
- If only some players see a crate, ensure the classname and all cargo mods are loaded by every client.
- If a crate cannot be carried, confirm **Ignore ACE Carry/Drag Weight** is enabled and ACE Dragging is loaded.
