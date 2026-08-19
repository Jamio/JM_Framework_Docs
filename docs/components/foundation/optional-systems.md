# OPTIONAL

The Optional Systems module is a collection of smaller features that (in my eyes) do not justify a completely separate 3DEN category. Each subsection has its own master toggle, so placing this module does not force every optional feature to run.

The smaller features include very tiny QOL things like a HUD-remover for screenshots, all the way up to grass-cutting, cinematic death cameras etc.

## How to set up the component

Place one **[JMF] - Core > Optional Systems** module in the 3DEN editor. Edit its attributes to enable the specific sub-components you want, and configure their individual settings.

## 3DEN Module Settings

### Optional Systems

#### Lightweight Systems

*These settings are simple enable/disable toggles for some minor systems.*

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Aid Station | Enabled | Adds deploy/remove Aid Station actions for eligible medical personnel. The aid station acts as a medical facility to boost training. |
| Enable Earplugs | Enabled | Adds insert/remove virtual earplug actions under ACE Equipment. |
| Disable Player Stamina | Enabled | Disables vanilla stamina and legacy fatigue at initialisation and respawn. |

#### Forestry

*These settings are for the forestry optional module which allows grass clearing, tree felling etc.*

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

*These settings control a few minor QOL functions. They probably could belong in the lightweight systems area but yolo.*

| Attribute | Default | What it does |
| --- | --- | --- |
| Hide ACE Arsenal Face and Voice Tabs | Enabled | Hides Face and Voice while leaving Insignia available. |
| Enable Screenshot Mode | Enabled | Adds ACE self-actions that hide HUD, chat and framework overlays until Escape restores them. |
| Enable Private Messages | Enabled | Adds a private-message panel to the Escape menu to contact Zeus/Admins. |
| Private Message Sound | Enabled | Plays a short sound for received messages. |

#### Nametags

*These settings control the Nametags framework system which displays nametags above players' heads.*

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

*These settings control the Unknown Weapons framework systems that can give negative effects for players using "unfamiliar" weapons systems.*

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

*These settings control the framework Identities system that can assign a thematic name and birth/death date to players. This is mainly used for the death camera. The system also includes a quote pool like the old Call of Duty death screens.*

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


## ZEN Modules

Optional Systems has no umbrella ZEN menu. Some contained systems expose their own live tools elsewhere but most are intentionally 3DEN controlled.


## Common Troubleshooting

* If an optional feature is absent, check both its master checkbox toggle and any addiitonal settings that might prevent it from appearing (such as required items etc.)
* If settings appear duplicated, remove legacy hidden settings modules from older test missions (this only really applies to myself for v1 testing as I have older versions of modules present in my testing files)
* If identities or the death camera do not run, enable both the relevant presentation and check that the selected identity pool is correct.
