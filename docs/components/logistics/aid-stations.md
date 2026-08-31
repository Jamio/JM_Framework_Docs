# Aid Stations

## Overview

Aid Stations allow an authorised medic to establish a recognisable treatment point during an operation. Using an ACE self-interaction, the medic deploys a framework medical-facility composition at a suitable position in front of them, giving the unit a practical place to consolidate casualties without requiring Zeus to build and mark the site manually.

The component deliberately maintains one authoritative station for the relevant force or deployment context. Creating a replacement removes the previous composition and updates its map marker, preventing abandoned facilities and markers from accumulating as the front moves. Mission-makers can control who is eligible, which composition is used and how the station is identified, while ACE continues to provide the actual medical treatment mechanics.

Aid Stations are intended as lightweight deployable infrastructure rather than a construction system. They do not provide an unlimited catalogue of objects or replace Fortify; the composition is a consistent mission asset whose lifecycle is managed by the server and whose action is made available through framework roles or ACE medical qualification.

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
