# Mission `description.ext`

The framework addon supplies its own functions, dialogs and event handlers. A mission only needs a small `description.ext` for mission information, respawn rules and any mission-defined sounds.

Create `description.ext` in the mission's root folder, then copy the following template into it:

```cpp
/*
 * JM Framework 3 mission description
 *
 * Copy this file and sounds.hpp into the mission folder. Most framework
 * configuration now lives in 3DEN modules and does not need to be included
 * here.
 */

// Mission information
author = "Mission Maker";
briefingName = "Mission Name";
onLoadName = "Mission Name";
onLoadMission = "Short mission description.";
overviewText = "Short mission description.";

// Replace these with a mission image when one is available.
loadScreen = "\z\jmf\addons\core\ui\jmf_framework_placeholder_ca.paa";
overviewPicture = "\z\jmf\addons\core\ui\jmf_framework_placeholder_ca.paa";
onLoadMissionTime = 0;

class Header
{
    gameType = "Coop";
    minPlayers = 1;
    maxPlayers = 40;
};

// Vanilla respawn placement remains responsible for creating the new unit.
// Add respawn_west, respawn_east or equivalent markers, or use 3DEN Respawn
// Position modules. JMF handles tickets, permadeath and post-respawn systems.
respawn = 3;
respawnDelay = 15;
respawnOnStart = -1;
respawnDialog = 0;
respawnTemplates[] = {"MenuPosition"};

// ACE Medical is used instead of the vanilla revive system.
reviveMode = 0;

// General multiplayer defaults
disabledAI = 1;
aiKills = 0;
briefing = 1;
debriefing = 0;
enableDebugConsole = 1;

class DifficultyOverride
{
    tacticalPing = 0;
};

// Mission sounds are available to JMF Sound Player and Ambient Sound Areas.
// Remove this class or the include if the mission does not use sounds.hpp.
class CfgSounds
{
    sounds[] = {};
    #include "sounds.hpp"
};

/*
 * Do not copy the old JM_Framework CfgFunctions, RscTitles, dialog or extended
 * event-handler includes into this file. Those are supplied by the addon.
 *
 * The vanilla corpse, weapon-holder and wreck managers are also deliberately
 * left out. Configure JMF Cleanup in 3DEN when the mission needs automatic
 * cleanup and protected objects.
 */
```

## What to change

- Replace the mission name, author and description.
- Set `maxPlayers` to the number of playable slots.
- Add a vanilla **Respawn Position** module or correctly named marker for every playable side. See [Player Slots and Respawning](respawning.md).
- Replace the framework placeholder image with a mission-relative image when required.
- Remove the `CfgSounds` block if the mission has no `sounds.hpp` file.

Respawn can also be configured through Eden's **Multiplayer Attributes**. Avoid defining different respawn values in both places.

Do not restore any function, dialog or event-handler includes from older mission-file versions of JM Framework.
