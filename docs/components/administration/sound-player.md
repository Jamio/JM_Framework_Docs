# Sound Player

Sound Player exposes mission-defined audio to Zeus without requiring one trigger per sound.

Add sound classes to the mission's `CfgSounds`, using the supplied template when useful. The component appends them to the available Zeus sound list and integrates with the supported external sound player when that mod is loaded.

Sound definitions must exist in `description.ext` and their file paths must be valid on every client.
