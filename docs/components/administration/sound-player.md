# SOUND PLAYER

## Overview

Sound Player exposes mission-defined `CfgSounds` entries to Zeus and creates local ambient sound areas. It removes the need to build a separate trigger for every cue and lets an area play a seamless, non-directional loop only for players currently inside it.

If Crow's Electronic Warfare is loaded, mission sounds are added to its player instead of duplicating the normal playback module.

## How to set up the component

For individual Zeus cues, define named `CfgSounds` classes in the mission's `description.ext`. For ambience, place an **[JMF] - Tools > Ambient Sound Area**, resize its 3DEN area and select a framework or mission sound class.

The framework includes `JMF_Ambience_DistantShooting` as a ready-made test and battlefield ambience loop.

```cpp
class CfgSounds {
    sounds[] = {};

    class JMF_Mission_Example {
        name = "Example Mission Sound";
        sound[] = {"sounds\example.ogg", 1, 1, 500};
        titles[] = {};
        jmfDuration = 30;
        jmfAmbient = 1;
    };
};
```

`jmfDuration` should match the file length for a clean ambient loop. `jmfAmbient = 1` marks the sound as suitable for area playback.

## 3DEN Module Settings

### Ambient Sound Area

| Attribute | Default | What it does |
| --- | --- | --- |
| Area Name | Ambient Sound Area | Label used by Zeus management tools. |
| CfgSounds Classname | `JMF_Ambience_DistantShooting` | Framework preset or mission-defined sound class. |
| Start Enabled | Enabled | Starts the area active; synchronised triggers are also respected. |
| Volume | `1` | Local playback volume multiplier. |
| Pitch | `1` | Local playback pitch multiplier. |

Use the module's standard 3DEN area attributes to set its shape, dimensions, rotation and height.

## ZEN Modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Play Mission Sound | Ground or an object | Sound, volume, pitch and audible distance. Hidden when Crow's EW supplies the sound player. |
| Create Ambient Sound Area | Ground | Sound, shape, dimensions, direction, height, volume, pitch and initial state. |
| Manage Ambient Sound Area | Within 100 metres of an area | Enables, disables or permanently removes the nearest area. |

Mission Control can also play mission sounds from its **Support** page.

## Troubleshooting

- If a sound list is empty, check that each `CfgSounds` class has a non-empty `name` and a valid file path.
- If an ambient loop restarts too early or overlaps itself, correct its `jmfDuration` value.
- Ambient areas are intentionally local and non-directional. Use **Play Mission Sound** for positional audio.
- Overlapping ambient areas may play together; avoid accidental overlap unless that is the intended soundscape.
