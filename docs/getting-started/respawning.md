# Player Slots and Respawning

Arma handles the creation and placement of a player after death. JM Framework can manage tickets, permadeath, saved loadouts and later redeployment, but it still needs a valid vanilla respawn position.

## Player slots

Place the units that players will use and set their **Control** attribute in Eden:

- Use **Player** for the default host or preview slot.
- Use **Playable** for the other multiplayer slots.
- Check that every unit belongs to the intended side.

With `disabledAI = 1` in `description.ext`, unoccupied playable slots are not filled by AI in multiplayer.

## Setting up respawn markers

The example [`description.ext`](description-ext.md) enables BASE respawn with `respawn = 3` and the `MenuPosition` respawn template. Each playable side then needs a named marker:

1. In Eden, select the marker tool and place a marker at the intended spawn location.
2. Open the marker's attributes.
3. Enter the correct reserved name in its **Variable Name** field.
4. Add another correctly named marker for each additional playable side.

Preview the scenario in multiplayer and confirm that the position appears in the respawn menu.

| Playable side | Marker name |
| --- | --- |
| BLUFOR | `respawn_west` |
| OPFOR | `respawn_east` |
| Independent | `respawn_guerrila` |
| Civilian | `respawn_civilian` |

The spelling `guerrila` is the name expected by Arma. To add several positions for one side, add a suffix to each marker, for example `respawn_west_main` and `respawn_west_fob`. The marker's display text can be used to give each position a readable name.

## Respawn and redeployment are different

JMF Rally Points, Redeployment Points and Mobile Redeploy Vehicles move a living player after they have entered the mission. They do not replace the initial vanilla respawn position.

This means a mission using the Redeploy component should normally have both:

- at least one correctly named respawn marker for each playable side; and
- whichever JMF redeployment options the mission requires.

## Common problems

### The respawn menu is empty

- Confirm that `respawn = 3` and `respawnTemplates[] = {"MenuPosition"};` are active.
- Check that the marker name matches the player's side.
- Check the marker spelling, especially `respawn_guerrila` for Independent.
- Do not set conflicting respawn options in both `description.ext` and Eden's Multiplayer Attributes.

### The player respawns with the editor loadout

Vanilla Arma creates the replacement unit first. Loadout restoration is then handled by the enabled JMF Arsenal or Player Lifecycle settings. Check those modules and the Mission Validator report.

### Mission Validator reports a missing respawn position

BASE respawn is enabled but the server could not find a destination for one of the playable sides. Add the reserved respawn marker named in the warning.
