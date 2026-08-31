# FIELD PROCEDURES

## Overview

Field Procedures adds short interactive challenges to mission objects. Available procedures include wire cutting, lock picking, keypad entry, radio tuning, repair and several other technical tasks. They keep the original Waldo interface style rather than using the normal framework themes.

Mission-makers choose the procedure, attach it to an object and configure its solution, difficulty and result. Completion can set a variable or activate other mission logic, making the system useful for tasks such as bomb disposal, communications repair and forced entry. Recreational table games are handled separately by [Minigames](minigames.md).

<!-- IMAGE PLACEHOLDER: A representative Field Procedure interface in use. -->

## How to set up the component

Place **[JMF] - Core > Field Procedure**, choose the challenge, and synchronise it to the equipment or prop players will operate.

## 3DEN Module Settings

### Field Procedure

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Field Procedure | Procedure Type | Secure Control Sequence | Selects the challenge type. |
| Field Procedure | Difficulty | Standard | Adjusts complexity and time pressure. |
| Field Procedure | ACE Interaction Text | Procedure default | Optional action-label override. |
| Field Procedure | Interaction Distance | `5` | Maximum use distance. |
| Access and Attempts | Who Can Operate | All players | Optional side restriction. |
| Access and Attempts | Required Item Classnames | Empty | Operator must carry every listed item. |
| Access and Attempts | Repeatable After Success | Disabled | Allows another successful run. |
| Access and Attempts | Allow Retry After Failure | Enabled | Allows another attempt after failure. |
| Access and Attempts | Maximum Attempts | `0` | Zero means unlimited. |
| Mission Integration | Success / Failure Variable | Empty | Optional public `missionNamespace` booleans. |
| Mission Integration | Server Code on Success / Failure | Empty | Runs once on the server with the result context. |
| World Label | Show, text, distance and height | Enabled / procedure name / `20` / `1` | Label presentation. |

Outcome code receives:

```sqf
_this params ["_equipment", "_operator", "_succeeded", "_result"];
```

## ZEN Modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Attach Field Procedure | A world object | Procedure, difficulty, access, attempts, mission variables and label settings. |
| Manage Field Procedure | A registered object | Changes its live availability or state. |

## Troubleshooting

- If no action appears, verify synchronisation, side access and required item classnames.
- If mission logic does not fire, check the exact success/failure variable or the server-code RPT error.
- If a solved procedure can be replayed unexpectedly, disable **Repeatable After Success**.
