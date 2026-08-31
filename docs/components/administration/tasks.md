# Tasks

## Overview

Tasks lets mission-makers create and manage Arma 3 objectives without building a large chain of vanilla task modules. A task can have its own title, description, destination, type, owner and starting state, while still appearing through the normal Arma task interface.

Tasks can be revealed, assigned, completed, failed or cancelled through conditions, triggers and ZEN. Parent and child tasks can be used for more detailed objective structures, and ownership can limit a task to the correct side or group. Task state is kept on the server so it remains consistent for multiplayer and joining players.

## How to set up the component

Place one **[JMF] - Tasks > Task Settings** module and one **Task** module per planned objective.

## 3DEN Module Settings

### Task Settings

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Task Framework | Enabled | Master switch for 3DEN tasks, automatic conditions and ZEN tools. |
| Condition Check Interval | `1` | Seconds between server checks of success/failure expressions. |

### Task

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Task Identity | Task ID | Empty | Unique, case-sensitive script and parent reference. |
| Task Identity | Title | New Task | Player-facing title. |
| Task Identity | Description | Empty | Detailed diary instructions. |
| Task Identity | Marker Text | Title | Short destination-marker text. |
| Task Identity | Task Type | `default` | `CfgTaskTypes` icon such as `attack`, `defend`, `move`, `destroy` or `heal`. |
| Task Identity | Parent Task ID | Empty | Existing parent ID for a task hierarchy. |
| Assignment and State | Owner | All players | All players or one side. |
| Assignment and State | Initial State | Assigned | Hidden, Created or Assigned. |
| Assignment and State | Priority | `1` | Vanilla task ordering priority. |
| Assignment and State | Show Notifications | Enabled | Enables the task-framework notification. |
| Assignment and State | Use Module Position | Enabled | Uses the module position as destination/marker. |
| Automatic Resolution | Success Condition | `false` | Periodically evaluated server-side SQF. |
| Automatic Resolution | Failure Condition | `false` | Server expression; failure wins if both become true together. |
| Automatic Resolution | Completion Code | Empty | Runs once on success, failure or cancellation. |

Use **Hidden** when an objective should exist at mission start but remain invisible until Zeus reveals it.

Condition fields contain SQF expressions, for example:

```sqf
triggerActivated trigger_task_complete
```

Completion code can use the provided variables:

```sqf
if (_taskState isEqualTo "SUCCEEDED") then {
    missionNamespace setVariable ["objective_complete", true, true];
};
```

## ZEN Modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Create Task | Module position becomes destination | ID, title, marker, type, owner, initial state and notification. |
| Manage Task State | Empty ground | Selects an existing task and changes it to Hidden, Created, Assigned, Succeeded, Failed or Canceled. |

## Multiplayer

The server creates and updates tasks through the BIS task framework. Automatic conditions and completion code run only on the server. JIP clients receive current visibility and state through vanilla synchronization.

## Troubleshooting

- If `BIS_fnc_setTask` errors, check for an empty/duplicate ID or malformed owner/state value.
- If two notifications appear, use either the framework/BIS task notification path once; do not add a second trigger hint.
- If a child task is missing, verify the parent ID exists and is created first.
