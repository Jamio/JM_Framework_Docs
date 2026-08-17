# Zeus Guide

JM Framework registers ZEN modules under `[JMF]` categories. Component-specific controls are documented on each component page.

## Operating principles

- Configure long-lived defaults in Eden.
- Use Zeus to change state or create content during the mission.
- Prefer framework modules over direct debug-console calls; server handlers validate state and publish changes.
- Newly created access objects should be tested from a normal player client.
- Persistent toggles and registries are reconstructed for JIP clients; one-shot visual effects and already-running cutscenes generally are not.

## Common live controls

Tickets, Permadeath, Rally Points, Redeployment, Supply, Arsenal, Garage, Fortify, Tasks, JTAC, CBRN and Roles expose dedicated runtime tools. Zeus Tools supplies cinematic, environmental and utility effects.
