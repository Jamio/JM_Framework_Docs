# Component Page Template

Component guides are the detailed mission-maker reference for the framework. Write from implemented code, not the planning sheet, and clearly label experimental or planned behaviour.

## Formatting rules

- Put function calls, arrays, configuration classes and complete examples in fenced code blocks with a language identifier such as `sqf` or `cpp`.
- Use inline code only for short identifiers such as `JMF_supplyDefinitions`, `supplies.hpp` or a classname.
- Use **bold** for module names, control names and short UI labels.
- Use **coloured emphasis**{ .jmf-emphasis } sparingly for warnings, required steps and choices that materially change mission behaviour.
- Never rely on colour alone to convey meaning.

```sqf
[west, "ADD", 5] call jmf_tickets_fnc_addTickets;
```

```cpp
class MyMissionCrate {
    id = "mission_ammo";
    displayName = "Mission Ammunition";
};
```

## Required guide structure

```markdown
# Component Name

One clear paragraph explaining the component's purpose, player experience and relationship to other systems.

## Enable the component

Required settings module or Core/Optional Systems toggle.

## 3DEN modules

### Settings Module

What the module controls and whether exactly one is required.

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Component | Enabled | Master switch. |

### Object or Controller Module

Placement, synchronization and activation instructions.

| Attribute | Default | What it does |
| --- | --- | --- |
| Display Name | Example | Player-facing name. |

## Setup walkthrough

Ordered setup steps, synchronization and important attributes.

## Mission definitions

File path, schema and a minimal working example.

## Player experience

Actions, dialogs, restrictions and failure feedback.

## Zeus modules

List every related ZEN module, its target and its dialog fields.

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Manage Component | Empty ground | Changes live server state. |

## Multiplayer

Authority, locality, respawn and JIP behaviour.

## Troubleshooting

Common validator codes, mistakes and diagnostic steps.

## Public API

Only supported functions/events with exact signatures.
```

Omit a section only when it genuinely does not apply. If a component has no 3DEN or ZEN modules, say so explicitly instead of silently leaving the heading out.
