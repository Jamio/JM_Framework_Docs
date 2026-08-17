# Component Catalogue

Component guides are the detailed mission-maker reference for JM Framework. Each begins with the component's purpose, then documents its 3DEN modules and attributes, setup flow, related Zeus modules, multiplayer behaviour and common faults.

**Module names, defaults and dialog fields are taken from the implemented framework configuration.**{ .jmf-emphasis }

| Area | Components |
| --- | --- |
| Foundation | Core, shared UI, world labels and Optional Systems |
| Presentation | Briefing, Intel, Cutscenes and Debriefing |
| Player lifecycle | Medical, Identities, Death Camera, Tickets, Permadeath and Statistics |
| Logistics and movement | Arsenal, Roles, Supply, Garage, Fortify, Rally Points, Redeployment and Aid Stations |
| Gameplay and QoL | CBRN, Minigames, Forestry, Nametags and Unknown Weapons |
| Administration | Tasks, JTAC, Sound Player, Private Messages and Zeus Tools |

!!! tip
    Place one settings module per component. The Mission Validator reports duplicate singleton settings modules because their initialization order would otherwise decide which values win.
