# Getting Started

JM Framework is an Arma 3 addon for mission makers. Systems are configured through `[JMF]` Eden modules and, where supported, adjusted during play through Zeus Enhanced modules.

## Minimum workflow

1. Load JM Framework and its dependencies.
2. Create the player and playable unit slots for the mission.
3. Add a mission [`description.ext`](description-ext.md) and configure a [respawn position](respawning.md) for every playable side.
4. Place one **[JMF] - Core > Core Settings** module.
5. Place and configure only the component modules required by the mission.
6. Synchronise child modules to their world objects where instructed.
7. Preview the mission and inspect the **Framework** diary category for status information.
8. Resolve any Mission Validator warnings in the server RPT.

Systems remain dormant unless their module or an explicit Core/Optional Systems toggle enables them.

[:octicons-arrow-right-24: Install the framework](installation.md)
