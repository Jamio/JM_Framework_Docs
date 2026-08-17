# Sound Player

Sound Player exposes mission-defined `CfgSounds` entries to Zeus, avoiding one trigger per audio cue. It also integrates with the supported Crow's Electronic Warfare sound player when that mod is loaded.

## 3DEN modules

Sound Player has no 3DEN module. Add audio classes to the mission's `description.ext` and package the referenced files with the mission.

```cpp
class CfgSounds {
    sounds[] = {};

    class JMF_Mission_Example {
        name = "Example Mission Sound";
        sound[] = {"sounds\example.ogg", 1, 1, 500};
        titles[] = {};
        jmfDuration = 5.0;
    };
};
```

`jmfDuration` is optional for normal playback but should match the audio length when an external player schedules attached or repeating sounds.

## Zeus modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Play Mission Sound | Ground or an object | Sound class, volume, pitch and audible distance. Plays the selected mission sound for the intended clients. |

## Multiplayer

The selected class must exist and point to a valid file on every client. The framework sends the playback request; audio itself is read from each client's mission PBO.

## Troubleshooting

- If the list is empty, confirm the classes are inside `CfgSounds` and have non-empty `name` values.
- If selection works but audio is silent, validate the path, OGG format and volume value.
- If external scheduling drifts, correct `jmfDuration`.
