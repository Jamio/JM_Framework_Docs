# AMBIENT SOUND AREAS

## Overview

Ambient Sound Areas give locations their own looping background audio. The sound fades in when a player enters the area and fades out when they leave. This works well for caves, distant fighting, machinery, bad weather, wildlife and similar environmental soundscapes.

Each area can use a framework sound or a mission sound from `CfgSounds`. Its size, volume and fade behaviour can be configured. This is separate from the [Sound Player](sound-player.md), which lets Zeus play individual sounds during a mission.

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
