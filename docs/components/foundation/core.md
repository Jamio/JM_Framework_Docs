# Core and Shared UI

Core establishes the shared fonts, colours, dialog theme, world-label behaviour and runtime services used by the rest of JM Framework. It also maintains the component registry and creates the in-game Framework Status diary subject.

## Enable the component

Place exactly one **[JMF] - Core > Core Settings** module. **Every framework mission should contain this module.**{ .jmf-emphasis }

## 3DEN modules

### Core Settings

#### Framework Appearance

| Attribute | Default | What it does |
| --- | --- | --- |
| Text Font | `RobotoCondensed` | Body text, lists, buttons and previews. |
| Title Font | `PuristaSemiBold` | Dialog titles, prominent headings, notifications and identity names. |
| Dialog Theme | Modern | Selects the Modern, WW2 or Sci-fi artwork while preserving control layout. |
| Primary Text Colour | `#FFFFFF` | Normal text and primary control text. |
| Accent Colour | `#FFDB33` | Accent bars, subtitles, selected rows and highlighted text. |
| Warning Colour | `#FF9F1C` | Warnings and severe medical states. |
| Success Colour | `#66FF66` | Success feedback and stable medical states. |
| Failure Colour | `#FF5555` | Failure, unavailable and critical states. |

Use HTML hex colours including the leading `#`. Dialogs query Core when opened, so the same values propagate across themed menus.

#### Framework Behaviour

| Attribute | Default | What it does |
| --- | --- | --- |
| Default Text Duration | `2` | Default duration for formatted framework screen text. |
| Debug Logging | Disabled | Adds verbose component diagnostics to the RPT. |

#### World Labels

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable World Labels | Enabled | Master switch for labels registered by all components. |
| Use Core Title Font | Enabled | Uses the configured Title Font for labels. |
| Font Override | `RobotoCondensed` | Used only when the Core font option is disabled. |

Individual component modules still control their own label text, height and distance. Labels respect component range and line-of-sight rules.

#### Player Statistics

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable Player Statistics | Enabled | Records the data consumed by Debriefing and future exports. |
| Track Travel Distance | Enabled | Enables foot and vehicle distance sampling. |
| Track Medical Activity | Enabled | Enables ACE treatment tracking. |

## Setup walkthrough

1. Place **Core Settings** before configuring other systems.
2. Choose a text font, title font and dialog theme.
3. Set the accent and semantic colours.
4. Leave world labels and statistics enabled unless the mission deliberately does not use them.
5. Enable debug logging only while diagnosing a problem.

## Zeus modules

Core has no ZEN module. Live control belongs to the component-specific ZEN categories.

## Multiplayer

Core publishes mission-wide settings and the component registry. Clients use those synchronized values when constructing dialogs, notifications, labels and diary entries. The Framework Status entry lists only components that report themselves active.

## Troubleshooting

- If dialogs use mixed fonts or themes, check for duplicate **Core Settings** modules.
- If a colour is ignored, use a six-digit HTML hex value with `#`.
- If labels are globally absent, check **Enable World Labels** before inspecting individual object modules.
