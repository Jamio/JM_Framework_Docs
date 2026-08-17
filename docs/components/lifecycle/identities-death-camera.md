# Identities and Death Camera

Identities generates a new character for each player life, while Death Camera gives that character a short cinematic ending. The presentation may show the generated identity, a quotation, or randomly choose between them.

## Enable the components

Place **[JMF] - Core > Optional Systems**. Enable **Character Identities** when using identity presentation, then choose a non-disabled **Death Presentation**.

## 3DEN settings

These systems are configured in the **Optional Systems** module; legacy standalone Identity and Death Camera modules are hidden and should not be used.

### Character Identities

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Character Identities | Disabled | Assigns a newly generated identity on each life. |
| Default Identity Pool | `WW2_USA` | Base name/rank pool. |
| Side Pool Overrides | Empty | Optional `CfgJMFIdentityPools` class for each side. |
| Earliest Birth Year | `1910` | Lower end of generated birth years. |
| Latest Birth Year | `1925` | Upper end of generated birth years. |
| Mission / Death Year | `1944` | Year displayed with the identity. |

Mission `CfgJMFIdentityPools` classes can extend or replace the built-in names and ranks. Side overrides are useful when opposing factions need different naming conventions.

### Death Camera

| Attribute | Default | What it does |
| --- | --- | --- |
| Death Presentation | Disabled | Disabled, Character Identity, Quotation, or Random Identity / Quotation. |
| Quotation Pool | Mixed | Uses Serious, Fun or both pools. |
| Camera Rise Duration | `8` | Duration of the upward camera movement. |
| Camera Start Delay | `2` | Lets the ACE/engine death transition finish first. |
| Camera Height | `10` | Final height above the body. |

The camera targets the dead player object and rises vertically from its position.

## Mission-specific quotations

Add matching pool classes to `description.ext`. Mission quotes are appended to the framework defaults:

```cpp
class CfgJMFDeathCameraQuotePools {
    class Serious {
        quotes[] = {
            "A mission-specific serious quotation.",
            "Another serious quotation."
        };
    };

    class Fun {
        quotes[] = {
            "A mission-specific fun quotation."
        };
    };
};
```

**Mixed is assembled automatically from Serious and Fun; do not define a separate Mixed class.**{ .jmf-emphasis }

## Zeus modules

Identities and Death Camera have no ZEN modules. They are deliberately mission-level presentation choices.

## Multiplayer and respawn

Identity assignment runs for the owning client and is synchronized as character metadata. Respawn generates a new identity rather than restoring the old character. The Death Camera runs locally against the dead unit before normal respawn gating continues.

## Troubleshooting

- If identity text is missing, enable Character Identities and choose an identity-capable presentation.
- If mission quotes do not appear, check the exact `CfgJMFDeathCameraQuotePools`, `Serious` and `Fun` class names.
- If the camera moves but misses the body, confirm no mission script deletes or replaces the corpse before the configured delay.
