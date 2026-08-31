# CLEANUP

## Overview

Cleanup removes old bodies, wrecks and dropped equipment to help longer missions run smoothly. Each category has its own age, distance and quantity settings, and objects close to players are left alone.

Mission-makers can protect objects that need to remain, such as a particular wreck or casualty. The system also keeps contaminated CBRN objects so they can still be detected and decontaminated. Cleanup is intended to control build-up over time, not remove every object from the battlefield.

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
