# Player Slots and Respawning

Arma handles the creation and placement of a player after death. JM Framework can manage tickets, permadeath, saved loadouts and later redeployment, but it still needs a valid vanilla respawn position.

## Player slots

Place the units that players will use and set their **Control** attribute in Eden:

- Use **Player** for the default host or preview slot.
- Use **Playable** for the other multiplayer slots.
- Check that every unit belongs to the intended side.

With `disabledAI = 1` in `description.ext`, unoccupied playable slots are not filled by AI in multiplayer.

## Recommended setup: Respawn Position modules

The simplest setup is a vanilla Respawn Position module:

1. Use the example [`description.ext`](description-ext.md). It enables BASE respawn with `respawn = 3` and the `MenuPosition` respawn template.
2. In Eden, open **Systems > Multiplayer** and place a **Respawn Position** module at the spawn location.
3. Set the module's **Side** to match the playable units.
4. Give it a clear name, such as `Main Base` or `Forward Operating Base`.
5. Add another module for each additional playable side.

Preview the scenario in multiplayer and confirm that the position appears in the respawn menu.

## Alternative setup: markers

A marker with a reserved name can be used instead of a module:

| Playable side | Marker name |
| --- | --- |
| BLUFOR | `respawn_west` |
| OPFOR | `respawn_east` |
| Independent | `respawn_guerrila` |
| Civilian | `respawn_civilian` |

The spelling `guerrila` is the name expected by Arma. To add several positions for one side, add a suffix to each marker, for example `respawn_west_main` and `respawn_west_fob`.

## Respawn and redeployment are different

JMF Rally Points, Redeployment Points and Mobile Redeploy Vehicles move a living player after they have entered the mission. They do not replace the initial vanilla respawn position.

This means a mission using the Redeploy component should normally have both:

- at least one vanilla Respawn Position module or marker for each playable side; and
- whichever JMF redeployment options the mission requires.

## Common problems

### The respawn menu is empty

- Confirm that `respawn = 3` and `respawnTemplates[] = {"MenuPosition"};` are active.
- Check that the Respawn Position module or marker belongs to the player's side.
- Check the marker spelling, especially `respawn_guerrila` for Independent.
- Do not set conflicting respawn options in both `description.ext` and Eden's Multiplayer Attributes.

### The player respawns with the editor loadout

Vanilla Arma creates the replacement unit first. Loadout restoration is then handled by the enabled JMF Arsenal or Player Lifecycle settings. Check those modules and the Mission Validator report.

### Mission Validator reports a missing respawn position

BASE respawn is enabled but the server could not find a marker or registered position for one of the playable sides. Add a vanilla Respawn Position module for the named side or use its reserved marker name.
