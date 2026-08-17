# Configuration Files

Most settings live in Eden modules. Components with large catalogues also read mission-relative SQF/HPP definition files.

| Default file | Component | Purpose |
| --- | --- | --- |
| `loadouts.hpp` | Arsenal | Restricted item pools, role loadouts, side rules and limits |
| `supplies.hpp` | Supply | Crate class, name, description and contents |
| `fortify.hpp` | Fortify | Build catalogues and object costs |
| `jtac.hpp` | JTAC | Fire-support presets and custom ammunition behaviour |
| `sounds.hpp` | Sound Player | Template for mission `CfgSounds` entries |

Paths are relative to the mission root. Classnames and array shapes are validated where possible; malformed mission code can still prevent a definition file from compiling.

!!! tip
    Begin with the templates included in the framework repository, then keep mission-specific definitions beside `mission.sqm` under source control.
