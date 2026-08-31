# BRIEFING

## Overview

Briefing creates formatted diary entries for pre-mission information without requiring several vanilla diary modules. Mission-makers provide the text, while the framework handles headings, ordering and the general appearance.

Entries can cover the situation, mission, execution, administration, signals or any custom topic. Each section can be limited to the correct side, allowing opposing forces to receive different briefings in the same mission. Information discovered during play is handled separately by Intel.

<!-- IMAGE PLACEHOLDER: A formatted briefing diary page with several sections. -->

## How to set up the component

Place one **[JMF] - Briefing > Briefing Setup** module. Edit its attributes to configure the briefing. Empty fields are safely ignored, so the same module works for short and detailed mission briefs.

## 3DEN Module Settings

These settings are present in the respective 3DEN modules, and can be edited to the mission-makers preferences:

### Briefing Setup

*This module builds one continious, neatly formatted and structured briefing record from the supplied information.*

**Use this for the main mission briefing rather than creating one module per heading.**{ .jmf-emphasis }

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Briefing Organisation | Diary Subject ID | `Diary` | Places the record in the standard diary subject. Enter a shared custom ID without spaces to create another subject. |
| Briefing Organisation | Custom Subject Name | Mission Briefing | Display name used only for a custom subject ID. |
| Briefing Organisation | Audience | All players | Restricts the whole record to one side when required. |
| Situation | Situation | Empty | Overall operational context. |
| Situation | Area of Operations | Empty | Terrain, weather, population centres and relevant features. |
| Situation | OPFOR | Empty | Enemy composition, disposition, capabilities and likely intent. |
| Situation | Civilians | Empty | Civilian presence, behaviour and considerations. |
| Situation | Rules of Engagement | Empty | Restrictions and rules governing force. |
| Mission | Mission | Empty | The mission statement: who, what, when, where and why. |
| Mission | Execution | Empty | Phases, tasks and coordination instructions. |
| Mission | Success / Failure Conditions | Empty | Conditions that decide the outcome. |
| Logistics | Resupplies | Empty | Supply points, limits and replenishment arrangements. |
| Logistics | Respawns | Empty | Respawn, ticket and lifecycle rules players need to understand. |
| Logistics | Redeployment | Empty | Available destinations, transport and restrictions. |
| Logistics | Communications | Empty | Channels, callsigns, signals and command arrangements. |
| Miscellaneous | Miscellaneous | Empty | Information that does not fit another heading. |

### Briefing Entry

*This module is used to create separate diary records for supplementary information, notes etc. that you dont want to fold into the main briefing entry.*

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Entry Content | Entry Title | Situation | Diary-list title and main heading. |
| Entry Content | Subheading | SUMMARY | Optional highlighted heading above the body. |
| Entry Content | Briefing Text | Enter briefing text here. | Main content; line breaks and Arma diary markup are supported. |
| Entry Content | Image Path | Empty | Optional PAA image above the text. |
| Organisation | Diary Subject ID | `Diary` | Standard or shared custom subject ID. |
| Organisation | Custom Subject Name | Mission Briefing | Name used by a custom subject. |
| Organisation | Display Order | `10` | Lower values appear first. Use gaps such as `10`, `20`, `30`. |
| Organisation | Audience | All players | Limits the entry to a side. |


## ZEN Modules

Briefing has no ZEN module. Its records are authored in 3DEN and created locally for eligible players when the briefing state is refreshed.

## Troubleshooting

* If a custom subject does not appear, ensure every entry uses the same subject ID and that it contains no spaces.
* If the main briefing is split across records, replace multiple setup modules with one **Briefing Setup** module.
* If a section is missing, confirm the field is not empty and the audience includes the local player's side.
