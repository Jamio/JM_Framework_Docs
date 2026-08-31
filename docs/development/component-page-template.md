# Component Page Template

Every component guide should be a concise mission-maker reference drawn from the implemented framework. It should explain what the component is for, how to configure it and how to correct common setup mistakes.

## Standard structure

1. **Overview** — purpose, intention and player experience.
2. **How to set up the component** — required modules, toggles and synchronisation.
3. **3DEN Module Settings** — every module and its useful attributes.
4. **ZEN Modules** — live tools, placement and dialog options.
5. **Troubleshooting** — common mistakes and direct fixes.

Add another section only when the component genuinely needs it, such as a configuration-file example. Do not add background explanation merely to make the page longer.

## Formatting

- Put module names and dialog labels in **bold**.
- Put classnames, file names and short identifiers in `inline code`.
- Use fenced code blocks for functions, configuration classes and complete examples.
- Use **coloured emphasis**{ .jmf-emphasis } sparingly for required steps and warnings.
- Use the names and defaults currently shown in 3DEN or ZEN.

```sqf
[west, "ADD", 5] call jmf_tickets_fnc_addTickets;
```

```cpp
class MyMissionCrate {
    id = "mission_ammo";
    displayName = "Mission Ammunition";
};
```
