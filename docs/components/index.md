# Component Guides

Each guide covers one framework component: what it is intended to do, how to configure it in 3DEN, which live ZEN tools it provides and how to correct common setup problems.

**Sharing a 3DEN settings module does not make two features the same component.**{ .jmf-emphasis } Optional Systems and Core therefore link to the independent systems they configure.

| Component | Purpose |
| --- | --- |
| [Aid Stations](logistics/aid-stations.md) | Deployable ACE medical facilities for qualified personnel. |
| [Ambient Sound Areas](administration/ambient-sound-areas.md) | Local looping soundscapes attached to defined mission areas. |
| [Arsenal](logistics/arsenal.md) | Restricted equipment pools and premade loadout selection. |
| [Briefing](presentation/briefing.md) | Structured, side-aware mission briefing records. |
| [CBRN](gameplay/cbrn.md) | Contamination, PPE, diagnosis, treatment, transmission and decontamination. |
| [Cleanup](foundation/cleanup.md) | Controlled removal of old battlefield objects with protection rules. |
| [Client Quality of Life](gameplay/client-qol.md) | Screenshot Mode and small client interface conveniences. |
| [Core](foundation/core.md) | Required framework state, shared appearance and global behaviour. |
| [Cutscenes](presentation/cutscenes.md) | Authored intro, mid-mission and outro camera sequences. |
| [Death Camera](lifecycle/death-camera.md) | Cinematic presentation following player death. |
| [Debriefing](presentation/debriefing.md) | Themed mission endings, statistics and commendations. |
| [Earplugs](gameplay/earplugs.md) | Virtual hearing protection through ACE Equipment. |
| [Field Procedures](gameplay/field-procedures.md) | Interactive equipment and technical challenges. |
| [Forestry](gameplay/forestry.md) | ACE actions for clearing grass, bushes and trees. |
| [Fortify](logistics/fortify.md) | Configurable ACE Fortify construction resources and presets. |
| [Garage](logistics/garage.md) | Restricted vehicle deployment and servicing. |
| [Identities](lifecycle/identities.md) | Thematic character names, dates and identity pools. |
| [Intel](presentation/intel.md) | Collectable diary records and readable image intelligence. |
| [JTAC](administration/jtac.md) | Player-requested fire missions using several target-acquisition methods. |
| [Medical](lifecycle/medical.md) | Framework medical HUD and optional KAT-aware information. |
| [Minigames](gameplay/minigames.md) | Multiplayer table games. |
| [Mission Control](administration/mission-control.md) | Central live control of framework systems, personnel and curators. |
| [Mission Validator](administration/mission-validator.md) | Automated checks for common framework configuration mistakes. |
| [Nametags](gameplay/nametags.md) | Configurable nearby player-name labels. |
| [Optional Systems](foundation/optional-systems.md) | Shared 3DEN settings for several independent smaller components. |
| [Permadeath](lifecycle/permadeath.md) | Restricted respawn and permanent-death handling. |
| [Player Lifecycle](lifecycle/player-lifecycle.md) | Shared death, waiting, respawn and release flow. |
| [Player Statistics](lifecycle/player-stats.md) | Server-owned mission statistics used by Debriefing. |
| [Private Messages](administration/private-messages.md) | Player-to-administrator messages from the pause menu. |
| [Rally Points](logistics/rally-points.md) | Squad and platoon rally deployment points. |
| [Redeployment](logistics/redeployment.md) | Controlled movement to rallies, squadmates, terminals and the MRV. |
| [Roles](logistics/roles.md) | Player qualifications, specialist assignments, Role Assignment and ORBAT. |
| [Safe Start](foundation/safe-start.md) | A controlled ready-up period before the mission goes live. |
| [Sound Player](administration/sound-player.md) | Mission-defined sounds available for dynamic playback. |
| [Stamina](gameplay/stamina.md) | Mission-wide disabling of vanilla stamina and fatigue. |
| [Supply](logistics/supply.md) | Restricted and configurable supply-crate requests. |
| [Tasks](administration/tasks.md) | Authored and dynamically controlled mission tasks. |
| [Tickets](lifecycle/tickets.md) | Side ticket pools, respawn costs and bodybag recovery. |
| [Unknown Weapons](gameplay/unknown-weapons.md) | Optional handling penalties for unauthorised weapons. |
| [Vehicle Paths](logistics/vehicle-paths.md) | Exact scripted AI vehicle routes in 3DEN and Zeus. |
| [World Labels](presentation/world-labels.md) | Shared 3D labels used by framework interaction objects. |
| [Zeus Tools](administration/zeus-tools.md) | Cinematic, environmental and utility effects for Zeus. |

!!! tip
    Place only one copy of each settings module. Mission Validator reports duplicate singleton modules because their initialisation order would otherwise decide which settings take effect.
