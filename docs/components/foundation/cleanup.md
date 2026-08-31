# CLEANUP

## Overview

Cleanup provides a framework-aware alternative to the basic corpse and wreck limits commonly placed in `description.ext`. Its purpose is to keep a long-running operation performant without erasing battlefield details that are still important to players or to another framework system. The server periodically considers dead bodies, destroyed vehicles and abandoned ground items, but only removes candidates that satisfy the configured age, distance and quantity rules.

Mission-makers can tune each category independently and protect objects that should remain in the world for narrative, recovery or visual reasons. Objects near players are left alone, and explicitly preserved objects are excluded regardless of age. The cleaner also recognises framework state: contaminated bodies, vehicles and containers remain available for CBRN detection and decontamination instead of being silently removed by routine housekeeping.

This is intentionally a conservative cleanup system. It is not designed to make a battlefield spotless or to scan every map object continuously. Its bounded server-side passes target the transient objects most likely to accumulate during play, providing predictable control while allowing mission-makers and Zeus to preserve selected wrecks or casualties.

## How to set up the component

Configure **Battlefield Cleanup** in **[JMF] - Core > Core Settings**. For any placed object that must remain throughout the mission, enable **JM Framework Cleanup > Protect from Cleanup** in that object's 3DEN attributes.

## 3DEN Module Settings

### Core Settings

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Framework Cleanup | Disabled | Starts the server cleanup service. |
| Cleanup Interval | `120` | Seconds between cleanup checks. |
| Minimum Player Distance | `150` | Eligible objects nearer a living player are retained. |
| Clean AI Bodies | Enabled | Allows old AI corpses to be removed. |
| Clean Player Bodies | Disabled | Allows player corpses to be removed; leave off when using body recovery or casualty gameplay. |
| Body Lifetime | `900` | Minimum corpse age in seconds. |
| Clean Vehicle Wrecks | Enabled | Allows old destroyed vehicles to be removed. |
| Wreck Lifetime | `1200` | Minimum wreck age in seconds. |
| Clean Dropped Equipment | Enabled | Allows old ground holders to be removed. |
| Dropped Equipment Lifetime | `600` | Minimum equipment-holder age in seconds. |

### Protect from Cleanup

This checkbox appears in the attributes of suitable objects and units. Protected objects are never removed by the framework cleanup service.

## ZEN Modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Toggle Cleanup Protection | An object or unit | Adds or removes permanent cleanup protection. |
| Run Cleanup Pass | Anywhere | Runs an immediate pass; normal age, distance and protection rules still apply. |

Mission Control also exposes cleanup and protection controls on its **Logistics** page.

## Troubleshooting

- A manual cleanup pass does not bypass object lifetime or minimum-distance settings.
- If something important disappears, protect it in 3DEN or through ZEN before it becomes eligible.
- If old objects remain, check player distance, protection state and CBRN surface contamination before assuming cleanup has stopped.
