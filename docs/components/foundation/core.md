# CORE

## Overview

Core establishes the framework's shared runtime state and visual language. It supplies fonts, colours, dialog themes, notifications and the component registry used by the rest of JM Framework.

The Core Settings module also holds settings for several independent systems to keep the 3DEN module list manageable. Those systems are documented on their own pages.

## How to set up the component

Place one **[JMF] - Core > Core Settings** module and configure the framework appearance and behaviour.

**Every mission that uses JM Framework should contain exactly one Core Settings module.**{ .jmf-emphasis }

## 3DEN Module Settings

### Core Settings — Framework Appearance

| Attribute | Default | What it does |
| --- | --- | --- |
| Text Font | `RobotoCondensed` | Font classname used for normal framework text. |
| Title Font | `PuristaSemiBold` | Font classname used for dialog titles, prominent headings and identity names. |
| Dialog Theme | Modern | Selects Modern, WW2 or Sci-Fi background artwork for themed dialogs. |
| Primary Text Colour | `#FFFFFF` | General text colour. |
| Accent Colour | `#FFDB33` | Accent bars, subtitles, selected rows and highlighted text. |
| Warning Colour | `#FF9F1C` | Warnings and severe medical states. |
| Success Colour | `#66FF66` | Success feedback and stable states. |
| Failure Colour | `#FF5555` | Failure, unavailable and critical states. |

Use six-digit HTML hex colours including the leading `#`.

### Core Settings — Framework Behaviour

| Attribute | Default | What it does |
| --- | --- | --- |
| Default Text Duration | `2` | Default duration for formatted framework screen text. |
| Debug Logging | Disabled | Adds detailed component diagnostics to the RPT. Enable only when investigating a problem. |

### Independent systems configured in Core Settings

| Core Settings subsection | Component guide |
| --- | --- |
| Mission Control | [Mission Control](../administration/mission-control.md) |
| Safe Start | [Safe Start](safe-start.md) |
| Battlefield Cleanup | [Cleanup](cleanup.md) |
| World Labels | [World Labels](../presentation/world-labels.md) |
| Player Statistics | [Player Statistics](../lifecycle/player-stats.md) |

## ZEN Modules

Core has no generic ZEN module. Independent systems configured by Core register their own ZEN tools where applicable.

## Troubleshooting

- If framework dialogs use inconsistent themes or colours, check that only one Core Settings module is present.
- If a colour is ignored, use a six-digit HTML hex value beginning with `#`.
- Enable **Debug Logging** only while gathering diagnostic information; normal missions do not need it.
