# Optional

THe Optional module is a collection of smaller features that (in my eyes) do not justify a completely separate 3DEN category. Each subsection has its own master toggle, so placing this module does not force every optional feature to run.

## Enable the component

Place at most one **[JMF] - Core > Optional Systems** module and enable only the features needed by the mission.

## 3DEN modules

### Optional Systems

#### Lightweight Systems

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Aid Station | Enabled | Adds deploy/remove Aid Station actions for eligible medical personnel. The aid station acts as a medical facility to boost training. |
| Enable Earplugs | Enabled | Adds insert/remove virtual earplug actions under ACE Equipment. |
| Disable Player Stamina | Enabled | Disables vanilla stamina and legacy fatigue at initialisation and respawn. |

#### Forestry

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Forestry Tools | Disabled | Master switch for grass, bush and tree removal actions. |
| Enable Grass Clearing / Bush Clearing / Tree Felling | Enabled | Individually allows each of the above actions. |
| Require Forestry Tool | Enabled | Should forestry actions require a designated item? |
| Forestry Tool Classnames | `ACE_EntrenchingTool` | Comma-, space- or line-separated accepted tools. |
| Interaction Distance | `5` | Targeting distance for bushes and trees. |
| Grass / Bush / Tree Time | `5` / `10` / `30` | ACE progress durations in seconds. |
| Grass Clearing Size | `Land_ClutterCutter_medium_F` | Invisible clutter-cutter object placed by  the grass clearing action. |
| Remove Felled Trees | Enabled | Cleans up felled trees after the configured delay. |
| Felled Tree Cleanup Delay | `8` | Seconds before cleanup. |

#### Client Quality of Life

| Attribute | Default | What it does |
| --- | --- | --- |
| Hide ACE Arsenal Face and Voice Tabs | Enabled | Hides Face and Voice while leaving Insignia available. |
| Enable Screenshot Mode | Enabled | Adds ACE self-actions that hide HUD, chat and framework overlays until Escape restores them. |
| Enable Private Messages | Enabled | Adds a private-message panel to the Escape menu to contact Zeus/Admins. |
| Private Message Sound | Enabled | Plays a short sound for received messages. |

#### Nametags

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Nametags | Enabled | Master switch for nearby player names. |
| Visible Players | Own side | Limits visible names to players' group, side or everyone. |
| Maximum Distance / Fade Start | `15` / `8` | Draw range and fade beginning in metres. |
| Text Size | `0.035` | Nametag scale. |
| Use Core Text Font | Enabled | Use the text font defined in the Core module, otherwise uses the override. |
| Require Line of Sight | Enabled | Prevents labels through terrain and solid objects. |
| Show Players in Vehicles | Disabled | Shows player names for vehicle occupants. |

#### Unknown Weapons

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Unknown Weapon Penalties | Disabled | Master switch for unfamiliar-weapon behaviour. |
| Warn Player | Enabled | Shows an explanation message on the first shot using an 'unfamiliar' weapon. |
| Add Framework Diary Entry | Enabled | Adds the system explanation to the Framework diary subject. |
| Additional Allowed Weapons | Empty | Extra globally permitted weapon classnames. |
| Additional Dispersion | `25` | Dispersion penalty applied to an unfamiliar firearm. |
| Additional Jam Chance | `1.5%` | Extra ACE jam chance. |
| Reload Failure Chance | `25%` | Chance of a reload failure. |
| Catastrophic Failure Chance / Damage | `2%` / `0.2` | Chance and vanilla damage for the severe failure. |

#### Character Identities and Death Camera

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Character Identities | Disabled | Generates a new 'character' for each player life. |
| Default Identity Pool | `WW2_USA` | Base `CfgJMFIdentityPools` class used for the identities. |
| Side Pool Overrides | Empty | Optional BLUFOR, OPFOR, Independent and Civilian pool IDs. |
| Earliest / Latest Birth Year | `1910` / `1925` | Random birth-year range. |
| Mission / Death Year | `1944` | Year shown by identity presentation. Should be the year of the operation. |
| Death Presentation | Disabled | Chooses no presentation, identity, quote or combined mode. |
| Quotation Pool | Mixed | Serious, Fun or Mixed selection of quotes from the hardcoded pools. |
| Camera Rise Duration / Delay / Height | `8` / `2` / `10` | Cinematic camera timing and final height. |

## Setup walkthrough

1. Place one **Optional Systems** module.
2. Work through each subsection and disable features the mission does not use.
3. Configure the detailed fields only for enabled features.
4. Use the dedicated component guides for player behaviour and dependencies.

## Zeus modules

Optional Systems has no umbrella ZEN menu. Some contained systems expose their own live tools elsewhere but most are intentionally mission-author controlled.

## Multiplayer

Each component reads only its own subsection and registers handlers or actions when enabled. Stamina and other per-player behaviour is reapplied after respawn. Server-owned systems continue to validate requests independently.

## Troubleshooting

- If a lightweight feature remains absent, check both its master checkbox and any subordinate toggle.
- If settings appear duplicated, remove legacy hidden settings modules from older test missions (this only really applies to myself for v1)
- If identities or the death camera do not run, enable both the relevant presentation and check that the selected identity pool is correct.
