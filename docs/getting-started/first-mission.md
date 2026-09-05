# Build Your First Mission

This walkthrough covers the minimum needed for a small multiplayer mission. It uses the Supply component as a simple example.

## 1. Create the mission and player slots

Create a new scenario in Eden and place the units players will use. Set at least one unit's **Control** attribute to **Player**, then set the remaining player slots to **Playable**.

Keep units on the intended side. Respawn positions, tickets and some framework permissions use the unit's side.

## 2. Add `description.ext`

Save the scenario, open its mission folder and create [`description.ext`](description-ext.md). The example on that page contains a suitable starting configuration for a co-operative mission.

## 3. Set up respawning

Place a vanilla **Multiplayer > Respawn Position** module for every side that has playable units. Set each module to the correct side and give the position a useful name such as `Main Base`.

The module works with `respawn = 3` and the `MenuPosition` template in the example `description.ext`. Named respawn markers can be used instead. See [Player Slots and Respawning](respawning.md) for both methods.

## 4. Place Core Settings

Configure the mission fonts, accent colour and shared dialog theme. Core Settings also enables the Framework Status diary entry and common services.

## 5. Add a component

For a simple test, place **Supply Settings**, then place a **Supply Point** module and synchronise it to a crate or terminal. Preview the mission and use the ACE interaction on that object.

## 6. Preview and validate

Preview the mission in multiplayer, select a playable slot and check that the expected actions appear. The **Framework** diary category shows the loaded component settings.

Wait several seconds after mission start. Mission Validator checks duplicate settings modules, missing dependencies, invalid classnames, incomplete synchronisation and missing BASE respawn positions. Its full report is written to the RPT.

## 7. Test respawn and multiplayer

Die or use an administrator tool to force a respawn. Confirm that the respawn menu lists the expected position and that the new unit retains the intended framework behaviour.

Eden preview proves basic configuration, not multiplayer locality. Before publishing, test the mission on a dedicated server with at least one normal client and one JIP client.
