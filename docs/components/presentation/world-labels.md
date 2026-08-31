# WORLD LABELS

## Overview

World Labels displays 3D text above framework interaction objects such as supply terminals, rally points and intel. They help players recognise objects that would otherwise look like ordinary scenery.

Core controls the shared appearance of the labels, while each component provides its own text, height and viewing distance. World Labels can be disabled when the mission should rely entirely on visual recognition. Player names are handled separately by Nametags.

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
