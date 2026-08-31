# WORLD LABELS

## Overview

World Labels is the shared renderer for restrained 3D identification text above framework interaction objects. Supply terminals, rally points, intel and other systems often need a player to understand that an otherwise ordinary prop has a special purpose. A common renderer gives those objects a consistent visual language without every component installing its own permanent draw handler.

Core controls the global appearance, including broad text styling and visibility behaviour, while each participating component provides the actual label, height and useful viewing distance for its objects. Mission-makers can therefore keep labels subtle across the whole operation and still position an individual label correctly above a table, vehicle or document. Distance and visibility are evaluated locally so labels remain responsive and do not require continuous network updates.

The component identifies configured mission objects; it is not the player Nametags system and does not display medical or Zeus diagnostic state. Labels can be disabled globally or by the relevant feature when a more immersive, unmarked environment is preferred.

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
