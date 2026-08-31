# DEATH CAMERA

## Overview

Death Camera shows a short cinematic view after a player dies. It can display the character details created by Identities, a mission quotation or a random choice between the two before normal respawn handling continues.

Mission-makers can configure the display style, duration and available quotations. Death Camera only controls the presentation; Tickets and Permadeath still decide whether the player can return to the mission.

## How to set up the component

Place **[JMF] - Core > Optional Systems** and choose a non-disabled **Death Presentation**. Enable [Identities](identities.md) when using a character-identity presentation.

## 3DEN Module Settings

### Optional Systems — Death Camera

| Attribute | Default | What it does |
| --- | --- | --- |
| Death Presentation | Disabled | Uses Character Identity, Quotation, Random Identity / Quotation, or no presentation. |
| Quotation Pool | Mixed | Uses Serious, Fun or both built-in quotation pools. |
| Camera Rise Duration | `8` | Duration of the upward camera movement. |
| Camera Start Delay | `2` | Lets the ACE and engine death transition finish first. |
| Camera Height | `10` | Final height above the body. |

Mission quotations can be appended in `description.ext`:

```cpp
class CfgJMFDeathCameraQuotePools {
    class Serious {
        quotes[] = {"A mission-specific serious quotation."};
    };
    class Fun {
        quotes[] = {"A mission-specific fun quotation."};
    };
};
```

Mixed is assembled automatically from Serious and Fun.

## ZEN Modules

Death Camera has no dedicated ZEN module. Its presentation is selected for the whole mission.

## Troubleshooting

- If identity presentation is blank, enable the separate Identities component and verify its pool.
- If mission quotations do not appear, check the exact `CfgJMFDeathCameraQuotePools`, `Serious` and `Fun` class names.
- If the camera misses the body, confirm another mission script does not delete or replace the corpse before the configured delay.
