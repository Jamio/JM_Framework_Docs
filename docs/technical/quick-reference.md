<div class="jmf-page-hero" style="--jmf-page-image: url('../assets/images/dev-quick-reference.jpg');" markdown>
<span class="jmf-eyebrow">FRAMEWORK DEVELOPMENT</span>
# Returning to the Project
A compact reminder of the structure, conventions and development loop.
</div>

## Project facts

| Item | Current convention |
|---|---|
| Build tool | HEMTT |
| Addon prefix | \`z\\jmf\\addons\\<component>\` |
| Tag | \`jmf\` |
| Lifecycle | CBA XEH preInit / postInit |
| Function preparation | \`PREP\` through \`XEH_PREP.hpp\` |
| Multiplayer | Server-authoritative state; CBA events for requests and broadcasts |
| Editor integration | Eden configuration; ZEN live controls where useful |

## Usual development loop

<div class="jmf-status-strip" markdown>
:material-file-code: **Edit** → :material-hammer-wrench: **Build** → :material-gamepad-variant: **Test** → :material-text-box-search: **Read RPT** → :material-check-circle: **Verify MP**
</div>

1. Start from the component template.
2. Register functions and lifecycle files.
3. Keep public requests separate from server-side mutation.
4. Test locality, respawn, JIP and cleanup.
5. Update the Mission Maker guide and component flow map.

## Before changing an old component

- Read its \`config.cpp\`, XEH files and prepared functions.
- Find the authoritative state and every CBA event.
- Check Eden attributes and ZEN registrations.
- Search for compatibility aliases before renaming anything.
- Confirm whether the existing behaviour is relied upon by missions.

[:material-graph-outline: Open the component flow maps](component-flows.md)
