# Minigames and Field Procedures

Minigames provides multiplayer table games and object-based field procedures derived from Waldo's mission systems. The procedures intentionally retain their original visual identity while adding framework access, attempts and mission-integration controls.

## Enable the component

Place **Table Games** for multiplayer game tables or **Field Procedure** for an equipment challenge. These modules live under the framework's Core module family to avoid another 3DEN category.

## 3DEN modules

### Table Games

Synchronize the module to one or more table objects. Players can sit, vote for a game and use the multiplayer table-game interface. It has no configurable gameplay attributes.

### Field Procedure

Synchronize the module to the equipment or prop players operate.

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Field Procedure | Procedure Type | Secure Control Sequence | Wire Cutting, Trigger Matrix, Keypad, Lock Picking, Circuit, Repair, Radio Tuning, Pressure, Sequence or Command Input. |
| Field Procedure | Difficulty | Standard | Adjusts complexity and time pressure. |
| Field Procedure | ACE Interaction Text | Procedure default | Optional action-label override. |
| Field Procedure | Interaction Distance | `5` | Maximum use distance. |
| Access and Attempts | Who Can Operate | All players | Optional side restriction. |
| Access and Attempts | Required Item Classnames | Empty | Operator must carry every listed item. |
| Access and Attempts | Repeatable After Success | Disabled | Allows another successful run. |
| Access and Attempts | Allow Retry After Failure | Enabled | Allows another attempt after failure. |
| Access and Attempts | Maximum Attempts | `0` | Zero means unlimited. |
| Mission Integration | Success Variable / Failure Variable | Empty | Optional public `missionNamespace` booleans. |
| Mission Integration | Server Code on Success / Failure | Empty | Runs once on the server with result context. |
| World Label | Show, text, distance and height | Enabled / procedure name / `20` / `1` | Label presentation. |

Outcome code receives:

```sqf
_this params ["_equipment", "_operator", "_succeeded", "_result"];
```

## Zeus modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Attach Field Procedure | A world object | Procedure, difficulty, action label, repeat/retry/attempts, mission variables and label. |
| Manage Field Procedure | A registered object | Changes its live state or availability. |
| Enable Table Games | A table object | Registers the table for the multiplayer game interface. |

## Multiplayer

The interactive UI runs on the participating client; the server owns attempts, success/failure and mission callbacks. This prevents two clients from resolving the same non-repeatable procedure independently.

## Troubleshooting

- If no action appears, synchronize the module, verify side access and carry every required item.
- If mission logic does not fire, check the exact success/failure variable name or the server-code RPT error.
- If a solved procedure can be replayed unexpectedly, disable **Repeatable After Success**.
