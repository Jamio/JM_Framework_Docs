# Locality and JIP

## Authority model

The server owns shared resources and decisions: tickets, task state, registries, spawned crates/vehicles, CBRN exposure, role limits and statistics. Clients own UI, cameras, Draw3D overlays and interactions on their local player.

Requests initiated by a player or Zeus are sent to server event handlers. The server validates the current object/state before applying the change. Object-local operations are targeted to the machine that owns the object when required.

## JIP reconstruction

Long-lived components publish registries or object variables. A joining client scans or refreshes those records to rebuild ACE actions, diary entries, labels and persistent effects. Fortify and Tickets also use CBA JIP events for specific object actions.

Transient effects—an already-playing cutscene, a one-shot explosion or a completed screen transition—are not historical state and are not replayed for a joining client.

## Test matrix

Every release candidate should test a host, dedicated server, normal client, JIP client, respawned client and reconnecting client. Test both enabled and disabled component configurations.
