# Permadeath

Permadeath decides whether a dead player may respawn, must wait for release, or is removed from normal play. It integrates with Tickets and excludes Zeus players when configured.

The server owns the waiting list and death decisions. Clients remain behind the respawn gate until the authoritative response arrives.

Zeus tools can inspect waiting players, release individuals or everyone, change the enabled state and apply deployment behaviour. Dedicated-server testing should include disconnecting and reconnecting while waiting.
