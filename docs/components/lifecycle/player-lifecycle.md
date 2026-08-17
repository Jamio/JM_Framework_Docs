# Player Lifecycle

Player Lifecycle is the shared event pipeline for death and respawn. It prevents Tickets, Permadeath, Identities, Death Camera, Medical and Player Statistics from each maintaining incompatible killed/respawn handlers.

Mission makers normally do not configure this component directly. Other enabled modules subscribe to its local and server events.

The pipeline is designed around a new player object after respawn. Component handlers use per-unit guards to avoid duplicate event registration.
