# Dependencies

| Dependency | Purpose |
| --- | --- |
| Arma 3 | Base game and Eden/Curator systems |
| CBA_A3 | Function preparation, events and scheduled handlers |
| ACE3 | Interaction, medical, spectator, arsenal, fortify, cargo and dragging integrations |
| Zeus Enhanced | Runtime module dialogs and curator tools |

Some features integrate with optional mods when they are present. Optional integrations should degrade cleanly when the external mod is absent; the relevant component guide calls out exceptions.

!!! warning
    A mission may save successfully while still referencing content from an unloaded third-party mod. Test the exact server modset before release.
