# Player Statistics

## Overview

Player Statistics records a focused set of activity from the current operation so that the custom Debriefing can show players what happened beyond a simple success or failure message. Depending on configuration, this can include combat, survival, medical and movement information, together with values used for team commendations. The aim is an engaging mission summary, not a competitive ranking system.

Collection is tied into the framework's lifecycle and relevant gameplay events so statistics follow the correct player through death and respawn. The component is optional and avoids installing its tracking handlers when disabled. Mission-makers can choose which categories are appropriate for the scenario, preventing an infantry patrol, medical exercise and vehicle mission from all presenting the same irrelevant figures.

Statistics exist for the duration of the mission and feed framework presentation such as Debriefing. They are not a persistent profile, do not unlock equipment and are not intended as an authoritative anti-cheat or analytics system. The data should be understood as a readable account of the operation rather than a complete record of every engine event.

## How to set up the component

Configure Player Statistics inside **[JMF] - Core > Core Settings**. The old standalone settings module is hidden.

## 3DEN Module Settings

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Player Statistics | Enabled | Master switch for event registration and server snapshots. |
| Track Travel Distance | Enabled | Samples distance travelled on foot and in vehicles. |
| Track Medical Activity | Enabled | Tracks ACE treatments given. |

## Tracked statistics

The current debrief dataset includes kills, vehicle kills, longest kill, shots fired, launcher rounds, grenades thrown, explosives planted, deaths, unconscious events, treatments, damage received and distance travelled.

Team commendations include **Top Killer**, **Marksman**, **Desmond Doss**, **Grenadier**, **Demolitions**, **Sleepy**, **Ironman**, **Lazy**, **Hesitant**, **Trigger Happy**, **Rocket Man**, **Anti-Armour**, **Bullet Sponge**, **Survivor** and **Reincarnated**. The debrief labels state the statistic each award represents.

## ZEN Modules

Player Statistics has no ZEN module in v1. Zeus-triggered Debriefing uses the same final statistics flush as a 3DEN ending.

## Multiplayer

Clients batch frequent counters before sending them to the server. The server publishes snapshots, and Debriefing forces a final flush before building awards. This reduces network traffic without dropping the final mission state.

## Troubleshooting

- If a category is always zero, confirm its tracking toggle and the required ACE/engine event are active.
- If late events are missing from Debriefing, ensure the framework debrief flow is used so the final flush occurs.
- Ties and zero-value categories may intentionally suppress an unhelpful commendation.
