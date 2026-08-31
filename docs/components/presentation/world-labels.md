# WORLD LABELS

## Overview

World Labels is the shared renderer for framework 3D text above interaction objects such as supply points, rally points and intel. Global appearance is controlled in Core, while each participating component controls its own label text, height and distance.

## How to set up the component

Place **[JMF] - Core > Core Settings** and configure **World Labels**. Then enable the label on each relevant object module.

## 3DEN Module Settings

### Core Settings — World Labels

| Attribute | Default | What it does |
| --- | --- | --- |
| Enable World Labels | Enabled | Master switch for framework 3D labels. |
| Use Core Title Font | Enabled | Uses the title font selected in Core Settings. |
| Font Override | `RobotoCondensed` | Font used only when the Core font option is disabled. |

Individual component modules provide their own **Show Label**, text, draw-distance and height attributes.

## ZEN Modules

World Labels has no standalone ZEN module. ZEN tools belonging to Supply, Intel, Fortify and other components include their own label options.

## Troubleshooting

- If every label is missing, check **Enable World Labels** in Core Settings.
- If only one label is missing, inspect that object's component module and its local label toggle.
- If text uses the wrong font, check **Use Core Title Font** before changing the override.
