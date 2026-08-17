# Installation

## Players and servers

Load the released JM Framework mod alongside CBA, ACE and Zeus Enhanced. The same framework build should be present on the server and every connecting client.

## Mission makers

After loading the mod, open Eden and find module categories prefixed with `[JMF]`. Begin with **Core Settings** and add component settings only when the mission uses that system.

## Development builds

The source repository uses HEMTT:

```text
hemtt check
hemtt dev
hemtt launch
```

`hemtt check` validates configs and compiles SQF. `hemtt dev` creates a development build, while `hemtt launch` starts the configured test mission.
