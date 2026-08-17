# Private Messages

Private Messages adds a compact panel to the right side of the Escape menu for sending text to an individual player, active Zeus operators or logged-in server administrators.

## Enable the component

Configure it in **[JMF] - Core > Optional Systems**.

## 3DEN settings

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Private Messages | Enabled | Adds the Escape-menu panel and server routing. |
| Private Message Sound | Enabled | Plays a short notification when a message is received. |

Recipient choices are built from current multiplayer state. A category with no valid recipients is unavailable, and the sender receives a clear failure response rather than broadcasting the message.

## Zeus modules

Private Messages has no ZEN module. Zeus operators receive messages because the server resolves current curator assignments.

## Multiplayer

The server validates the sender and resolves the chosen recipient at send time. Messages are delivered only to the intended clients and are not stored as persistent chat history.

## Troubleshooting

- If Zeus is not found, ensure the player is assigned to an active curator logic, not merely remote-controlling a unit.
- If an administrator is not found, they must be logged in as server admin.
- If the panel appears but Send is cut off, remove legacy mission UI definitions and test the current addon dialog.
