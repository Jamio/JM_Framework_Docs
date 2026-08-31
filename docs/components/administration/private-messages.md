# Private Messages

## Overview

Private Messages adds a small panel to the Escape menu. Players can send a message to one player, the active Zeus operators or logged-in server administrators without using global chat.

It is useful for reporting technical problems or asking an out-of-character question without interrupting the mission. The feature can be enabled or disabled through Optional Systems and is not intended to replace in-character radio communication.

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
