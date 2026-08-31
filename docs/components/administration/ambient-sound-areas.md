# AMBIENT SOUND AREAS

## Overview

Ambient Sound Areas allow a mission-maker to give particular locations their own continuous soundscape. When a player enters a configured area, its ambience fades in locally as a non-directional track; when they leave, it fades away again. This is intended for environmental layers such as cave interiors, distant fighting, industrial machinery, bad weather or wildlife, where a conventional 3D sound source would feel too localised and repeated triggers would be awkward to maintain.

Each area can use a framework-provided sound or a mission-defined entry from `CfgSounds`, with control over its size, volume and transition behaviour. Because playback is handled separately for each player, the system can follow movement through overlapping locations without broadcasting unnecessary audio across the network. Ambient Sound Areas are therefore best treated as part of the environment rather than as an event or announcement.

This component is deliberately separate from the [Sound Player](sound-player.md). Sound Player exposes individual mission sounds for dynamic playback by Zeus, while Ambient Sound Areas maintain a looping bed of audio based on where each player is standing.

## How to set up the component

Place **[JMF] - Tools > Ambient Sound Area**, resize its standard 3DEN area and enter a framework or mission `CfgSounds` classname. The framework includes `JMF_Ambience_DistantShooting` as a ready-made ambience track.

Mission-defined ambient sounds should provide their true duration and mark themselves as ambient:

```cpp
class CfgSounds {
    sounds[] = {};

    class My_Cave_Ambience {
        name = "Cave Ambience";
        sound[] = {"sounds\cave_ambience.ogg", 1, 1, 100};
        titles[] = {};
        jmfDuration = 60;
        jmfAmbient = 1;
    };
};
```

## 3DEN Module Settings

### Ambient Sound Area

| Attribute | Default | What it does |
| --- | --- | --- |
| Area Name | Ambient Sound Area | Mission-maker label used by the management tool. |
| CfgSounds Classname | `JMF_Ambience_DistantShooting` | Framework preset or mission-defined ambience class. |
| Start Enabled | Enabled | Starts the area active and also respects synchronised triggers. |
| Volume | `1` | Local playback volume multiplier. |
| Pitch | `1` | Local playback pitch multiplier. |

Set shape, dimensions, rotation and height through the module's normal 3DEN area controls.

## ZEN Modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Create Ambient Sound Area | Ground | Sound, shape, dimensions, direction, height, volume, pitch and initial state. |
| Manage Ambient Sound Area | Within 100 metres of an area | Enables, disables or permanently removes the nearest area. |

## Troubleshooting

- If a loop restarts early or overlaps itself, correct its `jmfDuration` value.
- Ambient sound is intentionally local and non-directional; use Sound Player for a positional one-shot cue.
- Overlapping areas may play together. Separate them unless a layered soundscape is intentional.
- If a trigger-controlled area never starts, confirm the trigger is synchronised to the area module.
