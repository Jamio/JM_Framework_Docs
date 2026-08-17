# Fortify

Fortify builds on ACE Fortify while moving catalogue, budget, crate and refill behaviour into framework-owned server state. Players construct from authorized crates without ACE's duplicate budget text.

## Enable the component

Place one **[JMF] - Fortify > Fortify Settings** module, then synchronize **Construction Crate** and optional **Resource Point** modules to suitable world objects.

## 3DEN modules

### Fortify Settings

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Fortify System | Enable Fortify | Enabled | Master switch. |
| Fortify System | Default Construction Radius | `100` | Maximum placement distance from an authorized crate. |
| Fortify System | Dismantling Refund | `100%` | Budget returned for dismantling an intact construction. |
| Fortify System | Destroyed Object Refund | `0%` | Budget returned after destruction. |
| Blueprint Definitions | Mission Definition File | `fortify.hpp` | Loads `JMF_fortifyCatalogues`; built-in Field Defences remain available. |

### Construction Crate

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Construction Crate | Interaction / Label Name | Construction Supplies | ACE action and world-label name. |
| Construction Crate | Catalogue ID | `FIELD` | Catalogue from `JMF_fortifyCatalogues`. |
| Construction Crate | Side | BLUFOR | Side authorized to use this crate. |
| Budget and Range | Initial Budget | `500` | Starting resources. |
| Budget and Range | Maximum Budget | `500` | Refill cap. |
| Budget and Range | Construction Radius Override | `0` | Zero inherits the Settings radius. |
| Budget and Range | Enable World Label | Enabled | Shows the crate label. |

### Resource Point

| Attribute | Default | What it does |
| --- | --- | --- |
| Interaction / Label Name | Fortify Resource Point | Player-facing name. |
| Budget per Refill | `250` | Resources added to an eligible nearby crate. |
| Maximum Refills | `-1` | Negative one means unlimited. |
| Eligible Crate Radius | `15` | Search distance for construction crates. |
| Refill Duration | `10` | ACE progress time. |
| Cooldown | `5` | Delay between uses. |
| Enable World Label | Enabled | Shows the resource-point label. |

## Mission definitions

Mission catalogues are assigned to `JMF_fortifyCatalogues` in `fortify.hpp`. Each buildable entry supplies an object classname and cost. Keep costs proportional to the crate budget and test modded objects for placement collisions.

## Zeus modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Manage Construction Budget | Empty ground | Selects a crate, operation and amount. |
| Designate Construction Crate | A world object | Name, side, catalogue, initial/maximum budget and radius. |
| Designate Resource Point | A world object | Name, refill amount/uses/radius/duration/cooldown. |
| Remove Fortify Designation | A registered object | Removes either live designation and its actions. |

## Multiplayer

The server owns budgets, placed-object accounting and designations. World actions and state are rebuilt for JIP clients. ACE performs the placement interaction while the framework validates and updates resources.

## Troubleshooting

- If the build list is empty, verify the Catalogue ID and `fortify.hpp` path.
- If a resource point finds no crate, increase **Eligible Crate Radius** or move the objects closer.
- If ACE still shows an unwanted budget value, confirm the current framework action replacement is active and no legacy Fortify action was added by the mission.
