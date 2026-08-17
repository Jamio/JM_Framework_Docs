# Unknown Weapons

Unknown Weapons makes unauthorized firearms inaccurate and mechanically unreliable by integrating with ACE overheating/jamming. The whitelist is built from the mission's Arsenal and role definitions rather than maintained separately.

## Enable the component

Configure Unknown Weapons in **[JMF] - Core > Optional Systems** and ensure Arsenal/loadout definitions are loaded.

## 3DEN settings

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

## Zeus modules

Unknown Weapons has no ZEN module. Live whitelisting changes should be performed through the Arsenal/role systems that supply its approved pool.

## Multiplayer

Each owning client detects and applies weapon behaviour while using the synchronized approved definitions. The explanatory notification appears once; ACE supplies later jam/reload feedback.

## Troubleshooting

- If an approved weapon is penalized, confirm its exact weapon classname exists in the appropriate side/role definition.
- If grenades trigger warnings, ensure the current exclusion logic is loaded and capture the fired classname from the RPT.
- If repeated framework warnings appear, remove legacy mission scripts that also implement Diwako Unknown Weapons.
