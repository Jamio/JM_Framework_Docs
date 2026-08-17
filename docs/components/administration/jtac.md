# JTAC

JTAC provides configurable fire-support requests through a themed terminal dialog.

Support definitions describe guns, rockets, bombs or artillery, including ammunition, impact pattern, timing, ingress direction and ambient aircraft flyby. Built-in presets cover common use while `jtac.hpp` supports mission-specific definitions.

Targets may be acquired by map click, grid, friendly-side smoke, optics or laser designation. Mission makers choose the allowed methods and whether JTAC starts enabled. Zeus can enable/disable the whole system and alter support availability during play.

The server validates and executes strikes. Test custom rocket and bomb ammunition because projectile flight behaviour varies by mod.
