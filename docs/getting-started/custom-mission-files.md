# Custom Mission Files

Several components can load definitions from small files in the mission folder. The file extension is `.hpp`, but most of these files contain SQF arrays rather than addon config classes.

Only create the files required by the mission:

| File | Component | Purpose |
| --- | --- | --- |
| `loadouts.hpp` | Arsenal | Restricted Arsenal lists and complete role loadouts. |
| `supplies.hpp` | Supply | Custom supply-crate definitions and contents. |
| `fortify.hpp` | Fortify | Construction catalogues, object classnames and costs. |
| `jtac.hpp` | JTAC | Fully custom fire-support definitions. Most missions can use Fire Mission modules instead. |
| `identities.hpp` | Identities | Optional custom or extended identity pools. Included through `description.ext`. |
| `sounds.hpp` | Sound Player and Ambient Sound Areas | Mission `CfgSounds` entries. Included through `description.ext`. |

The first four files are loaded directly by their component modules. Enter the mission-relative path in the appropriate **Mission Definition File** setting. For example, a file inside `config\supplies.hpp` uses this path:

```text
config\supplies.hpp
```

`identities.hpp` and `sounds.hpp` contain description-config classes, so include them from `description.ext`:

```cpp
#include "identities.hpp"
#include "sounds.hpp"
```

Do not include the same file twice. If the mission already defines `CfgSounds` or `CfgJMFIdentityPools`, add the new classes to the existing block instead.

Each component guide contains a working example and a description of every field.
