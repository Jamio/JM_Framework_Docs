# Briefing

Briefing turns structured 3DEN text fields into a consistently formatted diary entry. Mission makers supply the operational content; the framework handles headings, ordering, fonts and side-specific delivery.

## Enable the component

Place one **[JMF] - Briefing > Briefing Setup** module. Empty fields are ignored, so the same module works for short and detailed missions.

## 3DEN modules

### Briefing Setup

Builds one continuous briefing record. **Use this for the main mission briefing rather than creating one module per heading.**{ .jmf-emphasis }

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Briefing Organisation | Diary Subject ID | `Diary` | Places the record in the standard diary subject. Enter a shared custom ID without spaces to create another subject. |
| Briefing Organisation | Custom Subject Name | Mission Briefing | Display name used only for a custom subject ID. |
| Briefing Organisation | Audience | All players | Restricts the whole record to one side when required. |
| Situation | Situation | Empty | Overall context and current operational picture. |
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

Creates a separate formatted diary record for supplementary information that should not be folded into the main briefing.

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

## Setup walkthrough

1. Place one **Briefing Setup** module.
2. Leave **Diary Subject ID** as `Diary` for the normal briefing screen.
3. Select the intended audience.
4. Fill only the relevant content fields.
5. Add **Briefing Entry** modules for appendices, technical notes or other separate records.

## Zeus modules

Briefing has no ZEN module. Its records are authored in 3DEN and created locally for eligible players when the briefing state is refreshed.

## Multiplayer

Every client builds its own diary records from the synchronized module data. The component refreshes when the playable unit changes, allowing respawned and JIP clients to receive the correct side-restricted content.

## Troubleshooting

- If a custom subject does not appear, ensure every entry uses the same subject ID and that it contains no spaces.
- If the main briefing is split across records, replace multiple setup modules with one **Briefing Setup** module.
- If a section is missing, confirm the field is not empty and the audience includes the local player's side.
