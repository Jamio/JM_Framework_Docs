# Core

Core establishes the shared fonts, colours, dialog theme, world-label behaviour and runtime services used by the rest of JM Framework. It also maintains the component registry and creates the in-game Framework Status diary subject.

## Enable the component

Place exactly one **[JMF] - Core > Core Settings** module. 

**Mission that intends to use the JM Framework should contain this module.**{ .jmf-emphasis }

## 3DEN modules

### Core Settings

#### Framework Appearance

| Attribute | Default | What it does |
| --- | --- | --- |
| Text Font | `RobotoCondensed` | Define the font classname for body texts. |
| Title Font | `PuristaSemiBold` | Define the font classname for dialog titles, prominent headings, notifications and identity names. |
| Dialog Theme | Modern | Selects the background artwork that appears for certain dialogs. |
| Primary Text Colour | `#FFFFFF` | Defines the general text colour for the mission |
| Accent Colour | `#FFDB33` | Defines the colour for accent bars, subtitles, selected rows and highlighted text. |
| Warning Colour | `#FF9F1C` | Warnings and severe medical states. |
| Success Colour | `#66FF66` | Success feedback and stable medical states. |
| Failure Colour | `#FF5555` | Failure, unavailable and critical states. |

Use HTML hex colours including the leading `#`. Dialogs will query the Core module when opened, so these settings will propogate.

#### Framework Behaviour

| Attribute | Default | What it does |
| --- | --- | --- |
| Default Text Duration | `2` | Default duration for formatted framework screen text. |
| Debug Logging | Disabled | Adds detailed component diagnostics to the RPT. Only use for debugging. |

#### World Labels

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable World Labels | Enabled | Master switch for 3D Labels above framework components. |
| Use Core Title Font | Enabled | Defines whether the 3D Label use the configured core Title Font or not. |
| Font Override | `RobotoCondensed` | Used only when the Core font option is disabled to define a custom font. |

Individual component modules can still control their own label text, height and distance.

#### Player Statistics

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Player Statistics | Enabled | Records player statistics and data, ready for export to debrief or something else. |
| Track Travel Distance | Enabled | Enables foot and vehicle distance tracking. |
| Track Medical Activity | Enabled | Enables ACE treatments tracking. |

## Setup walkthrough

1. Place a **Core Settings** module in the 3DEN editor.
2. Choose a text font, title font and dialog theme.
3. Leave the accent and semantics colours alone unless you desperately want to change them to someting specific 
4. Leave world labels and statistics enabled unless the mission deliberately does not use them.
5. Enable debug logging only while diagnosings problems/testing.

## Zeus modules

Core has no ZEN modules.

## Multiplayer

Core publishes mission-wide settings and the component registry. Clients use those synchronized values when constructing dialogs, notifications, labels and diary entries. The Framework Status entry lists only components that report themselves active.

## Troubleshooting

- If dialogs use mixed fonts or themes, check for duplicate **Core Settings** modules.
- If a colour is ignored or doesnt appear to apply, check that you are using a six-digit HTML hex value with `#`.
- If labels are globally absent, check **Enable World Labels** is actually enabled, and not globally overwriting them per-object setups.
