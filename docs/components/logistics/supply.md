# Supply

Supply Points let players request mission-defined crates through a themed dialog. Crates may contain fixed cargo or ammunition derived from Arsenal/loadout data.

## Eden setup

1. Place one **[JMF] - Supply > Supply Settings** module.
2. Choose whether to include the built-in definitions.
3. If required, set the mission-relative definition file; the default is `supplies.hpp`.
4. Place a **Supply Point** module and synchronise it to the object players will use.
5. Configure its display name, allowed definition IDs, logistics-role restriction and world label.

## Generated ammunition

The generated ammunition crate can source compatible magazines from Arsenal definitions, registered starting loadouts or the current inventories of alive players. Quantity fields control each ammunition category.

## ACE carry and drag weight

**Ignore ACE Carry/Drag Weight** is enabled by default. Framework-spawned crates remain draggable and carryable regardless of their contents. The option bypasses ACE's weight limit; it does not change the crate's physical simulation mass.

## Zeus

Zeus can configure or remove Supply Points and spawn any loaded supply definition at the module position.

## Multiplayer

Crates are created and populated on the server. Supply Point actions rebuild for JIP clients and after Zeus reconfiguration.
