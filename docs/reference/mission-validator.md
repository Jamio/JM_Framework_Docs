# Mission Validator

The Mission Validator runs automatically on the server shortly after initialization whenever JM Framework modules are present.

It checks:

- missing or duplicate settings modules;
- child modules without their required settings module;
- missing synchronized objects;
- empty Arsenal, Supply, Fortify or JTAC definitions;
- Garage access objects and spawn-point families;
- invalid CBRN equipment classnames;
- Forestry tool classnames;
- duplicate/missing Task IDs and parents;
- orphaned or incomplete Cutscene sequences.

Issues are written to the server RPT and stored in `jmf_mission_validator_lastReport`.

## Manual rerun

Run on the server:

```sqf
[true] call jmf_mission_validator_fnc_run;
```

Disabled systems are ignored where their parked child modules are intentionally inactive.
