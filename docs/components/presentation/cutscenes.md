# CUTSCENES

The cutscenes component handles the setup and execution of cinematic sequences that are created in advance by the mission-maker.

Cutscenes are divided by into three types, 1) Intro - the cutscene that will player on mission start (or when palyers join, depending on settings), 2) Mid-mission - a cutscene that can be triggered at any point during the mission, 3) Outro - the cutscene that plays at the end of the mission, and can automatically lead directly into the debrief. 

## How to set up the component

Place one **[JMF] - Cutscenes > Cutscene Settings** module. For each cutscene, place one **Cutscene Sequence Controller** and a **Cutscene Camera Shot** module for every "shot".

## 3DEN Module Settings

### Cutscene Settings

*This module holds the main global settings for cutscenes in the mission.*

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Cutscenes | Enabled | Master switch for sequence playback. |
| Default Fade Time | `1.5` | Shared fallback fade duration. |
| Letterbox Height | `0.10` | Fraction of safe-zone height occupied by each cinematic bar. |

### Cutscene Sequence Controller

*This module controls the settings for individual sequences of shots.*

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Sequence | Sequence ID | `intro` | Tag shared with every shot in this sequence. |
| Sequence | Sequence Type | Intro | Automatic intro, triggered/mid-mission, or outro. |
| Playback | CfgMusic Classname | Empty | Optional mission/addon music class. |
| Playback | Outro Entry Fade to Black | `3` | Smooth gameplay-to-black transition for outros only. |
| Playback | Black Hold Between Views | `0.35` | Brief hold while cameras are created or removed. |
| Playback | Play for JIP Clients | Disabled | Allows a JIP client to receive the sequence. Usually leave off for intros. |
| Playback | Allow Spacebar Skip | Enabled | Lets each viewer skip when appropriate. |
| Playback | Use Letterbox Bars | Enabled | Shows the configured cinematic bars. |
| Playback | Protect Player During Sequence | Enabled | Protects players while the sequence owns their view. |
| Outro and Debrief | Open Debrief After Sequence | Disabled | Hands the completed outro into the debrief flow. |
| Outro and Debrief | Successful Mission | Enabled | Result used by the debrief hand-off. |
| Outro and Debrief | Debrief Summary Override | Empty | Optional result text for this ending. |

### Cutscene Camera Shot

*This module is essentially the "camera" position and controls for the specific camera.*

Place the module where the camera begins. By default, the rotation direction of the module will be the direction of the shot.

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| Shot Identity | Sequence ID | `intro` | Must exactly match the controller. |
| Shot Identity | Shot Order | `10` | Playback order. Use `10`, `20`, `30` to leave insertion gaps. |
| Camera | Duration | `8` | Shot duration in seconds. |
| Camera | Start FOV / End FOV | `0.7` / `0.7` | Creates static framing or a zoom over the shot. |
| Camera | Target Offset `[x,y,z]` | `[0,0,0]` | Aim offset relative to the synchronized target. |
| Camera | Attach Camera to Target | Disabled | Moves the camera with a synchronized moving target. |
| Camera | Attachment Offset `[x,y,z]` | `[0,-6,2]` | Camera position relative to an attached target. |
| On-screen Text | Text | Empty | Structured text displayed during this shot. |
| On-screen Text | Colour, size and position | White / `1.4` / Lower third | Presentation of shot text. |
| On-screen Text | Delay, fade-in, hold and fade-out | `0.5`, `0.5`, `6`, `0.5` | Text timing within the shot. |
| Transition | Fade In From Black / Fade Out To Black | `1.5` / `1.5` | Shot transitions. |
| Shot Code | Local Code - Start / End | Empty | Runs on each viewing client. |
| Shot Code | Server Code - Start / End | Empty | Runs once on the server, not once per viewer. |

### Cutscene Camera End Point

Synchronise this optional helper to an existing Camera Shot. The camera moves from the shot module to the endpoint during the shot. It is **not** a target or controller.

## Targeting and moving cameras

- Synchronize a target object to a Camera Shot to keep the camera focused on it.
- Synchronize an End Point to pan between two world positions.
- Enable **Attach Camera to Target** when the camera itself must travel with a vehicle or character.
- Hidden helper objects are suitable static targets when the camera should focus on empty terrain.

Per-shot code is ordinary SQF. For example, server-start code can set an objective variable:

```sqf
missionNamespace setVariable ["objective_camera_seen", true, true];
```

## ZEN Modules

Only one module currently exists for the cutscenes. it is a dialog to control and manually execute cutscenes.

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Play Cutscene Sequence | Empty ground | Selects a registered Sequence ID and starts it for the intended viewers. |

## Troubleshooting

This is a bit of a nebulous system, but it does work. If you have any issues, check that individual cameras, sequence IDs and all that are properly set up and not duplicated. Good luck.

- If no shots play, compare the controller and shot **Sequence ID** values exactly.
- If shots play out of order, give each one a unique numeric **Shot Order**.
- If the camera faces the wrong place, synchronise the intended target or rotate the Camera Shot module.
- If an intro unexpectedly fades gameplay first, confirm the controller type is **Intro**, not **Outro**.
