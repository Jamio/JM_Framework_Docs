# IDENTITIES

## Overview

Identities generates a name and birth information for each player character. Mission-makers choose an identity pool that fits the setting, such as a modern Western, Chinese, Middle Eastern, Second World War or international force.

JM Framework includes several reusable pools, and missions can add their own names through `description.ext`. The generated identity can be used by systems such as Death Camera, but it does not change a player's role, group or equipment.

## How to set up the component

Place **[JMF] - Core > Optional Systems**, enable **Character Identities**, and choose the appropriate built-in identity pool or side-specific overrides.

## 3DEN Module Settings

### Optional Systems — Character Identities

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Character Identities | Disabled | Generates a new character identity for each player life. |
| Default Identity Pool | `WW2_USA` | Base `CfgJMFIdentityPools` class. |
| Side Pool Overrides | Empty | Optional pool ID for BLUFOR, OPFOR, Independent and Civilian. |
| Earliest Birth Year | `1910` | Lower end of generated birth years. |
| Latest Birth Year | `1925` | Upper end of generated birth years. |
| Mission / Death Year | `1944` | Year used by identity presentation. |

## Custom `identities.hpp`

Identity pools are description-config classes. Create `identities.hpp`, then include it from the mission's `description.ext`:

```cpp
#include "identities.hpp"
```

A complete custom pool looks like this:

```cpp
class CfgJMFIdentityPools {
    class MY_CUSTOM_POOL {
        firstNames[] = {"Alex", "Jamie", "Morgan", "Sam"};
        lastNames[] = {"Baker", "Cooper", "Morgan", "Taylor"};
        noMiddleNames[] = {""};
        initials[] = {"A.", "J.", "M.", "S."};
        middleNames[] = {"James", "Lee", "Morgan"};
        nicknames[] = {"'Doc'", "'Red'", "'Sparks'"};
        rankTier1[] = {"Pte.", "Cpl."};
        rankTier2[] = {"Sgt."};
        rankTier3[] = {"Lt."};
    };
};
```

Enter `MY_CUSTOM_POOL` in the Optional Systems module's custom/default pool field. Tier 1 is used for ordinary roles, tier 2 for Squad Leaders and tier 3 for Platoon Leaders.

Mission classes can also extend a built-in pool without copying it in full:

```cpp
class CfgJMFIdentityPools {
    class MODERN_GENERIC_WEST {
        appendFirstNames[] = {"Ashley", "Cameron"};
        appendLastNames[] = {"Hughes", "Palmer"};
        appendNicknames[] = {"'Boss'", "'Lucky'"};
    };
};
```

Use the normal property name, such as `firstNames[]`, to replace that part of a pool. Prefix it with `append`, such as `appendFirstNames[]`, to add entries instead. The same replacement and append forms are available for all nine arrays shown in the complete example.

## ZEN Modules

Identities has no dedicated ZEN module. It is configured as a mission-level character system.

## Troubleshooting

- If identity text is missing, enable Character Identities and verify the selected pool ID exists.
- If opposing factions use the wrong names, configure the appropriate side override.
- A new identity is generated after respawn by design; the previous life is not restored as the same character.
