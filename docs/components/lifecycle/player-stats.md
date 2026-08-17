# Player Statistics

Player Statistics records combat, survival, medical and movement performance for the custom Debriefing screen. It is designed for mission-level summaries, not persistent player progression.

## Enable the component

Configure Player Statistics inside **[JMF] - Core > Core Settings**. The old standalone settings module is hidden.

## 3DEN settings

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Player Statistics | Enabled | Master switch for event registration and server snapshots. |
| Track Travel Distance | Enabled | Samples distance travelled on foot and in vehicles. |
| Track Medical Activity | Enabled | Tracks ACE treatments given. |

## Tracked statistics

The current debrief dataset includes kills, vehicle kills, longest kill, shots fired, launcher rounds, grenades thrown, explosives planted, deaths, unconscious events, treatments, damage received and distance travelled.

Team commendations include **Top Killer**, **Marksman**, **Desmond Doss**, **Grenadier**, **Demolitions**, **Sleepy**, **Ironman**, **Lazy**, **Hesitant**, **Trigger Happy**, **Rocket Man**, **Anti-Armour**, **Bullet Sponge**, **Survivor** and **Reincarnated**. The debrief labels state the statistic each award represents.

## Zeus modules

Player Statistics has no ZEN module in v1. Zeus-triggered Debriefing uses the same final statistics flush as a 3DEN ending.

## Multiplayer

Clients batch frequent counters before sending them to the server. The server publishes snapshots, and Debriefing forces a final flush before building awards. This reduces network traffic without dropping the final mission state.

## Troubleshooting

- If a category is always zero, confirm its tracking toggle and the required ACE/engine event are active.
- If late events are missing from Debriefing, ensure the framework debrief flow is used so the final flush occurs.
- Ties and zero-value categories may intentionally suppress an unhelpful commendation.
