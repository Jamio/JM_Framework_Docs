# Architecture

JM Framework is split into small CBA-style addons under `addons/`. Each component owns its configuration, prepared functions, initialization handlers and UI resources.

```mermaid
flowchart LR
    Eden[Eden modules] --> Server[Server-owned state]
    Server --> Registry[Replicated registries]
    Registry --> Client[Client actions and UI]
    Zeus[ZEN modules] --> Request[Server request events]
    Request --> Server
    Lifecycle[Player Lifecycle] --> Client
    Lifecycle --> Server
```

## Common conventions

- `XEH_PREP.hpp` prepares component functions.
- `XEH_preInit.sqf` establishes defaults and event handlers.
- `XEH_postInit.sqf` starts runtime behaviour after addons are initialized.
- Eden module functions read attributes and publish authoritative settings.
- CBA events cross machine boundaries; direct `remoteExec` is avoided.
- `jmf_core_componentStates` provides a shared status registry.

Components should remain dormant when their settings module or enable toggle is absent.
