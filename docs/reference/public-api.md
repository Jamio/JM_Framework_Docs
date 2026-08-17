# Public API

JM Framework is currently pre-v1. Function and event names may still change while component boundaries are consolidated.

Only calls explicitly listed on this page should eventually be treated as supported public integration points. Internal `jmf_<component>_fnc_*` functions may assume locality, prepared state or private data shapes and should not be called from mission code merely because they are visible.

## Currently supported utility

Run the Mission Validator again on the server:

```sqf
[true] call jmf_mission_validator_fnc_run;
```

The v1 documentation pass will add supported notification, task, cutscene and component-control calls here after their signatures are frozen.
