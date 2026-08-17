# Troubleshooting

## An ACE action is missing

Confirm that the component is enabled, the correct object is synchronized, the player meets role/side restrictions and the interaction point is within range and line of sight. Reconnect once to test the JIP reconstruction path.

## A definition does not appear

Check the mission-relative file path, array syntax and classnames. Review the server RPT for parser and validator messages.

## Eden works but dedicated multiplayer does not

Identify where the action should run:

- UI, cameras and local ACE actions belong on the client;
- spawning, shared registries and authoritative decisions belong on the server;
- object changes may need execution where the object is local.

Capture the server RPT and one affected client RPT. Include the framework build, mission version, mod list, reproduction steps and whether the client joined late.

## HEMTT passes but the mission errors

HEMTT validates addon config and SQF syntax. It cannot fully validate mission-authored definition files, third-party classnames, locality or runtime object synchronization.
