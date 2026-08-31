# SOUND PLAYER

## Overview

Sound Player lets Zeus play mission sounds during an operation without relying on pre-placed triggers. Voice lines, effects, music and other recordings can be added to the mission through `CfgSounds` and selected when they are needed.

If Crow's Electronic Warfare is loaded, the framework also adds the mission sounds to its sound player. Sound Player is intended for individual cues and transmissions. Looping sounds tied to a location are handled by [Ambient Sound Areas](ambient-sound-areas.md).

## How to set up the component

Define named `CfgSounds` entries in the mission's `description.ext` and package the referenced OGG files with the mission.

```cpp
class CfgSounds {
    sounds[] = {};

    class JMF_Mission_Example {
        name = "Example Mission Sound";
        sound[] = {"sounds\example.ogg", 1, 1, 500};
        titles[] = {};
        jmfDuration = 5;
    };
};
```

`jmfDuration` is used by integrations that need to know the file length. It should match the audio where possible.

## 3DEN Module Settings

Sound Player has no dedicated 3DEN module. Its available sounds come from the mission's `CfgSounds` definitions.

## ZEN Modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Play Mission Sound | Ground or an object | Selects a mission sound, volume, pitch and audible distance. |

When Crow's Electronic Warfare provides its own sound player, the framework registers mission sounds there and hides the duplicate JMF playback module. Mission Control can also play available mission sounds from its **Support** page.

## Troubleshooting

- If the sound list is empty, confirm each `CfgSounds` entry has a non-empty `name` and valid `sound[]` path.
- If the selection appears but nothing plays, check the OGG file, mission path and volume value.
- If Crow's EW is loaded, look for the mission entries in its sound player rather than the JMF ZEN module.
