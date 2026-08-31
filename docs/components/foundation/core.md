# CORE

## Overview

Core establishes the common runtime and presentation layer used by the rest of JM Framework. It initialises the shared component registry, publishes authoritative mission settings and provides the events, utility functions and user-interface definitions that allow otherwise independent systems to work together. A mission can use only a selection of framework components, but Core supplies the stable foundation that lets each one discover whether its dependencies and settings are available.

The component also defines the framework's visual language. Mission-makers can select the broad dialog theme used by compatible interfaces, configure shared colours and fonts, and control common notification and world-label presentation. Modern, historical and science-fiction themes keep the functional control layouts consistent while changing the artwork behind them, allowing one mission framework to suit very different settings without duplicating every dialog.

To avoid filling the 3DEN module browser with tiny settings modules, Core Settings also contains configuration groups for several independent presentation and quality-of-life systems. This page documents the shared foundation and acts as an index for those groups; the behaviour and setup of each contained system is described on its own component page.

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
