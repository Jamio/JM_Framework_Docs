# Component Guides

Each guide explains what a component is intended to do, how to set it up in 3DEN, which live ZEN tools it provides and how to resolve common setup problems.

**Module names, defaults and dialog fields are taken from the current framework configuration.**{ .jmf-emphasis }

| Component | Purpose |
| --- | --- |
| [Aid Stations](logistics/aid-stations.md) | Deployable ACE medical facilities for qualified personnel. |
| [Arsenal and Roles](logistics/arsenal-roles.md) | Restricted equipment pools, premade loadouts and player role assignments. |
| [Briefing](presentation/briefing.md) | Structured, side-aware mission briefing records. |
| [CBRN](gameplay/cbrn.md) | Contamination, PPE, diagnosis, treatment, transmission and decontamination. |
| [Cleanup](foundation/cleanup.md) | Controlled removal of old battlefield objects with protection rules. |
| [Core and UI](foundation/core.md) | Required framework state, shared appearance and global behaviour. |
| [Cutscenes](presentation/cutscenes.md) | Authored intro, mid-mission and outro camera sequences. |
| [Debriefing](presentation/debriefing.md) | Themed mission endings, statistics and commendations. |
| [Forestry](gameplay/forestry.md) | ACE actions for clearing grass, bushes and trees. |
| [Fortify](logistics/fortify.md) | Configurable ACE Fortify construction resources and presets. |
| [Garage](logistics/garage.md) | Restricted vehicle deployment and servicing. |
| [Identities and Death Camera](lifecycle/identities-death-camera.md) | Thematic character identities and cinematic death presentation. |
| [Intel](presentation/intel.md) | Collectable diary records and readable image intelligence. |
| [JTAC](administration/jtac.md) | Player-requested fire missions using several target-acquisition methods. |
| [Medical](lifecycle/medical.md) | Framework medical HUD and optional KAT-aware information. |
| [Minigames and Field Procedures](gameplay/minigames.md) | Interactive procedure challenges and multiplayer table games. |
| [Mission Control](administration/mission-control.md) | Central live control of framework systems, personnel and curators. |
| [Mission Validator](administration/mission-validator.md) | Automated checks for common framework configuration mistakes. |
| [Nametags](gameplay/nametags.md) | Configurable nearby player-name labels. |
| [Optional Systems](foundation/optional-systems.md) | Smaller quality-of-life and presentation systems in one module. |
| [Permadeath](lifecycle/permadeath.md) | Restricted respawn and permanent-death handling. |
| [Player Lifecycle](lifecycle/player-lifecycle.md) | Shared death, waiting, respawn and release flow. |
| [Player Statistics](lifecycle/player-stats.md) | Server-owned mission statistics used by debriefing. |
| [Private Messages](administration/private-messages.md) | Player-to-administrator messages from the pause menu. |
| [Rally Points](logistics/rally-points.md) | Squad and platoon rally deployment points. |
| [Redeployment](logistics/redeployment.md) | Controlled movement to rallies, squadmates, terminals and the MRV. |
| [Safe Start](foundation/safe-start.md) | A controlled ready-up period before the mission goes live. |
| [Sound Player](administration/sound-player.md) | Zeus-played mission audio and local ambient sound areas. |
| [Supply](logistics/supply.md) | Restricted and configurable supply-crate requests. |
| [Tasks](administration/tasks.md) | Authored and dynamically controlled mission tasks. |
| [Tickets](lifecycle/tickets.md) | Side ticket pools, respawn costs and bodybag recovery. |
| [Unknown Weapons](gameplay/unknown-weapons.md) | Optional handling penalties for unauthorised weapons. |
| [Vehicle Paths](logistics/vehicle-paths.md) | Exact scripted AI vehicle routes in 3DEN and Zeus. |
| [Zeus Tools](administration/zeus-tools.md) | Cinematic, ambient and utility tools for live mission control. |

!!! tip
    Place only one copy of each settings module. Mission Validator reports duplicate singleton modules because their initialisation order would otherwise decide which settings take effect.
