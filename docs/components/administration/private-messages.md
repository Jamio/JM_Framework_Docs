# Private Messages

## Overview

Private Messages adds a discreet communication panel to the Escape menu for messages that should not be sent through global chat. A player can address an individual participant, the active Zeus operators or logged-in server administrators, making it suitable for reporting technical problems, asking an out-of-character question or passing information to mission staff without interrupting everyone else.

The component is intentionally small and unobtrusive. It uses the current multiplayer player list, routes the message only to the selected recipients and clearly identifies the sender at the receiving end. It is not intended to replace in-character radio systems, nor does it attempt to become a general chat client; its role is to provide a reliable private route to the people administering the mission.

Mission-makers can decide whether the panel is available through the shared optional settings. The interface is client-facing, while recipient resolution is handled carefully so that active curators and administrators remain reachable even when their playable unit or role changes.

## How to set up the component

Configure it in **[JMF] - Core > Optional Systems**.

## 3DEN Module Settings

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Private Messages | Enabled | Adds the Escape-menu panel and server routing. |
| Private Message Sound | Enabled | Plays a short notification when a message is received. |

Recipient choices are built from current multiplayer state. A category with no valid recipients is unavailable, and the sender receives a clear failure response rather than broadcasting the message.

## ZEN Modules

Private Messages has no ZEN module. Zeus operators receive messages because the server resolves current curator assignments.

## Multiplayer

The server validates the sender and resolves the chosen recipient at send time. Messages are delivered only to the intended clients and are not stored as persistent chat history.

## Troubleshooting

- If Zeus is not found, ensure the player is assigned to an active curator logic, not merely remote-controlling a unit.
- If an administrator is not found, they must be logged in as server admin.
- If the panel appears but Send is cut off, remove legacy mission UI definitions and test the current addon dialog.
