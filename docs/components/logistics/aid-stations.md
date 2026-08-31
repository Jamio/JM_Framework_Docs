# Aid Stations

## Overview

Aid Stations let an eligible medic place a small medical-facility composition through ACE self-interaction. The station provides an ACE medical facility and a map marker, giving the group a clear place to treat casualties.

Only one station is kept at a time. Placing a new one removes the old composition and updates the marker. Mission-makers can configure who may deploy it and which composition is used.

## How to set up the component

Place **[JMF] - Core > Optional Systems** and enable **Aid Station** under Lightweight Systems.

## 3DEN Module Settings

Aid Stations have no dedicated visible 3DEN module and no object attributes. The Optional Systems checkbox is the complete mission-maker configuration for v1.

## Player use

Eligible medics receive the deployment ACE self-action. The player must be alive, dismounted, outside and not swimming. The framework uses the unit's ACE medical class, falling back to the vanilla Medic trait.

The deployed invisible anchor is marked as an ACE medical facility, and the surrounding composition plus map marker are created on the server.

## ZEN Modules

Aid Stations have no dedicated ZEN module. Zeus may interact with the resulting world objects normally, but the framework's deploy/remove lifecycle remains tied to the medic action.

## Multiplayer

Clients request deployment; the server revalidates the player, removes the old station and creates the new composition. This ensures all clients see the same medical facility and marker.

## Troubleshooting

- If the action is missing, verify Aid Station is enabled and the player has a sufficient ACE medic class.
- If deployment is rejected, leave the vehicle/building or move away from water.
- If a previous station disappears, that is intentional: only one framework Aid Station exists at a time.
