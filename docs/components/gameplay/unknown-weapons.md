# Unknown Weapons

## Overview

Unknown Weapons discourages players from treating every captured firearm as immediately familiar and combat-ready. When a player uses a weapon outside the mission's authorised equipment pool, the component can reduce practical accuracy and increase mechanical unreliability through ACE overheating and jamming behaviour. The intention is to create a meaningful distinction between issued equipment and unfamiliar battlefield pickups without hard-blocking the player from firing them.

The recognised weapon list is assembled from the framework's Arsenal presets and role loadouts, so mission-makers do not have to maintain a second whitelist. This also means that a weapon intentionally issued to any configured role can be treated as known even if a particular player did not begin with it. Broad enablement and effect strength are controlled through Optional Systems, while the source equipment definitions remain with Arsenal and loadouts.

The component is most suitable for scenarios where logistics and captured equipment matter. It can be left disabled for sandbox missions or settings where universal weapon familiarity is appropriate. Its effects are applied only when the relevant framework option is active and ACE provides the underlying weapon-state mechanics.

## How to set up the component

Configure Unknown Weapons in **[JMF] - Core > Optional Systems** and ensure Arsenal/loadout definitions are loaded.

## 3DEN Module Settings

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Unknown Weapon Penalties | Disabled | Master switch. |
| Warn Player | Enabled | Shows one explanation when an unfamiliar weapon is first fired. |
| Add Framework Diary Entry | Enabled | Documents the rule in the Framework diary subject. |
| Additional Allowed Weapons | Empty | Global comma-, space- or line-separated classnames. |
| Additional Dispersion | `25` | Accuracy penalty. |
| Additional Jam Chance | `1.5%` | Extra ACE jam probability. |
| Reload Failure Chance | `25%` | Chance that a reload fails. |
| Catastrophic Failure Chance | `2%` | Chance of weapon-related damage. |
| Catastrophic Failure Damage | `0.2` | Vanilla damage applied by that failure. |

Whitelists include global and side-specific restricted Arsenal pools, role loadout weapons and explicit extras. Thrown grenades, UGL ammunition and placed explosives are not treated as unfamiliar firearms.

## ZEN Modules

Unknown Weapons has no ZEN module. Live whitelisting changes should be performed through the Arsenal/role systems that supply its approved pool.

## Multiplayer

Each owning client detects and applies weapon behaviour while using the synchronized approved definitions. The explanatory notification appears once; ACE supplies later jam/reload feedback.

## Troubleshooting

- If an approved weapon is penalized, confirm its exact weapon classname exists in the appropriate side/role definition.
- If grenades trigger warnings, ensure the current exclusion logic is loaded and capture the fired classname from the RPT.
- If repeated framework warnings appear, remove legacy mission scripts that also implement Diwako Unknown Weapons.
