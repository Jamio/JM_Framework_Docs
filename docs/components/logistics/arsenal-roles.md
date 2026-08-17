# Arsenal and Roles

Arsenal supplies either a side-aware restricted ACE Arsenal or a role-picker dialog that applies complete mission-defined loadouts. The shared Roles service also limits concurrent slots and exposes traits to Rally, Redeploy, Supply and other components.

## Enable the component

Place one **[JMF] - Arsenal > Arsenal & Loadouts Settings** module and synchronize **Arsenal Object** modules to the props players will use.

## 3DEN modules

### Arsenal & Loadouts Settings

| Attribute group | Attribute | Default | What it does |
| --- | --- | --- | --- |
| System | Enable Arsenal System | Enabled | Master switch. |
| System | Arsenal Mode | Restricted Arsenal | Chooses filtered ACE Arsenal or the complete Role Loadout Picker. |
| Loadout Definitions | Definition Source | Built-in preset | Uses a framework preset or a mission file. |
| Loadout Definitions | Built-in Preset | `nato2035` | Preset used by the built-in source. |
| Loadout Definitions | Mission Definition File | `loadouts.hpp` | Mission-relative definitions used by the custom source. |
| Respawn Persistence | Respawn Save Policy | Framework default | Controls whether and when saved role/loadout state is restored after respawn. |

### Arsenal Object

Synchronize this module to each crate, terminal or prop that should open the configured system.

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Floating Text | Enabled | Shows a world label above synchronized objects. |
| Interaction / Label Name | JMF Arsenal | ACE action and label text. |

## Mission definitions

Mission definitions may provide global and side-specific restricted pools, complete role loadouts, framework traits and a concurrent slot limit. **Use exact Arma classnames and test every role on every permitted side.**{ .jmf-emphasis }

Role limits are server-approved. A player only receives the loadout after the server confirms that the slot remains available.

## Zeus modules

| ZEN module | Place on | Dialog options / result |
| --- | --- | --- |
| Configure Arsenal Access | A world object | Interaction/label name and floating world label. |
| Remove Arsenal Access | A registered object | Removes the ACE action and label. |
| Assign Unit Roles | A unit | Toggles Medical, Engineer, EOD, JTAC, Squad Leader, Platoon Leader, Pilot, Crewman and Logistics traits. |

## Multiplayer

The server owns active role claims and approves selection changes. The chosen loadout is applied on the owning client. Access objects and role state are synchronized for JIP and respawn according to the configured save policy.

## Troubleshooting

- If selecting a role reports success but applies nothing, validate the loadout expression and every classname in `loadouts.hpp`.
- If a role does not appear, check its side availability and slot limit.
- If weapon images appear stretched or previews clip, confirm the current themed Role Picker UI is loaded rather than a legacy mission dialog.
