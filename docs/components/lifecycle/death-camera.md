# DEATH CAMERA

## Overview

Death Camera gives a player's death a brief, controlled presentation before the normal respawn or permadeath flow continues. Rather than cutting immediately to a respawn screen, it can frame the fallen character and display either their generated identity, a mission quotation or a random choice between the available styles. The feature is intended to add atmosphere and weight without turning death into a long unskippable cutscene.

Mission-makers control whether the camera is used, how long it remains, which text mode is available and which quotation pool should be drawn from. When Identities is active, its generated character details can be reused; Death Camera does not generate or persist identity data itself. It also does not decide whether the player may respawn—that authority remains with Tickets, Permadeath and the shared Player Lifecycle.

The presentation runs on the affected client while the lifecycle pipeline maintains the correct ordering around unconsciousness, death, spectator and respawn. It can therefore be enabled or disabled independently without installing a competing killed handler or changing the mission's reinforcement rules.

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
